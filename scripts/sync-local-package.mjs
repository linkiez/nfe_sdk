#!/usr/bin/env node
/**
 * Local synchronization of the SDK into its consumer (JCMserver3) without publishing.
 *
 * Development tool only: it must never be used by delivery builds, published images or
 * production. It copies the local build into the consumer `node_modules`, leaves a
 * `.local-sync.json` marker (checked by the consumer's `check:no-local-sdk` guard) and
 * does not touch the consumer `package.json` or lockfile.
 *
 * Exit codes: 0 success, 1 build/contract failure (nothing applied or revert failed),
 * 2 invalid arguments, 3 consumer or its node_modules not found.
 */
import { spawn, spawnSync } from 'node:child_process';
import {
  access,
  cp,
  mkdir,
  readFile,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_NAME = '@linkiez/nfe-sdk';
const PACKAGE_FILES = ['dist', 'package.json', 'README.md', 'LICENSE'];
const MARKER_FILE = '.local-sync.json';
const CONTRACT_EXPORT = 'publicPackageContract';
const TARGETS = {
  back: { description: 'JCMserver3', projectPath: '../JCMserver3' },
};

class ExitError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

function printHelp() {
  console.log(`
Uso:
  node scripts/sync-local-package.mjs [--target back] [--skip-build] [--revert]

Opcoes:
  --target back       Consumidor que recebe a copia local (unico suportado: back = JCMserver3).
  --skip-build        Reutiliza o dist atual sem executar npm run build.
  --revert            Remove a copia local e restaura a versao publicada (yarn install --check-cache).
  --sdk-root <dir>    Raiz do SDK (padrao: pasta deste script/..).
  --consumer-root <dir>  Raiz do consumidor (padrao: ../JCMserver3).
  --help              Exibe esta ajuda.

Saida: 0 sucesso | 1 falha de build/contrato/reversao | 2 argumentos invalidos | 3 consumidor ausente.
`);
}

/**
 * @param {string[]} argv
 * @returns {{target: string, skipBuild: boolean, revert: boolean, showHelp: boolean, sdkRoot?: string, consumerRoot?: string}}
 */
function parseArguments(argv) {
  const options = {
    target: 'back',
    skipBuild: false,
    revert: false,
    showHelp: false,
  };
  const valueOf = (name, index) => {
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new ExitError(2, `O argumento ${name} exige um valor`);
    }
    return value;
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--help' || argument === '-h') options.showHelp = true;
    else if (argument === '--skip-build') options.skipBuild = true;
    else if (argument === '--revert') options.revert = true;
    else if (argument === '--target') {
      options.target = valueOf(argument, index);
      index += 1;
    } else if (argument.startsWith('--target='))
      options.target = argument.slice(9);
    else if (argument === '--sdk-root') {
      options.sdkRoot = valueOf(argument, index);
      index += 1;
    } else if (argument === '--consumer-root') {
      options.consumerRoot = valueOf(argument, index);
      index += 1;
    } else throw new ExitError(2, `Argumento nao suportado: ${argument}`);
  }

  if (!(options.target in TARGETS)) {
    throw new ExitError(
      2,
      `Target invalido: ${options.target} (suportado: back)`,
    );
  }
  return options;
}

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit', shell: false });
    child.on('error', reject);
    child.on('close', (code) =>
      code === 0
        ? resolve()
        : reject(
            new Error(`Comando falhou com codigo ${code ?? 'desconhecido'}`),
          ),
    );
  });
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

/** Fails with code 3 unless the consumer project and its node_modules exist. */
async function assertConsumer(consumerRoot) {
  if (!(await exists(path.join(consumerRoot, 'package.json')))) {
    throw new ExitError(3, `Consumidor nao encontrado: ${consumerRoot}`);
  }
  if (!(await exists(path.join(consumerRoot, 'node_modules')))) {
    throw new ExitError(
      3,
      `node_modules ausente em ${consumerRoot}; execute yarn install antes`,
    );
  }
}

/** Pre-check: package files and public contract in `dist` (fails with code 1). */
async function assertPackageArtifacts(sdkRoot) {
  for (const file of PACKAGE_FILES) {
    if (!(await exists(path.join(sdkRoot, file)))) {
      throw new ExitError(1, `Arquivo obrigatorio ausente no SDK: ${file}`);
    }
  }
  const entry = path.join(sdkRoot, 'dist', 'index.js');
  const content = (await exists(entry)) ? await readFile(entry, 'utf8') : '';
  if (!content.includes(CONTRACT_EXPORT)) {
    throw new ExitError(
      1,
      `dist/index.js nao exporta ${CONTRACT_EXPORT}; o contrato publico e obrigatorio`,
    );
  }
}

function gitInfo(sdkRoot) {
  const git = (args) =>
    spawnSync('git', args, { cwd: sdkRoot, encoding: 'utf8' });
  const head = git(['rev-parse', 'HEAD']);
  if (head.status !== 0) return { gitCommit: null, gitDirty: false };
  const status = git(['status', '--porcelain']);
  return {
    gitCommit: head.stdout.trim(),
    gitDirty: status.status === 0 && status.stdout.trim() !== '',
  };
}

/**
 * Lists the installed production dependency closure of the SDK (absolute directories
 * inside `<sdkRoot>/node_modules`). Fails with code 1 when it cannot be resolved.
 */
function listProductionDependencies(sdkRoot) {
  const result = spawnSync(
    'npm',
    ['ls', '--omit=dev', '--all', '--parseable'],
    {
      cwd: sdkRoot,
      encoding: 'utf8',
    },
  );
  if (result.error || result.status !== 0) {
    throw new ExitError(
      1,
      'Dependencias de producao do SDK ausentes ou invalidas; execute npm ci no nfe_sdk antes de sincronizar',
    );
  }
  const modulesRoot = path.join(sdkRoot, 'node_modules') + path.sep;
  return [
    ...new Set(result.stdout.split('\n').map((line) => line.trim())),
  ].filter((entry) => entry.startsWith(modulesRoot));
}

async function applyToConsumer(sdkRoot, consumerRoot) {
  const targetPath = path.join(
    consumerRoot,
    'node_modules',
    ...PACKAGE_NAME.split('/'),
  );
  const sdkPackage = JSON.parse(
    await readFile(path.join(sdkRoot, 'package.json'), 'utf8'),
  );
  const dependencyDirectories = listProductionDependencies(sdkRoot);

  await rm(targetPath, { force: true, recursive: true });
  await mkdir(targetPath, { recursive: true });
  for (const file of PACKAGE_FILES) {
    const source = path.join(sdkRoot, file);
    await cp(source, path.join(targetPath, file), {
      recursive: (await stat(source)).isDirectory(),
    });
  }

  // The SDK is ESM with runtime dependencies the consumer does not declare while in local
  // mode; nesting them inside the package makes the import resolve.
  for (const directory of dependencyDirectories) {
    const relative = path.relative(
      path.join(sdkRoot, 'node_modules'),
      directory,
    );
    await cp(directory, path.join(targetPath, 'node_modules', relative), {
      recursive: true,
    });
  }

  const marker = {
    version: sdkPackage.version,
    ...gitInfo(sdkRoot),
    syncedAt: new Date().toISOString(),
    source: sdkRoot,
  };
  await writeFile(
    path.join(targetPath, MARKER_FILE),
    `${JSON.stringify(marker, null, 2)}\n`,
  );
  return { targetPath, marker };
}

async function revertConsumer(consumerRoot) {
  const targetPath = path.join(
    consumerRoot,
    'node_modules',
    ...PACKAGE_NAME.split('/'),
  );
  await rm(targetPath, { force: true, recursive: true });

  const [command, ...baseArgs] = (
    process.env.NFE_SDK_SYNC_YARN ?? 'yarn'
  ).split(' ');
  try {
    await runCommand(
      command,
      [...baseArgs, 'install', '--check-cache'],
      consumerRoot,
    );
  } catch (error) {
    throw new ExitError(
      1,
      `Falha ao restaurar a versao publicada: ${error.message}`,
    );
  }
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.showHelp) {
    printHelp();
    return;
  }

  const sdkRoot = path.resolve(
    options.sdkRoot ??
      path.join(path.dirname(fileURLToPath(import.meta.url)), '..'),
  );
  const consumerRoot = path.resolve(
    sdkRoot,
    options.consumerRoot ?? TARGETS[options.target].projectPath,
  );

  await assertConsumer(consumerRoot);

  if (options.revert) {
    await revertConsumer(consumerRoot);
    console.log(
      `Modo local removido; versao publicada de ${PACKAGE_NAME} restaurada em ${consumerRoot}.`,
    );
    return;
  }

  if (options.skipBuild) {
    console.log('Build ignorado por --skip-build.');
  } else {
    console.log('Executando build do nfe_sdk...');
    try {
      await runCommand('npm', ['run', 'build'], sdkRoot);
    } catch (error) {
      throw new ExitError(
        1,
        `Build do SDK falhou; nada foi aplicado. ${error.message}`,
      );
    }
  }

  await assertPackageArtifacts(sdkRoot);
  const { targetPath, marker } = await applyToConsumer(sdkRoot, consumerRoot);

  console.log(
    `${TARGETS[options.target].description}: modo local ativo — ${PACKAGE_NAME}@${marker.version} ` +
      `(origem ${marker.source}, ${marker.syncedAt}${marker.gitDirty ? ', arvore com alteracoes' : ''}) em ${targetPath}`,
  );
}

main().catch((error) => {
  console.error(
    error instanceof Error
      ? error.message
      : 'Falha desconhecida ao sincronizar o SDK',
  );
  process.exitCode = error instanceof ExitError ? error.code : 1;
});

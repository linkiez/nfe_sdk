import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

interface NpmPackFileEntry {
  path: string;
}

interface NpmPackEntry {
  filename: string;
  files: NpmPackFileEntry[];
}

interface SmokeProbeOutput {
  exportedKeys: string[];
  rootImportConsumable: boolean;
}

interface TarballValidationResult {
  consumedEntrypoint: string;
  exportedKeys: string[];
  publishedFiles: string[];
  rootImportConsumable: boolean;
  tarballName: string;
}

interface TarballValidationOptions {
  cwd?: string;
  fixturePackagePath?: string;
}

/**
 * Validates the packed npm artifact by installing the generated tarball into a temporary
 * consumer workspace and importing the published root entrypoint.
 *
 * @param options - Validation options for the working directory and consumer fixture.
 * @returns The tarball name, published files, and the smoke validation outcome.
 */
export async function validatePackageTarball(
  options: TarballValidationOptions = {},
): Promise<TarballValidationResult> {
  const cwd = options.cwd ?? process.cwd();
  const fixturePackagePath =
    options.fixturePackagePath ??
    resolve(cwd, 'tests/fixtures/package-root-consumer/package.json');

  await runCommand(npmCommand, ['run', 'build'], cwd);

  const packOutput = await runCommand(npmCommand, ['pack', '--json'], cwd);
  const [packEntry] = JSON.parse(packOutput) as NpmPackEntry[];
  const tarballPath = resolve(cwd, packEntry.filename);
  const consumerRoot = await mkdtemp(resolve(tmpdir(), 'nfe-sdk-tarball-'));

  try {
    const fixturePackageJson = await readFile(fixturePackagePath, 'utf8');
    await writeFile(resolve(consumerRoot, 'package.json'), fixturePackageJson);

    await runCommand(
      npmCommand,
      ['install', '--ignore-scripts', '--no-package-lock', tarballPath],
      consumerRoot,
    );

    const smokeScriptPath = resolve(consumerRoot, 'smoke.mjs');
    await writeFile(
      smokeScriptPath,
      [
        "import * as pkg from 'nfe-sdk';",
        "const exportedKeys = Object.keys(pkg).sort((left, right) => left.localeCompare(right));",
        "const result = {",
        "  exportedKeys,",
        "  rootImportConsumable: 'publicPackageContract' in pkg,",
        '};',
        'process.stdout.write(JSON.stringify(result));',
      ].join('\n'),
    );

    const smokeOutput = await runCommand(process.execPath, [smokeScriptPath], consumerRoot);
    const smokeProbe = JSON.parse(smokeOutput) as SmokeProbeOutput;

    return {
      consumedEntrypoint: 'nfe-sdk',
      exportedKeys: smokeProbe.exportedKeys,
      publishedFiles: packEntry.files
        .map((entry) => entry.path)
        .sort((left, right) => left.localeCompare(right)),
      rootImportConsumable: smokeProbe.rootImportConsumable,
      tarballName: packEntry.filename,
    };
  } finally {
    await rm(consumerRoot, { force: true, recursive: true });
    await rm(tarballPath, { force: true });
  }
}

/**
 * Executes a process without using a shell and returns its standard output.
 *
 * @param command - Executable name.
 * @param args - Command arguments.
 * @param cwd - Working directory for the process.
 * @returns The trimmed standard output captured from the command.
 */
async function runCommand(
  command: string,
  args: readonly string[],
  cwd: string,
): Promise<string> {
  const result = await execFileAsync(command, [...args], {
    cwd,
    encoding: 'utf8',
  });

  return result.stdout.trim();
}

/**
 * Executes the tarball validation as a CLI entrypoint.
 *
 * @returns A promise that resolves when the CLI output has been written.
 */
async function runTarballValidationCli(): Promise<void> {
  try {
    const result = await validatePackageTarball();
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown tarball validation error';
    process.stderr.write(`${message}\n`);
    process.exitCode = 1;
  }
}

if (process.argv[1]?.endsWith('validate-package-tarball.ts')) {
  runTarballValidationCli();
}
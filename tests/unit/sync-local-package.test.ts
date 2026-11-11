import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const SCRIPT = path.resolve(__dirname, '../../scripts/sync-local-package.mjs');
const PACKAGE_DIR = ['node_modules', '@linkiez', 'nfe-sdk'];

type Sandbox = {
  root: string;
  sdkRoot: string;
  consumerRoot: string;
};

function createSdk(
  sdkRoot: string,
  options: { contract?: boolean } = {},
): void {
  mkdirSync(path.join(sdkRoot, 'dist'), { recursive: true });
  writeFileSync(
    path.join(sdkRoot, 'package.json'),
    JSON.stringify({
      name: '@linkiez/nfe-sdk',
      version: '1.2.3',
      scripts: { build: 'node -e "process.exit(0)"' },
    }),
  );
  writeFileSync(path.join(sdkRoot, 'README.md'), '# sdk');
  writeFileSync(path.join(sdkRoot, 'LICENSE'), 'Apache-2.0');
  writeFileSync(
    path.join(sdkRoot, 'dist', 'index.js'),
    options.contract === false
      ? 'export const other = 1;\n'
      : 'export const publicPackageContract = {};\n',
  );
  writeFileSync(path.join(sdkRoot, 'dist', 'marker.txt'), 'built-v1');
}

function createSandbox(
  options: { consumer?: boolean; contract?: boolean } = {},
): Sandbox {
  const root = mkdtempSync(path.join(tmpdir(), 'nfe-sdk-sync-'));
  const sdkRoot = path.join(root, 'nfe_sdk');
  const consumerRoot = path.join(root, 'JCMserver3');
  createSdk(sdkRoot, { contract: options.contract });
  if (options.consumer !== false) {
    mkdirSync(path.join(consumerRoot, ...PACKAGE_DIR), { recursive: true });
    writeFileSync(
      path.join(consumerRoot, 'package.json'),
      '{"name":"jcmserver3"}',
    );
    writeFileSync(
      path.join(consumerRoot, ...PACKAGE_DIR, 'published.txt'),
      'published',
    );
  }
  return { root, sdkRoot, consumerRoot };
}

function run(
  sandbox: Sandbox,
  args: string[],
  env: Record<string, string> = {},
) {
  return spawnSync(
    process.execPath,
    [
      SCRIPT,
      '--sdk-root',
      sandbox.sdkRoot,
      '--consumer-root',
      sandbox.consumerRoot,
      ...args,
    ],
    { encoding: 'utf8', env: { ...process.env, ...env } },
  );
}

describe('sync-local-package script', () => {
  const sandboxes: Sandbox[] = [];
  const make = (options?: Parameters<typeof createSandbox>[0]) => {
    const sandbox = createSandbox(options);
    sandboxes.push(sandbox);
    return sandbox;
  };

  afterEach(() => {
    while (sandboxes.length > 0) {
      rmSync(sandboxes.pop()!.root, { recursive: true, force: true });
    }
  });

  it('copies dist, package.json, README and LICENSE and replaces the published package', () => {
    const sandbox = make();

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(0);
    const target = path.join(sandbox.consumerRoot, ...PACKAGE_DIR);
    expect(readFileSync(path.join(target, 'dist', 'marker.txt'), 'utf8')).toBe(
      'built-v1',
    );
    expect(existsSync(path.join(target, 'package.json'))).toBe(true);
    expect(existsSync(path.join(target, 'README.md'))).toBe(true);
    expect(existsSync(path.join(target, 'LICENSE'))).toBe(true);
    expect(existsSync(path.join(target, 'published.txt'))).toBe(false);
  });

  it('writes the .local-sync.json marker with version, git info, time and source', () => {
    const sandbox = make();

    run(sandbox, ['--skip-build']);

    const marker = JSON.parse(
      readFileSync(
        path.join(sandbox.consumerRoot, ...PACKAGE_DIR, '.local-sync.json'),
        'utf8',
      ),
    );
    expect(Object.keys(marker).sort()).toEqual(
      ['gitCommit', 'gitDirty', 'source', 'syncedAt', 'version'].sort(),
    );
    expect(marker.version).toBe('1.2.3');
    expect(marker.source).toBe(sandbox.sdkRoot);
    expect(Number.isNaN(Date.parse(marker.syncedAt))).toBe(false);
    expect(typeof marker.gitDirty).toBe('boolean');
    expect(
      marker.gitCommit === null || /^[0-9a-f]{40}$/.test(marker.gitCommit),
    ).toBe(true);
  });

  it('prints "modo local ativo" with version, source and time', () => {
    const sandbox = make();

    const result = run(sandbox, ['--skip-build']);

    expect(result.stdout).toContain('modo local ativo');
    expect(result.stdout).toContain('1.2.3');
    expect(result.stdout).toContain(sandbox.sdkRoot);
  });

  it('does not touch the consumer package.json or lockfile', () => {
    const sandbox = make();
    writeFileSync(path.join(sandbox.consumerRoot, 'yarn.lock'), 'lock-v1');

    run(sandbox, ['--skip-build']);

    expect(
      readFileSync(path.join(sandbox.consumerRoot, 'package.json'), 'utf8'),
    ).toBe('{"name":"jcmserver3"}');
    expect(
      readFileSync(path.join(sandbox.consumerRoot, 'yarn.lock'), 'utf8'),
    ).toBe('lock-v1');
  });

  it('runs the SDK build unless --skip-build is given', () => {
    const sandbox = make();
    writeFileSync(
      path.join(sandbox.sdkRoot, 'package.json'),
      JSON.stringify({
        name: '@linkiez/nfe-sdk',
        version: '1.2.3',
        scripts: {
          build: `node -e "require('fs').writeFileSync('dist/marker.txt','rebuilt')"`,
        },
      }),
    );

    const result = run(sandbox, []);

    expect(result.status).toBe(0);
    expect(
      readFileSync(
        path.join(sandbox.consumerRoot, ...PACKAGE_DIR, 'dist', 'marker.txt'),
        'utf8',
      ),
    ).toBe('rebuilt');
  });

  it('exits 1 and applies nothing when the build fails', () => {
    const sandbox = make();
    writeFileSync(
      path.join(sandbox.sdkRoot, 'package.json'),
      JSON.stringify({
        name: '@linkiez/nfe-sdk',
        version: '1.2.3',
        scripts: { build: 'node -e "process.exit(7)"' },
      }),
    );

    const result = run(sandbox, []);

    expect(result.status).toBe(1);
    const target = path.join(sandbox.consumerRoot, ...PACKAGE_DIR);
    expect(existsSync(path.join(target, 'published.txt'))).toBe(true);
    expect(existsSync(path.join(target, '.local-sync.json'))).toBe(false);
  });

  it('exits 1 and applies nothing when publicPackageContract is missing from dist', () => {
    const sandbox = make({ contract: false });

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('publicPackageContract');
    const target = path.join(sandbox.consumerRoot, ...PACKAGE_DIR);
    expect(existsSync(path.join(target, 'published.txt'))).toBe(true);
  });

  it('exits 1 when a required package file is missing', () => {
    const sandbox = make();
    rmSync(path.join(sandbox.sdkRoot, 'LICENSE'));

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('LICENSE');
  });

  it('copies the SDK production dependencies next to the package so the import resolves', () => {
    const sandbox = make();
    writeFileSync(
      path.join(sandbox.sdkRoot, 'package.json'),
      JSON.stringify({
        name: '@linkiez/nfe-sdk',
        version: '1.2.3',
        scripts: { build: 'node -e "process.exit(0)"' },
        dependencies: { 'fake-dep': '1.0.0' },
        devDependencies: { 'dev-only': '1.0.0' },
      }),
    );
    for (const [name, deps] of [
      ['fake-dep', { 'fake-transitive': '1.0.0' }],
      ['fake-transitive', {}],
      ['dev-only', {}],
    ] as const) {
      const dir = path.join(sandbox.sdkRoot, 'node_modules', name);
      mkdirSync(dir, { recursive: true });
      writeFileSync(
        path.join(dir, 'package.json'),
        JSON.stringify({ name, version: '1.0.0', dependencies: deps }),
      );
    }

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(0);
    const nested = path.join(
      sandbox.consumerRoot,
      ...PACKAGE_DIR,
      'node_modules',
    );
    expect(existsSync(path.join(nested, 'fake-dep', 'package.json'))).toBe(
      true,
    );
    expect(
      existsSync(path.join(nested, 'fake-transitive', 'package.json')),
    ).toBe(true);
    expect(existsSync(path.join(nested, 'dev-only'))).toBe(false);
  });

  it('exits 1 and applies nothing when production dependencies are not installed in the SDK', () => {
    const sandbox = make();
    writeFileSync(
      path.join(sandbox.sdkRoot, 'package.json'),
      JSON.stringify({
        name: '@linkiez/nfe-sdk',
        version: '1.2.3',
        scripts: { build: 'node -e "process.exit(0)"' },
        dependencies: { 'missing-dep': '1.0.0' },
      }),
    );

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('npm ci');
    expect(
      existsSync(
        path.join(sandbox.consumerRoot, ...PACKAGE_DIR, 'published.txt'),
      ),
    ).toBe(true);
  });

  it('exits 2 for unknown arguments and for unsupported targets', () => {
    const sandbox = make();

    expect(run(sandbox, ['--bogus']).status).toBe(2);
    expect(run(sandbox, ['--target', 'front']).status).toBe(2);
    expect(run(sandbox, ['--target']).status).toBe(2);
  });

  it('accepts --target back explicitly', () => {
    const sandbox = make();

    expect(run(sandbox, ['--target', 'back', '--skip-build']).status).toBe(0);
  });

  it('exits 3 when the consumer project is missing', () => {
    const sandbox = make({ consumer: false });

    const result = run(sandbox, ['--skip-build']);

    expect(result.status).toBe(3);
  });

  it('exits 3 when the consumer has no node_modules', () => {
    const sandbox = make();
    rmSync(path.join(sandbox.consumerRoot, 'node_modules'), {
      recursive: true,
    });

    expect(run(sandbox, ['--skip-build']).status).toBe(3);
  });

  it('prints usage with --help and exits 0', () => {
    const sandbox = make();

    const result = run(sandbox, ['--help']);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('--revert');
    expect(result.stdout).toContain('--skip-build');
  });

  describe('--revert', () => {
    it('removes the local package and marker, then reinstalls with yarn --check-cache', () => {
      const sandbox = make();
      run(sandbox, ['--skip-build']);
      const log = path.join(sandbox.root, 'yarn.log');
      const fakeYarn = path.join(sandbox.root, 'fake-yarn.js');
      writeFileSync(
        fakeYarn,
        `require('fs').writeFileSync(${JSON.stringify(log)}, process.argv.slice(2).join(' ') + '|' + process.cwd());`,
      );

      const result = run(sandbox, ['--revert'], {
        NFE_SDK_SYNC_YARN: `${process.execPath} ${fakeYarn}`,
      });

      expect(result.status).toBe(0);
      expect(existsSync(path.join(sandbox.consumerRoot, ...PACKAGE_DIR))).toBe(
        false,
      );
      const [args, cwd] = readFileSync(log, 'utf8').split('|');
      expect(args).toBe('install --check-cache');
      expect(cwd).toBe(sandbox.consumerRoot);
    });

    it('does not build and does not require the SDK dist', () => {
      const sandbox = make();
      run(sandbox, ['--skip-build']);
      rmSync(path.join(sandbox.sdkRoot, 'dist'), { recursive: true });

      const result = run(sandbox, ['--revert'], { NFE_SDK_SYNC_YARN: 'true' });

      expect(result.status).toBe(0);
    });

    it('exits 1 when the reinstall fails', () => {
      const sandbox = make();
      run(sandbox, ['--skip-build']);

      const result = run(sandbox, ['--revert'], { NFE_SDK_SYNC_YARN: 'false' });

      expect(result.status).toBe(1);
    });

    it('exits 3 when the consumer is missing', () => {
      const sandbox = make({ consumer: false });

      expect(
        run(sandbox, ['--revert'], { NFE_SDK_SYNC_YARN: 'true' }).status,
      ).toBe(3);
    });
  });
});

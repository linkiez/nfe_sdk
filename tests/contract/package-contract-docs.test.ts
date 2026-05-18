import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('package contract documentation', () => {
  it('documents the same minimum root export that the package contract probes expect', () => {
    const readme = readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');

    expect(readme).toContain(
      "import { publicPackageContract } from 'nfe-sdk';",
    );
    expect(readme).toContain('`publicPackageContract`');
    expect(readme).toContain('`manifest.json` permanece interno');
    expect(readme).not.toContain('export * from');
  });
});

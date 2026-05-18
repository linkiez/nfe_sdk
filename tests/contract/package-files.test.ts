import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('published package files', () => {
  it('keeps the package metadata focused on the root contract and validation helpers', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
    ) as {
      exports?: Record<string, unknown>;
      files?: string[];
      scripts?: Record<string, string>;
    };

    expect(Object.keys(packageJson.exports ?? {})).toEqual(['.']);
    expect(packageJson.files).toEqual(['dist', 'README.md']);
    expect(packageJson.scripts).toEqual(
      expect.objectContaining({
        'audit:public-contract': expect.any(String),
        build: expect.any(String),
        'validate:tarball': expect.any(String),
      }),
    );
  });
});

import { validatePackageTarball } from '../../tools/validate-package-tarball';

describe('package tarball smoke validation', () => {
  it('consumes the packed root entrypoint without relying on the open workspace', async () => {
    const result = await validatePackageTarball();

    expect(result.rootImportConsumable).toBe(true);
    expect(result.exportedKeys).toEqual(['publicPackageContract']);
    expect(result.publishedFiles).toEqual(
      expect.arrayContaining(['README.md', 'dist/index.d.ts', 'dist/index.js']),
    );
  }, 300000);
});

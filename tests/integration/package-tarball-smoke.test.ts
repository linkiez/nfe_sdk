import { validatePackageTarball } from '../../tools/validate-package-tarball';

describe('package tarball smoke validation', () => {
  it('consumes the packed root entrypoint without relying on the open workspace', async () => {
    const result = await validatePackageTarball();

    expect(result.rootImportConsumable).toBe(true);
    expect(result.exportedKeys).toEqual([
      'createEnviNFe',
      'createNFe',
      'publicPackageContract',
      'serializeEnviNFeXml',
      'serializeNFeXml',
    ]);
    expect(result.publishedFiles).toEqual(
      expect.arrayContaining([
        'README.md',
        'dist/canonical/facade/create-envi-nfe.d.ts',
        'dist/canonical/facade/create-nfe.d.ts',
        'dist/canonical/facade/serialize-envi-nfe-xml.d.ts',
        'dist/canonical/facade/serialize-nfe-xml.d.ts',
        'dist/index.d.ts',
        'dist/index.js',
      ]),
    );
  }, 300000);
});

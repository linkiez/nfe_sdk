import { validatePackageTarball } from '../../tools/validate-package-tarball';

describe('package tarball smoke validation', () => {
  it('consumes the packed root entrypoint without relying on the open workspace', async () => {
    const result = await validatePackageTarball();

    expect(result.rootImportConsumable).toBe(true);
    expect(result.exportedKeys).toEqual([
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'executeNFeSoapService',
      'publicPackageContract',
      'resolveNFeServiceEndpoint',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
    ]);
    expect(result.publishedFiles).toEqual(
      expect.arrayContaining([
        'README.md',
        'dist/canonical/facade/create-envi-nfe.d.ts',
        'dist/canonical/facade/create-nfe.d.ts',
        'dist/canonical/facade/create-signing-context.d.ts',
        'dist/canonical/facade/execute-nfe-soap-service.d.ts',
        'dist/canonical/facade/resolve-nfe-service-endpoint.d.ts',
        'dist/canonical/facade/serialize-envi-nfe-xml.d.ts',
        'dist/canonical/facade/serialize-nfe-xml.d.ts',
        'dist/canonical/facade/sign-nfe-xml.d.ts',
        'dist/index.d.ts',
        'dist/index.js',
      ]),
    );
  }, 300000);
});

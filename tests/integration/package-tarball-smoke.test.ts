import { validatePackageTarball } from '../../tools/validate-package-tarball';

describe('package tarball smoke validation', () => {
  it('consumes the packed root entrypoint without relying on the open workspace', async () => {
    const result = await validatePackageTarball();

    expect(result.rootImportConsumable).toBe(true);
    expect(result.exportedKeys).toEqual([
      'authorizeNFCe',
      'authorizeNFe',
      'cancelNFe',
      'changeManifestRecipientOperation',
      'computeHashCSRT',
      'computeNFeAccessKey',
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'manifestRecipientOperation',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'resolveUFAutorizador',
      'retrieveNFeAuthorizationBatch',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
      'submitEPECEvent',
      'submitGenericEvents',
      'submitICMSDeferralEvent',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
      'validateNFeXsd',
    ]);
    expect(result.publishedFiles).toEqual(
      expect.arrayContaining([
        'README.md',
        'dist/canonical/facade/authorize-nfce.d.ts',
        'dist/canonical/facade/cancel-nfe.d.ts',
        'dist/canonical/facade/create-envi-nfe.d.ts',
        'dist/canonical/facade/create-nfe.d.ts',
        'dist/canonical/facade/create-signing-context.d.ts',
        'dist/canonical/facade/distribute-recipient-dfe.d.ts',
        'dist/canonical/facade/execute-nfe-soap-service.d.ts',
        'dist/canonical/facade/manifest-recipient-operation.d.ts',
        'dist/canonical/facade/query-nfe-document-situation.d.ts',
        'dist/canonical/facade/query-nfe-service-status.d.ts',
        'dist/canonical/facade/resolve-nfe-service-endpoint.d.ts',
        'dist/canonical/facade/serialize-envi-nfe-xml.d.ts',
        'dist/canonical/facade/serialize-nfe-xml.d.ts',
        'dist/canonical/facade/sign-nfe-xml.d.ts',
        'dist/canonical/facade/submit-generic-events.d.ts',
        'dist/canonical/facade/submit-nfe-correction-letter.d.ts',
        'dist/canonical/facade/submit-nfe-inutilization.d.ts',
        'dist/index.d.ts',
        'dist/index.js',
      ]),
    );
  }, 300000);
});

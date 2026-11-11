import * as publicApi from '../../src/index';

describe('root transport facade contract', () => {
  it('publishes the initial SOAP transport facade from the root entrypoint', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
      'assertRuntimeDependencies',
      'authorizeNFCe',
      'authorizeNFe',
      'buildNFeDocument',
      'BuildNFeDocumentError',
      'cancelNFe',
      'changeManifestRecipientOperation',
      'checkRuntimeDependencies',
      'computeHashCSRT',
      'computeNFeAccessKey',
      'createEnviNFe',
      'createMutualTlsRequestExecutor',
      'createNFe',
      'createSigningContext',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'generateNFCeSPQRCode',
      'manifestRecipientOperation',
      'prepareNFCeSigningPrerequisites',
      'prepareNFCeSPOffline',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'reconcileNFCeSPOffline',
      'reconcileNFeReceipt',
      'renderNFCeSPDANFE',
      'renderNFeDANFE',
      'resolveNFeServiceEndpoint',
      'resolveUFAutorizador',
      'retrieveNFeAuthorizationBatch',
      'retrieveRecipientDocument',
      'RuntimeDependencyError',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signEventXml',
      'signNFeXml',
      'submitEPECEvent',
      'submitGenericEvents',
      'submitICMSDeferralEvent',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
      'validateNFeXsd',
    ]);
  });

  it('keeps transport internals and generated trees outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('enums');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('manifest');
    expect(publicApi).not.toHaveProperty('transport');
    expect(publicApi).not.toHaveProperty('types');
  });
});

import * as publicApi from '../../src/index';

describe('root functional facade contract', () => {
  it('publishes the canonical creation facade without exposing generated trees', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
      'assertRuntimeDependencies',
      'authorizeNFCe',
      'authorizeNFe',
      'buildNFCeDocument',
      'BuildNFCeDocumentError',
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
      'distributeMDFe',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'generateNFCeSPQRCode',
      'getNFCeAcceptedFiscalCodes',
      'isNFCeResendWindowOpen',
      'manifestRecipientOperation',
      'MDFeDamdfeUsageError',
      'MDFeParseError',
      'MDFeTransportError',
      'parseMDFeXml',
      'prepareNFCeSigningPrerequisites',
      'prepareNFCeSPOffline',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryMDFeByAccessKey',
      'queryMDFeNotClosed',
      'queryMDFeServiceStatus',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'reconcileNFCeSPOffline',
      'reconcileNFeReceipt',
      'remountNFCeDocument',
      'renderDAMDFE',
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
      'validateMDFeXml',
      'validateNFeXsd',
    ]);

    expect(typeof publicApi.authorizeNFCe).toBe('function');
  });

  it('keeps generated trees and subpaths outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
    expect(publicApi).not.toHaveProperty('manifest');
  });
});

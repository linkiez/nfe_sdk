import * as publicApi from '../../src/index';
import type {
  NFCeAuthorizationOutcome,
  NFCeAuthorizationRequest,
} from '../../src/canonical/nfce/contracts';

describe('public nfce operational facade contract', () => {
  it('publishes the first NFC-e operational facade from the root entrypoint', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
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
      'generateNFCeSPQRCode',
      'manifestRecipientOperation',
      'prepareNFCeSigningPrerequisites',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'reconcileNFeReceipt',
      'resolveNFeServiceEndpoint',
      'resolveUFAutorizador',
      'retrieveNFeAuthorizationBatch',
      'retrieveRecipientDocument',
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

  it('keeps NFC-e implementation modules outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('nfce');
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
  });

  it('adds CSC input and QR URL output without changing root exports', () => {
    const requestContract: Pick<NFCeAuthorizationRequest, 'csc'> = {
      csc: { cscId: '000002', cscToken: 'test-token' },
    };
    const outcomeContract: Pick<NFCeAuthorizationOutcome, 'qrCodeUrl'> = {
      qrCodeUrl: 'https://example.invalid/qr',
    };

    expect(requestContract.csc?.cscId).toBe('000002');
    expect(outcomeContract.qrCodeUrl).toContain('/qr');
    expect(Object.keys(publicApi)).toContain('authorizeNFCe');
    expect(Object.keys(publicApi)).toContain('generateNFCeSPQRCode');
    expect(outcomeContract).not.toHaveProperty('cscToken');
  });
});

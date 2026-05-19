import { publicPackageContract } from '../../src/index';

describe('root contract boundary', () => {
  it('documents the root import as the only stable entrypoint in this phase', () => {
    expect(publicPackageContract.rootEntrypoint).toEqual({
      exportedNames: [
        'publicPackageContract',
        'authorizeNFCe',
        'authorizeNFe',
        'cancelNFe',
        'createNFe',
        'createEnviNFe',
        'createSigningContext',
        'distributeRecipientDFe',
        'manifestRecipientOperation',
        'queryNFeDocumentSituation',
        'queryNFeServiceStatus',
        'resolveNFeServiceEndpoint',
        'executeNFeSoapService',
        'serializeNFeXml',
        'serializeEnviNFeXml',
        'signNFeXml',
        'submitGenericEvents',
        'submitNFeCorrectionLetter',
        'submitNFeInutilization',
      ],
      importSpecifier: 'nfe-sdk',
      path: '.',
      stableSurface: 'root-import',
    });
    expect(publicPackageContract.documentedSurface).toEqual([
      'publicPackageContract',
      'authorizeNFCe',
      'authorizeNFe',
      'cancelNFe',
      'createNFe',
      'createEnviNFe',
      'createSigningContext',
      'distributeRecipientDFe',
      'manifestRecipientOperation',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'executeNFeSoapService',
      'serializeNFeXml',
      'serializeEnviNFeXml',
      'signNFeXml',
      'submitGenericEvents',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
    ]);
  });

  it('captures compatibility notes for future contract expansion', () => {
    expect(publicPackageContract.compatibilityNotes).toEqual(
      expect.arrayContaining([
        'Only the root import is stable in this phase.',
        'The initial functional facade is limited to canonical NFe and enviNFe creation, deterministic XML serialization, the first additive digital-signing slice, the first additive SOAP transport slice, and the first additive operational authorization facade in this phase.',
        'The digital-signing slice signs only NFe XML and keeps enviNFe as an unsigned transport envelope in this phase.',
        'The SOAP transport slice covers only homologation, shared SVAN endpoints, and the initial status-service and authorization operations in this phase.',
        'The first operational NFe slice currently exposes authorizeNFe, queryNFeServiceStatus, queryNFeDocumentSituation, submitNFeInutilization, cancelNFe, and submitNFeCorrectionLetter for homologation workflows on top of the canonical, signing, and transport layers.',
        'The first NFC-e slice currently exposes authorizeNFCe as an additive root facade for homologation-only single-document authorization through the SP pilot profile while broader state coverage remains deferred.',
        'The first NFC-e slice returns unsupported-state before transport when the inferred UF stays outside the published SP pilot.',
        'The first NFC-e slice accepts requestedCapabilities only as an explicit marker for deferred operational surfaces and returns unsupported-scope before transport for QR Code, DANFE NFC-e, CSC administration, automatic credentialing, or offline contingency.',
        'The first recipient slice currently exposes distributeRecipientDFe and manifestRecipientOperation for homologation-only recipient workflows via distNSU and the four basic manifestation events, while keeping later document retrieval separate.',
        'The first generic-event slice currently exposes submitGenericEvents for homologation-only submission of the supported 110130, 110150, 110192, and 110750 families through one root facade.',
        'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
      ]),
    );
  });
});

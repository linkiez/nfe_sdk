import * as publicApi from '../../src/index';

describe('root nfe operational facade contract', () => {
  it('publishes the first operational NFe facade from the root entrypoint', () => {
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

  it('keeps operational internals and generated trees outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('nfe');
    expect(publicApi).not.toHaveProperty('transport');
    expect(publicApi).not.toHaveProperty('manifest');
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
  });

  it('documents explicit state-operation boundaries in the public package contract', () => {
    expect(publicApi.publicPackageContract.compatibilityNotes).toContain(
      'The NFe receipt-protocol slice now adds reconcileNFeReceipt as a dedicated root facade for one-shot reconciliation of known nRec values while keeping generic polling, multi-document reconciliation, local persistence, and dominant UF variance outside the root contract.',
    );
    expect(publicApi.publicPackageContract.repositoryEvidence).toContain(
      'specs/021-nfe-receipt-protocol/contracts/public-nfe-receipt-protocol-facade.md',
    );
    expect(publicApi.publicPackageContract.operationalBoundaries).toEqual([
      expect.objectContaining({ boundaryId: 'receipt-polling' }),
      expect.objectContaining({ boundaryId: 'multi-document-reconciliation' }),
      expect.objectContaining({ boundaryId: 'local-persistence' }),
      expect.objectContaining({ boundaryId: 'uf-variance' }),
    ]);
  });
});

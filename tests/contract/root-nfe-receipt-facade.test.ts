import * as publicApi from '../../src/index';

describe('root nfe receipt facade contract', () => {
  it('publishes reconcileNFeReceipt as an additive root capability', () => {
    expect(publicApi).toHaveProperty('reconcileNFeReceipt');
    expect(typeof publicApi.reconcileNFeReceipt).toBe('function');
    expect(publicApi.publicPackageContract.documentedSurface).toContain(
      'reconcileNFeReceipt',
    );
  });

  it('documents the remaining receipt boundary as generic polling rather than one-shot reconciliation', () => {
    expect(publicApi.publicPackageContract.compatibilityNotes).toContain(
      'The NFe receipt-protocol slice now adds reconcileNFeReceipt as a dedicated root facade for one-shot reconciliation of known nRec values while keeping generic polling, multi-document reconciliation, local persistence, and dominant UF variance outside the root contract.',
    );
    expect(publicApi.publicPackageContract.operationalBoundaries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ boundaryId: 'receipt-polling' }),
      ]),
    );
  });
});

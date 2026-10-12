import { reconcileNFCeSPOffline } from '../../src/index.js';
import type {
  NFCeSPOfflineReconciliationClassification,
  NFCeSPOfflineReconciliationResult,
  ReconcileNFCeSPOfflineInput,
} from '../../src/index.js';

describe('public offline NFC-e reconciliation contract', () => {
  it('exports one-attempt inputs and explicit non-authorized outcomes', () => {
    const classifications = {
      authorized: true,
      'deadline-expired': true,
      duplicate: true,
      inconclusive: true,
      received: true,
      rejected: true,
      timeout: true,
      unavailable: true,
    } satisfies Record<NFCeSPOfflineReconciliationClassification, true>;
    const input: Pick<ReconcileNFCeSPOfflineInput, 'timeoutMs'> = {
      timeoutMs: 5000,
    };
    const received: Pick<
      NFCeSPOfflineReconciliationResult,
      'classification' | 'operatorActionRequired'
    > = {
      classification: 'received',
      operatorActionRequired: false,
    };
    const duplicate: Pick<
      NFCeSPOfflineReconciliationResult,
      'classification' | 'operatorActionRequired'
    > = {
      classification: 'duplicate',
      operatorActionRequired: true,
    };

    expect(typeof reconcileNFCeSPOffline).toBe('function');
    expect(Object.keys(classifications).sort()).toEqual([
      'authorized',
      'deadline-expired',
      'duplicate',
      'inconclusive',
      'received',
      'rejected',
      'timeout',
      'unavailable',
    ]);
    expect(input.timeoutMs).toBe(5000);
    expect(received.classification).toBe('received');
    expect(duplicate.operatorActionRequired).toBe(true);
  });
});

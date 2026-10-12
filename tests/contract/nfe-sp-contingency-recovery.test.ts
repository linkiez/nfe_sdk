import * as publicApi from '../../src/index';
import type {
  NFeRecoveryContext,
  NFeRecoveryState,
  NFeReceiptReconciliationResult,
} from '../../src/index';

describe('NF-e SP contingency recovery root contract', () => {
  it('preserves explicit EPEC correlation and recovery state in public outcomes', () => {
    const recoveryContext: NFeRecoveryContext = {
      documentKey: '35260112345678000195550010000000011000000014',
      eventProtocol: '135260000000001',
      mode: 'epec',
    };
    const result: Pick<
      NFeReceiptReconciliationResult,
      | 'contingencyState'
      | 'eventProtocol'
      | 'executionMode'
      | 'recoveryContext'
      | 'recoveryState'
    > = {
      contingencyState: 'reconciled',
      eventProtocol: recoveryContext.eventProtocol,
      executionMode: recoveryContext.mode,
      recoveryContext,
      recoveryState: 'reconciled' satisfies NFeRecoveryState,
    };

    expect(publicApi.authorizeNFe).toEqual(expect.any(Function));
    expect(publicApi.reconcileNFeReceipt).toEqual(expect.any(Function));
    expect(result.recoveryContext).toEqual(recoveryContext);
    expect(result.recoveryState).toBe('reconciled');
  });
});

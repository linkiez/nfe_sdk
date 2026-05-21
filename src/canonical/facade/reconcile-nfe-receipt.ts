import {
  reconcileNFeReceipt as reconcileInternalNFeReceipt,
} from '../nfe/reconcile-nfe-receipt.js';
import type {
  NFeReceiptReconciliationRequest,
  NFeReceiptReconciliationResult,
} from '../nfe/contracts.js';

/**
 * Public root-facade function that reconciles a known NF-e receipt number.
 *
 * @param input - Structured receipt reconciliation request provided by the integrator.
 * @returns Structured receipt reconciliation result.
 */
export async function reconcileNFeReceipt(
  input: NFeReceiptReconciliationRequest,
): Promise<NFeReceiptReconciliationResult> {
  return reconcileInternalNFeReceipt(input);
}
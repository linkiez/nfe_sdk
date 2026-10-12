import type { NFeAuthorizationOutcome } from '../nfe/contracts.js';

import type { NFCeAuthorizationOutcome } from './contracts.js';

/**
 * Maps the shared NFe authorization outcome into the public NFC-e outcome shape.
 *
 * @param outcome - Structured NFe authorization outcome reused by the NFC-e slice.
 * @param qrCodeUrl - Optional URL associated with the same authorized document and environment.
 * @returns Structured NFC-e authorization outcome exposed by the root facade.
 */
export function mapNFCeAuthorizationOutcome(
  outcome: NFeAuthorizationOutcome,
  qrCodeUrl?: string,
): NFCeAuthorizationOutcome {
  return {
    acceptedForTransport: true,
    classification: outcome.classification,
    protocolNumber: outcome.protocolNumber,
    ...(outcome.classification === 'authorized' && qrCodeUrl !== undefined
      ? { qrCodeUrl }
      : {}),
    ...(outcome.classification === 'received' &&
    outcome.nextAction === 'reconcileNFeReceipt'
      ? { nextAction: outcome.nextAction }
      : {}),
    receiptNumber: outcome.receiptNumber,
    transportOutcome: outcome.transportOutcome,
    validationFailures: [],
  };
}
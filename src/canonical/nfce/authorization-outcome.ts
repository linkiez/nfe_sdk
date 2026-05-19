import type { NFeAuthorizationOutcome } from '../nfe/contracts.js';

import type { NFCeAuthorizationOutcome } from './contracts.js';

/**
 * Maps the shared NFe authorization outcome into the public NFC-e outcome shape.
 *
 * @param outcome - Structured NFe authorization outcome reused by the NFC-e slice.
 * @returns Structured NFC-e authorization outcome exposed by the root facade.
 */
export function mapNFCeAuthorizationOutcome(
  outcome: NFeAuthorizationOutcome,
): NFCeAuthorizationOutcome {
  return {
    acceptedForTransport: true,
    classification: outcome.classification,
    protocolNumber: outcome.protocolNumber,
    receiptNumber: outcome.receiptNumber,
    transportOutcome: outcome.transportOutcome,
    validationFailures: [],
  };
}
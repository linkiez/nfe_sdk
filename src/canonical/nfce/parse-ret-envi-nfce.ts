import type { NFeAuthorizationOutcome } from '../nfe/contracts.js';

import { mapNFCeAuthorizationOutcome } from './authorization-outcome.js';
import type { NFCeAuthorizationOutcome } from './contracts.js';

/**
 * Maps the shared NFe authorization outcome into the first NFC-e public outcome shape.
 *
 * @param outcome - Structured NFe authorization outcome reused by the NFC-e slice.
 * @returns Structured NFC-e outcome exposed by the root facade.
 */
export function parseRetEnviNFCe(
  outcome: NFeAuthorizationOutcome,
): NFCeAuthorizationOutcome {
  return mapNFCeAuthorizationOutcome(outcome);
}
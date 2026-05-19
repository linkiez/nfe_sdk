import { authorizeNFCe as authorizeInternalNFCe } from '../nfce/authorize-nfce.js';
import type {
  NFCeAuthorizationOutcome,
  NFCeAuthorizationRequest,
} from '../nfce/contracts.js';

/**
 * Public root-facade function that authorizes a supported NFC-e submission.
 *
 * @param input - Structured NFC-e authorization request provided by the integrator.
 * @returns Structured NFC-e authorization outcome for the attempted submission.
 */
export async function authorizeNFCe(
  input: NFCeAuthorizationRequest,
): Promise<NFCeAuthorizationOutcome> {
  return authorizeInternalNFCe(input);
}
import { prepareNFCeSigningPrerequisites as prepareInternalNFCeSigningPrerequisites } from '../nfce/prepare-signing-prerequisites.js';
import type {
  NFCeSigningPrerequisitesInput,
  NFCeSigningPrerequisitesResult,
} from '../nfce/contracts.js';

/**
 * Public root-facade function that prepares NFC-e signing prerequisites.
 *
 * @param input - Structured prerequisite inputs provided by the integrator.
 * @returns Structured bundle with derived identifiers and deferred dependencies.
 */
export function prepareNFCeSigningPrerequisites(
  input: NFCeSigningPrerequisitesInput,
): NFCeSigningPrerequisitesResult {
  return prepareInternalNFCeSigningPrerequisites(input);
}
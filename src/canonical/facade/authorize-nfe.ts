import { authorizeNFe as authorizeInternalNFe } from '../nfe/authorize-nfe.js';
import type { NFeAuthorizationOutcome, NFeAuthorizationRequest } from '../nfe/contracts.js';

/**
 * Public root-facade function that authorizes a supported canonical NFe submission.
 *
 * @param input - Structured authorization request provided by the integrator.
 * @returns Structured authorization outcome for the attempted submission.
 */
export async function authorizeNFe(
  input: NFeAuthorizationRequest,
): Promise<NFeAuthorizationOutcome> {
  return authorizeInternalNFe(input);
}
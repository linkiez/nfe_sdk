import type { NFeAuthorizationRequest } from '../nfe/contracts.js';

import type { NFCeAuthorizationRequest } from './contracts.js';

/**
 * Builds the shared NFe authorization request reused by the first NFC-e slice.
 *
 * @param input - Structured NFC-e authorization request from the root facade.
 * @returns Shared authorization request forwarded to the NFe operational pipeline.
 */
export function createNFCeAuthorizationPayload(
  input: NFCeAuthorizationRequest,
): NFeAuthorizationRequest {
  return {
    documents: {
      kind: 'single-document',
      payload: input.document,
    },
    environment: input.environment,
    requestExecutor: input.requestExecutor,
    signingContext: input.signingContext,
    timeoutMs: input.timeoutMs,
  };
}
import type { NFCeAuthorizationDocumentInput } from './contracts.js';
import { NFCeOperationalUsageError } from './errors.js';

/**
 * Minimal normalized NFC-e input consumed by helper functions in the operational slice.
 */
export interface NormalizedNFCeInput {
  /** Normalized document identifier extracted from the input payload. */
  readonly documentId: string;
}

/**
 * Normalizes the NFC-e document identifier needed by local helper flows.
 *
 * @param input - NFC-e document input accepted by the public facade.
 * @returns Normalized NFC-e helper input.
 * @throws {NFCeOperationalUsageError} When the document identifier is blank.
 */
export function normalizeNFCeInput(
  input: NFCeAuthorizationDocumentInput,
): NormalizedNFCeInput {
  const documentId = (
    'metadata' in input ? input.metadata.documentId : input.documentId
  ).trim();

  if (documentId.length === 0) {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe requires a non-empty documentId to resolve the operational UF.',
    );
  }

  return { documentId };
}
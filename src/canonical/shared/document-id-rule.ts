import { normalizeRequiredIdentifier } from './contracts.js';

/**
 * Normalizes the initial canonical document identifier.
 *
 * @param documentId - Raw document identifier provided by the integrator.
 * @returns The normalized canonical document identifier.
 */
export function normalizeDocumentId(documentId: string): string {
  return normalizeRequiredIdentifier(documentId, 'documentId');
}
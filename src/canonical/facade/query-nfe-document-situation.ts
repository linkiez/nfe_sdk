import { queryNFeDocumentSituation as queryInternalNFeDocumentSituation } from '../nfe/query-nfe-document-situation.js';
import type { DocumentSituationRequest, DocumentSituationResult } from '../nfe/contracts.js';

/**
 * Public root-facade function that queries the supported NFe document situation by access key.
 *
 * @param input - Structured document-situation request provided by the integrator.
 * @returns Structured document-situation result.
 */
export async function queryNFeDocumentSituation(
  input: DocumentSituationRequest,
): Promise<DocumentSituationResult> {
  return queryInternalNFeDocumentSituation(input);
}
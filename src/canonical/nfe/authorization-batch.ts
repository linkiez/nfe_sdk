import {
  createCanonicalEnviNFe,
} from './canonical-envi-nfe.js';
import { createCanonicalNFe } from './canonical-nfe.js';
import {
  type NFeAuthorizationBatch,
  type NFeAuthorizationDocumentsInput,
} from './contracts.js';
import type {
  CanonicalEnviNFeDocument,
  CanonicalNFeDocument,
} from '../shared/contracts.js';

const SINGLE_DOCUMENT_BATCH_ID = '000000000000001';

/**
 * Builds a normalized authorization batch from the operational request input.
 *
 * @param input - Single-document or batch authorization payload.
 * @returns Canonical authorization batch ready for orchestration.
 */
export function buildNFeAuthorizationBatch(
  input: NFeAuthorizationDocumentsInput,
): NFeAuthorizationBatch {
  if (input.kind === 'single-document') {
    const document = isCanonicalNFeDocument(input.payload)
      ? input.payload
      : createCanonicalNFe(input.payload);

    return {
      batchId: SINGLE_DOCUMENT_BATCH_ID,
      documentCount: 1,
      documents: [document],
      submissionMode: 'single-document',
    };
  }

  const batch = isCanonicalEnviNFeDocument(input.payload)
    ? input.payload
    : createCanonicalEnviNFe(input.payload);

  return {
    batchId: batch.metadata.batchId,
    documentCount: batch.documents.length,
    documents: batch.documents,
    submissionMode: 'batch',
  };
}

/**
 * Checks whether a value is a normalized canonical `NFe` document.
 *
 * @param value - Candidate value to inspect.
 * @returns `true` when the value is a canonical `NFe` document.
 */
export function isCanonicalNFeDocument(
  value: unknown,
): value is CanonicalNFeDocument {
  return isRecord(value) && value.kind === 'NFe';
}

/**
 * Checks whether a value is a normalized canonical `enviNFe` document.
 *
 * @param value - Candidate value to inspect.
 * @returns `true` when the value is a canonical `enviNFe` document.
 */
export function isCanonicalEnviNFeDocument(
  value: unknown,
): value is CanonicalEnviNFeDocument {
  return isRecord(value) && value.kind === 'enviNFe';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
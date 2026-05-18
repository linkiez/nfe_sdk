import { buildGeneratedNFe } from './generated-nfe-adapter.js';
import { getInitialCanonicalDeferredGaps } from '../shared/gap-register.js';
import {
  getCanonicalSchemaFamily,
  type CanonicalNFeDocument,
  type CanonicalNFeInput,
} from '../shared/contracts.js';
import { normalizeDocumentId } from '../shared/document-id-rule.js';
import { normalizeEnvironment } from '../shared/environment-rule.js';
import { normalizeVersion } from '../shared/version-rule.js';

/**
 * Creates a canonical `NFe` document from the root facade input.
 *
 * @param input - Raw canonical input provided by the integrator.
 * @returns Canonical `NFe` document normalized for the initial SDK slice.
 */
export function createCanonicalNFe(input: CanonicalNFeInput): CanonicalNFeDocument {
  const environment = normalizeEnvironment(input.environment);
  const version = normalizeVersion(input.version);
  const documentId = normalizeDocumentId(input.documentId);
  const generated = buildGeneratedNFe(input);

  return {
    deferredGaps: getInitialCanonicalDeferredGaps(),
    kind: 'NFe',
    metadata: {
      documentId,
      environment,
      generatedType: generated.generatedType,
      schemaFamily: getCanonicalSchemaFamily(),
      version,
    },
    payload: input.payload ?? {},
  };
}
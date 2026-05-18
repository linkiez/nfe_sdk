import { buildGeneratedEnviNFe } from './generated-nfe-adapter.js';
import { createCanonicalNFe } from './canonical-nfe.js';
import { getInitialCanonicalDeferredGaps } from '../shared/gap-register.js';
import {
  getCanonicalSchemaFamily,
  type CanonicalEnviNFeDocument,
  type CanonicalEnviNFeInput,
} from '../shared/contracts.js';
import { normalizeBatchId } from '../shared/batch-id-rule.js';
import { normalizeEnvironment } from '../shared/environment-rule.js';
import { normalizeVersion } from '../shared/version-rule.js';

/**
 * Creates a canonical `enviNFe` batch from the root facade input.
 *
 * @param input - Raw canonical batch input provided by the integrator.
 * @returns Canonical `enviNFe` batch normalized for the initial SDK slice.
 * @throws {Error} When the batch is created without documents.
 */
export function createCanonicalEnviNFe(
  input: CanonicalEnviNFeInput,
): CanonicalEnviNFeDocument {
  if (input.documents.length === 0) {
    throw new Error('enviNFe requires at least one canonical NFe document.');
  }

  const environment = normalizeEnvironment(input.environment);
  const version = normalizeVersion(input.version);
  const batchId = normalizeBatchId(input.batchId);
  const documents = input.documents.map((document) => createCanonicalNFe(document));
  const generated = buildGeneratedEnviNFe(
    {
      ...input,
      batchId,
      environment,
      version,
    },
    version,
  );

  return {
    deferredGaps: getInitialCanonicalDeferredGaps(),
    documents,
    kind: 'enviNFe',
    metadata: {
      batchId,
      environment,
      generatedType: generated.generatedType,
      schemaFamily: getCanonicalSchemaFamily(),
      version,
    },
  };
}
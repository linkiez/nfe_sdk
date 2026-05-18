import { serializeDeterministicEnviNFeXml } from '../serialization/deterministic-xml.js';
import type { CanonicalEnviNFeDocument } from '../shared/contracts.js';

import type { NFeAuthorizationBatch } from './contracts.js';
import { NFeOperationalUsageError } from './errors.js';

/**
 * Creates the deterministic authorization payload XML for a normalized batch.
 *
 * @param batch - Normalized authorization batch prepared by the operational slice.
 * @returns Deterministic `enviNFe` XML ready for transport.
 * @throws {NFeOperationalUsageError} When the batch does not contain documents.
 */
export function createAuthorizationPayloadXml(
  batch: NFeAuthorizationBatch,
): string {
  if (batch.documents.length === 0) {
    throw new NFeOperationalUsageError(
      'authorizeNFe requires at least one canonical document.',
    );
  }

  return serializeDeterministicEnviNFeXml(
    createAuthorizationEnvelopeDocument(batch),
  );
}

function createAuthorizationEnvelopeDocument(
  batch: NFeAuthorizationBatch,
): CanonicalEnviNFeDocument {
  const [firstDocument] = batch.documents;

  return {
    deferredGaps: firstDocument.deferredGaps,
    documents: batch.documents,
    kind: 'enviNFe',
    metadata: {
      batchId: batch.batchId,
      environment: firstDocument.metadata.environment,
      generatedType: 'OperationalAuthorizationBatch',
      schemaFamily: firstDocument.metadata.schemaFamily,
      version: firstDocument.metadata.version,
    },
  };
}
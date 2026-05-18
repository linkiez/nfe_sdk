import { serializeDeterministicEnviNFeXml } from '../serialization/deterministic-xml.js';
import type { CanonicalEnviNFeDocument } from '../shared/contracts.js';

/**
 * Public root-facade function that serializes a canonical `enviNFe` document.
 *
 * @param document - Canonical enviNFe document created by the facade.
 * @returns Deterministic XML for the canonical `enviNFe` batch.
 */
export function serializeEnviNFeXml(
  document: CanonicalEnviNFeDocument,
): string {
  return serializeDeterministicEnviNFeXml(document);
}
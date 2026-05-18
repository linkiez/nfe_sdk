import { serializeDeterministicNFeXml } from '../serialization/deterministic-xml.js';
import type { CanonicalNFeDocument } from '../shared/contracts.js';

/**
 * Public root-facade function that serializes a canonical `NFe` document.
 *
 * @param document - Canonical NFe document created by the facade.
 * @returns Deterministic XML for the canonical `NFe` document.
 */
export function serializeNFeXml(document: CanonicalNFeDocument): string {
  return serializeDeterministicNFeXml(document);
}
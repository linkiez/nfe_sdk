import type {
  CanonicalEnviNFeDocument,
  CanonicalNFeDocument,
} from '../shared/contracts.js';

/**
 * Ordered metadata entries emitted for a canonical `NFe` document.
 *
 * @param document - Canonical NFe document to serialize.
 * @returns Ordered metadata tags and values.
 */
export function getOrderedNFeMetadata(
  document: CanonicalNFeDocument,
): ReadonlyArray<readonly [tagName: string, value: string]> {
  return [
    ['documentId', document.metadata.documentId],
    ['environment', document.metadata.environment],
    ['schemaFamily', document.metadata.schemaFamily],
  ] as const;
}

/**
 * Ordered metadata entries emitted for a canonical `enviNFe` document.
 *
 * @param document - Canonical enviNFe document to serialize.
 * @returns Ordered metadata tags and values.
 */
export function getOrderedEnviNFeMetadata(
  document: CanonicalEnviNFeDocument,
): ReadonlyArray<readonly [tagName: string, value: string]> {
  return [
    ['batchId', document.metadata.batchId],
    ['environment', document.metadata.environment],
    ['schemaFamily', document.metadata.schemaFamily],
  ] as const;
}

/**
 * Returns payload entries sorted alphabetically for deterministic XML output.
 *
 * @param payload - Free-form canonical payload.
 * @returns Sorted payload entries.
 */
export function getOrderedPayloadEntries(
  payload: Readonly<Record<string, string>>,
): ReadonlyArray<readonly [tagName: string, value: string]> {
  return Object.keys(payload)
    .sort((left, right) => left.localeCompare(right))
    .map((key) => [key, payload[key] ?? ''] as const);
}
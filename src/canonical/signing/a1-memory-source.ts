import type { InMemorySigningSourceInput } from './contracts.js';
import { CreateSigningContextError } from './errors.js';

/**
 * Decodes an in-memory Base64 PKCS#12 payload into raw bytes.
 *
 * @param source - In-memory source provided by the caller.
 * @returns Raw PKCS#12 bytes.
 * @throws {CreateSigningContextError} When the payload is empty or not valid Base64.
 */
export function loadPkcs12FromMemory(
  source: InMemorySigningSourceInput,
): Buffer {
  if (source.contentBase64.trim().length === 0) {
    throw new CreateSigningContextError('The in-memory A1 payload must not be empty.');
  }

  try {
    return Buffer.from(source.contentBase64, 'base64');
  } catch {
    throw new CreateSigningContextError('The in-memory A1 payload is not valid Base64.');
  }
}
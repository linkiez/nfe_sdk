import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import type { FilePathSigningSourceInput } from './contracts.js';
import { CreateSigningContextError } from './errors.js';

/**
 * Loads a PKCS#12 payload from a filesystem path.
 *
 * @param source - File-path source provided by the caller.
 * @returns Raw PKCS#12 bytes.
 * @throws {CreateSigningContextError} When the file path is empty or unreadable.
 */
export function loadPkcs12FromFile(
  source: FilePathSigningSourceInput,
): Buffer {
  if (source.filePath.trim().length === 0) {
    throw new CreateSigningContextError('The A1 file path must not be empty.');
  }

  try {
    return readFileSync(resolve(source.filePath));
  } catch {
    throw new CreateSigningContextError('The A1 file path could not be read.');
  }
}
import type {
  FilePathSigningSourceInput,
  InMemorySigningSourceInput,
  SigningSourceInput,
  SigningSourceMetadata,
} from './contracts.js';
import { CreateSigningContextError } from './errors.js';

/**
 * Narrows a public signing source to an in-memory payload source.
 *
 * @param source - Public source definition provided by the caller.
 * @returns Whether the source represents an in-memory payload.
 */
export function isInMemorySigningSource(
  source: SigningSourceInput,
): source is InMemorySigningSourceInput {
  return source.type === 'in-memory-content';
}

/**
 * Narrows a public signing source to a file-path source.
 *
 * @param source - Public source definition provided by the caller.
 * @returns Whether the source represents a file-path payload.
 */
export function isFilePathSigningSource(
  source: SigningSourceInput,
): source is FilePathSigningSourceInput {
  return source.type === 'file-path';
}

/**
 * Normalizes source metadata exposed by the signing context.
 *
 * @param source - Public source definition provided by the caller.
 * @returns Stable source metadata for the signing context.
 * @throws {CreateSigningContextError} When the source shape is not supported.
 */
export function normalizeSigningSourceMetadata(
  source: SigningSourceInput,
): SigningSourceMetadata {
  if (isInMemorySigningSource(source)) {
    return { type: source.type };
  }

  if (isFilePathSigningSource(source)) {
    return {
      filePath: source.filePath,
      type: source.type,
    };
  }

  throw new CreateSigningContextError('Unsupported signing source type.');
}
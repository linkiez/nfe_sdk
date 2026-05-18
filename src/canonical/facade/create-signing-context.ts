import type {
  CreateSigningContextInput,
  SigningContext,
} from '../signing/contracts.js';
import { createSigningContext as createInternalSigningContext } from '../signing/create-signing-context.js';

/**
 * Public root-facade function that creates a reusable digital-signing context.
 *
 * @param input - Supported A1 source and passphrase provided by the integrator.
 * @returns Reusable signing context that can sign supported NFe XML payloads.
 */
export async function createSigningContext(
  input: CreateSigningContextInput,
): Promise<SigningContext> {
  return createInternalSigningContext(input);
}
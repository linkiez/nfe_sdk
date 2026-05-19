import { computeHashCSRT as computeInternalHashCSRT } from '../nfe/hash-csrt.js';
import type { HashCSRTInput } from '../nfe/hash-csrt.js';

/**
 * Public root-facade function that computes the hashCSRT credential digest.
 *
 * Implements MOC §7.1.3: SHA-1(CNPJ + idCSRT + CSRT) returned as lowercase hex.
 *
 * @param input - CNPJ, idCSRT, and CSRT credential fields.
 * @returns Lowercase 40-character hexadecimal SHA-1 digest.
 * @throws {Error} When CNPJ is not exactly 14 digits or CSRT is empty.
 */
export function computeHashCSRT(input: HashCSRTInput): string {
  return computeInternalHashCSRT(input);
}

export type { HashCSRTInput };

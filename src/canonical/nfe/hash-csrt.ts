import { createHash } from 'node:crypto';

/**
 * Input for the hashCSRT computation defined in MOC §7.1.3.
 *
 * The hash authenticates the issuer's CSRT credential inside the NF-e XML
 * without transmitting the raw token value.
 */
export interface HashCSRTInput {
  /** 14-digit emitter CNPJ (digits only, no punctuation). */
  readonly CNPJ: string;
  /** 2-digit CSRT identifier supplied by the state's SEFAZ. */
  readonly idCSRT: string;
  /** Raw CSRT value supplied by the state's SEFAZ (case-sensitive). */
  readonly CSRT: string;
}

/**
 * Computes the hashCSRT value as SHA-1(CNPJ + idCSRT + CSRT) in lowercase hex.
 *
 * Implements MOC §7.1.3. The three fields are concatenated in the order
 * CNPJ → idCSRT → CSRT before hashing. Node.js built-in `crypto` is used
 * (not node-forge) to stay within the standard library for a pure string hash.
 *
 * @param input - CNPJ, idCSRT, and CSRT credential fields.
 * @returns Lowercase 40-character hexadecimal SHA-1 digest.
 * @throws {Error} When CNPJ is not exactly 14 digits or CSRT is empty.
 */
export function computeHashCSRT(input: HashCSRTInput): string {
  const { CNPJ, idCSRT, CSRT } = input;

  if (!/^\d{14}$/.test(CNPJ)) {
    throw new Error(`CNPJ must be exactly 14 digits; received "${CNPJ}".`);
  }
  if (CSRT.length === 0) {
    throw new Error('CSRT must not be empty.');
  }

  return createHash('sha1').update(CNPJ + idCSRT + CSRT).digest('hex');
}

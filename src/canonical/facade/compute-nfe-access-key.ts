import {
  computeNFeAccessKey as computeInternalNFeAccessKey,
} from '../nfe/access-key.js';
import type { AccessKeyFields, AccessKeyResult } from '../nfe/access-key.js';

/**
 * Public root-facade function that computes a 44-digit NF-e access key.
 *
 * Implements the modulo-11 algorithm from MOC §2.2.6. All fields must already
 * be zero-padded to their canonical widths before calling this function.
 *
 * @param fields - Structured identification fields from the NF-e document.
 * @returns Object containing the full chNFe (44 digits) and numeric cDV.
 * @throws {Error} When any input field fails length/format validation.
 */
export function computeNFeAccessKey(fields: AccessKeyFields): AccessKeyResult {
  return computeInternalNFeAccessKey(fields);
}

export type { AccessKeyFields, AccessKeyResult };

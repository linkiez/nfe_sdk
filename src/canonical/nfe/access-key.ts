/**
 * NF-e access key computation — MOC §2.2.6 (modulo-11 algorithm).
 *
 * The 44-digit chNFe is assembled from the canonical NF-e identification
 * fields plus a check digit (cDV) computed with weighted modulo-11.
 */

/** Input fields used to compute the 44-digit NF-e access key. */
export interface AccessKeyFields {
  /** 2-digit IBGE UF code (e.g. "35" for SP). */
  readonly cUF: string;
  /** Year/month of emission in AAMM format (e.g. "2401"). */
  readonly AAMM: string;
  /** 14-digit emitter CNPJ (digits only, no punctuation). */
  readonly CNPJ: string;
  /** 2-digit document model: "55" for NF-e, "65" for NFC-e. */
  readonly mod: string;
  /** 3-digit emission series number (zero-padded). */
  readonly serie: string;
  /** 9-digit sequential note number (zero-padded). */
  readonly nNF: string;
  /** 1-digit emission type code (e.g. "1" for normal, "4" for contingency). */
  readonly tpEmis: string;
  /** 8-digit random code used as cNF (zero-padded). */
  readonly cNF: string;
}

/** Result returned by {@link computeNFeAccessKey}. */
export interface AccessKeyResult {
  /** The full 44-digit NF-e access key including cDV. */
  readonly chNFe: string;
  /** The single check digit (0–9) appended as the last character of chNFe. */
  readonly cDV: number;
}

/**
 * Validates and returns the first segment of the access key (43 digits without cDV).
 *
 * @param fields - Structured access key input fields.
 * @returns 43-character numeric string.
 * @throws {Error} When any field has an unexpected length or contains non-digits.
 */
function buildKey43(fields: AccessKeyFields): string {
  const { cUF, AAMM, CNPJ, mod, serie, nNF, tpEmis, cNF } = fields;

  if (!/^\d{2}$/.test(cUF)) {
    throw new Error(`cUF must be exactly 2 digits; received "${cUF}".`);
  }
  if (!/^\d{4}$/.test(AAMM)) {
    throw new Error(`AAMM must be exactly 4 digits (AAMM); received "${AAMM}".`);
  }
  if (!/^\d{14}$/.test(CNPJ)) {
    throw new Error(`CNPJ must be exactly 14 digits; received "${CNPJ}".`);
  }
  if (!/^\d{2}$/.test(mod)) {
    throw new Error(`mod must be exactly 2 digits; received "${mod}".`);
  }
  if (!/^\d{3}$/.test(serie)) {
    throw new Error(`serie must be exactly 3 digits; received "${serie}".`);
  }
  if (!/^\d{9}$/.test(nNF)) {
    throw new Error(`nNF must be exactly 9 digits; received "${nNF}".`);
  }
  if (!/^\d$/.test(tpEmis)) {
    throw new Error(`tpEmis must be exactly 1 digit; received "${tpEmis}".`);
  }
  if (!/^\d{8}$/.test(cNF)) {
    throw new Error(`cNF must be exactly 8 digits; received "${cNF}".`);
  }

  return cUF + AAMM + CNPJ + mod + serie + nNF + tpEmis + cNF;
}

/**
 * Computes the modulo-11 check digit (cDV) over a 43-digit numeric string.
 *
 * Weights cycle 2–9 from right to left. When the remainder is 0 or 1, cDV = 1;
 * otherwise cDV = 11 − remainder.
 *
 * @param key43 - 43-digit numeric string.
 * @returns Single-digit check value (0–9).
 */
function computeModulo11CheckDigit(key43: string): number {
  let sum = 0;
  let weight = 2;

  for (let i = key43.length - 1; i >= 0; i--) {
    sum += Number.parseInt(key43[i], 10) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const remainder = sum % 11;
  return remainder === 0 || remainder === 1 ? 1 : 11 - remainder;
}

/**
 * Computes the 44-digit NF-e access key and its check digit.
 *
 * Implements the modulo-11 algorithm specified in MOC §2.2.6.
 *
 * @param fields - Structured identification fields from the NF-e document.
 * @returns Object containing the full chNFe (44 digits) and numeric cDV.
 * @throws {Error} When any input field fails length/format validation.
 */
export function computeNFeAccessKey(fields: AccessKeyFields): AccessKeyResult {
  const key43 = buildKey43(fields);
  const cDV = computeModulo11CheckDigit(key43);
  const chNFe = key43 + cDV;
  return { chNFe, cDV };
}

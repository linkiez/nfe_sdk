import type { EPECSVCTarget } from './contracts.js';

/** SVC-RS UF IBGE code (Santa Catarina). */
const SVCRS_UF_CODE = '42';

/**
 * Resolves the SVC target for an EPEC event submission based on the issuer's UF code.
 *
 * Per MOC §3.3.5, SC (code 42) routes to SVC-RS; all other UFs route to SVC-AN.
 *
 * @param issuerUF - Two-digit IBGE UF code of the issuer.
 * @returns The SVC target for the EPEC submission.
 */
export function resolveEPECSVCTarget(issuerUF: string): EPECSVCTarget {
  return issuerUF === SVCRS_UF_CODE ? 'SVC-RS' : 'SVC-AN';
}

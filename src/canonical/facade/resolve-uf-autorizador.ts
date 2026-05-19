import { resolveUFAutorizador as resolveInternal } from '../transport/uf-routing.js';
import type { UFRoutingResult } from '../transport/uf-routing.js';
export type { NFeSEFAZAutorizador, UFRoutingResult } from '../transport/uf-routing.js';

/**
 * Resolves the SEFAZ autorizador responsible for a given UF code.
 *
 * @param uf - Two-letter uppercase Brazilian state code (e.g., 'SP', 'AC')
 * @returns The routing result including the autorizador and whether it is a contingency
 * @throws {UnknownUFError} When the UF code is not one of the 27 valid codes
 */
export function resolveUFAutorizador(uf: string): UFRoutingResult {
  return resolveInternal(uf);
}

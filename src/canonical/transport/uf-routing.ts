import type { NFeSEFAZProvider } from './contracts.js';
import { UnknownUFError } from './errors.js';

/**
 * Result returned by {@link resolveUFAutorizador}.
 */
export interface UFRoutingResult {
  /** The IBGE UF code provided as input (2 digits). */
  readonly uf: string;
  /** The SEFAZ autorizador responsible for this UF. */
  readonly autorizador: NFeSEFAZAutorizador;
}

/**
 * Valid SEFAZ autorizador identifiers for UF routing.
 *
 * 12 states operate their own autorizador; 14 delegate to SVC-AN (SVCAN)
 * and 1 (SC) delegates to SVC-RS (SVCRS).
 */
export type NFeSEFAZAutorizador = NFeSEFAZProvider;

/**
 * Maps each 2-digit IBGE UF code to its SEFAZ autorizador.
 *
 * Sources:
 * - MOC §2.6 — Tabela de UF e Autorizadores
 * - specs/012-implement-audit-gaps/research.md R4
 *
 * 12 UFs with own autorizadores: AM, BA, CE, GO, MG, MS, MT, PA, PE, PR, RS, SP
 * 14 UFs delegating to SVC-AN: AC, AL, AP, DF, ES, MA, PB, PI, RJ, RN, RO, RR, SE, TO
 * 1 UF delegating to SVC-RS: SC
 */
const UF_AUTORIZADOR_MAP: Readonly<Record<string, NFeSEFAZAutorizador>> = {
  // Own autorizadores (12 states)
  '13': 'AM', // Amazonas
  '29': 'BA', // Bahia
  '23': 'CE', // Ceará
  '52': 'GO', // Goiás
  '31': 'MG', // Minas Gerais
  '50': 'MS', // Mato Grosso do Sul
  '51': 'MT', // Mato Grosso
  '15': 'PA', // Pará
  '26': 'PE', // Pernambuco
  '41': 'PR', // Paraná
  '43': 'RS', // Rio Grande do Sul
  '35': 'SP', // São Paulo

  // SVC-AN (SVCAN) — 14 delegating UFs
  '12': 'SVCAN', // Acre
  '27': 'SVCAN', // Alagoas
  '16': 'SVCAN', // Amapá
  '53': 'SVCAN', // Distrito Federal
  '32': 'SVCAN', // Espírito Santo
  '21': 'SVCAN', // Maranhão
  '25': 'SVCAN', // Paraíba
  '22': 'SVCAN', // Piauí
  '33': 'SVCAN', // Rio de Janeiro
  '24': 'SVCAN', // Rio Grande do Norte
  '11': 'SVCAN', // Rondônia
  '14': 'SVCAN', // Roraima
  '28': 'SVCAN', // Sergipe
  '17': 'SVCAN', // Tocantins

  // SVC-RS (SVCRS) — 1 delegating UF
  '42': 'SVCRS', // Santa Catarina
};

/**
 * Resolves the SEFAZ autorizador responsible for a given IBGE UF code.
 *
 * @param uf - 2-digit IBGE UF code (e.g. "35" for SP, "42" for SC).
 * @returns UFRoutingResult with the uf and its resolved autorizador.
 * @throws {UnknownUFError} When the UF code is not among the 27 Brazilian states.
 */
export function resolveUFAutorizador(uf: string): UFRoutingResult {
  const autorizador = UF_AUTORIZADOR_MAP[uf];

  if (autorizador === undefined) {
    throw new UnknownUFError(uf);
  }

  return { uf, autorizador };
}

import type { CanonicalEnvironment } from '../shared/contracts.js';

/**
 * Input for building a CadConsultaCadastro XML payload.
 */
interface CadConsultaCadastroXmlInput {
  readonly cnpj?: string;
  readonly ie?: string;
  readonly uf: string;
  readonly environment: CanonicalEnvironment;
}

/**
 * Classification for a contributor registration lookup result.
 */
export type ContributorRegistrationClassification =
  | 'found'
  | 'not-found'
  | 'rejected'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

/**
 * Structured result of a contributor registration query.
 */
export interface ContributorRegistrationOutcome {
  readonly classification: ContributorRegistrationClassification;
  readonly name?: string;
  readonly ie?: string;
  readonly ieStatus?: string;
  readonly rawResponse?: string;
}

/**
 * Builds the `CadConsultaCadastro4` request XML for a contributor registration query.
 *
 * @param input - CNPJ or IE, UF, and environment for the query.
 * @returns XML payload to be wrapped by the transport layer.
 */
export function buildCadConsultaCadastroXml(input: CadConsultaCadastroXmlInput): string {
  const tpAmb = input.environment === 'production' ? '1' : '2';
  const identifierTag = input.cnpj
    ? `<CNPJ>${input.cnpj}</CNPJ>`
    : `<IE>${input.ie ?? ''}</IE>`;

  return [
    '<CadConsultaCadastro4 versao="2.00">',
    '<infCons>',
    `<xServ>CONS-CAD</xServ>`,
    `<UF>${input.uf}</UF>`,
    identifierTag,
    `<tpAmb>${tpAmb}</tpAmb>`,
    '</infCons>',
    '</CadConsultaCadastro4>',
  ].join('');
}

/**
 * Parses the `retConsCad` response into a structured contributor registration outcome.
 *
 * @param xml - Raw XML response from the SEFAZ cadastro service.
 * @returns Structured contributor registration outcome.
 */
export function parseRetConsCad(xml: string): ContributorRegistrationOutcome {
  if (!xml?.includes('retConsCad')) {
    return { classification: 'protocol-error', rawResponse: xml || undefined };
  }

  const cStat = extractTagText(xml, 'cStat');

  if (!cStat) {
    return { classification: 'protocol-error', rawResponse: xml };
  }

  // cStat 111 = found with one result, 112 = found with multiple results
  if (cStat === '111' || cStat === '112') {
    const name = extractTagText(xml, 'xNome');
    const ie = extractFirstInfCadTagText(xml, 'IE');
    const ieStatus = extractTagText(xml, 'indSitIE');

    return { classification: 'found', name, ie, ieStatus, rawResponse: xml };
  }

  // cStat 120 = not found, 121 = similar found but not exact
  return { classification: 'not-found', rawResponse: xml };
}

function extractTagText(xml: string, tagName: string): string | undefined {
  return new RegExp(`<${tagName}>([^<]*)</${tagName}>`, 'u').exec(xml)?.[1];
}

function extractFirstInfCadTagText(xml: string, tagName: string): string | undefined {
  const infCadMatch = /<infCad>([\s\S]*?)<\/infCad>/u.exec(xml);

  if (!infCadMatch) {
    return undefined;
  }

  return new RegExp(`<${tagName}>([^<]*)</${tagName}>`, 'u').exec(infCadMatch[1])?.[1];
}

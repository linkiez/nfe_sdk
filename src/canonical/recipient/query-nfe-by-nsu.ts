import { escapeRecipientXml, normalizeRecipientDocumentNumber } from './recipient-shared.js';
import type { RecipientDistributionClassification, RecipientDocumentEnvelope } from './recipient-shared.js';
import { parseRecipientDocumentEnvelopes } from './recipient-document-envelope.js';

/**
 * Input for building a consNSU XML payload.
 */
interface ConsNSUXmlInput {
  readonly actor: { readonly documentNumber: string; readonly documentType: 'cpf' | 'cnpj' };
  readonly nsu: string;
  readonly environment: string;
}

/**
 * Result shape returned by the NSU query XML parser.
 */
export interface NSUQueryParseResult {
  readonly classification: RecipientDistributionClassification;
  readonly documents: readonly RecipientDocumentEnvelope[];
  readonly rawResponse?: string;
}

/**
 * Builds the `consNSU` request XML for a specific NSU lookup.
 *
 * @param input - Actor, NSU, and environment for the query.
 * @returns XML payload to be wrapped by the transport layer.
 */
export function buildConsNSUXml(input: ConsNSUXmlInput): string {
  const tpAmb = input.environment === 'production' ? '1' : '2';
  const documentNumber = normalizeRecipientDocumentNumber(input.actor.documentNumber);
  const documentTagName = input.actor.documentType === 'cpf' ? 'CPF' : 'CNPJ';

  return [
    '<distDFeInt versao="1.01">',
    `<tpAmb>${tpAmb}</tpAmb>`,
    '<cUFAutor>91</cUFAutor>',
    `<${documentTagName}>${documentNumber}</${documentTagName}>`,
    '<consNSU>',
    `<NSU>${escapeRecipientXml(input.nsu)}</NSU>`,
    '</consNSU>',
    '</distDFeInt>',
  ].join('');
}

/**
 * Parses the `retDistDFeInt` response from a `consNSU` call.
 *
 * @param xml - Raw XML response string from the SEFAZ service.
 * @returns Structured parse result with classification and documents.
 */
export function parseRetDistDFeIntForNSU(xml: string): NSUQueryParseResult {
  if (!xml?.includes('retDistDFeInt')) {
    return { classification: 'protocol-error', documents: [], rawResponse: xml || undefined };
  }

  const cStat = extractTagText(xml, 'cStat');
  const documents = parseRecipientDocumentEnvelopes(xml);

  if (cStat === '138' && documents.length > 0) {
    return { classification: 'documents-available', documents, rawResponse: xml };
  }

  if (cStat === '137' || documents.length === 0) {
    return { classification: 'no-new-documents', documents: [], rawResponse: xml };
  }

  return { classification: 'documents-available', documents, rawResponse: xml };
}

function extractTagText(xml: string, tagName: string): string | undefined {
  return new RegExp(`<${tagName}>([^<]*)</${tagName}>`, 'u').exec(xml)?.[1];
}

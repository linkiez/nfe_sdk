import { escapeRecipientXml, normalizeRecipientDocumentNumber } from './recipient-shared.js';
import type { RecipientDistributionClassification, RecipientDocumentEnvelope } from './recipient-shared.js';
import { parseRecipientDocumentEnvelopes } from './recipient-document-envelope.js';

/**
 * Input for building a consChNFe XML payload.
 */
interface ConsChNFeXmlInput {
  readonly actor: { readonly documentNumber: string; readonly documentType: 'cpf' | 'cnpj' };
  readonly chNFe: string;
  readonly environment: string;
}

/**
 * Result shape returned by the access-key query XML parser.
 */
export interface AccessKeyQueryParseResult {
  readonly classification: RecipientDistributionClassification;
  readonly documents: readonly RecipientDocumentEnvelope[];
  readonly rawResponse?: string;
}

/**
 * Builds the `consChNFe` request XML for a specific access-key lookup.
 *
 * @param input - Actor, access key, and environment for the query.
 * @returns XML payload to be wrapped by the transport layer.
 */
export function buildConsChNFeXml(input: ConsChNFeXmlInput): string {
  const tpAmb = input.environment === 'production' ? '1' : '2';
  const documentNumber = normalizeRecipientDocumentNumber(input.actor.documentNumber);
  const documentTagName = input.actor.documentType === 'cpf' ? 'CPF' : 'CNPJ';

  return [
    '<distDFeInt versao="1.01">',
    `<tpAmb>${tpAmb}</tpAmb>`,
    '<cUFAutor>91</cUFAutor>',
    `<${documentTagName}>${documentNumber}</${documentTagName}>`,
    '<consChNFe>',
    `<chNFe>${escapeRecipientXml(input.chNFe)}</chNFe>`,
    '</consChNFe>',
    '</distDFeInt>',
  ].join('');
}

/**
 * Parses the `retDistDFeInt` response from a `consChNFe` call.
 *
 * @param xml - Raw XML response string from the SEFAZ service.
 * @returns Structured parse result with classification and documents.
 */
export function parseRetDistDFeIntForKey(xml: string): AccessKeyQueryParseResult {
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

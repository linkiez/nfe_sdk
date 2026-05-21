import type {
  AsyncBatchItemClassification,
  AsyncBatchItemResult,
  NFeAsyncBatchClassification,
  NFeAsyncBatchOutcome,
} from './contracts.js';

/** cStat 104 indicates the batch has finished processing. */
const BATCH_PROCESSED_STAT = '104';
/** cStat 105 indicates the batch is still being processed. */
const BATCH_PROCESSING_STAT = '105';
/** cStat 215 indicates the receipt number was not found. */
const BATCH_NOT_FOUND_STAT = '215';

/** Item-level status codes that correspond to authorization. */
const AUTHORIZED_ITEM_STATS = new Set(['100']);
/** Item-level status codes that correspond to cancellation. */
const CANCELLED_ITEM_STATS = new Set(['101', '102', '103', '135', '151', '152']);
/** Item-level status codes that correspond to pending processing. */
const PENDING_ITEM_STATS = new Set(['105']);
/** Item-level status codes that correspond to rejection. */
const REJECTED_ITEM_STATS = new Set(['204', '205']);
/** Item-level status codes that correspond to denial (uso denegado). */
const DENIED_ITEM_STATS = new Set(['301', '302']);

/**
 * Classifies a single NF-e item in an async batch by its SEFAZ status code.
 *
 * @param statusCode - The `cStat` value from the `infProt` element.
 * @returns The operational classification for that item.
 */
export function classifyAsyncBatchItem(
  statusCode: string,
): AsyncBatchItemClassification {
  if (AUTHORIZED_ITEM_STATS.has(statusCode)) return 'authorized';
  if (CANCELLED_ITEM_STATS.has(statusCode)) return 'cancelled';
  if (PENDING_ITEM_STATS.has(statusCode)) return 'pending';
  if (REJECTED_ITEM_STATS.has(statusCode)) return 'rejected';
  if (DENIED_ITEM_STATS.has(statusCode)) return 'denied';
  return 'processing-error';
}

/**
 * Parses all `retProt/infProt` blocks from a `retConsReciNFe` XML string.
 *
 * @param xml - The raw response XML.
 * @returns Array of parsed batch item results.
 */
function parseRetProtItems(xml: string): readonly AsyncBatchItemResult[] {
  const items: AsyncBatchItemResult[] = [];
  const infProtPattern =
    /<infProt>([\s\S]*?)<\/infProt>/gu;

  let match: RegExpExecArray | null;

  while ((match = infProtPattern.exec(xml)) !== null) {
    const block = match[1] ?? '';
    const chNFe = extractTagText(block, 'chNFe');
    const cStat = extractTagText(block, 'cStat');
    const xMotivo = extractTagText(block, 'xMotivo');
    const nProt = extractTagText(block, 'nProt');

    if (chNFe === undefined || cStat === undefined) {
      continue;
    }

    items.push({
      chNFe,
      classification: classifyAsyncBatchItem(cStat),
      protocolNumber: nProt,
      statusCode: cStat,
      statusDescription: xMotivo ?? '',
    });
  }

  return items;
}

/**
 * Extracts the text content of the first occurrence of an XML tag.
 *
 * @param xml - XML string to search.
 * @param tagName - Local tag name without namespace prefix.
 * @returns Text content or undefined when not found.
 */
function extractTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]*)</${tagName}>`, 'u').exec(xml);
  return match?.[1];
}

/**
 * Maps the outer `cStat` of a `retConsReciNFe` element to a batch classification.
 *
 * @param outerStat - The batch-level status code.
 * @returns The operational batch classification.
 */
function classifyBatch(outerStat: string): NFeAsyncBatchClassification {
  switch (outerStat) {
    case BATCH_PROCESSED_STAT:
      return 'complete';
    case BATCH_PROCESSING_STAT:
      return 'processing';
    case BATCH_NOT_FOUND_STAT:
      return 'not-found';
    default:
      return 'protocol-error';
  }
}

/**
 * Parses a `retConsReciNFe` XML response into a structured `NFeAsyncBatchOutcome`.
 *
 * Returns `protocol-error` when the XML is empty, malformed, or missing the
 * expected root element. Does not throw.
 *
 * @param xml - Raw response XML from the SEFAZ `NfeRetAutorizacao4` service.
 * @returns Structured batch outcome.
 */
export function parseRetConsReciNFe(xml: string): NFeAsyncBatchOutcome {
  if (!xml?.includes('retConsReciNFe')) {
    return { classification: 'protocol-error', items: [], rawResponse: xml || undefined };
  }

  const outerStat = extractTagText(xml, 'cStat');

  if (outerStat === undefined) {
    return { classification: 'protocol-error', items: [], rawResponse: xml };
  }

  const classification = classifyBatch(outerStat);
  const items = classification === 'complete' ? parseRetProtItems(xml) : [];

  return { classification, items, rawResponse: xml };
}

/**
 * Builds the `consReciNFe` request XML body for the `NfeRetAutorizacao4` service.
 *
 * @param nRec - Receipt number (`nRec`) returned by the submission call.
 * @param tpAmb - Environment type: `'1'` = production, `'2'` = homologation.
 * @returns XML body string for the SOAP envelope.
 */
export function buildConsReciNFeXml(nRec: string, tpAmb: '1' | '2'): string {
  return `<consReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>${tpAmb}</tpAmb><nRec>${nRec}</nRec></consReciNFe>`;
}

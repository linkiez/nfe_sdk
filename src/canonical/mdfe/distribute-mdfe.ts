import { gunzipSync } from 'node:zlib';

import type { RequestExecutor } from '../transport/request-executor.js';

import type { MDFeEnvironment, MDFeOperationResult, MDFeParsed } from './contracts.js';
import { executeMDFeSoapService } from './execute-mdfe-soap-service.js';
import { parseMDFeXml } from './parse-mdfe.js';

const MDFE_NAMESPACE = 'http://www.portalfiscal.inf.br/mdfe';
const DISTRIBUTION_LAYOUT_VERSION = '1.00';
const ONE_HOUR_MS = 3_600_000;
const NSU_PATTERN = /^\d{15}$/u;
const PARSEABLE_SCHEMAS = /^(procMDFe|procEventoMDFe)_v3\.00\.xsd$/u;

/** Classification of a distribution answer (a superset of the generic operation classes). */
export type MDFeDistributionClassification =
  | 'documents-available'
  | 'no-new-documents'
  | 'misuse'
  | 'functional-rejection'
  | 'unavailable'
  | 'timeout'
  | 'protocol-error'
  | 'usage-error'
  | 'unsupported';

/** Input of `distributeMDFe`: exactly one of `ultNSU` (distNSU) or `nsu` (consNSU). */
export interface MDFeDistributionRequest {
  /** CNPJ (14 digits) or CPF (11 digits) of the interested actor. */
  readonly taxId: string;
  readonly environment: MDFeEnvironment;
  /** Last NSU received (15 digits); `000000000000000` starts from the oldest available. */
  readonly ultNSU?: string;
  /** One specific NSU to fetch (gap recovery). */
  readonly nsu?: string;
  /** UF code written to the SOAP header (default `91`, national environment). */
  readonly headerUF?: string;
  readonly requestExecutor?: RequestExecutor;
  readonly timeoutMs?: number;
  /** Clock used for `nextAllowedAt` (tests). */
  readonly now?: Date;
}

/** One document of the distribution batch, decompressed. */
export interface MDFeDistributedDocument {
  readonly nsu: string;
  /** Schema that validates `xml`, e.g. `procMDFe_v3.00.xsd`. */
  readonly schema: string;
  readonly xml: string;
  /** Facts read from `xml` when it is a MDF-e or an event; absent for other schemas. */
  readonly parsed?: MDFeParsed;
}

/** Result of `distributeMDFe`. */
export interface MDFeDistributionResult extends Omit<MDFeOperationResult, 'classification'> {
  readonly classification: MDFeDistributionClassification;
  readonly cursor: {
    /** Cursor to persist: the answer's `ultNSU`, or the one sent when nothing advanced. */
    readonly ultNSU: string;
    readonly maxNSU?: string;
    readonly hasMoreDocumentsNow: boolean;
  };
  /** Earliest instant for the next call (1 hour rule and misuse backoff). */
  readonly nextAllowedAt?: string;
  /** Oldest NSU accepted, read from rejection 730. */
  readonly minimumNSU?: string;
  readonly documents: readonly MDFeDistributedDocument[];
}

const tag = (xml: string, name: string): string | undefined =>
  new RegExp(`<${name}>([^<]*)</${name}>`, 'u').exec(xml)?.[1]?.trim();

function refusal(
  classification: MDFeDistributionClassification,
  ultNSU: string,
  failureReason: string,
): MDFeDistributionResult {
  return {
    classification,
    failureReason,
    cursor: { ultNSU, hasMoreDocumentsNow: false },
    documents: [],
  };
}

function readDocuments(xml: string): MDFeDistributedDocument[] {
  return [...xml.matchAll(/<docZip\b([^>]*)>([^<]*)<\/docZip>/gu)].flatMap(([, attributes, body]) => {
    const nsu = /\bNSU="(\d+)"/u.exec(attributes)?.[1];
    const schema = /\bschema="([^"]+)"/u.exec(attributes)?.[1];
    if (nsu === undefined || schema === undefined) return [];
    const document = gunzipSync(Buffer.from(body.trim(), 'base64')).toString('utf8');
    let parsed: MDFeParsed | undefined;
    if (PARSEABLE_SCHEMAS.test(schema)) {
      try {
        parsed = parseMDFeXml(document);
      } catch {
        parsed = undefined;
      }
    }

    return [{ nsu, schema, xml: document, parsed }];
  });
}

/**
 * Fetches the MDF-e documents and events of interest of an actor from the national distribution
 * service (`distNSU` by cursor, or `consNSU` for one NSU). The caller persists `cursor.ultNSU`,
 * and must not call again before `nextAllowedAt`: with `ultNSU` equal to `maxNSU` the service asks
 * for at least one hour, and rejection 678 (misuse) means the calls were too frequent.
 *
 * @param input - Actor id, environment, cursor or NSU and a mutual-TLS executor.
 * @returns The classified answer with the decompressed documents and the next cursor.
 */
export async function distributeMDFe(input: MDFeDistributionRequest): Promise<MDFeDistributionResult> {
  const sent = input.ultNSU ?? '000000000000000';
  const idTag = /^\d{14}$/u.test(input.taxId) ? 'CNPJ' : /^\d{11}$/u.test(input.taxId) ? 'CPF' : undefined;
  if ((input.ultNSU === undefined) === (input.nsu === undefined)) {
    return refusal('usage-error', sent, 'Inform exactly one of ultNSU (distNSU) or nsu (consNSU).');
  }
  if (idTag === undefined) {
    return refusal('usage-error', sent, 'taxId must be a CNPJ (14 digits) or a CPF (11 digits).');
  }
  const informed = input.ultNSU ?? input.nsu ?? '';
  if (!NSU_PATTERN.test(informed)) {
    return refusal('usage-error', sent, 'The NSU must have 15 digits.');
  }

  const tpAmb = input.environment === 'production' ? '1' : '2';
  const selector =
    input.ultNSU === undefined
      ? `<consNSU><NSU>${informed}</NSU></consNSU>`
      : `<distNSU><ultNSU>${informed}</ultNSU></distNSU>`;
  const outcome = await executeMDFeSoapService({
    service: 'mdfe-distribution',
    environment: input.environment,
    payloadXml: `<distDFeInt xmlns="${MDFE_NAMESPACE}" versao="${DISTRIBUTION_LAYOUT_VERSION}"><tpAmb>${tpAmb}</tpAmb><${idTag}>${input.taxId}</${idTag}>${selector}</distDFeInt>`,
    requestExecutor: input.requestExecutor,
    timeoutMs: input.timeoutMs,
    headerUF: input.headerUF,
  });
  const { responseXml, classification: transportClass, ...rest } = outcome;
  const backoffAt = new Date((input.now ?? new Date()).getTime() + ONE_HOUR_MS).toISOString();

  if (transportClass !== 'success' && transportClass !== 'functional-rejection') {
    return { ...rest, classification: transportClass === 'not-found' ? 'protocol-error' : transportClass, cursor: { ultNSU: sent, hasMoreDocumentsNow: false }, documents: [] };
  }

  const xml = responseXml ?? '';
  const answeredUltNSU = tag(xml, 'ultNSU');
  const maxNSU = tag(xml, 'maxNSU');
  if (transportClass === 'functional-rejection') {
    const misuse = outcome.statusCode === '678';

    return {
      ...rest,
      classification: misuse ? 'misuse' : 'functional-rejection',
      cursor: { ultNSU: sent, hasMoreDocumentsNow: false },
      nextAllowedAt: misuse ? backoffAt : undefined,
      minimumNSU: /\[NSUMin:\s*(\d+)\]/u.exec(outcome.statusMessage ?? '')?.[1],
      documents: [],
    };
  }

  const ultNSU = answeredUltNSU ?? sent;
  const caughtUp = maxNSU !== undefined && answeredUltNSU === maxNSU;
  const documents = readDocuments(xml);

  return {
    ...rest,
    classification: outcome.statusCode === '138' ? 'documents-available' : 'no-new-documents',
    cursor: { ultNSU, maxNSU, hasMoreDocumentsNow: maxNSU !== undefined && ultNSU < maxNSU },
    nextAllowedAt: caughtUp || (outcome.statusCode === '137' && maxNSU === undefined) ? backoffAt : undefined,
    documents,
  };
}

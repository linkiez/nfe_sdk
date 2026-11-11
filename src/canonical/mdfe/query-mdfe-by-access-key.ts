import type { RequestExecutor } from '../transport/request-executor.js';

import type { MDFeEnvironment, MDFeEventSummary, MDFeOperationResult, MDFeProtocol } from './contracts.js';
import { MDFE_LAYOUT_VERSION } from './contracts.js';
import { executeMDFeSoapService } from './execute-mdfe-soap-service.js';
import { parseMDFeXml } from './parse-mdfe.js';
import { parseXmlTree } from './parse-xml-tree.js';
import { readMDFeProtocol } from './read-mdfe-protocol.js';

const MDFE_NAMESPACE = 'http://www.portalfiscal.inf.br/mdfe';

/** Situation of a MDF-e reported by `consSitMDFe`. */
export type MDFeSituation = 'authorized' | 'canceled' | 'closed' | 'not-found' | 'other';

const SITUATION_BY_STATUS: Readonly<Record<string, MDFeSituation>> = {
  '100': 'authorized',
  '101': 'canceled',
  '132': 'closed',
  '217': 'not-found',
};

/** Input of `queryMDFeByAccessKey`. */
export interface MDFeAccessKeyQueryRequest {
  readonly accessKey: string;
  readonly environment: MDFeEnvironment;
  readonly requestExecutor?: RequestExecutor;
  readonly timeoutMs?: number;
}

/** Result of `queryMDFeByAccessKey`. */
export interface MDFeAccessKeyQueryResult extends MDFeOperationResult {
  readonly accessKey: string;
  readonly situation: MDFeSituation;
  readonly protocol?: MDFeProtocol;
  /** `protMDFe` block as received. */
  readonly protocolXml?: string;
  readonly events: readonly MDFeEventSummary[];
  /** `procEventoMDFe` blocks as received (for storage). */
  readonly eventXmls: readonly string[];
  /** Protocol of the DTe generation shared with InfraSA, when informed (road and rail). */
  readonly infraSA?: { readonly protocol: string; readonly generatedAt?: string };
}

const MODEL_58_POSITION = 20;

function usageError(accessKey: string, failureReason: string): MDFeAccessKeyQueryResult {
  return {
    classification: 'usage-error',
    accessKey,
    situation: 'other',
    events: [],
    eventXmls: [],
    failureReason,
  };
}

/**
 * Queries the current situation of a MDF-e by access key (`consSitMDFe`), including its
 * authorization protocol and registered events. The service only serves documents up to 180 days
 * after emission.
 *
 * @param input - Access key (model 58), environment and mutual-TLS executor.
 * @returns Situation, protocol, events and the raw blocks.
 */
export async function queryMDFeByAccessKey(
  input: MDFeAccessKeyQueryRequest,
): Promise<MDFeAccessKeyQueryResult> {
  if (!/^\d{44}$/u.test(input.accessKey)) {
    return usageError(input.accessKey, 'accessKey must have 44 digits.');
  }
  if (input.accessKey.slice(MODEL_58_POSITION, MODEL_58_POSITION + 2) !== '58') {
    return usageError(input.accessKey, 'accessKey does not belong to a MDF-e (model 58).');
  }

  const tpAmb = input.environment === 'production' ? '1' : '2';
  const outcome = await executeMDFeSoapService({
    service: 'mdfe-document-situation',
    environment: input.environment,
    payloadXml: `<consSitMDFe xmlns="${MDFE_NAMESPACE}" versao="${MDFE_LAYOUT_VERSION}"><tpAmb>${tpAmb}</tpAmb><xServ>CONSULTAR</xServ><chMDFe>${input.accessKey}</chMDFe></consSitMDFe>`,
    requestExecutor: input.requestExecutor,
    timeoutMs: input.timeoutMs,
  });
  const { responseXml, ...result } = outcome;
  const xml = responseXml ?? '';
  const situation = SITUATION_BY_STATUS[outcome.statusCode ?? ''] ?? 'other';
  const protocolXml = /<protMDFe[\s\S]*?<\/protMDFe>/u.exec(xml)?.[0];
  const eventXmls = [...xml.matchAll(/<procEventoMDFe[\s\S]*?<\/procEventoMDFe>/gu)].map(([block]) => block);
  const infraSA = /<procInfraSA>[\s\S]*?<\/procInfraSA>/u.exec(xml)?.[0];
  const protocolRoot = protocolXml === undefined ? undefined : parseXmlTree(protocolXml);
  const protocol = protocolRoot === undefined ? undefined : readMDFeProtocol(protocolRoot);

  return {
    ...result,
    classification: outcome.classification === 'functional-rejection' && situation === 'not-found' ? 'not-found' : outcome.classification,
    accessKey: input.accessKey,
    situation,
    protocol,
    protocolXml,
    events: eventXmls.flatMap((block) => {
      const parsed = parseMDFeXml(block);
      return parsed.kind === 'event' ? [parsed] : [];
    }),
    eventXmls,
    infraSA:
      infraSA === undefined
        ? undefined
        : {
            protocol: /<nProtDTe>([^<]+)<\/nProtDTe>/u.exec(infraSA)?.[1] ?? '',
            generatedAt: /<dhProt>([^<]+)<\/dhProt>/u.exec(infraSA)?.[1],
          },
  };
}

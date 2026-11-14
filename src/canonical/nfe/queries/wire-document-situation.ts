import nfceRules from '../../nfce/nfce-lifecycle-rules.js';
import { executeNFeSoapService } from '../../transport/execute-nfe-soap-service.js';
import { resolveIssuerAuthorizer } from '../../transport/issuer-authorizer.js';
import type {
  DocumentSituationRequest,
  DocumentSituationResult,
  NFeDocumentSituationEvent,
  NFeOperationalPrimaryState,
  NFeQueryClassification,
} from '../contracts.js';
import {
  createOperationalState,
  createOperationalStateEvidence,
} from '../operational-state.js';
import { assembleNfeProc } from '../assemble-nfe-proc.js';
import { protocolMatchesSignedNfe } from '../protocol-matches-signed-nfe.js';
import { mapTransportOutcomeToQueryClassification } from '../transport-outcome-mapper.js';

import { buildConsSitNFeXml } from './nfe-query-payloads.js';
import { createRefusedTransportOutcome } from './wire-usage-error.js';

interface SituationCode {
  readonly classification: NFeQueryClassification;
  readonly state: NFeOperationalPrimaryState;
}

/** Official `retConsSitNFe` statuses mapped to the operational state. */
const SITUATION_CODES: Readonly<Record<string, SituationCode>> = {
  '100': { classification: 'success', state: 'authorized' },
  '150': { classification: 'success', state: 'authorized' },
  '101': { classification: 'success', state: 'canceled' },
  '151': { classification: 'success', state: 'canceled' },
  '110': { classification: 'success', state: 'denied' },
  '301': { classification: 'success', state: 'denied' },
  '302': { classification: 'success', state: 'denied' },
  '217': { classification: 'not-found', state: 'inconclusive' },
};

const firstTag = (xml: string, tag: string): string | undefined =>
  new RegExp(`<${tag}>([^<]*)</${tag}>`, 'u').exec(xml)?.[1]?.trim();

function parseEvents(responseXml: string): readonly NFeDocumentSituationEvent[] {
  return [...responseXml.matchAll(/<retEvento\b[\s\S]*?<\/retEvento>/gu)].flatMap(([block]) => {
    const type = firstTag(block, 'tpEvento');
    const sequence = Number(firstTag(block, 'nSeqEvento'));
    const statusCode = firstTag(block, 'cStat');

    return type !== undefined && Number.isInteger(sequence) && statusCode !== undefined
      ? [{ protocol: firstTag(block, 'nProt'), sequence, statusCode, type }]
      : [];
  });
}

function recoverAuthorizedXml(
  signedXml: string | undefined,
  protocolXml: string | undefined,
  primaryState: NFeOperationalPrimaryState,
): Pick<DocumentSituationResult, 'authorizedXml' | 'authorizedXmlIssue'> {
  if (signedXml === undefined || protocolXml === undefined || primaryState !== 'authorized') {
    return {};
  }
  if (!protocolMatchesSignedNfe(signedXml, protocolXml)) {
    return { authorizedXmlIssue: 'digest-mismatch' };
  }

  return { authorizedXml: assembleNfeProc(signedXml, protocolXml) };
}

function refuse(
  input: DocumentSituationRequest,
  environment: string,
  reason: string,
): DocumentSituationResult {
  const transportOutcome = createRefusedTransportOutcome('nfe-document-situation', environment, reason);

  return {
    accessKey: input.accessKey,
    classification: 'usage-error',
    state: createOperationalState({
      accessKey: input.accessKey,
      evidence: [createOperationalStateEvidence({ sourceKind: 'transport', transportOutcome })],
      pendingReason: reason,
      primaryState: 'inconclusive',
    }),
    transportOutcome,
  };
}

/**
 * Queries the protocol of a document with the official `consSitNFe` and reads the answer:
 * state (authorized, canceled, denied), authorization protocol and registered events.
 *
 * @param input - Request with `wireFormat: true`.
 * @returns Situation result with `events`; refused requests are `usage-error`.
 */
export async function queryWireDocumentSituation(
  input: DocumentSituationRequest,
): Promise<DocumentSituationResult> {
  const environment = input.environment.trim().toLowerCase();

  if (environment !== 'homologation' && environment !== 'production') {
    return refuse(input, environment, `Unsupported environment "${input.environment}".`);
  }
  if (!/^\d{44}$/u.test(input.accessKey)) {
    return refuse(input, environment, 'accessKey must have 44 digits.');
  }
  if (environment === 'production' && !input.requestExecutor) {
    return refuse(input, environment, 'Production queries require an injected requestExecutor for mTLS.');
  }

  const service = nfceRules.isNfceAccessKey(input.accessKey)
    ? 'nfce-document-situation'
    : 'nfe-document-situation';
  const transportOutcome = await executeNFeSoapService({
    authorizer:
      input.authorizer ??
      resolveIssuerAuthorizer(input.accessKey.slice(0, 2), environment, service),
    environment,
    payloadXml: buildConsSitNFeXml(environment, input.accessKey),
    requestExecutor: input.requestExecutor,
    service,
    timeoutMs: input.timeoutMs,
    wireFormat: true,
  });
  const responseXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const reachedSefaz =
    transportOutcome.classification === 'success' ||
    transportOutcome.classification === 'functional-rejection';
  const code = firstTag(responseXml, 'cStat');
  const known = code === undefined ? undefined : SITUATION_CODES[code];
  const classification: NFeQueryClassification = !reachedSefaz
    ? mapTransportOutcomeToQueryClassification(transportOutcome).classification
    : (known?.classification ?? 'inconclusive');
  const primaryState: NFeOperationalPrimaryState = !reachedSefaz
    ? 'unavailable'
    : (known?.state ?? 'inconclusive');
  const message = firstTag(responseXml, 'xMotivo');
  const protocolNumber = /<infProt>[\s\S]*?<nProt>([^<]+)<\/nProt>/u.exec(responseXml)?.[1]?.trim();
  const protocolXml = /<protNFe[\s\S]*?<\/protNFe>/u.exec(responseXml)?.[0];
  const recovery = recoverAuthorizedXml(input.signedXml, protocolXml, primaryState);

  return {
    accessKey: input.accessKey,
    classification,
    documentStatusCode: code,
    documentStatusMessage: message,
    events: parseEvents(responseXml),
    protocolNumber,
    protocolXml,
    ...recovery,
    state: createOperationalState({
      accessKey: input.accessKey,
      evidence: [
        createOperationalStateEvidence({
          protocolNumber,
          sourceKind: 'document-situation',
          statusCode: code,
          statusMessage: message,
          transportOutcome,
        }),
      ],
      primaryState,
      protocolNumber,
      stateCode: code,
      stateMessage: message,
    }),
    transportOutcome,
  };
}

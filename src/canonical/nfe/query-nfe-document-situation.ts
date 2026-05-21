import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { TransportOutcome } from '../transport/contracts.js';

import type { DocumentSituationRequest, DocumentSituationResult } from './contracts.js';
import {
  mapDocumentSituationToOperationalState,
  resolveDocumentSituationClassification,
} from './operational-state.js';

/**
 * Maps a transport outcome into the structured document-situation result.
 *
 * @param accessKey - Access key used by the public lookup contract.
 * @param transportOutcome - Transport evidence produced by the SOAP slice.
 * @returns Structured document-situation result.
 */
export function mapDocumentSituationTransportOutcome(
  accessKey: string,
  transportOutcome: TransportOutcome,
): DocumentSituationResult {
  const state = mapDocumentSituationToOperationalState({
    accessKey,
    transportOutcome,
  });

  return {
    accessKey,
    classification: resolveDocumentSituationClassification(state, transportOutcome),
    documentStatusCode: transportOutcome.applicationStatusCode,
    documentStatusMessage: transportOutcome.applicationStatusMessage,
    protocolNumber: state.protocolNumber,
    state,
    transportOutcome,
  };
}

/**
 * Queries the supported homologation document-situation flow by access key.
 *
 * @param input - Structured document-situation request provided by the integrator.
 * @returns Structured document-situation result.
 */
export async function queryNFeDocumentSituation(
  input: DocumentSituationRequest,
): Promise<DocumentSituationResult> {
  const payloadXml = `<consSitNFe versao="4.00"><xChNFe>${escapeXml(
    input.accessKey,
  )}</xChNFe></consSitNFe>`;
  const transportOutcome = await executeNFeSoapService({
    environment: input.environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-document-situation',
    timeoutMs: input.timeoutMs,
  });

  return mapDocumentSituationTransportOutcome(input.accessKey, transportOutcome);
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
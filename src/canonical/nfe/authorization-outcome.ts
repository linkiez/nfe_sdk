import type { TransportOutcome } from '../transport/contracts.js';

import type { NFeAuthorizationBatch, NFeAuthorizationOutcome } from './contracts.js';
import { mapTransportOutcomeToAuthorizationClassification } from './transport-outcome-mapper.js';

const AUTHORIZED_STATUS_CODES = new Set(['100', '104']);
const RECEIVED_STATUS_CODE = '103';

/**
 * Maps the transport-layer authorization exchange into an operational outcome.
 *
 * @param batch - Normalized authorization batch used for the submission.
 * @param transportOutcome - Transport evidence produced by the SOAP slice.
 * @returns Structured authorization outcome exposed by the operational facade.
 */
export function mapAuthorizationTransportOutcome(
  batch: NFeAuthorizationBatch,
  originalTransportOutcome: TransportOutcome,
): NFeAuthorizationOutcome {
  const responseXml =
    originalTransportOutcome.evidence.responseEnvelopeXml ?? '';
  const protocolNumber = extractFirstTagText(responseXml, 'nProt');
  const receiptNumber = extractFirstTagText(responseXml, 'nRec');
  const protocolFailureReason = getProductionProtocolFailureReason(
    originalTransportOutcome,
    responseXml,
    protocolNumber,
    receiptNumber,
  );
  const transportOutcome =
    protocolFailureReason === undefined
      ? originalTransportOutcome
      : {
          ...originalTransportOutcome,
          classification: 'protocol-error' as const,
          failureReason: protocolFailureReason,
        };
  const mappedTransport =
    mapTransportOutcomeToAuthorizationClassification(transportOutcome);
  const classification = resolveAuthorizationClassification(
    mappedTransport.classification,
    protocolNumber,
    receiptNumber,
    transportOutcome.applicationStatusCode,
  );

  return {
    classification,
    documentStatuses: batch.documents.map((document) => ({
      documentId: document.metadata.documentId,
    })),
    failureReason: mappedTransport.failureReason,
    ...(classification === 'received' && receiptNumber !== undefined
      ? { nextAction: 'reconcileNFeReceipt' as const }
      : {}),
    protocolNumber,
    receiptNumber,
    transportOutcome,
  };
}

function getProductionProtocolFailureReason(
  transportOutcome: TransportOutcome,
  responseXml: string,
  protocolNumber: string | undefined,
  receiptNumber: string | undefined,
): string | undefined {
  if (transportOutcome.environment !== 'production') {
    return undefined;
  }

  if (
    transportOutcome.classification !== 'success' &&
    transportOutcome.classification !== 'functional-rejection'
  ) {
    return undefined;
  }

  if (extractFirstTagText(responseXml, 'tpAmb') !== '1') {
    return 'Production authorization response has missing or mismatched tpAmb.';
  }

  if (
    AUTHORIZED_STATUS_CODES.has(transportOutcome.applicationStatusCode ?? '') &&
    protocolNumber === undefined
  ) {
    return 'Authorized production response is missing required nProt.';
  }

  if (
    transportOutcome.applicationStatusCode === RECEIVED_STATUS_CODE &&
    receiptNumber === undefined
  ) {
    return 'Received production response is missing required nRec.';
  }

  return undefined;
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

  return match?.[1]?.trim();
}

function resolveAuthorizationClassification(
  classification: NFeAuthorizationOutcome['classification'],
  protocolNumber: string | undefined,
  receiptNumber: string | undefined,
  applicationStatusCode: string | undefined,
): NFeAuthorizationOutcome['classification'] {
  if (classification !== 'received') {
    return classification;
  }

  if (
    applicationStatusCode !== undefined &&
    AUTHORIZED_STATUS_CODES.has(applicationStatusCode) &&
    protocolNumber !== undefined
  ) {
    return 'authorized';
  }

  if (
    applicationStatusCode === RECEIVED_STATUS_CODE &&
    receiptNumber !== undefined
  ) {
    return 'received';
  }

  return classification;
}
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
  transportOutcome: TransportOutcome,
): NFeAuthorizationOutcome {
  const mappedTransport =
    mapTransportOutcomeToAuthorizationClassification(transportOutcome);
  const responseXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const protocolNumber = extractFirstTagText(responseXml, 'nProt');
  const receiptNumber = extractFirstTagText(responseXml, 'nRec');
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
    protocolNumber,
    receiptNumber,
    transportOutcome,
  };
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

  return match?.[1];
}

function resolveAuthorizationClassification(
  classification: NFeAuthorizationOutcome['classification'],
  protocolNumber: string | undefined,
  receiptNumber: string | undefined,
  applicationStatusCode: string | undefined,
): NFeAuthorizationOutcome['classification'] {
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
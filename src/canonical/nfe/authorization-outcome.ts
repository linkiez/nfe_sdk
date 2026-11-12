import type { TransportOutcome } from '../transport/contracts.js';

import type { NFeAuthorizationBatch, NFeAuthorizationOutcome } from './contracts.js';
import { mapTransportOutcomeToAuthorizationClassification } from './transport-outcome-mapper.js';

const AUTHORIZED_STATUS_CODES = new Set(['100', '104']);
const RECEIVED_STATUS_CODE = '103';
/** Protocol statuses that mean the document was authorized (100; 150 = out of time). */
const AUTHORIZED_PROTOCOL_STATUS_CODES = new Set(['100', '150']);
/** Uso Denegado: emitente (301), destinatario (302) e demais irregularidades (110). */
const DENIED_STATUS_CODES = new Set(['110', '301', '302']);

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
  const protocolStatus = extractProtocolStatus(responseXml);
  const protocolFailureReason = getProductionProtocolFailureReason(
    originalTransportOutcome,
    responseXml,
    protocolNumber,
    receiptNumber,
    protocolStatus,
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
  const baseClassification = isDeniedResponse(transportOutcome, responseXml)
    ? ('denied' as const)
    : resolveAuthorizationClassification(
        mappedTransport.classification,
        protocolNumber,
        receiptNumber,
        transportOutcome.applicationStatusCode,
      );
  // A processed batch (cStat 104) can carry a rejection inside protNFe/infProt. A rejected
  // document gets no nProt, so the batch is not 'authorized' here and would stay 'received'.
  const classification =
    isRejectedInProcessedBatch(
      baseClassification,
      transportOutcome.applicationStatusCode,
      protocolStatus,
    )
      ? ('rejected' as const)
      : baseClassification;

  return {
    classification,
    documentStatuses: batch.documents.map((document) => ({
      documentId: document.metadata.documentId,
    })),
    failureReason:
      classification === 'rejected' && protocolStatus !== undefined
        ? (protocolStatus.message ?? mappedTransport.failureReason)
        : mappedTransport.failureReason,
    ...(protocolStatus === undefined
      ? {}
      : {
          protocolStatusCode: protocolStatus.code,
          ...(protocolStatus.message === undefined
            ? {}
            : { protocolStatusMessage: protocolStatus.message }),
        }),
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
  protocolStatus: { code: string; message?: string } | undefined,
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
    protocolNumber === undefined &&
    (protocolStatus === undefined ||
      AUTHORIZED_PROTOCOL_STATUS_CODES.has(protocolStatus.code))
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

/**
 * A denial arrives either as the top-level `cStat` or as the `cStat` of `protNFe/infProt`
 * (the batch itself is reported as processed). It must never be read as authorized even
 * though the denied document carries a protocol number.
 */
function isDeniedResponse(
  transportOutcome: TransportOutcome,
  responseXml: string,
): boolean {
  if (
    transportOutcome.classification !== 'success' &&
    transportOutcome.classification !== 'functional-rejection'
  ) {
    return false;
  }

  const protocolStatus = /<infProt>[\s\S]*?<cStat>([^<]+)<\/cStat>/u
    .exec(responseXml)?.[1]
    ?.trim();

  return [transportOutcome.applicationStatusCode, protocolStatus].some(
    (code) => code !== undefined && DENIED_STATUS_CODES.has(code),
  );
}

/**
 * True when the batch was processed (authorized-like top-level status) but its document status
 * is neither an authorization nor a denial: the document itself was rejected.
 */
function isRejectedInProcessedBatch(
  classification: NFeAuthorizationOutcome['classification'],
  applicationStatusCode: string | undefined,
  protocolStatus: { code: string } | undefined,
): boolean {
  if (protocolStatus === undefined) {
    return false;
  }
  if (AUTHORIZED_PROTOCOL_STATUS_CODES.has(protocolStatus.code)) {
    return false;
  }
  if (classification === 'authorized') {
    return true;
  }

  return (
    classification === 'received' &&
    AUTHORIZED_STATUS_CODES.has(applicationStatusCode ?? '')
  );
}

/** `cStat`/`xMotivo` of `protNFe/infProt`, when the response carries a protocol. */
function extractProtocolStatus(
  responseXml: string,
): { code: string; message?: string } | undefined {
  const infProt = /<infProt>([\s\S]*?)<\/infProt>/u.exec(responseXml)?.[1];
  const code = infProt === undefined ? undefined : extractFirstTagText(infProt, 'cStat');

  return code === undefined
    ? undefined
    : { code, message: extractFirstTagText(infProt ?? '', 'xMotivo') };
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
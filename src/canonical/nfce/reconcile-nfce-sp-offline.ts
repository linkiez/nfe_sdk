import { createHash } from 'node:crypto';
import { DOMParser } from '@xmldom/xmldom';

import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { TransportOutcome } from '../transport/contracts.js';
import { NFCeOperationalUsageError } from './errors.js';
import type {
  NFCeSPOfflineRecord,
  NFCeSPOfflineReconciliationClassification,
  NFCeSPOfflineReconciliationResult,
  ReconcileNFCeSPOfflineInput,
} from './contracts.js';
import { validateNFCeSPOfflineBusinessCalendar } from './offline-business-calendar.js';

const NFCe_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const DUPLICATE_STATUS_CODES = new Set(['204', '539']);

type XmlDocument = ReturnType<DOMParser['parseFromString']>;
type XmlElement = import('@xmldom/xmldom').Element;

function parseXml(xml: string): XmlDocument | undefined {
  const errors: string[] = [];
  try {
    const document = new DOMParser({
      onError: (level, message) => {
        if (level === 'error' || level === 'fatalError') errors.push(message);
      },
    }).parseFromString(xml, 'application/xml');
    return errors.length === 0 && document.documentElement !== null
      ? document
      : undefined;
  } catch {
    return undefined;
  }
}

function child(parent: XmlElement, name: string): XmlElement | undefined {
  return Array.from(parent.childNodes).find(
    (node): node is XmlElement =>
      node.nodeType === 1 && (node as XmlElement).localName === name,
  );
}

function text(parent: XmlElement | undefined, name: string): string | undefined {
  return parent === undefined
    ? undefined
    : child(parent, name)?.textContent?.trim();
}

function validateRecord(record: NFCeSPOfflineRecord): void {
  validateNFCeSPOfflineBusinessCalendar(
    record.businessCalendarEvidence,
    record.issuedAt,
    record.submissionDeadline,
  );
  const actualDigest = createHash('sha256')
    .update(record.signedXml, 'utf8')
    .digest('hex');
  const document = parseXml(record.signedXml);
  const nfe = document?.documentElement;
  const infNFe = nfe === undefined || nfe === null ? undefined : child(nfe, 'infNFe');
  const ide = infNFe === undefined ? undefined : child(infNFe, 'ide');
  const expectedTpAmb = record.environment === 'production' ? '1' : '2';
  if (
    record.status !== 'pending-reconciliation' ||
    actualDigest !== record.signedXmlSha256 ||
    nfe?.localName !== 'NFe' ||
    nfe.namespaceURI !== NFCe_NAMESPACE ||
    infNFe?.getAttribute('Id') !== `NFe${record.accessKey}` ||
    text(ide, 'cUF') !== '35' ||
    text(ide, 'mod') !== '65' ||
    text(ide, 'tpEmis') !== '9' ||
    text(ide, 'tpAmb') !== expectedTpAmb
  ) {
    throw new NFCeOperationalUsageError(
      'reconcileNFCeSPOffline requires a valid pending SP model 65 tpEmis 9 record with matching XML digest and identity.',
    );
  }
}

function createSynchronousPayload(signedXml: string): string {
  const cleanXml = signedXml.replace(/^\s*<\?xml[^?]*\?>/u, '').trim();
  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<enviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">',
    '<idLote>000000000000001</idLote>',
    '<indSinc>1</indSinc>',
    cleanXml,
    '</enviNFe>',
  ].join('');
}

function result(
  record: NFCeSPOfflineRecord,
  classification: NFCeSPOfflineReconciliationClassification,
  options: {
    readonly operatorActionRequired?: boolean;
    readonly protocolNumber?: string;
    readonly receiptNumber?: string;
    readonly statusCode?: string;
    readonly statusMessage?: string;
    readonly transportOutcome?: TransportOutcome;
  } = {},
): NFCeSPOfflineReconciliationResult {
  return {
    accessKey: record.accessKey,
    classification,
    operatorActionRequired:
      options.operatorActionRequired ??
      (classification !== 'authorized' && classification !== 'received'),
    receiptNumber: options.receiptNumber,
    signedXmlSha256: record.signedXmlSha256,
    statusCode: options.statusCode,
    statusMessage: options.statusMessage,
    protocolNumber: options.protocolNumber,
    transportOutcome: options.transportOutcome,
  };
}

function classifyResponse(
  record: NFCeSPOfflineRecord,
  transportOutcome: TransportOutcome,
): NFCeSPOfflineReconciliationResult {
  if (transportOutcome.classification === 'timeout') {
    return result(record, 'timeout', {
      statusMessage: transportOutcome.failureReason,
      transportOutcome,
    });
  }
  if (transportOutcome.classification === 'unavailable') {
    return result(record, 'unavailable', {
      statusCode: transportOutcome.applicationStatusCode,
      statusMessage:
        transportOutcome.applicationStatusMessage ?? transportOutcome.failureReason,
      transportOutcome,
    });
  }
  if (transportOutcome.classification === 'protocol-error') {
    return result(record, 'inconclusive', {
      statusCode: transportOutcome.applicationStatusCode,
      statusMessage:
        transportOutcome.applicationStatusMessage ?? transportOutcome.failureReason,
      transportOutcome,
    });
  }

  const rawResponse = transportOutcome.evidence.responseEnvelopeXml;
  const document = rawResponse === undefined ? undefined : parseXml(rawResponse);
  const response = document?.getElementsByTagNameNS(NFCe_NAMESPACE, 'retEnviNFe').item(0);
  if (response === null || response === undefined) {
    return result(record, 'inconclusive', {
      statusCode: transportOutcome.applicationStatusCode,
      statusMessage: 'SEFAZ response did not contain retEnviNFe.',
      transportOutcome,
    });
  }

  const statusCode = text(response, 'cStat') ?? transportOutcome.applicationStatusCode;
  const statusMessage = text(response, 'xMotivo') ?? transportOutcome.applicationStatusMessage;
  const responseEnvironment = text(response, 'tpAmb');
  const expectedEnvironment = record.environment === 'production' ? '1' : '2';
  if (responseEnvironment !== expectedEnvironment) {
    return result(record, 'inconclusive', {
      statusCode,
      statusMessage: 'SEFAZ response tpAmb does not match the offline record.',
      transportOutcome,
    });
  }

  if (statusCode === '103') {
    const receiptNumber = text(response, 'nRec');
    return receiptNumber === undefined
      ? result(record, 'inconclusive', {
          statusCode,
          statusMessage: 'SEFAZ receipt response is missing nRec.',
          transportOutcome,
        })
      : result(record, 'received', {
          receiptNumber,
          statusCode,
          statusMessage,
          transportOutcome,
        });
  }

  if (statusCode === '100' || statusCode === '104') {
    const protocol = response.getElementsByTagNameNS(NFCe_NAMESPACE, 'infProt').item(0);
    const responseKey = text(protocol ?? undefined, 'chNFe');
    const protocolNumber = text(protocol ?? undefined, 'nProt');
    const nestedEnvironment = text(protocol ?? undefined, 'tpAmb');
    const nestedStatus = text(protocol ?? undefined, 'cStat');
    if (
      responseKey !== record.accessKey ||
      protocolNumber === undefined ||
      nestedEnvironment !== expectedEnvironment ||
      nestedStatus !== '100'
    ) {
      return result(record, 'inconclusive', {
        statusCode,
        statusMessage: 'Authorization response does not correlate to the offline record.',
        transportOutcome,
      });
    }
    return result(record, 'authorized', {
      protocolNumber,
      statusCode,
      statusMessage,
      operatorActionRequired: false,
      transportOutcome,
    });
  }

  if (statusCode !== undefined && DUPLICATE_STATUS_CODES.has(statusCode)) {
    return result(record, 'duplicate', {
      statusCode,
      statusMessage,
      transportOutcome,
    });
  }

  return result(record, 'rejected', {
    statusCode,
    statusMessage,
    transportOutcome,
  });
}

/**
 * Makes one explicit SP authorization attempt for a retained offline NFC-e.
 *
 * @param input - Pending record and optional injected transport.
 * @returns Correlated outcome and original XML digest for caller-owned tracking.
 * @throws {NFCeOperationalUsageError} When the record is malformed or inconsistent.
 */
export async function reconcileNFCeSPOffline(
  input: ReconcileNFCeSPOfflineInput,
): Promise<NFCeSPOfflineReconciliationResult> {
  const record = input.offlineRecord;
  validateRecord(record);
  const deadline = Date.parse(record.submissionDeadline);
  if (
    !Number.isFinite(deadline) ||
    !/^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:\d{2})$/u.test(
      record.submissionDeadline,
    )
  ) {
    throw new NFCeOperationalUsageError(
      'reconcileNFCeSPOffline requires a valid submissionDeadline instant.',
    );
  }
  if (Date.now() > deadline) {
    return result(record, 'deadline-expired', {
      statusMessage: 'The official offline transmission deadline has passed.',
    });
  }

  const transportOutcome = await executeNFeSoapService({
    authorizer: 'SP',
    environment: record.environment,
    payloadXml: createSynchronousPayload(record.signedXml),
    requestExecutor: input.requestExecutor,
    service: 'nfce-authorization-sp',
    timeoutMs: input.timeoutMs,
  });
  return classifyResponse(record, transportOutcome);
}
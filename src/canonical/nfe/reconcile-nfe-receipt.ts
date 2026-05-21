import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { TransportOutcome } from '../transport/contracts.js';

import {
  buildConsReciNFeXml,
  parseRetConsReciNFe,
} from './async-batch-retrieval.js';
import type {
  AsyncBatchItemResult,
  NFeOperationalPrimaryState,
  NFeReceiptReconciliationClassification,
  NFeReceiptReconciliationRequest,
  NFeReceiptReconciliationResult,
} from './contracts.js';
import {
  createOperationalState,
  createOperationalStateEvidence,
} from './operational-state.js';

const BATCH_PROCESSING_STAT = '105';
const BATCH_NOT_FOUND_STAT = '215';
const UNAVAILABLE_STATUS_CODES = new Set(['108', '109']);

/**
 * Reconciles a known NF-e receipt number into the operational receipt result.
 *
 * @param input - Structured receipt reconciliation request.
 * @returns Structured receipt reconciliation result.
 */
export async function reconcileNFeReceipt(
  input: NFeReceiptReconciliationRequest,
): Promise<NFeReceiptReconciliationResult> {
  const receiptNumber = input.receiptNumber.trim();

  if (receiptNumber.length === 0) {
    return createFailureResult({
      classification: 'usage-error',
      receiptNumber: input.receiptNumber,
      statusMessage: 'receiptNumber is required for receipt reconciliation.',
      transportOutcome: createSyntheticTransportOutcome({
        classification: 'usage-error',
        environment: input.routingContext.environment,
        failureReason: 'receiptNumber is required for receipt reconciliation.',
      }),
    });
  }

  const tpAmb: '1' | '2' =
    input.routingContext.environment === 'production' ? '1' : '2';
  const payloadXml = buildConsReciNFeXml(receiptNumber, tpAmb);
  const transportOutcome = await executeNFeSoapService({
    environment: input.routingContext.environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-authorization-batch',
    timeoutMs: input.timeoutMs,
  });

  if (transportOutcome.classification === 'usage-error') {
    return createFailureResult({
      classification: 'usage-error',
      receiptNumber,
      statusMessage: transportOutcome.failureReason,
      transportOutcome,
    });
  }

  if (
    transportOutcome.classification === 'protocol-error' ||
    transportOutcome.classification === 'timeout' ||
    transportOutcome.classification === 'unavailable'
  ) {
    const transportStatusMessage =
      transportOutcome.applicationStatusMessage ?? transportOutcome.failureReason;

    return createFailureResult({
      classification:
        transportOutcome.classification === 'protocol-error'
          ? 'protocol-error'
          : 'unavailable',
      receiptNumber,
      state: createTransportState({
        pendingReason: transportStatusMessage,
        primaryState: 'unavailable',
        statusCode: transportOutcome.applicationStatusCode,
        statusMessage: transportStatusMessage,
        transportOutcome,
      }),
      statusCode: transportOutcome.applicationStatusCode,
      statusMessage: transportStatusMessage,
      transportOutcome,
    });
  }

  const rawResponse = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const batchOutcome = parseRetConsReciNFe(rawResponse);
  const batchStatusCode = extractTagText(rawResponse, 'cStat');
  const batchStatusMessage = extractTagText(rawResponse, 'xMotivo');

  if (batchOutcome.classification === 'processing') {
    return {
      classification: 'pending',
      items: batchOutcome.items,
      rawResponse: batchOutcome.rawResponse,
      receiptNumber,
      state: createTransportState({
        pendingReason: batchStatusMessage,
        primaryState: 'pending',
        statusCode: batchStatusCode,
        statusMessage: batchStatusMessage,
        transportOutcome,
      }),
      statusCode: batchStatusCode ?? BATCH_PROCESSING_STAT,
      statusMessage: batchStatusMessage,
      transportOutcome,
    };
  }

  if (batchOutcome.classification === 'not-found') {
    return createFailureResult({
      classification: 'not-found',
      rawResponse: batchOutcome.rawResponse,
      receiptNumber,
      statusCode: batchStatusCode ?? BATCH_NOT_FOUND_STAT,
      statusMessage: batchStatusMessage,
      transportOutcome,
    });
  }

  if (batchOutcome.classification !== 'complete') {
    return createFailureResult({
      classification: 'protocol-error',
      rawResponse: batchOutcome.rawResponse,
      receiptNumber,
      statusCode: batchStatusCode,
      statusMessage: batchStatusMessage,
      transportOutcome,
    });
  }

  if (batchOutcome.items.length !== 1) {
    return createFailureResult({
      classification: 'inconclusive',
      items: batchOutcome.items,
      rawResponse: batchOutcome.rawResponse,
      receiptNumber,
      state: createTransportState({
        pendingReason:
          batchStatusMessage ?? 'Receipt reconciliation returned multiple protocol items.',
        primaryState: 'inconclusive',
        statusCode: batchStatusCode,
        statusMessage:
          batchStatusMessage ?? 'Receipt reconciliation returned multiple protocol items.',
        transportOutcome,
      }),
      statusCode: batchStatusCode,
      statusMessage:
        batchStatusMessage ?? 'Receipt reconciliation returned multiple protocol items.',
      transportOutcome,
    });
  }

  return mapSingleBatchItem({
    item: batchOutcome.items[0],
    rawResponse: batchOutcome.rawResponse,
    receiptNumber,
    transportOutcome,
  });
}

function mapSingleBatchItem(input: {
  readonly item: AsyncBatchItemResult;
  readonly rawResponse?: string;
  readonly receiptNumber: string;
  readonly transportOutcome: TransportOutcome;
}): NFeReceiptReconciliationResult {
  switch (input.item.classification) {
    case 'authorized':
      return createItemResult({
        classification: 'authorized',
        item: input.item,
        primaryState: 'authorized',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
    case 'rejected':
      return createItemResult({
        classification: 'rejected',
        item: input.item,
        primaryState: 'rejected',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
    case 'denied':
      return createItemResult({
        classification: 'denied',
        item: input.item,
        primaryState: 'rejected',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
    case 'pending':
      return createItemResult({
        classification: 'pending',
        item: input.item,
        pendingReason: input.item.statusDescription,
        primaryState: 'pending',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
    case 'cancelled':
      return createItemResult({
        classification: 'inconclusive',
        item: input.item,
        pendingReason: input.item.statusDescription,
        primaryState: 'inconclusive',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
    case 'processing-error':
      return createItemResult({
        classification: UNAVAILABLE_STATUS_CODES.has(input.item.statusCode)
          ? 'unavailable'
          : 'inconclusive',
        item: input.item,
        pendingReason: input.item.statusDescription,
        primaryState: UNAVAILABLE_STATUS_CODES.has(input.item.statusCode)
          ? 'unavailable'
          : 'inconclusive',
        rawResponse: input.rawResponse,
        receiptNumber: input.receiptNumber,
        transportOutcome: input.transportOutcome,
      });
  }
}

function createItemResult(input: {
  readonly classification: NFeReceiptReconciliationClassification;
  readonly item: AsyncBatchItemResult;
  readonly pendingReason?: string;
  readonly primaryState: NFeOperationalPrimaryState;
  readonly rawResponse?: string;
  readonly receiptNumber: string;
  readonly transportOutcome: TransportOutcome;
}): NFeReceiptReconciliationResult {
  return {
    classification: input.classification,
    documentKey: input.item.chNFe,
    items: [input.item],
    protocolNumber: input.item.protocolNumber,
    rawResponse: input.rawResponse,
    receiptNumber: input.receiptNumber,
    state: createTransportState({
      pendingReason: input.pendingReason,
      primaryState: input.primaryState,
      protocolNumber: input.item.protocolNumber,
      statusCode: input.item.statusCode,
      statusMessage: input.item.statusDescription,
      transportOutcome: input.transportOutcome,
    }),
    statusCode: input.item.statusCode,
    statusMessage: input.item.statusDescription,
    transportOutcome: input.transportOutcome,
  };
}

function createFailureResult(input: {
  readonly classification: NFeReceiptReconciliationClassification;
  readonly items?: readonly AsyncBatchItemResult[];
  readonly rawResponse?: string;
  readonly receiptNumber: string;
  readonly state?: NFeReceiptReconciliationResult['state'];
  readonly statusCode?: string;
  readonly statusMessage?: string;
  readonly transportOutcome: TransportOutcome;
}): NFeReceiptReconciliationResult {
  return {
    classification: input.classification,
    items: input.items ?? [],
    rawResponse: input.rawResponse,
    receiptNumber: input.receiptNumber,
    state: input.state,
    statusCode: input.statusCode,
    statusMessage: input.statusMessage,
    transportOutcome: input.transportOutcome,
  };
}

function createTransportState(input: {
  readonly pendingReason?: string;
  readonly primaryState: NFeOperationalPrimaryState;
  readonly protocolNumber?: string;
  readonly statusCode?: string;
  readonly statusMessage?: string;
  readonly transportOutcome: TransportOutcome;
}) {
  return createOperationalState({
    evidence: [
      createOperationalStateEvidence({
        protocolNumber: input.protocolNumber,
        sourceKind: 'protocol',
        statusCode: input.statusCode,
        statusMessage: input.statusMessage,
        transportOutcome: input.transportOutcome,
      }),
    ],
    pendingReason: input.pendingReason,
    primaryState: input.primaryState,
    protocolNumber: input.protocolNumber,
    stateCode: input.statusCode,
    stateMessage: input.statusMessage,
  });
}

function createSyntheticTransportOutcome(input: {
  readonly classification: TransportOutcome['classification'];
  readonly environment: TransportOutcome['environment'];
  readonly failureReason?: string;
}): TransportOutcome {
  return {
    classification: input.classification,
    environment: input.environment,
    evidence: {
      endpointUrl: '',
      provider: 'SVCAN',
      requestEnvelopeXml: '',
    },
    failureReason: input.failureReason,
    service: 'nfe-authorization-batch',
  };
}

function extractTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]*)</${tagName}>`, 'u').exec(xml);
  return match?.[1];
}
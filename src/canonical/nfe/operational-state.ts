import type { TransportOutcome } from '../transport/contracts.js';

import type {
  NFeMaintenanceOperation,
  NFeOperationalPrimaryState,
  NFeOperationalState,
  NFeStateEvidence,
  NFeStateEvidenceSourceKind,
} from './contracts.js';

const AUTHORIZED_STATUS_CODES = new Set(['100', '150']);
const CANCELED_STATUS_CODES = new Set(['101', '151', '155']);
const INUTILIZED_STATUS_CODES = new Set(['102']);
const PENDING_STATUS_CODES = new Set(['103', '105']);
const REJECTED_STATUS_CODES = new Set(['110', '204', '205', '301', '302']);
const UNAVAILABLE_STATUS_CODES = new Set(['108', '109']);

interface BaseOperationalStateInput {
  readonly accessKey?: string;
  readonly pendingReason?: string;
  readonly primaryState: NFeOperationalPrimaryState;
  readonly protocolNumber?: string;
  readonly stateCode?: string;
  readonly stateMessage?: string;
}

export interface NFeOperationalEvidenceInput {
  readonly observedAt?: string;
  readonly protocolNumber?: string;
  readonly sourceKind: NFeStateEvidenceSourceKind;
  readonly statusCode?: string;
  readonly statusMessage?: string;
  readonly transportOutcome: TransportOutcome;
}

export interface QueryOperationalStateInput {
  readonly accessKey: string;
  readonly transportOutcome: TransportOutcome;
}

export interface MaintenanceOperationalStateInput {
  readonly accessKey?: string;
  readonly operation: NFeMaintenanceOperation;
  readonly transportOutcome: TransportOutcome;
}

export function createOperationalStateEvidence(
  input: NFeOperationalEvidenceInput,
): NFeStateEvidence {
  return {
    observedAt: input.observedAt ?? new Date().toISOString(),
    protocolNumber: input.protocolNumber,
    sourceKind: input.sourceKind,
    statusCode: input.statusCode,
    statusMessage: input.statusMessage,
    transportClassification: input.transportOutcome.classification,
  };
}

export function createOperationalState(
  input: BaseOperationalStateInput & {
    readonly evidence: readonly NFeStateEvidence[];
  },
): NFeOperationalState {
  return {
    accessKey: input.accessKey,
    evidence: input.evidence,
    pendingReason: input.pendingReason,
    primaryState: input.primaryState,
    protocolNumber: input.protocolNumber,
    stateCode: input.stateCode,
    stateMessage: input.stateMessage,
  };
}

export function mapDocumentSituationToOperationalState(
  input: QueryOperationalStateInput,
): NFeOperationalState {
  const statusCode = input.transportOutcome.applicationStatusCode;
  const statusMessage = input.transportOutcome.applicationStatusMessage;
  const protocolNumber = extractFirstTagText(
    input.transportOutcome.evidence.responseEnvelopeXml ?? '',
    'nProt',
  );
  const primaryState = resolveDocumentSituationPrimaryState({
    protocolNumber,
    statusCode,
    transportOutcome: input.transportOutcome,
  });

  return createOperationalState({
    accessKey: input.accessKey,
    evidence: [
      createOperationalStateEvidence({
        protocolNumber,
        sourceKind: 'document-situation',
        statusCode,
        statusMessage,
        transportOutcome: input.transportOutcome,
      }),
    ],
    pendingReason: createPendingReason({
      primaryState,
      statusMessage,
      transportOutcome: input.transportOutcome,
    }),
    primaryState,
    protocolNumber,
    stateCode: statusCode,
    stateMessage: statusMessage,
  });
}

export function mapMaintenanceToOperationalState(
  input: MaintenanceOperationalStateInput,
): NFeOperationalState | undefined {
  if (input.transportOutcome.classification !== 'success') {
    return undefined;
  }

  const responseXml = input.transportOutcome.evidence.responseEnvelopeXml ?? '';
  const protocolNumber = extractFirstTagText(responseXml, 'nProt');
  const stateCode = extractLastTagText(responseXml, 'cStat');
  const stateMessage = extractLastTagText(responseXml, 'xMotivo');

  return createOperationalState({
    accessKey: input.accessKey,
    evidence: [
      createOperationalStateEvidence({
        protocolNumber,
        sourceKind: 'maintenance-response',
        statusCode: stateCode ?? input.transportOutcome.applicationStatusCode,
        statusMessage:
          stateMessage ?? input.transportOutcome.applicationStatusMessage,
        transportOutcome: input.transportOutcome,
      }),
    ],
    primaryState: mapOperationToPrimaryState(input.operation),
    protocolNumber,
    stateCode: stateCode ?? input.transportOutcome.applicationStatusCode,
    stateMessage: stateMessage ?? input.transportOutcome.applicationStatusMessage,
  });
}

export function resolveDocumentSituationClassification(
  state: NFeOperationalState,
  transportOutcome: TransportOutcome,
):
  | 'inconclusive'
  | 'not-found'
  | 'protocol-error'
  | 'success'
  | 'timeout'
  | 'unavailable'
  | 'usage-error' {
  switch (transportOutcome.classification) {
    case 'timeout':
      return 'timeout';
    case 'unavailable':
      return 'unavailable';
    case 'protocol-error':
      return 'protocol-error';
    case 'usage-error':
      return 'usage-error';
    case 'success':
      return state.primaryState === 'inconclusive' ? 'inconclusive' : 'success';
    case 'functional-rejection':
      return state.primaryState === 'inconclusive' ? 'not-found' : 'success';
    default:
      return 'protocol-error';
  }
}

function resolveDocumentSituationPrimaryState(input: {
  readonly protocolNumber?: string;
  readonly statusCode?: string;
  readonly transportOutcome: TransportOutcome;
}): NFeOperationalPrimaryState {
  const statusCode = input.statusCode ?? '';

  if (
    input.transportOutcome.classification === 'unavailable' ||
    UNAVAILABLE_STATUS_CODES.has(statusCode)
  ) {
    return 'unavailable';
  }

  if (input.transportOutcome.classification === 'timeout') {
    return 'pending';
  }

  if (AUTHORIZED_STATUS_CODES.has(statusCode)) {
    return input.protocolNumber === undefined ? 'inconclusive' : 'authorized';
  }

  if (CANCELED_STATUS_CODES.has(statusCode)) {
    return 'canceled';
  }

  if (INUTILIZED_STATUS_CODES.has(statusCode)) {
    return 'inutilized';
  }

  if (PENDING_STATUS_CODES.has(statusCode)) {
    return 'pending';
  }

  if (REJECTED_STATUS_CODES.has(statusCode)) {
    return 'rejected';
  }

  return 'inconclusive';
}

function createPendingReason(input: {
  readonly primaryState: NFeOperationalPrimaryState;
  readonly statusMessage?: string;
  readonly transportOutcome: TransportOutcome;
}): string | undefined {
  if (
    input.primaryState !== 'pending' &&
    input.primaryState !== 'inconclusive' &&
    input.primaryState !== 'unavailable'
  ) {
    return undefined;
  }

  return input.transportOutcome.failureReason ?? input.statusMessage;
}

function mapOperationToPrimaryState(
  operation: NFeMaintenanceOperation,
): NFeOperationalPrimaryState {
  switch (operation) {
    case 'cancel-nfe':
      return 'canceled';
    case 'submit-nfe-inutilization':
      return 'inutilized';
    case 'submit-nfe-correction-letter':
      return 'authorized';
    default:
      return 'inconclusive';
  }
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

  return match?.[1];
}

function extractLastTagText(xml: string, tagName: string): string | undefined {
  const matches = [
    ...xml.matchAll(new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'gu')),
  ];

  return matches.at(-1)?.[1];
}
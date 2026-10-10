import type {
  CanonicalEnviNFeDocument,
  CanonicalEnviNFeInput,
  CanonicalNFeDocument,
  CanonicalNFeInput,
} from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';
import type {
  ObservableContingencyBoundary,
  ObservableContingencyEnvironment,
  TransportOutcome,
} from '../transport/contracts.js';

const AUTHORIZATION_CLASSIFICATIONS = [
  'authorized',
  'contingency-boundary',
  'received',
  'rejected',
  'timeout',
  'unavailable',
  'protocol-error',
  'usage-error',
] as const;

const QUERY_CLASSIFICATIONS = [
  'success',
  'not-found',
  'inconclusive',
  'timeout',
  'unavailable',
  'protocol-error',
  'usage-error',
] as const;

const MAINTENANCE_CLASSIFICATIONS = [
  'success',
  'rejected',
  'unsupported-scope',
  'timeout',
  'unavailable',
  'protocol-error',
  'usage-error',
] as const;

/**
 * Public document input supported by the operational authorization facade.
 */
export type NFeAuthorizationDocumentsInput =
  | {
      /** Single-document submission path. */
      readonly kind: 'single-document';
      /** Canonical document input or normalized canonical document. */
      readonly payload: CanonicalNFeDocument | CanonicalNFeInput;
    }
  | {
      /** Batch submission path. */
      readonly kind: 'batch';
      /** Canonical batch input or normalized canonical batch. */
      readonly payload: CanonicalEnviNFeDocument | CanonicalEnviNFeInput;
    };

/**
 * Structured authorization request accepted by the operational layer.
 */
export interface NFeAuthorizationRequest {
  /** Authorization target environment. */
  readonly environment: string;
  /** Single-document or batch authorization payload. */
  readonly documents: NFeAuthorizationDocumentsInput;
  /** Reusable signing context prepared by the signing slice. */
  readonly signingContext: SigningContext;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
}

/**
 * Canonical authorization batch normalized for orchestration.
 */
export interface NFeAuthorizationBatch {
  /** Batch identifier reused by transport and result mapping. */
  readonly batchId: string;
  /** Canonical documents that compose the submission. */
  readonly documents: readonly CanonicalNFeDocument[];
  /** Number of documents in the submission. */
  readonly documentCount: number;
  /** Submission mode observed by the operational facade. */
  readonly submissionMode: 'batch' | 'single-document';
}

/**
 * Authorization result classifications exposed by the operational slice.
 */
export type NFeAuthorizationClassification =
  (typeof AUTHORIZATION_CLASSIFICATIONS)[number];

export type NFeContingencyEnvironment = ObservableContingencyEnvironment;

export type NFeContingencyBoundary = ObservableContingencyBoundary;

/**
 * Query result classifications exposed by the operational slice.
 */
export type NFeQueryClassification = (typeof QUERY_CLASSIFICATIONS)[number];

const RECEIPT_RECONCILIATION_CLASSIFICATIONS = [
  'authorized',
  'rejected',
  'denied',
  'unavailable',
  'inconclusive',
  'pending',
  'not-found',
  'protocol-error',
  'usage-error',
] as const;

/**
 * Maintenance result classifications exposed by the operational slice.
 */
export type NFeMaintenanceClassification =
  (typeof MAINTENANCE_CLASSIFICATIONS)[number];

/**
 * Receipt reconciliation classifications exposed by the operational slice.
 */
export type NFeReceiptReconciliationClassification =
  (typeof RECEIPT_RECONCILIATION_CLASSIFICATIONS)[number];

export type NFeOperationalPrimaryState =
  | 'authorized'
  | 'rejected'
  | 'canceled'
  | 'inutilized'
  | 'pending'
  | 'unavailable'
  | 'inconclusive';

export type NFeStateEvidenceSourceKind =
  | 'document-situation'
  | 'maintenance-response'
  | 'transport'
  | 'protocol'
  | 'event';

export interface NFeStateEvidence {
  readonly observedAt: string;
  readonly protocolNumber?: string;
  readonly sourceKind: NFeStateEvidenceSourceKind;
  readonly statusCode?: string;
  readonly statusMessage?: string;
  readonly transportClassification: TransportOutcome['classification'];
}

export interface NFeOperationalState {
  readonly accessKey?: string;
  readonly evidence: readonly NFeStateEvidence[];
  readonly pendingReason?: string;
  readonly primaryState: NFeOperationalPrimaryState;
  readonly protocolNumber?: string;
  readonly stateCode?: string;
  readonly stateMessage?: string;
}

export interface OperationalBoundary {
  readonly boundaryId:
    | 'local-persistence'
    | 'multi-document-reconciliation'
    | 'receipt-polling'
    | 'uf-variance';
  readonly followUpHint: string;
  readonly reason: string;
  readonly relatedTheme: 'RFL-001' | 'RTM-004' | 'RTM-006' | 'RTM-011' | 'RTM-012';
}

const OPERATIONAL_BOUNDARIES = [
  {
    boundaryId: 'receipt-polling',
    followUpHint:
      'Keep generic polling, repeated retry loops, and portfolio receipt orchestration outside the root contract.',
    reason:
      'The root contract now promotes one-shot receipt reconciliation by known nRec, but does not open generic polling loops or unattended receipt orchestration.',
    relatedTheme: 'RFL-001',
  },
  {
    boundaryId: 'multi-document-reconciliation',
    followUpHint: 'Promote a later orchestration slice for batch or portfolio reconciliation.',
    reason:
      'This slice only reconciles one target document or one maintenance operation at a time.',
    relatedTheme: 'RTM-006',
  },
  {
    boundaryId: 'local-persistence',
    followUpHint: 'Promote a persistence-aware integration layer outside the SDK root contract.',
    reason:
      'The runtime slice does not persist state snapshots, queues, or reconciliation history locally.',
    relatedTheme: 'RTM-004',
  },
  {
    boundaryId: 'uf-variance',
    followUpHint: 'Promote a later coverage slice when state-specific operational differences are stabilized.',
    reason:
      'Dominant UF-specific operational differences remain explicit boundaries in this phase.',
    relatedTheme: 'RTM-011',
  },
] as const satisfies readonly OperationalBoundary[];

/**
 * Minimal per-document authorization status placeholder.
 */
export interface NFeAuthorizationDocumentStatus {
  /** Stable document identifier. */
  readonly documentId: string;
  /** Application status code when available. */
  readonly statusCode?: string;
  /** Human-readable status description when available. */
  readonly statusMessage?: string;
}

/**
 * Structured authorization result returned by the operational slice.
 */
export interface NFeAuthorizationOutcome {
  /** Operational authorization classification. */
  readonly classification: NFeAuthorizationClassification;
  /** Explicit contingency boundary when the flow is diagnosed before transport. */
  readonly coverageBoundary?: NFeContingencyBoundary;
  /** Per-document statuses observed in the response. */
  readonly documentStatuses: readonly NFeAuthorizationDocumentStatus[];
  /** Synthesized failure reason when the flow cannot complete. */
  readonly failureReason?: string;
  /** Existing facade to call when authorization returns a known receipt. */
  readonly nextAction?: 'reconcileNFeReceipt';
  /** Protocol number when immediately available. */
  readonly protocolNumber?: string;
  /** Receipt number when the exchange remains intermediate. */
  readonly receiptNumber?: string;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Explicit routing context required to reconcile a known `nRec`.
 */
export interface NFeReceiptRoutingContext {
  /** Authorizer declared by the integrator for the receipt lookup. */
  readonly authorizer: import('../transport/uf-routing.js').NFeSEFAZAutorizador;
  /** Execution environment used for the receipt lookup. */
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
}

/**
 * Structured receipt reconciliation request accepted by the operational layer.
 */
export interface NFeReceiptReconciliationRequest {
  /** Known receipt number returned by a previous authorization submission. */
  readonly receiptNumber: string;
  /** Explicit routing context for the lookup. */
  readonly routingContext: NFeReceiptRoutingContext;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
}

/**
 * Structured receipt reconciliation result returned by the operational layer.
 */
export interface NFeReceiptReconciliationResult {
  /** Receipt reconciliation classification. */
  readonly classification: NFeReceiptReconciliationClassification;
  /** Access key resolved from the reconciled protocol item when available. */
  readonly documentKey?: string;
  /** Batch items observed in the official response. */
  readonly items: readonly AsyncBatchItemResult[];
  /** Final protocol number when available. */
  readonly protocolNumber?: string;
  /** Queried receipt number. */
  readonly receiptNumber: string;
  /** Raw official response when available. */
  readonly rawResponse?: string;
  /** Relevant SEFAZ status code for the batch or item. */
  readonly statusCode?: string;
  /** Relevant SEFAZ status message for the batch or item. */
  readonly statusMessage?: string;
  /** Optional operational-state projection aligned with spec 020. */
  readonly state?: NFeOperationalState;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Structured query input for service-status operations.
 */
export interface NFeServiceStatusRequest {
  /** Query target environment. */
  readonly environment: string;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
}

/**
 * Structured service-status snapshot returned by the operational slice.
 */
export interface ServiceStatusSnapshot {
  /** Application-oriented query classification. */
  readonly classification: NFeQueryClassification;
  /** Observed SEFAZ status code. */
  readonly applicationStatusCode?: string;
  /** Observed SEFAZ status message. */
  readonly applicationStatusMessage?: string;
  /** ISO timestamp for the observation. */
  readonly observedAt: string;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Structured query input for document-situation operations.
 */
export interface DocumentSituationRequest {
  /** Access key used as the public lookup identifier. */
  readonly accessKey: string;
  /** Query target environment. */
  readonly environment: string;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
}

/**
 * Structured document-situation result returned by the operational slice.
 */
export interface DocumentSituationResult {
  /** Access key observed by the query. */
  readonly accessKey: string;
  /** Application-oriented query classification. */
  readonly classification: NFeQueryClassification;
  /** Document status code when available. */
  readonly documentStatusCode?: string;
  /** Document status message when available. */
  readonly documentStatusMessage?: string;
  /** Protocol number when available. */
  readonly protocolNumber?: string;
  /** Shared operational-state projection for the queried document. */
  readonly state: NFeOperationalState;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Supported maintenance operation identifiers for the operational MVP.
 */
export type NFeMaintenanceOperation =
  | 'cancel-nfe'
  | 'submit-nfe-correction-letter'
  | 'submit-nfe-inutilization';

/**
 * Structured maintenance input accepted by the operational slice.
 */
export interface OperationalMaintenanceRequest {
  /** Maintenance operation requested by the integrator. */
  readonly operation: NFeMaintenanceOperation;
  /** Target environment for the maintenance flow. */
  readonly environment: string;
  /** Access key when the operation targets an existing document. */
  readonly accessKey?: string;
  /** Canonical maintenance payload reserved for operation-specific data. */
  readonly canonicalPayload: Readonly<Record<string, string>>;
  /** Reusable signing context for signed maintenance flows. */
  readonly signingContext?: SigningContext;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
}

/**
 * Structured maintenance result returned by the operational slice.
 */
export interface OperationalMaintenanceOutcome {
  /** Maintenance operation executed by the facade. */
  readonly operation: NFeMaintenanceOperation;
  /** Application-oriented maintenance classification. */
  readonly classification: NFeMaintenanceClassification;
  /** Observed SEFAZ status code when available. */
  readonly applicationStatusCode?: string;
  /** Observed SEFAZ status message when available. */
  readonly applicationStatusMessage?: string;
  /** Synthesized failure reason when the flow cannot complete. */
  readonly failureReason?: string;
  /** Protocol number when available. */
  readonly protocolNumber?: string;
  /** Shared operational-state projection when the maintenance succeeds. */
  readonly updatedState?: NFeOperationalState;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Stable operational-scope boundary published by the MVP slice.
 */
export interface OperationalCoverageBoundary {
  /** Capabilities explicitly included in the MVP. */
  readonly includedScope: readonly string[];
  /** Capabilities explicitly excluded from the MVP. */
  readonly excludedScope: readonly string[];
  /** Deferred capabilities tracked for future phases. */
  readonly deferredCapabilities: readonly string[];
}

/**
 * Returns the supported authorization classifications.
 *
 * @returns Read-only authorization result classifications.
 */
export function getNFeAuthorizationClassifications():
  readonly NFeAuthorizationClassification[] {
  return AUTHORIZATION_CLASSIFICATIONS;
}

/**
 * Returns the supported query classifications.
 *
 * @returns Read-only query result classifications.
 */
export function getNFeQueryClassifications(): readonly NFeQueryClassification[] {
  return QUERY_CLASSIFICATIONS;
}

/**
 * Returns the supported maintenance classifications.
 *
 * @returns Read-only maintenance result classifications.
 */
export function getNFeMaintenanceClassifications():
  readonly NFeMaintenanceClassification[] {
  return MAINTENANCE_CLASSIFICATIONS;
}

/**
 * Returns the supported receipt reconciliation classifications.
 *
 * @returns Read-only receipt reconciliation classifications.
 */
export function getNFeReceiptReconciliationClassifications():
  readonly NFeReceiptReconciliationClassification[] {
  return RECEIPT_RECONCILIATION_CLASSIFICATIONS;
}

/**
 * Returns the explicit operational boundaries published by the state-operations slice.
 *
 * @returns Read-only deferred operational boundaries.
 */
export function getOperationalBoundaries(): readonly OperationalBoundary[] {
  return OPERATIONAL_BOUNDARIES;
}
// ---------------------------------------------------------------------------
// Async batch retrieval
// ---------------------------------------------------------------------------

/** Result status for a single NF-e document in an async batch. */
export type AsyncBatchItemClassification =
  | 'authorized'
  | 'rejected'
  | 'denied'
  | 'cancelled'
  | 'pending'
  | 'processing-error';

/** Authorization result for one NF-e within an async batch response. */
export interface AsyncBatchItemResult {
  readonly chNFe: string;
  readonly classification: AsyncBatchItemClassification;
  /** Authorization protocol number when authorized. */
  readonly protocolNumber?: string;
  readonly statusCode: string;
  readonly statusDescription: string;
}

/** Input to retrieve an async NF-e authorization batch by receipt number. */
export interface NFeAsyncBatchRetrievalInput {
  readonly nRec: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly version: import('../shared/contracts.js').CanonicalVersion;
  readonly issuerUF: string;
  readonly requestExecutor: RequestExecutor;
}

/** Overall outcome classification of an async batch retrieval call. */
export type NFeAsyncBatchClassification =
  | 'complete'
  | 'processing'
  | 'not-found'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

/** Overall outcome of an async NF-e batch retrieval call. */
export interface NFeAsyncBatchOutcome {
  readonly classification: NFeAsyncBatchClassification;
  readonly items: readonly AsyncBatchItemResult[];
  readonly rawResponse?: string;
}
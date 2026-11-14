import type { BuiltNFeDocument } from './builder/build-nfe-document.js';
import type {
  CanonicalEnviNFeDocument,
  CanonicalEnviNFeInput,
  CanonicalNFeDocument,
  CanonicalNFeInput,
} from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';
import type {
  NFeSEFAZProvider,
  ObservableContingencyBoundary,
  ObservableContingencyEnvironment,
  TransportOutcome,
} from '../transport/contracts.js';

const AUTHORIZATION_CLASSIFICATIONS = [
  'authorized',
  'contingency-boundary',
  'denied',
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
    }
  | {
      /**
       * Real document produced by `buildNFeDocument`: signed, sent as a layout-4.00
       * `enviNFe` (synchronous) inside the SEFAZ SOAP envelope.
       */
      readonly kind: 'built-document';
      readonly payload: BuiltNFeDocument;
      /** 1–15 digit batch identifier (`idLote`); generated when omitted. */
      readonly batchId?: string;
    };

/**
 * Structured authorization request accepted by the operational layer.
 */
export interface NFeAuthorizationRequest {
  /** Authorization target environment. */
  readonly environment: string;
  /** Single-document or batch authorization payload. */
  readonly documents: NFeAuthorizationDocumentsInput;
  /** Explicit contingency request; omitted requests retain normal authorization. */
  readonly contingency?: NFeContingencyRequest;
  /** Explicit context for a later contingency recovery submission. */
  readonly recoveryContext?: NFeRecoveryContext;
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

/** Public NF-e execution modes represented by the operational facade. */
export type NFeExecutionMode = 'normal' | NFeContingencyMode;

/** Explicit contingency modes accepted by SP NF-e operations. */
export type NFeContingencyMode = 'svc-an' | 'epec' | 'fs-da';

/** State attached to an explicit contingency attempt. */
export type NFeContingencyState =
  | 'activation-verified'
  | 'awaiting-recovery'
  | 'authorized'
  | 'inconclusive'
  | 'operator-assisted'
  | 'pending'
  | 'reconciled'
  | 'rejected'
  | 'unavailable'
  | 'unsupported';

/** Evidence from the single SVC activation status query made before a contingency submission. */
export interface NFeSVCActivationObservation {
  /** Environment used for the status query (`homologation` only for built documents). */
  readonly environment: 'homologation' | 'production';
  /** Local time at which the SVC status response was observed. */
  readonly observedAt: string;
  /** Provider that served the status query. */
  readonly provider: 'SVCAN';
  /** Status code returned by the service, when present. */
  readonly statusCode?: string;
}

/** Optional prior submission evidence used to prevent duplicate contingency writes. */
export interface NFePriorSubmissionContext {
  /** NF-e access key associated with the previous submission. */
  readonly documentKey: string;
  /** Classification returned by the previous authorization attempt. */
  readonly classification: NFeAuthorizationClassification;
}

/** Explicit request to use one supported SP contingency mode. */
export interface NFeContingencyRequest {
  /** Access key of the NF-e for this contingency attempt. */
  readonly documentKey?: string;
  /** Selected mode; the SDK never selects a mode as an automatic fallback. */
  readonly mode: NFeContingencyMode;
  /** Previous submission evidence relevant to duplicate-risk validation. */
  readonly previousSubmission?: NFePriorSubmissionContext;
}

/** Final or non-terminal state projected for a caller-owned recovery attempt. */
export type NFeRecoveryState =
  | 'inconclusive'
  | 'pending'
  | 'reconciled'
  | 'rejected'
  | 'unavailable';

/** Caller-owned context that correlates an explicit recovery operation. */
export interface NFeRecoveryContext {
  /** Original NF-e access key associated with the contingency. */
  readonly documentKey: string;
  /** Accepted EPEC event protocol, required when mode is `epec`. */
  readonly eventProtocol?: string;
  /** Contingency mode whose recovery is being reported. */
  readonly mode: NFeContingencyMode;
}

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
  | 'denied'
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
  /** Activation evidence used to permit an explicit SVC-AN authorization. */
  readonly activationEvidence?: NFeSVCActivationObservation;
  /** Explicit contingency boundary when the flow is diagnosed before transport. */
  readonly coverageBoundary?: NFeContingencyBoundary;
  /** Contingency processing state, distinct from authorization classification. */
  readonly contingencyState?: NFeContingencyState;
  /** NF-e access key correlated with the contingency attempt. */
  readonly documentKey?: string;
  /** Per-document statuses observed in the response. */
  readonly documentStatuses: readonly NFeAuthorizationDocumentStatus[];
  /** EPEC protocol correlated with a later explicit recovery submission. */
  readonly eventProtocol?: string;
  /** Mode used for this authorization attempt; defaults to `normal`. */
  readonly executionMode?: NFeExecutionMode;
  /** Synthesized failure reason when the flow cannot complete. */
  readonly failureReason?: string;
  /** Existing facade to call when authorization returns a known receipt. */
  readonly nextAction?:
    | 'reconcileNFeReceipt'
    | 'submitEPECEvent'
    | 'transmitNFeAfterRecovery';
  /** Protocol number when immediately available. */
  readonly protocolNumber?: string;
  /** Official `cStat` of the document protocol (`protNFe/infProt`), when present. */
  readonly protocolStatusCode?: string;
  /** Official `xMotivo` of the document protocol, when present. */
  readonly protocolStatusMessage?: string;
  /** Signed `NFe` XML that was sent (only for `built-document`). */
  readonly signedXml?: string;
  /** `nfeProc` (signed NFe + protocol) of an authorized `built-document`. */
  readonly authorizedXml?: string;
  /** Caller-owned contingency context echoed by an explicit recovery attempt. */
  readonly recoveryContext?: NFeRecoveryContext;
  /** Recovery state mapped without changing authorization classification. */
  readonly recoveryState?: NFeRecoveryState;
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
  /** Caller-owned contingency context to preserve recovery correlation. */
  readonly recoveryContext?: NFeRecoveryContext;
  /** Explicit routing context for the lookup. */
  readonly routingContext: NFeReceiptRoutingContext;
  /** Sends the official `consReciNFe` in the SEFAZ SOAP envelope. */
  readonly wireFormat?: boolean;
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
  /** Contingency state projected from the caller-owned recovery context. */
  readonly contingencyState?: NFeContingencyState;
  /** Recovery action that remains available to the caller. */
  readonly nextAction?: 'reconcileNFeReceipt';
  /** Access key resolved from the reconciled protocol item when available. */
  readonly documentKey?: string;
  /** EPEC event protocol correlated with this receipt, when applicable. */
  readonly eventProtocol?: string;
  /** Contingency mode associated with the recovery context. */
  readonly executionMode?: NFeExecutionMode;
  /** Batch items observed in the official response. */
  readonly items: readonly AsyncBatchItemResult[];
  /** Final protocol number when available. */
  readonly protocolNumber?: string;
  /** Caller-owned contingency context echoed by the receipt result. */
  readonly recoveryContext?: NFeRecoveryContext;
  /** Recovery state mapped without changing the receipt classification. */
  readonly recoveryState?: NFeRecoveryState;
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
  /** Sends the official `consStatServ` in the SEFAZ SOAP envelope (requires `issuerUF`). */
  readonly wireFormat?: boolean;
  /** 2-digit IBGE code of the queried UF (`cUF`) for `wireFormat`. */
  readonly issuerUF?: string;
  /** Optional provider selector for an explicit SVC-AN activation query. */
  readonly authorizer?: NFeSEFAZProvider;
  /** Document model whose service is queried: 55 NF-e (default) or 65 NFC-e. */
  readonly documentModel?: 55 | 65;
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
  /** Environment declared by the status response's `tpAmb`, when present. */
  readonly responseEnvironment?: 'homologation' | 'production';
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
  /** Sends the official `consSitNFe` in the SEFAZ SOAP envelope and reads the full answer. */
  readonly wireFormat?: boolean;
  /** Query target environment. */
  readonly environment: string;
  /** Authorizer to ask; defaults to the one of the access key UF (`SVCAN` for contingency). */
  readonly authorizer?: NFeSEFAZProvider;
  /**
   * Signed `NFe` XML of the document (e.g. rebuilt deterministically). With `wireFormat`, when
   * the answer is an authorization whose protocol digest matches this XML, the result carries
   * the assembled `nfeProc` in `authorizedXml`.
   */
  readonly signedXml?: string;
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
  /** Registered events reported by the official query (`wireFormat` only). */
  readonly events?: readonly NFeDocumentSituationEvent[];
  /** `protNFe` block of the answer, as received (`wireFormat` only). */
  readonly protocolXml?: string;
  /** `nfeProc` (signed NFe + `protNFe`) of an authorized document, when `signedXml` matches. */
  readonly authorizedXml?: string;
  /** Why `authorizedXml` could not be assembled although `signedXml` was provided. */
  readonly authorizedXmlIssue?: 'digest-mismatch';
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/** Event listed by an official protocol query (`procEventoNFe/retEvento`). */
export interface NFeDocumentSituationEvent {
  /** Event code, e.g. `110111` (cancellation) or `110110` (correction letter). */
  readonly type: string;
  readonly sequence: number;
  readonly protocol?: string;
  /** `cStat` of the event registration. */
  readonly statusCode: string;
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
  /**
   * Real signed event (cancellation or correction letter) in the official `envEvento`
   * envelope. Without it the legacy flat payload is sent (homologation only).
   */
  readonly signedEvent?: NFeSignedEventDetails;
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
  /** Signed `envEvento` that was sent (only for `signedEvent`). */
  readonly signedXml?: string;
  /** `procEventoNFe` (signed event + `retEvento`) of a registered event. */
  readonly authorizedXml?: string;
  /** Underlying transport evidence reused by the operational slice. */
  readonly transportOutcome: TransportOutcome;
}

/**
 * Details of a real signed NF-e event. `accessKey` and `environment` come from the request.
 */
export interface NFeSignedEventDetails {
  /** Reusable signing context created by this SDK. */
  readonly signingContext: SigningContext;
  /** 14-digit CNPJ or 11-digit CPF of the issuer. */
  readonly issuerTaxId: string;
  /** Event date/time with UTC offset, e.g. `2026-11-10T12:30:00-03:00`. */
  readonly eventDateTime: string;
  /** Sequence of the event for the document (1–99); defaults to 1. */
  readonly sequence?: number;
  /** Authorization protocol of the NF-e being cancelled (15 digits). */
  readonly protocol?: string;
  /** Cancellation justification (15–255 characters). */
  readonly justification?: string;
  /** Correction letter text (15–1000 characters). */
  readonly correctionText?: string;
  /** 1–15 digit batch identifier (`idLote`); defaults to 1. */
  readonly batchId?: string;
  /** Range data for an inutilization (`submit-nfe-inutilization`). */
  readonly inutilization?: NFeInutilizationRange;
  /**
   * NFC-e only: access key of the NFC-e that replaces the cancelled one. When present, the
   * cancellation is sent as the cancellation by substitution (event 110112).
   */
  readonly substituteAccessKey?: string;
  /** Caller application version (`verAplic`, 1–20 characters), required by the 110112 event. */
  readonly applicationVersion?: string;
}

/**
 * Number range of an inutilization request (layout `inutNFe` 4.00).
 */
export interface NFeInutilizationRange {
  /** 2-digit IBGE UF code of the issuer. */
  readonly cUF: string;
  /** 2-digit year of the request (e.g. `26`). */
  readonly year: string;
  /** Document model; defaults to `55`. */
  readonly model?: string;
  /** Series, 0 to 999. */
  readonly series: number;
  /** First number of the range (≥ 1). */
  readonly numberStart: number;
  /** Last number of the range (at most 10,000 numbers in total). */
  readonly numberEnd: number;
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
import type {
  CanonicalNFeDocument,
  CanonicalNFeInput,
} from '../shared/contracts.js';
import type { AccessKeyFields } from '../nfe/access-key.js';
import type { HashCSRTInput } from '../nfe/hash-csrt.js';
import type { SigningContext } from '../signing/contracts.js';
import type { TransportOutcome } from '../transport/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';
import type { NFeAuthorizationClassification } from '../nfe/contracts.js';

const NFCE_AUTHORIZATION_CLASSIFICATIONS = [
  'authorized',
  'received',
  'rejected',
  'timeout',
  'unavailable',
  'protocol-error',
  'usage-error',
  'unsupported-state',
  'unsupported-scope',
  'validation-error',
] as const;

const NFCE_DEFERRED_CAPABILITIES = [
  'qr-code',
  'danfe-nfce',
  'csc-administration',
  'automatic-credentialing',
  'offline-contingency',
] as const;

const NFCE_PROMOTED_UF_COHORT = ['SP', 'PR'] as const;

const NFCE_SIGNING_PREREQUISITE_DEPENDENCIES = [
  'authorization',
  'qr-code',
  'uf-rollout',
] as const;

/**
 * Public single-document input accepted by the NFC-e authorization facade.
 */
export type NFCeAuthorizationDocumentInput =
  | CanonicalNFeDocument
  | CanonicalNFeInput;

/**
 * Classification values exposed by the first NFC-e authorization slice.
 */
export type NFCeAuthorizationClassification =
  | NFeAuthorizationClassification
  | 'unsupported-state'
  | 'unsupported-scope'
  | 'validation-error';

/**
 * Explicit operational capabilities that remain outside the first NFC-e slice.
 */
export type NFCeDeferredCapability = (typeof NFCE_DEFERRED_CAPABILITIES)[number];

/**
 * UF values currently promoted by the additive NFC-e operational slice.
 */
export type NFCePromotedUF = (typeof NFCE_PROMOTED_UF_COHORT)[number];

/**
 * Deferred downstream dependencies that remain outside the signing-prerequisite slice.
 */
export type NFCeSigningPrerequisiteDependency =
  (typeof NFCE_SIGNING_PREREQUISITE_DEPENDENCIES)[number];

/**
 * CSC fields accepted for NFC-e prerequisite preparation.
 */
export interface NFCeCSCInput {
  /** Published CSC identifier associated with the token. */
  readonly cscId: string;
  /** Raw CSC token kept only as a validated prerequisite input. */
  readonly cscToken: string;
}

/**
 * Request accepted by the NFC-e signing-prerequisite helper.
 */
export interface NFCeSigningPrerequisitesInput {
  /** Canonical fields used to derive chNFe and cDV. */
  readonly accessKeyFields: AccessKeyFields;
  /** CSC material required by later QR Code stages. */
  readonly csc: NFCeCSCInput;
  /** CSRT fields used to derive the hashCSRT prerequisite. */
  readonly hashCsrtInput: HashCSRTInput;
}

/**
 * Echoed metadata that confirms which prerequisite inputs were present.
 */
export interface NFCeSigningPrerequisitesReceivedInputs {
  /** CSC identifier provided by the integrator. */
  readonly cscId: string;
  /** Indicates whether a non-empty CSC token was provided. */
  readonly hasCscToken: boolean;
  /** Indicates whether hashCSRT input was present in the request. */
  readonly hasHashCsrtInput: boolean;
  /** Document model associated with the prepared key. */
  readonly model: string;
}

/**
 * Structured prerequisite bundle returned by the NFC-e helper.
 */
export interface NFCeSigningPrerequisitesResult {
  /** Full 44-digit NFC-e access key. */
  readonly accessKey: string;
  /** Access-key modulo-11 check digit. */
  readonly checkDigit: number;
  /** Derived hashCSRT value for later XML population. */
  readonly hashCsrt: string;
  /** Echoed metadata showing which prerequisite inputs were present. */
  readonly receivedInputs: NFCeSigningPrerequisitesReceivedInputs;
  /** Later stages that still remain outside this preparatory slice. */
  readonly deferredOperationalDependencies:
    readonly NFCeSigningPrerequisiteDependency[];
}

/**
 * Structured local validation failure emitted by the NFC-e facade.
 */
export interface NFCeValidationFailure {
  /** Stable validation failure code. */
  readonly code: string;
  /** Logical field path associated with the failure. */
  readonly path: string;
  /** Human-readable validation message. */
  readonly message: string;
  /** Severity marker kept explicit for contract clarity. */
  readonly severity: 'error';
}

/**
 * Structured coverage boundary returned for unsupported states or deferred scope.
 */
export interface NFCeCoverageBoundary {
  /** Boundary classification returned to the integrator. */
  readonly classification: 'unsupported-state' | 'unsupported-scope';
  /** Stable boundary code used by tests and documentation. */
  readonly code: string;
  /** Human-readable explanation for the blocked operation. */
  readonly message: string;
  /** Whether the same request can succeed without changing the input or scope. */
  readonly retryable: boolean;
  /** UF associated with the boundary when applicable. */
  readonly uf?: string;
}

/**
 * Structured request accepted by the root NFC-e authorization facade.
 */
export interface NFCeAuthorizationRequest {
  /** NFC-e document or canonical input accepted by this first slice. */
  readonly document: NFCeAuthorizationDocumentInput;
  /** Target environment for the authorization flow. */
  readonly environment: string;
  /** Reusable signing context prepared by the signing slice. */
  readonly signingContext: SigningContext;
  /** Optional network executor override. */
  readonly requestExecutor?: RequestExecutor;
  /** Optional operation timeout in milliseconds. */
  readonly timeoutMs?: number;
  /** Optional correlation identifier for caller-side tracing. */
  readonly correlationId?: string;
  /** Optional deferred capabilities the integrator tried to enable in this slice. */
  readonly requestedCapabilities?: readonly NFCeDeferredCapability[];
}

/**
 * Structured outcome returned by the first NFC-e authorization slice.
 */
export interface NFCeAuthorizationOutcome {
  /** Indicates whether the request reached the transport layer. */
  readonly acceptedForTransport: boolean;
  /** Application-facing result classification. */
  readonly classification: NFCeAuthorizationClassification;
  /** Structured local validation failures when transport was skipped. */
  readonly validationFailures: readonly NFCeValidationFailure[];
  /** Explicit boundary payload when the flow is blocked by published scope. */
  readonly coverageBoundary?: NFCeCoverageBoundary;
  /** Protocol number when immediately available. */
  readonly protocolNumber?: string;
  /** Receipt number when the exchange remains intermediate. */
  readonly receiptNumber?: string;
  /** Underlying transport evidence when the request was executed remotely. */
  readonly transportOutcome?: TransportOutcome;
}

/**
 * Returns the supported classification values for the initial NFC-e authorization slice.
 *
 * @returns Read-only NFC-e authorization classifications.
 */
export function getNFCeAuthorizationClassifications():
  readonly NFCeAuthorizationClassification[] {
  return NFCE_AUTHORIZATION_CLASSIFICATIONS;
}

/**
 * Returns the deferred NFC-e capabilities that stay outside the first operational slice.
 *
 * @returns Read-only deferred capability identifiers.
 */
export function getNFCeDeferredCapabilities(): readonly NFCeDeferredCapability[] {
  return NFCE_DEFERRED_CAPABILITIES;
}

/**
 * Returns the currently promoted NFC-e UF cohort published by the operational slice.
 *
 * @returns Read-only list of promoted UFs.
 */
export function getNFCePromotedUFCohort(): readonly NFCePromotedUF[] {
  return NFCE_PROMOTED_UF_COHORT;
}

/**
 * Returns the deferred downstream dependencies that remain outside the prerequisite helper.
 *
 * @returns Read-only dependency identifiers published by this slice.
 */
export function getNFCeSigningPrerequisiteDependencies():
  readonly NFCeSigningPrerequisiteDependency[] {
  return NFCE_SIGNING_PREREQUISITE_DEPENDENCIES;
}
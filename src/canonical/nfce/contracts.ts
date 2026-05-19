import type {
  CanonicalNFeDocument,
  CanonicalNFeInput,
} from '../shared/contracts.js';
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
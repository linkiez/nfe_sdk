import type { RequestExecutor } from './request-executor.js';
import type { SupportedNFeSoapService } from './supported-services.js';

const TRANSPORT_ENVIRONMENTS = ['homologation', 'production'] as const;
const TRANSPORT_OUTCOME_CLASSIFICATIONS = [
  'success',
  'usage-error',
  'timeout',
  'unavailable',
  'functional-rejection',
  'protocol-error',
] as const;

/**
 * Supported environment identifiers for the initial transport slice.
 */
export type TransportEnvironment = (typeof TRANSPORT_ENVIRONMENTS)[number];

/**
 * SEFAZ autorizador provider identifiers for the 14 NF-e autorizadores.
 *
 * 12 UFs operate their own autorizador; two virtual environments
 * (SVCAN for SVC-AN, SVCRS for SVC-RS) serve the remaining 15 UFs.
 */
export type NFeSEFAZProvider =
  | 'AM'
  | 'BA'
  | 'CE'
  | 'GO'
  | 'MG'
  | 'MS'
  | 'MT'
  | 'PA'
  | 'PE'
  | 'PR'
  | 'RS'
  | 'SP'
  | 'SVCAN'
  | 'SVCRS';

/**
 * Structured outcome classes returned by the transport facade.
 */
export type TransportOutcomeClassification =
  (typeof TRANSPORT_OUTCOME_CLASSIFICATIONS)[number];

export type ObservableContingencyEnvironment = 'SVC-AN' | 'SVC-RS';

export interface ObservableContingencyBoundary {
  readonly code: string;
  readonly contingencyEnvironment: ObservableContingencyEnvironment;
  readonly issuerUF: string;
  readonly message: string;
  readonly retryable: boolean;
}

/**
 * Source trace recorded for a catalog entry published by the SDK.
 */
export interface ServiceCatalogProvenance {
  readonly notes?: string;
  readonly sources: readonly string[];
}

/**
 * Versioned catalog entry that resolves a service and environment to one endpoint.
 */
export interface ServiceCatalogEntry {
  readonly catalogVersion: string;
  readonly endpointUrl: string;
  readonly environment: TransportEnvironment;
  readonly layoutVersion: '4.00';
  readonly provider: NFeSEFAZProvider;
  readonly provenance: ServiceCatalogProvenance;
  readonly service: SupportedNFeSoapService;
}

/**
 * Public input accepted by the endpoint-resolution facade.
 */
export interface ResolveNFeServiceEndpointInput {
  readonly authorizer?: NFeSEFAZProvider;
  readonly environment: string;
  readonly service: string;
}

/**
 * Public input accepted by the SOAP execution facade.
 */
export interface ExecuteNFeSoapServiceInput {
  readonly authorizer?: NFeSEFAZProvider;
  readonly environment: string;
  readonly payloadXml: string;
  readonly requestExecutor?: RequestExecutor;
  readonly service: string;
  readonly timeoutMs?: number;
}

/**
 * Minimal request shape after service and environment normalization.
 */
export interface TransportRequest {
  readonly environment: TransportEnvironment;
  readonly payloadXml: string;
  readonly requestExecutor?: RequestExecutor;
  readonly service: SupportedNFeSoapService;
  readonly timeoutMs: number;
}

/**
 * Observable request and response evidence captured during transport.
 */
export interface SoapExchangeEvidence {
  readonly durationMs?: number;
  readonly endpointUrl: string;
  readonly httpStatus?: number;
  readonly provider: NFeSEFAZProvider;
  readonly requestEnvelopeXml: string;
  readonly responseEnvelopeXml?: string;
}

/**
 * Structured result returned by the public transport execution function.
 */
export interface TransportOutcome {
  readonly applicationStatusCode?: string;
  readonly applicationStatusMessage?: string;
  readonly classification: TransportOutcomeClassification;
  readonly environment: TransportEnvironment;
  readonly evidence: SoapExchangeEvidence;
  readonly failureReason?: string;
  readonly service: SupportedNFeSoapService;
}

/**
 * Returns the supported environment values for the initial transport slice.
 *
 * @returns Read-only supported transport environments.
 */
export function getSupportedTransportEnvironments():
  readonly TransportEnvironment[] {
  return TRANSPORT_ENVIRONMENTS;
}

/**
 * Returns the structured result classes supported by the transport slice.
 *
 * @returns Read-only outcome classification identifiers.
 */
export function getTransportOutcomeClassifications():
  readonly TransportOutcomeClassification[] {
  return TRANSPORT_OUTCOME_CLASSIFICATIONS;
}
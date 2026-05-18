export { executeNFeSoapService } from './execute-nfe-soap-service.js';
export { resolveNFeServiceEndpoint } from './resolve-nfe-service-endpoint.js';

export type {
  ExecuteNFeSoapServiceInput,
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
  ServiceCatalogProvenance,
  SoapExchangeEvidence,
  TransportEnvironment,
  TransportOutcome,
  TransportOutcomeClassification,
  TransportRequest,
} from './contracts.js';

export {
  getSupportedTransportEnvironments,
  getTransportOutcomeClassifications,
} from './contracts.js';
export {
  ExecuteNFeSoapServiceError,
  ResolveNFeServiceEndpointError,
  TransportError,
  TransportUsageError,
} from './errors.js';
export {
  getDefaultTransportTimeoutMs,
  normalizeTransportTimeout,
} from './request-executor.js';
export { getTransportServiceCatalog } from './service-catalog.js';
export {
  getSupportedTransportServiceDefinition,
  SUPPORTED_TRANSPORT_SERVICES,
} from './supported-services.js';

export type {
  RequestExecutor,
  RequestExecutorInput,
  RequestExecutorResponse,
} from './request-executor.js';
export type {
  SupportedNFeSoapService,
  SupportedNFeSoapServiceDefinition,
} from './supported-services.js';
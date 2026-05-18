export { authorizeNFe } from './facade/authorize-nfe.js';
export { cancelNFe } from './facade/cancel-nfe.js';
export { createEnviNFe } from './facade/create-envi-nfe.js';
export { createNFe } from './facade/create-nfe.js';
export { createSigningContext } from './facade/create-signing-context.js';
export { executeNFeSoapService } from './facade/execute-nfe-soap-service.js';
export { queryNFeDocumentSituation } from './facade/query-nfe-document-situation.js';
export { queryNFeServiceStatus } from './facade/query-nfe-service-status.js';
export { resolveNFeServiceEndpoint } from './facade/resolve-nfe-service-endpoint.js';
export { serializeEnviNFeXml } from './facade/serialize-envi-nfe-xml.js';
export { serializeNFeXml } from './facade/serialize-nfe-xml.js';
export { signNFeXml } from './facade/sign-nfe-xml.js';
export { submitNFeCorrectionLetter } from './facade/submit-nfe-correction-letter.js';
export { submitNFeInutilization } from './facade/submit-nfe-inutilization.js';

export type {
  CanonicalEnviNFeDocument,
  CanonicalEnviNFeInput,
  CanonicalEnvironment,
  CanonicalNFeDocument,
  CanonicalNFeInput,
  CanonicalVersion,
} from './shared/contracts.js';

export type {
  DocumentSituationRequest,
  DocumentSituationResult,
  NFeAuthorizationBatch,
  NFeAuthorizationDocumentsInput,
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeServiceStatusRequest,
  OperationalMaintenanceOutcome,
  OperationalMaintenanceRequest,
  ServiceStatusSnapshot,
} from './nfe/contracts.js';

export type {
  CreateSigningContextInput,
  FilePathSigningSourceInput,
  InMemorySigningSourceInput,
  SignatureVerificationReport,
  SigningContext,
  SigningSourceInput,
} from './signing/contracts.js';

export type {
  ExecuteNFeSoapServiceInput,
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
  TransportOutcome,
} from './transport/contracts.js';
export type { RequestExecutor } from './transport/request-executor.js';
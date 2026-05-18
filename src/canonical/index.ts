export { createEnviNFe } from './facade/create-envi-nfe.js';
export { createNFe } from './facade/create-nfe.js';
export { createSigningContext } from './facade/create-signing-context.js';
export { executeNFeSoapService } from './facade/execute-nfe-soap-service.js';
export { resolveNFeServiceEndpoint } from './facade/resolve-nfe-service-endpoint.js';
export { serializeEnviNFeXml } from './facade/serialize-envi-nfe-xml.js';
export { serializeNFeXml } from './facade/serialize-nfe-xml.js';
export { signNFeXml } from './facade/sign-nfe-xml.js';

export type {
  CanonicalEnviNFeDocument,
  CanonicalEnviNFeInput,
  CanonicalEnvironment,
  CanonicalNFeDocument,
  CanonicalNFeInput,
  CanonicalVersion,
} from './shared/contracts.js';

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
export {
  buildNFeAuthorizationBatch,
  isCanonicalEnviNFeDocument,
  isCanonicalNFeDocument,
} from './authorization-batch.js';
export { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
export { createAuthorizationPayloadXml } from './authorization-payload.js';
export { authorizeNFe } from './authorize-nfe.js';
export { cancelNFe } from './cancel-nfe.js';
export {
  createUnsupportedScopeMaintenanceOutcome,
  executeOperationalMaintenanceOperation,
  mapOperationalMaintenanceTransportOutcome,
} from './maintenance-outcome.js';
export {
  mapDocumentSituationTransportOutcome,
  queryNFeDocumentSituation,
} from './query-nfe-document-situation.js';
export {
  mapServiceStatusTransportOutcome,
  queryNFeServiceStatus,
} from './query-nfe-service-status.js';
export { submitNFeCorrectionLetter } from './submit-nfe-correction-letter.js';
export { submitNFeInutilization } from './submit-nfe-inutilization.js';
export {
  getNFeAuthorizationClassifications,
  getNFeMaintenanceClassifications,
  getNFeQueryClassifications,
} from './contracts.js';
export {
  createUnsupportedOperationalScopeMessage,
  NFeOperationalError,
  NFeOperationalUnsupportedScopeError,
  NFeOperationalUsageError,
} from './errors.js';
export {
  getOperationalFailureReason,
  mapTransportOutcomeToAuthorizationClassification,
  mapTransportOutcomeToMaintenanceClassification,
  mapTransportOutcomeToQueryClassification,
} from './transport-outcome-mapper.js';

export type {
  DocumentSituationRequest,
  DocumentSituationResult,
  NFeAuthorizationBatch,
  NFeAuthorizationClassification,
  NFeAuthorizationDocumentStatus,
  NFeAuthorizationDocumentsInput,
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeMaintenanceClassification,
  NFeMaintenanceOperation,
  NFeQueryClassification,
  NFeServiceStatusRequest,
  OperationalCoverageBoundary,
  OperationalMaintenanceOutcome,
  OperationalMaintenanceRequest,
  ServiceStatusSnapshot,
} from './contracts.js';
export type { OperationalMaintenanceFacadeInput } from './maintenance-outcome.js';
export type { UnsupportedOperationalScopeDetails } from './errors.js';
export type { OperationalTransportProjection } from './transport-outcome-mapper.js';
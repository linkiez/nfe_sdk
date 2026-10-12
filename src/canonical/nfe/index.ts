export { computeNFeAccessKey } from './access-key.js';
export { computeHashCSRT } from './hash-csrt.js';
export {
  buildNFeAuthorizationBatch,
  isCanonicalEnviNFeDocument,
  isCanonicalNFeDocument,
} from './authorization-batch.js';
export { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
export { createAuthorizationPayloadXml } from './authorization-payload.js';
export { authorizeNFe } from './authorize-nfe.js';
export { reconcileNFeReceipt } from './reconcile-nfe-receipt.js';
export {
  createNFeContingencyBoundary,
  createNFeContingencyBoundaryOutcome,
  resolveNFeContingencyBoundary,
} from './coverage-boundary.js';
export { cancelNFe } from './cancel-nfe.js';
export {
  createUnsupportedScopeMaintenanceOutcome,
  executeOperationalMaintenanceOperation,
  mapOperationalMaintenanceTransportOutcome,
} from './maintenance-outcome.js';
export {
  createOperationalState,
  createOperationalStateEvidence,
  mapDocumentSituationToOperationalState,
  mapMaintenanceToOperationalState,
  resolveDocumentSituationClassification,
} from './operational-state.js';
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
  getOperationalBoundaries,
  getNFeAuthorizationClassifications,
  getNFeMaintenanceClassifications,
  getNFeReceiptReconciliationClassifications,
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

export type { AccessKeyFields, AccessKeyResult } from './access-key.js';
export type { HashCSRTInput } from './hash-csrt.js';
export type {
  DocumentSituationRequest,
  DocumentSituationResult,
  NFeAuthorizationBatch,
  NFeAuthorizationClassification,
  NFeContingencyMode,
  NFeContingencyRequest,
  NFeContingencyState,
  NFeContingencyBoundary,
  NFeContingencyEnvironment,
  NFeExecutionMode,
  NFePriorSubmissionContext,
  NFeRecoveryContext,
  NFeRecoveryState,
  NFeSVCActivationObservation,
  NFeAuthorizationDocumentStatus,
  NFeAuthorizationDocumentsInput,
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeMaintenanceClassification,
  NFeMaintenanceOperation,
  NFeOperationalPrimaryState,
  NFeOperationalState,
  NFeQueryClassification,
  NFeReceiptReconciliationClassification,
  NFeReceiptReconciliationRequest,
  NFeReceiptReconciliationResult,
  NFeReceiptRoutingContext,
  NFeServiceStatusRequest,
  NFeStateEvidence,
  NFeStateEvidenceSourceKind,
  OperationalBoundary,
  OperationalCoverageBoundary,
  OperationalMaintenanceOutcome,
  OperationalMaintenanceRequest,
  ServiceStatusSnapshot,
} from './contracts.js';
export type { OperationalMaintenanceFacadeInput } from './maintenance-outcome.js';
export type {
  MaintenanceOperationalStateInput,
  NFeOperationalEvidenceInput,
  QueryOperationalStateInput,
} from './operational-state.js';
export type { UnsupportedOperationalScopeDetails } from './errors.js';
export type { OperationalTransportProjection } from './transport-outcome-mapper.js';
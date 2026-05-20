export { computeNFeAccessKey } from './facade/compute-nfe-access-key.js';
export { computeHashCSRT } from './facade/compute-hash-csrt.js';
export { resolveUFAutorizador } from './facade/resolve-uf-autorizador.js';
export { retrieveNFeAuthorizationBatch } from './facade/retrieve-nfe-authorization-batch.js';
export { submitEPECEvent } from './facade/submit-epec-event.js';
export { authorizeNFCe } from './facade/authorize-nfce.js';
export { authorizeNFe } from './facade/authorize-nfe.js';
export { cancelNFe } from './facade/cancel-nfe.js';
export { changeManifestRecipientOperation } from './facade/change-manifest-recipient-operation.js';
export { createEnviNFe } from './facade/create-envi-nfe.js';
export { createNFe } from './facade/create-nfe.js';
export { createSigningContext } from './facade/create-signing-context.js';
export { distributeRecipientDFe } from './facade/distribute-recipient-dfe.js';
export { executeNFeSoapService } from './facade/execute-nfe-soap-service.js';
export { manifestRecipientOperation } from './facade/manifest-recipient-operation.js';
export { prepareNFCeSigningPrerequisites } from './facade/prepare-nfce-signing-prerequisites.js';
export { queryContributorRegistration } from './facade/query-contributor-registration.js';
export { queryNFeByAccessKey } from './facade/query-nfe-by-key.js';
export { queryNFeByNSU } from './facade/query-nfe-by-nsu.js';
export { queryNFeDocumentSituation } from './facade/query-nfe-document-situation.js';
export { queryNFeServiceStatus } from './facade/query-nfe-service-status.js';
export { resolveNFeServiceEndpoint } from './facade/resolve-nfe-service-endpoint.js';
export { serializeEnviNFeXml } from './facade/serialize-envi-nfe-xml.js';
export { serializeNFeXml } from './facade/serialize-nfe-xml.js';
export { signEventXml } from './facade/sign-event-xml.js';
export { signNFeXml } from './facade/sign-nfe-xml.js';
export { submitGenericEvents } from './facade/submit-generic-events.js';
export { submitICMSDeferralEvent } from './facade/submit-icms-deferral-event.js';
export type { ICMSDeferralEventInput } from './facade/submit-icms-deferral-event.js';
export { submitNFeCorrectionLetter } from './facade/submit-nfe-correction-letter.js';
export { submitNFeInutilization } from './facade/submit-nfe-inutilization.js';
export { validateNFeXsd } from './facade/validate-nfe-xsd.js';
export type { XsdValidationClassification, XsdValidationOptions, XsdValidationResult } from './facade/validate-nfe-xsd.js';

export type { AccessKeyFields, AccessKeyResult } from './facade/compute-nfe-access-key.js';
export type { HashCSRTInput } from './facade/compute-hash-csrt.js';
export type { NFeSEFAZAutorizador, UFRoutingResult } from './facade/resolve-uf-autorizador.js';
export type { EPECEventClassification, EPECEventInput, EPECEventOutcome, EPECSVCTarget } from './facade/submit-epec-event.js';
export type { AsyncBatchItemClassification, AsyncBatchItemResult, NFeAsyncBatchClassification, NFeAsyncBatchOutcome, NFeAsyncBatchRetrievalInput } from './facade/retrieve-nfe-authorization-batch.js';

export type {
  NFCeAuthorizationClassification,
  NFCeAuthorizationDocumentInput,
  NFCeAuthorizationOutcome,
  NFCeAuthorizationRequest,
  NFCeCSCInput,
  NFCeCoverageBoundary,
  NFCeSigningPrerequisiteDependency,
  NFCeSigningPrerequisitesInput,
  NFCeSigningPrerequisitesReceivedInputs,
  NFCeSigningPrerequisitesResult,
  NFCeValidationFailure,
} from './nfce/contracts.js';

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
  DeliveryConfirmationPayload,
  DeliveryFailurePayload,
  EconfPaymentDetail,
  EconfPayload,
  GenericEventActor,
  GenericEventActorDocumentType,
  GenericEventBatchClassification,
  GenericEventBatchOutcome,
  GenericEventBatchRequest,
  GenericEventCoverageBoundary,
  GenericEventFamily,
  GenericEventFamilyPayload,
  GenericEventInputItem,
  GenericEventItemClassification,
  GenericEventItemOutcome,
  GenericEventValidationFailure,
  InterestedActorPayload,
} from './generic-event/contracts.js';

export type { ICMSDeferralItem, ICMSDeferralPayload } from './generic-event/prorrogacao-icms-payload.js';

export type { RecipientActor,
  RecipientCoverageBoundary,
  RecipientDistributionCursor,
  RecipientDistributionOutcome,
  RecipientDistributionQuery,
  RecipientDocumentEnvelope,
  RecipientManifestationOutcome,
  RecipientManifestationRequest,
} from './recipient/recipient-shared.js';

export type {
  AccessKeyQueryOutcome,
  RecipientAccessKeyQuery,
} from './facade/query-nfe-by-key.js';
export type {
  NSUQueryOutcome,
  RecipientNSUQuery,
} from './facade/query-nfe-by-nsu.js';
export type {
  ContributorRegistrationClassification,
  ContributorRegistrationOutcome,
  ContributorRegistrationQuery,
} from './facade/query-contributor-registration.js';
export type { ManifestationChangeInput } from './facade/change-manifest-recipient-operation.js';

export type {
  CreateSigningContextInput,
  FilePathSigningSourceInput,
  InMemorySigningSourceInput,
  SignEventXmlInput,
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
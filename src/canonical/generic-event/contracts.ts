import type { SigningContext } from '../signing/contracts.js';
import type { TransportOutcome } from '../transport/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';
import type { ICMSDeferralPayload } from './prorrogacao-icms-payload.js';

const GENERIC_EVENT_ENVIRONMENTS = ['homologation'] as const;
const GENERIC_EVENT_ACTOR_DOCUMENT_TYPES = ['cpf', 'cnpj'] as const;
const GENERIC_EVENT_FAMILIES = [
	'delivery-confirmation',
	'interested-actor-transporter',
	'delivery-failure',
	'econf',
	'prorrogacao-icms',
] as const;
const GENERIC_EVENT_BATCH_CLASSIFICATIONS = [
	'success',
	'partial-success',
	'rejected',
	'timeout',
	'unavailable',
	'protocol-error',
	'usage-error',
	'unsupported-scope',
	'dependency-limited',
] as const;
const GENERIC_EVENT_ITEM_CLASSIFICATIONS = [
	'success',
	'rejected',
	'usage-error',
	'unsupported-scope',
	'dependency-limited',
	'protocol-error',
] as const;

/** Supported environment identifiers for the generic-event MVP. */
export type GenericEventEnvironment =
	(typeof GENERIC_EVENT_ENVIRONMENTS)[number];

/** Supported fiscal document identifiers for generic-event actors. */
export type GenericEventActorDocumentType =
	(typeof GENERIC_EVENT_ACTOR_DOCUMENT_TYPES)[number];

/** Supported event-family identifiers exposed by the generic-event MVP. */
export type GenericEventFamily = (typeof GENERIC_EVENT_FAMILIES)[number];

/** Application-facing batch result classes exposed by the generic-event slice. */
export type GenericEventBatchClassification =
	(typeof GENERIC_EVENT_BATCH_CLASSIFICATIONS)[number];

/** Application-facing item result classes exposed by the generic-event slice. */
export type GenericEventItemClassification =
	(typeof GENERIC_EVENT_ITEM_CLASSIFICATIONS)[number];

/** Identifies the actor that signs or authors one generic event item. */
export interface GenericEventActor {
	/** Fiscal document number for the actor. */
	readonly documentNumber: string;
	/** Fiscal document type accepted by the MVP. */
	readonly documentType: GenericEventActorDocumentType;
}

/** Payload accepted for delivery-confirmation events. */
export interface DeliveryConfirmationPayload {
	/** Timestamp that records the delivery confirmation event. */
	readonly deliveredAt: string;
	/** Hash associated with the delivery evidence. */
	readonly deliveryHash: string;
	/** Fiscal document number for the person that received the goods. */
	readonly recipientDocument: string;
	/** Name of the person that received the goods. */
	readonly recipientName: string;
}

/** Payload accepted for interested-actor transporter events. */
export interface InterestedActorPayload {
	/** Authorization type used for the actor registration. */
	readonly authorizationType: string;
	/** Fiscal document number for the authorized actor. */
	readonly authorizedDocument: string;
}

/** Payload accepted for delivery-failure events. */
export interface DeliveryFailurePayload {
	/** Timestamp that records the delivery attempt. */
	readonly attemptedAt: string;
	/** Attempt counter reported for the event. */
	readonly attemptNumber: number;
	/** Official reason type or code used by the event. */
	readonly reasonType: string;
	/** Human-readable justification associated with the failure. */
	readonly reasonDescription: string;
}

/** One payment detail accepted inside an ECONF payload. */
export interface EconfPaymentDetail {
	/** Payment indicator or classification. */
	readonly indicator: string;
	/** Payment method identifier. */
	readonly method: string;
	/** Paid value associated with the detail. */
	readonly value: string;
	/** Optional payer fiscal document number. */
	readonly payerDocument?: string;
	/** Optional payer state code. */
	readonly payerState?: string;
	/** Optional payment timestamp. */
	readonly paidAt?: string;
}

/** Payload accepted for ECONF events. */
export interface EconfPayload {
	/** Payment details that compose the ECONF event. */
	readonly paymentDetails: readonly EconfPaymentDetail[];
}

/** Union of the public payloads accepted by supported generic-event families. */
export type GenericEventFamilyPayload =
	| DeliveryConfirmationPayload
	| InterestedActorPayload
	| DeliveryFailurePayload
	| EconfPayload
	| ICMSDeferralPayload;

/** One event item accepted by the public batch request. */
export interface GenericEventInputItem {
	/** Access key attached to the event. */
	readonly accessKey: string;
	/** Actor that authors the event. */
	readonly author: GenericEventActor;
	/** Official event code associated with the family. */
	readonly eventCode: string;
	/** Supported family identifier exposed by the MVP. */
	readonly family: GenericEventFamily;
	/** Timestamp that records when the event occurred. */
	readonly occurredAt: string;
	/** Family-specific payload. */
	readonly payload: GenericEventFamilyPayload;
	/** Event sequence number used inside the XML envelope. */
	readonly sequenceNumber: number;
}

/** Public input accepted by the generic-event facade. */
export interface GenericEventBatchRequest {
	/** Logical batch identifier received from the integrator. */
	readonly batchId: string;
	/** Requested execution environment. */
	readonly environment: string;
	/** One or more generic-event items. */
	readonly items: readonly GenericEventInputItem[];
	/** Optional network executor override. */
	readonly requestExecutor?: RequestExecutor;
	/** Reusable signing context prepared by the signing slice. */
	readonly signingContext: SigningContext;
	/** Optional timeout in milliseconds. */
	readonly timeoutMs?: number;
}

/** Structured validation failure emitted before the transport layer is used. */
export interface GenericEventValidationFailure {
	/** Field path or logical component that triggered the failure. */
	readonly fieldPath: string;
	/** Zero-based index of the item that triggered the failure when applicable. */
	readonly itemIndex?: number;
	/** Human-readable explanation of the failure. */
	readonly message: string;
	/** Stable reason identifier for the local failure. */
	readonly reason: string;
}

/** Structured outcome emitted for one processed generic-event item. */
export interface GenericEventItemOutcome {
	/** Status code returned for the item when available. */
	readonly applicationStatusCode?: string;
	/** Human-readable status message returned for the item when available. */
	readonly applicationStatusMessage?: string;
	/** Item classification projected for the public contract. */
	readonly classification: GenericEventItemClassification;
	/** Event code observed for the processed item. */
	readonly eventCode: string;
	/** Supported family associated with the processed item. */
	readonly family: GenericEventFamily;
	/** Original zero-based item position in the submitted batch. */
	readonly itemIndex: number;
	/** Protocol number returned for the item when available. */
	readonly protocolNumber?: string;
	/** Processing timestamp returned for the item when available. */
	readonly receiptTimestamp?: string;
}

/** Structured coverage boundary for the generic-event MVP. */
export interface GenericEventCoverageBoundary {
	/** Explicitly excluded capabilities for the slice. */
	readonly excludedScope: readonly string[];
	/** External operational dependencies that remain outside the SDK boundary. */
	readonly externalDependencies: readonly string[];
	/** Explicitly included capabilities for the slice. */
	readonly includedScope: readonly string[];
	/** Sources that justify the published boundary. */
	readonly normativeSources: readonly string[];
}

/** Structured batch outcome returned by the generic-event public facade. */
export interface GenericEventBatchOutcome {
	/** Indicates whether the request reached the transport layer. */
	readonly acceptedForTransport: boolean;
	/** Batch identifier observed by the operation. */
	readonly batchId: string;
	/** Public batch classification projected by the slice. */
	readonly classification: GenericEventBatchClassification;
	/** Synthesized failure reason when the flow does not complete successfully. */
	readonly failureReason?: string;
	/** Structured item outcomes returned after remote processing. */
	readonly itemOutcomes: readonly GenericEventItemOutcome[];
	/** Underlying transport evidence when the request was executed remotely. */
	readonly transportOutcome: TransportOutcome;
	/** Local validation failures returned before transport when applicable. */
	readonly validationFailures: readonly GenericEventValidationFailure[];
}

/** Returns the supported environment values for the generic-event MVP. */
export function getSupportedGenericEventEnvironmentValues():
	readonly GenericEventEnvironment[] {
	return GENERIC_EVENT_ENVIRONMENTS;
}

/** Returns the supported actor document types for the generic-event MVP. */
export function getSupportedGenericEventActorDocumentTypes():
	readonly GenericEventActorDocumentType[] {
	return GENERIC_EVENT_ACTOR_DOCUMENT_TYPES;
}

/** Returns the public batch classifications supported by the slice. */
export function getGenericEventBatchClassifications():
	readonly GenericEventBatchClassification[] {
	return GENERIC_EVENT_BATCH_CLASSIFICATIONS;
}

/** Returns the public item classifications supported by the slice. */
export function getGenericEventItemClassifications():
	readonly GenericEventItemClassification[] {
	return GENERIC_EVENT_ITEM_CLASSIFICATIONS;
}

/** Normalizes a generic-event actor document number to digits only. */
export function normalizeGenericEventDocumentNumber(documentNumber: string): string {
	return documentNumber.replaceAll(/\D/gu, '');
}

/** Verifies whether a generic-event actor stays inside the published boundary. */
export function isSupportedGenericEventActor(actor: GenericEventActor): boolean {
	const normalizedDocumentNumber = normalizeGenericEventDocumentNumber(
		actor.documentNumber,
	);

	if (actor.documentType === 'cpf') {
		return normalizedDocumentNumber.length === 11;
	}

	if (actor.documentType === 'cnpj') {
		return normalizedDocumentNumber.length === 14;
	}

	return false;
}

/** Verifies whether the supplied NF-e access key is syntactically valid. */
export function isValidGenericEventAccessKey(accessKey: string): boolean {
	return /^\d{44}$/u.test(accessKey.trim());
}

/** Escapes XML-sensitive characters for generic-event payload generation. */
export function escapeGenericEventXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}
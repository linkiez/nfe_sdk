import type { SigningContext } from '../signing/contracts.js';
import type { TransportOutcome } from '../transport/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

const RECIPIENT_ACTOR_DOCUMENT_TYPES = ['cpf', 'cnpj'] as const;
const RECIPIENT_DOCUMENT_ENVELOPE_KINDS = [
	'summary',
	'full-document',
	'other',
] as const;
const RECIPIENT_DISTRIBUTION_CLASSIFICATIONS = [
	'documents-available',
	'no-new-documents',
	'rejected',
	'timeout',
	'unavailable',
	'protocol-error',
	'usage-error',
	'unsupported-scope',
	'dependency-limited',
] as const;
const RECIPIENT_CONTINUATION_ACTIONS = [
	'consume-documents',
	'await-backoff',
	'retry-later',
	'resolve-boundary',
] as const;
const RECIPIENT_MANIFESTATION_CLASSIFICATIONS = [
	'success',
	'rejected',
	'timeout',
	'unavailable',
	'protocol-error',
	'usage-error',
	'unsupported-scope',
	'dependency-limited',
] as const;
const RECIPIENT_DOCUMENT_RETRIEVAL_CLASSIFICATIONS = [
	'document-available',
	'document-pending',
	'no-new-documents',
	'dependency-limited',
	'timeout',
	'unavailable',
	'protocol-error',
	'usage-error',
	'unsupported-scope',
] as const;
const RECIPIENT_MANIFESTATION_EVENT_TYPES = [
	'confirmacao-da-operacao',
	'ciencia-da-operacao',
	'desconhecimento-da-operacao',
	'operacao-nao-realizada',
] as const;

/**
 * Supported recipient actor document identifiers.
 */
export type RecipientActorDocumentType =
	(typeof RECIPIENT_ACTOR_DOCUMENT_TYPES)[number];

/**
 * Identifies the recipient actor that requests distribution or manifestation.
 */
export interface RecipientActor {
	/** Fiscal document number for the interested recipient. */
	readonly documentNumber: string;
	/** Fiscal document type accepted by the MVP. */
	readonly documentType: RecipientActorDocumentType;
}

/**
 * Public distribution result classes exposed by the recipient slice.
 */
export type RecipientDistributionClassification =
	(typeof RECIPIENT_DISTRIBUTION_CLASSIFICATIONS)[number];

/**
 * Next-step actions exposed by the recipient continuity slice.
 */
export type RecipientContinuationAction =
	(typeof RECIPIENT_CONTINUATION_ACTIONS)[number];

/**
 * Additive continuation guidance derived from one recipient distribution call.
 */
export interface RecipientContinuationState {
	/** Whether the distribution cursor advanced compared with the input cursor. */
	readonly cursorAdvanced: boolean;
	/** Recommended next action for the integrator after this result. */
	readonly nextAction: RecipientContinuationAction;
	/** Stable reason key that explains the guidance outcome. */
	readonly reason: RecipientDistributionClassification;
	/** Suggested wait time before another continuation attempt when applicable. */
	readonly recommendedBackoffMs?: number;
}

/**
 * Observable continuity data returned by recipient distribution.
 */
export interface RecipientDistributionCursor {
	/** Last NSU effectively observed during this call. */
	readonly ultNSU: string;
	/** Highest NSU currently exposed by the service. */
	readonly maxNSU: string;
	/** Whether the cursor indicates that more documents are immediately available. */
	readonly hasMoreDocumentsNow: boolean;
	/** Suggested wait time before the next polling attempt when applicable. */
	readonly recommendedBackoffMs?: number;
}

/**
 * Structured envelope classes emitted by recipient distribution.
 */
export type RecipientDocumentEnvelopeKind =
	(typeof RECIPIENT_DOCUMENT_ENVELOPE_KINDS)[number];

/**
 * Structured projection of one distributed document item.
 */
export interface RecipientDocumentEnvelope {
	/** Operational envelope kind recognized by the SDK. */
	readonly kind: RecipientDocumentEnvelopeKind;
	/** NSU attached to the distributed item. */
	readonly nsu: string;
	/** Source schema identifier reported by the service. */
	readonly schemaType: string;
	/** Original compact payload kept for traceability. */
	readonly compressedPayload: string;
	/** Access key extracted from the payload when available. */
	readonly accessKey?: string;
	/** Minimal normalized projection extracted from the payload. */
	readonly normalizedPayload?: {
		readonly issuerDocumentNumber?: string;
		readonly rawXml: string;
		readonly recipientDocumentNumber?: string;
		readonly rootTag: string;
	};
}

/**
 * Public retrieval result classes exposed by the recipient continuity slice.
 */
export type RecipientDocumentRetrievalClassification =
	(typeof RECIPIENT_DOCUMENT_RETRIEVAL_CLASSIFICATIONS)[number];

/**
 * Functional target used to locate a later recipient document.
 */
export interface RecipientFollowUpTarget {
	/** Access key expected for the follow-up document. */
	readonly accessKey: string;
	/** Envelope kinds accepted as a valid retrieval result. */
	readonly documentKinds: readonly RecipientDocumentEnvelopeKind[];
	/** Related manifestation event when the caller wants to preserve provenance. */
	readonly sourceEventType?: RecipientManifestationEventType;
}

/**
 * Structured query accepted by the recipient distribution facade.
 */
export interface RecipientDistributionQuery {
	/** Requested execution environment. */
	readonly environment: string;
	/** Recipient actor interested in the documents. */
	readonly actor: RecipientActor;
	/** Observable NSU cursor used for continuity. */
	readonly ultNSU: string;
	/** Optional network executor override. */
	readonly requestExecutor?: RequestExecutor;
	/** Optional timeout in milliseconds. */
	readonly timeoutMs?: number;
}

/**
 * Structured result produced by recipient distribution.
 */
export interface RecipientDistributionOutcome {
	/** Application-facing distribution classification. */
	readonly classification: RecipientDistributionClassification;
	/** Additive guidance for the next continuity step. */
	readonly continuation: RecipientContinuationState;
	/** Recipient actor observed by the operation. */
	readonly actor: RecipientActor;
	/** Observable continuity data for the next call. */
	readonly cursor: RecipientDistributionCursor;
	/** Structured distributed documents returned by the service. */
	readonly documents: readonly RecipientDocumentEnvelope[];
	/** Underlying transport evidence. */
	readonly transportOutcome: TransportOutcome;
	/** Synthesized failure reason when the flow does not complete successfully. */
	readonly failureReason?: string;
	/** SEFAZ status code projected by the distribution flow when available. */
	readonly applicationStatusCode?: string;
	/** SEFAZ status message projected by the distribution flow when available. */
	readonly applicationStatusMessage?: string;
}

/**
 * Structured input accepted by the follow-up document retrieval facade.
 */
export interface RecipientDocumentRetrievalRequest {
	/** Requested execution environment. */
	readonly environment: string;
	/** Recipient actor interested in the document. */
	readonly actor: RecipientActor;
	/** Known cursor used to resume distribution for the follow-up step. */
	readonly startingCursor: string;
	/** Expected document target for this retrieval attempt. */
	readonly target: RecipientFollowUpTarget;
	/** Optional network executor override. */
	readonly requestExecutor?: RequestExecutor;
	/** Optional timeout in milliseconds. */
	readonly timeoutMs?: number;
}

/**
 * Structured result produced by follow-up document retrieval.
 */
export interface RecipientDocumentRetrievalOutcome {
	/** Application-facing retrieval classification. */
	readonly classification: RecipientDocumentRetrievalClassification;
	/** Underlying continuity evidence used for the retrieval attempt. */
	readonly distributionOutcome: RecipientDistributionOutcome;
	/** Matched document when the retrieval succeeds. */
	readonly matchedDocument?: RecipientDocumentEnvelope;
	/** Synthesized failure reason when the flow does not complete successfully. */
	readonly failureReason?: string;
}

/**
 * Supported manifestation event identifiers for the recipient MVP.
 */
export type RecipientManifestationEventType =
	(typeof RECIPIENT_MANIFESTATION_EVENT_TYPES)[number];

/**
 * Public manifestation result classes exposed by the recipient slice.
 */
export type RecipientManifestationClassification =
	(typeof RECIPIENT_MANIFESTATION_CLASSIFICATIONS)[number];

/**
 * Structured input accepted by the recipient manifestation facade.
 */
export interface RecipientManifestationRequest {
	/** Requested execution environment. */
	readonly environment: string;
	/** Recipient actor that signs the manifestation. */
	readonly actor: RecipientActor;
	/** Access key for the manifested document. */
	readonly accessKey: string;
	/** One of the four basic manifestation events supported by the MVP. */
	readonly eventType: RecipientManifestationEventType;
	/** Optional justification used only when required by the event type. */
	readonly justification?: string;
	/** Reusable signing context prepared by the signing slice. */
	readonly signingContext: SigningContext;
	/** Optional network executor override. */
	readonly requestExecutor?: RequestExecutor;
	/** Optional timeout in milliseconds. */
	readonly timeoutMs?: number;
}

/**
 * Structured result produced by recipient manifestation.
 */
export interface RecipientManifestationOutcome {
	/** Application-facing manifestation classification. */
	readonly classification: RecipientManifestationClassification;
	/** Event type observed by the operation. */
	readonly eventType: RecipientManifestationEventType;
	/** SEFAZ status code projected by the manifestation flow when available. */
	readonly applicationStatusCode?: string;
	/** SEFAZ status message projected by the manifestation flow when available. */
	readonly applicationStatusMessage?: string;
	/** Protocol number exposed by the event response when available. */
	readonly protocolNumber?: string;
	/** Underlying transport evidence. */
	readonly transportOutcome: TransportOutcome;
	/** Contractual marker that later download remains a separate step. */
	readonly downloadRemainsSeparate: true;
	/** Synthesized failure reason when the flow does not complete successfully. */
	readonly failureReason?: string;
}

/**
 * Formal supported and excluded boundaries for the recipient MVP.
 */
export interface RecipientCoverageBoundary {
	/** Capabilities explicitly covered by this slice. */
	readonly includedScope: readonly string[];
	/** Capabilities explicitly excluded from this slice. */
	readonly excludedScope: readonly string[];
	/** External operational dependencies that remain outside the SDK boundary. */
	readonly externalDependencies: readonly string[];
}

/**
 * Normalizes a recipient document number to digits only.
 *
 * @param documentNumber - Raw CPF or CNPJ received from the caller.
 * @returns Normalized digits-only document number.
 */
export function normalizeRecipientDocumentNumber(documentNumber: string): string {
	return documentNumber.replaceAll(/\D/gu, '');
}

/**
 * Verifies whether a recipient actor stays inside the published document boundary.
 *
 * @param actor - Actor received from the public recipient contract.
 * @returns `true` when the document type and size are consistent with CPF or CNPJ.
 */
export function isSupportedRecipientActor(actor: RecipientActor): boolean {
	const normalizedDocumentNumber = normalizeRecipientDocumentNumber(
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

/**
 * Verifies whether the supplied NSU cursor is syntactically valid for `distNSU`.
 *
 * @param ultNSU - Raw NSU string received from the caller.
 * @returns `true` when the cursor contains only digits and has the expected length.
 */
export function isValidRecipientNSU(ultNSU: string): boolean {
	return /^\d{15}$/u.test(ultNSU.trim());
}

/**
 * Verifies whether the supplied access key is syntactically valid.
 *
 * @param accessKey - Raw NF-e access key received from the caller.
 * @returns `true` when the key is a 44-digit identifier.
 */
export function isValidRecipientAccessKey(accessKey: string): boolean {
	return /^\d{44}$/u.test(accessKey.trim());
}

/**
 * Escapes XML-special characters for recipient payload assembly.
 *
 * @param value - Raw string value to inject into XML.
 * @returns Escaped XML-safe text.
 */
export function escapeRecipientXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}
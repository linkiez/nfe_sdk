import type { TransportOutcome } from '../transport/contracts.js';

import {
	getRecipientRecommendedBackoffMs,
	isRecipientDependencyLimited,
	isRecipientUsageBoundary,
} from './recipient-coverage-boundary.js';
import { parseRecipientDocumentEnvelopes } from './recipient-document-envelope.js';
import type {
	RecipientContinuationState,
	RecipientDistributionCursor,
	RecipientDistributionOutcome,
	RecipientDistributionQuery,
} from './recipient-shared.js';

/**
 * Maps the raw transport result into the recipient distribution contract.
 *
 * @param input - Public distribution query used for the transport call.
 * @param transportOutcome - Raw transport evidence returned by the SOAP layer.
 * @returns Structured recipient distribution outcome.
 */
export function mapRecipientDistributionTransportOutcome(
	input: RecipientDistributionQuery,
	transportOutcome: TransportOutcome,
): RecipientDistributionOutcome {
	const responseEnvelopeXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
	const applicationStatusCode = transportOutcome.applicationStatusCode;
	const applicationStatusMessage = transportOutcome.applicationStatusMessage;
	const documents = parseRecipientDocumentEnvelopes(responseEnvelopeXml);
	const cursor = createRecipientDistributionCursor(
		input.ultNSU,
		responseEnvelopeXml,
		applicationStatusCode,
	);

	if (transportOutcome.classification === 'success') {
		if (
			isRecipientDependencyLimited(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientDistributionOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'dependency-limited',
				cursor,
				documents,
				failureReason: applicationStatusMessage,
				input,
				transportOutcome,
			});
		}

		if (applicationStatusCode === '137' || documents.length === 0) {
			return createRecipientDistributionOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'no-new-documents',
				cursor,
				documents,
				input,
				transportOutcome,
			});
		}

		return createRecipientDistributionOutcome({
			applicationStatusCode,
			applicationStatusMessage,
			classification: 'documents-available',
			cursor,
			documents,
			input,
			transportOutcome,
		});
	}

	if (transportOutcome.classification === 'functional-rejection') {
		if (
			isRecipientDependencyLimited(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientDistributionOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'dependency-limited',
				cursor,
				documents,
				failureReason: applicationStatusMessage,
				input,
				transportOutcome,
			});
		}

		if (
			isRecipientUsageBoundary(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientDistributionOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'usage-error',
				cursor,
				documents,
				failureReason: applicationStatusMessage,
				input,
				transportOutcome,
			});
		}

		return createRecipientDistributionOutcome({
			applicationStatusCode,
			applicationStatusMessage,
			classification: 'rejected',
			cursor,
			documents,
			failureReason: applicationStatusMessage,
			input,
			transportOutcome,
		});
	}

	return createRecipientDistributionOutcome({
		applicationStatusCode,
		applicationStatusMessage,
		classification: mapTransportClassification(transportOutcome.classification),
		cursor,
		documents,
		failureReason: transportOutcome.failureReason ?? applicationStatusMessage,
		input,
		transportOutcome,
	});
}

function createRecipientDistributionCursor(
	inputUltNSU: string,
	responseEnvelopeXml: string,
	applicationStatusCode?: string,
): RecipientDistributionCursor {
	const ultNSU = extractFirstTagText(responseEnvelopeXml, 'ultNSU') ?? inputUltNSU;
	const maxNSU = extractFirstTagText(responseEnvelopeXml, 'maxNSU') ?? ultNSU;

	return {
		hasMoreDocumentsNow: BigInt(maxNSU) > BigInt(ultNSU),
		maxNSU,
		recommendedBackoffMs:
			getRecipientRecommendedBackoffMs(applicationStatusCode),
		ultNSU,
	};
}

function mapTransportClassification(
	classification: TransportOutcome['classification'],
): RecipientDistributionOutcome['classification'] {
	switch (classification) {
		case 'protocol-error':
			return 'protocol-error';
		case 'timeout':
			return 'timeout';
		case 'unavailable':
			return 'unavailable';
		case 'usage-error':
			return 'usage-error';
		default:
			return 'rejected';
	}
}

function createRecipientDistributionOutcome(input: {
	readonly applicationStatusCode?: string;
	readonly applicationStatusMessage?: string;
	readonly classification: RecipientDistributionOutcome['classification'];
	readonly cursor: RecipientDistributionCursor;
	readonly documents: RecipientDistributionOutcome['documents'];
	readonly failureReason?: string;
	readonly input: RecipientDistributionQuery;
	readonly transportOutcome: TransportOutcome;
}): RecipientDistributionOutcome {
	return {
		actor: input.input.actor,
		applicationStatusCode: input.applicationStatusCode,
		applicationStatusMessage: input.applicationStatusMessage,
		classification: input.classification,
		continuation: createRecipientContinuationState(
			input.input.ultNSU,
			input.cursor,
			input.classification,
		),
		cursor: input.cursor,
		documents: input.documents,
		failureReason: input.failureReason,
		transportOutcome: input.transportOutcome,
	};
}

function createRecipientContinuationState(
	inputUltNSU: string,
	cursor: RecipientDistributionCursor,
	classification: RecipientDistributionOutcome['classification'],
): RecipientContinuationState {
	const cursorAdvanced = BigInt(cursor.ultNSU) > BigInt(inputUltNSU);

	if (classification === 'documents-available') {
		return {
			cursorAdvanced,
			nextAction: 'consume-documents',
			reason: classification,
		};
	}

	if (classification === 'no-new-documents') {
		return {
			cursorAdvanced,
			nextAction: 'await-backoff',
			reason: classification,
			recommendedBackoffMs: cursor.recommendedBackoffMs,
		};
	}

	if (
		classification === 'dependency-limited' ||
		classification === 'unavailable' ||
		classification === 'timeout'
	) {
		return {
			cursorAdvanced,
			nextAction: 'retry-later',
			reason: classification,
			recommendedBackoffMs: cursor.recommendedBackoffMs,
		};
	}

	return {
		cursorAdvanced,
		nextAction: 'resolve-boundary',
		reason: classification,
	};
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
	const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

	return match?.[1];
}
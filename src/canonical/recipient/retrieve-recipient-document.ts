import { distributeRecipientDFe } from './distribute-recipient-dfe.js';
import { createRecipientBoundaryTransportOutcome } from './recipient-coverage-boundary.js';
import {
	findRecipientFollowUpDocument,
	mapRecipientRetrievalClassification,
} from './recipient-follow-up.js';
import {
	isSupportedRecipientActor,
	isValidRecipientAccessKey,
	isValidRecipientNSU,
} from './recipient-shared.js';
import type {
	RecipientDocumentRetrievalOutcome,
	RecipientDocumentRetrievalRequest,
} from './recipient-shared.js';

/**
 * Recovers a later recipient document using one additive `distNSU` continuation step.
 *
 * @param input - Structured follow-up retrieval request.
 * @returns Structured follow-up retrieval outcome.
 */
export async function retrieveRecipientDocument(
	input: RecipientDocumentRetrievalRequest,
): Promise<RecipientDocumentRetrievalOutcome> {
	if (!isSupportedRecipientActor(input.actor)) {
		return createUsageErrorRetrievalOutcome(
			input,
			'Recipient follow-up retrieval requires a supported CPF or CNPJ actor.',
		);
	}

	if (!isValidRecipientNSU(input.startingCursor)) {
		return createUsageErrorRetrievalOutcome(
			input,
			'Recipient follow-up retrieval requires a 15-digit starting cursor.',
		);
	}

	if (!isValidRecipientAccessKey(input.target.accessKey)) {
		return createUsageErrorRetrievalOutcome(
			input,
			'Recipient follow-up retrieval requires a valid 44-digit access key.',
		);
	}

	if (input.target.documentKinds.length === 0) {
		return createUsageErrorRetrievalOutcome(
			input,
			'Recipient follow-up retrieval requires at least one accepted document kind.',
		);
	}

	const distributionOutcome = await distributeRecipientDFe({
		actor: input.actor,
		environment: input.environment,
		requestExecutor: input.requestExecutor,
		timeoutMs: input.timeoutMs,
		ultNSU: input.startingCursor,
	});
	const matchedDocument = findRecipientFollowUpDocument(
		distributionOutcome.documents,
		input.target,
	);
	const classification = mapRecipientRetrievalClassification(
		distributionOutcome.classification,
		matchedDocument !== undefined,
	);

	return {
		classification,
		distributionOutcome,
		failureReason:
			matchedDocument === undefined ? distributionOutcome.failureReason : undefined,
		matchedDocument,
	};
}

function createUsageErrorRetrievalOutcome(
	input: RecipientDocumentRetrievalRequest,
	failureReason: string,
): RecipientDocumentRetrievalOutcome {
	return {
		classification: 'usage-error',
		distributionOutcome: {
			actor: input.actor,
			applicationStatusCode: undefined,
			applicationStatusMessage: undefined,
			classification: 'usage-error',
			continuation: {
				cursorAdvanced: false,
				nextAction: 'resolve-boundary',
				reason: 'usage-error',
			},
			cursor: {
				hasMoreDocumentsNow: false,
				maxNSU: input.startingCursor,
				ultNSU: input.startingCursor,
			},
			documents: [],
			failureReason,
			transportOutcome: {
				...createRecipientBoundaryTransportOutcome(
					'nfe-recipient-distribution',
					failureReason,
				),
			},
		},
		failureReason,
		matchedDocument: undefined,
	};
}

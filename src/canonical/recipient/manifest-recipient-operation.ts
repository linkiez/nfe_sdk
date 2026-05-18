import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import {
	createRecipientBoundaryTransportOutcome,
	createUnsupportedRecipientScopeMessage,
} from './recipient-coverage-boundary.js';
import { mapRecipientManifestationTransportOutcome } from './recipient-manifestation-outcome.js';
import {
	createRecipientManifestationPayloadXml,
	validateRecipientManifestationRequest,
} from './recipient-manifestation-validation.js';
import type {
	RecipientManifestationOutcome,
	RecipientManifestationRequest,
} from './recipient-shared.js';

const RECIPIENT_MANIFESTATION_SERVICE = 'nfe-recipient-manifestation' as const;

/**
 * Executes the supported recipient manifestation flow for the four basic events.
 *
 * @param input - Structured recipient manifestation request.
 * @returns Structured recipient manifestation outcome.
 */
export async function manifestRecipientOperation(
	input: RecipientManifestationRequest,
): Promise<RecipientManifestationOutcome> {
	if (input.environment !== 'homologation') {
		const failureReason = createUnsupportedRecipientScopeMessage(
			input.environment,
			'manifestRecipientOperation',
		);

		return {
			classification: 'unsupported-scope',
			downloadRemainsSeparate: true,
			eventType: input.eventType,
			failureReason,
			transportOutcome: createRecipientBoundaryTransportOutcome(
				RECIPIENT_MANIFESTATION_SERVICE,
				failureReason,
			),
		};
	}

	const validationError = validateRecipientManifestationRequest(input);

	if (validationError) {
		return {
			classification: 'usage-error',
			downloadRemainsSeparate: true,
			eventType: input.eventType,
			failureReason: validationError,
			transportOutcome: createRecipientBoundaryTransportOutcome(
				RECIPIENT_MANIFESTATION_SERVICE,
				validationError,
			),
		};
	}

	const transportOutcome = await executeNFeSoapService({
		environment: input.environment,
		payloadXml: createRecipientManifestationPayloadXml(input),
		requestExecutor: input.requestExecutor,
		service: RECIPIENT_MANIFESTATION_SERVICE,
		timeoutMs: input.timeoutMs,
	});

	return mapRecipientManifestationTransportOutcome(input, transportOutcome);
}
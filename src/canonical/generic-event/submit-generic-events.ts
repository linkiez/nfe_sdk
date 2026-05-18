import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import type {
	GenericEventBatchOutcome,
	GenericEventBatchRequest,
} from './contracts.js';
import { buildGenericEventEnvelopeXml } from './build-env-evento.js';
import {
	createGenericEventBoundaryTransportOutcome,
	createUnsupportedGenericEventScopeMessage,
} from './family-boundary.js';
import { mapGenericEventBatchOutcome } from './map-generic-event-batch-outcome.js';
import { parseRetEnvEventoXml } from './parse-ret-env-evento.js';
import { validateGenericEventBatchRequest } from './validate-generic-event-batch.js';

const GENERIC_EVENT_SERVICE = 'nfe-generic-event' as const;

/**
 * Executes the supported homologation generic-event flow for one or more supported items.
 *
 * @param input - Structured generic-event batch request.
 * @returns Structured batch outcome with local or remote evidence.
 */
export async function submitGenericEvents(
	input: GenericEventBatchRequest,
): Promise<GenericEventBatchOutcome> {
	if (input.environment !== 'homologation') {
		const failureReason = createUnsupportedGenericEventScopeMessage(
			input.environment,
			'submitGenericEvents',
		);

		return {
			acceptedForTransport: false,
			batchId: input.batchId,
			classification: 'unsupported-scope',
			failureReason,
			itemOutcomes: [],
			transportOutcome: createGenericEventBoundaryTransportOutcome(failureReason),
			validationFailures: [
				{
					fieldPath: 'environment',
					message: failureReason,
					reason: 'unsupported-environment',
				},
			],
		};
	}

	const validationFailures = validateGenericEventBatchRequest(input);

	if (validationFailures.length > 0) {
		const failureReason = validationFailures[0]?.message ?? 'Invalid generic-event request.';

		return {
			acceptedForTransport: false,
			batchId: input.batchId,
			classification: 'usage-error',
			failureReason,
			itemOutcomes: [],
			transportOutcome: createGenericEventBoundaryTransportOutcome(failureReason),
			validationFailures,
		};
	}

	const transportOutcome = await executeNFeSoapService({
		environment: input.environment,
		payloadXml: buildGenericEventEnvelopeXml(input),
		requestExecutor: input.requestExecutor,
		service: GENERIC_EVENT_SERVICE,
		timeoutMs: input.timeoutMs,
	});
	const parsedResponse = parseRetEnvEventoXml(
		transportOutcome.evidence.responseEnvelopeXml ?? '',
	);

	return mapGenericEventBatchOutcome({
		batchId: input.batchId,
		items: input.items,
		parsedResponse,
		transportOutcome,
	});
}
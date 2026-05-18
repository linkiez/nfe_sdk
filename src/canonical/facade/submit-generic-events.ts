import { submitGenericEvents as submitInternalGenericEvents } from '../generic-event/submit-generic-events.js';
import type {
	GenericEventBatchOutcome,
	GenericEventBatchRequest,
} from '../generic-event/contracts.js';

/**
 * Public root-facade function that submits one supported generic-event batch.
 *
 * @param input - Structured generic-event batch request received from the integrator.
 * @returns Structured generic-event batch outcome.
 */
export async function submitGenericEvents(
	input: GenericEventBatchRequest,
): Promise<GenericEventBatchOutcome> {
	return submitInternalGenericEvents(input);
}
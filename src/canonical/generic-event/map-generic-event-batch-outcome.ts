import {
	classifyGenericEventBatchTransportOutcome,
	classifyGenericEventItemStatus,
} from './classify-generic-event-outcome.js';
import type {
	GenericEventBatchOutcome,
	GenericEventInputItem,
	GenericEventItemOutcome,
} from './contracts.js';
import type { ParsedGenericEventBatchResponse } from './parse-ret-env-evento.js';
import type { TransportOutcome } from '../transport/contracts.js';

/** Maps one parsed `retEnvEvento` response into the public batch outcome contract. */
export function mapGenericEventBatchOutcome(input: {
	readonly batchId: string;
	readonly items: readonly GenericEventInputItem[];
	readonly parsedResponse: ParsedGenericEventBatchResponse;
	readonly transportOutcome: TransportOutcome;
}): GenericEventBatchOutcome {
	const itemOutcomes = input.items.map((item, itemIndex) =>
		createItemOutcome({
			item,
			itemIndex,
			parsedItem: input.parsedResponse.items[itemIndex],
		}),
	);

	return {
		acceptedForTransport: true,
		batchId: input.batchId,
		classification: classifyGenericEventBatchTransportOutcome({
			itemClassifications: itemOutcomes.map((itemOutcome) => itemOutcome.classification),
			transportOutcome: input.transportOutcome,
		}),
		failureReason: input.transportOutcome.failureReason,
		itemOutcomes,
		transportOutcome: input.transportOutcome,
		validationFailures: [],
	};
}

function createItemOutcome(input: {
	readonly item: GenericEventInputItem;
	readonly itemIndex: number;
	readonly parsedItem?: ParsedGenericEventBatchResponse['items'][number];
}): GenericEventItemOutcome {
	return {
		applicationStatusCode: input.parsedItem?.applicationStatusCode,
		applicationStatusMessage: input.parsedItem?.applicationStatusMessage,
		classification: classifyGenericEventItemStatus({
			applicationStatusCode: input.parsedItem?.applicationStatusCode,
			applicationStatusMessage: input.parsedItem?.applicationStatusMessage,
		}),
		eventCode: input.item.eventCode,
		family: input.item.family,
		itemIndex: input.itemIndex,
		protocolNumber: input.parsedItem?.protocolNumber,
		receiptTimestamp: input.parsedItem?.receiptTimestamp,
	};
}
import { buildFixtureGenericEventBatchRequest } from './build-generic-event-fixtures';

/** Builds a fixture batch focused on the delivery-confirmation family. */
export function buildDeliveryConfirmationFixture() {
	return buildFixtureGenericEventBatchRequest();
}
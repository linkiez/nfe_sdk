import { buildFixtureGenericEventBatchRequest, createFixtureGenericEventItem } from './build-generic-event-fixtures';

/** Builds a heterogeneous generic-event batch fixture with two supported families. */
export function buildHeterogeneousGenericEventBatchFixture() {
	return buildFixtureGenericEventBatchRequest({
		items: [
			createFixtureGenericEventItem(),
			createFixtureGenericEventItem({
				eventCode: '110192',
				family: 'delivery-failure',
				payload: {
					attemptNumber: 1,
					attemptedAt: '2026-05-18T10:10:00-03:00',
					reasonDescription: 'Destinatario ausente',
					reasonType: '2',
				},
				sequenceNumber: 2,
			}),
		],
	});
}
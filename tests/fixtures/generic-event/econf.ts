import { buildFixtureGenericEventBatchRequest, createFixtureGenericEventItem } from './build-generic-event-fixtures';

/** Builds a fixture batch focused on the ECONF family. */
export function buildEconfFixture() {
	return buildFixtureGenericEventBatchRequest({
		items: [
			createFixtureGenericEventItem({
				eventCode: '110750',
				family: 'econf',
				payload: {
					paymentDetails: [
						{
							indicator: '0',
							method: '01',
							value: '100.00',
						},
					],
				},
			}),
		],
	});
}
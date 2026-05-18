import * as publicApi from '../../../src/index';

import { submitGenericEvents as submitCanonicalGenericEvents } from '../../../src/canonical/facade/submit-generic-events';
import { buildFixtureGenericEventBatchRequest } from '../../fixtures/generic-event/build-generic-event-fixtures';

describe('submitGenericEvents facade regression', () => {
	it('keeps the root facade aligned with the canonical facade for local validation failures', async () => {
		const submitGenericEvents = (publicApi as Record<string, unknown>)
			.submitGenericEvents as typeof submitCanonicalGenericEvents | undefined;
		const invalidRequest = buildFixtureGenericEventBatchRequest({
			items: [
				{
					...buildFixtureGenericEventBatchRequest().items[0],
					accessKey: 'invalid',
				},
			],
		});

		expect(typeof submitGenericEvents).toBe('function');

		const rootOutcome = await submitGenericEvents?.(invalidRequest);
		const canonicalOutcome = await submitCanonicalGenericEvents(invalidRequest);

		expect(rootOutcome).toEqual(canonicalOutcome);
		expect(rootOutcome?.acceptedForTransport).toBe(false);
		expect(rootOutcome?.classification).toBe('usage-error');
	});
});
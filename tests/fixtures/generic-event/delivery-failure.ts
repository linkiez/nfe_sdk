import {
  buildFixtureGenericEventBatchRequest,
  createFixtureGenericEventItem,
} from './build-generic-event-fixtures';

/** Builds a fixture batch focused on the delivery-failure family. */
export function buildDeliveryFailureFixture() {
  return buildFixtureGenericEventBatchRequest({
    items: [
      createFixtureGenericEventItem({
        eventCode: '110192',
        family: 'delivery-failure',
        payload: {
          attemptNumber: 1,
          attemptedAt: '2026-05-18T09:55:00-03:00',
          reasonDescription: 'Endereco nao localizado',
          reasonType: '1',
        },
      }),
    ],
  });
}

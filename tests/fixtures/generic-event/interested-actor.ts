import {
  buildFixtureGenericEventBatchRequest,
  createFixtureGenericEventItem,
} from './build-generic-event-fixtures';

/** Builds a fixture batch focused on the interested-actor transporter family. */
export function buildInterestedActorFixture() {
  return buildFixtureGenericEventBatchRequest({
    items: [
      createFixtureGenericEventItem({
        eventCode: '110150',
        family: 'interested-actor-transporter',
        payload: {
          authorizationType: '1',
          authorizedDocument: '12345678000195',
        },
      }),
    ],
  });
}

import * as publicApi from '../../src/index';

describe('public generic-event facade contract', () => {
  it('publishes submitGenericEvents from the root entrypoint', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toContain('submitGenericEvents');
  });

  it('keeps generic-event internals outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('genericEvent');
    expect(publicApi).not.toHaveProperty('mapDeliveryConfirmationEvent');
    expect(publicApi).not.toHaveProperty('mapInterestedActorEvent');
  });
});

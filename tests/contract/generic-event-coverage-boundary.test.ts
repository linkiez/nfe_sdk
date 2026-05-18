import * as publicApi from '../../src/index';

import {
  buildFixtureGenericEventBatchRequest,
  createFixtureGenericEventItem,
} from '../fixtures/generic-event/build-generic-event-fixtures';

type SubmitGenericEvents = (input: {
  batchId: string;
  environment: string;
  items: readonly unknown[];
  signingContext: unknown;
  timeoutMs?: number;
}) => Promise<{
  acceptedForTransport: boolean;
  classification: string;
  failureReason?: string;
  validationFailures: readonly { fieldPath: string; reason: string }[];
}>;

describe('generic-event coverage boundary contract', () => {
  it('rejects over-limit batches before transport', async () => {
    const submitGenericEvents = (publicApi as Record<string, unknown>)
      .submitGenericEvents as SubmitGenericEvents | undefined;
    const request = buildFixtureGenericEventBatchRequest({
      items: Array.from({ length: 21 }, (_, itemIndex) =>
        createFixtureGenericEventItem({
          sequenceNumber: itemIndex + 1,
        }),
      ),
    });

    expect(typeof submitGenericEvents).toBe('function');

    const outcome = await submitGenericEvents?.(request);

    expect(outcome?.acceptedForTransport).toBe(false);
    expect(outcome?.classification).toBe('usage-error');
    expect(outcome?.validationFailures).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ reason: 'batch-limit-exceeded' }),
      ]),
    );
  });

  it('rejects out-of-scope families before transport', async () => {
    const submitGenericEvents = (publicApi as Record<string, unknown>)
      .submitGenericEvents as SubmitGenericEvents | undefined;
    const request = buildFixtureGenericEventBatchRequest({
      items: [
        {
          ...createFixtureGenericEventItem(),
          eventCode: '110140',
          family: 'delivery-confirmation-not-supported' as never,
        },
      ],
    });

    expect(typeof submitGenericEvents).toBe('function');

    const outcome = await submitGenericEvents?.(request);

    expect(outcome?.acceptedForTransport).toBe(false);
    expect(outcome?.classification).toBe('usage-error');
    expect(outcome?.validationFailures).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ reason: 'unsupported-family' }),
      ]),
    );
  });
});

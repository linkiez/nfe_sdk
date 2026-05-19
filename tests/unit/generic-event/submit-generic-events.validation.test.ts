import * as publicApi from '../../../src/index';

import { buildFixtureGenericEventBatchRequest } from '../../fixtures/generic-event/build-generic-event-fixtures';

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

describe('submitGenericEvents validation', () => {
  it('rejects invalid single-item batches before transport', async () => {
    const submitGenericEvents = (publicApi as Record<string, unknown>)
      .submitGenericEvents as SubmitGenericEvents | undefined;
    const invalidRequest = buildFixtureGenericEventBatchRequest({
      items: [
        {
          ...buildFixtureGenericEventBatchRequest().items[0],
          accessKey: '123',
        },
      ],
    });

    expect(typeof submitGenericEvents).toBe('function');

    const outcome = await submitGenericEvents?.(invalidRequest);

    expect(outcome?.acceptedForTransport).toBe(false);
    expect(outcome?.classification).toBe('usage-error');
    expect(outcome?.validationFailures).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fieldPath: 'items[0].accessKey',
          reason: 'invalid-access-key',
        }),
      ]),
    );
  });
});

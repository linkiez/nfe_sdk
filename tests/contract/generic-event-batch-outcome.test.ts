import * as publicApi from '../../src/index';

import { buildHeterogeneousGenericEventBatchFixture } from '../fixtures/generic-event/heterogeneous-batch';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

type SubmitGenericEvents = (input: {
  batchId: string;
  environment: string;
  items: readonly unknown[];
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: string;
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  signingContext: unknown;
  timeoutMs: number;
}) => Promise<{
  acceptedForTransport: boolean;
  classification: string;
  itemOutcomes: readonly {
    applicationStatusCode?: string;
    classification: string;
    itemIndex: number;
  }[];
  transportOutcome: {
    classification: string;
    service: string;
  };
}>;

describe('generic-event batch outcome contract', () => {
  it('preserves batch and item outcome shape for heterogeneous remote processing', async () => {
    const submitGenericEvents = (publicApi as Record<string, unknown>)
      .submitGenericEvents as SubmitGenericEvents | undefined;
    const request = buildHeterogeneousGenericEventBatchFixture();
    const responseXml = readFileSync(
      resolve(
        process.cwd(),
        'tests/fixtures/generic-event/ret-env-evento-mixed.xml',
      ),
      'utf8',
    );

    expect(typeof submitGenericEvents).toBe('function');

    const outcome = await submitGenericEvents?.({
      ...request,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome).toEqual(
      expect.objectContaining({
        acceptedForTransport: true,
        classification: 'partial-success',
        transportOutcome: expect.objectContaining({
          classification: 'success',
          service: 'nfe-generic-event',
        }),
      }),
    );
    expect(outcome?.itemOutcomes).toEqual([
      expect.objectContaining({
        applicationStatusCode: '135',
        classification: 'success',
        itemIndex: 0,
      }),
      expect.objectContaining({
        applicationStatusCode: '573',
        classification: 'rejected',
        itemIndex: 1,
      }),
    ]);
  });
});

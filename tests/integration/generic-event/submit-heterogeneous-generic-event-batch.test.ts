import * as publicApi from '../../../src/index';

import { buildHeterogeneousGenericEventBatchFixture } from '../../fixtures/generic-event/heterogeneous-batch';
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
    eventCode: string;
    itemIndex: number;
  }[];
}>;

describe('submitGenericEvents heterogeneous batch integration', () => {
  it('returns mixed item outcomes while keeping the batch accepted for transport', async () => {
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
      requestExecutor: async (transportRequest) => {
        expect(transportRequest.requestXml).toContain(
          '<tpEvento>110130</tpEvento>',
        );
        expect(transportRequest.requestXml).toContain(
          '<tpEvento>110192</tpEvento>',
        );

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      timeoutMs: 5000,
    });

    expect(outcome?.acceptedForTransport).toBe(true);
    expect(outcome?.classification).toBe('partial-success');
    expect(outcome?.itemOutcomes).toEqual([
      expect.objectContaining({
        applicationStatusCode: '135',
        classification: 'success',
        eventCode: '110130',
        itemIndex: 0,
      }),
      expect.objectContaining({
        applicationStatusCode: '573',
        classification: 'rejected',
        eventCode: '110192',
        itemIndex: 1,
      }),
    ]);
  });
});

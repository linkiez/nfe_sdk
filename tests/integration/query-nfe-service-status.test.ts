import * as publicApi from '../../src/index';

import { loadNFeOperationalTextFixture } from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type QueryNFeServiceStatus = (input: {
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-status-service';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  observedAt: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('queryNFeServiceStatus integration', () => {
  it('returns a structured service-status snapshot for the supported homologation flow', async () => {
    const queryNFeServiceStatus = (publicApi as Record<string, unknown>)
      .queryNFeServiceStatus as QueryNFeServiceStatus | undefined;
    const responseXml = loadNFeOperationalTextFixture(
      'status-service/response-operational.xml',
    );

    expect(typeof queryNFeServiceStatus).toBe('function');

    const outcome = await queryNFeServiceStatus?.({
      environment: 'homologation',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('success');
    expect(outcome?.applicationStatusCode).toBe('107');
    expect(outcome?.observedAt).toEqual(expect.any(String));
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});
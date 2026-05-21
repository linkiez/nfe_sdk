import * as publicApi from '../../src/index';

import {
  loadNFeOperationalJsonFixture,
  loadNFeOperationalTextFixture,
} from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type SubmitNFeInutilization = (input: {
  canonicalPayload: Readonly<Record<string, string>>;
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-inutilization';
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
  protocolNumber?: string;
  updatedState?: {
    primaryState: string;
  };
  transportOutcome: {
    classification: string;
  };
}>;

describe('submitNFeInutilization integration', () => {
  it('returns a structured inutilization outcome for the supported homologation flow', async () => {
    const submitNFeInutilization = (publicApi as Record<string, unknown>)
      .submitNFeInutilization as SubmitNFeInutilization | undefined;
    const input = loadNFeOperationalJsonFixture<{
      canonicalPayload: Readonly<Record<string, string>>;
      environment: 'homologation';
    }>('inutilization/input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'inutilization/response-success.xml',
    );

    expect(typeof submitNFeInutilization).toBe('function');

    const outcome = await submitNFeInutilization?.({
      ...input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('success');
    expect(outcome?.applicationStatusCode).toBe('102');
    expect(outcome?.protocolNumber).toBe('135250000000001');
    expect(outcome?.updatedState?.primaryState).toBe('inutilized');
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});

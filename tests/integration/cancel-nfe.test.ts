import * as publicApi from '../../src/index';

import {
  loadNFeOperationalJsonFixture,
  loadNFeOperationalTextFixture,
} from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type CancelNFe = (input: {
  accessKey: string;
  canonicalPayload: Readonly<Record<string, string>>;
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-cancellation';
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

describe('cancelNFe integration', () => {
  it('returns a structured cancellation outcome for the supported homologation flow', async () => {
    const cancelNFe = (publicApi as Record<string, unknown>).cancelNFe as
      | CancelNFe
      | undefined;
    const input = loadNFeOperationalJsonFixture<{
      accessKey: string;
      canonicalPayload: Readonly<Record<string, string>>;
      environment: 'homologation';
    }>('cancellation/input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'cancellation/response-success.xml',
    );

    expect(typeof cancelNFe).toBe('function');

    const outcome = await cancelNFe?.({
      ...input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('success');
    expect(outcome?.applicationStatusCode).toBe('128');
    expect(outcome?.protocolNumber).toBe('135250000000002');
    expect(outcome?.updatedState?.primaryState).toBe('canceled');
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});

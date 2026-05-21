import * as publicApi from '../../src/index';

import {
  loadNFeOperationalJsonFixture,
  loadNFeOperationalTextFixture,
} from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type SubmitNFeCorrectionLetter = (input: {
  accessKey: string;
  canonicalPayload: Readonly<Record<string, string>>;
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-correction-letter';
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

describe('submitNFeCorrectionLetter integration', () => {
  it('returns a structured correction-letter outcome for the supported homologation flow', async () => {
    const submitNFeCorrectionLetter = (publicApi as Record<string, unknown>)
      .submitNFeCorrectionLetter as SubmitNFeCorrectionLetter | undefined;
    const input = loadNFeOperationalJsonFixture<{
      accessKey: string;
      canonicalPayload: Readonly<Record<string, string>>;
      environment: 'homologation';
    }>('correction-letter/input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'correction-letter/response-success.xml',
    );

    expect(typeof submitNFeCorrectionLetter).toBe('function');

    const outcome = await submitNFeCorrectionLetter?.({
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
    expect(outcome?.protocolNumber).toBe('135250000000003');
    expect(outcome?.updatedState?.primaryState).toBe('authorized');
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});

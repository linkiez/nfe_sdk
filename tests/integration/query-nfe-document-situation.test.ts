import * as publicApi from '../../src/index';

import {
  loadNFeOperationalJsonFixture,
  loadNFeOperationalTextFixture,
} from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type QueryNFeDocumentSituation = (input: {
  accessKey: string;
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-document-situation';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  timeoutMs: number;
}) => Promise<{
  accessKey: string;
  classification: string;
  protocolNumber?: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('queryNFeDocumentSituation integration', () => {
  it('returns a structured document-situation result for the supported access-key lookup', async () => {
    const queryNFeDocumentSituation = (publicApi as Record<string, unknown>)
      .queryNFeDocumentSituation as QueryNFeDocumentSituation | undefined;
    const input = loadNFeOperationalJsonFixture<{
      accessKey: string;
      environment: 'homologation';
    }>('document-situation/input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'document-situation/response-found.xml',
    );

    expect(typeof queryNFeDocumentSituation).toBe('function');

    const outcome = await queryNFeDocumentSituation?.({
      ...input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.accessKey).toBe(input.accessKey);
    expect(outcome?.classification).toBe('success');
    expect(outcome?.protocolNumber).toBe('135190000000001');
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import * as publicApi from '../../src/index';

function loadNFeContingencyFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/nfe', relativePath),
    'utf8',
  );
}

type QueryNFeServiceStatus = (input: {
  environment: 'production';
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
  applicationStatusMessage?: string;
  classification: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('queryNFeServiceStatus contingency integration', () => {
  it('classifies SVC-AN operational unavailability as unavailable in production', async () => {
    const queryNFeServiceStatus = (publicApi as Record<string, unknown>)
      .queryNFeServiceStatus as QueryNFeServiceStatus | undefined;
    const responseXml = loadNFeContingencyFixture('svc-an-status-response.xml');

    const outcome = await queryNFeServiceStatus?.({
      environment: 'production',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('unavailable');
    expect(outcome?.applicationStatusCode).toBe('108');
    expect(outcome?.applicationStatusMessage).toContain('Servico paralisado');
    expect(outcome?.transportOutcome.classification).toBe('unavailable');
  });
});

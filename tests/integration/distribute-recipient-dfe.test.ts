import * as publicApi from '../../src/index';

import { loadRecipientJsonFixture } from '../fixtures/recipient/load-recipient-fixture';

type DistributeRecipientDFe = (input: {
  actor: {
    documentNumber: string;
    documentType: 'cpf' | 'cnpj';
  };
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-recipient-distribution';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  timeoutMs: number;
  ultNSU: string;
}) => Promise<{
  classification: string;
  cursor: {
    recommendedBackoffMs?: number;
    ultNSU: string;
  };
  documents: Array<{
    accessKey?: string;
    kind: string;
  }>;
  transportOutcome: {
    classification: string;
  };
}>;

describe('distributeRecipientDFe integration', () => {
  it('returns structured envelopes and an observable cursor for distNSU success', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as DistributeRecipientDFe | undefined;
    const fixture = loadRecipientJsonFixture<{
      input: {
        actor: { documentNumber: string; documentType: 'cpf' };
        environment: 'homologation';
        ultNSU: string;
      };
      responseXml: string;
    }>('distribution-distnsu-success.json');

    expect(typeof distributeRecipientDFe).toBe('function');

    const outcome = await distributeRecipientDFe?.({
      ...fixture.input,
      requestExecutor: async (request) => {
        expect(request.service).toBe('nfe-recipient-distribution');
        expect(request.requestXml).toContain('<distNSU>');
        expect(request.requestXml).toContain('<CPF>12345678909</CPF>');

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: fixture.responseXml,
          status: 200,
        };
      },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('documents-available');
    expect(outcome?.cursor.ultNSU).toBe('000000000000101');
    expect(outcome?.documents.map((document) => document.kind)).toEqual([
      'summary',
      'full-document',
    ]);
    expect(outcome?.documents[0]?.accessKey).toBe(
      '35190500000000000000550010000000011000000010',
    );
    expect(outcome?.transportOutcome.classification).toBe('success');
  });

  it('returns an explicit empty-batch outcome for distNSU without new documents', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as DistributeRecipientDFe | undefined;
    const fixture = loadRecipientJsonFixture<{
      input: {
        actor: { documentNumber: string; documentType: 'cpf' };
        environment: 'homologation';
        ultNSU: string;
      };
      responseXml: string;
    }>('distribution-distnsu-empty.json');

    const outcome = await distributeRecipientDFe?.({
      ...fixture.input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: fixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('no-new-documents');
    expect(outcome?.documents).toEqual([]);
    expect(outcome?.cursor.recommendedBackoffMs).toBe(300000);
    expect(outcome?.transportOutcome.classification).toBe('success');
  });
});

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
  continuation: {
    cursorAdvanced: boolean;
    nextAction:
      | 'consume-documents'
      | 'await-backoff'
      | 'retry-later'
      | 'resolve-boundary';
    reason: string;
    recommendedBackoffMs?: number;
  };
}>;

type RetrieveRecipientDocument = (input: {
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
  startingCursor: string;
  target: {
    accessKey: string;
    documentKinds: Array<'summary' | 'full-document' | 'other'>;
  };
  timeoutMs: number;
}) => Promise<{
  classification: string;
  distributionOutcome: {
    classification: string;
  };
  matchedDocument?: {
    accessKey?: string;
    kind: string;
  };
}>;

describe('root recipient continuity facade contract', () => {
  it('returns additive continuation signals from distributeRecipientDFe', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as DistributeRecipientDFe | undefined;
    const fixture = loadRecipientJsonFixture<{
      input: {
        actor: { documentNumber: string; documentType: 'cpf' };
        environment: 'homologation';
        ultNSU: string;
      };
      responseXml: string;
    }>('distnsu-summary-after-manifestation.json');

    expect(typeof distributeRecipientDFe).toBe('function');

    const outcome = await distributeRecipientDFe?.({
      ...fixture.input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: fixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('documents-available');
    expect(outcome?.continuation).toEqual({
      cursorAdvanced: true,
      nextAction: 'consume-documents',
      reason: 'documents-available',
    });
  });

  it('publishes retrieveRecipientDocument as a root facade for follow-up retrieval', async () => {
    const retrieveRecipientDocument = (publicApi as Record<string, unknown>)
      .retrieveRecipientDocument as RetrieveRecipientDocument | undefined;
    const fixture = loadRecipientJsonFixture<{
      input: {
        actor: { documentNumber: string; documentType: 'cpf' };
        environment: 'homologation';
        startingCursor: string;
        target: {
          accessKey: string;
          documentKinds: Array<'full-document'>;
        };
      };
      responseXml: string;
    }>('distnsu-full-document-released.json');

    expect(typeof retrieveRecipientDocument).toBe('function');

    const outcome = await retrieveRecipientDocument?.({
      ...fixture.input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: fixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('document-available');
    expect(outcome?.matchedDocument).toEqual(
      expect.objectContaining({
        accessKey: fixture.input.target.accessKey,
        kind: 'full-document',
      }),
    );
  });

  it('keeps deferred recipient continuity boundaries explicit', async () => {
    const retrieveRecipientDocument = (publicApi as Record<string, unknown>)
      .retrieveRecipientDocument as RetrieveRecipientDocument | undefined;

    expect(typeof retrieveRecipientDocument).toBe('function');
    expect(publicApi).not.toHaveProperty('consNSU');
    expect(publicApi).not.toHaveProperty('consChNFe');

    const outcome = await retrieveRecipientDocument?.({
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'production' as 'homologation',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: '',
        status: 200,
      }),
      startingCursor: '000000000000100',
      target: {
        accessKey: '35190500000000000000550010000000011000000011',
        documentKinds: ['full-document'],
      },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('unsupported-scope');
    expect(outcome?.distributionOutcome.classification).toBe(
      'unsupported-scope',
    );
    expect(outcome?.matchedDocument).toBeUndefined();
  });
});

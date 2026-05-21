import * as publicApi from '../../src/index';

import { loadRecipientJsonFixture } from '../fixtures/recipient/load-recipient-fixture';

type DistributeRecipientDFe = (input: {
  actor: {
    documentNumber: string;
    documentType: 'cpf' | 'cnpj';
  };
  environment: 'homologation' | 'production';
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
  cursor: {
    recommendedBackoffMs?: number;
    ultNSU: string;
  };
  documents: Array<{
    accessKey?: string;
    kind: string;
  }>;
}>;

type RetrieveRecipientDocument = (input: {
  actor: {
    documentNumber: string;
    documentType: 'cpf' | 'cnpj';
  };
  environment: 'homologation' | 'production';
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

describe('recipient continuity integration', () => {
  it('surfaces continuation guidance when distNSU returns documents', async () => {
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

    const outcome = await distributeRecipientDFe?.({
      ...fixture.input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: fixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.documents.map((document) => document.kind)).toEqual([
      'summary',
      'full-document',
    ]);
    expect(outcome?.continuation).toEqual({
      cursorAdvanced: true,
      nextAction: 'consume-documents',
      reason: 'documents-available',
    });
  });

  it('surfaces explicit backoff guidance when no new documents are available', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as DistributeRecipientDFe | undefined;
    const fixture = loadRecipientJsonFixture<{
      input: {
        actor: { documentNumber: string; documentType: 'cpf' };
        environment: 'homologation';
        ultNSU: string;
      };
      responseXml: string;
    }>('distnsu-no-new-documents.json');

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
    expect(outcome?.continuation).toEqual({
      cursorAdvanced: false,
      nextAction: 'await-backoff',
      reason: 'no-new-documents',
      recommendedBackoffMs: 300000,
    });
    expect(outcome?.cursor.recommendedBackoffMs).toBe(300000);
  });

  it('retrieves a released full document in a separated follow-up step', async () => {
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
    expect(outcome?.distributionOutcome.classification).toBe(
      'documents-available',
    );
    expect(outcome?.matchedDocument).toEqual(
      expect.objectContaining({
        accessKey: fixture.input.target.accessKey,
        kind: 'full-document',
      }),
    );
  });

  it('preserves dependency-limited and unsupported-scope boundaries during follow-up retrieval', async () => {
    const retrieveRecipientDocument = (publicApi as Record<string, unknown>)
      .retrieveRecipientDocument as RetrieveRecipientDocument | undefined;
    const dependencyFixture = loadRecipientJsonFixture<{
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
    }>('distnsu-dependency-limited.json');

    const dependencyOutcome = await retrieveRecipientDocument?.({
      ...dependencyFixture.input,
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: dependencyFixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(dependencyOutcome?.classification).toBe('dependency-limited');
    expect(dependencyOutcome?.distributionOutcome.classification).toBe(
      'dependency-limited',
    );
    expect(dependencyOutcome?.matchedDocument).toBeUndefined();

    const unsupportedScopeOutcome = await retrieveRecipientDocument?.({
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'production',
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

    expect(unsupportedScopeOutcome?.classification).toBe('unsupported-scope');
    expect(unsupportedScopeOutcome?.distributionOutcome.classification).toBe(
      'unsupported-scope',
    );
  });
});

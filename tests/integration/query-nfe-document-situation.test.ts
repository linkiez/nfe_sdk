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
  state: {
    pendingReason?: string;
    primaryState: string;
  };
  transportOutcome: {
    classification: string;
  };
}>;

describe('queryNFeDocumentSituation integration', () => {
  it.each([
    {
      expectedClassification: 'success',
      expectedPrimaryState: 'authorized',
      expectedProtocolNumber: '135190000000001',
      fixture: 'document-situation/response-found.xml',
      transportClassification: 'success',
    },
    {
      expectedClassification: 'success',
      expectedPrimaryState: 'canceled',
      expectedProtocolNumber: '135190000000002',
      fixture: 'document-situation/response-canceled.xml',
      transportClassification: 'functional-rejection',
    },
    {
      expectedClassification: 'success',
      expectedPrimaryState: 'inutilized',
      expectedProtocolNumber: '135190000000003',
      fixture: 'document-situation/response-inutilized.xml',
      transportClassification: 'functional-rejection',
    },
    {
      expectedClassification: 'success',
      expectedPrimaryState: 'rejected',
      fixture: 'document-situation/response-rejected.xml',
      transportClassification: 'functional-rejection',
    },
    {
      expectedClassification: 'success',
      expectedPrimaryState: 'pending',
      fixture: 'document-situation/response-pending.xml',
      pendingReason: 'Lote em processamento',
      transportClassification: 'functional-rejection',
    },
    {
      expectedClassification: 'unavailable',
      expectedPrimaryState: 'unavailable',
      fixture: 'document-situation/response-unavailable.xml',
      pendingReason: 'Servico Paralisado sem Previsao',
      transportClassification: 'unavailable',
    },
    {
      expectedClassification: 'inconclusive',
      expectedPrimaryState: 'inconclusive',
      fixture: 'document-situation/response-inconclusive.xml',
      pendingReason: 'Autorizado o uso da NF-e',
      transportClassification: 'success',
    },
  ])(
    'maps $fixture into $expectedPrimaryState state',
    async ({
      expectedClassification,
      expectedPrimaryState,
      expectedProtocolNumber,
      fixture,
      pendingReason,
      transportClassification,
    }) => {
      const queryNFeDocumentSituation = (publicApi as Record<string, unknown>)
        .queryNFeDocumentSituation as QueryNFeDocumentSituation | undefined;
      const input = loadNFeOperationalJsonFixture<{
        accessKey: string;
        environment: 'homologation';
      }>('document-situation/input.json');
      const responseXml = loadNFeOperationalTextFixture(fixture);

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
      expect(outcome?.classification).toBe(expectedClassification);
      expect(outcome?.protocolNumber).toBe(expectedProtocolNumber);
      expect(outcome?.state.primaryState).toBe(expectedPrimaryState);
      expect(outcome?.state.pendingReason).toBe(pendingReason);
      expect(outcome?.transportOutcome.classification).toBe(
        transportClassification,
      );
    },
  );
});

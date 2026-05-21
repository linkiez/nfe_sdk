import * as publicApi from '../../src/index';

import { loadNFeOperationalTextFixture } from '../fixtures/nfe-operational/load-nfe-operational-fixture';

type ReconcileNFeReceipt = (input: {
  receiptNumber: string;
  requestExecutor?: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-authorization-batch';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  routingContext: {
    authorizer: 'SVCAN';
    environment: 'homologation';
  };
  timeoutMs: number;
}) => Promise<{
  classification: string;
  protocolNumber?: string;
  receiptNumber: string;
  state?: {
    pendingReason?: string;
    primaryState: string;
  };
  statusCode?: string;
  statusMessage?: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('reconcileNFeReceipt integration', () => {
  it.each([
    {
      expectedClassification: 'authorized',
      expectedPrimaryState: 'authorized',
      expectedProtocolNumber: '135190000000001',
      expectedStatusCode: '100',
      expectedStatusMessage: 'Autorizado o uso da NF-e',
      fixture: 'authorization/receipt-response-authorized.xml',
      transportClassification: 'success',
    },
    {
      expectedClassification: 'rejected',
      expectedPrimaryState: 'rejected',
      expectedStatusCode: '204',
      expectedStatusMessage: 'Duplicidade de NF-e',
      fixture: 'authorization/receipt-response-rejected.xml',
      transportClassification: 'success',
    },
    {
      expectedClassification: 'denied',
      expectedPrimaryState: 'rejected',
      expectedStatusCode: '301',
      expectedStatusMessage: 'Uso Denegado',
      fixture: 'authorization/receipt-response-denied.xml',
      transportClassification: 'success',
    },
    {
      expectedClassification: 'pending',
      expectedPrimaryState: 'pending',
      expectedStatusCode: '105',
      expectedStatusMessage: 'Lote em processamento',
      fixture: 'authorization/receipt-response-processing.xml',
      pendingReason: 'Lote em processamento',
      transportClassification: 'success',
    },
    {
      expectedClassification: 'unavailable',
      expectedPrimaryState: 'unavailable',
      expectedStatusCode: '108',
      expectedStatusMessage: 'Servico Paralisado Momentaneamente',
      fixture: 'authorization/receipt-response-unavailable.xml',
      pendingReason: 'Servico Paralisado Momentaneamente',
      transportClassification: 'unavailable',
    },
    {
      expectedClassification: 'inconclusive',
      expectedPrimaryState: 'inconclusive',
      expectedStatusCode: '999',
      expectedStatusMessage:
        'Resposta oficial sem evidencia terminal suficiente',
      fixture: 'authorization/receipt-response-inconclusive.xml',
      pendingReason: 'Resposta oficial sem evidencia terminal suficiente',
      transportClassification: 'success',
    },
  ])(
    'maps $fixture into $expectedClassification receipt classification',
    async ({
      expectedClassification,
      expectedPrimaryState,
      expectedProtocolNumber,
      expectedStatusCode,
      expectedStatusMessage,
      fixture,
      pendingReason,
      transportClassification,
    }) => {
      const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
        .reconcileNFeReceipt as ReconcileNFeReceipt | undefined;
      const responseXml = loadNFeOperationalTextFixture(fixture);

      expect(typeof reconcileNFeReceipt).toBe('function');

      const outcome = await reconcileNFeReceipt?.({
        receiptNumber: '135190000000002',
        requestExecutor: async () => ({
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        }),
        routingContext: {
          authorizer: 'SVCAN',
          environment: 'homologation',
        },
        timeoutMs: 5000,
      });

      expect(outcome?.classification).toBe(expectedClassification);
      expect(outcome?.protocolNumber).toBe(expectedProtocolNumber);
      expect(outcome?.receiptNumber).toBe('135190000000002');
      expect(outcome?.statusCode).toBe(expectedStatusCode);
      expect(outcome?.statusMessage).toBe(expectedStatusMessage);
      expect(outcome?.state?.primaryState).toBe(expectedPrimaryState);
      expect(outcome?.state?.pendingReason).toBe(pendingReason);
      expect(outcome?.transportOutcome.classification).toBe(
        transportClassification,
      );
    },
  );

  it('maps a receipt not found response into an explicit boundary classification', async () => {
    const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
      .reconcileNFeReceipt as ReconcileNFeReceipt | undefined;

    expect(typeof reconcileNFeReceipt).toBe('function');

    const outcome = await reconcileNFeReceipt?.({
      receiptNumber: '135190000000008',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>2</tpAmb><nRec>135190000000008</nRec><cStat>215</cStat><xMotivo>Rejeicao: Numero do Recibo divergente</xMotivo></retConsReciNFe>',
        status: 200,
      }),
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('not-found');
    expect(outcome?.statusCode).toBe('215');
    expect(outcome?.statusMessage).toBe(
      'Rejeicao: Numero do Recibo divergente',
    );
  });

  it('maps malformed receipt xml into a protocol-error classification', async () => {
    const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
      .reconcileNFeReceipt as ReconcileNFeReceipt | undefined;

    expect(typeof reconcileNFeReceipt).toBe('function');

    const outcome = await reconcileNFeReceipt?.({
      receiptNumber: '135190000000009',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: 'not-valid-xml',
        status: 200,
      }),
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('protocol-error');
  });
});

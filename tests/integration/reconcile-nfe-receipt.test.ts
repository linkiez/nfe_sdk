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
    authorizer: 'SVCAN' | 'SP';
    environment: 'homologation' | 'production';
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
    environment?: string;
    evidence?: {
      endpointUrl: string;
      provider: string;
      requestEnvelopeXml: string;
    };
  };
}>;

type ExecuteNFeSoapService = (input: {
  authorizer: 'SP';
  environment: 'production';
  payloadXml: string;
  requestExecutor: (input: {
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
  service: 'nfe-authorization-batch';
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  environment: string;
  evidence: {
    durationMs?: number;
    endpointUrl: string;
    httpStatus?: number;
    provider: string;
    requestEnvelopeXml: string;
    responseEnvelopeXml?: string;
  };
  service: string;
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

  it('redacts production receipt secrets from envelope evidence and preserves transport metadata', async () => {
    const executeNFeSoapService = (publicApi as Record<string, unknown>)
      .executeNFeSoapService as ExecuteNFeSoapService | undefined;
    const sensitiveValues = [
      'RECEIPT_CREDENTIAL_MARKER',
      'RECEIPT_CERTIFICATE_MARKER',
      'RECEIPT_PRIVATE_KEY_MARKER',
      'RESPONSE_CREDENTIAL_MARKER',
      'RESPONSE_CERTIFICATE_MARKER',
      'RESPONSE_PRIVATE_KEY_MARKER',
    ];
    const responseXml =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retConsReciNFe><tpAmb>1</tpAmb><nRec>135190000000002</nRec><cStat>105</cStat><xMotivo>Lote em processamento</xMotivo><Password>RESPONSE_CREDENTIAL_MARKER</Password><X509Certificate>RESPONSE_CERTIFICATE_MARKER</X509Certificate><PrivateKey>RESPONSE_PRIVATE_KEY_MARKER</PrivateKey></retConsReciNFe></soap:Body></soap:Envelope>';

    const outcome = await executeNFeSoapService?.({
      authorizer: 'SP',
      environment: 'production',
      payloadXml:
        '<consReciNFe><nRec>135190000000002</nRec><Password>RECEIPT_CREDENTIAL_MARKER</Password><X509Certificate>RECEIPT_CERTIFICATE_MARKER</X509Certificate><PrivateKey>RECEIPT_PRIVATE_KEY_MARKER</PrivateKey></consReciNFe>',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      service: 'nfe-authorization-batch',
      timeoutMs: 5000,
    });
    const envelopeEvidence = [
      outcome?.evidence.requestEnvelopeXml,
      outcome?.evidence.responseEnvelopeXml,
    ].join('\n');

    for (const sensitiveValue of sensitiveValues) {
      expect(envelopeEvidence).not.toContain(sensitiveValue);
    }
    expect(outcome).toMatchObject({
      applicationStatusCode: '105',
      classification: 'success',
      environment: 'production',
      evidence: {
        endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
        httpStatus: 200,
        provider: 'SP',
      },
      service: 'nfe-authorization-batch',
    });
    expect(outcome?.evidence.durationMs).toEqual(expect.any(Number));
  });

  it('checks one known SP production receipt on the SP endpoint without resubmitting or polling', async () => {
    const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
      .reconcileNFeReceipt as ReconcileNFeReceipt | undefined;
    const responseXml = loadNFeOperationalTextFixture(
      'authorization/receipt-response-production-authorized.xml',
    );
    const requestExecutor = jest.fn(
      async (request: {
        endpointUrl: string;
        headers: Readonly<Record<string, string>>;
        requestXml: string;
        service: 'nfe-authorization-batch';
        timeoutMs: number;
      }) => {
        expect(request.endpointUrl).toBe(
          'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
        );
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
    );

    const outcome = await reconcileNFeReceipt?.({
      receiptNumber: '135260000000002',
      requestExecutor,
      routingContext: { authorizer: 'SP', environment: 'production' },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('authorized');
    expect(requestExecutor).toHaveBeenCalledTimes(1);
    expect(requestExecutor.mock.calls[0][0].endpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
    );
    expect(requestExecutor.mock.calls[0][0].requestXml).toContain(
      '<consReciNFe',
    );
    expect(requestExecutor.mock.calls[0][0].requestXml).not.toContain(
      '<enviNFe',
    );
    expect(outcome?.transportOutcome).toMatchObject({
      environment: 'production',
      evidence: { provider: 'SP' },
    });
  });

  it.each([
    {
      classification: 'pending',
      fixture: 'authorization/receipt-response-production-processing.xml',
    },
    {
      classification: 'protocol-error',
      fixture:
        'authorization/receipt-response-production-wrong-environment.xml',
    },
    {
      classification: 'protocol-error',
      fixture: 'authorization/receipt-response-production-malformed.xml',
    },
    {
      classification: 'protocol-error',
      fixture:
        'authorization/receipt-response-production-authorized-missing-protocol.xml',
    },
  ])(
    'maps SP production receipt response $fixture to $classification',
    async ({ classification, fixture }) => {
      const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
        .reconcileNFeReceipt as ReconcileNFeReceipt | undefined;
      const responseXml = loadNFeOperationalTextFixture(fixture);
      const requestExecutor = jest.fn(async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }));

      const outcome = await reconcileNFeReceipt?.({
        receiptNumber: '135260000000002',
        requestExecutor,
        routingContext: { authorizer: 'SP', environment: 'production' },
        timeoutMs: 5000,
      });

      expect(outcome?.classification).toBe(classification);
      expect(requestExecutor).toHaveBeenCalledTimes(1);
    },
  );
});

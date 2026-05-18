describe('nfe operational query results', () => {
  it('maps service-status transport outcomes into a structured snapshot', async () => {
    type QueryTransportOutcome = {
      applicationStatusCode?: string;
      applicationStatusMessage?: string;
      classification: 'success';
      environment: 'homologation';
      evidence: {
        endpointUrl: string;
        provider: 'SVAN';
        requestEnvelopeXml: string;
        responseEnvelopeXml?: string;
      };
      service: 'nfe-status-service';
    };

    const queryModule =
      (await import('../../src/canonical/nfe/query-nfe-service-status.js')) as {
        mapServiceStatusTransportOutcome?: (input: QueryTransportOutcome) => {
          applicationStatusCode?: string;
          classification: string;
          observedAt: string;
        };
      };

    expect(typeof queryModule.mapServiceStatusTransportOutcome).toBe(
      'function',
    );

    const result = queryModule.mapServiceStatusTransportOutcome?.({
      applicationStatusCode: '107',
      applicationStatusMessage: 'Servico em Operacao',
      classification: 'success',
      environment: 'homologation',
      evidence: {
        endpointUrl: 'https://example.invalid/status',
        provider: 'SVAN',
        requestEnvelopeXml: '<soap:Envelope />',
        responseEnvelopeXml:
          '<retConsStatServ><cStat>107</cStat></retConsStatServ>',
      },
      service: 'nfe-status-service',
    });

    expect(result?.classification).toBe('success');
    expect(result?.applicationStatusCode).toBe('107');
    expect(result?.observedAt).toEqual(expect.any(String));
  });

  it('maps a successful document-situation response without protocol as inconclusive', async () => {
    type DocumentSituationTransportOutcome = {
      applicationStatusCode?: string;
      applicationStatusMessage?: string;
      classification: 'success';
      environment: 'homologation';
      evidence: {
        endpointUrl: string;
        provider: 'SVAN';
        requestEnvelopeXml: string;
        responseEnvelopeXml?: string;
      };
      service: 'nfe-document-situation';
    };

    const queryModule =
      (await import('../../src/canonical/nfe/query-nfe-document-situation.js')) as {
        mapDocumentSituationTransportOutcome?: (
          accessKey: string,
          input: DocumentSituationTransportOutcome,
        ) => {
          accessKey: string;
          classification: string;
          protocolNumber?: string;
        };
      };

    expect(typeof queryModule.mapDocumentSituationTransportOutcome).toBe(
      'function',
    );

    const result = queryModule.mapDocumentSituationTransportOutcome?.(
      '35190500000000000000550010000000011000000010',
      {
        applicationStatusCode: '100',
        applicationStatusMessage: 'Autorizado o uso da NF-e',
        classification: 'success',
        environment: 'homologation',
        evidence: {
          endpointUrl: 'https://example.invalid/document-situation',
          provider: 'SVAN',
          requestEnvelopeXml: '<soap:Envelope />',
          responseEnvelopeXml:
            '<retConsSitNFe><cStat>100</cStat></retConsSitNFe>',
        },
        service: 'nfe-document-situation',
      },
    );

    expect(result?.accessKey).toBe(
      '35190500000000000000550010000000011000000010',
    );
    expect(result?.classification).toBe('inconclusive');
    expect(result?.protocolNumber).toBeUndefined();
  });
});

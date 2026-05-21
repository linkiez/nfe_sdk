describe('nfe operational query results', () => {
  it('maps service-status transport outcomes into a structured snapshot', async () => {
    type QueryTransportOutcome = {
      applicationStatusCode?: string;
      applicationStatusMessage?: string;
      classification: 'success';
      environment: 'homologation';
      evidence: {
        endpointUrl: string;
        provider: 'SVCAN';
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
        provider: 'SVCAN',
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
        provider: 'SVCAN';
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
          state: {
            evidence: readonly {
              sourceKind: string;
              statusCode?: string;
              statusMessage?: string;
              transportClassification: string;
            }[];
            primaryState: string;
          };
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
          provider: 'SVCAN',
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
    expect(result?.state.primaryState).toBe('inconclusive');
    expect(result?.state.evidence).toEqual([
      expect.objectContaining({
        sourceKind: 'document-situation',
        statusCode: '100',
        statusMessage: 'Autorizado o uso da NF-e',
        transportClassification: 'success',
      }),
    ]);
  });

  it('maps a canceled document-situation response into a successful canceled state', async () => {
    type DocumentSituationTransportOutcome = {
      applicationStatusCode?: string;
      applicationStatusMessage?: string;
      classification: 'functional-rejection';
      environment: 'homologation';
      evidence: {
        endpointUrl: string;
        provider: 'SVCAN';
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
          state: {
            primaryState: string;
          };
        };
      };

    const result = queryModule.mapDocumentSituationTransportOutcome?.(
      '35190500000000000000550010000000011000000010',
      {
        applicationStatusCode: '101',
        applicationStatusMessage: 'Cancelamento de NF-e homologado',
        classification: 'functional-rejection',
        environment: 'homologation',
        evidence: {
          endpointUrl: 'https://example.invalid/document-situation',
          provider: 'SVCAN',
          requestEnvelopeXml: '<soap:Envelope />',
          responseEnvelopeXml:
            '<retConsSitNFe><cStat>101</cStat><xMotivo>Cancelamento de NF-e homologado</xMotivo><protNFe><infProt><nProt>135190000000009</nProt></infProt></protNFe></retConsSitNFe>',
        },
        service: 'nfe-document-situation',
      },
    );

    expect(result?.classification).toBe('success');
    expect(result?.state.primaryState).toBe('canceled');
  });
});

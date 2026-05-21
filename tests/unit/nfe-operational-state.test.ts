describe('nfe operational state', () => {
  it('maps a pending document-situation transport outcome into a pending state', async () => {
    const stateModule =
      (await import('../../src/canonical/nfe/operational-state.js')) as {
        mapDocumentSituationToOperationalState?: (input: {
          accessKey: string;
          transportOutcome: {
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
        }) => {
          pendingReason?: string;
          primaryState: string;
        };
      };

    const result = stateModule.mapDocumentSituationToOperationalState?.({
      accessKey: '35190500000000000000550010000000011000000010',
      transportOutcome: {
        applicationStatusCode: '105',
        applicationStatusMessage: 'Lote em processamento',
        classification: 'functional-rejection',
        environment: 'homologation',
        evidence: {
          endpointUrl: 'https://example.invalid/document-situation',
          provider: 'SVCAN',
          requestEnvelopeXml: '<soap:Envelope />',
          responseEnvelopeXml:
            '<retConsSitNFe><cStat>105</cStat><xMotivo>Lote em processamento</xMotivo></retConsSitNFe>',
        },
        service: 'nfe-document-situation',
      },
    });

    expect(result?.primaryState).toBe('pending');
    expect(result?.pendingReason).toBe('Lote em processamento');
  });

  it('publishes explicit operational boundaries through contracts', async () => {
    const contractsModule =
      (await import('../../src/canonical/nfe/contracts.js')) as {
        getOperationalBoundaries?: () => readonly {
          boundaryId: string;
          relatedTheme: string;
        }[];
      };

    expect(typeof contractsModule.getOperationalBoundaries).toBe('function');
    expect(contractsModule.getOperationalBoundaries?.()).toEqual([
      expect.objectContaining({
        boundaryId: 'receipt-polling',
        relatedTheme: 'RFL-001',
      }),
      expect.objectContaining({
        boundaryId: 'multi-document-reconciliation',
        relatedTheme: 'RTM-006',
      }),
      expect.objectContaining({
        boundaryId: 'local-persistence',
        relatedTheme: 'RTM-004',
      }),
      expect.objectContaining({
        boundaryId: 'uf-variance',
        relatedTheme: 'RTM-011',
      }),
    ]);
  });
});

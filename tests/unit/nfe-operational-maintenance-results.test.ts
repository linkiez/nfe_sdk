describe('nfe operational maintenance results', () => {
  it('maps a successful maintenance transport outcome into a structured maintenance result', async () => {
    type MaintenanceTransportOutcome = {
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
      service: 'nfe-inutilization';
    };

    const maintenanceModule =
      (await import('../../src/canonical/nfe/maintenance-outcome.js')) as {
        mapOperationalMaintenanceTransportOutcome?: (
          operation: 'submit-nfe-inutilization',
          transportOutcome: MaintenanceTransportOutcome,
        ) => {
          applicationStatusCode?: string;
          classification: string;
          operation: 'submit-nfe-inutilization';
          protocolNumber?: string;
        };
        createUnsupportedScopeMaintenanceOutcome?: (
          operation: 'submit-nfe-correction-letter',
          requestedEnvironment: string,
        ) => {
          classification: string;
          failureReason?: string;
        };
      };

    const result =
      maintenanceModule.mapOperationalMaintenanceTransportOutcome?.(
        'submit-nfe-inutilization',
        {
          applicationStatusCode: '102',
          applicationStatusMessage: 'Inutilizacao homologada',
          classification: 'success',
          environment: 'homologation',
          evidence: {
            endpointUrl:
              'https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
            provider: 'SVAN',
            requestEnvelopeXml: '<inutNFe versao="4.00"></inutNFe>',
            responseEnvelopeXml:
              '<retInutNFe><infInut><cStat>102</cStat><xMotivo>Inutilizacao homologada</xMotivo><nProt>135250000000001</nProt></infInut></retInutNFe>',
          },
          service: 'nfe-inutilization',
        },
      );

    expect(
      typeof maintenanceModule.mapOperationalMaintenanceTransportOutcome,
    ).toBe('function');
    expect(
      typeof maintenanceModule.createUnsupportedScopeMaintenanceOutcome,
    ).toBe('function');

    expect(result?.operation).toBe('submit-nfe-inutilization');
    expect(result?.classification).toBe('success');
    expect(result?.applicationStatusCode).toBe('102');
    expect(result?.protocolNumber).toBe('135250000000001');
  });

  it('maps unsupported maintenance scope into an explicit failure result', async () => {
    const maintenanceModule =
      (await import('../../src/canonical/nfe/maintenance-outcome.js')) as {
        createUnsupportedScopeMaintenanceOutcome?: (
          operation: 'submit-nfe-correction-letter',
          requestedEnvironment: 'production',
        ) => {
          classification: string;
          failureReason?: string;
        };
      };

    expect(
      typeof maintenanceModule.createUnsupportedScopeMaintenanceOutcome,
    ).toBe('function');

    const result = maintenanceModule.createUnsupportedScopeMaintenanceOutcome?.(
      'submit-nfe-correction-letter',
      'production',
    );

    expect(result?.classification).toBe('unsupported-scope');
    expect(result?.failureReason).toBe(
      'Unsupported NFe operational scope: environment "production", operation "submit-nfe-correction-letter". Supported environment: "homologation".',
    );
  });
});

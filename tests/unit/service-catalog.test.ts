import { resolveNFeServiceEndpoint } from '../../src/index';

describe('service catalog resolution', () => {
  it('resolves the supported SVAN entry after normalizing service and environment input', () => {
    const statusEntry = resolveNFeServiceEndpoint({
      environment: ' Homologation ',
      service: ' NFE-STATUS-SERVICE ',
    });
    const authorizationEntry = resolveNFeServiceEndpoint({
      environment: 'homologation',
      service: 'NFE-AUTHORIZATION',
    });

    expect(statusEntry).toEqual({
      catalogVersion: '2026-05-18-initial-draft',
      endpointUrl:
        'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
      environment: 'homologation',
      layoutVersion: '4.00',
      provider: 'SVAN',
      provenance: {
        sources: [
          'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md',
          'specs/006-add-soap-transport/research.md',
        ],
      },
      service: 'nfe-status-service',
    });
    expect(authorizationEntry.endpointUrl).toBe(
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    );
    expect(authorizationEntry.provider).toBe('SVAN');
  });
});

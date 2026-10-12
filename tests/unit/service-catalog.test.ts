import { resolveNFeServiceEndpoint } from '../../src/index';

describe('service catalog resolution', () => {
  it('resolves the supported SVCAN entry after normalizing service and environment input', () => {
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
      provider: 'SVCAN',
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
    expect(authorizationEntry.provider).toBe('SVCAN');

    const productionStatusEntry = resolveNFeServiceEndpoint({
      environment: 'production',
      service: 'nfe-status-service',
    });

    expect(productionStatusEntry.provider).toBe('SVCAN');
  });

  it.each([
    {
      service: 'nfe-authorization',
      endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    },
    {
      service: 'nfe-authorization-batch',
      endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
    },
  ])(
    'resolves the SP production $service entry when authorizer SP is explicit',
    ({ service, endpointUrl }) => {
      const resolveWithAuthorizer = (
        input: Parameters<typeof resolveNFeServiceEndpoint>[0] & {
          authorizer: string;
        },
      ) => resolveNFeServiceEndpoint(input);

      const entry = resolveWithAuthorizer({
        authorizer: 'SP',
        environment: 'production',
        service,
      });

      expect(entry).toMatchObject({
        endpointUrl,
        environment: 'production',
        provider: 'SP',
        service,
      });
    },
  );

  it('resolves the SP NFC-e production authorizer without using an NF-e or contingency endpoint', () => {
    const entry = resolveNFeServiceEndpoint({
      authorizer: 'SP',
      environment: 'production',
      service: 'nfce-authorization-sp',
    });

    expect(entry).toMatchObject({
      endpointUrl: 'https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx',
      environment: 'production',
      provider: 'SP',
      service: 'nfce-authorization-sp',
    });
  });

  it('fails closed for an unqualified production service with multiple providers', () => {
    expect(() =>
      resolveNFeServiceEndpoint({
        environment: 'production',
        service: 'nfe-authorization',
      }),
    ).toThrow();
  });
});

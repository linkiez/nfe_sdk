import { resolveNFeServiceEndpoint } from '../../src/index';

const SP_HOM = 'https://homologacao.nfe.fazenda.sp.gov.br/ws/';
const SP_PROD = 'https://nfe.fazenda.sp.gov.br/ws/';

// Source: https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/URL-WEBSERVICES.aspx
const SP_ROUTES: ReadonlyArray<readonly [string, string]> = [
  ['nfe-status-service', 'nfestatusservico4.asmx'],
  ['nfe-document-situation', 'nfeconsultaprotocolo4.asmx'],
  ['nfe-authorization', 'nfeautorizacao4.asmx'],
  ['nfe-authorization-batch', 'nferetautorizacao4.asmx'],
  ['nfe-inutilization', 'nfeinutilizacao4.asmx'],
  ['nfe-cancellation', 'nferecepcaoevento4.asmx'],
  ['nfe-correction-letter', 'nferecepcaoevento4.asmx'],
  ['nfe-generic-event', 'nferecepcaoevento4.asmx'],
  ['nfe-contributor-registration', 'cadconsultacadastro4.asmx'],
];

describe('SEFAZ official catalog entries', () => {
  it.each(
    SP_ROUTES.flatMap(([service, path]) => [
      ['homologation', service, `${SP_HOM}${path}`],
      ['production', service, `${SP_PROD}${path}`],
    ]),
  )('routes SP %s %s to the portal URL', (environment, service, url) => {
    const entry = resolveNFeServiceEndpoint({
      authorizer: 'SP',
      environment,
      service,
    });

    expect(entry.endpointUrl).toBe(url);
    expect(entry.provider).toBe('SP');
    expect(entry.layoutVersion).toBe('4.00');
    expect(entry.provenance.sources.length).toBeGreaterThan(0);
  });

  it.each([
    [
      'homologation',
      'nfe-recipient-distribution',
      'https://hom1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    ],
    [
      'production',
      'nfe-recipient-distribution',
      'https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    ],
    [
      'homologation',
      'nfe-recipient-manifestation',
      'https://hom1.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    ],
    [
      'production',
      'nfe-recipient-manifestation',
      'https://www.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    ],
  ])(
    'routes the Ambiente Nacional %s %s without naming an authorizer',
    (environment, service, url) => {
      const entry = resolveNFeServiceEndpoint({ environment, service });

      expect(entry.endpointUrl).toBe(url);
      expect(entry.provider).toBe('AN');
    },
  );

  it.each(SP_ROUTES.map(([service]) => service))(
    'fails closed for an unqualified production %s because SP and SVC-AN both serve it',
    (service) => {
      expect(() =>
        resolveNFeServiceEndpoint({ environment: 'production', service }),
      ).toThrow();
    },
  );

  it('keeps the legacy SVC-AN default for unqualified homologation callers', () => {
    expect(
      resolveNFeServiceEndpoint({
        environment: 'homologation',
        service: 'nfe-status-service',
      }).provider,
    ).toBe('SVCAN');
  });
});

import { resolve } from 'node:path';
import {
  createSigningContext,
  submitNFeInutilization,
  validateNFeXsd,
} from '../../src/index';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

const XSD_DIR = resolve(
  process.cwd(),
  'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/PL_009_V4_00_NT_2018_005_v1.20a/PL_009_V4_00_NT_2018_005_v1.20',
);

type Call = { endpointUrl: string; requestXml: string };

const DETAILS = {
  cUF: '35',
  year: '26',
  numberEnd: 120,
  numberStart: 100,
  series: 1,
};

function inutResponse(cStat: string, xMotivo: string): string {
  return [
    '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body>',
    '<nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeInutilizacao4">',
    '<retInutNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><infInut><tpAmb>2</tpAmb>',
    `<verAplic>SP_NFE_PL009_V4</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><cUF>35</cUF><ano>26</ano>`,
    '<CNPJ>11222333000181</CNPJ><mod>55</mod><serie>1</serie><nNFIni>100</nNFIni><nNFFin>120</nNFFin>',
    '<dhRecbto>2026-11-10T12:40:05-03:00</dhRecbto><nProt>135260000000777</nProt></infInut></retInutNFe>',
    '</nfeResultMsg></soap:Body></soap:Envelope>',
  ].join('');
}

async function request(
  overrides: Record<string, unknown> = {},
  signedEvent: Record<string, unknown> = {},
) {
  const fixture = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });

  return {
    canonicalPayload: {},
    environment: 'homologation',
    signedEvent: {
      eventDateTime: '2026-11-10T12:40:00-03:00',
      inutilization: DETAILS,
      issuerTaxId: '11222333000181',
      justification: 'Numeracao pulada por falha no sistema',
      signingContext,
      ...signedEvent,
    },
    timeoutMs: 5000,
    ...overrides,
  };
}

describe('signed NF-e inutilization', () => {
  jest.setTimeout(60_000);

  it('signs, sends and registers an inutilization validated by inutNFe_v4.00.xsd', async () => {
    const calls: Call[] = [];
    const outcome = await submitNFeInutilization({
      ...(await request()),
      requestExecutor: async (call: Call) => {
        calls.push(call);
        return {
          headers: {},
          responseXml: inutResponse('102', 'Inutilizacao de numero homologado'),
          status: 200,
        };
      },
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeInutilizacao4">',
    );
    expect(calls[0].requestXml).toContain(
      '<infInut Id="ID35261122233300018155001000000100000000120">',
    );
    expect(calls[0].requestXml).toContain(
      '<serie>1</serie><nNFIni>100</nNFIni><nNFFin>120</nNFFin>',
    );
    expect(outcome.classification).toBe('success');
    expect(outcome.applicationStatusCode).toBe('102');
    expect(outcome.protocolNumber).toBe('135260000000777');
    const typed = outcome as unknown as {
      signedXml: string;
      authorizedXml: string;
    };
    expect(
      validateNFeXsd(typed.signedXml, {
        schemaFamily: 'inutNFe_v4.00.xsd',
        xsdDir: XSD_DIR,
      }).classification,
    ).toBe('valid');
    expect(typed.authorizedXml).toMatch(
      /^<ProcInutNFe xmlns="http:\/\/www\.portalfiscal\.inf\.br\/nfe" versao="4\.00"><inutNFe /,
    );
    expect(typed.authorizedXml).toContain('<retInutNFe');
  });

  it('classifies a rejected inutilization (e.g. 563 duplicate range) as rejected', async () => {
    const outcome = await submitNFeInutilization({
      ...(await request()),
      requestExecutor: async () => ({
        headers: {},
        responseXml: inutResponse(
          '563',
          'Rejeicao: Ja existe pedido de Inutilizacao',
        ),
        status: 200,
      }),
    } as never);

    expect(outcome.classification).toBe('rejected');
    expect(outcome.applicationStatusCode).toBe('563');
    expect(
      (outcome as unknown as { authorizedXml?: string }).authorizedXml,
    ).toBeUndefined();
  });

  it.each([
    ['faixa invertida', { inutilization: { ...DETAILS, numberStart: 130 } }],
    [
      'faixa acima de 10.000',
      { inutilization: { ...DETAILS, numberStart: 1, numberEnd: 10001 } },
    ],
    ['numero inicial zero', { inutilization: { ...DETAILS, numberStart: 0 } }],
    [
      'serie fora do intervalo',
      { inutilization: { ...DETAILS, series: 1000 } },
    ],
    ['ano invalido', { inutilization: { ...DETAILS, year: '2026' } }],
    ['justificativa curta', { justification: 'curta' }],
  ])('refuses %s before signing or sending', async (_name, change) => {
    const requestExecutor = jest.fn();
    const outcome = await submitNFeInutilization({
      ...(await request({}, change)),
      requestExecutor,
    } as never);

    expect(outcome.classification).toBe('usage-error');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('requires an executor in production and an SP issuer', async () => {
    const withoutExecutor = await submitNFeInutilization(
      (await request({ environment: 'production' })) as never,
    );
    const outsideSp = await submitNFeInutilization({
      ...(await request(
        { environment: 'production' },
        { inutilization: { ...DETAILS, cUF: '31' } },
      )),
      requestExecutor: jest.fn(),
    } as never);

    expect(withoutExecutor.classification).toBe('usage-error');
    expect(outsideSp.classification).toBe('unsupported-scope');
  });
});

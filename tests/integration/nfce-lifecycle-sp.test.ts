import {
  cancelNFe,
  createSigningContext,
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
  resolveNFeServiceEndpoint,
  submitNFeInutilization,
  validateNFeXsd,
} from '../../src/index';
import { resolve } from 'node:path';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

/** 44-digit SP NFC-e (model 65) key; the model sits at positions 20-21. */
const NFCE_KEY = '3526111122233300018165001000000010100000000';
const KEY = `${NFCE_KEY}1`;
const SUBSTITUTE_KEY = '35261111222333000181650010000000111000000011';
const PROTOCOL = '135260000000001';
const SUBSTITUTION_XSD = resolve(
  process.cwd(),
  'xsd',
  'Evento_CancSubst_v1.01_NT_2018_004',
  'Evento_CancSubst_v1.01',
);
const NOW = '2026-11-10T12:30:00-03:00';

type Call = {
  endpointUrl: string;
  requestXml: string;
  headers: Readonly<Record<string, string>>;
};

const executor = (calls: Call[], responseXml: string) => async (call: Call) => {
  calls.push(call);
  return { headers: {}, responseXml, status: 200 };
};
const soap = (inner: string, ns: string) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/${ns}">${inner}</nfeResultMsg></soap:Body></soap:Envelope>`;
const eventResponse = (cStat: string, tpEvento: string) =>
  soap(
    `<retEnvEvento xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.00"><idLote>1</idLote><tpAmb>2</tpAmb><verAplic>SP</verAplic><cOrgao>35</cOrgao><cStat>128</cStat><xMotivo>Lote de Evento Processado</xMotivo><retEvento versao="1.00"><infEvento><tpAmb>2</tpAmb><verAplic>SP</verAplic><cOrgao>35</cOrgao><cStat>${cStat}</cStat><xMotivo>Evento registrado</xMotivo><chNFe>${KEY}</chNFe><tpEvento>${tpEvento}</tpEvento><xEvento>x</xEvento><nSeqEvento>1</nSeqEvento><dhRegEvento>2026-11-10T12:30:05-03:00</dhRegEvento><nProt>135260000000099</nProt></infEvento></retEvento></retEnvEvento>`,
    'NFeRecepcaoEvento4',
  );

async function signingContext() {
  const fixture = createTestA1FixtureSource();

  return createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });
}

const NFCE_HOSTS = {
  'nfce-status-service': 'NFeStatusServico4.asmx',
  'nfce-document-situation': 'NFeConsultaProtocolo4.asmx',
  'nfce-event': 'NFeRecepcaoEvento4.asmx',
  'nfce-inutilization': 'NFeInutilizacao4.asmx',
} as const;

describe('NFC-e (model 65) lifecycle routes of SP', () => {
  jest.setTimeout(60_000);

  describe('official endpoints (SEFAZ/SP portal)', () => {
    it.each(Object.entries(NFCE_HOSTS))(
      'resolves %s to the NFC-e hosts, not to the NF-e ones',
      (service, file) => {
        expect(
          resolveNFeServiceEndpoint({
            authorizer: 'SP',
            environment: 'production',
            service,
          } as never).endpointUrl,
        ).toBe(`https://nfce.fazenda.sp.gov.br/ws/${file}`);
        expect(
          resolveNFeServiceEndpoint({
            authorizer: 'SP',
            environment: 'homologation',
            service,
          } as never).endpointUrl,
        ).toBe(`https://homologacao.nfce.fazenda.sp.gov.br/ws/${file}`);
      },
    );

    it('keeps the source of every NFC-e lifecycle entry', () => {
      const entry = resolveNFeServiceEndpoint({
        authorizer: 'SP',
        environment: 'production',
        service: 'nfce-event',
      } as never);

      expect(entry.provenance.sources.join(' ')).toContain(
        'portal.fazenda.sp.gov.br/servicos/nfce/Paginas/WebServices.aspx',
      );
    });
  });

  describe('service status', () => {
    it('queries the NFC-e service of SP when the model is 65', async () => {
      const calls: Call[] = [];
      const snapshot = await queryNFeServiceStatus({
        documentModel: 65,
        environment: 'production',
        issuerUF: '35',
        requestExecutor: executor(
          calls,
          soap(
            '<retConsStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><verAplic>SP</verAplic><cStat>107</cStat><xMotivo>Servico em Operacao</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto></retConsStatServ>',
            'NFeStatusServico4',
          ),
        ),
        wireFormat: true,
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://nfce.fazenda.sp.gov.br/ws/NFeStatusServico4.asmx',
      );
      expect(snapshot.classification).toBe('success');
      expect(snapshot.applicationStatusCode).toBe('107');
    });

    it('keeps the NF-e service when the model is omitted', async () => {
      const calls: Call[] = [];
      await queryNFeServiceStatus({
        environment: 'production',
        issuerUF: '35',
        requestExecutor: executor(
          calls,
          soap(
            '<retConsStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><cStat>107</cStat></retConsStatServ>',
            'NFeStatusServico4',
          ),
        ),
        wireFormat: true,
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx',
      );
    });
  });

  describe('situation by access key', () => {
    it('chooses the NFC-e service from the model digits of the key', async () => {
      const calls: Call[] = [];
      const result = await queryNFeDocumentSituation({
        accessKey: KEY,
        environment: 'production',
        requestExecutor: executor(
          calls,
          soap(
            `<retConsSitNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><verAplic>SP</verAplic><cStat>101</cStat><xMotivo>Cancelamento homologado</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto><chNFe>${KEY}</chNFe></retConsSitNFe>`,
            'NFeConsultaProtocolo4',
          ),
        ),
        wireFormat: true,
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://nfce.fazenda.sp.gov.br/ws/NFeConsultaProtocolo4.asmx',
      );
      expect(result.state.primaryState).toBe('canceled');
    });
  });

  describe('cancellation and cancellation by substitution', () => {
    it('sends the cancellation (110111) of an NFC-e to the NFC-e event service', async () => {
      const calls: Call[] = [];
      const outcome = await cancelNFe({
        accessKey: KEY,
        canonicalPayload: {},
        environment: 'homologation',
        requestExecutor: executor(calls, eventResponse('135', '110111')),
        signedEvent: {
          eventDateTime: NOW,
          issuerTaxId: '11222333000181',
          justification: 'Venda cancelada a pedido do consumidor',
          protocol: PROTOCOL,
          signingContext: await signingContext(),
        },
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeRecepcaoEvento4.asmx',
      );
      expect(calls[0].requestXml).toContain(
        `<infEvento Id="ID110111${KEY}01">`,
      );
      expect(outcome.classification).toBe('success');
    });

    it('sends the cancellation by substitution (110112) with the referenced NFC-e', async () => {
      const calls: Call[] = [];
      const outcome = await cancelNFe({
        accessKey: KEY,
        canonicalPayload: {},
        environment: 'homologation',
        requestExecutor: executor(calls, eventResponse('135', '110112')),
        signedEvent: {
          applicationVersion: 'jcmserver3 1.0',
          eventDateTime: NOW,
          issuerTaxId: '11222333000181',
          justification: 'NFC-e substituida por emissao em contingencia',
          protocol: PROTOCOL,
          signingContext: await signingContext(),
          substituteAccessKey: SUBSTITUTE_KEY,
        },
      } as never);

      const xml = calls[0].requestXml;
      expect(xml).toContain(`<infEvento Id="ID110112${KEY}01">`);
      expect(xml).toContain('<tpEvento>110112</tpEvento>');
      expect(xml).toContain(
        '<descEvento>Cancelamento por substituicao</descEvento>',
      );
      expect(xml).toContain(
        '<cOrgaoAutor>35</cOrgaoAutor><tpAutor>1</tpAutor>',
      );
      expect(xml).toContain('<verAplic>jcmserver3 1.0</verAplic>');
      expect(xml).toContain(`<chNFeRef>${SUBSTITUTE_KEY}</chNFeRef>`);
      expect(outcome.classification).toBe('success');
      const typed = outcome as unknown as { signedXml: string };
      expect(
        validateNFeXsd(typed.signedXml, {
          schemaFamily: 'envEventoCancSubst_v1.00.xsd',
          xsdDir: SUBSTITUTION_XSD,
        }).classification,
      ).toBe('valid');
    });

    it.each([
      [
        'without the application version',
        { applicationVersion: undefined },
        /applicationVersion/u,
      ],
      [
        'with a substitute key that is not an NFC-e',
        { substituteAccessKey: '35261111222333000181550010000000111000000011' },
        /model 65/u,
      ],
      [
        'with the key of the note itself',
        { substituteAccessKey: KEY },
        /itself|different/u,
      ],
    ])(
      'refuses a substitution %s before signing or sending',
      async (_label, overrides, message) => {
        const calls: Call[] = [];
        const outcome = await cancelNFe({
          accessKey: KEY,
          canonicalPayload: {},
          environment: 'homologation',
          requestExecutor: executor(calls, eventResponse('135', '110112')),
          signedEvent: {
            applicationVersion: 'jcmserver3 1.0',
            eventDateTime: NOW,
            issuerTaxId: '11222333000181',
            justification: 'NFC-e substituida por emissao em contingencia',
            protocol: PROTOCOL,
            signingContext: await signingContext(),
            substituteAccessKey: SUBSTITUTE_KEY,
            ...overrides,
          },
        } as never);

        expect(calls).toHaveLength(0);
        expect(outcome.classification).toBe('usage-error');
        expect(outcome.failureReason).toMatch(message);
      },
    );

    it('refuses the substitution of an NF-e: it exists for the NFC-e only', async () => {
      const outcome = await cancelNFe({
        accessKey: '35261111222333000181550010000000101000000011',
        canonicalPayload: {},
        environment: 'homologation',
        signedEvent: {
          applicationVersion: 'jcmserver3 1.0',
          eventDateTime: NOW,
          issuerTaxId: '11222333000181',
          justification: 'NFC-e substituida por emissao em contingencia',
          protocol: PROTOCOL,
          signingContext: await signingContext(),
          substituteAccessKey: SUBSTITUTE_KEY,
        },
      } as never);

      expect(outcome.classification).toBe('usage-error');
      expect(outcome.failureReason).toMatch(/NFC-e/u);
    });
  });

  describe('inutilization', () => {
    const inutResponse = (cStat: string) =>
      soap(
        `<retInutNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><infInut><tpAmb>2</tpAmb><verAplic>SP</verAplic><cStat>${cStat}</cStat><xMotivo>Inutilizacao homologada</xMotivo><cUF>41</cUF><ano>26</ano><CNPJ>11222333000181</CNPJ><mod>65</mod><serie>1</serie><nNFIni>100</nNFIni><nNFFin>120</nNFFin><dhRecbto>2026-11-10T12:40:05-03:00</dhRecbto><nProt>135260000000777</nProt></infInut></retInutNFe>`,
        'NFeInutilizacao4',
      );
    const details = async (cUF: string) => ({
      eventDateTime: '2026-11-10T12:40:00-03:00',
      inutilization: {
        cUF,
        model: '65',
        numberEnd: 120,
        numberStart: 100,
        series: 1,
        year: '26',
      },
      issuerTaxId: '11222333000181',
      justification: 'Numeracao pulada por falha no sistema',
      signingContext: await signingContext(),
    });

    it('sends the model 65 range to the national homologation service for a UF outside the dispensation', async () => {
      const calls: Call[] = [];
      const outcome = await submitNFeInutilization({
        canonicalPayload: {},
        environment: 'homologation',
        requestExecutor: executor(calls, inutResponse('102')),
        signedEvent: await details('41'),
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
      );
      expect(calls[0].requestXml).toContain('<mod>65</mod>');
      expect(outcome.classification).toBe('success');
    });

    it.each([
      ['SP', '35'],
      ['AC', '12'],
      ['BA', '29'],
    ])(
      'refuses the NFC-e inutilization of %s, dispensed since 2026-11-01, without sending it',
      async (_uf, cUF) => {
        const calls: Call[] = [];
        const outcome = await submitNFeInutilization({
          canonicalPayload: {},
          environment: 'homologation',
          requestExecutor: executor(calls, inutResponse('102')),
          signedEvent: await details(cUF),
        } as never);

        expect(calls).toHaveLength(0);
        expect(outcome.classification).toBe('unsupported-scope');
        expect(outcome.failureReason).toMatch(/dispens/u);
      },
    );

    it('keeps the NF-e inutilization of SP unchanged', async () => {
      const calls: Call[] = [];
      const base = await details('35');
      await submitNFeInutilization({
        canonicalPayload: {},
        environment: 'homologation',
        requestExecutor: executor(calls, inutResponse('102')),
        signedEvent: {
          ...base,
          inutilization: { ...base.inutilization, model: undefined },
        },
      } as never);

      expect(calls[0].endpointUrl).toBe(
        'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx',
      );
    });
  });
});

import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';
import {
  createSigningContext,
  distributeRecipientDFe,
  manifestRecipientOperation,
  validateNFeXsd,
} from '../../src/index';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

const KEY = '35261122233300018155001000000010100000000011';
const MANIFEST_XSD = resolve(
  process.cwd(),
  'xsd',
  'Evento_ManifestaDest_PL_v1.01',
);
type Call = {
  endpointUrl: string;
  requestXml: string;
  headers: Readonly<Record<string, string>>;
};

const distResponse = (
  cStat: string,
  xMotivo: string,
  ultNSU: string,
  maxNSU: string,
  docs = '',
) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeDistDFeInteresseResponse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe"><nfeDistDFeInteresseResult><retDistDFeInt xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01"><tpAmb>1</tpAmb><verAplic>1.7.6</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><dhResp>2026-11-10T12:00:00-03:00</dhResp><ultNSU>${ultNSU}</ultNSU><maxNSU>${maxNSU}</maxNSU>${docs}</retDistDFeInt></nfeDistDFeInteresseResult></nfeDistDFeInteresseResponse></soap:Body></soap:Envelope>`;

const doc = (nsu: string) =>
  `<loteDistDFeInt><docZip NSU="${nsu}" schema="resNFe_v1.01">${gzipSync(`<resNFe><chNFe>${KEY}</chNFe><CNPJ>11222333000181</CNPJ></resNFe>`).toString('base64')}</docZip></loteDistDFeInt>`;

const executor = (calls: Call[], responseXml: string) => async (call: Call) => {
  calls.push(call);
  return { headers: {}, responseXml, status: 200 };
};

const ACTOR = { documentNumber: '99999999000191', documentType: 'cnpj' };

describe('distributeRecipientDFe (official wire format, production)', () => {
  it('sends distDFeInt with tpAmb 1 and the author UF in the NFeDistribuicaoDFe wrapper', async () => {
    const calls: Call[] = [];
    const outcome = await distributeRecipientDFe({
      actor: ACTOR,
      authorUF: '35',
      environment: 'production',
      requestExecutor: executor(
        calls,
        distResponse(
          '138',
          'Documento localizado',
          '000000000000010',
          '000000000000010',
          doc('000000000000010'),
        ),
      ),
      ultNSU: '000000000000000',
      wireFormat: true,
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDistDFeInteresse xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe"><nfeDadosMsg><distDFeInt ',
    );
    expect(calls[0].requestXml).toContain(
      '<tpAmb>1</tpAmb><cUFAutor>35</cUFAutor><CNPJ>99999999000191</CNPJ><distNSU><ultNSU>000000000000000</ultNSU></distNSU>',
    );
    expect(calls[0].headers['content-type']).toContain(
      'NFeDistribuicaoDFe/nfeDistDFeInteresse"',
    );
    expect(outcome.classification).toBe('documents-available');
    expect(outcome.documents).toHaveLength(1);
    expect(outcome.documents[0].accessKey).toBe(KEY);
    expect(outcome.continuation.nextAllowedAt).toBeDefined();
  });

  it('classifies 137 as no new documents and 656 as consumption abuse', async () => {
    const empty = await distributeRecipientDFe({
      actor: ACTOR,
      authorUF: '35',
      environment: 'production',
      requestExecutor: executor(
        [],
        distResponse(
          '137',
          'Nenhum documento localizado',
          '000000000000010',
          '000000000000010',
        ),
      ),
      ultNSU: '000000000000010',
      wireFormat: true,
    } as never);
    const abuse = await distributeRecipientDFe({
      actor: ACTOR,
      authorUF: '35',
      environment: 'production',
      requestExecutor: executor(
        [],
        distResponse(
          '656',
          'Rejeicao: Consumo Indevido',
          '000000000000010',
          '000000000000010',
        ),
      ),
      ultNSU: '000000000000010',
      wireFormat: true,
    } as never);

    expect(empty.classification).toBe('no-new-documents');
    expect(abuse.classification).toBe('usage-error');
  });

  it('uses the national homologation host and refuses production without executor or authorUF', async () => {
    const calls: Call[] = [];
    await distributeRecipientDFe({
      actor: ACTOR,
      authorUF: '35',
      environment: 'homologation',
      requestExecutor: executor(
        calls,
        distResponse('137', 'x', '000000000000000', '000000000000000'),
      ),
      ultNSU: '000000000000000',
      wireFormat: true,
    } as never);
    const noExecutor = await distributeRecipientDFe({
      actor: ACTOR,
      authorUF: '35',
      environment: 'production',
      ultNSU: '000000000000000',
      wireFormat: true,
    } as never);
    const noUf = await distributeRecipientDFe({
      actor: ACTOR,
      environment: 'production',
      requestExecutor: jest.fn(),
      ultNSU: '000000000000000',
      wireFormat: true,
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://hom1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    );
    expect(noExecutor.classification).toBe('usage-error');
    expect(noUf.classification).toBe('usage-error');
  });

  it('keeps refusing production in the legacy mode', async () => {
    const outcome = await distributeRecipientDFe({
      actor: ACTOR,
      environment: 'production',
      ultNSU: '000000000000000',
    } as never);

    expect(outcome.classification).toBe('unsupported-scope');
  });
});

describe('manifestRecipientOperation (official wire format, production)', () => {
  const eventResponse = (cStat: string) =>
    `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4"><retEnvEvento xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.00"><idLote>1</idLote><tpAmb>1</tpAmb><cOrgao>91</cOrgao><cStat>128</cStat><xMotivo>Lote de Evento Processado</xMotivo><retEvento versao="1.00"><infEvento><tpAmb>1</tpAmb><cOrgao>91</cOrgao><cStat>${cStat}</cStat><xMotivo>Evento registrado</xMotivo><chNFe>${KEY}</chNFe><nProt>891260000000001</nProt></infEvento></retEvento></retEnvEvento></nfeResultMsg></soap:Body></soap:Envelope>`;

  async function request(overrides: Record<string, unknown> = {}) {
    const fixture = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixture.passphrase,
      source: {
        contentBase64: fixture.certificateBase64,
        type: 'in-memory-content',
      },
    });

    return {
      accessKey: KEY,
      actor: ACTOR,
      environment: 'production',
      eventDateTime: '2026-11-10T12:30:00-03:00',
      eventType: 'ciencia-da-operacao',
      signingContext,
      timeoutMs: 5000,
      wireFormat: true,
      ...overrides,
    };
  }

  it('signs the manifestation, sends it to the national RecepcaoEvento and registers it', async () => {
    const calls: Call[] = [];
    const outcome = await manifestRecipientOperation({
      ...(await request()),
      requestExecutor: executor(calls, eventResponse('135')),
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://www.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4"><envEvento ',
    );
    expect(calls[0].requestXml).toContain(
      `<infEvento Id="ID210210${KEY}01"><cOrgao>91</cOrgao><tpAmb>1</tpAmb><CNPJ>99999999000191</CNPJ>`,
    );
    expect(calls[0].requestXml).toContain(
      '<dhEvento>2026-11-10T12:30:00-03:00</dhEvento>',
    );
    expect(calls[0].requestXml).toContain(
      '<descEvento>Ciencia da Operacao</descEvento>',
    );
    expect(calls[0].requestXml).toContain('<Signature');
    expect(outcome.classification).toBe('success');
    expect(outcome.applicationStatusCode).toBe('135');
  });

  it('validates the signed manifestation against envConfRecebto_v1.00.xsd', async () => {
    const calls: Call[] = [];
    await manifestRecipientOperation({
      ...(await request({
        eventType: 'operacao-nao-realizada',
        justification: 'Mercadoria nao recebida no prazo',
      })),
      requestExecutor: executor(calls, eventResponse('135')),
    } as never);
    const signed =
      /<envEvento[\s\S]*<\/envEvento>/u.exec(calls[0].requestXml)?.[0] ?? '';

    expect(
      validateNFeXsd(signed, {
        schemaFamily: 'envConfRecebto_v1.00.xsd',
        xsdDir: MANIFEST_XSD,
      }).classification,
    ).toBe('valid');
    expect(signed).toContain('<xJust>Mercadoria nao recebida no prazo</xJust>');
  });

  it('refuses production without executor and wire without eventDateTime', async () => {
    const noExecutor = await manifestRecipientOperation(
      (await request()) as never,
    );
    const noDate = await manifestRecipientOperation({
      ...(await request({ eventDateTime: undefined })),
      requestExecutor: jest.fn(),
    } as never);

    expect(noExecutor.classification).toBe('usage-error');
    expect(noDate.classification).toBe('usage-error');
  });

  it('keeps refusing production in the legacy mode', async () => {
    const outcome = await manifestRecipientOperation({
      ...(await request({ wireFormat: undefined })),
    } as never);

    expect(outcome.classification).toBe('unsupported-scope');
  });
});

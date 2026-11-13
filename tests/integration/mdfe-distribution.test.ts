import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

import {
  distributeMDFe,
  validateMDFeXml,
} from '../../src/canonical/mdfe/index';

const NS = 'http://www.portalfiscal.inf.br/mdfe';
const NOW = new Date('2026-11-11T15:00:00.000Z');
const fixture = (name: string): string =>
  readFileSync(
    resolve(process.cwd(), 'tests/fixtures/mdfe', name),
    'utf8',
  ).replace(/^<\?xml[^>]*\?>/u, '');

type Call = {
  endpointUrl: string;
  headers: Readonly<Record<string, string>>;
  requestXml: string;
  service: string;
};

const zip = (xml: string) =>
  gzipSync(Buffer.from(xml, 'utf8')).toString('base64');
const doc = (nsu: string, schema: string, xml: string) =>
  `<docZip NSU="${nsu}" schema="${schema}">${zip(xml)}</docZip>`;

const answer = (cStat: string, extra = '', xMotivo = 'x') =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><mdfeDistDFeInteresseResult xmlns="${NS}/wsdl/MDFeDistribuicaoDFe"><retDistDFeInt xmlns="${NS}" versao="1.00"><tpAmb>2</tpAmb><verAplic>SVRS</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><dhResp>2026-11-11T12:00:00-03:00</dhResp>${extra}</retDistDFeInt></mdfeDistDFeInteresseResult></soap:Body></soap:Envelope>`;

const executor = (calls: Call[], responseXml: string) => async (call: Call) => {
  calls.push(call);
  return { headers: {}, responseXml, status: 200 };
};

const base = {
  taxId: '11222333000181',
  environment: 'homologation' as const,
  now: NOW,
};

describe('distributeMDFe', () => {
  it('sends distNSU in the official envelope (with the documented SOAP header) to the homologation route', async () => {
    const calls: Call[] = [];
    await distributeMDFe({
      ...base,
      ultNSU: '000000000000000',
      headerUF: '35',
      requestExecutor: executor(
        calls,
        answer(
          '137',
          '<ultNSU>000000000000000</ultNSU><maxNSU>000000000000000</maxNSU>',
        ),
      ),
    });

    expect(calls[0].endpointUrl).toBe(
      'https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx',
    );
    expect(calls[0].headers['content-type']).toContain(
      '/MDFeDistribuicaoDFe/mdfeDistDFeInteresse"',
    );
    expect(calls[0].requestXml).toContain(
      `<soap:Header><mdfeCabecMsg xmlns="${NS}/wsdl/MDFeDistribuicaoDFe"><cUF>35</cUF><versaoDados>1.00</versaoDados></mdfeCabecMsg></soap:Header>`,
    );
    const payload =
      /<distDFeInt[\s\S]*<\/distDFeInt>/u.exec(calls[0].requestXml)?.[0] ?? '';
    expect(payload).toBe(
      `<distDFeInt xmlns="${NS}" versao="1.00"><tpAmb>2</tpAmb><CNPJ>11222333000181</CNPJ><distNSU><ultNSU>000000000000000</ultNSU></distNSU></distDFeInt>`,
    );
    expect(
      validateMDFeXml(payload, {
        xsdDir: resolve(process.cwd(), 'xsd', 'PL_MDFeDistDFe_100'),
      }),
    ).toMatchObject({
      classification: 'valid',
    });
  });

  it('decompresses the documents, parses MDF-e and events and advances the cursor', async () => {
    const result = await distributeMDFe({
      ...base,
      ultNSU: '000000000000000',
      requestExecutor: executor(
        [],
        answer(
          '138',
          `<ultNSU>000000000000002</ultNSU><maxNSU>000000000000009</maxNSU><loteDistDFeInt>${doc('000000000000001', 'procMDFe_v3.00.xsd', fixture('mdfe-proc-authorized.xml'))}${doc('000000000000002', 'procEventoMDFe_v3.00.xsd', fixture('mdfe-event-closure.xml'))}${doc('000000000000003', 'resumo_v1.00.xsd', '<x/>')}</loteDistDFeInt>`,
        ),
      ),
    });

    expect(result).toMatchObject({
      classification: 'documents-available',
      cursor: {
        ultNSU: '000000000000002',
        maxNSU: '000000000000009',
        hasMoreDocumentsNow: true,
      },
    });
    expect(result.nextAllowedAt).toBeUndefined();
    expect(result.documents).toHaveLength(3);
    expect(result.documents[0]).toMatchObject({
      nsu: '000000000000001',
      schema: 'procMDFe_v3.00.xsd',
      parsed: { kind: 'document', authorized: true },
    });
    expect(result.documents[0].xml).toContain('<mdfeProc');
    expect(result.documents[1].parsed).toMatchObject({
      kind: 'event',
      eventName: 'closure',
    });
    expect(result.documents[2]).toMatchObject({
      schema: 'resumo_v1.00.xsd',
      xml: '<x/>',
    });
    expect(result.documents[2].parsed).toBeUndefined();
  });

  it('imposes at least one hour before the next call when ultNSU equals maxNSU', async () => {
    const result = await distributeMDFe({
      ...base,
      ultNSU: '000000000000005',
      requestExecutor: executor(
        [],
        answer(
          '137',
          '<ultNSU>000000000000005</ultNSU><maxNSU>000000000000005</maxNSU>',
          'Nenhum documento localizado',
        ),
      ),
    });

    expect(result).toMatchObject({
      classification: 'no-new-documents',
      cursor: {
        ultNSU: '000000000000005',
        maxNSU: '000000000000005',
        hasMoreDocumentsNow: false,
      },
      nextAllowedAt: '2026-11-11T16:00:00.000Z',
    });
  });

  it('also waits one hour after the last page of documents', async () => {
    const result = await distributeMDFe({
      ...base,
      ultNSU: '000000000000000',
      requestExecutor: executor(
        [],
        answer(
          '138',
          `<ultNSU>000000000000001</ultNSU><maxNSU>000000000000001</maxNSU><loteDistDFeInt>${doc('000000000000001', 'procMDFe_v3.00.xsd', fixture('mdfe-proc-authorized.xml'))}</loteDistDFeInt>`,
        ),
      ),
    });

    expect(result.nextAllowedAt).toBe('2026-11-11T16:00:00.000Z');
  });

  it('classifies rejection 678 as misuse and keeps the cursor', async () => {
    const result = await distributeMDFe({
      ...base,
      ultNSU: '000000000000005',
      requestExecutor: executor(
        [],
        answer('678', '', 'Rejeicao: Consumo indevido'),
      ),
    });

    expect(result).toMatchObject({
      classification: 'misuse',
      statusCode: '678',
      cursor: { ultNSU: '000000000000005', hasMoreDocumentsNow: false },
      nextAllowedAt: '2026-11-11T16:00:00.000Z',
    });
  });

  it('reports the oldest accepted NSU of rejection 730', async () => {
    const result = await distributeMDFe({
      ...base,
      ultNSU: '000000000000001',
      requestExecutor: executor(
        [],
        answer(
          '730',
          '',
          'Rejeicao: NSU solicitado muito antigo [NSUMin: 000000000000777]',
        ),
      ),
    });

    expect(result).toMatchObject({
      classification: 'functional-rejection',
      statusCode: '730',
      minimumNSU: '000000000000777',
    });
  });

  it('queries one NSU with consNSU', async () => {
    const calls: Call[] = [];
    await distributeMDFe({
      ...base,
      nsu: '000000000000004',
      requestExecutor: executor(calls, answer('137')),
    });

    expect(calls[0].requestXml).toContain(
      '<consNSU><NSU>000000000000004</NSU></consNSU>',
    );
  });

  it.each([
    ['a malformed cursor', { ultNSU: '12' }],
    ['an invalid tax id', { taxId: '123', ultNSU: '000000000000000' }],
    ['neither cursor nor NSU', {}],
    [
      'both cursor and NSU',
      { ultNSU: '000000000000000', nsu: '000000000000001' },
    ],
  ])('refuses %s before any request', async (_name, override) => {
    const calls: Call[] = [];
    const result = await distributeMDFe({
      ...base,
      requestExecutor: executor(calls, ''),
      ...override,
    } as never);

    expect(result.classification).toBe('usage-error');
    expect(calls).toHaveLength(0);
  });

  it('sends the distribution request to the production route with tpAmb 1', async () => {
    const calls: Call[] = [];
    const result = await distributeMDFe({
      ...base,
      environment: 'production',
      ultNSU: '000000000000003',
      requestExecutor: executor(
        calls,
        answer(
          '137',
          '<ultNSU>000000000000003</ultNSU><maxNSU>000000000000003</maxNSU>',
        ),
      ),
    });

    expect(calls).toHaveLength(1);
    expect(calls[0].endpointUrl).toBe(
      'https://mdfe.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx',
    );
    expect(calls[0].requestXml).toContain('<tpAmb>1</tpAmb>');
    expect(result).toMatchObject({
      classification: 'no-new-documents',
      cursor: { ultNSU: '000000000000003' },
    });
  });
});

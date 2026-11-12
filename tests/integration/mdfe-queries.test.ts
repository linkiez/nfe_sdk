import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import {
  validateMDFeXml,
  queryMDFeByAccessKey,
  queryMDFeNotClosed,
  queryMDFeServiceStatus,
} from '../../src/canonical/mdfe/index';

const KEY = '35261111222333000181580010000000011123456780';
const NS = 'http://www.portalfiscal.inf.br/mdfe';
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

const soap = (wsdl: string, inner: string) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><mdfeResultMsg xmlns="${NS}/wsdl/${wsdl}">${inner}</mdfeResultMsg></soap:Body></soap:Envelope>`;

const executor =
  (calls: Call[], responseXml: string, status = 200) =>
  async (call: Call) => {
    calls.push(call);
    return { headers: {}, responseXml, status };
  };

const protocolBlock = (cStat = '100') =>
  `<protMDFe versao="3.00"><infProt><tpAmb>2</tpAmb><verAplic>SVRS</verAplic><chMDFe>${KEY}</chMDFe><dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><nProt>135260000000001</nProt><digVal>c3ludGhldGljLWZpeHR1cmU=</digVal><cStat>${cStat}</cStat><xMotivo>Autorizado o uso do MDF-e</xMotivo></infProt></protMDFe>`;

const situation = (cStat: string, xMotivo: string, extra = '') =>
  soap(
    'MDFeConsulta',
    `<retConsSitMDFe xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><verAplic>SVRS</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><cUF>35</cUF>${extra}</retConsSitMDFe>`,
  );

describe('queryMDFeServiceStatus', () => {
  const answer = (cStat: string) =>
    soap(
      'MDFeStatusServico',
      `<retConsStatServMDFe xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><verAplic>SVRS</verAplic><cStat>${cStat}</cStat><xMotivo>x</xMotivo><cUF>43</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto><tMed>1</tMed></retConsStatServMDFe>`,
    );

  it('sends consStatServMDFe in SOAP 1.2 to the homologation route and reports an operating service', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeServiceStatus({
      environment: 'homologation',
      requestExecutor: executor(calls, answer('107')),
    });

    expect(calls[0].endpointUrl).toBe(
      'https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx',
    );
    expect(calls[0].headers['content-type']).toBe(
      'application/soap+xml; charset=utf-8; action="http://www.portalfiscal.inf.br/mdfe/wsdl/MDFeStatusServico/mdfeStatusServicoMDF"',
    );
    expect(calls[0].requestXml).toContain(
      `<soap:Body><mdfeDadosMsg xmlns="${NS}/wsdl/MDFeStatusServico"><consStatServMDFe xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><xServ>STATUS</xServ></consStatServMDFe></mdfeDadosMsg></soap:Body>`,
    );
    expect(calls[0].requestXml).not.toContain('Header');
    expect(result).toMatchObject({
      classification: 'success',
      available: true,
      statusCode: '107',
    });
  });

  it.each(['108', '109'])(
    'classifies cStat %s as unavailable',
    async (cStat) => {
      const result = await queryMDFeServiceStatus({
        environment: 'homologation',
        requestExecutor: executor([], answer(cStat)),
      });

      expect(result).toMatchObject({
        classification: 'unavailable',
        available: false,
      });
    },
  );

  it('answers unsupported for production without calling SEFAZ', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeServiceStatus({
      environment: 'production',
      requestExecutor: executor(calls, answer('107')),
    });

    expect(result).toMatchObject({
      classification: 'unsupported',
      available: false,
    });
    expect(calls).toHaveLength(0);
  });

  it('classifies a timeout and an answer without cStat', async () => {
    const aborting = async () => {
      throw Object.assign(new Error('timeout'), { name: 'AbortError' });
    };
    expect(
      await queryMDFeServiceStatus({
        environment: 'homologation',
        requestExecutor: aborting,
      }),
    ).toMatchObject({ classification: 'timeout' });
    expect(
      await queryMDFeServiceStatus({
        environment: 'homologation',
        requestExecutor: executor([], soap('MDFeStatusServico', '<x/>')),
      }),
    ).toMatchObject({ classification: 'protocol-error' });
  });
});

describe('queryMDFeByAccessKey', () => {
  it('sends consSitMDFe and reads an authorized MDF-e with its protocol', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeByAccessKey({
      accessKey: KEY,
      environment: 'homologation',
      requestExecutor: executor(
        calls,
        situation('100', 'Autorizado o uso do MDF-e', protocolBlock()),
      ),
    });

    expect(calls[0].endpointUrl).toBe(
      'https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx',
    );
    expect(calls[0].requestXml).toContain(
      `<consSitMDFe xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><xServ>CONSULTAR</xServ><chMDFe>${KEY}</chMDFe></consSitMDFe>`,
    );
    expect(calls[0].headers['content-type']).toContain(
      '/MDFeConsulta/mdfeConsultaMDF"',
    );
    expect(result).toMatchObject({
      classification: 'success',
      accessKey: KEY,
      situation: 'authorized',
      statusCode: '100',
      protocol: { number: '135260000000001', statusCode: '100' },
      events: [],
    });
  });

  it('reads a closed MDF-e with its registered events', async () => {
    const result = await queryMDFeByAccessKey({
      accessKey: KEY,
      environment: 'homologation',
      requestExecutor: executor(
        [],
        situation(
          '132',
          'Encerramento de MDF-e homologado',
          protocolBlock() + fixture('mdfe-event-closure.xml'),
        ),
      ),
    });

    expect(result.situation).toBe('closed');
    expect(result.events).toEqual([
      expect.objectContaining({
        eventName: 'closure',
        registered: true,
        protocol: '335260000000009',
      }),
    ]);
  });

  it.each([
    ['101', 'canceled'],
    ['217', 'not-found'],
    ['999', 'other'],
  ])('maps cStat %s to %s', async (cStat, expected) => {
    const result = await queryMDFeByAccessKey({
      accessKey: KEY,
      environment: 'homologation',
      requestExecutor: executor([], situation(cStat, 'x')),
    });

    expect(result.situation).toBe(expected);
  });

  it('refuses a malformed or non-MDF-e access key before any request', async () => {
    const calls: Call[] = [];
    for (const accessKey of ['123', KEY.replace('58', '55')]) {
      const result = await queryMDFeByAccessKey({
        accessKey,
        environment: 'homologation',
        requestExecutor: executor(calls, ''),
      });
      expect(result.classification).toBe('usage-error');
    }
    expect(calls).toHaveLength(0);
  });

  it('answers unsupported for production', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeByAccessKey({
      accessKey: KEY,
      environment: 'production',
      requestExecutor: executor(calls, ''),
    });

    expect(result.classification).toBe('unsupported');
    expect(calls).toHaveLength(0);
  });
});

describe('queryMDFeNotClosed', () => {
  const answer = (cStat: string, items = '') =>
    soap(
      'MDFeConsNaoEnc',
      `<retConsMDFeNaoEnc xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><verAplic>SVRS</verAplic><cStat>${cStat}</cStat><xMotivo>x</xMotivo><cUF>35</cUF>${items}</retConsMDFeNaoEnc>`,
    );

  it('lists the MDF-e not closed for a CNPJ', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeNotClosed({
      taxId: '11222333000181',
      environment: 'homologation',
      requestExecutor: executor(
        calls,
        answer(
          '111',
          `<infMDFe><chMDFe>${KEY}</chMDFe><nProt>135260000000001</nProt></infMDFe><infMDFe><chMDFe>${KEY.replace('0001', '0002')}</chMDFe><nProt>135260000000002</nProt></infMDFe>`,
        ),
      ),
    });

    expect(calls[0].requestXml).toContain(
      `<consMDFeNaoEnc xmlns="${NS}" versao="3.00"><tpAmb>2</tpAmb><xServ>CONSULTAR NÃO ENCERRADOS</xServ><CNPJ>11222333000181</CNPJ></consMDFeNaoEnc>`,
    );
    expect(result).toMatchObject({
      classification: 'success',
      statusCode: '111',
    });
    expect(result.items).toEqual([
      { accessKey: KEY, protocol: '135260000000001' },
      { accessKey: KEY.replace('0001', '0002'), protocol: '135260000000002' },
    ]);
  });

  it('answers an empty list for cStat 112 and uses CPF for an 11 digit id', async () => {
    const calls: Call[] = [];
    const result = await queryMDFeNotClosed({
      taxId: '12345678909',
      environment: 'homologation',
      requestExecutor: executor(calls, answer('112')),
    });

    expect(calls[0].requestXml).toContain('<CPF>12345678909</CPF>');
    expect(result).toMatchObject({
      classification: 'success',
      statusCode: '112',
      items: [],
    });
  });

  it('refuses an invalid tax id and production', async () => {
    const calls: Call[] = [];
    expect(
      (
        await queryMDFeNotClosed({
          taxId: '12',
          environment: 'homologation',
          requestExecutor: executor(calls, ''),
        })
      ).classification,
    ).toBe('usage-error');
    expect(
      (
        await queryMDFeNotClosed({
          taxId: '11222333000181',
          environment: 'production',
          requestExecutor: executor(calls, ''),
        })
      ).classification,
    ).toBe('unsupported');
    expect(calls).toHaveLength(0);
  });
});

describe('request messages follow the official layouts', () => {
  const payloadOf = (call: Call): string =>
    /<(consStatServMDFe|consSitMDFe|consMDFeNaoEnc)[\s\S]*<\/\1>/u.exec(
      call.requestXml,
    )?.[0] ?? '';

  it('validates the three request messages against the selected XSD package', async () => {
    const calls: Call[] = [];
    await queryMDFeServiceStatus({
      environment: 'homologation',
      requestExecutor: executor(calls, ''),
    });
    await queryMDFeByAccessKey({
      accessKey: KEY,
      environment: 'homologation',
      requestExecutor: executor(calls, ''),
    });
    await queryMDFeNotClosed({
      taxId: '11222333000181',
      environment: 'homologation',
      requestExecutor: executor(calls, ''),
    });

    expect(calls).toHaveLength(3);
    for (const call of calls) {
      expect(validateMDFeXml(payloadOf(call))).toMatchObject({
        classification: 'valid',
      });
    }
  });
});

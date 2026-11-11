import { executeNFeSoapService } from '../../src/index';

type Captured = {
  headers: Readonly<Record<string, string>>;
  requestXml: string;
};

async function run(service: string, wireFormat?: boolean) {
  const captured: Captured[] = [];
  const outcome = await executeNFeSoapService({
    environment: 'homologation',
    payloadXml:
      '<?xml version="1.0" encoding="utf-8"?><enviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><idLote>1</idLote></enviNFe>',
    requestExecutor: async (request) => {
      captured.push({
        headers: request.headers,
        requestXml: request.requestXml,
      });
      return {
        headers: {},
        responseXml:
          '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe><cStat>104</cStat></retEnviNFe></soap:Body></soap:Envelope>',
        status: 200,
      };
    },
    service,
    timeoutMs: 1000,
    ...(wireFormat === undefined ? {} : { wireFormat }),
  } as Parameters<typeof executeNFeSoapService>[0]);

  return { captured: captured[0], outcome };
}

describe('SOAP 1.2 wire envelope (wireFormat)', () => {
  it('wraps the payload in nfeDadosMsg with the service namespace and drops the XML declaration', async () => {
    const { captured } = await run('nfe-authorization', true);

    expect(captured.requestXml).toContain(
      'xmlns:soap="http://www.w3.org/2003/05/soap-envelope"',
    );
    expect(captured.requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4"><enviNFe',
    );
    expect(captured.requestXml.match(/<\?xml/g)).toHaveLength(1);
    expect(captured.requestXml).toMatch(
      /<\/enviNFe><\/nfeDadosMsg><\/soap:Body>/,
    );
  });

  it('declares the SOAP action in the content type', async () => {
    const { captured } = await run('nfe-authorization', true);

    expect(captured.headers['content-type']).toBe(
      'application/soap+xml; charset=utf-8; action="http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4/nfeAutorizacaoLote"',
    );
  });

  it('uses the event service namespace for event services', async () => {
    const { captured } = await run('nfe-cancellation', true);

    expect(captured.requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4">',
    );
    expect(captured.headers['content-type']).toContain('nfeRecepcaoEvento"');
  });

  it('refuses wire format for services whose WSDL namespace is not verified yet', async () => {
    await expect(run('nfe-contributor-registration', true)).rejects.toThrow(
      /wire format.*nfe-contributor-registration/i,
    );
  });

  it('keeps the legacy envelope when wireFormat is not requested', async () => {
    const { captured } = await run('nfe-authorization');

    expect(captured.requestXml).not.toContain('nfeDadosMsg');
    expect(captured.headers['content-type']).toBe(
      'application/soap+xml; charset=utf-8',
    );
  });
});

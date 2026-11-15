import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  authorizeNFCe,
  createSigningContext,
  validateNFeXsd,
} from '../../../src/index';
import type { RequestExecutor } from '../../../src/canonical/transport/request-executor';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

const ACCESS_KEY = '35260512345678000123650020000004561876543219';
const HOMOLOGATION_ENDPOINT =
  'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx';
const PRODUCTION_ENDPOINT =
  'https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx';
const WSDL_NAMESPACE =
  'http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4';

function unsignedXml(environmentCode: '1' | '2'): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/signing/nfe-unsigned.xml'),
    'utf8',
  )
    .replace(
      'NFe35160512345678000123550010000000011000000011',
      `NFe${ACCESS_KEY}`,
    )
    .replace('<mod>55</mod>', '<mod>65</mod>')
    .replace('<cNF>00000001</cNF>', '<cNF>87654321</cNF>')
    .replace('<serie>1</serie>', '<serie>2</serie>')
    .replace('<nNF>1</nNF>', '<nNF>456</nNF>')
    .replace('<cDV>1</cDV>', '<cDV>9</cDV>')
    .replace('<tpAmb>2</tpAmb>', `<tpAmb>${environmentCode}</tpAmb>`)
    .replace(
      '</transp>',
      '</transp><pag><detPag><tPag>01</tPag><vPag>10.00</vPag></detPag></pag>',
    );
}

function authorizationResponse(environmentCode: '1' | '2'): string {
  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>${environmentCode}</tpAmb><cStat>100</cStat><xMotivo>fixture response</xMotivo><protNFe><infProt><chNFe>${ACCESS_KEY}</chNFe><nProt>135190000000001</nProt></infProt></protNFe></retEnviNFe></soap:Body></soap:Envelope>`;
}

async function createTestSigningContext() {
  const fixtureSource = createTestA1FixtureSource();

  return createSigningContext({
    passphrase: fixtureSource.passphrase,
    source: {
      contentBase64: fixtureSource.certificateBase64,
      type: 'in-memory-content',
    },
  });
}

describe.each([
  ['homologation', '2', HOMOLOGATION_ENDPOINT],
  ['production', '1', PRODUCTION_ENDPOINT],
] as const)('authorizeNFCe SP %s submission', (environment, code, endpoint) => {
  async function submit() {
    let requestXml = '';
    const requestExecutor = jest
      .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
      .mockImplementation(async (request) => {
        requestXml = request.requestXml;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: authorizationResponse(code),
          status: 200,
        };
      });
    const outcome = await authorizeNFCe({
      document: { documentId: ACCESS_KEY, environment, version: '4.00' },
      environment,
      signingContext: await createTestSigningContext(),
      requestExecutor,
      unsignedXml: unsignedXml(code),
    });

    return { outcome, requestExecutor, requestXml };
  }

  it('sends the signed NFC-e to the SP authorizer of the environment', async () => {
    const { outcome, requestExecutor, requestXml } = await submit();

    expect(outcome.classification).toBe('authorized');
    expect(requestExecutor).toHaveBeenCalledTimes(1);
    expect(requestExecutor).toHaveBeenCalledWith(
      expect.objectContaining({
        endpointUrl: endpoint,
        service: 'nfce-authorization-sp',
      }),
    );
    expect(requestXml).toContain('<Signature');
    expect(requestXml).toContain(`Id="NFe${ACCESS_KEY}"`);
    expect(requestXml).toContain('<indSinc>1</indSinc>');
    const signedNFeXml = requestXml.match(/<NFe\b[\s\S]*?<\/NFe>/u)?.[0];
    expect(validateNFeXsd(signedNFeXml ?? '')).toMatchObject({
      classification: 'valid',
    });
    expect(outcome.transportOutcome?.evidence.provider).toBe('SP');
    expect(outcome.transportOutcome?.environment).toBe(environment);
  });

  it('uses the SEFAZ SOAP 1.2 wire envelope, with no XML declaration inside the body', async () => {
    const { requestXml } = await submit();

    expect(requestXml).toContain(`<nfeDadosMsg xmlns="${WSDL_NAMESPACE}">`);
    expect(requestXml.match(/<\?xml/gu)).toHaveLength(1);
    expect(requestXml.startsWith('<?xml')).toBe(true);
  });

  it('sends the SOAP action of the authorization service in the content type', async () => {
    const { requestExecutor } = await submit();

    const { headers } = requestExecutor.mock.calls[0][0];
    expect(headers['content-type']).toContain(
      `action="${WSDL_NAMESPACE}/nfeAutorizacaoLote"`,
    );
  });
});

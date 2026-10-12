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
const PRODUCTION_ENDPOINT =
  'https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx';
const UNSIGNED_NFE_XML = readFileSync(
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
  .replace('<tpAmb>2</tpAmb>', '<tpAmb>1</tpAmb>')
  .replace(
    '</transp>',
    '</transp><pag><detPag><tPag>01</tPag><vPag>10.00</vPag></detPag></pag>',
  );

function authorizationResponse(
  statusCode: string,
  protocolNumber?: string,
  receiptNumber?: string,
  includeEnvironment = true,
  responseAccessKey = ACCESS_KEY,
): string {
  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe">${includeEnvironment ? '<tpAmb>1</tpAmb>' : ''}<cStat>${statusCode}</cStat><xMotivo>fixture response</xMotivo>${protocolNumber ? `<protNFe><infProt><chNFe>${responseAccessKey}</chNFe><nProt>${protocolNumber}</nProt></infProt></protNFe>` : ''}${receiptNumber ? `<nRec>${receiptNumber}</nRec>` : ''}</retEnviNFe></soap:Body></soap:Envelope>`;
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

describe('authorizeNFCe SP production integration', () => {
  it.each(['135190000000001', '12345678901234567'])(
    'submits once to the normal SP endpoint and preserves %s as a string',
    async (protocolNumber) => {
      const signingContext = await createTestSigningContext();
      let requestXml = '';
      const requestExecutor = jest
        .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
        .mockImplementation(async (request) => {
          requestXml = request.requestXml;
          return {
            headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
            responseXml: authorizationResponse('100', protocolNumber),
            status: 200,
          };
        });

      const outcome = await authorizeNFCe({
        document: {
          documentId: ACCESS_KEY,
          environment: 'production',
          version: '4.00',
        },
        environment: 'production',
        signingContext,
        requestExecutor,
        unsignedXml: UNSIGNED_NFE_XML,
        csc: { cscId: '000002', cscToken: 'test-token' },
      });

      expect(outcome.classification).toBe('authorized');
      expect(outcome.protocolNumber).toBe(protocolNumber);
      expect(typeof outcome.protocolNumber).toBe('string');
      expect(requestExecutor).toHaveBeenCalledTimes(1);
      expect(requestXml).toContain('<Signature');
      expect(requestXml).toContain(`Id="NFe${ACCESS_KEY}"`);
      expect(requestXml).toContain('<indSinc>1</indSinc>');
      expect(requestXml).not.toContain('<metadata>');
      const signedNFeXml = requestXml.match(/<NFe\b[\s\S]*?<\/NFe>/u)?.[0];
      expect(signedNFeXml).toBeDefined();
      expect(validateNFeXsd(signedNFeXml ?? '')).toMatchObject({
        classification: 'valid',
        errors: [],
      });
      expect(requestExecutor).toHaveBeenCalledWith(
        expect.objectContaining({
          endpointUrl: PRODUCTION_ENDPOINT,
          service: 'nfce-authorization-sp',
        }),
      );
      expect(outcome.transportOutcome?.evidence.provider).toBe('SP');
      expect(outcome.transportOutcome?.environment).toBe('production');
      expect(outcome.qrCodeUrl).toBe(
        `https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=${ACCESS_KEY}|3|1`,
      );
      expect(
        outcome.transportOutcome?.evidence.requestEnvelopeXml,
      ).not.toContain('test-token');
      expect(JSON.stringify(outcome)).not.toContain('test-token');
    },
  );

  it.each([
    { statusCode: '204', expected: 'rejected' },
    {
      statusCode: '103',
      receiptNumber: '351000000000001',
      expected: 'received',
    },
    { statusCode: '108', expected: 'unavailable' },
  ] as const)(
    'maps production cStat $statusCode to $expected without retry',
    async ({ statusCode, receiptNumber, expected }) => {
      const signingContext = await createTestSigningContext();
      const requestExecutor = jest
        .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
        .mockResolvedValue({
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: authorizationResponse(
            statusCode,
            undefined,
            receiptNumber,
          ),
          status: 200,
        });

      const outcome = await authorizeNFCe({
        document: {
          documentId: ACCESS_KEY,
          environment: 'production',
          version: '4.00',
        },
        environment: 'production',
        signingContext,
        requestExecutor,
        unsignedXml: UNSIGNED_NFE_XML,
        csc: { cscId: '000002', cscToken: 'test-token' },
      });

      expect(outcome.classification).toBe(expected);
      expect(outcome.qrCodeUrl).toBeUndefined();
      if (statusCode === '103') {
        expect(outcome).toHaveProperty('nextAction', 'reconcileNFeReceipt');
      } else {
        expect(outcome).not.toHaveProperty('nextAction');
      }
      expect(requestExecutor).toHaveBeenCalledTimes(1);
    },
  );

  it('maps timeout and mismatched production response environment without retry', async () => {
    const signingContext = await createTestSigningContext();
    const timeoutExecutor: RequestExecutor = async () => {
      const timeoutError = new Error('fixture timeout');
      timeoutError.name = 'AbortError';
      throw timeoutError;
    };
    const timeoutSpy = jest.fn(timeoutExecutor);
    const timeoutOutcome = await authorizeNFCe({
      document: {
        documentId: ACCESS_KEY,
        environment: 'production',
        version: '4.00',
      },
      environment: 'production',
      signingContext,
      requestExecutor: timeoutSpy,
      unsignedXml: UNSIGNED_NFE_XML,
      csc: { cscId: '000002', cscToken: 'test-token' },
    });

    const protocolExecutor = jest
      .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
      .mockResolvedValue({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: authorizationResponse(
          '100',
          '12345678901234567',
          undefined,
          false,
        ),
        status: 200,
      });
    const protocolOutcome = await authorizeNFCe({
      document: {
        documentId: ACCESS_KEY,
        environment: 'production',
        version: '4.00',
      },
      environment: 'production',
      signingContext,
      requestExecutor: protocolExecutor,
      unsignedXml: UNSIGNED_NFE_XML,
      csc: { cscId: '000002', cscToken: 'test-token' },
    });

    expect(timeoutOutcome.classification).toBe('timeout');
    expect(timeoutOutcome.qrCodeUrl).toBeUndefined();
    expect(timeoutSpy).toHaveBeenCalledTimes(1);
    expect(protocolOutcome.classification).toBe('protocol-error');
    expect(protocolOutcome.qrCodeUrl).toBeUndefined();
    expect(protocolExecutor).toHaveBeenCalledTimes(1);
  });

  it('rejects an authorized response whose access key differs from the request', async () => {
    const signingContext = await createTestSigningContext();
    const requestExecutor = jest
      .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
      .mockResolvedValue({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: authorizationResponse(
          '100',
          '12345678901234567',
          undefined,
          true,
          '35260512345678000123650020000004561876543218',
        ),
        status: 200,
      });

    const outcome = await authorizeNFCe({
      document: {
        documentId: ACCESS_KEY,
        environment: 'production',
        version: '4.00',
      },
      environment: 'production',
      signingContext,
      requestExecutor,
      unsignedXml: UNSIGNED_NFE_XML,
      csc: { cscId: '000002', cscToken: 'test-token' },
    });

    expect(outcome.classification).toBe('protocol-error');
    expect(outcome.qrCodeUrl).toBeUndefined();
    expect(requestExecutor).toHaveBeenCalledTimes(1);
  });
});

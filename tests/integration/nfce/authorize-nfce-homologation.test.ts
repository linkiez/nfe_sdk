import * as publicApi from '../../../src/index';
import type { NFCeAuthorizationOutcome } from '../../../src/canonical/nfce/contracts';

import { expectNFCeAuthorizedOutcome } from '../../config/nfce-assertions';
import {
  expectSoapEnvelopeToContainBodyElement,
  expectSoapEnvelopeToContainStatusCode,
} from '../../config/soap-transport-assertions';
import {
  type FixtureNFCeAuthorizationRequest,
  loadNFCeJsonFixture,
  loadNFCeTextFixture,
} from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';
import { createSigningContext, authorizeNFCe } from '../../../src/index';

type HomologationNFCeAuthorizationRequest = Omit<
  FixtureNFCeAuthorizationRequest,
  'document' | 'environment'
> & {
  document: {
    documentId: string;
    environment: 'homologation';
    version: '4.00';
  };
  environment: 'homologation';
};

type AuthorizeNFCe = (input: {
  document: {
    documentId: string;
    environment: 'homologation';
    version: '4.00';
  };
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-authorization';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  signingContext: unknown;
  timeoutMs: number;
}) => Promise<NFCeAuthorizationOutcome>;

describe('authorizeNFCe homologation integration', () => {
  it('authorizes a supported single NFC-e document through the root facade', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFCe = (publicApi as Record<string, unknown>)
      .authorizeNFCe as AuthorizeNFCe | undefined;
    const input = loadNFCeJsonFixture<HomologationNFCeAuthorizationRequest>(
      'sp-homologation-input.json',
    );
    const responseXml = loadNFCeTextFixture(
      'sp-homologation-response-authorized.xml',
    );
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let capturedRequestEnvelopeXml = '';

    expect(typeof authorizeNFCe).toBe('function');

    const outcome = await authorizeNFCe?.({
      ...input,
      requestExecutor: async ({ requestXml }) => {
        capturedRequestEnvelopeXml = requestXml;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      signingContext,
      timeoutMs: 5000,
    });

    expectNFCeAuthorizedOutcome(outcome!, '135190000000001');
    expect(outcome?.transportOutcome?.classification).toBe('success');
    expect(outcome?.transportOutcome?.applicationStatusCode).toBe('100');
    expect(outcome?.transportOutcome?.evidence.endpointUrl).toBeTruthy();
    expect(outcome?.transportOutcome?.evidence.requestEnvelopeXml).toBe(
      capturedRequestEnvelopeXml,
    );
    expectSoapEnvelopeToContainBodyElement(
      outcome?.transportOutcome?.evidence.requestEnvelopeXml ?? '',
      'enviNFe',
    );
    expectSoapEnvelopeToContainStatusCode(
      outcome?.transportOutcome?.evidence.responseEnvelopeXml ?? '',
      '100',
    );
  });

  it('associates a homologation QR URL only with the authorized model 65 document', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    const accessKey = '35260512345678000123650010000001231123456781';
    const outcome = await authorizeNFCe({
      document: {
        documentId: accessKey,
        environment: 'homologation',
        version: '4.00',
      },
      environment: 'homologation',
      signingContext,
      csc: { cscId: '000001', cscToken: 'test-token' },
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>2</tpAmb><cStat>100</cStat><xMotivo>Autorizado</xMotivo><protNFe><infProt><chNFe>' +
          accessKey +
          '</chNFe><nProt>135190000000001</nProt></infProt></protNFe></retEnviNFe></soap:Body></soap:Envelope>',
        status: 200,
      }),
    });

    expect(outcome.classification).toBe('authorized');
    expect(outcome.qrCodeUrl).toBe(
      `https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=${accessKey}|3|2`,
    );
    expect(JSON.stringify(outcome)).not.toContain('test-token');
  });
});

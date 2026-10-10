import * as publicApi from '../../src/index';

import {
  expectSoapEnvelopeToContainBodyElement,
  expectSoapEnvelopeToContainStatusCode,
} from '../config/soap-transport-assertions';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';
import {
  loadNFeOperationalJsonFixture,
  loadNFeOperationalTextFixture,
} from '../fixtures/nfe-operational/load-nfe-operational-fixture';
import { buildAuthorizeNFeSingleInput } from '../fixtures/nfe/build-nfe-fixtures';

type AuthorizeNFe = (input: {
  environment: 'homologation' | 'production';
  documents: {
    kind: 'single-document';
    payload: {
      documentId: string;
      environment: 'homologation' | 'production';
      payload?: {
        cUF?: string;
      };
      version: '4.00';
    };
  };
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
}) => Promise<{
  classification: string;
  coverageBoundary?: {
    code: string;
    contingencyEnvironment?: string;
  };
  documentStatuses: readonly { documentId: string }[];
  protocolNumber?: string;
  receiptNumber?: string;
  nextAction?: 'reconcileNFeReceipt';
  transportOutcome: {
    applicationStatusCode?: string;
    classification: string;
    environment: string;
    evidence: {
      endpointUrl: string;
      httpStatus?: number;
      provider: string;
      requestEnvelopeXml: string;
      responseEnvelopeXml?: string;
    };
  };
}>;

const SP_ACCESS_KEY = '35261000000000000000550010000000011000000010';

async function executeProductionAuthorization(
  requestExecutor: Parameters<AuthorizeNFe>[0]['requestExecutor'],
): ReturnType<AuthorizeNFe> {
  const fixtureSource = createTestA1FixtureSource();
  const createSigningContext = (publicApi as Record<string, unknown>)
    .createSigningContext as
    | ((input: {
        passphrase: string;
        source: { contentBase64: string; type: 'in-memory-content' };
      }) => Promise<unknown>)
    | undefined;
  const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
    | AuthorizeNFe
    | undefined;
  const signingContext = await createSigningContext?.({
    passphrase: fixtureSource.passphrase,
    source: {
      contentBase64: fixtureSource.certificateBase64,
      type: 'in-memory-content',
    },
  });

  if (!authorizeNFe) {
    throw new Error('authorizeNFe root facade is unavailable.');
  }

  return authorizeNFe({
    ...buildAuthorizeNFeSingleInput({ cUF: '35', documentId: SP_ACCESS_KEY }),
    requestExecutor,
    signingContext,
    timeoutMs: 5000,
  });
}

type ExecuteNFeSoapService = (input: {
  authorizer: 'SP';
  environment: 'production';
  payloadXml: string;
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
  service: 'nfe-authorization';
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  environment: string;
  evidence: {
    durationMs?: number;
    endpointUrl: string;
    httpStatus?: number;
    provider: string;
    requestEnvelopeXml: string;
    responseEnvelopeXml?: string;
  };
  service: string;
}>;

describe('authorizeNFe single integration', () => {
  it('authorizes a supported single canonical NFe through the root facade', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | AuthorizeNFe
      | undefined;
    const input = loadNFeOperationalJsonFixture<{
      environment: 'homologation';
      documents: {
        kind: 'single-document';
        payload: {
          documentId: string;
          environment: 'homologation';
          version: '4.00';
        };
      };
    }>('authorization/single-input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'authorization/single-response-authorized.xml',
    );
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let capturedRequestEnvelopeXml = '';

    expect(typeof authorizeNFe).toBe('function');

    const outcome = await authorizeNFe?.({
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

    expect(outcome?.classification).toBe('authorized');
    expect(outcome?.protocolNumber).toBe('135190000000001');
    expect(outcome?.documentStatuses).toEqual([
      {
        documentId: 'NFE-OPER-001',
      },
    ]);
    expect(outcome?.transportOutcome.classification).toBe('success');
    expect(outcome?.transportOutcome.applicationStatusCode).toBe('100');
    expect(outcome?.transportOutcome.evidence.endpointUrl).toBeTruthy();
    expect(outcome?.transportOutcome.evidence.requestEnvelopeXml).toBe(
      capturedRequestEnvelopeXml,
    );
    expectSoapEnvelopeToContainBodyElement(
      outcome?.transportOutcome.evidence.requestEnvelopeXml ?? '',
      'enviNFe',
    );
    expectSoapEnvelopeToContainStatusCode(
      outcome?.transportOutcome.evidence.responseEnvelopeXml ?? '',
      '100',
    );
  });

  it('returns a contingency boundary instead of transport when production routing falls into SVC-AN', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | AuthorizeNFe
      | undefined;
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    const requestExecutor = jest.fn();
    const outcome = await authorizeNFe?.({
      ...buildAuthorizeNFeSingleInput({ cUF: '33' }),
      requestExecutor,
      signingContext,
      timeoutMs: 5000,
    });

    expect(requestExecutor).not.toHaveBeenCalled();
    expect(outcome?.classification).toBe('contingency-boundary');
    expect(outcome?.coverageBoundary).toEqual(
      expect.objectContaining({
        code: 'nfe-contingency-boundary',
        contingencyEnvironment: 'SVC-AN',
      }),
    );
    expect(outcome?.transportOutcome.classification).toBe('usage-error');
  });

  it('redacts production authorization secrets from envelope evidence and preserves transport metadata', async () => {
    const executeNFeSoapService = (publicApi as Record<string, unknown>)
      .executeNFeSoapService as ExecuteNFeSoapService | undefined;
    const sensitiveValues = [
      'AUTH_CREDENTIAL_MARKER',
      'AUTH_CERTIFICATE_MARKER',
      'AUTH_PRIVATE_KEY_MARKER',
      'RESPONSE_CREDENTIAL_MARKER',
      'RESPONSE_CERTIFICATE_MARKER',
      'RESPONSE_PRIVATE_KEY_MARKER',
    ];
    const responseXml =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe><tpAmb>1</tpAmb><cStat>100</cStat><nProt>135190000000001</nProt><Password>RESPONSE_CREDENTIAL_MARKER</Password><X509Certificate>RESPONSE_CERTIFICATE_MARKER</X509Certificate><PrivateKey>RESPONSE_PRIVATE_KEY_MARKER</PrivateKey></retEnviNFe></soap:Body></soap:Envelope>';

    const outcome = await executeNFeSoapService?.({
      authorizer: 'SP',
      environment: 'production',
      payloadXml:
        '<enviNFe><Password>AUTH_CREDENTIAL_MARKER</Password><X509Certificate>AUTH_CERTIFICATE_MARKER</X509Certificate><PrivateKey>AUTH_PRIVATE_KEY_MARKER</PrivateKey></enviNFe>',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      service: 'nfe-authorization',
      timeoutMs: 5000,
    });
    const envelopeEvidence = [
      outcome?.evidence.requestEnvelopeXml,
      outcome?.evidence.responseEnvelopeXml,
    ].join('\n');

    for (const sensitiveValue of sensitiveValues) {
      expect(envelopeEvidence).not.toContain(sensitiveValue);
    }
    expect(outcome).toMatchObject({
      applicationStatusCode: '100',
      classification: 'success',
      environment: 'production',
      evidence: {
        endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
        httpStatus: 200,
        provider: 'SP',
      },
      service: 'nfe-authorization',
    });
    expect(outcome?.evidence.durationMs).toEqual(expect.any(Number));
  });

  it('authorizes an SP production NF-e through the official endpoint', async () => {
    const responseXml = loadNFeOperationalTextFixture(
      'authorization/single-response-production-authorized.xml',
    );
    let capturedEndpointUrl = '';
    const outcome = await executeProductionAuthorization(
      async ({ endpointUrl }) => {
        capturedEndpointUrl = endpointUrl;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
    );

    expect(outcome?.classification).toBe('authorized');
    expect(outcome?.protocolNumber).toBe('135260000000001');
    expect(capturedEndpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    );
    expect(outcome?.transportOutcome).toMatchObject({
      environment: 'production',
      evidence: { endpointUrl: capturedEndpointUrl, provider: 'SP' },
    });
  });

  it('returns explicit rejection and receipt outcomes for SP production responses', async () => {
    const rejectedXml = loadNFeOperationalTextFixture(
      'authorization/single-response-production-rejected.xml',
    );
    const receivedXml = loadNFeOperationalTextFixture(
      'authorization/single-response-production-received.xml',
    );
    const rejectedOutcome = await executeProductionAuthorization(async () => ({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml: rejectedXml,
      status: 200,
    }));
    const receivedOutcome = await executeProductionAuthorization(async () => ({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml: receivedXml,
      status: 200,
    }));

    expect(rejectedOutcome?.classification).toBe('rejected');
    expect(receivedOutcome?.classification).toBe('received');
    expect(receivedOutcome?.receiptNumber).toBe('135260000000002');
    expect(receivedOutcome?.nextAction).toBe('reconcileNFeReceipt');
  });

  it('classifies production timeout and service unavailability distinctly', async () => {
    const unavailableXml = loadNFeOperationalTextFixture(
      'authorization/single-response-production-unavailable.xml',
    );
    const timeoutError = new Error('The operation was aborted.');
    timeoutError.name = 'AbortError';
    const timeoutOutcome = await executeProductionAuthorization(async () => {
      throw timeoutError;
    });
    const unavailableOutcome = await executeProductionAuthorization(
      async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: unavailableXml,
        status: 200,
      }),
    );

    expect(timeoutOutcome?.classification).toBe('timeout');
    expect(unavailableOutcome?.classification).toBe('unavailable');
  });

  it.each([
    'authorization/single-response-production-wrong-environment.xml',
    'authorization/single-response-production-malformed.xml',
    'authorization/single-response-production-authorized-missing-protocol.xml',
    'authorization/single-response-production-authorized-104-missing-protocol.xml',
    'authorization/single-response-production-received-missing-receipt.xml',
  ])(
    'rejects contradictory or malformed production response %s',
    async (fixture) => {
      const responseXml = loadNFeOperationalTextFixture(fixture);
      const outcome = await executeProductionAuthorization(async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }));

      expect(outcome?.classification).toBe('protocol-error');
    },
  );
});

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
  transportOutcome: {
    applicationStatusCode?: string;
    classification: string;
    evidence: {
      endpointUrl: string;
      requestEnvelopeXml: string;
      responseEnvelopeXml?: string;
    };
  };
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
});

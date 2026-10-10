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

type AuthorizeNFeBatch = (input: {
  environment: 'homologation' | 'production';
  documents: {
    kind: 'batch';
    payload: {
      batchId: string;
      documents: readonly {
        documentId: string;
        environment: 'homologation' | 'production';
        payload?: { cUF: string };
        version: '4.00';
      }[];
      environment: 'homologation' | 'production';
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
  documentStatuses: readonly { documentId: string }[];
  receiptNumber?: string;
  transportOutcome: {
    applicationStatusCode?: string;
    classification: string;
    evidence: {
      endpointUrl: string;
      provider?: string;
      requestEnvelopeXml: string;
      responseEnvelopeXml?: string;
    };
  };
}>;

describe('authorizeNFe batch integration', () => {
  it('returns an intermediate received outcome for a supported batch authorization', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | AuthorizeNFeBatch
      | undefined;
    const input = loadNFeOperationalJsonFixture<{
      environment: 'homologation' | 'production';
      documents: {
        kind: 'batch';
        payload: {
          batchId: string;
          documents: readonly {
            documentId: string;
            environment: 'homologation';
            version: '4.00';
          }[];
          environment: 'homologation';
          version: '4.00';
        };
      };
    }>('authorization/batch-input.json');
    const responseXml = loadNFeOperationalTextFixture(
      'authorization/batch-response-received.xml',
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

    expect(outcome?.classification).toBe('received');
    expect(outcome?.receiptNumber).toBe('135190000000002');
    expect(outcome?.documentStatuses).toEqual([
      {
        documentId: 'NFE-OPER-001',
      },
      {
        documentId: 'NFE-OPER-002',
      },
    ]);
    expect(outcome?.transportOutcome.classification).toBe('success');
    expect(outcome?.transportOutcome.applicationStatusCode).toBe('103');
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
      '103',
    );
  });

  it('routes an SP production batch to the normal SP authorizer and returns its receipt', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | AuthorizeNFeBatch
      | undefined;
    const responseXml = loadNFeOperationalTextFixture(
      'authorization/batch-response-production-received.xml',
    );
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    let capturedEndpointUrl = '';

    const outcome = await authorizeNFe?.({
      environment: 'production',
      documents: {
        kind: 'batch',
        payload: {
          batchId: 'BATCH-SP-PRODUCTION',
          documents: [
            {
              documentId: `35${'0'.repeat(42)}`,
              environment: 'production',
              version: '4.00',
            },
            {
              documentId: `35${'1'.repeat(42)}`,
              environment: 'production',
              version: '4.00',
            },
          ],
          environment: 'production',
          version: '4.00',
        },
      },
      requestExecutor: async ({ endpointUrl }) => {
        capturedEndpointUrl = endpointUrl;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      signingContext,
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('received');
    expect(outcome?.receiptNumber).toBe('135260000000002');
    expect(outcome?.documentStatuses).toHaveLength(2);
    expect(capturedEndpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    );
    expect(outcome?.transportOutcome).toMatchObject({
      environment: 'production',
      evidence: { endpointUrl: capturedEndpointUrl, provider: 'SP' },
    });
  });
});

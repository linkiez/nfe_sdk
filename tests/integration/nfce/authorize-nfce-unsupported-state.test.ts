import * as publicApi from '../../../src/index';

import { loadNFCeJsonFixture } from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

type UnsupportedStateAuthorizationRequest = {
  document: {
    documentId: string;
    environment: 'homologation';
    version: '4.00';
  };
  environment: 'homologation';
};

describe('authorizeNFCe unsupported-state integration', () => {
  it('returns unsupported-state without remote transport for a non-pilot UF', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFCe = (publicApi as Record<string, unknown>).authorizeNFCe as
      | ((input: {
          document: {
            documentId: string;
            environment: 'homologation';
            version: '4.00';
          };
          environment: 'homologation';
          requestExecutor: () => Promise<unknown>;
          signingContext: unknown;
          timeoutMs: number;
        }) => Promise<{
          acceptedForTransport: boolean;
          classification: string;
          coverageBoundary?: {
            code: string;
            message: string;
            uf?: string;
          };
          transportOutcome?: unknown;
          validationFailures: unknown[];
        }>)
      | undefined;
    const input = loadNFCeJsonFixture<UnsupportedStateAuthorizationRequest>(
      'non-pilot-uf-input.json',
    );
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let transportWasCalled = false;

    const outcome = await authorizeNFCe?.({
      ...input,
      requestExecutor: async () => {
        transportWasCalled = true;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: '<unused />',
          status: 200,
        };
      },
      signingContext,
      timeoutMs: 5000,
    });

    expect(outcome?.acceptedForTransport).toBe(false);
    expect(outcome?.classification).toBe('unsupported-state');
    expect(outcome?.coverageBoundary?.code).toBe('nfce-unsupported-state');
    expect(outcome?.coverageBoundary?.uf).toBe('RJ');
    expect(outcome?.coverageBoundary?.message).toContain('SP pilot profile');
    expect(outcome?.transportOutcome).toBeUndefined();
    expect(outcome?.validationFailures).toEqual([]);
    expect(transportWasCalled).toBe(false);
  });
});
import * as publicApi from '../../../src/index';

import { expectNFeContingencyBoundary } from '../../config/nfe-contingency-assertions';
import { buildAuthorizeNFeSingleInput } from '../../fixtures/nfe/build-nfe-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

describe('authorizeNFe contingency boundaries', () => {
  it('returns an observable SVC-AN boundary for production requests routed through delegated UFs', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const requestExecutor = jest.fn();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          environment: 'production';
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string };
              version: '4.00';
            };
          };
          requestExecutor: typeof requestExecutor;
          signingContext: unknown;
          timeoutMs: number;
        }) => Promise<{
          classification: string;
          coverageBoundary?: {
            code: string;
            contingencyEnvironment?: string;
            message: string;
            retryable: boolean;
          };
          transportOutcome: {
            classification: string;
          };
        }>)
      | undefined;
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    const outcome = await authorizeNFe?.({
      ...buildAuthorizeNFeSingleInput({ cUF: '33' }),
      requestExecutor,
      signingContext,
      timeoutMs: 5000,
    });

    expect(requestExecutor).not.toHaveBeenCalled();
    expect(outcome).toBeDefined();
    expectNFeContingencyBoundary(outcome!, 'SVC-AN');
  });

  it('returns an observable SVC-RS boundary for production requests routed through Santa Catarina', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const requestExecutor = jest.fn();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          environment: 'production';
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string };
              version: '4.00';
            };
          };
          requestExecutor: typeof requestExecutor;
          signingContext: unknown;
          timeoutMs: number;
        }) => Promise<{
          classification: string;
          coverageBoundary?: {
            code: string;
            contingencyEnvironment?: string;
            message: string;
            retryable: boolean;
          };
          transportOutcome: {
            classification: string;
          };
        }>)
      | undefined;
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    const outcome = await authorizeNFe?.({
      ...buildAuthorizeNFeSingleInput({ cUF: '42' }),
      requestExecutor,
      signingContext,
      timeoutMs: 5000,
    });

    expect(requestExecutor).not.toHaveBeenCalled();
    expect(outcome).toBeDefined();
    expectNFeContingencyBoundary(outcome!, 'SVC-RS');
  });
});
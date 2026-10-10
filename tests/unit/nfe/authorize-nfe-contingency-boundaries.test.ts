import * as publicApi from '../../../src/index';

import { expectNFeContingencyBoundary } from '../../config/nfe-contingency-assertions';
import { buildAuthorizeNFeSingleInput } from '../../fixtures/nfe/build-nfe-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

type AuthorizeNFe = (input: {
  environment: string;
  documents: unknown;
  requestExecutor?: jest.Mock;
  signingContext: unknown;
  timeoutMs: number;
}) => Promise<{
  classification: string;
  coverageBoundary?: { contingencyEnvironment?: string };
}>;

const INVALID_PRODUCTION_IDENTITY_CASES = [
  {
    name: 'missing issuer UF and access key',
    input: {
      ...buildAuthorizeNFeSingleInput({ cUF: '35' }),
      documents: {
        kind: 'single-document',
        payload: {
          documentId: 'NFE-MISSING-ISSUER-IDENTITY',
          environment: 'production',
          version: '4.00',
        },
      },
    },
  },
  {
    name: 'malformed issuer UF',
    input: buildAuthorizeNFeSingleInput({
      cUF: '3X',
      documentId: 'NFE-MALFORMED-ISSUER-UF',
    }),
  },
  {
    name: 'conflicting issuer UF and access key',
    input: buildAuthorizeNFeSingleInput({
      cUF: '35',
      documentId: `33${'0'.repeat(42)}`,
    }),
  },
  {
    name: 'mixed issuer UFs in a batch',
    input: {
      environment: 'production',
      documents: {
        kind: 'batch',
        payload: {
          batchId: 'BATCH-SP-MIXED-UF',
          environment: 'production',
          version: '4.00',
          documents: [
            {
              documentId: `35${'0'.repeat(42)}`,
              environment: 'production',
              payload: { cUF: '35' },
              version: '4.00',
            },
            {
              documentId: `33${'0'.repeat(42)}`,
              environment: 'production',
              payload: { cUF: '33' },
              version: '4.00',
            },
          ],
        },
      },
    },
  },
] as const;

async function createSigningContextForTest(): Promise<unknown> {
  const fixtureSource = createTestA1FixtureSource();
  const createSigningContext = (publicApi as Record<string, unknown>)
    .createSigningContext as
    | ((input: {
        passphrase: string;
        source: { contentBase64: string; type: 'in-memory-content' };
      }) => Promise<unknown>)
    | undefined;

  return createSigningContext?.({
    passphrase: fixtureSource.passphrase,
    source: {
      contentBase64: fixtureSource.certificateBase64,
      type: 'in-memory-content',
    },
  });
}

function getAuthorizeNFe(): AuthorizeNFe | undefined {
  return (publicApi as Record<string, unknown>).authorizeNFe as
    | AuthorizeNFe
    | undefined;
}

describe('authorizeNFe contingency boundaries', () => {
  it.each(INVALID_PRODUCTION_IDENTITY_CASES)(
    'rejects $name before transport',
    async ({ input }) => {
      const authorizeNFe = getAuthorizeNFe();
      const requestExecutor = jest.fn();

      await expect(
        authorizeNFe?.({
          ...input,
          requestExecutor,
          signingContext: await createSigningContextForTest(),
          timeoutMs: 5000,
        }),
      ).rejects.toThrow(/issuer identity/i);

      expect(requestExecutor).not.toHaveBeenCalled();
    },
  );

  it('requires an injected executor for SP production authorization', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const input = buildAuthorizeNFeSingleInput({
      cUF: '35',
      documentId: `35${'0'.repeat(42)}`,
    });

    await expect(
      authorizeNFe?.({
        ...input,
        signingContext: await createSigningContextForTest(),
        timeoutMs: 5000,
      }),
    ).rejects.toThrow(/requestExecutor/i);
  });

  it('rejects a non-SP issuer outside the existing contingency boundaries', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn();
    const input = buildAuthorizeNFeSingleInput({
      cUF: '41',
      documentId: `41${'0'.repeat(42)}`,
    });

    await expect(
      authorizeNFe?.({
        ...input,
        requestExecutor,
        signingContext: await createSigningContextForTest(),
        timeoutMs: 5000,
      }),
    ).rejects.toThrow(/issuer UF 35/i);

    expect(requestExecutor).not.toHaveBeenCalled();
  });

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
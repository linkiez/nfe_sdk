import * as publicApi from '../../../src/index';

import { expectNFeContingencyBoundary } from '../../config/nfe-contingency-assertions';
import { buildAuthorizeNFeSingleInput } from '../../fixtures/nfe/build-nfe-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

type AuthorizeNFe = (input: {
  contingency?: {
    documentKey?: string;
    mode: 'svc-an' | 'epec' | 'fs-da';
    previousSubmission?: { classification: string; documentKey: string };
  };
  environment: string;
  documents: unknown;
  requestExecutor?: jest.Mock;
  signingContext: unknown;
  timeoutMs: number;
}) => Promise<{
  classification: string;
  coverageBoundary?: { contingencyEnvironment?: string };
  contingencyState?: string;
  executionMode?: string;
  failureReason?: string;
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

  it('keeps FS-DA as an explicit boundary and sends no authorization request', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn(async () => ({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml: '<retEnviNFe><tpAmb>1</tpAmb><cStat>104</cStat></retEnviNFe>',
      status: 200,
    }));
    const input = buildAuthorizeNFeSingleInput({
      cUF: '35',
      documentId: `35${'0'.repeat(42)}`,
    });

    const outcome = await authorizeNFe?.({
      ...input,
      contingency: { mode: 'fs-da' },
      requestExecutor,
      signingContext: await createSigningContextForTest(),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(outcome?.failureReason).toMatch(/FS-DA|assisted|unverified/i);
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('does not start contingency after an uncertain normal authorization', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn(async () => {
      throw new Error('connection timed out');
    });
    const input = buildAuthorizeNFeSingleInput({
      cUF: '35',
      documentId: `35${'0'.repeat(42)}`,
    });

    await expect(
      authorizeNFe?.({
        ...input,
        requestExecutor,
        signingContext: await createSigningContextForTest(),
        timeoutMs: 5000,
      }),
    ).rejects.toThrow(/connection timed out/i);

    expect(requestExecutor).toHaveBeenCalledTimes(1);
  });

  it('rejects contingency evidence from the wrong environment before transport', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn();
    const input = buildAuthorizeNFeSingleInput({
      cUF: '35',
      documentId: `35${'0'.repeat(42)}`,
      environment: 'homologation',
    });

    const outcome = await authorizeNFe?.({
      ...input,
      contingency: { mode: 'svc-an' },
      requestExecutor,
      signingContext: await createSigningContextForTest(),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(outcome?.failureReason).toMatch(/only in production/i);
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('rejects a contingency key that conflicts with the submitted NF-e identity', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn();
    const documentKey = `35${'0'.repeat(42)}`;

    const outcome = await authorizeNFe?.({
      ...buildAuthorizeNFeSingleInput({ cUF: '35', documentId: documentKey }),
      contingency: { documentKey: `35${'1'.repeat(42)}`, mode: 'svc-an' },
      requestExecutor,
      signingContext: await createSigningContextForTest(),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('blocks the same access key after an uncertain prior submission', async () => {
    const authorizeNFe = getAuthorizeNFe();
    const requestExecutor = jest.fn();
    const documentKey = `35${'0'.repeat(42)}`;

    const outcome = await authorizeNFe?.({
      ...buildAuthorizeNFeSingleInput({ cUF: '35', documentId: documentKey }),
      contingency: {
        mode: 'svc-an',
        previousSubmission: { classification: 'timeout', documentKey },
      },
      requestExecutor,
      signingContext: await createSigningContextForTest(),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(outcome?.contingencyState).toBe('inconclusive');
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
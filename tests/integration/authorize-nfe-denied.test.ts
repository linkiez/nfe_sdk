import * as publicApi from '../../src/index';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';
import { loadNFeOperationalTextFixture } from '../fixtures/nfe-operational/load-nfe-operational-fixture';
import { buildAuthorizeNFeSingleInput } from '../fixtures/nfe/build-nfe-fixtures';

type Outcome = {
  classification: string;
  failureReason?: string;
  nextAction?: string;
  protocolNumber?: string;
  transportOutcome: { applicationStatusCode?: string };
};

const SP_ACCESS_KEY = '35261000000000000000550010000000011000000010';

async function authorizeWith(responseXml: string): Promise<Outcome> {
  const fixtureSource = createTestA1FixtureSource();
  const signingContext = await publicApi.createSigningContext({
    passphrase: fixtureSource.passphrase,
    source: {
      contentBase64: fixtureSource.certificateBase64,
      type: 'in-memory-content',
    },
  });

  return (await (
    publicApi.authorizeNFe as unknown as (input: unknown) => Promise<Outcome>
  )({
    ...buildAuthorizeNFeSingleInput({ cUF: '35', documentId: SP_ACCESS_KEY }),
    requestExecutor: async () => ({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml,
      status: 200,
    }),
    signingContext,
    timeoutMs: 5000,
  })) as Outcome;
}

describe('authorizeNFe denied classification', () => {
  it.each(['110', '301', '302'])(
    'classifies infProt cStat %s as denied and keeps the protocol',
    async (cStat) => {
      const outcome = await authorizeWith(
        loadNFeOperationalTextFixture(
          `authorization/single-response-production-denied-${cStat}.xml`,
        ),
      );

      expect(outcome.classification).toBe('denied');
      expect(outcome.protocolNumber).toBe('135260000000001');
      expect(outcome.nextAction).toBeUndefined();
    },
  );

  it('classifies a denied top-level cStat as denied too', async () => {
    const xml = loadNFeOperationalTextFixture(
      'authorization/single-response-production-authorized.xml',
    ).replace('<cStat>100</cStat>', '<cStat>110</cStat>');

    expect((await authorizeWith(xml)).classification).toBe('denied');
  });

  it('keeps authorized and rejected outcomes unchanged', async () => {
    const authorized = await authorizeWith(
      loadNFeOperationalTextFixture(
        'authorization/single-response-production-authorized.xml',
      ),
    );
    const rejected = await authorizeWith(
      loadNFeOperationalTextFixture(
        'authorization/single-response-production-rejected.xml',
      ),
    );

    expect(authorized.classification).toBe('authorized');
    expect(rejected.classification).toBe('rejected');
  });

  it('classifies a processed batch (104) whose infProt carries a rejection without nProt as rejected', async () => {
    const outcome = await authorizeWith(
      loadNFeOperationalTextFixture(
        'authorization/single-response-production-batch-processed-schema-rejection.xml',
      ),
    );

    expect(outcome.classification).toBe('rejected');
    expect(outcome.protocolNumber).toBeUndefined();
    expect(outcome.failureReason).toContain('Schema');
  });
});

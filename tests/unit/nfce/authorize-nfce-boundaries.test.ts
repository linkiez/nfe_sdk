import { createSigningContext } from '../../../src/index';
import { authorizeNFCe } from '../../../src/canonical/nfce/authorize-nfce';
import { getNFCeAuthorizationClassifications } from '../../../src/canonical/nfce/contracts';

import { buildFixtureNFCeAuthorizationRequest } from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

describe('authorizeNFCe boundaries', () => {
  it('publishes both unsupported-state and unsupported-scope in the NFC-e taxonomy', () => {
    expect(getNFCeAuthorizationClassifications()).toEqual(
      expect.arrayContaining(['unsupported-scope', 'unsupported-state']),
    );
  });

  it('returns unsupported-state before transport for a non-pilot UF', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let transportWasCalled = false;

    const outcome = await authorizeNFCe({
      ...buildFixtureNFCeAuthorizationRequest({
        document: {
          documentId: '33190500000000000000550010000000011000000010',
          environment: 'homologation',
          version: '4.00',
        },
      }),
      requestExecutor: async () => {
        transportWasCalled = true;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: '<unused />',
          status: 200,
        };
      },
      signingContext,
    });

    expect(outcome.acceptedForTransport).toBe(false);
    expect(outcome.classification).toBe('unsupported-state');
    expect(outcome.coverageBoundary).toEqual({
      classification: 'unsupported-state',
      code: 'nfce-unsupported-state',
      message:
        'authorizeNFCe currently supports only the SP and PR promoted cohort for homologation NFC-e operations.',
      retryable: false,
      uf: 'RJ',
    });
    expect(outcome.validationFailures).toEqual([]);
    expect(transportWasCalled).toBe(false);
  });
});

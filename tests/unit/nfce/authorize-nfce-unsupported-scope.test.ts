import { createSigningContext } from '../../../src/index';
import { authorizeNFCe } from '../../../src/canonical/nfce/authorize-nfce';

import { buildFixtureNFCeAuthorizationRequest } from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

describe('authorizeNFCe unsupported scope', () => {
  it('returns unsupported-scope before transport when a deferred capability is requested', async () => {
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
      ...buildFixtureNFCeAuthorizationRequest(),
      requestedCapabilities: ['qr-code'],
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
    expect(outcome.classification).toBe('unsupported-scope');
    expect(outcome.coverageBoundary).toEqual({
      classification: 'unsupported-scope',
      code: 'nfce-unsupported-scope',
      message:
        'authorizeNFCe does not yet support the requested NFC-e capabilities in this slice: QR Code.',
      retryable: false,
    });
    expect(outcome.validationFailures).toEqual([]);
    expect(transportWasCalled).toBe(false);
  });
});
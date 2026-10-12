import { createSigningContext } from '../../../src/index';
import { authorizeNFCe } from '../../../src/canonical/nfce/authorize-nfce';
import { NFCeOperationalUnsupportedScopeError } from '../../../src/canonical/nfce/errors';

import { buildFixtureNFCeAuthorizationRequest } from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

describe('authorizeNFCe validation', () => {
  it('rejects unsupported environments before transport', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    await expect(
      authorizeNFCe({
        ...buildFixtureNFCeAuthorizationRequest({
          document: {
            documentId: 'NFCE-VALIDATION-001',
            environment: 'production',
            version: '4.00',
          },
          environment: 'production',
        }),
        environment: 'sandbox',
        signingContext,
      }),
    ).rejects.toThrow(NFCeOperationalUnsupportedScopeError);
  });
});

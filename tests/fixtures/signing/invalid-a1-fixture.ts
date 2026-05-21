import type { SigningFixtureSource } from './test-a1-fixture';

const INVALID_FIXTURE_PASSPHRASE = ['invalid', 'passphrase'].join('-');

export function createInvalidA1FixtureSource(): SigningFixtureSource {
  return {
    certificateBase64: 'invalid-base64-fixture',
    passphrase: INVALID_FIXTURE_PASSPHRASE,
  };
}

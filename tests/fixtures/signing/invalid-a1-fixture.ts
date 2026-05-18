import type { SigningFixtureSource } from './test-a1-fixture';

export function createInvalidA1FixtureSource(): SigningFixtureSource {
  return {
    certificateBase64: 'invalid-base64-fixture',
    passphrase: 'invalid-passphrase',
  };
}
import * as publicApi from '../../src/index';

import { createInvalidA1FixtureSource } from '../fixtures/signing/invalid-a1-fixture';

describe('signing context inputs', () => {
  it('fails clearly when the in-memory A1 payload is invalid', async () => {
    const invalidFixture = createInvalidA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;

    await expect(
      createSigningContext?.({
        passphrase: invalidFixture.passphrase,
        source: {
          contentBase64: invalidFixture.certificateBase64,
          type: 'in-memory-content',
        },
      }),
    ).rejects.toThrow('could not be parsed');
  });

  it('fails clearly when the file-path A1 source cannot be read', async () => {
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { filePath: string; type: 'file-path' };
        }) => Promise<unknown>)
      | undefined;

    await expect(
      createSigningContext?.({
        passphrase: 'fixture-passphrase',
        source: {
          filePath: '/tmp/does-not-exist-signing-fixture.pfx',
          type: 'file-path',
        },
      }),
    ).rejects.toThrow('could not be read');
  });
});

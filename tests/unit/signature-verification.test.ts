import * as publicApi from '../../src/index';
import { loadSigningTextFixture } from '../fixtures/signing/load-signing-fixture';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('signature verification', () => {
  it('verifies the signed xml before returning it to the caller', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const unsignedXml = loadSigningTextFixture('nfe-unsigned.xml');
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const signNFeXml = (publicApi as Record<string, unknown>).signNFeXml as
      | ((input: {
          signingContext: unknown;
          unsignedXml: string;
        }) => Promise<string>)
      | undefined;

    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    const signedXml = await signNFeXml?.({ signingContext, unsignedXml });

    expect(signedXml).toContain('<SignatureValue>');
    expect(signedXml).toContain('<DigestValue>');
  });
});

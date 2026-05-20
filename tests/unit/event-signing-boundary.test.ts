import * as publicApi from '../../src/index';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('event-signing boundary', () => {
  it('fails explicitly when the event XML does not provide a signable infEvento Id', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const unsignedXml =
      '<?xml version="1.0" encoding="utf-8"?><evento versao="1.00"><infEvento><tpEvento>110110</tpEvento></infEvento></evento>';
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const signEventXml = (publicApi as Record<string, unknown>).signEventXml as
      | ((input: {
          signingContext: unknown;
          unsignedXml: string;
        }) => Promise<string>)
      | undefined;

    expect(signEventXml).toBeDefined();

    if (!createSigningContext || !signEventXml) {
      return;
    }

    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    await expect(
      signEventXml({
        signingContext,
        unsignedXml,
      }),
    ).rejects.toThrow(/infEvento Id|signable/i);
  });
});

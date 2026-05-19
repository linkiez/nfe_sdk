import * as publicApi from '../../../../src/index.js';
import { loadSigningTextFixture } from '../../../fixtures/signing/load-signing-fixture.js';
import { createTestECpfFixtureSource } from '../../../fixtures/signing/ecpf-a1-fixture.js';

describe('e-CPF signing', () => {
  it('createSigningContext succeeds with an e-CPF A1 test fixture (CPF in subject CN)', async () => {
    const fixtureSource = createTestECpfFixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;

    expect(createSigningContext).toBeDefined();

    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    expect(signingContext).toBeDefined();
    expect(typeof signingContext).toBe('object');
  });

  it('signNFeXml succeeds with an e-CPF A1 certificate (no code changes required)', async () => {
    const fixtureSource = createTestECpfFixtureSource();
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

    expect(typeof signedXml).toBe('string');
    expect(signedXml).toContain('<Signature');
    expect(signedXml).toContain('</NFe>');
  });
});

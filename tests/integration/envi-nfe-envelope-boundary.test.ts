import * as publicApi from '../../src/index';
import { loadSigningTextFixture } from '../fixtures/signing/load-signing-fixture';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('enviNFe transport envelope boundary', () => {
  it('keeps enviNFe unsigned while allowing the signed NFe document to be transported', async () => {
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
    const serializeEnviNFeXml = (publicApi as Record<string, unknown>)
      .serializeEnviNFeXml as ((input: unknown) => string) | undefined;
    const createEnviNFe = (publicApi as Record<string, unknown>)
      .createEnviNFe as ((input: unknown) => unknown) | undefined;

    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    const signedXml = await signNFeXml?.({ signingContext, unsignedXml });
    const envelope = createEnviNFe?.({
      batchId: '000000000000001',
      documents: [
        {
          documentId: 'NFe35160512345678000123550010000000011000000011',
          environment: 'homologation',
          version: '4.00',
        },
      ],
      environment: 'homologation',
      version: '4.00',
    });

    expect(signedXml).toContain('<Signature');
    expect(serializeEnviNFeXml?.(envelope)).not.toContain('<Signature');
  });
});

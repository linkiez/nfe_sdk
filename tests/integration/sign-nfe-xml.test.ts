import * as publicApi from '../../src/index';
import {
  expectXmlToContainSignature,
  expectXmlToMatchSignedStructure,
  expectXmlToReferenceDocumentId,
} from '../config/xml-signature-assertions';
import {
  loadSigningJsonFixture,
  loadSigningTextFixture,
} from '../fixtures/signing/load-signing-fixture';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('signNFeXml integration', () => {
  it('signs a supported NFe XML and returns verified signed XML', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const unsignedXml = loadSigningTextFixture('nfe-unsigned.xml');
    const signedStructure = loadSigningJsonFixture<{
      documentId: string;
      requiredFragments: string[];
    }>('nfe-signed-structure.json');
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
    expectXmlToContainSignature(signedXml ?? '');
    expectXmlToMatchSignedStructure(
      signedXml ?? '',
      signedStructure.requiredFragments,
    );
    expectXmlToReferenceDocumentId(signedXml ?? '', signedStructure.documentId);
  });
});

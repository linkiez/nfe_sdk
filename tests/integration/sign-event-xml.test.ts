import * as publicApi from '../../src/index';
import {
  expectXmlToContainSignature,
  expectXmlToReferenceEventId,
} from '../config/xml-event-signature-assertions';
import { loadEventSigningTextFixture } from '../fixtures/signing/load-event-signing-fixture';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('signEventXml integration', () => {
  it('signs a supported event XML and returns verified signed XML', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const unsignedXml = loadEventSigningTextFixture('event-cce-unsigned.xml');
    const documentId = 'ID1101103516051234567800012355001000000001100000001101';
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
    const signedXml = await signEventXml({ signingContext, unsignedXml });

    expect(typeof signedXml).toBe('string');
    expectXmlToContainSignature(signedXml);
    expectXmlToReferenceEventId(signedXml, documentId);
    expect(signedXml).toContain(
      '<infEvento Id="ID1101103516051234567800012355001000000001100000001101"',
    );
  });
});

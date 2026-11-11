import { createSigningContext, signNFeXml } from '../../src/index';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';
import { loadSigningTextFixture } from '../fixtures/signing/load-signing-fixture';

it('signs the same XML to identical bytes (the authorized nfeProc can be recovered by rebuilding the NFe)', async () => {
  const src = createTestA1FixtureSource();
  const ctx = await createSigningContext({
    passphrase: src.passphrase,
    source: { contentBase64: src.certificateBase64, type: 'in-memory-content' },
  });
  const unsignedXml = loadSigningTextFixture('nfe-unsigned.xml');
  const a = await signNFeXml({ signingContext: ctx, unsignedXml });
  const ctx2 = await createSigningContext({
    passphrase: src.passphrase,
    source: { contentBase64: src.certificateBase64, type: 'in-memory-content' },
  });
  const b = await signNFeXml({ signingContext: ctx2, unsignedXml });
  expect(a).toBe(b);
});

import {
  buildNFeDocument,
  computeNFeAccessKey,
  BuildNFeDocumentError,
  createSigningContext,
  signNFeXml,
  validateNFeXsd,
} from '../../src/index';

import { baseDraft } from '../fixtures/nfe-builder/reference-drafts';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('buildNFeDocument access key and signing', () => {
  jest.setTimeout(60_000);

  it('derives the access key, cDV and Id coherently with computeNFeAccessKey', () => {
    const built = buildNFeDocument(baseDraft());
    const expected = computeNFeAccessKey({
      AAMM: '2611',
      CNPJ: '11222333000181',
      cNF: '48201937',
      cUF: '35',
      mod: '55',
      nNF: '000000001',
      serie: '001',
      tpEmis: '1',
    });

    expect(built.accessKey).toBe(expected.chNFe);
    expect(built.accessKey).toHaveLength(44);
    expect(built.id).toBe(`NFe${expected.chNFe}`);
    expect(built.xml).toContain(`Id="NFe${expected.chNFe}"`);
    expect(built.xml).toContain(`<cNF>48201937</cNF>`);
    expect(built.xml).toContain(`<cDV>${expected.cDV}</cDV>`);
  });

  it('generates a cNF different from nNF when none is informed, and keeps it in the key', () => {
    const draft = baseDraft();
    const withoutCnf = { infNFe: draft.infNFe };
    const built = buildNFeDocument(withoutCnf);

    expect(built.cNF).toMatch(/^\d{8}$/);
    expect(built.cNF).not.toBe('00000001');
    expect(built.accessKey.slice(35, 43)).toBe(built.cNF);
  });

  it.each(['00000000', '77777777', '12345678', '90123456', '01234567'])(
    'refuses the official invalid cNF %s',
    (cNF) => {
      expect(() => buildNFeDocument({ ...baseDraft(), cNF })).toThrow(/cNF/);
    },
  );

  it('refuses a cNF equal to nNF and a mismatching cDV', () => {
    const equal = { ...baseDraft(), cNF: '00000001' };
    const wrongDv = baseDraft();
    (wrongDv.infNFe.ide as Record<string, unknown>).cDV = '0';

    expect(() => buildNFeDocument(equal)).toThrow(BuildNFeDocumentError);
    expect(() => buildNFeDocument(wrongDv)).toThrow(/cDV/);
  });

  it('supports a CPF emitter by zero-padding it to 14 digits in the key', () => {
    const draft = baseDraft();
    const emit = Object.fromEntries(
      Object.entries(draft.infNFe.emit).filter(([key]) => key !== 'CNPJ'),
    );
    const built = buildNFeDocument({
      ...draft,
      infNFe: { ...draft.infNFe, emit: { ...emit, CPF: '48201937909' } },
    } as never);

    expect(built.accessKey.slice(6, 20)).toBe('00048201937909');
  });

  it('produces a signature verifiable by signNFeXml and approved by the XSD', async () => {
    const fixture = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixture.passphrase,
      source: {
        contentBase64: fixture.certificateBase64,
        type: 'in-memory-content',
      },
    });
    const built = buildNFeDocument(baseDraft());

    const signedXml = await signNFeXml({
      signingContext,
      unsignedXml: built.xml,
    });

    expect(signedXml).toContain(`<Reference URI="#${built.id}"`);
    expect(validateNFeXsd(signedXml).classification).toBe('valid');
  });

  it('builds a deterministic document for the same input', () => {
    expect(buildNFeDocument(baseDraft()).xml).toBe(
      buildNFeDocument(baseDraft()).xml,
    );
  });
});

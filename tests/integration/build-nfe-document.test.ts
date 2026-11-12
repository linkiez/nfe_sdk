import {
  buildNFeDocument,
  BuildNFeDocumentError,
  createSigningContext,
  signNFeXml,
  validateNFeXsd,
} from '../../src/index';

import {
  baseDraft,
  draftWithItems,
  REFERENCE_DRAFTS,
} from '../fixtures/nfe-builder/reference-drafts';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

async function signed(xml: string): Promise<string> {
  const fixture = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });

  return signNFeXml({ signingContext, unsignedXml: xml });
}

function issuesOf(action: () => unknown): readonly string[] {
  try {
    action();
  } catch (error) {
    if (error instanceof BuildNFeDocumentError) {
      return error.issues;
    }
    throw error;
  }
  throw new Error('Expected buildNFeDocument to throw BuildNFeDocumentError.');
}

describe('buildNFeDocument', () => {
  jest.setTimeout(60_000);

  it.each(Object.keys(REFERENCE_DRAFTS))(
    'builds the %s reference draft into XML approved by validateNFeXsd after signing',
    async (name) => {
      const built = buildNFeDocument(REFERENCE_DRAFTS[name]);
      const result = validateNFeXsd(await signed(built.xml));

      expect(result.classification).toBe('valid');
      expect(result.errors).toEqual([]);
    },
  );

  it('builds the layout limit of 990 items and refuses 991', async () => {
    const built = buildNFeDocument(draftWithItems(990));

    expect(built.xml.match(/<det nItem="/g)).toHaveLength(990);
    expect(validateNFeXsd(await signed(built.xml)).classification).toBe(
      'valid',
    );
    expect(
      issuesOf(() => buildNFeDocument(draftWithItems(991))).join('\n'),
    ).toMatch(/infNFe\.det.*990/);
  });

  it('emits children in layout order regardless of the input key order', () => {
    const draft = baseDraft();
    const reversed = JSON.parse(
      JSON.stringify(draft),
      (_key, value: unknown) =>
        value && typeof value === 'object' && !Array.isArray(value)
          ? Object.fromEntries(Object.entries(value).reverse())
          : value,
    );

    expect(buildNFeDocument(reversed).xml).toBe(buildNFeDocument(draft).xml);
  });

  it('keeps decimals exactly as informed and refuses non-integer numbers', () => {
    const built = buildNFeDocument(baseDraft());

    expect(built.xml).toContain('<vUnCom>100.0000000000</vUnCom>');
    expect(built.xml).toContain('<qCom>1.0000</qCom>');
    const coerced = baseDraft();
    (coerced.infNFe.det[0].prod as { vProd: unknown }).vProd = 100.5;

    expect(issuesOf(() => buildNFeDocument(coerced)).join('\n')).toMatch(
      /det\[0\]\.prod\.vProd/,
    );
  });

  it('writes the fixed recipient name SEFAZ requires in homologation (rule 598)', () => {
    const draft = baseDraft();
    (draft.infNFe.dest as { xNome: string }).xNome = 'CLIENTE REAL LTDA';

    const { xml } = buildNFeDocument(draft);

    expect(xml).toContain(
      '<xNome>NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL</xNome>',
    );
    expect(xml).not.toContain('CLIENTE REAL LTDA');
  });

  it('keeps the real recipient name in production', () => {
    const draft = baseDraft();
    (draft.infNFe.ide as { tpAmb: string }).tpAmb = '1';
    (draft.infNFe.dest as { xNome: string }).xNome = 'CLIENTE REAL LTDA';

    expect(buildNFeDocument(draft).xml).toContain(
      '<xNome>CLIENTE REAL LTDA</xNome>',
    );
  });

  it('escapes XML special characters in text values', () => {
    const draft = baseDraft();
    (draft.infNFe.det[0].prod as { xProd: string }).xProd =
      'Parafuso <M8> & "porca"';

    expect(buildNFeDocument(draft).xml).toContain(
      '<xProd>Parafuso &lt;M8&gt; &amp; &quot;porca&quot;</xProd>',
    );
  });

  it('refuses incomplete input listing every missing required field before signing', () => {
    const draft = baseDraft();
    const incomplete = {
      ...draft,
      infNFe: { ...draft.infNFe, emit: { xNome: 'Sem CNPJ' }, pag: undefined },
    };

    const issues = issuesOf(() => buildNFeDocument(incomplete as never));

    expect(issues.join('\n')).toMatch(/infNFe\.emit.*CNPJ.*CPF/);
    expect(issues.join('\n')).toMatch(/infNFe\.emit\.enderEmit/);
    expect(issues.join('\n')).toMatch(/infNFe\.pag/);
    expect(issues.length).toBeGreaterThanOrEqual(3);
  });

  it('refuses fields the layout does not define instead of dropping them', () => {
    const draft = baseDraft();
    (draft.infNFe.ide as Record<string, unknown>).campoInventado = '1';

    expect(issuesOf(() => buildNFeDocument(draft)).join('\n')).toMatch(
      /infNFe\.ide\.campoInventado.*nao suportado/i,
    );
  });

  it('refuses two alternatives of the same choice', () => {
    const draft = baseDraft();
    (draft.infNFe.emit as Record<string, unknown>).CPF = '12345678909';

    expect(issuesOf(() => buildNFeDocument(draft)).join('\n')).toMatch(
      /infNFe\.emit.*CNPJ.*CPF/,
    );
  });

  it('refuses empty and whitespace-padded values', () => {
    const draft = baseDraft();
    (draft.infNFe.ide as Record<string, unknown>).natOp = '';
    (draft.infNFe.emit as Record<string, unknown>).xNome = ' padded ';

    const issues = issuesOf(() => buildNFeDocument(draft)).join('\n');

    expect(issues).toMatch(/ide\.natOp/);
    expect(issues).toMatch(/emit\.xNome/);
  });

  it('numbers items sequentially and refuses a wrong nItem', () => {
    const draft = baseDraft();
    (draft.infNFe.det[0] as Record<string, unknown>)['@nItem'] = '2';

    expect(issuesOf(() => buildNFeDocument(draft)).join('\n')).toMatch(
      /det\[0\].*nItem/,
    );
  });
});

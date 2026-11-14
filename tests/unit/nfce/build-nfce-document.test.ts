import {
  buildNFCeDocument,
  BuildNFCeDocumentError,
} from '../../../src/canonical/nfce/build-nfce-document';
import { validateNFeXsd } from '../../../src/index';
import { createSigningContext, signNFeXml } from '../../../src/index';

import { nfceDraft, OFFLINE_IDE } from '../../fixtures/nfce/nfce-builder-drafts';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

async function signed(xml: string): Promise<string> {
  const fixture = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: fixture.passphrase,
    source: { contentBase64: fixture.certificateBase64, type: 'in-memory-content' },
  });

  return signNFeXml({ signingContext, unsignedXml: xml });
}

function issuesOf(action: () => unknown): readonly string[] {
  try {
    action();
  } catch (error) {
    if (error instanceof BuildNFCeDocumentError) {
      return error.issues;
    }
    throw error;
  }
  throw new Error('Expected buildNFCeDocument to throw BuildNFCeDocumentError.');
}

describe('buildNFCeDocument', () => {
  jest.setTimeout(60_000);

  it('builds a valid NFC-e draft into XML approved by validateNFeXsd after signing', async () => {
    const built = buildNFCeDocument(nfceDraft());
    const result = validateNFeXsd(await signed(built.xml));

    expect(result.classification).toBe('valid');
    expect(result.errors).toEqual([]);
  });

  it('derives a model 65 access key, the check digit, the Id and the cNF', () => {
    const built = buildNFCeDocument(nfceDraft());

    expect(built.accessKey).toMatch(/^\d{44}$/u);
    expect(built.accessKey.slice(20, 22)).toBe('65');
    expect(built.accessKey.slice(22, 25)).toBe('001');
    expect(built.accessKey.slice(25, 34)).toBe('000000001');
    expect(built.accessKey.slice(34, 35)).toBe('1');
    expect(built.accessKey.slice(35, 43)).toBe('48201937');
    expect(built.accessKey.slice(43)).toBe(built.cDV);
    expect(built.id).toBe(`NFe${built.accessKey}`);
    expect(built.xml).toContain(`Id="NFe${built.accessKey}"`);
    expect(built.xml).toContain('<mod>65</mod>');
  });

  it('generates a valid cNF different from nNF when none is informed', () => {
    const built = buildNFCeDocument({ infNFe: nfceDraft().infNFe });

    expect(built.cNF).toMatch(/^\d{8}$/u);
    expect(Number(built.cNF)).not.toBe(1);
  });

  it('keeps the same key for the same cNF (retries do not change the key)', () => {
    expect(buildNFCeDocument(nfceDraft()).accessKey).toBe(
      buildNFCeDocument(nfceDraft()).accessKey,
    );
  });

  it('accepts an identified consumer by CPF and an anonymous one', async () => {
    const identified = nfceDraft({
      dest: { CPF: '12345678909', indIEDest: '9' },
    } as never);

    const built = buildNFCeDocument(identified);

    expect(built.xml).toContain('<CPF>12345678909</CPF>');
    expect(buildNFCeDocument(nfceDraft()).xml).not.toContain('<dest>');
    expect(
      validateNFeXsd(await signed(built.xml)).classification,
    ).toBe('valid');
  });

  it('builds an offline contingency NFC-e (tpEmis 9) with entry date and justification', async () => {
    const built = buildNFCeDocument(nfceDraft({}, OFFLINE_IDE));

    expect(built.accessKey.slice(34, 35)).toBe('9');
    expect(built.xml).toContain('<tpEmis>9</tpEmis>');
    expect(built.xml).toContain('<dhCont>2026-11-10T11:30:00-03:00</dhCont>');
    expect(
      validateNFeXsd(await signed(built.xml)).classification,
    ).toBe('valid');
  });

  describe('refuses what is not an NFC-e before anything is signed', () => {
    it.each([
      ['model 55', { mod: '55' }, 'infNFe.ide.mod'],
      ['an entrada operation', { tpNF: '0' }, 'infNFe.ide.tpNF'],
      ['an interstate operation', { idDest: '2' }, 'infNFe.ide.idDest'],
      ['a non-normal finality', { finNFe: '4' }, 'infNFe.ide.finNFe'],
      ['a non-final consumer', { indFinal: '0' }, 'infNFe.ide.indFinal'],
      ['a presence indicator outside 1 and 4', { indPres: '2' }, 'infNFe.ide.indPres'],
      ['a DANFE layout of the NF-e', { tpImp: '1' }, 'infNFe.ide.tpImp'],
      ['an NF-e contingency type', { tpEmis: '6' }, 'infNFe.ide.tpEmis'],
    ])('%s', (_label, ide, path) => {
      const issues = issuesOf(() => buildNFCeDocument(nfceDraft({}, ide)));

      expect(issues.some((issue) => issue.startsWith(path))).toBe(true);
    });

    it('offline contingency without entry date and justification', () => {
      const issues = issuesOf(() =>
        buildNFCeDocument(nfceDraft({}, { tpEmis: '9' })),
      );

      expect(issues.join('\n')).toContain('infNFe.ide.dhCont');
      expect(issues.join('\n')).toContain('infNFe.ide.xJust');
    });

    it('offline contingency of a sale that is not in person', () => {
      const issues = issuesOf(() =>
        buildNFCeDocument(nfceDraft({}, { ...OFFLINE_IDE, indPres: '4' })),
      );

      expect(issues.join('\n')).toContain('infNFe.ide.indPres');
    });

    it('groups that do not exist in the NFC-e: carrier, billing and delivery', () => {
      const issues = issuesOf(() =>
        buildNFCeDocument(
          nfceDraft({
            transp: { modFrete: '0', transporta: { CNPJ: '99999999000191' } },
            cobr: { fat: { nFat: '1' } },
            entrega: { CNPJ: '99999999000191' },
          } as never),
        ),
      );
      const text = issues.join('\n');

      expect(text).toContain('infNFe.transp');
      expect(text).toContain('infNFe.cobr');
      expect(text).toContain('infNFe.entrega');
    });

    it('an NFC-e without payment', () => {
      const draft = Object.fromEntries(
        Object.entries(nfceDraft().infNFe).filter(([key]) => key !== 'pag'),
      );

      const issues = issuesOf(() =>
        buildNFCeDocument({ cNF: '48201937', infNFe: draft } as never),
      );

      expect(issues.join('\n')).toContain('infNFe.pag');
    });

    it('lists every problem at once, not only the first', () => {
      const issues = issuesOf(() =>
        buildNFCeDocument(nfceDraft({}, { mod: '55', tpNF: '0', tpImp: '1' })),
      );

      expect(issues.length).toBeGreaterThanOrEqual(3);
    });

    it('also surfaces the layout problems of the underlying builder', () => {
      const issues = issuesOf(() =>
        buildNFCeDocument(
          nfceDraft({ emit: { xNome: 'SEM CNPJ' } } as never),
        ),
      );

      expect(issues.join('\n')).toContain('infNFe.emit');
    });
  });

  describe('supplementary information (QR Code and consultation URL)', () => {
    const production = () => nfceDraft({}, { tpAmb: '1' });

    it('adds infNFeSupl with the v3 QR Code and the consultation URL to an online SP NFC-e', () => {
      const built = buildNFCeDocument(production());

      expect(built.xml).toContain(
        `<infNFeSupl><qrCode><![CDATA[https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=${built.accessKey}|3|1]]></qrCode><urlChave>https://www.nfce.fazenda.sp.gov.br/consulta</urlChave></infNFeSupl>`,
      );
      expect(built.xml.indexOf('</infNFe>')).toBeLessThan(
        built.xml.indexOf('<infNFeSupl>'),
      );
      expect(built.xml.endsWith('</infNFeSupl></NFe>')).toBe(true);
    });

    it('uses the homologation addresses and tpAmb 2 in homologation', () => {
      const built = buildNFCeDocument(nfceDraft());

      expect(built.xml).toContain(
        `homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=${built.accessKey}|3|2`,
      );
      expect(built.xml).toContain(
        '<urlChave>https://www.homologacao.nfce.fazenda.sp.gov.br/consulta</urlChave>',
      );
    });

    it('keeps the signature valid: infNFeSupl sits between infNFe and Signature and is not signed', async () => {
      const built = buildNFCeDocument(production());
      const xml = await signed(built.xml);

      expect(xml.indexOf('</infNFe>')).toBeLessThan(xml.indexOf('<infNFeSupl>'));
      expect(xml.indexOf('</infNFeSupl>')).toBeLessThan(xml.indexOf('<Signature'));
      expect(validateNFeXsd(xml).classification).toBe('valid');
      expect(xml.match(/<Reference URI="([^"]+)"/u)?.[1]).toBe(`#NFe${built.accessKey}`);
    });

    it('does not add it to an offline contingency note, whose QR Code is composed at preparation', () => {
      expect(buildNFCeDocument(nfceDraft({}, OFFLINE_IDE)).xml).not.toContain(
        'infNFeSupl',
      );
    });

    it('does not add it for a UF without evidence in the matrix', () => {
      const draft = nfceDraft({}, { cUF: '41', cMunFG: '4106902' });
      const emit = { ...draft.infNFe.emit, enderEmit: { ...draft.infNFe.emit.enderEmit, UF: 'PR', cMun: '4106902' } };

      expect(buildNFCeDocument(nfceDraft({ emit } as never, { cUF: '41', cMunFG: '4106902' })).xml).not.toContain('infNFeSupl');
    });
  });
});

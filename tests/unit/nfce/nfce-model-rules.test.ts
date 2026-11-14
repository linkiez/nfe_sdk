import { buildNFCeDocument } from '../../../src/canonical/nfce/build-nfce-document';
import { getNFCeAcceptedFiscalCodes } from '../../../src/canonical/nfce/nfce-model-rules';

import { makeItem } from '../../fixtures/nfe-builder/reference-drafts';
import {
  HOMOLOGATION_FIRST_ITEM,
  nfceDraft,
} from '../../fixtures/nfce/nfce-builder-drafts';

type Draft = ReturnType<typeof nfceDraft>;

const SIMPLES = {
  ICMS: { ICMSSN102: { orig: '0', CSOSN: '102' } },
  PIS: { PISNT: { CST: '07' } },
  COFINS: { COFINSNT: { CST: '07' } },
};

function issuesOf(draft: Draft): string[] {
  try {
    buildNFCeDocument(draft);
  } catch (error) {
    return [...((error as { issues?: string[] }).issues ?? [])];
  }

  return [];
}

function withItem(overrides: Record<string, unknown>, taxes: unknown = SIMPLES): Draft {
  const base = nfceDraft();
  const first = makeItem(taxes as never, {
    xProd: HOMOLOGATION_FIRST_ITEM,
    ...overrides,
  });

  return nfceDraft({ det: [first, ...base.infNFe.det.slice(1)] as never });
}

function withTaxes(taxes: unknown, overrides: Record<string, unknown> = {}): Draft {
  return withItem(overrides, taxes);
}

function withPayments(detPag: unknown[], extra: Record<string, unknown> = {}): Draft {
  return nfceDraft({ pag: { detPag, ...extra } } as never);
}

function withTotals(totals: Record<string, string>): Draft {
  const base = nfceDraft();

  return nfceDraft({
    total: { ICMSTot: { ...base.infNFe.total.ICMSTot, ...totals } },
  } as never);
}

const mentions = (issues: string[], path: string, code?: string) =>
  issues.some(
    (issue) => issue.includes(path) && (code === undefined || issue.includes(code)),
  );

describe('NFC-e model 65 rules (FR-046, research R18)', () => {
  it('accepts the reference NFC-e without any issue', () => {
    expect(issuesOf(nfceDraft())).toEqual([]);
  });

  describe('identification and issuer', () => {
    it('refuses dhSaiEnt (705) and referenced documents (708)', () => {
      const withExit = nfceDraft({}, { dhSaiEnt: '2026-11-10T12:00:00-03:00' });
      const withRef = nfceDraft({}, { NFref: [{ refNFe: '3'.repeat(44) }] } as never);

      expect(mentions(issuesOf(withExit), 'infNFe.ide.dhSaiEnt', '705')).toBe(true);
      expect(mentions(issuesOf(withRef), 'infNFe.ide.NFref', '708')).toBe(true);
    });

    it.each(['890', '920'])('refuses series %s for a CNPJ issuer (244, 503)', (serie) => {
      expect(mentions(issuesOf(nfceDraft({}, { serie })), 'infNFe.ide.serie')).toBe(true);
    });

    it.each(['0', '1', '889'])('accepts series %s', (serie) => {
      expect(mentions(issuesOf(nfceDraft({}, { serie })), 'infNFe.ide.serie')).toBe(false);
    });

    it('refuses an issuer that is a tax substitute (718)', () => {
      const draft = nfceDraft();
      const emit = { ...draft.infNFe.emit, IEST: '999999999' };

      expect(mentions(issuesOf(nfceDraft({ emit } as never)), 'infNFe.emit.IEST', '718')).toBe(true);
    });
  });

  describe('consumer', () => {
    const consumer = (dest: Record<string, unknown>) => nfceDraft({ dest } as never);

    it('requires indIEDest 9, no IE and no SUFRAMA (789, 729, 730)', () => {
      expect(mentions(issuesOf(consumer({ CPF: '12345678909', indIEDest: '1' })), 'infNFe.dest.indIEDest', '789')).toBe(true);
      expect(mentions(issuesOf(consumer({ CPF: '12345678909', indIEDest: '9', IE: '1' })), 'infNFe.dest.IE', '729')).toBe(true);
      expect(mentions(issuesOf(consumer({ CPF: '12345678909', indIEDest: '9', ISUF: '12345678' })), 'infNFe.dest.ISUF', '730')).toBe(true);
    });

    it('refuses a consumer with the issuer CNPJ (220)', () => {
      expect(mentions(issuesOf(consumer({ CNPJ: '11222333000181', indIEDest: '9' })), 'infNFe.dest', '220')).toBe(true);
    });

    it('requires the consumer above R$ 10.000,00 (750) but not below', () => {
      const big = withTotals({ vProd: '10000.01', vNF: '10000.01' });
      const bigItem = nfceDraft({
        det: [makeItem(SIMPLES as never, { xProd: HOMOLOGATION_FIRST_ITEM, vProd: '10000.01', vUnCom: '10000.0100000000', vUnTrib: '10000.0100000000' })],
        total: big.infNFe.total,
        pag: { detPag: [{ tPag: '01', vPag: '10000.01' }] },
      } as never);

      expect(mentions(issuesOf(bigItem), 'infNFe.dest', '750')).toBe(true);
      expect(mentions(issuesOf(nfceDraft()), 'infNFe.dest', '750')).toBe(false);
    });
  });

  describe('items', () => {
    it('requires indTot 1 (774)', () => {
      expect(mentions(issuesOf(withItem({ indTot: '0' })), 'infNFe.det[0].prod.indTot', '774')).toBe(true);
    });

    it.each(['5101', '5102', '5103', '5104', '5115', '5405', '5656', '5667'])(
      'accepts CFOP %s',
      (CFOP) => {
        expect(mentions(issuesOf(withItem({ CFOP })), 'infNFe.det[0].prod.CFOP')).toBe(false);
      },
    );

    it.each(['5201', '6102', '1102', '5929'])('refuses CFOP %s (725)', (CFOP) => {
      expect(mentions(issuesOf(withItem({ CFOP })), 'infNFe.det[0].prod.CFOP', '725')).toBe(true);
    });

    it('requires ISSQN for CFOP 5933 and refuses it for the others (374)', () => {
      expect(mentions(issuesOf(withItem({ CFOP: '5933' })), 'infNFe.det[0].imposto.ISSQN', '374')).toBe(true);
      expect(
        mentions(
          issuesOf(withTaxes({ ...SIMPLES, ISSQN: { vBC: '1.00' } })),
          'infNFe.det[0].imposto.ISSQN',
          '374',
        ),
      ).toBe(true);
    });

    it('requires the complete NCM (777)', () => {
      expect(mentions(issuesOf(withItem({ NCM: '73' })), 'infNFe.det[0].prod.NCM', '777')).toBe(true);
    });

    it('requires the homologation text on the first item description (373)', () => {
      expect(mentions(issuesOf(withItem({ xProd: 'Produto de teste' })), 'infNFe.det[0].prod.xProd', '373')).toBe(true);
    });

    it('does not ask for the homologation text in production', () => {
      const production = nfceDraft({}, { tpAmb: '1' });
      const item = makeItem(SIMPLES as never, { xProd: 'Cafe em po 500g' });
      const draft = nfceDraft({ det: [item] as never }, { tpAmb: '1' });

      expect(production).toBeDefined();
      expect(mentions(issuesOf(draft), 'infNFe.det[0].prod.xProd')).toBe(false);
    });

    it('refuses a discount greater than the product value (483)', () => {
      expect(mentions(issuesOf(withItem({ vDesc: '100.01' })), 'infNFe.det[0].prod.vDesc', '483')).toBe(true);
    });

    it.each([
      ['IPI', { ...SIMPLES, IPI: { CST: '53', cEnq: '999' } }, 'infNFe.det[0].imposto.IPI', '746'],
      ['II', { ...SIMPLES, II: { vBC: '1.00' } }, 'infNFe.det[0].imposto.II', '749'],
      ['PISST', { ...SIMPLES, PISST: { vPIS: '1.00' } }, 'infNFe.det[0].imposto.PISST', '742'],
      ['COFINSST', { ...SIMPLES, COFINSST: { vCOFINS: '1.00' } }, 'infNFe.det[0].imposto.COFINSST', '743'],
      ['ICMSUFDest', { ...SIMPLES, ICMSUFDest: { vBCUFDest: '1.00' } }, 'infNFe.det[0].imposto.ICMSUFDest', '807'],
    ])('refuses the %s group', (_name, taxes, path, code) => {
      expect(mentions(issuesOf(withTaxes(taxes)), path, code)).toBe(true);
    });

    it('refuses vehicle and weapon groups in the product (736, 738)', () => {
      expect(mentions(issuesOf(withItem({ veicProd: { tpOp: '1' } })), 'infNFe.det[0].prod.veicProd', '736')).toBe(true);
      expect(mentions(issuesOf(withItem({ arma: [{ tpArma: '0' }] })), 'infNFe.det[0].prod.arma', '738')).toBe(true);
    });
  });

  describe('ICMS', () => {
    const icms = (node: Record<string, unknown>) => withTaxes({ ...SIMPLES, ICMS: node });

    it.each([
      ['ICMS00', { ICMS00: { orig: '0', CST: '00', modBC: '3', vBC: '100.00', pICMS: '18.0000', vICMS: '18.00' } }],
      ['ICMS40', { ICMS40: { orig: '0', CST: '40' } }],
      ['ICMS60', { ICMS60: { orig: '0', CST: '60' } }],
      ['ICMSSN102 with CSOSN 103', { ICMSSN102: { orig: '0', CSOSN: '103' } }],
      ['ICMSSN102 with CSOSN 300', { ICMSSN102: { orig: '0', CSOSN: '300' } }],
      ['ICMSSN102 with CSOSN 400', { ICMSSN102: { orig: '0', CSOSN: '400' } }],
      ['ICMSSN500', { ICMSSN500: { orig: '0', CSOSN: '500' } }],
    ])('accepts %s', (_label, node) => {
      expect(mentions(issuesOf(icms(node)), 'infNFe.det[0].imposto.ICMS')).toBe(false);
    });

    it.each([
      ['ICMS10', { ICMS10: { orig: '0', CST: '10' } }, '766'],
      ['ICMS30', { ICMS30: { orig: '0', CST: '30' } }, '766'],
      ['ICMS51', { ICMS51: { orig: '0', CST: '51' } }, '766'],
      ['ICMS70', { ICMS70: { orig: '0', CST: '70' } }, '766'],
      ['ICMSSN101', { ICMSSN101: { orig: '0', CSOSN: '101' } }, '383'],
      ['ICMSSN201', { ICMSSN201: { orig: '0', CSOSN: '201' } }, '383'],
      ['ICMSSN202', { ICMSSN202: { orig: '0', CSOSN: '202' } }, '383'],
      ['ICMSSN900', { ICMSSN900: { orig: '0', CSOSN: '900' } }, '383'],
    ])('refuses %s', (_label, node, code) => {
      expect(mentions(issuesOf(icms(node)), 'infNFe.det[0].imposto.ICMS', code)).toBe(true);
    });
  });

  describe('totals', () => {
    it('refuses a total above R$ 200.000,00 (780)', () => {
      expect(mentions(issuesOf(withTotals({ vNF: '200000.01' })), 'infNFe.total.ICMSTot.vNF', '780')).toBe(true);
    });

    it('requires vProd to equal the sum of the items (531)', () => {
      expect(mentions(issuesOf(withTotals({ vProd: '99.00' })), 'infNFe.total.ICMSTot.vProd', '531')).toBe(true);
    });
  });

  describe('groups that do not exist', () => {
    it.each([
      ['exporta', { exporta: { UFSaidaPais: 'SP', xLocExporta: 'Porto' } }, '814'],
      ['compra', { compra: { xNEmp: '1' } }, '762'],
      ['cana', { cana: { safra: '2026/2027', ref: '11/2026' } }, '763'],
    ])('refuses %s', (group, extra, code) => {
      expect(mentions(issuesOf(nfceDraft(extra as never)), `infNFe.${group}`, code)).toBe(true);
    });
  });

  describe('payment', () => {
    it.each([
      ['duplicata mercantil (14)', '14', '857'],
      ['sem pagamento (90)', '90', '899'],
      ['outros (99)', '99', '436'],
    ])('refuses %s', (_label, tPag, code) => {
      expect(
        mentions(issuesOf(withPayments([{ tPag, vPag: '100.00' }])), 'infNFe.pag.detPag[0].tPag', code),
      ).toBe(true);
    });

    it('requires the sum of payments to cover the total (865)', () => {
      expect(
        mentions(issuesOf(withPayments([{ tPag: '01', vPag: '99.99' }])), 'infNFe.pag', '865'),
      ).toBe(true);
    });

    it('requires the change when payments exceed the total (866) and accepts it when correct', () => {
      const over = withPayments([{ tPag: '01', vPag: '120.00' }]);
      const exact = withPayments([{ tPag: '01', vPag: '120.00' }], { vTroco: '20.00' });
      const wrong = withPayments([{ tPag: '01', vPag: '120.00' }], { vTroco: '10.00' });

      expect(mentions(issuesOf(over), 'infNFe.pag', '866')).toBe(true);
      expect(mentions(issuesOf(exact), 'infNFe.pag')).toBe(false);
      expect(mentions(issuesOf(wrong), 'infNFe.pag', '866')).toBe(true);
    });

    it('accepts several payments that add up to the total, including a later payment (91)', () => {
      const draft = withPayments([
        { tPag: '01', vPag: '60.00' },
        { tPag: '91', vPag: '40.00' },
      ]);

      expect(mentions(issuesOf(draft), 'infNFe.pag')).toBe(false);
    });

    it.each(['03', '04', '17'])('requires the card group for tPag %s (391)', (tPag) => {
      expect(
        mentions(issuesOf(withPayments([{ tPag, vPag: '100.00' }])), 'infNFe.pag.detPag[0].card', '391'),
      ).toBe(true);
    });

    it('accepts a card payment that carries its card group', () => {
      const draft = withPayments([
        { tPag: '03', vPag: '100.00', card: { tpIntegra: '2' } },
      ]);

      expect(mentions(issuesOf(draft), 'infNFe.pag.detPag[0].card')).toBe(false);
    });
  });

  describe('accepted fiscal codes', () => {
    it('exposes the lists the front uses to restrict its choices', () => {
      const codes = getNFCeAcceptedFiscalCodes();

      expect(codes.cfop).toEqual(['5101', '5102', '5103', '5104', '5115', '5405', '5656', '5667', '5933']);
      expect(codes.icmsCst).toEqual(['00', '20', '40', '41', '60']);
      expect(codes.csosn).toEqual(['102', '103', '300', '400', '500']);
    });

    it('returns independent copies', () => {
      getNFCeAcceptedFiscalCodes().cfop.length = 0;

      expect(getNFCeAcceptedFiscalCodes().cfop).toHaveLength(9);
    });
  });
});

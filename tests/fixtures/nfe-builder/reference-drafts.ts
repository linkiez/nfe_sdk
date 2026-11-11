import type { NFeDocumentInput } from '../../../src/canonical/nfe/builder/build-nfe-document';

type Item = NFeDocumentInput['infNFe']['det'][number];
type Imposto = Item['imposto'];

const EMIT_ADDRESS = {
  xLgr: 'Rua Teste',
  nro: '100',
  xBairro: 'Centro',
  cMun: '3550308',
  xMun: 'Sao Paulo',
  UF: 'SP',
  CEP: '01001000',
  cPais: '1058',
  xPais: 'Brasil',
  fone: '1133334444',
};

const DEST = {
  CNPJ: '99999999000191',
  xNome: 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL',
  enderDest: { ...EMIT_ADDRESS, xLgr: 'Avenida Cliente' },
  indIEDest: '1',
  IE: '222222222222',
};

const SIMPLES_TAXES: Imposto = {
  ICMS: { ICMSSN102: { orig: '0', CSOSN: '102' } },
  PIS: { PISNT: { CST: '07' } },
  COFINS: { COFINSNT: { CST: '07' } },
} as Imposto;

const NORMAL_TAXES: Imposto = {
  ICMS: {
    ICMS00: {
      orig: '0',
      CST: '00',
      modBC: '3',
      vBC: '100.00',
      pICMS: '18.0000',
      vICMS: '18.00',
    },
  },
  PIS: { PISAliq: { CST: '01', vBC: '100.00', pPIS: '1.6500', vPIS: '1.65' } },
  COFINS: {
    COFINSAliq: {
      CST: '01',
      vBC: '100.00',
      pCOFINS: '7.6000',
      vCOFINS: '7.60',
    },
  },
} as Imposto;

/** Builds one product line with the given taxes (decimals stay strings). */
export function makeItem(
  taxes: Imposto,
  overrides: Partial<Item['prod']> = {},
): Item {
  return {
    prod: {
      cProd: '1',
      cEAN: 'SEM GTIN',
      xProd: 'Produto de teste',
      NCM: '73089090',
      CFOP: '5102',
      uCom: 'UN',
      qCom: '1.0000',
      vUnCom: '100.0000000000',
      vProd: '100.00',
      cEANTrib: 'SEM GTIN',
      uTrib: 'UN',
      qTrib: '1.0000',
      vUnTrib: '100.0000000000',
      indTot: '1',
      ...overrides,
    },
    imposto: taxes,
  } as Item;
}

const TOTALS = {
  vBC: '0.00',
  vICMS: '0.00',
  vICMSDeson: '0.00',
  vFCP: '0.00',
  vBCST: '0.00',
  vST: '0.00',
  vFCPST: '0.00',
  vFCPSTRet: '0.00',
  vProd: '100.00',
  vFrete: '0.00',
  vSeg: '0.00',
  vDesc: '0.00',
  vII: '0.00',
  vIPI: '0.00',
  vIPIDevol: '0.00',
  vPIS: '0.00',
  vCOFINS: '0.00',
  vOutro: '0.00',
  vNF: '100.00',
};

/** Base draft (Simples Nacional, single payment, no freight). */
export function baseDraft(
  overrides: Partial<NFeDocumentInput['infNFe']> = {},
): NFeDocumentInput {
  return {
    cNF: '48201937',
    infNFe: {
      ide: {
        cUF: '35',
        natOp: 'Venda de mercadoria',
        mod: '55',
        serie: '1',
        nNF: '1',
        dhEmi: '2026-11-10T12:00:00-03:00',
        tpNF: '1',
        idDest: '1',
        cMunFG: '3550308',
        tpImp: '1',
        tpEmis: '1',
        tpAmb: '2',
        finNFe: '1',
        indFinal: '1',
        indPres: '1',
        procEmi: '0',
        verProc: 'nfe-sdk 1.0',
      },
      emit: {
        CNPJ: '11222333000181',
        xNome: 'EMPRESA TESTE LTDA',
        enderEmit: EMIT_ADDRESS,
        IE: '111111111111',
        CRT: '1',
      },
      dest: DEST,
      det: [makeItem(SIMPLES_TAXES)],
      total: { ICMSTot: TOTALS },
      transp: { modFrete: '9' },
      pag: { detPag: [{ tPag: '01', vPag: '100.00' }] },
      ...overrides,
    },
  } as NFeDocumentInput;
}

export const REFERENCE_DRAFTS: Record<string, NFeDocumentInput> = {
  'simples-nacional': baseDraft(),
  'regime-normal': baseDraft({
    emit: { ...baseDraft().infNFe.emit, CRT: '3' },
    det: [makeItem(NORMAL_TAXES)],
    total: {
      ICMSTot: {
        ...TOTALS,
        vBC: '100.00',
        vICMS: '18.00',
        vPIS: '1.65',
        vCOFINS: '7.60',
      },
    },
  } as Partial<NFeDocumentInput['infNFe']>),
  ipi: baseDraft({
    emit: { ...baseDraft().infNFe.emit, CRT: '3' },
    det: [
      makeItem({
        ...NORMAL_TAXES,
        IPI: {
          cEnq: '999',
          IPITrib: { CST: '50', vBC: '100.00', pIPI: '5.0000', vIPI: '5.00' },
        },
      } as Imposto),
    ],
    total: { ICMSTot: { ...TOTALS, vIPI: '5.00', vNF: '105.00' } },
  } as Partial<NFeDocumentInput['infNFe']>),
  transporte: baseDraft({
    transp: {
      modFrete: '0',
      transporta: {
        CNPJ: '55666777000100',
        xNome: 'TRANSPORTADORA TESTE',
        IE: 'ISENTO',
        UF: 'SP',
      },
      vol: [{ qVol: '2', esp: 'CAIXA', pesoL: '10.500', pesoB: '11.000' }],
    },
  } as Partial<NFeDocumentInput['infNFe']>),
  'multiplos-pagamentos': baseDraft({
    pag: {
      detPag: [
        { tPag: '01', vPag: '40.00' },
        { tPag: '03', vPag: '60.00', card: { tpIntegra: '2' } },
      ],
    },
  } as Partial<NFeDocumentInput['infNFe']>),
  'ibs-cbs': baseDraft({
    det: [
      makeItem({
        ...SIMPLES_TAXES,
        IBSCBS: {
          CST: '000',
          cClassTrib: '000001',
          gIBSCBS: {
            vBC: '100.00',
            gIBSUF: { pIBSUF: '0.1000', vIBSUF: '0.10' },
            gIBSMun: { pIBSMun: '0.0000', vIBSMun: '0.00' },
            vIBS: '0.10',
            gCBS: { pCBS: '0.9000', vCBS: '0.90' },
          },
        },
      } as Imposto),
    ],
  } as Partial<NFeDocumentInput['infNFe']>),
};

/** A draft with `count` identical product lines (the layout allows at most 990). */
export function draftWithItems(count: number): NFeDocumentInput {
  const base = baseDraft();

  return {
    ...base,
    infNFe: {
      ...base.infNFe,
      det: Array.from({ length: count }, () => makeItem(SIMPLES_TAXES)),
    },
  } as NFeDocumentInput;
}

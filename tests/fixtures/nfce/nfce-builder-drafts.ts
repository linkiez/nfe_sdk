import type { NFeDocumentInput } from '../../../src/canonical/nfe/builder/build-nfe-document';

import { baseDraft } from '../nfe-builder/reference-drafts';

/** Description SEFAZ demands on the first item of an NFC-e issued in homologation (rule 373). */
export const HOMOLOGATION_FIRST_ITEM =
  'NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL';

type InfNFe = NFeDocumentInput['infNFe'];
/** Identification overrides; the generated `ide` type is a union, so plain strings are accepted. */
type IdeOverrides = Readonly<Record<string, string>>;

/**
 * Valid NFC-e (model 65) draft derived from the NF-e reference draft: in-person sale to an
 * anonymous consumer, single payment, no transport groups, thermal DANFE (`tpImp` 4).
 *
 * @param overrides - Fields of `infNFe` replaced as a whole.
 * @param ide - Fields of `ide` replaced one by one.
 * @returns The draft.
 */
export function nfceDraft(
  overrides: Partial<InfNFe> = {},
  ide: IdeOverrides = {},
): NFeDocumentInput {
  const base = baseDraft();
  const items = base.infNFe.det.map((item, index) =>
    index === 0
      ? { ...item, prod: { ...item.prod, xProd: HOMOLOGATION_FIRST_ITEM } }
      : item,
  );
  const withoutConsumer = Object.fromEntries(
    Object.entries(base.infNFe).filter(([key]) => key !== 'dest'),
  );

  return {
    cNF: '48201937',
    infNFe: {
      ...(withoutConsumer as Partial<InfNFe>),
      det: items,
      ide: {
        ...base.infNFe.ide,
        mod: '65',
        serie: '1',
        natOp: 'Venda de mercadoria',
        tpImp: '4',
        tpEmis: '1',
        indFinal: '1',
        indPres: '1',
        idDest: '1',
        ...ide,
      } as InfNFe['ide'],
      ...overrides,
    },
  } as NFeDocumentInput;
}

/** Offline-contingency fields of the identification (`tpEmis` 9). */
export const OFFLINE_IDE: IdeOverrides = {
  tpEmis: '9',
  dhCont: '2026-11-10T11:30:00-03:00',
  xJust: 'Sem comunicacao com a SEFAZ desde as 11h30',
};

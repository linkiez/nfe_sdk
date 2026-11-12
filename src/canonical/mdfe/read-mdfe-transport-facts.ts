import type { MDFeDocumentSummary } from './contracts.js';

type TransportFacts = Pick<
  MDFeDocumentSummary,
  'drivers' | 'linkedDocuments' | 'unloadingMunicipalityCodes' | 'vehiclePlates'
>;

const unique = <T>(values: readonly T[]): T[] => [...new Set(values)];

const tag = (block: string, name: string): string | undefined =>
  new RegExp(`<${name}>([^<]*)</${name}>`, 'u').exec(block)?.[1]?.trim() || undefined;

/**
 * Reads the vehicles, drivers, unloading municipalities and linked document keys of a MDF-e.
 * Linked keys are taken only from `infDoc`, so the protocol key of an `mdfeProc` is never one of them.
 *
 * @param xml - `mdfeProc` or `MDFe` XML.
 * @returns The facts, each list without duplicates.
 */
export function readMDFeTransportFacts(xml: string): TransportFacts {
  const infDoc = /<infDoc>[\s\S]*?<\/infDoc>/u.exec(xml)?.[0] ?? '';
  const kinds = [
    ['nfe', 'chNFe'],
    ['cte', 'chCTe'],
    ['mdfe', 'chMDFe'],
  ] as const;

  return {
    vehiclePlates: unique([...xml.matchAll(/<placa>([^<]+)<\/placa>/gu)].map(([, plate]) => plate.trim())),
    drivers: [...xml.matchAll(/<condutor>([\s\S]*?)<\/condutor>/gu)].map(([, block]) => ({
      name: tag(block, 'xNome'),
      taxId: tag(block, 'CPF'),
    })),
    unloadingMunicipalityCodes: unique(
      [...xml.matchAll(/<cMunDescarga>(\d{7})<\/cMunDescarga>/gu)].map(([, code]) => code),
    ),
    linkedDocuments: kinds.flatMap(([kind, element]) =>
      unique([...infDoc.matchAll(new RegExp(`<${element}>(\\d{44})</${element}>`, 'gu'))].map(([, key]) => key)).map(
        (accessKey) => ({ kind, accessKey }),
      ),
    ),
  };
}

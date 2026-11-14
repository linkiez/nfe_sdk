import { randomInt } from 'node:crypto';
import { computeNFeAccessKey } from '../access-key.js';
import { NFE_LAYOUT_ROOT_TYPE } from './nfe-layout.generated.js';
import { serializeComplex } from './nfe-layout-serializer.js';
import type {
  NFe_infNFe,
  NFe_infNFe_det,
  NFe_infNFe_ide,
} from './nfe-document-input.generated.js';

const LAYOUT_VERSION = '4.00';
const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const MAX_ITEMS = 990;
/** SEFAZ rule 598: in homologation (`tpAmb` 2) the recipient name is this exact text. */
const HOMOLOGATION_RECIPIENT_NAME = 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL';
/** Official invalid cNF values (MOC, rule B09-20): repeated and sequential digits. */
const INVALID_CNF = new Set([
  ...Array.from({ length: 10 }, (_, digit) => String(digit).repeat(8)),
  '12345678',
  '23456789',
  '34567890',
  '45678901',
  '56789012',
  '67890123',
  '78901234',
  '89012345',
  '90123456',
  '01234567',
]);

/** Product line; `@nItem` is assigned (and checked) by the builder. */
export type NFeDetInput = Omit<NFe_infNFe_det, '@nItem'> & { readonly '@nItem'?: string };

/** Identification group; `cNF` and `cDV` are derived by the builder. */
export type NFeIdeInput = Omit<NFe_infNFe_ide, 'cNF' | 'cDV'> & {
  readonly cNF?: string;
  readonly cDV?: string;
};

/** `infNFe` content; `Id` and `versao` are assigned by the builder. */
export type NFeInfNFeInput = Omit<NFe_infNFe, '@versao' | '@Id' | 'ide' | 'det'> & {
  readonly '@versao'?: typeof LAYOUT_VERSION;
  readonly ide: NFeIdeInput;
  readonly det: readonly NFeDetInput[];
};

/**
 * Typed draft of an NF-e (layout 4.00). Names follow the official XSD
 * (`PL_010c_NT2022_002v1.30`); decimals and dates are strings and are never coerced.
 */
export interface NFeDocumentInput {
  /** 8-digit numeric code; generated when omitted. Must differ from `nNF`. */
  readonly cNF?: string;
  readonly infNFe: NFeInfNFeInput;
}

/** Result of {@link buildNFeDocument}. */
export interface BuiltNFeDocument {
  /** 44-digit access key. */
  readonly accessKey: string;
  readonly cDV: string;
  readonly cNF: string;
  /** `infNFe` identifier (`NFe` + access key), the signature reference. */
  readonly id: string;
  /** Unsigned `NFe` XML in layout order, ready for `signNFeXml`. */
  readonly xml: string;
}

/**
 * Raised when the draft cannot become a valid document; `issues` lists every problem.
 */
export class BuildNFeDocumentError extends Error {
  public readonly issues: readonly string[];

  /**
   * @param issues - Problems found, each prefixed by the offending path.
   */
  public constructor(issues: readonly string[]) {
    super(`NF-e draft refused: ${issues.join('; ')}`);
    this.name = 'BuildNFeDocumentError';
    this.issues = issues;
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : undefined;
}

/**
 * Draws a valid `cNF`: 8 digits, not an official invalid value and different from `nNF`.
 *
 * @param nNF - Document number the code must differ from.
 * @returns A new 8-digit code.
 */
export function generateCnf(nNF: string): string {
  for (;;) {
    const candidate = String(randomInt(0, 100_000_000)).padStart(8, '0');

    if (!INVALID_CNF.has(candidate) && Number(candidate) !== Number(nNF)) {
      return candidate;
    }
  }
}

function numbered(det: unknown, issues: string[]): unknown {
  if (!Array.isArray(det)) {
    return det;
  }
  if (det.length > MAX_ITEMS) {
    issues.push(`infNFe.det: ate ${MAX_ITEMS} ocorrencias, recebidas ${det.length}`);
    return [];
  }

  return det.map((item, index) => {
    const record = asRecord(item);
    const informed = record['@nItem'];

    if (informed !== undefined && text(informed) !== String(index + 1)) {
      issues.push(`infNFe.det[${index}].@nItem: deve ser ${index + 1} (itens sequenciais)`);
    }

    return { ...record, '@nItem': String(index + 1) };
  });
}

function deriveKey(
  input: NFeDocumentInput,
  ide: Record<string, unknown>,
  emit: Record<string, unknown>,
  issues: string[],
): { accessKey: string; cDV: string; cNF: string } | undefined {
  const nNF = text(ide.nNF) ?? '';
  const cNF = text(input.cNF) ?? text(ide.cNF) ?? (/^\d{1,9}$/u.test(nNF) ? generateCnf(nNF) : '');
  const dhEmi = text(ide.dhEmi) ?? '';
  const taxId = text(emit.CNPJ) ?? (text(emit.CPF) ? `000${text(emit.CPF)}` : '');
  const before = issues.length;

  if (!/^\d{8}$/u.test(cNF)) issues.push('infNFe.ide.cNF: deve ter 8 digitos');
  else if (INVALID_CNF.has(cNF)) issues.push(`infNFe.ide.cNF: valor ${cNF} e invalido (digitos repetidos ou sequenciais)`);
  else if (/^\d{1,9}$/u.test(nNF) && Number(cNF) === Number(nNF)) issues.push('infNFe.ide.cNF: nao pode ser igual a nNF');
  if (!/^\d{4}-\d{2}-\d{2}T/u.test(dhEmi)) issues.push('infNFe.ide.dhEmi: data/hora invalida para compor a chave');
  if (!/^\d{14}$/u.test(taxId)) issues.push('infNFe.emit: CNPJ (14 digitos) ou CPF (11 digitos) invalido para compor a chave');
  if (!/^\d{1,9}$/u.test(nNF)) issues.push('infNFe.ide.nNF: deve conter 1 a 9 digitos');
  if (issues.length > before) return undefined;

  try {
    const { chNFe, cDV } = computeNFeAccessKey({
      AAMM: `${dhEmi.slice(2, 4)}${dhEmi.slice(5, 7)}`,
      CNPJ: taxId,
      cNF,
      cUF: text(ide.cUF) ?? '',
      mod: text(ide.mod) ?? '',
      nNF: nNF.padStart(9, '0'),
      serie: (text(ide.serie) ?? '').padStart(3, '0'),
      tpEmis: text(ide.tpEmis) ?? '',
    });
    const informed = text(ide.cDV);

    if (informed !== undefined && informed !== String(cDV)) {
      issues.push(`infNFe.ide.cDV: informado ${informed}, calculado ${cDV}`);
      return undefined;
    }

    return { accessKey: chNFe, cDV: String(cDV), cNF };
  } catch (error) {
    issues.push(`infNFe.ide: ${error instanceof Error ? error.message : 'dados invalidos para a chave'}`);
    return undefined;
  }
}

/**
 * Builds the unsigned `NFe` XML (layout 4.00) from a typed draft.
 *
 * Derives `cNF`, `cDV`, the access key, `Id`, `versao` and the item numbers, emits every
 * element in XSD order, keeps decimals exactly as informed and refuses — before anything
 * is signed — incomplete input, unknown fields, conflicting choices and values outside
 * the occurrence limits (for example more than 990 items). In homologation (`tpAmb` 2) the
 * recipient name is replaced by the fixed text SEFAZ demands (rule 598).
 *
 * @param input - Draft following the official element names.
 * @returns The XML, access key and `infNFe` identifier.
 * @throws {BuildNFeDocumentError} Listing every problem found, each with its path.
 * @example
 * ```typescript
 * const { xml, accessKey } = buildNFeDocument(draft);
 * const signedXml = await signNFeXml({ signingContext, unsignedXml: xml });
 * ```
 */
export function buildNFeDocument(input: NFeDocumentInput): BuiltNFeDocument {
  const issues: string[] = [];
  const infNFe = asRecord(input?.infNFe);
  const ide = asRecord(infNFe.ide);
  const emit = asRecord(infNFe.emit);
  const key = deriveKey(input, ide, emit, issues);
  const prepared = {
    ...infNFe,
    '@Id': key ? `NFe${key.accessKey}` : 'NFe',
    '@versao': LAYOUT_VERSION,
    det: numbered(infNFe.det, issues),
    ...(text(ide.tpAmb) === '2' && infNFe.dest !== undefined
      ? { dest: { ...asRecord(infNFe.dest), xNome: HOMOLOGATION_RECIPIENT_NAME } }
      : {}),
    ide: { ...ide, ...(key ? { cDV: key.cDV, cNF: key.cNF } : {}) },
  };
  const body = serializeComplex('infNFe', NFE_LAYOUT_ROOT_TYPE, prepared, 'infNFe', issues);

  if (issues.length > 0 || !key) {
    throw new BuildNFeDocumentError([...new Set(issues)]);
  }

  return {
    accessKey: key.accessKey,
    cDV: key.cDV,
    cNF: key.cNF,
    id: `NFe${key.accessKey}`,
    xml: `<NFe xmlns="${NFE_NAMESPACE}">${body}</NFe>`,
  };
}

import { generateCnf } from '../nfe/builder/build-nfe-document.js';

import {
  buildNFCeDocument,
  BuildNFCeDocumentError,
  type BuiltNFCeDocument,
  type NFCeDocumentInput,
} from './build-nfce-document.js';

/** SEFAZ accepts the same signed NFC-e again only within 5 minutes of its emission (rejection 704). */
const RESEND_WINDOW_MS = 5 * 60 * 1000;

/** Options of {@link remountNFCeDocument}. */
export interface RemountNFCeOptions {
  /** New emission date and time (`dhEmi`); must be later than the original. */
  readonly dhEmi: string;
  /** Explicit new `cNF`; drawn when omitted. Must differ from the previous one. */
  readonly cNF?: string;
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

/**
 * Tells whether the same signed NFC-e XML may still be sent again (within 5 minutes of `dhEmi`).
 * Past that, the document must first be queried by key and, if not found, remounted.
 *
 * @param dhEmi - Emission date and time of the signed XML.
 * @param now - Current instant.
 * @returns `false` when the window has closed or `dhEmi` is unreadable.
 */
export function isNFCeResendWindowOpen(dhEmi: string, now: Date = new Date()): boolean {
  const emitted = Date.parse(dhEmi);

  return !Number.isNaN(emitted) && now.getTime() - emitted <= RESEND_WINDOW_MS;
}

/**
 * Remounts an NFC-e that SEFAZ never received after the resend window: same number and series,
 * new `dhEmi` and new `cNF`, hence a new access key. The rejected or lost key is never reused.
 *
 * @param input - The original draft.
 * @param options - New emission time and, optionally, the new `cNF`.
 * @returns The new unsigned document (to be signed again).
 * @throws {BuildNFCeDocumentError} When `dhEmi` is not later than the original, the `cNF` repeats
 *   the previous one, or the draft is not a valid NFC-e.
 */
export function remountNFCeDocument(
  input: NFCeDocumentInput,
  options: RemountNFCeOptions,
): BuiltNFCeDocument {
  const infNFe = asRecord(input.infNFe);
  const ide = asRecord(infNFe.ide);
  const previousCnf = String(input.cNF ?? ide.cNF ?? '');
  const originalEmission = Date.parse(String(ide.dhEmi ?? ''));
  const issues: string[] = [];

  if (Number.isNaN(Date.parse(options.dhEmi)) || Date.parse(options.dhEmi) <= originalEmission) {
    issues.push('options.dhEmi: a nova data e hora de emissao deve ser posterior a original');
  }
  if (options.cNF !== undefined && options.cNF === previousCnf) {
    issues.push('options.cNF: o novo cNF deve ser diferente do anterior');
  }
  if (issues.length > 0) {
    throw new BuildNFCeDocumentError(issues);
  }

  let cNF = options.cNF;

  while (cNF === undefined || cNF === previousCnf) {
    cNF = generateCnf(String(ide.nNF ?? '0'));
  }
  const { cDV: _cDV, cNF: _oldCnf, ...rest } = ide;

  return buildNFCeDocument({
    cNF,
    infNFe: {
      ...infNFe,
      ide: { ...rest, dhEmi: options.dhEmi },
    } as NFCeDocumentInput['infNFe'],
  });
}

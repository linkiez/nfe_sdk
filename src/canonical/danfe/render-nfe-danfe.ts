import { DOMParser } from '@xmldom/xmldom';

const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const AUTHORIZED_PROTOCOL_STATUS = new Set(['100', '150']);

/** Input of {@link renderNFeDANFE}. */
export interface RenderNFeDANFEInput {
  /** `nfeProc` XML (signed NFe + `protNFe`) of an authorized model-55 NF-e. */
  readonly authorizedXml: string;
}

/** Raised when the XML cannot be rendered as a DANFE (malformed, not authorized, not model 55). */
export class NFeDanfeUsageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NFeDanfeUsageError';
  }
}

function firstText(
  document: ReturnType<DOMParser['parseFromString']>,
  localName: string,
): string | undefined {
  const element = document.getElementsByTagNameNS(NFE_NAMESPACE, localName)[0];

  return element?.textContent?.trim() || undefined;
}

/**
 * Renders the DANFE (PDF) of an authorized model-55 NF-e from its exact `nfeProc` XML.
 *
 * The document is validated before rendering: it must be well-formed, be model 55 and carry
 * an authorization protocol (`cStat` 100 or 150), so a DANFE is never drawn for a document SEFAZ
 * did not authorize.
 *
 * @param input - Authorized `nfeProc` XML.
 * @returns The PDF bytes.
 * @throws {NFeDanfeUsageError} When the XML is malformed, not model 55 or not authorized.
 * @example
 * ```ts
 * const pdf = await renderNFeDANFE({ authorizedXml: outcome.authorizedXml });
 * ```
 */
export async function renderNFeDANFE(
  input: RenderNFeDANFEInput,
): Promise<Uint8Array> {
  const failures: string[] = [];
  let document: ReturnType<DOMParser['parseFromString']> | null = null;
  try {
    document =
      typeof input.authorizedXml === 'string' && input.authorizedXml.trim()
        ? new DOMParser({
            onError: (level, message) => {
              if (level === 'error' || level === 'fatalError') {
                failures.push(message);
              }
            },
          }).parseFromString(input.authorizedXml, 'application/xml')
        : null;
  } catch {
    document = null;
  }

  if (!document || failures.length > 0 || !document.documentElement) {
    throw new NFeDanfeUsageError('renderNFeDANFE received malformed XML.');
  }
  if (firstText(document, 'mod') !== '55') {
    throw new NFeDanfeUsageError('renderNFeDANFE supports only model 55.');
  }
  const protocolStatus = document
    .getElementsByTagNameNS(NFE_NAMESPACE, 'infProt')[0]
    ?.getElementsByTagNameNS(NFE_NAMESPACE, 'cStat')[0]?.textContent?.trim();
  if (!protocolStatus || !AUTHORIZED_PROTOCOL_STATUS.has(protocolStatus)) {
    throw new NFeDanfeUsageError(
      'renderNFeDANFE requires an authorized nfeProc (protocol cStat 100 or 150).',
    );
  }

  // Loaded on demand: the renderer is ESM-only with a native canvas dependency, and callers
  // that never draw a DANFE must not pay for (or fail on) loading it.
  const { DANFe } = await import('node-sped-pdf');

  return DANFe({ xml: input.authorizedXml });
}

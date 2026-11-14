import { validateNFCeModelRules } from './nfce-model-rules.js';
import { resolveNFCeQRCodeEndpoint } from './resolve-nfce-qr-code-endpoint.js';
import {
  buildNFeDocument,
  BuildNFeDocumentError,
  type BuiltNFeDocument,
  type NFeDocumentInput,
} from '../nfe/builder/build-nfe-document.js';

/** Typed draft of an NFC-e (layout 4.00, model 65); same element names as the official XSD. */
export type NFCeDocumentInput = NFeDocumentInput;

/** Result of {@link buildNFCeDocument}: unsigned `NFe` XML with model 65 access key. */
export type BuiltNFCeDocument = BuiltNFeDocument;

/**
 * Raised when the draft cannot become a valid NFC-e; `issues` lists every problem found.
 */
export class BuildNFCeDocumentError extends Error {
  public readonly issues: readonly string[];

  /**
   * @param issues - Problems found, each prefixed by the offending path.
   */
  public constructor(issues: readonly string[]) {
    super(`NFC-e draft refused: ${issues.join('; ')}`);
    this.name = 'BuildNFCeDocumentError';
    this.issues = issues;
  }
}

const PRESENCE_ONLINE = ['1', '4'];
const OFFLINE_JUSTIFICATION_LENGTH = { max: 256, min: 15 } as const;

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : undefined;
}

function expect(
  ide: Record<string, unknown>,
  field: string,
  allowed: readonly string[],
  meaning: string,
  issues: string[],
): void {
  const value = text(ide[field]);

  if (value === undefined || !allowed.includes(value)) {
    issues.push(`infNFe.ide.${field}: ${meaning} (recebido ${value ?? 'ausente'})`);
  }
}

function identityIssues(ide: Record<string, unknown>, issues: string[]): void {
  expect(ide, 'mod', ['65'], 'a NFC-e e o modelo 65', issues);
  expect(ide, 'tpNF', ['1'], 'a NFC-e e sempre de saida (1)', issues);
  expect(ide, 'idDest', ['1'], 'a NFC-e e sempre operacao interna (1)', issues);
  expect(ide, 'finNFe', ['1'], 'a NFC-e so tem finalidade normal (1)', issues);
  expect(ide, 'indFinal', ['1'], 'a NFC-e e sempre para consumidor final (1)', issues);
  expect(ide, 'indPres', PRESENCE_ONLINE, 'presenca 1 (presencial) ou 4 (entrega em domicilio)', issues);
  expect(ide, 'tpImp', ['4', '5'], 'o DANFE NFC-e e 4 ou 5', issues);
  expect(ide, 'tpEmis', ['1', '9'], 'a NFC-e so tem emissao normal (1) ou contingencia offline (9)', issues);
}

function offlineIssues(ide: Record<string, unknown>, issues: string[]): void {
  if (text(ide.tpEmis) !== '9') {
    return;
  }
  if (text(ide.indPres) !== '1') {
    issues.push('infNFe.ide.indPres: a contingencia offline so admite venda presencial (1)');
  }
  if (text(ide.dhCont) === undefined) {
    issues.push('infNFe.ide.dhCont: obrigatorio na contingencia offline');
  }
  const justification = text(ide.xJust);

  if (justification === undefined) {
    issues.push('infNFe.ide.xJust: obrigatorio na contingencia offline');
  } else if (
    justification.length < OFFLINE_JUSTIFICATION_LENGTH.min ||
    justification.length > OFFLINE_JUSTIFICATION_LENGTH.max
  ) {
    issues.push(
      `infNFe.ide.xJust: de ${OFFLINE_JUSTIFICATION_LENGTH.min} a ${OFFLINE_JUSTIFICATION_LENGTH.max} caracteres`,
    );
  }
}

function groupIssues(infNFe: Record<string, unknown>, issues: string[]): void {
  const transport = asRecord(infNFe.transp);
  const extraTransport = Object.keys(transport).filter((key) => key !== 'modFrete');

  if (text(transport.modFrete) !== undefined && text(transport.modFrete) !== '9') {
    issues.push('infNFe.transp.modFrete: a NFC-e nao tem transporte (9)');
  }
  if (extraTransport.length > 0) {
    issues.push(`infNFe.transp: a NFC-e so admite modFrete 9, sem ${extraTransport.join(', ')}`);
  }
  for (const group of ['cobr', 'entrega', 'retirada'] as const) {
    if (infNFe[group] !== undefined) {
      issues.push(`infNFe.${group}: grupo inexistente na NFC-e`);
    }
  }
  const payments = asRecord(infNFe.pag).detPag;

  if (!Array.isArray(payments) || payments.length === 0) {
    issues.push('infNFe.pag: a NFC-e exige ao menos um pagamento');
  }
}

/**
 * Adds `infNFeSupl` (QR Code v3 and consultation URL) to an online NFC-e of a UF with evidence in
 * the matrix. The group sits after `infNFe` and outside the signed reference. Offline contingency
 * notes get theirs when they are prepared (the QR Code depends on the signature or the CSC).
 */
function withSupplementaryInfo(
  built: BuiltNFCeDocument,
  ide: Record<string, unknown>,
): BuiltNFCeDocument {
  const environment = text(ide.tpAmb) === '1' ? 'production' : 'homologation';
  const endpoint =
    text(ide.tpEmis) === '1' && text(ide.cUF) === '35'
      ? resolveNFCeQRCodeEndpoint('SP', environment)
      : undefined;

  if (endpoint === undefined) {
    return built;
  }
  const supplement =
    `<infNFeSupl><qrCode><![CDATA[${endpoint.composeOnlineUrl(built.accessKey)}]]></qrCode>` +
    `<urlChave>${endpoint.consultationUrl}</urlChave></infNFeSupl>`;

  return { ...built, xml: built.xml.replace(/<\/NFe>$/u, `${supplement}</NFe>`) };
}

/**
 * Builds the unsigned `NFe` XML of an NFC-e (model 65, layout 4.00) from a typed draft.
 *
 * Reuses the NF-e builder (same XSD, key derivation and serialization) after checking what only
 * the NFC-e fixes: model 65, saida, operacao interna, consumidor final, DANFE NFC-e, emissao
 * normal ou contingencia offline (com `dhCont` e `xJust`, so presencial), sem transporte,
 * cobranca nem entrega, e com pagamento. The consumer (`dest`) is optional.
 *
 * @param input - Draft following the official element names.
 * @returns The XML, access key and `infNFe` identifier.
 * @throws {BuildNFCeDocumentError} Listing every problem found, each with its path.
 * @example
 * ```typescript
 * const { xml, accessKey } = buildNFCeDocument(draft);
 * ```
 */
export function buildNFCeDocument(input: NFCeDocumentInput): BuiltNFCeDocument {
  const infNFe = asRecord(input?.infNFe);
  const ide = asRecord(infNFe.ide);
  const issues: string[] = [];

  identityIssues(ide, issues);
  offlineIssues(ide, issues);
  groupIssues(infNFe, issues);
  issues.push(...validateNFCeModelRules(infNFe));

  try {
    const built = buildNFeDocument(input);

    if (issues.length > 0) {
      throw new BuildNFCeDocumentError([...new Set(issues)]);
    }

    return withSupplementaryInfo(built, ide);
  } catch (error) {
    if (error instanceof BuildNFeDocumentError) {
      throw new BuildNFCeDocumentError([...new Set([...issues, ...error.issues])]);
    }
    throw error;
  }
}

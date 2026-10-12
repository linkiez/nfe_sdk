import type { EPECEventInput } from './contracts.js';

/** Event code for EPEC per MOC §3.3. */
export const EPEC_EVENT_CODE = '110140';
const EPEC_DECIMAL_PATTERN = /^\d{1,13}(?:\.\d{1,2})?$/u;

/** EPEC event description as required by the XSD. */
const EPEC_DESC_EVENTO = 'EPEC';

/** cOrgao value for SVC-AN (Ambiente Nacional code 91). */
const SVCAN_C_ORGAO = '91';

/** tpAutor for the NF-e emitter. */
const TP_AUTOR_EMITENTE = '1';

/** verAplic for the EPEC event. */
const VER_APLIC = '1.0.0';

/** tpNF for outgoing NF-e (saída). */
const TP_NF_SAIDA = '1';

/**
 * Builds the `detEvento` XML fragment for an EPEC event per MOC §3.3 and the
 * `xsd/Evento_EPEC_PL_v1.01/e110140_v1.00.xsd` schema.
 *
 * @param input - EPEC event input fields.
 * @returns XML string for the `detEvento` element.
 */
export function buildEPECDetailXml(input: EPECEventInput): string {
  const recipientTag = buildRecipientDocumentTag(input.recipientDocument);
  // Extract issuer UF IBGE code from the access key (first 2 digits = cUF)
  const cOrgaoAutor = input.chNFe.slice(0, 2);
  const destUF = input.recipientUF ?? resolveUFAbbreviation(cOrgaoAutor);

  return [
    '<detEvento versao="1.00">',
    `<descEvento>${EPEC_DESC_EVENTO}</descEvento>`,
    `<cOrgaoAutor>${cOrgaoAutor}</cOrgaoAutor>`,
    `<tpAutor>${TP_AUTOR_EMITENTE}</tpAutor>`,
    `<verAplic>${VER_APLIC}</verAplic>`,
    `<dhEmi>${input.emissionDateTime}</dhEmi>`,
    `<tpNF>${input.tpNF ?? TP_NF_SAIDA}</tpNF>`,
    `<IE>${input.issuerIE ?? 'ISENTO'}</IE>`,
    '<dest>',
    `<UF>${destUF}</UF>`,
    recipientTag,
    ...(input.recipientIE ? [`<IE>${input.recipientIE}</IE>`] : []),
    `<vNF>${input.totalValue}</vNF>`,
    `<vICMS>${input.totalICMS ?? '0.00'}</vICMS>`,
    `<vST>${input.totalICMSST ?? '0.00'}</vST>`,
    '</dest>',
    '</detEvento>',
  ].join('');
}

/**
 * Builds the complete `envEPEC` XML envelope for submission to SEFAZ SVC.
 *
 * @param input - EPEC event input fields.
 * @returns Complete XML envelope string ready for SOAP submission.
 */
export function buildEPECEnvelopeXml(input: EPECEventInput): string {
  const issuerTag = `<CNPJ>${input.issuerCNPJ}</CNPJ>`;
  const seqEvento = '01';
  const detailXml = buildEPECDetailXml(input);

  return [
    '<envEvento xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.00">',
    '<idLote>1</idLote>',
    '<evento versao="1.00">',
    `<infEvento Id="ID${EPEC_EVENT_CODE}${input.chNFe}${seqEvento}">`,
    `<cOrgao>${SVCAN_C_ORGAO}</cOrgao>`,
    `<tpAmb>${input.environment === 'production' ? '1' : '2'}</tpAmb>`,
    issuerTag,
    `<chNFe>${input.chNFe}</chNFe>`,
    `<dhEvento>${input.emissionDateTime}</dhEvento>`,
    `<tpEvento>${EPEC_EVENT_CODE}</tpEvento>`,
    `<nSeqEvento>${Number(seqEvento)}</nSeqEvento>`,
    '<verEvento>1.00</verEvento>',
    detailXml,
    '</infEvento>',
    '</evento>',
    '</envEvento>',
  ].join('');
}

/**
 * Validates production-only EPEC fiscal details before SOAP transport.
 *
 * @param input - Structured EPEC event input.
 * @returns A usage-error reason, or `undefined` when the production input is valid.
 */
export function validateProductionEPECInput(
  input: EPECEventInput,
): string | undefined {
  if (input.environment !== 'production') {
    return undefined;
  }

  if (input.issuerUF !== '35' || !/^35\d{42}$/u.test(input.chNFe)) {
    return 'Production EPEC currently supports only an SP issuer with a matching 44-digit access key.';
  }

  if (!/^\d{14}$/u.test(input.issuerCNPJ)) {
    return 'Production EPEC requires a 14-digit issuer CNPJ.';
  }

  if (input.chNFe.slice(6, 20) !== input.issuerCNPJ) {
    return 'Production EPEC issuer CNPJ must match the CNPJ embedded in the NF-e access key.';
  }

  if (!input.issuerIE || !/^\d{2,14}$/u.test(input.issuerIE)) {
    return 'Production EPEC requires a numeric issuer IE with 2 to 14 digits.';
  }

  if (input.tpNF !== '0' && input.tpNF !== '1') {
    return 'Production EPEC requires tpNF to be 0 (entry) or 1 (exit).';
  }

  if (!input.recipientUF || !/^(?:[A-Z]{2}|EX)$/u.test(input.recipientUF)) {
    return 'Production EPEC requires a destination UF abbreviation or EX.';
  }

  if (!isValidRecipientDocument(input.recipientDocument)) {
    return 'Production EPEC requires a valid recipient CNPJ, CPF, or foreign identifier.';
  }

  if (input.recipientIE && !/^\d{2,14}$/u.test(input.recipientIE)) {
    return 'Production EPEC recipient IE must contain 2 to 14 digits when supplied.';
  }

  if (
    !EPEC_DECIMAL_PATTERN.test(input.totalValue) ||
    !input.totalICMS ||
    !EPEC_DECIMAL_PATTERN.test(input.totalICMS) ||
    !input.totalICMSST ||
    !EPEC_DECIMAL_PATTERN.test(input.totalICMSST)
  ) {
    return 'Production EPEC requires valid vNF, vICMS, and vST decimal totals.';
  }

  if (!isValidDateTimeWithOffset(input.emissionDateTime)) {
    return 'Production EPEC requires a valid emission date-time with timezone.';
  }

  return undefined;
}

function isValidRecipientDocument(recipientDocument: string): boolean {
  return /^\d{11}$|^\d{14}$/u.test(recipientDocument) ||
    /^[!-ÿ]{5,20}$/u.test(recipientDocument);
}

function isValidDateTimeWithOffset(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/u.test(
    value,
  ) && Number.isFinite(Date.parse(value));
}

function buildRecipientDocumentTag(recipientDocument: string): string {
  const digitsOnly = recipientDocument.replaceAll(/\D/gu, '');
  if (digitsOnly.length === 14) {
    return `<CNPJ>${digitsOnly}</CNPJ>`;
  }
  if (digitsOnly.length === 11) {
    return `<CPF>${digitsOnly}</CPF>`;
  }
  // Treat as foreign identifier if neither CNPJ nor CPF length
  return `<idEstrangeiro>${escapeXmlText(recipientDocument)}</idEstrangeiro>`;
}

function escapeXmlText(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

/** Maps a 2-digit IBGE UF code to the 2-letter UF abbreviation. */
function resolveUFAbbreviation(ibgeCode: string): string {
  const UF_MAP: Record<string, string> = {
    '11': 'RO',
    '12': 'AC',
    '13': 'AM',
    '14': 'RR',
    '15': 'PA',
    '16': 'AP',
    '17': 'TO',
    '21': 'MA',
    '22': 'PI',
    '23': 'CE',
    '24': 'RN',
    '25': 'PB',
    '26': 'PE',
    '27': 'AL',
    '28': 'SE',
    '29': 'BA',
    '31': 'MG',
    '32': 'ES',
    '33': 'RJ',
    '35': 'SP',
    '41': 'PR',
    '42': 'SC',
    '43': 'RS',
    '50': 'MS',
    '51': 'MT',
    '52': 'GO',
    '53': 'DF',
  };
  return UF_MAP[ibgeCode] ?? 'SP';
}

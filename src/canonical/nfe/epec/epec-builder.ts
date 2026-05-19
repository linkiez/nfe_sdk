import type { EPECEventInput } from './contracts.js';

/** Event code for EPEC per MOC §3.3. */
export const EPEC_EVENT_CODE = '110140';

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
  // Use issuer UF as recipient UF for MVP (inter-state refinement is future work)
  const destUF = resolveUFAbbreviation(cOrgaoAutor);

  return [
    '<detEvento versao="1.00">',
    `<descEvento>${EPEC_DESC_EVENTO}</descEvento>`,
    `<cOrgaoAutor>${cOrgaoAutor}</cOrgaoAutor>`,
    `<tpAutor>${TP_AUTOR_EMITENTE}</tpAutor>`,
    `<verAplic>${VER_APLIC}</verAplic>`,
    `<dhEmi>${input.emissionDateTime}</dhEmi>`,
    `<tpNF>${TP_NF_SAIDA}</tpNF>`,
    '<IE>ISENTO</IE>',
    '<dest>',
    `<UF>${destUF}</UF>`,
    recipientTag,
    `<vNF>${input.totalValue}</vNF>`,
    '<vICMS>0.00</vICMS>',
    '<vST>0.00</vST>',
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
    '<envEvento versao="1.00">',
    '<idLote>1</idLote>',
    '<evento versao="1.00">',
    `<infEvento Id="ID${EPEC_EVENT_CODE}${input.chNFe}${seqEvento}">`,
    `<cOrgao>${SVCAN_C_ORGAO}</cOrgao>`,
    '<tpAmb>2</tpAmb>',
    issuerTag,
    `<chNFe>${input.chNFe}</chNFe>`,
    `<dhEvento>${input.emissionDateTime}</dhEvento>`,
    `<tpEvento>${EPEC_EVENT_CODE}</tpEvento>`,
    `<nSeqEvento>${seqEvento}</nSeqEvento>`,
    '<verEvento>1.00</verEvento>',
    detailXml,
    '</infEvento>',
    '</evento>',
    '</envEvento>',
  ].join('');
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
  return `<idEstrangeiro>${recipientDocument}</idEstrangeiro>`;
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

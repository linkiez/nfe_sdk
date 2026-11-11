import { CODE128_PATTERNS } from './code128-patterns.js';
import { encodeCode128C } from './code128.js';
import type { MDFeDocumentSummary } from './contracts.js';
import { MDFeDamdfeUsageError } from './mdfe-damdfe-usage-error.js';
import { MDFeParseError } from './mdfe-parse-error.js';
import { parseMDFeXml } from './parse-mdfe.js';
import { PdfDocument, type PdfPage } from './pdf-document.js';

const MARGIN = 36;
const LINES_PER_PAGE = 48;
const MODULE_WIDTH = 1.15;
const HOMOLOGATION_NOTICE = 'EMITIDO EM AMBIENTE DE HOMOLOGAÇÃO - SEM VALOR FISCAL';
const MODAL_LABELS: Readonly<Record<string, string>> = {
  road: 'Rodoviário',
  air: 'Aéreo',
  waterway: 'Aquaviário',
  rail: 'Ferroviário',
  unknown: '—',
};

/** Input of {@link renderDAMDFE}. */
export interface RenderDAMDFEInput {
  /** `mdfeProc` XML (signed MDF-e + `protMDFe`) of an authorized MDF-e. */
  readonly authorizedXml: string;
}

function drawBarcode(page: PdfPage, digits: string, x: number, y: number, height: number): void {
  let cursor = x;
  for (const symbol of encodeCode128C(digits)) {
    const pattern = CODE128_PATTERNS[symbol];
    [...pattern].forEach((width, index) => {
      const size = Number(width) * MODULE_WIDTH;
      if (index % 2 === 0) page.rect(cursor, y, size, height);
      cursor += size;
    });
  }
}

/** Facts for the drawing that the summary does not carry (all read from the XML). */
function extras(
  xml: string,
  ownKey: string,
): { documents: string[]; plates: string[]; contingency: boolean } {
  const documents = [...xml.matchAll(/<ch(?:NFe|CTe|MDFe)>(\d{44})<\/ch(?:NFe|CTe|MDFe)>/gu)].map(([, key]) => key)
    .filter((key) => key !== ownKey);
  const plates = [...xml.matchAll(/<placa>([^<]+)<\/placa>/gu)].map(([, plate]) => plate.trim());

  return {
    documents: [...new Set(documents)],
    plates: [...new Set(plates)],
    contingency: /<tpEmis>2<\/tpEmis>/u.test(xml),
  };
}

function field(page: PdfPage, y: number, label: string, value: string | undefined): number {
  page.text(MARGIN, y, `${label}:`, 8, true);
  page.text(MARGIN + 120, y, value ?? '—', 9);

  return y - 14;
}

function summaryPage(
  pdf: PdfDocument,
  summary: MDFeDocumentSummary,
  more: ReturnType<typeof extras>,
): void {
  const page = pdf.addPage();
  let y = PdfDocument.pageHeight - MARGIN;
  page.text(MARGIN, y, 'DAMDFE - Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais', 11, true);
  y -= 14;
  page.text(MARGIN, y, 'Resumo gerado a partir do XML autorizado, sem informações além das do próprio MDF-e.', 8);
  y -= 22;
  if (summary.environment === 'homologation') {
    page.text(MARGIN, y, HOMOLOGATION_NOTICE, 10, true);
    y -= 20;
  }
  y = field(page, y, 'Chave de acesso', summary.accessKey);
  drawBarcode(page, summary.accessKey, MARGIN, y - 38, 34);
  y -= 56;
  y = field(
    page,
    y,
    'Protocolo de autorização',
    more.contingency ? 'EMISSÃO EM CONTINGÊNCIA' : `${summary.protocol?.number ?? '—'} - ${summary.protocol?.receivedAt ?? ''}`,
  );
  y = field(page, y, 'Emitente', `${summary.issuer.name ?? '—'} (${summary.issuer.taxId})`);
  y = field(page, y, 'Modelo / série / número', `58 / ${summary.series ?? '—'} / ${summary.number ?? '—'}`);
  y = field(page, y, 'Data e hora de emissão', summary.issuedAt);
  y = field(page, y, 'Modal', MODAL_LABELS[summary.modal]);
  y = field(page, y, 'UF de início / fim', `${summary.originUF ?? '—'} / ${summary.destinationUF ?? '—'}`);
  y = field(page, y, 'Placas', more.plates.length === 0 ? undefined : more.plates.join(', '));
  y = field(page, y, 'Documentos vinculados', String(summary.totals.documents));
  y = field(page, y, 'Valor total da carga', summary.totals.cargoValue);
  y = field(page, y, 'Peso total / unidade', `${summary.totals.cargoQuantity ?? '—'} (unid. ${summary.totals.cargoUnit ?? '—'})`);
  y -= 8;
  page.text(MARGIN, y, 'Documentos fiscais (chaves de acesso)', 9, true);
  more.documents.slice(0, LINES_PER_PAGE - 33).forEach((key, index) => {
    page.text(MARGIN, y - 14 - index * 11, key, 8);
  });
}

function overflowPages(pdf: PdfDocument, documents: string[], firstPageCapacity: number): void {
  for (let start = firstPageCapacity; start < documents.length; start += LINES_PER_PAGE) {
    const page = pdf.addPage();
    page.text(MARGIN, PdfDocument.pageHeight - MARGIN, 'Documentos fiscais (continuação)', 9, true);
    documents.slice(start, start + LINES_PER_PAGE).forEach((key, index) => {
      page.text(MARGIN, PdfDocument.pageHeight - MARGIN - 16 - index * 11, key, 8);
    });
  }
}

/**
 * Draws a summary of an authorized MDF-e as a PDF: access key with its Code 128C barcode,
 * protocol, issuer, route, totals and the linked document keys. It prints only what the XML
 * contains (plus the protocol), shows the homologation notice when applicable, and does not draw
 * the QR Code of the official DAMDFE model.
 *
 * @param input - Authorized `mdfeProc` XML.
 * @returns The PDF bytes.
 * @throws {MDFeDamdfeUsageError} When the XML is not a well-formed MDF-e authorized with `cStat` 100.
 */
export async function renderDAMDFE(input: RenderDAMDFEInput): Promise<Uint8Array> {
  let summary;
  try {
    summary = parseMDFeXml(input.authorizedXml);
  } catch (error) {
    throw new MDFeDamdfeUsageError(
      error instanceof MDFeParseError ? error.message : 'The XML could not be read as a MDF-e.',
    );
  }
  if (summary.kind !== 'document') {
    throw new MDFeDamdfeUsageError('A DAMDFE is drawn from a MDF-e document, not from an event.');
  }
  if (!summary.authorized) {
    throw new MDFeDamdfeUsageError('renderDAMDFE requires an authorized mdfeProc (protocol cStat 100).');
  }

  const more = extras(input.authorizedXml, summary.accessKey);
  const pdf = new PdfDocument();
  summaryPage(pdf, summary, more);
  overflowPages(pdf, more.documents, LINES_PER_PAGE - 33);

  return pdf.toBytes();
}

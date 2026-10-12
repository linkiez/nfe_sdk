import QRCode from 'qrcode';

import { NFCeOperationalUsageError } from './errors.js';
import type NFCePresentation from './render-nfce-sp-danfe-model.js';

const HOMOLOGATION_NOTICE =
  'EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL';
const QR_FOOTPRINT_MM = 25;
const QR_CONTENT_MM = 22;

interface NFCeIdentity {
  readonly accessKey: string;
  readonly environment: 'homologation' | 'production';
  readonly protocolNumber?: string;
  readonly qrCodeUrl: string;
  readonly requestEnvelopeSha256?: string;
  readonly signedXmlSha256?: string;
  readonly pendingAuthorization?: boolean;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatAccessKey(accessKey: string): string {
  return accessKey.match(/.{4}/gu)?.join(' ') ?? accessKey;
}

function renderItems(items: NFCePresentation['items']): string {
  return items
    .map(
      (item, index) => `<article class="item" data-layout-block data-layout-item>
        <h3>${index + 1}. ${escapeHtml(item.description)}</h3>
        <p>Código: ${escapeHtml(item.code)}</p>
        <p>Quantidade: ${escapeHtml(item.quantity)} ${escapeHtml(item.unit)}</p>
        <p>Valor unitário: ${escapeHtml(item.unitPrice)}</p>
        <p>Valor total: ${escapeHtml(item.total)}</p>
      </article>`,
    )
    .join('');
}

function renderPayments(
  payments: NFCePresentation['payments'],
  change: string | undefined,
): string {
  const details = payments
    .map(
      ({ amount, method }) =>
        `<li>${escapeHtml(method)}: R$ ${escapeHtml(amount)}</li>`,
    )
    .join('');
  return `<ul>${details}</ul>${
    change === undefined
      ? ''
      : `<p>Troco: R$ ${escapeHtml(change)}</p>`
  }`;
}

function renderQrSvg(qrSvg: string): string {
  const dimensions = /viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/u.exec(
    qrSvg,
  );
  const paths = Array.from(qrSvg.matchAll(/<path\b[^>]*\/>/gu), ([path]) => path);
  if (dimensions === null || paths.length === 0) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE could not create an inline QR Code SVG.',
    );
  }
  const width = Number(dimensions[1]);
  const height = Number(dimensions[2]);
  if (width <= 0 || height <= 0) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE received an invalid QR Code SVG.',
    );
  }
  const scale = QR_CONTENT_MM / Math.max(width, height);
  const x = (QR_FOOTPRINT_MM - width * scale) / 2;
  const y = (QR_FOOTPRINT_MM - height * scale) / 2;
  return `<svg class="qr-code" xmlns="http://www.w3.org/2000/svg" width="${QR_FOOTPRINT_MM}mm" height="${QR_FOOTPRINT_MM}mm" viewBox="0 0 ${QR_FOOTPRINT_MM} ${QR_FOOTPRINT_MM}" role="img" aria-label="QR Code de consulta da NFC-e"><rect width="25" height="25" fill="#fff"/><g transform="translate(${x} ${y}) scale(${scale})">${paths.join('')}</g></svg>`;
}

/**
 * Creates semantic HTML and QR SVG for already-correlated NFC-e data.
 *
 * @param presentation - Escaped-at-output fiscal content projected from XML.
 * @param result - Validated document and authorization identity.
 * @param paperWidthMm - Supported physical output width.
 * @returns Complete self-contained HTML document.
 */
export default async function renderNFCeHtml(
  presentation: NFCePresentation,
  result: NFCeIdentity,
  paperWidthMm: number,
): Promise<string> {
  const qrSvg = await QRCode.toString(result.qrCodeUrl, {
    errorCorrectionLevel: 'M',
    margin: 0,
    type: 'svg',
  });
  const homologationNotice =
    result.environment === 'homologation'
      ? `<p class="homologation-notice" data-layout-block>${HOMOLOGATION_NOTICE}</p>`
      : '';
  const contingencyNotice = result.pendingAuthorization
    ? '<p class="contingency-notice" data-layout-block>EMITIDA EM CONTINGÊNCIA Pendente de autorização</p>'
    : '';
  const consumer =
    presentation.consumer === undefined
      ? ''
      : `<p>Consumidor: ${escapeHtml(presentation.consumer)}</p>`;
  const delivery =
    presentation.deliveryAddress === undefined
      ? ''
      : `<p>Entrega: ${escapeHtml(presentation.deliveryAddress)}</p>`;
  const messages = presentation.additionalMessages
    .map((message) => `<p>${escapeHtml(message)}</p>`)
    .join('');
  const totals = presentation.totals
    .map(
      ({ label, value }) =>
        `<p><span>${escapeHtml(label)}</span><strong>R$ ${escapeHtml(value)}</strong></p>`,
    )
    .join('');
  const qrContent = renderQrSvg(qrSvg);
  const consultationUrl = escapeHtml(result.qrCodeUrl);
  const digest = escapeHtml(
    result.requestEnvelopeSha256 ?? result.signedXmlSha256 ?? '',
  );
  const digestName = result.pendingAuthorization
    ? 'nfe-sdk-signed-xml-sha256'
    : 'nfe-sdk-request-envelope-sha256';
  const authorizationDetails =
    result.protocolNumber !== undefined &&
    presentation.authorizationDate !== undefined
      ? `<p>Protocolo de autorização: ${escapeHtml(result.protocolNumber)} - ${escapeHtml(presentation.authorizationDate)}</p>`
      : '<p>EMITIDA EM CONTINGÊNCIA Pendente de autorização</p>';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="${digestName}" content="${digest}">
<title>DANFE NFC-e ${escapeHtml(presentation.documentNumber)}</title>
<style>
  * { box-sizing: border-box; }
  html { color: #111; font: 12px/1.35 Arial, sans-serif; }
  body { margin: 0; padding: 8px; background: #eee; }
  .danfe { width: min(${paperWidthMm}mm, calc(100vw - 16px)); margin: 0 auto; padding: 2mm; background: #fff; overflow-wrap: anywhere; }
  h1, h2, h3, p, address { margin: 0 0 5px; }
  h1 { font-size: 16px; text-align: center; }
  h2 { font-size: 13px; border-bottom: 1px solid #333; padding-bottom: 3px; }
  h3 { font-size: 12px; }
  section, header, footer { margin-bottom: 8px; }
  address { font-style: normal; }
  .item { padding: 5px 0; border-bottom: 1px dashed #555; break-inside: avoid; }
  .totals p { display: flex; justify-content: space-between; gap: 6px; }
  .key { font: 12px/1.6 monospace; letter-spacing: .04em; overflow-wrap: anywhere; }
  .qr { text-align: center; }
  .qr-code { display: block; width: 25mm; height: 25mm; margin: 0 auto 4px; }
  .homologation-notice { font-weight: 700; text-align: center; }
  .contingency-notice { font-weight: 700; text-align: center; }
  a { color: inherit; overflow-wrap: anywhere; }
  @media print {
    body { padding: 0; background: #fff; }
    .danfe { width: ${paperWidthMm}mm; max-width: 100%; margin: 0; padding: 0; }
  }
</style>
</head>
<body>
<main class="danfe" data-paper-width-mm="${paperWidthMm}">
  ${homologationNotice}
  ${contingencyNotice}
  <header data-layout-block>
    <h1>${escapeHtml(presentation.issuerName)}</h1>
    <p>${escapeHtml(presentation.issuerDocument)}</p>
    <address>${escapeHtml(presentation.issuerAddress)}</address>
    ${consumer}
    ${delivery}
    <p>DANFE NFC-e - Documento Auxiliar da Nota Fiscal de Consumidor Eletrônica</p>
    <p>Número ${escapeHtml(presentation.documentNumber)} - Série ${escapeHtml(presentation.documentSeries)}</p>
    <p>Emissão: ${escapeHtml(presentation.documentDate)}</p>
  </header>
  <section aria-labelledby="items-heading">
    <h2 id="items-heading">Itens da compra (${presentation.items.length})</h2>
    ${renderItems(presentation.items)}
  </section>
  <section class="totals" data-layout-block aria-labelledby="totals-heading">
    <h2 id="totals-heading">Totais</h2>
    ${totals}
  </section>
  <section data-layout-block aria-labelledby="payments-heading">
    <h2 id="payments-heading">Pagamento</h2>
    ${renderPayments(presentation.payments, presentation.change)}
  </section>
  <section class="qr" data-layout-block aria-labelledby="consult-heading">
    <h2 id="consult-heading">Consulte pela chave de acesso</h2>
    <p class="key">${formatAccessKey(result.accessKey)}</p>
    ${authorizationDetails}
    ${qrContent}
    <a href="${consultationUrl}">${consultationUrl}</a>
  </section>
  ${
    messages.length === 0
      ? ''
      : `<section data-layout-block aria-labelledby="messages-heading"><h2 id="messages-heading">Informações adicionais</h2>${messages}</section>`
  }
</main>
</body>
</html>`;
}

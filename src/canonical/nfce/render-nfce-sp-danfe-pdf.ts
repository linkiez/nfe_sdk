import type { NFCeSPDanfePdfResult, RenderNFCeSPDANFEPdfInput } from './contracts.js';
import projectAuthorizedNFCeXml from './render-nfce-sp-danfe-authorized-projection.js';
import resolveNFCeLogo from './render-nfce-sp-danfe-logo.js';
import resolveNFCePaperWidth from './render-nfce-sp-danfe-paper.js';
import drawNFCeDanfePdf from './render-nfce-sp-danfe-pdf-draw.js';
import layoutNFCeDanfe from './render-nfce-sp-danfe-pdf-layout.js';

/**
 * Renders the DANFE NFC-e of an authorized SP NFC-e as a PDF, from its stored `nfeProc`, with the
 * same validation, fiscal content and legal texts as the HTML DANFE: one page as wide as the
 * thermal paper and as tall as the content, with the QR Code of the consultation URL.
 *
 * @param input - Authorized `nfeProc`, optional paper width (56–210 mm, default 80) and logo.
 * @returns The PDF bytes and the identity of the rendered authorization.
 * @throws {NFCeOperationalUsageError} When the XML is not an authorized SP NFC-e, the width is
 *   out of range or the logo is not an image data URI.
 * @example
 * ```ts
 * const { pdf } = await renderNFCeSPDANFEPdf({ authorizedXml });
 * ```
 */
export async function renderNFCeSPDANFEPdf(
  input: RenderNFCeSPDANFEPdfInput,
): Promise<NFCeSPDanfePdfResult> {
  const paperWidthMm = resolveNFCePaperWidth(input.paperWidthMm);
  const logo = resolveNFCeLogo(input.logo);
  const { presentation, identity } = projectAuthorizedNFCeXml(input.authorizedXml);
  const pdf = await drawNFCeDanfePdf(
    layoutNFCeDanfe(presentation, identity, logo !== undefined),
    { qrCodeUrl: identity.qrCodeUrl, paperWidthMm, ...(logo ? { logo } : {}) },
  );

  return {
    accessKey: identity.accessKey,
    authorizedXmlSha256: identity.authorizedXmlSha256,
    environment: identity.environment,
    pdf,
    mediaType: 'application/pdf',
    protocolNumber: identity.protocolNumber,
  };
}

import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFImage } from 'pdf-lib';
import QRCode from 'qrcode';

import type { NFCeDanfeBlock } from './render-nfce-sp-danfe-pdf-layout.js';

const MM_TO_PT = 72 / 25.4;
const MARGIN_MM = 3;
/** Same QR Code footprint as the HTML DANFE. */
const QR_FOOTPRINT_MM = 25;
const LOGO_MAX_HEIGHT_MM = 18;
const LINE_GAP = 1.3;
const BLOCK_GAP_PT = 3;

interface Fonts {
  readonly regular: PDFFont;
  readonly bold: PDFFont;
  readonly size: number;
}

/** Characters outside the font encoding (WinAnsi) become `?`, so drawing never throws. */
function encodable(text: string, font: PDFFont): string {
  const supported = new Set(font.getCharacterSet());
  return Array.from(text.normalize('NFC'))
    .map((char) => (supported.has(char.codePointAt(0) ?? -1) ? char : '?'))
    .join('');
}

/** Splits text into lines that fit `width`, breaking long words (URLs) by character. */
function wrap(text: string, font: PDFFont, size: number, width: number): string[] {
  const lines: string[] = [];
  let current = '';
  const fits = (value: string) => font.widthOfTextAtSize(value, size) <= width;
  for (const word of text.split(/\s+/u).filter(Boolean)) {
    const candidate = current ? `${current} ${word}` : word;
    if (fits(candidate)) {
      current = candidate;
      continue;
    }
    if (current) lines.push(current);
    current = '';
    for (const char of word) {
      if (fits(current + char)) current += char;
      else {
        lines.push(current);
        current = char;
      }
    }
  }
  if (current) lines.push(current);

  return lines.length > 0 ? lines : [''];
}

/** A drawing step with the height it takes; drawn top to bottom. */
interface Step {
  readonly height: number;
  readonly draw: (top: number) => void;
}

function decodeDataUri(dataUri: string): { mime: string; bytes: Buffer } | null {
  const match = /^data:(image\/[a-z]+);base64,(.+)$/u.exec(dataUri);
  return match ? { mime: match[1], bytes: Buffer.from(match[2], 'base64') } : null;
}

/**
 * Draws the laid-out DANFE NFC-e blocks on one PDF page as wide as the paper and as tall as the
 * content (thermal paper style), with the QR Code of the consultation URL and the issuer logo.
 *
 * @param blocks - Blocks from `layoutNFCeDanfe`, in print order.
 * @param options - Consultation URL for the QR Code, paper width and optional logo data URI
 *   (PNG or JPEG are drawn; other formats are left out).
 * @returns The PDF bytes.
 */
export default async function drawNFCeDanfePdf(
  blocks: readonly NFCeDanfeBlock[],
  options: { readonly qrCodeUrl: string; readonly paperWidthMm: number; readonly logo?: string },
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const fonts: Fonts = {
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
    size: options.paperWidthMm >= 70 ? 7.5 : 6.5,
  };
  const pageWidth = options.paperWidthMm * MM_TO_PT;
  const margin = MARGIN_MM * MM_TO_PT;
  const contentWidth = pageWidth - 2 * margin;
  const lineHeight = fonts.size * LINE_GAP;

  const qrImage = await pdf.embedPng(
    await QRCode.toBuffer(options.qrCodeUrl, {
      errorCorrectionLevel: 'M',
      margin: 0,
      type: 'png',
      width: 512,
    }),
  );
  const logoSource = options.logo ? decodeDataUri(options.logo) : null;
  let logoImage: PDFImage | null = null;
  if (logoSource?.mime === 'image/png') logoImage = await pdf.embedPng(logoSource.bytes);
  if (logoSource?.mime === 'image/jpeg') logoImage = await pdf.embedJpg(logoSource.bytes);

  // Pages are drawn after measuring, so `page` is assigned before any step runs.
  let page!: ReturnType<PDFDocument['addPage']>;
  const steps: Step[] = blocks.flatMap((block): Step[] => {
    if (block.kind === 'rule') {
      return [
        {
          height: BLOCK_GAP_PT * 2,
          draw: (top) =>
            page.drawLine({
              start: { x: margin, y: top - BLOCK_GAP_PT },
              end: { x: pageWidth - margin, y: top - BLOCK_GAP_PT },
              thickness: 0.5,
              dashArray: [2, 2],
              color: rgb(0, 0, 0),
            }),
        },
      ];
    }
    if (block.kind === 'qr') {
      const size = QR_FOOTPRINT_MM * MM_TO_PT;
      return [
        {
          height: size + BLOCK_GAP_PT * 2,
          draw: (top) =>
            page.drawImage(qrImage, {
              x: (pageWidth - size) / 2,
              y: top - BLOCK_GAP_PT - size,
              width: size,
              height: size,
            }),
        },
      ];
    }
    if (block.kind === 'logo') {
      if (!logoImage) return [];
      const image = logoImage;
      const scaled = image.scaleToFit(contentWidth, LOGO_MAX_HEIGHT_MM * MM_TO_PT);
      return [
        {
          height: scaled.height + BLOCK_GAP_PT,
          draw: (top) =>
            page.drawImage(image, {
              x: (pageWidth - scaled.width) / 2,
              y: top - scaled.height,
              width: scaled.width,
              height: scaled.height,
            }),
        },
      ];
    }
    if (block.kind === 'pair') {
      const right = encodable(block.right, fonts.bold);
      const rightWidth = fonts.bold.widthOfTextAtSize(right, fonts.size);
      const leftLines = wrap(
        encodable(block.left, fonts.regular),
        fonts.regular,
        fonts.size,
        contentWidth - rightWidth - 4,
      );
      return [
        {
          height: leftLines.length * lineHeight,
          draw: (top) => {
            leftLines.forEach((text, index) =>
              page.drawText(text, {
                x: margin,
                y: top - (index + 1) * lineHeight + 2,
                size: fonts.size,
                font: fonts.regular,
              }),
            );
            page.drawText(right, {
              x: pageWidth - margin - rightWidth,
              y: top - leftLines.length * lineHeight + 2,
              size: fonts.size,
              font: fonts.bold,
            });
          },
        },
      ];
    }
    const font = block.bold ? fonts.bold : fonts.regular;
    const lines = wrap(encodable(block.text, font), font, fonts.size, contentWidth);
    return [
      {
        height: lines.length * lineHeight,
        draw: (top) =>
          lines.forEach((text, index) => {
            const width = font.widthOfTextAtSize(text, fonts.size);
            page.drawText(text, {
              x: block.align === 'center' ? (pageWidth - width) / 2 : margin,
              y: top - (index + 1) * lineHeight + 2,
              size: fonts.size,
              font,
            });
          }),
      },
    ];
  });

  const contentHeight = steps.reduce((total, step) => total + step.height, 0);
  page = pdf.addPage([pageWidth, contentHeight + 2 * margin]);
  let top = contentHeight + margin;
  for (const step of steps) {
    step.draw(top);
    top -= step.height;
  }

  return pdf.save();
}

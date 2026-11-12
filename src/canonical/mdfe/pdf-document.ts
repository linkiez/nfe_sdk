const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;

const escapeText = (text: string): string =>
  text.replace(/[\\()]/gu, (character) => `\\${character}`);

const number = (value: number): string => value.toFixed(2).replace(/\.?0+$/u, '');

/** One page being drawn. */
export class PdfPage {
  private readonly operations: string[] = [];

  /**
   * Draws a text line (WinAnsi/Latin-1 characters only; others become `?`).
   *
   * @param x - Left position in points.
   * @param y - Baseline from the bottom in points.
   * @param text - The text.
   * @param size - Font size in points.
   * @param bold - Uses Helvetica-Bold.
   */
  text(x: number, y: number, text: string, size = 9, bold = false): void {
    const latin1 = [...text].map((character) => (character.charCodeAt(0) > 255 ? '?' : character)).join('');
    this.operations.push(
      `BT /${bold ? 'F2' : 'F1'} ${number(size)} Tf ${number(x)} ${number(y)} Td (${escapeText(latin1)}) Tj ET`,
    );
  }

  /** Fills a black rectangle (barcode bars, rules). */
  rect(x: number, y: number, width: number, height: number): void {
    this.operations.push(`${number(x)} ${number(y)} ${number(width)} ${number(height)} re f`);
  }

  /** Content stream of the page. */
  get content(): string {
    return this.operations.join('\n');
  }
}

/** Minimal single-font-family PDF writer (A4, uncompressed content, no dependencies). */
export class PdfDocument {
  static readonly pageWidth = PAGE_WIDTH;
  static readonly pageHeight = PAGE_HEIGHT;
  private readonly pages: PdfPage[] = [];

  /** Adds an empty A4 page and returns it. */
  addPage(): PdfPage {
    const page = new PdfPage();
    this.pages.push(page);

    return page;
  }

  /**
   * Serializes the document as PDF 1.4.
   *
   * @returns The PDF bytes.
   */
  toBytes(): Uint8Array {
    const objects: string[] = [];
    const pageObjectIds = this.pages.map((_, index) => 5 + index * 2);
    objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
    objects[2] = `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${this.pages.length} >>`;
    objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>';
    objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>';
    this.pages.forEach((page, index) => {
      const pageId = 5 + index * 2;
      const stream = page.content;
      objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${number(PAGE_WIDTH)} ${number(PAGE_HEIGHT)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${pageId + 1} 0 R >>`;
      objects[pageId + 1] = `<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`;
    });

    let output = '%PDF-1.4\n';
    const offsets: number[] = [];
    for (let id = 1; id < objects.length; id += 1) {
      offsets[id] = Buffer.byteLength(output, 'latin1');
      output += `${id} 0 obj\n${objects[id]}\nendobj\n`;
    }
    const xrefOffset = Buffer.byteLength(output, 'latin1');
    output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
    for (let id = 1; id < objects.length; id += 1) {
      output += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
    }
    output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

    return new Uint8Array(Buffer.from(output, 'latin1'));
  }
}

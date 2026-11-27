import { PDFDocument } from 'pdf-lib';

import { buildSPDanfeAuthorizedXml } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { NFCeOperationalUsageError } from '../../../src/canonical/nfce/errors.js';
import { renderNFCeSPDANFEPdf } from '../../../src/canonical/nfce/render-nfce-sp-danfe-pdf.js';

const MM_TO_PT = 72 / 25.4;
const PNG_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

describe('renderNFCeSPDANFEPdf', () => {
  it('renders a one-page PDF on 80 mm paper with the identity of the authorization', async () => {
    const result = await renderNFCeSPDANFEPdf({
      authorizedXml: buildSPDanfeAuthorizedXml(),
      logo: PNG_PIXEL,
    });

    const pdf = await PDFDocument.load(result.pdf);
    const [page] = pdf.getPages();
    expect(pdf.getPageCount()).toBe(1);
    expect(page.getWidth()).toBeCloseTo(80 * MM_TO_PT, 1);
    expect(page.getHeight()).toBeGreaterThan(100 * MM_TO_PT);
    expect(result).toMatchObject({
      accessKey: '35260512345678000123650020000004561876543219',
      environment: 'production',
      mediaType: 'application/pdf',
    });
  });

  it('renders on 58 mm paper', async () => {
    const result = await renderNFCeSPDANFEPdf({
      authorizedXml: buildSPDanfeAuthorizedXml('homologation'),
      paperWidthMm: 58,
    });

    const [page] = (await PDFDocument.load(result.pdf)).getPages();
    expect(page.getWidth()).toBeCloseTo(58 * MM_TO_PT, 1);
  });

  it('draws descriptions with characters the PDF font cannot encode', async () => {
    const authorizedXml = buildSPDanfeAuthorizedXml('production', {
      nfe: (xml) =>
        xml.replace('Cafe &amp; acucar', 'Tubo Ø 2″ → aço ≤ 3mm ✓ 日本'),
    });

    await expect(
      renderNFCeSPDANFEPdf({ authorizedXml }),
    ).resolves.toMatchObject({ mediaType: 'application/pdf' });
  });

  it('refuses an XML that is not an authorized SP NFC-e', async () => {
    await expect(
      renderNFCeSPDANFEPdf({ authorizedXml: '<nfeProc/>' }),
    ).rejects.toBeInstanceOf(NFCeOperationalUsageError);
  });
});

import {
  BinaryBitmap,
  HybridBinarizer,
  MultiFormatReader,
  RGBLuminanceSource,
} from '@zxing/library';
import sharp from 'sharp';

import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/index.js';

describe('renderNFCeSPDANFE QR output', () => {
  it.each(['production', 'homologation'] as const)(
    'decodes the final %s inline SVG to its official consultation URL',
    async (environment) => {
      const outcome = buildSPDanfeAuthorizationOutcome(environment);
      const result = await renderNFCeSPDANFE({ authorization: outcome });
      const qrSvg = result.html.match(
        /<svg class="qr-code"[\s\S]*?<\/svg>/u,
      )?.[0];
      expect(qrSvg).toBeDefined();
      expect(qrSvg).toContain('width="25mm" height="25mm"');

      const declaredPixels = Math.round((25 * 96) / 25.4);
      const { data, info } = await sharp(Buffer.from(qrSvg ?? ''), {
        density: 96,
      })
        .greyscale()
        .raw()
        .toBuffer({ resolveWithObject: true });
      expect(info.width).toBe(declaredPixels);
      expect(info.height).toBe(declaredPixels);
      const luminance = new Uint8ClampedArray(data);
      const bitmap = new BinaryBitmap(
        new HybridBinarizer(
          new RGBLuminanceSource(luminance, info.width, info.height),
        ),
      );

      expect(new MultiFormatReader().decode(bitmap).getText()).toBe(
        outcome.qrCodeUrl,
      );
    },
  );
});

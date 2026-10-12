import { chromium } from 'playwright';

import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/index.js';

const SCREEN_VIEWPORTS = [
  { height: 568, width: 320 },
  { height: 1024, width: 768 },
  { height: 800, width: 1280 },
] as const;
const PRINT_WIDTHS_MM = [56, 80, 210] as const;

describe('renderNFCeSPDANFE layout', () => {
  it('retains long fiscal text without overlap or clipping at supported widths', async () => {
    const authorization = buildSPDanfeAuthorizationOutcome();
    const longIssuerName = `Comercio ${'MuitoLongo '.repeat(18)}`.trim();
    const longAddress = `Rua ${'EnderecoExtenso '.repeat(15)}`.trim();
    const longItemDescription = `Cafe ${'DescricaoLonga '.repeat(18)}`.trim();
    const secondLongItemDescription =
      `Biscoito ${'OutraDescricaoLonga '.repeat(16)}`.trim();
    const requestEnvelopeXml = authorization
      .transportOutcome!.evidence.requestEnvelopeXml.replace(
        'Comercio Teste &amp; Filhos',
        longIssuerName,
      )
      .replace('Rua de Teste', longAddress)
      .replace('Cafe &amp; acucar', longItemDescription)
      .replace(
        'Biscoito integral pacote familiar',
        secondLongItemDescription,
      );
    const longAuthorization = {
      ...authorization,
      transportOutcome: {
        ...authorization.transportOutcome!,
        evidence: {
          ...authorization.transportOutcome!.evidence,
          requestEnvelopeXml,
        },
      },
    };
    const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
    const browser = await chromium.launch({
      headless: true,
      ...(executablePath === undefined ? {} : { executablePath }),
    });

    try {
      for (const paperWidthMm of PRINT_WIDTHS_MM) {
        const result = await renderNFCeSPDANFE({
          authorization: longAuthorization,
          paperWidthMm,
        });
        for (const viewport of SCREEN_VIEWPORTS) {
          const page = await browser.newPage({ viewport });
          await page.setContent(result.html);
          const screenLayout = await page.evaluate(() => {
            const danfe = window.document.querySelector<HTMLElement>('.danfe');
            const blocks = Array.from(
              danfe?.querySelectorAll<HTMLElement>('[data-layout-block]') ?? [],
            ).map((block) => {
              const rect = block.getBoundingClientRect();
              return {
                isItem: block.hasAttribute('data-layout-item'),
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
                top: rect.top,
                clipped:
                  block.scrollWidth > block.clientWidth ||
                  block.scrollHeight > block.clientHeight,
              };
            });
            return {
              documentClipped:
                !danfe ||
                danfe.scrollWidth > danfe.clientWidth ||
                danfe.scrollHeight > danfe.clientHeight,
              documentRight: danfe?.getBoundingClientRect().right ?? 0,
              blocks,
              pageWidth: window.innerWidth,
            };
          });
          expect(screenLayout.documentClipped).toBe(false);
          expect(screenLayout.documentRight).toBeLessThanOrEqual(
            screenLayout.pageWidth,
          );
          expect(screenLayout.blocks.every((block) => !block.clipped)).toBe(
            true,
          );
          expect(screenLayout.blocks.filter(({ isItem }) => isItem)).toHaveLength(
            2,
          );
          for (let index = 0; index < screenLayout.blocks.length; index += 1) {
            for (
              let otherIndex = index + 1;
              otherIndex < screenLayout.blocks.length;
              otherIndex += 1
            ) {
              const current = screenLayout.blocks[index]!;
              const other = screenLayout.blocks[otherIndex]!;
              expect(
                current.bottom <= other.top ||
                  other.bottom <= current.top ||
                  current.right <= other.left ||
                  other.right <= current.left,
              ).toBe(true);
            }
          }
          expect(
            (await page.locator('.danfe').innerText()).replace(/\s+/gu, ' '),
          ).toContain(longIssuerName);
          expect(
            (await page.locator('.danfe').innerText()).replace(/\s+/gu, ' '),
          ).toContain(longAddress);
          expect(
            (await page.locator('.danfe').innerText()).replace(/\s+/gu, ' '),
          ).toContain(longItemDescription);
          expect(
            (await page.locator('.danfe').innerText()).replace(/\s+/gu, ' '),
          ).toContain(secondLongItemDescription);
          await page.close();
        }

        const printPage = await browser.newPage({
          viewport: {
            height: 1200,
            width: Math.ceil((paperWidthMm * 96) / 25.4),
          },
        });
        await printPage.emulateMedia({ media: 'print' });
        await printPage.setContent(result.html);
        const printLayout = await printPage.evaluate(() => {
          const danfe = document.querySelector<HTMLElement>('.danfe');
          const documentRect = danfe?.getBoundingClientRect();
          const blocks = Array.from(
            danfe?.querySelectorAll<HTMLElement>('[data-layout-block]') ?? [],
          ).map((block) => {
            const rect = block.getBoundingClientRect();
            return {
              isItem: block.hasAttribute('data-layout-item'),
              bottom: rect.bottom,
              left: rect.left,
              right: rect.right,
              top: rect.top,
              clipped:
                block.scrollWidth > block.clientWidth ||
                block.scrollHeight > block.clientHeight,
            };
          });
          return {
            documentClipped: !danfe || danfe.scrollWidth > danfe.clientWidth,
            documentBounds: documentRect
              ? {
                  left: documentRect.left,
                  right: documentRect.right,
                  top: documentRect.top,
                  bottom: documentRect.bottom,
                }
              : null,
            blocks,
            pageWidth: window.innerWidth,
            pageScrollWidth: document.documentElement.scrollWidth,
          };
        });
        expect(printLayout.documentClipped).toBe(false);
        expect(printLayout.documentBounds).not.toBeNull();
        expect(printLayout.pageScrollWidth).toBeLessThanOrEqual(
          printLayout.pageWidth,
        );
        expect(printLayout.documentBounds!.left).toBeGreaterThanOrEqual(0);
        expect(printLayout.documentBounds!.right).toBeLessThanOrEqual(
          printLayout.pageWidth,
        );
        expect(
          printLayout.blocks.every(
            (block) =>
              !block.clipped &&
              block.left >= printLayout.documentBounds!.left &&
              block.right <= printLayout.documentBounds!.right,
          ),
        ).toBe(true);
        expect(printLayout.blocks.filter(({ isItem }) => isItem)).toHaveLength(
          2,
        );
        for (let index = 0; index < printLayout.blocks.length; index += 1) {
          for (
            let otherIndex = index + 1;
            otherIndex < printLayout.blocks.length;
            otherIndex += 1
          ) {
            const current = printLayout.blocks[index]!;
            const other = printLayout.blocks[otherIndex]!;
            expect(
              current.bottom <= other.top ||
                other.bottom <= current.top ||
                current.right <= other.left ||
                other.right <= current.left,
            ).toBe(true);
          }
        }
        await printPage.close();
      }
    } finally {
      await browser.close();
    }
  }, 60000);
});

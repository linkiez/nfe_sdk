# Quickstart: Validate SP NFC-e DANFE Rendering

This guide describes deterministic local validation for the planned renderer. It does not send documents to SEFAZ or require production credentials.

## Prerequisites

- Node.js >=18.18 and npm, as required by the package.
- Repository dependencies installed with `npm ci`.
- Chromium installed for the test-only Playwright layout suite with `npx playwright install chromium`. If Playwright's bundled browser is unavailable but a compatible system Chrome is installed, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path.
- Sanitized deterministic fixtures containing matching SDK authorization outcomes with signed SP model 65 XML in the captured SOAP request envelope and corresponding authorization response evidence. Never use a live consumer document or real CSC in a fixture.

The shared fixture builder is `buildSPDanfeAuthorizationOutcome`: call it without arguments for production or pass `'homologation'`. Render through the package root:

```ts
import { renderNFCeSPDANFE } from 'nfe-sdk';

const result = await renderNFCeSPDANFE({ authorization, paperWidthMm: 80 });
```

## Behavior Scenarios

1. Render a matching production fixture. Confirm the returned HTML contains all required merchant, item, total, payment, key, QR and protocol data extracted from the captured request; confirm the QR decodes to the exact SP production URL and key.
2. Render a matching homologation fixture. Confirm the centered uppercase `EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL` notice and matching homologation QR are present.
3. Vary item/address/name lengths and use Playwright with Chromium at 56 mm, 80 mm, and 210 mm print widths and 320x568, 768x1024, and 1280x800 CSS-pixel screen viewports. Confirm required text boxes do not overlap or clip outside the document bounds, all item text remains present, and the QR remains scannable at 25 mm.
4. Change the captured request key, environment, SOAP response key/protocol or QR URL one at a time. Confirm each mismatch, missing evidence, non-authorized outcome and malformed XML rejects without returning a DANFE.
5. Check the captured request-envelope SHA-256 in result metadata and verify repeated renders from unchanged evidence preserve fiscal text and QR data.

## Commands

Run the focused renderer suites and use system Chrome only when the bundled Playwright browser is unavailable:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome npm test -- --runTestsByPath \
  tests/unit/nfce/render-nfce-sp-danfe.test.ts \
  tests/integration/nfce/render-nfce-sp-danfe.test.ts \
  tests/integration/nfce/render-nfce-sp-danfe-qr.test.ts \
  tests/integration/nfce/render-nfce-sp-danfe-print-layout.test.ts
```

The layout suite checks clipping, document bounds and pairwise overlap in screen and print media at all supported widths/viewports. The QR integration suite independently decodes the SVG for both environments.

Run package gates from repository root:

```bash
npm run lint
npm run format:check
npx prettier --check specs/028-nfce-sp-danfe/*.md specs/028-nfce-sp-danfe/contracts/*.md src/canonical/nfce/render-nfce-sp-danfe*.doc.md
npm run typecheck
npm run build
npm run audit:public-contract
npm run validate:tarball
npm run docs:links
```

Expected result: deterministic fixtures pass; the independent QR decoder recovers the exact URL; invalid or inconsistent evidence fails before HTML is returned; all package gates exit successfully. No SEFAZ endpoint is contacted by rendering or these tests.

See [data-model.md](./data-model.md) for source/evidence correlations and [the rendering contract](./contracts/public-nfce-sp-danfe-rendering.md) for the proposed public API.

# Implementation Plan: NFC-e SP DANFE Rendering

**Branch**: `028-nfce-sp-danfe` (target; current branch remains `main`) | **Date**: 2026-10-12 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/028-nfce-sp-danfe/spec.md`

**Note**: Planning only. No branch switch, implementation, or commit is part of this phase.

## Summary

Add a root-exported, asynchronous SP NFC-e DANFE renderer that accepts either correlated authorized evidence or a signed offline record, and returns self-contained HTML suitable for digital delivery and browser printing. Generate QR as inline SVG at the manual's correction level and physical quiet-zone dimensions. Support SP production and homologation, mark homologation output as having no fiscal value, and keep PDF export, other UFs, and summary DANFE output out of this slice.

## Technical Context

**Language/Version**: TypeScript 6 strict, ESM, Node.js >=18.18

**Primary Dependencies**: Existing `@xmldom/xmldom` for XML parsing; runtime dependency `qrcode` for SVG generation (with `@types/qrcode`); existing Jest, ESLint, Prettier, TypeScript; test-only Playwright 1.58.2 with Chromium for rendered-layout assertions. No browser runtime or network service is required by the SDK.

**Storage**: N/A; rendering is deterministic and local.

**Testing**: Jest with representative production and homologation XML/authorization fixtures, boundary and mismatch tests, Playwright/Chromium layout assertions at 56 mm, 80 mm, and 210 mm print widths and 320x568, 768x1024, and 1280x800 CSS-pixel screen viewports, plus independent QR decode of the rendered SVG at its declared print size. ESLint, Prettier, typecheck, build, public-contract and tarball checks.

**Target Platform**: Node.js ESM consumers; HTML rendered by a modern browser/printer.

**Project Type**: Published npm SDK; additive root-only public API.

**Performance Goals**: Render a single consumer document without remote calls; no throughput target is established by the spec.

**Constraints**: Only SP model 65 in production or homologation; accept either authorized identity-correlated evidence or an exact signed offline record; preserve the official SP QR v3 online URL and add the official offline QR v2 payload; full item detail only; paper width 56-210 mm; HTML output only; screen validation at 320x568, 768x1024, and 1280x800 CSS pixels; no PDF/PNG, ECF, or non-SP layouts. Embed text safely and do not fetch remote assets. Keep XSD and generated trees unchanged.

**Scale/Scope**: One NFC-e per render; one HTML document with inline SVG QR; digital viewport and browser printing on supported widths through A4 portrait width.

**Knowledge Sources**: Primary: national DANFE NFC-e/QR manual v6.0 (March 2025); MOC 7.0 where applicable; SP Portaria SRE 40/2024, as amended by SRE 81/2025; current SEFAZ/SP NFC-e and WebServices pages. Current SP notice confirms 17-digit protocol adoption from 2026-10-05; do not hard-code protocol length. Checked national publication history on 2026-10-12 lists v6.0 as latest. No separate SP print-layout delta was found in the checked sources; treat the national manual as the layout baseline and keep the source limitation explicit. QR package API reference: `qrcode` project documentation, supplementary and non-normative.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design._

- **PASS**: Keep ESM-only packaging and add one renderer function/result type through the existing root export; no CommonJS path or existing API change.
- **PASS**: Consume NFC-e model 65 XML v4.00 without XSD changes or identifier normalization; validate access key/document identity rather than rewrite it.
- **PASS**: Record primary official sources separately from the supplementary `qrcode` API reference in [research.md](./research.md).
- **PASS**: Handwritten runtime changes stay in `src/canonical/nfce/` and existing root export files; do not edit generated schemas or generator output. No strict-type exception is planned.
- **PASS**: Focused Jest, ESLint, Prettier, TypeScript, build, public contract, and tarball commands are listed below. No regeneration command is required.
- **PASS**: New root API and a runtime QR dependency are additive but affect the npm public surface; implementation must update package contract/docs and assess semantic-version impact before release.

Validation commands:

```bash
npm test -- --runInBand --testPathPatterns='nfce.*danfe|danfe.*nfce'
npm run lint
npm run format:check
npx prettier --check specs/028-nfce-sp-danfe/*.md specs/028-nfce-sp-danfe/contracts/*.md src/canonical/nfce/render-nfce-sp-danfe*.doc.md
npm run typecheck
npm run build
npm run audit:public-contract
npm run validate:tarball
npm run docs:links
```

## Project Structure

### Documentation

```text
specs/028-nfce-sp-danfe/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/public-nfce-sp-danfe-rendering.md
```

### Source Code

```text
src/
├── index.ts                         # Existing package root exports
└── canonical/
    ├── index.ts                     # Existing canonical public exports
    └── nfce/
        ├── index.ts                 # NFC-e public exports
        ├── contracts.ts             # Add render input/result types
        ├── render-nfce-sp-danfe.ts             # Evidence correlation and orchestration
        ├── render-nfce-sp-danfe-projection.ts  # Fiscal XML-to-view projection
        ├── render-nfce-sp-danfe-model.ts       # Internal presentation type
        ├── render-nfce-sp-danfe-xml.ts         # Namespace-aware XML helpers
        └── render-nfce-sp-danfe-html.ts        # Escaped HTML and inline QR

tests/
└── existing NFC-e test tree        # Focused renderer, contract and QR fixtures
```

**Structure Decision**: Extend the handwritten NFC-e runtime and established root/canonical export chain. Keep authorization evidence correlation, XML projection, the internal presentation model, namespace-aware XML helpers, and HTML/QR generation in focused internal modules; reuse the current XML parser and NFC-e outcome contract. Add fixtures and focused tests beside the existing NFC-e test suite. Extract the complete signed XML from the captured SOAP request because it is not a separate field on the authorization outcome.

## Design Decisions

- Authorized input remains an `NFCeAuthorizationOutcome`; extract the signed fiscal XML from captured SOAP evidence and correlate XML `Id`/`tpAmb`, response key/environment/protocol, and QR v3 URL. Offline input is a separate signed record; validate its digest and QR v2 URL from the same XML, render as pending, and require no authorization response. Never infer authorization from XML alone.
- Return HTML as a string with inline SVG QR, semantic document structure and print CSS. Browser print/Save as PDF is a consumer workflow; SDK-owned PDF/PNG generation is not included.
- Support SP production and homologation. Homologation output must print the manual's centered uppercase notice `EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL`.
- Generate QR at error-correction level M using the exact official URL associated with the input. Normal authorization keeps QR v3 composition unchanged; offline uses QR v2 parameters and hash from Manual v6 sections 4.3.2 and 4.3.5. The minimum footprint is 25 mm square: 22 mm content plus 3 mm quiet-zone allowance.
- Offline output prints `EMITIDA EM CONTINGÊNCIA Pendente de autorização`, omits the authorization protocol, and carries the required contingency day in its QR payload.
- Support full item detail only, paper widths from 56 mm through 210 mm, responsive screen viewing, and browser printing. Reject unsupported widths and do not claim that software can guarantee six-month physical print durability.
- Validate rendered layout in Chromium at print widths of 56 mm, 80 mm, and 210 mm and screen viewports of 320x568, 768x1024, and 1280x800 CSS pixels; assert required text remains within the document bounds and required text blocks do not overlap.
- Escape all XML-derived text for HTML, emit no active user-provided markup, and make no network requests. Return a SHA-256 digest of the exact captured request envelope with render metadata for reproducibility.
- Use `qrcode`'s promise-based `toString(..., { type: 'svg', errorCorrectionLevel: 'M' })`; verify package/module/type compatibility with the repository's ESM and Node 18 baseline before dependency change. Keep the QR decoder/raster tooling test-only and select versions compatible with the same baseline.

## Roadmap Decision

This feature promotes only the SP DANFE rendering part of RFL-006 to runtime. It is bounded by the already-written feature 028 spec and does not promote consumer consultation, CSC management, contingency, multi-UF rendering, or general issuer onboarding. This is a deliberate update to the older `nfce-operacional-promovivel.md` recommendation to keep DANFE as example/documentation; the newer `recortes-funcionais-prioritarios.md` places SP DANFE inside the RFL-006 runtime/tooling closure. Update the roadmap evidence/status in the implementation phase, not as part of this planning-only artifact set.

## Complexity Tracking

No constitution exceptions or additional architectural layers are required.

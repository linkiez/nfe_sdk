# Tasks: NFC-e SP DANFE Rendering

**Input**: Design documents from `/specs/028-nfce-sp-danfe/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/public-nfce-sp-danfe-rendering.md`, and `quickstart.md`

**Tests**: Required by FR-001–008, CC-003–004, and Constitution Principle IV because this feature adds observable behavior and root package exports. Write focused Jest expectations before implementation and observe their initial failure.

**Organization**: Tasks are grouped by user story. US2 consumes the HTML result delivered by US1 and is independently validated for print constraints and QR readability.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel with tasks in different files and without unfinished dependencies.
- **[Story]**: Required for user-story tasks; omitted for setup, foundational, and polish tasks.
- Every task names the exact file path or paths to change.

## Phase 1: Setup

**Purpose**: Add the runtime and test tooling needed by the planned local SVG QR renderer.

- [x] T001 Add `qrcode` as a runtime dependency and Node.js 18-compatible `playwright`, `sharp`, and `@zxing/library` as development dependencies in `package.json` and `package-lock.json`.

## Phase 2: Foundational

**Purpose**: Provide deterministic, sanitized authorization evidence shared by both user stories.

- [x] T002 [P] Add production and homologation authorized-outcome fixtures with signed model-65 XML in the captured SOAP request, matching response envelope, protocol, and QR URL in `tests/fixtures/nfce/sp-danfe-authorization-outcomes.ts`.

## Phase 3: User Story 1 - Provide a compliant DANFE NFC-e (Priority: P1) 🎯 MVP

**Goal**: Render a self-contained, authorized-looking HTML DANFE only from consistent SP authorization, XML, response, and QR evidence; include required fiscal content and distinguish homologation output.

**Independent Test**: Render the production and homologation fixtures and assert the manual-required issuer, item, totals, payment, key, consultation, protocol, and message fields; verify homologation warning. Each absent, malformed, unauthorized, or mismatched evidence case must reject without returning HTML.

### Tests for User Story 1

> Write these tests first and confirm they fail before implementing the renderer.

- [x] T003 [P] [US1] Add failing unit tests for non-authorized outcomes, missing/malformed SOAP evidence, invalid SP/model-65 XML, key/environment/protocol/QR mismatches, missing mandatory fields, and HTML text escaping in `tests/unit/nfce/render-nfce-sp-danfe.test.ts`.
- [x] T004 [P] [US1] Add failing fixture-based production and homologation tests for required DANFE fields, full item detail, exact 44-digit grouped key, protocol preservation, no remote resources, and the mandatory homologation notice in `tests/integration/nfce/render-nfce-sp-danfe.test.ts`.
- [x] T005 [P] [US1] Add root-export and documented-surface expectations for `renderNFCeSPDANFE` and its public types in `tests/contract/root-entrypoint.test.ts`, `tests/contract/root-contract-boundary.test.ts`, `tests/contract/root-signing-facade.test.ts`, `tests/contract/root-nfe-operational-facade.test.ts`, `tests/contract/root-functional-facade.test.ts`, `tests/contract/public-nfce-operational-facade.test.ts`, `tests/contract/root-transport-facade.test.ts`, `tests/contract/root-recipient-dfe-facade.test.ts`, `tests/contract/package-contract-docs.test.ts`, and `tests/integration/package-tarball-smoke.test.ts`.

### Implementation for User Story 1

- [x] T006 [US1] Add `RenderNFCeSPDANFEInput` and `NFCeSPDanfeResult` strict public types to `src/canonical/nfce/contracts.ts`.
- [x] T007 [US1] Implement authorization/evidence correlation and request-envelope SHA-256 in `src/canonical/nfce/render-nfce-sp-danfe.ts`; project fiscal fields in `src/canonical/nfce/render-nfce-sp-danfe-projection.ts` using `src/canonical/nfce/render-nfce-sp-danfe-model.ts` and `src/canonical/nfce/render-nfce-sp-danfe-xml.ts`; render escaped HTML and inline QR in `src/canonical/nfce/render-nfce-sp-danfe-html.ts`.
- [x] T008 [US1] Add the asynchronous typed root facade delegating to the NFC-e renderer in `src/canonical/facade/render-nfce-sp-danfe.ts`.
- [x] T009 [US1] Export `renderNFCeSPDANFE` and its types through `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`, and add the additive public-surface note to `src/public-contract.ts`.
- [x] T010 [US1] Document the root import, authorized-outcome input, HTML result, supported SP environments, and explicit exclusions in `README.md` and `src/canonical/facade/render-nfce-sp-danfe.doc.md`.
- [x] T011 [US1] Update the RFL-006 runtime promotion status and link its SP DANFE boundary to feature 028 in `docs/roadmap/nfce-operacional-promovivel.md` and `docs/roadmap/recortes-funcionais-prioritarios.md`.

**Checkpoint**: US1 must pass its focused Jest tests and produce complete production and homologation HTML independently of printer-specific controls.

## Phase 4: User Story 2 - Print for common retail use (Priority: P2)

**Goal**: Keep long content legible on supported 56–210 mm print widths and ensure the final inline QR remains physically sized and machine-readable.

**Independent Test**: Use Playwright with Chromium to render fixtures at 56 mm, 80 mm, and 210 mm print widths and 320x568, 768x1024, and 1280x800 CSS-pixel screen viewports. Assert required text blocks have no geometric overlap or clipping outside the document bounds, all item text is retained, QR SVG declares at least a 25 mm footprint, and a QR decoder recovers the exact official URL.

### Tests for User Story 2

> Write these tests first and confirm they fail before implementing print-specific behavior.

- [x] T012 [P] [US2] Add an integration test that rasterizes the final inline SVG with `sharp`, decodes it with `@zxing/library`, and checks the exact production and homologation consultation URLs at their declared print dimensions in `tests/integration/nfce/render-nfce-sp-danfe-qr.test.ts`.
- [x] T013 [P] [US2] Add Playwright/Chromium layout tests for default 80 mm, inclusive 56–210 mm bounds, rejected invalid widths, long merchant/address/item content, and required-text non-overlap, document-bound containment, and content retention at print widths of 56 mm, 80 mm, and 210 mm and screen viewports of 320x568, 768x1024, and 1280x800 CSS pixels in `tests/integration/nfce/render-nfce-sp-danfe-print-layout.test.ts`.

### Implementation for User Story 2

- [x] T014 [US2] Generate the inline QR from the already-correlated official URL with error-correction level M, a 25 mm minimum footprint, and the required quiet-zone/safe-margin sizing in `src/canonical/nfce/render-nfce-sp-danfe-html.ts`.
- [x] T015 [US2] Apply the 80 mm default and reject non-finite or out-of-range `paperWidthMm` values outside 56–210 mm in `src/canonical/nfce/render-nfce-sp-danfe.ts`.
- [x] T016 [US2] Add responsive screen and browser-print CSS with wrapping and non-clipping rules for every item and required text at supported widths in `src/canonical/nfce/render-nfce-sp-danfe-html.ts`.

**Checkpoint**: US2 must pass browser-measured print and screen layout assertions and independently decode the QR embedded in rendered HTML to the exact authorized URL.

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Align delivery guidance with the completed renderer and verify all public-package gates.

- [x] T017 [P] Update `specs/028-nfce-sp-danfe/quickstart.md` with the implemented fixture names, renderer invocation, QR decode check, and final supported-width validation steps.
- [x] T018 Run the focused and full Jest suites, lint, Prettier checks, typecheck, build, public-contract audit, tarball validation, and documentation-link validation listed in `specs/028-nfce-sp-danfe/plan.md`; fix feature-caused failures in their owning source, test, or documentation files.

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: T001 must complete before renderer and QR integration tests can use the runtime/test dependencies.
- **Foundational (Phase 2)**: T002 provides the shared sanitized evidence fixtures and blocks fixture-based story tests.
- **US1 (Phase 3)**: T003–T005 establish failing behavioral and public-contract expectations before T006–T011 implement, publish, document, and record the renderer's roadmap promotion.
- **US2 (Phase 4)**: Depends on US1's HTML renderer; T012–T013 establish QR and browser-layout checks before T014–T016 implement those constraints.
- **Polish (Phase 5)**: T017 may proceed after the fixture contract and viewport matrix are fixed; T018 depends on both desired stories and documentation updates being complete.

### User Story Dependencies

- **US1 (P1)**: Depends on setup and foundational fixture completion; otherwise independent.
- **US2 (P2)**: Depends on US1's renderer and result contract because its print and QR checks exercise that output.

### Parallel Opportunities

- T001 and T002 are independent setup/fixture work.
- Within US1, T003, T004, and T005 can be authored in parallel because they touch separate test files.
- Within US2, T012 and T013 can be authored in parallel because they touch separate test files.
- T017 can be prepared in parallel with US2 test authoring once the fixture contract and viewport matrix are fixed.

## Parallel Example: User Story 1

```text
Task T003: Unit rejection and escaping tests in tests/unit/nfce/render-nfce-sp-danfe.test.ts
Task T004: Production/homologation fixture tests in tests/integration/nfce/render-nfce-sp-danfe.test.ts
Task T005: Root package contract tests in tests/contract/root-entrypoint.test.ts, tests/contract/package-contract-docs.test.ts, and tests/integration/package-tarball-smoke.test.ts
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete T001–T002.
2. Write and observe failures for T003–T005.
3. Implement T006–T010 and run the focused US1 tests.
4. Stop and validate the P1 authorized production/homologation output as an independently usable MVP.

### Incremental Delivery

1. Deliver and validate US1 with complete self-contained HTML and evidence correlation.
2. Add US2 QR decode and browser-measured print/screen layout tests, then implement T014–T016.
3. Update the quickstart and run all package quality gates in T017–T018.

## Independent Test Criteria

- **US1**: Production and homologation fixture outputs contain every required field and all item rows; the QR URL, access key, environment, response key, and protocol correlate; homologation contains the required no-fiscal-value warning; every invalid or incomplete evidence fixture rejects without HTML.
- **US2**: Print widths 56 mm, 80 mm, and 210 mm and screen viewports 320x568, 768x1024, and 1280x800 CSS pixels pass Chromium geometry checks for non-overlap, no clipping, and full required-text retention; invalid widths reject; a decoder recovers the exact fixture URL from the final embedded QR SVG at its declared minimum footprint.

## Provenance

- **Normative primary sources**: Manual de Especificações Técnicas do DANFE NFC-e e QR Code v6.0 (published March 2025; consulted 2026-05-19, with publication history rechecked 2026-10-12), MOC 7.0 where applicable (consulted 2026-05-19), SP Portaria SRE 40/2024 as amended by SRE 81/2025, and current SEFAZ/SP NFC-e and WebServices pages (checked 2026-10-12). Source details and official links are recorded in `specs/028-nfce-sp-danfe/research.md`.
- **Supplementary non-normative source**: `qrcode` Node API documentation, consulted 2026-10-12; it informs the SVG API only and does not override fiscal requirements.
- **Confirmed normative baseline**: national manual v6.0 governs required fields, QR correction level M, minimum QR footprint, paper-width floor, and homologation notice; SP adopts this baseline in the checked Portaria text.
- **Implementation interpretation**: support is limited to SP model 65, production/homologation, full item detail, self-contained HTML, and 56–210 mm print widths; no state-specific summary, contingency, non-SP layout, or SDK PDF/PNG support is claimed.
- **Unresolved source limitation**: no separate SP print-layout delta was found in the official sources checked on 2026-10-12; this does not prove that unpublished or unindexed guidance does not exist. Revalidate official sources before release. Software tests cannot guarantee physical printer durability.

## Notes

- **Total tasks**: 22 (US1: 11, US2: 7, setup: 1, foundational: 1, polish: 2).
- **Suggested MVP**: US1 only.
- **Parallel opportunities**: 7 tasks are marked `[P]`; tests in each story can be authored concurrently, and setup is independent from fixture preparation.
- **Checklist validation**: Every task uses the `- [x] T###` completion format, every task names exact file paths, `[P]` is limited to independent files, and story labels are present only for US1/US2 work. Task dependencies and examples use the current sequential IDs.

## Phase 6: Convergence

- [x] T019 [US1] Render applicable delivery recipient name/address from the signed XML and add delivery fixture assertions in `src/canonical/nfce/render-nfce-sp-danfe-projection.ts`, `src/canonical/nfce/render-nfce-sp-danfe-model.ts`, `src/canonical/nfce/render-nfce-sp-danfe-html.ts`, and `tests/integration/nfce/render-nfce-sp-danfe.test.ts` per FR-002 / data-model: consumer identity/delivery (partial)
- [x] T020 [US1] Include applicable additional total components, including non-zero insurance (`vSeg`) when present, and assert them in `src/canonical/nfce/render-nfce-sp-danfe-projection.ts`, `tests/fixtures/nfce/sp-danfe-authorization-outcomes.ts`, and `tests/integration/nfce/render-nfce-sp-danfe.test.ts` per FR-002 / data-model: totals (partial)
- [x] T021 [US2] Decode the generated QR at its declared 25 mm physical footprint instead of enlarging it to 800×800, updating `tests/integration/nfce/render-nfce-sp-danfe-qr.test.ts` per SC-003 / US2 QR criterion (partial)
- [x] T022 [US2] Include each item article in overlap/clipping geometry assertions and exercise multiple long item rows in `src/canonical/nfce/render-nfce-sp-danfe-html.ts`, `tests/fixtures/nfce/sp-danfe-authorization-outcomes.ts`, and `tests/integration/nfce/render-nfce-sp-danfe-print-layout.test.ts` per SC-003 / US2 layout criterion (partial)

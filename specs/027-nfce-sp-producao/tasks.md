# Tasks: NFC-e SP Production Authorization

**Input**: Design documents from `specs/027-nfce-sp-producao/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/public-nfce-sp-production-authorization.md`, and `quickstart.md`

**Tests**: Required by CC-004 because this feature changes public request/result contracts and production routing. Use deterministic signed fixtures and injected executors only; do not transmit live fiscal documents.

**Organization**: Tasks are grouped by the two user stories in `spec.md`. Production authorization is the P1 MVP; QR/result consistency is the P2 increment.

## Phase 1: Setup

**Purpose**: Repository and shared test infrastructure.

No tasks required: the TypeScript ESM package, Jest, lint, formatting, typecheck, build, and fixture infrastructure already exist.

---

## Phase 2: Foundational

**Purpose**: Keep official-source provenance reproducible before implementation depends on fiscal rules.

- [x] T001 Register the official SEFAZ/SP NFC-e `Sobre` and `WebServices` pages and Portal Nacional NT 2023.002 v1.01 / NT 2025.002-RTC v1.51 under NFC-e-specific source IDs in `docs/_meta/source-registry.md`, then synchronize those IDs, URLs, publication dates, and consultation date `2026-10-12` into `specs/027-nfce-sp-producao/research.md` and `specs/027-nfce-sp-producao/spec.md`; keep normative facts distinct from SDK interpretations and preserve source IDs used by older specs.

**Checkpoint**: Source identities and dates used by the implementation are traceable; no runtime story work starts before this shared record is complete.

## Phase 3: User Story 1 - Authorize an SP NFC-e in production (Priority: P1) - MVP

**Goal**: Submit exactly one signed model 65 SP NFC-e to the normal SP production authorizer and return a truthful synchronous authorization outcome without changing existing homologation behavior.

**Independent Test**: With deterministic signed XML and an injected executor, verify the exact production endpoint/provider, one synchronous request, authorized/rejected/pending/timeout/unavailable/protocol-error classification, no implicit retry/failover, and pre-transport rejection of invalid scope or prerequisites. Existing SP+PR homologation journeys continue to pass.

### Tests for User Story 1

- [x] T002 [P] [US1] Add failing public-contract regressions for production `authorizeNFCe`, additive optional `csc`/`qrCodeUrl` fields, and unchanged root ESM exports in `tests/contract/public-nfce-operational-facade.test.ts` and `tests/contract/root-entrypoint.test.ts`.
- [x] T003 [P] [US1] Add failing pre-transport boundary cases for non-SP production, non-model-65 documents, issuer/key/UF/environment mismatch, missing production `RequestExecutor`, missing production CSC, and missing signing context in `tests/unit/nfce/authorize-nfce-boundaries.test.ts`.
- [x] T004 [P] [US1] Add failing catalog cases for the SP NFC-e production endpoint/provider/environment tuple and confirm no route resolves production to the model 55 endpoint or SVC-AN in `tests/unit/service-catalog.test.ts`.
- [x] T005 [P] [US1] Add a failing injected-executor production journey covering signed single-document synchronous submission, exact SP endpoint, authorized/rejected/pending/timeout/protocol-error responses, and exact preservation of 15- and 17-digit protocols as strings in `tests/integration/nfce/authorize-nfce-sp-production.test.ts`; validate representative response XML against the checked-in 4.00 schema without editing generated output.

### Implementation for User Story 1

- [x] T006 [P] [US1] Add optional `csc` input and optional `qrCodeUrl` output to the existing NFC-e public types, retaining all existing fields and classifications, in `src/canonical/nfce/contracts.ts`.
- [x] T007 [P] [US1] Publish the production SP entry for service `nfce-authorization-sp` at `https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx` with provider `SP`, production environment, and feature-specific provenance in `src/canonical/transport/service-catalog.ts`, `src/canonical/transport/supported-services.ts`, and `src/canonical/transport/catalog-provenance.ts`.
- [x] T008 [US1] Extend `authorizeNFCe` to accept production only for SP model 65, require the caller's signing context, mTLS-capable executor, and CSC before transport, verify identity/environment agreement, reuse the existing signing and SOAP pipeline, and never retry, poll, or fall back to SVC-AN in `src/canonical/nfce/authorize-nfce.ts` and `src/canonical/nfce/errors.ts`.
- [x] T009 [US1] Preserve synchronous NFC-e response semantics and exact 15- or 17-digit protocol strings while mapping authorized, rejected, pending, unavailable, timeout, and protocol-error outcomes without claiming authorization for an uncertain response in `src/canonical/nfce/authorization-outcome.ts` and `src/canonical/nfce/authorize-nfce.ts`.

---

## Phase 4: User Story 2 - Keep QR Code and authorization outcomes consistent (Priority: P2)

**Goal**: Associate a QR Code v3 URL only with the matching authorized document and environment, while keeping QR composition distinct from authorization and consumer consultation.

**Independent Test**: For authorized SP fixtures in both environments, assert the URL contains the exact 44-digit access key, QR version `3`, and matching `tpAmb`; for rejected or uncertain results assert no successful QR/authorization pairing. Confirm the raw CSC token is absent from returned data and transport evidence.

### Tests for User Story 2

- [x] T010 [P] [US2] Add failing public contract cases for QR URL presence only after authorization, production/homologation environment agreement, and omission of the raw CSC token in `tests/contract/public-nfce-operational-facade.test.ts`.
- [x] T011 [P] [US2] Add failing production and homologation integration assertions tying the generated QR URL to the authorized document's exact access key and `tpAmb`, and asserting rejected, pending, or uncertain outcomes do not expose a successful QR URL in `tests/integration/nfce/authorize-nfce-sp-production.test.ts` and `tests/integration/nfce/authorize-nfce-homologation.test.ts`.

### Implementation for User Story 2

- [x] T012 [US2] Compose `qrCodeUrl` through the existing `generateNFCeSPQRCode` helper only for an authorized result, using the exact NFC-e access key, normalized environment, and caller CSC; omit the URL for non-authorized outcomes and never copy the token into result/evidence in `src/canonical/nfce/authorize-nfce.ts` and `src/canonical/nfce/authorization-outcome.ts`.
- [x] T013 [US2] Document the authorization/QR distinction, optional homologation CSC compatibility, production prerequisites, 17-digit protocol handling, and no-retry/no-failover behavior in `src/canonical/nfce/authorize-nfce.doc.md`, `src/canonical/nfce/contracts.doc.md`, and `src/canonical/transport/service-catalog.doc.md`.

**Checkpoint**: US2 passes for both environments; QR parameters match the authorized document, authorization state remains authoritative, and no secret is returned.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Align consumer-facing package documentation and run feature and repository quality gates.

- [x] T014 [P] Update the public usage and compatibility notes for SP production authorization, external credentialing/mTLS/CSC prerequisites, and deferred DANFE/offline capabilities in `README.md`, `src/public-contract.ts`, `specs/027-nfce-sp-producao/contracts/public-nfce-sp-production-authorization.md`, and `specs/027-nfce-sp-producao/quickstart.md`.
- [x] T015 Run focused regressions for NFC-e authorization, routing, QR composition, root contract, and homologation compatibility with `npx jest --runInBand tests/contract/public-nfce-operational-facade.test.ts tests/contract/root-entrypoint.test.ts tests/unit/nfce tests/unit/service-catalog.test.ts tests/integration/nfce/authorize-nfce-sp-production.test.ts tests/integration/nfce/authorize-nfce-homologation.test.ts tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`.
- [x] T016 Run `npx prettier --check specs/027-nfce-sp-producao/*.md specs/027-nfce-sp-producao/contracts/*.md src/canonical/nfce/*.doc.md src/canonical/transport/*.doc.md README.md src/public-contract.ts` and fix formatting before the full gate.
- [x] T017 Run `npm test -- --runInBand`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run audit:public-contract`, and `npm run validate:tarball`; confirm `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/`, and `xsd/` have no unintended changes.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No tasks; repository infrastructure is already available.
- **Foundational (Phase 2)**: T001 records the official provenance required before implementation; it blocks both user stories.
- **User Story 1 (Phase 3)**: Begins after T001. T002-T005 are test-first tasks and must be run to observe the relevant failures before implementation. T006 and T007 can proceed in parallel after those tests; T008 depends on both. T009 follows the authorization flow implementation.
- **User Story 2 (Phase 4)**: Depends on US1's production authorization outcome and additive contract. T010-T011 are test-first; T012 follows them; T013 documents the completed behavior.
- **Polish (Phase 5)**: Depends on both stories; T014 must finish before T016 formatting, and T015/T016 must finish before T017 full gates.

### User Story Dependencies

- **US1 (P1)**: Independent of other feature stories after T001; delivers the MVP.
- **US2 (P2)**: Depends on the successful authorization result from US1 so the QR URL can be tied to the exact authorized document and environment.

### Parallel Opportunities

- T002, T003, T004, and T005 edit distinct test files and can be authored in parallel after T001.
- T006 and T007 edit separate source areas and can proceed in parallel after the US1 tests have been observed failing.
- T010 and T011 edit distinct contract/integration test files and can be authored in parallel after US1 is complete.
- T014 can proceed in parallel with final review of T013 because it edits package-facing docs and metadata distinct from the source module docs.

## Parallel Example: User Story 1

```text
Task T002: Root NFC-e contract regressions in tests/contract/public-nfce-operational-facade.test.ts and tests/contract/root-entrypoint.test.ts
Task T003: Production preflight boundaries in tests/unit/nfce/authorize-nfce-boundaries.test.ts
Task T004: Environment/provider catalog assertions in tests/unit/service-catalog.test.ts
Task T005: Signed synchronous SP production flow in tests/integration/nfce/authorize-nfce-sp-production.test.ts
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete T001 source registration and research synchronization.
2. Write T002-T005 first and run them to observe failures for the missing production route and boundaries.
3. Complete T006-T009, then run the US1 focused tests and the existing SP+PR homologation regressions.
4. Stop at the US1 checkpoint if only production authorization is needed; deliver QR consistency and consumer-facing alignment in US2/Polish.

### Incremental Delivery

1. Deliver SP-only synchronous production authorization with explicit identity, signing, transport, and credential boundaries.
2. Add QR URL association with the successful authorization outcome without changing the existing standalone QR helper.
3. Update package documentation and complete all quality and tarball gates.

## Notes

- Every task uses the required checklist form `- [ ] T### [P?] [US?] description with file path`.
- `[P]` means the task uses different files and has no dependency on an incomplete task.
- User-story tasks are labeled `[US1]` or `[US2]`; Setup, Foundational, and Polish tasks have no story label.
- Use injected deterministic executors; never issue a live production NFC-e, automatically retry an uncertain submission, poll receipts, or fail over to a contingency endpoint.
- Keep the 17-digit protocol regression tied to official SP evidence and the checked-in schema; do not regenerate XSD-derived output unless the test proves a schema gap.
- The optional `after_tasks` git commit hook is intentionally not run automatically.

## Phase 6: Convergence

- [x] T018 [US1] [HIGH] Reject production XML whose emitter tax identifier does not match the issuer identifier encoded in the requested access key before transport; add a pre-transport regression per FR-003 (partial).
- [x] T019 [US1] [HIGH] Preserve the shared mapper's next permitted action in NFC-e outcomes when `cStat` 103 includes `nRec`, without initiating receipt reconciliation automatically per SC-001 (partial).

## Phase 7: Convergence

- [x] T020 [US1] [HIGH] Validate every access-key-derived field (`cUF`, emission year/month, issuer CNPJ/CPF, `mod`, `serie`, `nNF`, `tpEmis`, `cNF`, `cDV`, and `tpAmb`) against the production XML before SOAP transport; add pre-transport mismatch regressions per FR-003 and SC-002 (partial).

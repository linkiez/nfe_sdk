---
description: 'Task list for the NFC-e SP QR Code slice'
---

# Tasks: NFC-e SP QR Code

**Input**: Design documents from `/specs/024-nfce-sp-qrcode/`

**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/public-nfce-sp-qrcode-facade.md`, `quickstart.md`

**Tests**: This feature changes the root package surface, public runtime behavior, and package contract documentation. Contract, integration, unit, and documentation-regression tests are required.

**Organization**: Tasks are grouped by user story so the paulista `QR Code` helper, the `SP`-only boundary, and the published provenance can each be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish fixture and test scaffolds for the new paulista `QR Code` helper.

- [x] T001 Create QR helper fixture scaffolds in `tests/fixtures/nfce/sp-qrcode-homologation-input.json`, `tests/fixtures/nfce/sp-qrcode-production-input.json`, and `tests/fixtures/nfce/pr-qrcode-unsupported-input.json`
- [x] T002 [P] Create the root facade contract scaffold in `tests/contract/root-nfce-sp-qrcode-facade.test.ts`
- [x] T003 [P] Create the QR helper integration scaffolds in `tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts`, `tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts`, and `tests/integration/nfce/generate-nfce-sp-qrcode-unsupported-state.test.ts`
- [x] T004 [P] Create the QR helper unit and assertion scaffolds in `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts` and `tests/config/nfce-assertions.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared contracts, boundaries, and export baselines that every story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Establish QR helper request/result contracts in `src/canonical/nfce/contracts.ts` and `src/canonical/nfce/contracts.doc.md`
- [x] T006 [P] Add dedicated `SP`-only coverage-boundary primitives in `src/canonical/nfce/coverage-boundary.ts` and `src/canonical/nfce/coverage-boundary.doc.md`
- [x] T007 [P] Add module and facade wiring placeholders in `src/canonical/nfce/index.ts`, `src/canonical/nfce/index.doc.md`, `src/canonical/facade/index.ts`, and `src/canonical/index.ts`
- [x] T008 [P] Prepare the root export baseline for the additive helper in `src/index.ts`

**Checkpoint**: Foundation ready - user story work can now begin in parallel.

---

## Phase 3: User Story 1 - Gerar o QR Code oficial da `NFC-e` paulista com entrada explicita (Priority: P1) 🎯 MVP

**Goal**: Let integrators generate the official paulista `QR Code` result for `homologacao` and `producao` with explicit `CSC` and environment inputs, receiving the final URL plus minimal auditable metadata.

**Independent Test**: Run the new root facade contract test, the focused unit regression, and the homologation/production integration regressions to verify that `SP` requests return the final URL and auditable fields without manual composition.

### Tests for User Story 1 ⚠️

- [x] T009 [P] [US1] Make the new root helper contract fail in `tests/contract/root-nfce-sp-qrcode-facade.test.ts` and `tests/contract/root-entrypoint.test.ts`
- [x] T010 [P] [US1] Make the homologation and production QR helper journeys fail in `tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts` and `tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts`
- [x] T011 [P] [US1] Make the local result-shape and validation regressions fail in `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts` and `tests/config/nfce-assertions.ts`

### Implementation for User Story 1

- [x] T012 [P] [US1] Add successful `SP` QR helper fixtures and assertion helpers in `tests/fixtures/nfce/sp-qrcode-homologation-input.json`, `tests/fixtures/nfce/sp-qrcode-production-input.json`, and `tests/config/nfce-assertions.ts`
- [x] T013 [P] [US1] Implement local QR code request normalization and composition in `src/canonical/nfce/generate-nfce-sp-qr-code.ts` and `src/canonical/nfce/errors.ts`
- [x] T014 [P] [US1] Reuse prerequisite and access-key helpers in `src/canonical/nfce/prepare-signing-prerequisites.ts` and `src/canonical/nfce/generate-nfce-sp-qr-code.ts` to keep `CSC` validation and model `65` semantics aligned
- [x] T015 [US1] Expose the additive root facade for `generateNFCeSPQRCode` in `src/canonical/facade/generate-nfce-sp-qr-code.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T016 [US1] Document successful `SP` homologation and production helper usage in `src/canonical/nfce/index.doc.md`, `src/canonical/nfce/prepare-signing-prerequisites.doc.md`, and `specs/024-nfce-sp-qrcode/quickstart.md`
- [x] T017 [US1] Align the public facade contract for the final URL and auditable metadata in `specs/024-nfce-sp-qrcode/contracts/public-nfce-sp-qrcode-facade.md`, `tests/contract/root-nfce-sp-qrcode-facade.test.ts`, and `tests/contract/public-nfce-operational-facade.test.ts`

**Checkpoint**: User Story 1 should now provide a fully testable paulista `QR Code` helper for both `homologacao` and `producao`.

---

## Phase 4: User Story 2 - Preservar boundaries entre o slice paulista e o backlog multi-`UF` (Priority: P2)

**Goal**: Keep the helper explicitly restricted to `SP`, blocking `PR` and every other `UF` before successful generation while preserving adjacent non-goals such as renderer, consumer consultation, and `offline` contingency.

**Independent Test**: Run the unsupported-state integration/unit regressions and the package-documentation regressions to verify that `PR` and other UFs are blocked consistently and that adjacent capabilities remain documented as out of scope.

### Tests for User Story 2 ⚠️

- [x] T018 [P] [US2] Make the `SP`-only unsupported-state regressions fail in `tests/integration/nfce/generate-nfce-sp-qrcode-unsupported-state.test.ts` and `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts`
- [x] T019 [P] [US2] Make the package boundary documentation checks fail for `PR` and deferred adjacent capabilities in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-contract-boundary.test.ts`

### Implementation for User Story 2

- [x] T020 [P] [US2] Add non-`SP` rejection fixtures and boundary assertions in `tests/fixtures/nfce/pr-qrcode-unsupported-input.json` and `tests/config/nfce-assertions.ts`
- [x] T021 [P] [US2] Implement `SP`-only state rejection and usage-error diagnostics in `src/canonical/nfce/generate-nfce-sp-qr-code.ts` and `src/canonical/nfce/coverage-boundary.ts`
- [x] T022 [US2] Reconcile helper boundary language for `PR`, other UFs, and deferred adjacent capabilities in `src/public-contract.ts` and `README.md`
- [x] T023 [US2] Publish the `SP`-only boundary docs in `src/canonical/nfce/contracts.doc.md`, `src/canonical/nfce/coverage-boundary.doc.md`, and `specs/024-nfce-sp-qrcode/contracts/public-nfce-sp-qrcode-facade.md`

**Checkpoint**: User Stories 1 and 2 should now allow `SP` generation while rejecting `PR` and all other UFs with explicit documented boundaries.

---

## Phase 5: User Story 3 - Publicar a proveniencia e a semantica de ambiente do fechamento paulista (Priority: P3)

**Goal**: Publish the additive package rationale, roadmap provenance, and environment semantics so the helper is clearly understood as a smaller `SP` closure step under `RFL-006` instead of a full statewide runtime completion.

**Independent Test**: Run the root and package contract documentation regressions to verify that the feature stays traceable to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`, and that the additive package semantics remain explicit.

### Tests for User Story 3 ⚠️

- [x] T024 [P] [US3] Make the provenance and environment-semantics contract checks fail in `tests/contract/root-nfce-sp-qrcode-facade.test.ts` and `tests/contract/root-contract-boundary.test.ts`
- [x] T025 [P] [US3] Make the documentation traceability regressions fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/public-nfce-operational-facade.test.ts`

### Implementation for User Story 3

- [x] T026 [P] [US3] Reconcile the feature provenance artifacts in `specs/024-nfce-sp-qrcode/research.md` and `specs/024-nfce-sp-qrcode/data-model.md`, updating them only if implementation uncovers a gap beyond the primary sources already captured in this slice
- [x] T027 [US3] Publish `RFL-006` / `RTM-007` / `RTM-011` / `RTM-012` traceability and environment semantics in `specs/024-nfce-sp-qrcode/quickstart.md`, `specs/024-nfce-sp-qrcode/contracts/public-nfce-sp-qrcode-facade.md`, and `README.md`
- [x] T028 [US3] Align the internal NFC-e docs for the additive helper in `src/canonical/nfce/index.doc.md` and `src/canonical/nfce/contracts.doc.md`

**Checkpoint**: All user stories should now be independently understandable, testable, and traceable to the roadmap.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final package and validation work affecting multiple stories.

- [x] T029 [P] Review package export consistency for `generateNFCeSPQRCode` in `tests/contract/root-entrypoint.test.ts`, `tests/contract/package-files.test.ts`, and `package.json`
- [x] T030 Run the feature validation flow for `specs/024-nfce-sp-qrcode/`, `src/canonical/nfce/`, `src/canonical/facade/`, `src/index.ts`, `src/public-contract.ts`, `README.md`, `tests/contract/root-nfce-sp-qrcode-facade.test.ts`, `tests/contract/root-entrypoint.test.ts`, `tests/contract/root-contract-boundary.test.ts`, `tests/contract/public-nfce-operational-facade.test.ts`, `tests/contract/package-contract-docs.test.ts`, `tests/contract/package-files.test.ts`, `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts`, and `tests/integration/nfce/generate-nfce-sp-qrcode-*.test.ts` with `npx jest --runInBand tests/contract/root-nfce-sp-qrcode-facade.test.ts tests/contract/root-entrypoint.test.ts tests/contract/root-contract-boundary.test.ts tests/contract/public-nfce-operational-facade.test.ts tests/contract/package-contract-docs.test.ts tests/contract/package-files.test.ts tests/unit/nfce/generate-nfce-sp-qr-code.test.ts tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts tests/integration/nfce/generate-nfce-sp-qrcode-unsupported-state.test.ts`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run validate:tarball`, and `npm run docs:links`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP paulista `QR Code` helper for `homologacao` and `producao`.
- **User Story 2 (P2)**: Starts after Foundational and depends on the helper contracts from User Story 1, but remains independently testable through non-`SP` rejection and documentation boundaries.
- **User Story 3 (P3)**: Starts after Foundational and depends on the public helper surface being stable enough to publish final provenance and package semantics.

### Within Each User Story

- Tests for behavioral or public contract changes MUST be written and fail before implementation.
- Contract and boundary types must land before root facade wiring.
- Root export and package wording must land before final validation.
- Story-specific documentation must land before the final package/documentation gate pass.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, and T008 can run in parallel.
- T009, T010, and T011 can run in parallel.
- T012, T013, and T014 can run in parallel.
- T018 and T019 can run in parallel.
- T020 and T021 can run in parallel.
- T024 and T025 can run in parallel.
- T029 can run in parallel with documentation cleanup before T030.

---

## Parallel Example: User Story 1

```bash
# Launch the first QR helper regressions in parallel:
Task: "Make the new root helper contract fail in tests/contract/root-nfce-sp-qrcode-facade.test.ts and tests/contract/root-entrypoint.test.ts"
Task: "Make the homologation and production QR helper journeys fail in tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts and tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts"
Task: "Make the local result-shape and validation regressions fail in tests/unit/nfce/generate-nfce-sp-qr-code.test.ts and tests/config/nfce-assertions.ts"

# Launch supporting implementation on separate files:
Task: "Add successful SP QR helper fixtures and assertion helpers in tests/fixtures/nfce/sp-qrcode-*.json and tests/config/nfce-assertions.ts"
Task: "Implement local QR code request normalization and composition in src/canonical/nfce/generate-nfce-sp-qr-code.ts and src/canonical/nfce/errors.ts"
Task: "Expose the additive root facade for generateNFCeSPQRCode in src/canonical/facade/generate-nfce-sp-qr-code.ts, src/canonical/facade/index.ts, src/canonical/index.ts, and src/index.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that the paulista helper returns the final URL and auditable metadata for both environments.

### Incremental Delivery

1. Deliver the additive `SP` helper for `homologacao` and `producao`.
2. Add explicit rejection and documentation boundaries for `PR` and other UFs.
3. Publish the roadmap provenance and package semantics once the helper contract is stable.
4. Finish with package export and quality-gate validation.

### Parallel Team Strategy

1. One contributor expands fixtures and assertions under `tests/fixtures/nfce/` and `tests/config/`.
2. One contributor implements the helper and facade wiring under `src/canonical/nfce/` and `src/canonical/facade/`.
3. One contributor maintains the root contract, README, and feature artifacts under `src/public-contract.ts`, `README.md`, and `specs/024-nfce-sp-qrcode/`.
4. Finish with a shared review of root exports and the final validation commands.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes the root package contract and observable runtime behavior, so tests are mandatory.
- The helper remains intentionally narrower than full `SP` production authorization closure.
- The primary normative sources for this slice are already captured in `spec.md`, `plan.md`, and `research.md`; implementation should only update provenance artifacts when new gaps are discovered.
- Renderer, consumer consultation, `CSC` administration, onboarding, `offline`, and multi-`UF` rollout remain deferred beyond this task list.

## Phase 7: Convergence

- [x] T031 CRITICAL: Record the exact official source identity and consultation date, and distinguish normative QR Code guidance from implementation interpretation in `specs/024-nfce-sp-qrcode/spec.md`, `specs/024-nfce-sp-qrcode/research.md`, and `specs/024-nfce-sp-qrcode/contracts/public-nfce-sp-qrcode-facade.md` per Constitution: Knowledge Sources & Provenance (partial)
- [x] T032 Add unit regressions for blank required CSC values and a `uf` inconsistent with the access key in `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts` per FR-006 and FR-009 (partial)

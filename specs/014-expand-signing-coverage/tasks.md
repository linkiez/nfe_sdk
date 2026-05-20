---
description: "Task list for the signing coverage expansion slice"
---

# Tasks: Expand Signing Coverage

**Input**: Design documents from `/specs/014-expand-signing-coverage/`

**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/public-signing-expansion-facade.md`, `quickstart.md`

**Tests**: This feature expands the public signing surface and its observable XML/output boundaries. Contract, integration, unit, and fixture-backed regression tests are required.

**Organization**: Tasks are grouped by user story to keep event signing, `NFC-e` prerequisites, and boundary documentation independently testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish fixtures and failing test scaffolds for the signing expansion slice.

- [x] T001 Create unsigned event fixture scaffolds in `tests/fixtures/signing/event-cce-unsigned.xml` and `tests/fixtures/signing/event-cancel-unsigned.xml`
- [x] T002 [P] Create the root signing-expansion facade contract scaffold in `tests/contract/root-signing-expansion-facade.test.ts`
- [x] T003 [P] Create the event-signing integration scaffold in `tests/integration/sign-event-xml.test.ts`
- [x] T004 [P] Create the `NFC-e` signing-prerequisites integration scaffold in `tests/integration/prepare-nfce-signing-prerequisites.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared boundaries that every user story in this slice depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Establish module boundaries and barrel wiring for the signing expansion in `src/canonical/signing/index.ts`, `src/canonical/nfce/index.ts`, and `src/canonical/facade/index.ts`
- [x] T006 [P] Create shared contracts and error primitives for event signing and `NFC-e` prerequisites in `src/canonical/signing/contracts.ts`, `src/canonical/nfce/contracts.ts`, and `src/canonical/signing/errors.ts`
- [x] T007 [P] Add reusable event-signing fixture loaders and assertions in `tests/fixtures/signing/load-event-signing-fixture.ts` and `tests/config/xml-event-signature-assertions.ts`
- [x] T008 [P] Add reusable `NFC-e` prerequisite fixture inputs in `tests/fixtures/nfce/signing-prerequisites-valid.ts` and `tests/fixtures/nfce/signing-prerequisites-invalid.ts`

**Checkpoint**: Foundation ready - signing-expansion user story work can now begin.

---

## Phase 3: User Story 1 - Assinar XML de evento pela API publica (Priority: P1) 🎯 MVP

**Goal**: Let integrators sign supported `evento` XML through the root package surface, reuse the existing `SigningContext`, and receive a locally verified signed XML back.

**Independent Test**: Run the root-signing-expansion contract test, the event-signing integration test, and the event-boundary unit test to verify that a supported `evento` XML can be signed and verified without manual XMLDSig assembly.

### Tests for User Story 1 ⚠️

- [x] T009 [P] [US1] Make the root signing-expansion facade contract fail against the current root export in `tests/contract/root-signing-expansion-facade.test.ts`
- [x] T010 [P] [US1] Make the supported event-signing regression fail in `tests/integration/sign-event-xml.test.ts`
- [x] T011 [P] [US1] Make unsupported event boundary regressions fail in `tests/unit/event-signing-boundary.test.ts`

### Implementation for User Story 1

- [x] T012 [P] [US1] Implement event-signing target resolution and XML signing in `src/canonical/signing/event-signature-target.ts` and `src/canonical/signing/sign-event-xml.ts`
- [x] T013 [P] [US1] Implement local event-signature verification and failure handling in `src/canonical/signing/verify-signed-event-xml.ts` and `src/canonical/signing/errors.ts`
- [x] T014 [US1] Expose the root facade for signed event XML in `src/canonical/facade/sign-event-xml.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T015 [US1] Publish the event-signing contract and usage boundary in `specs/014-expand-signing-coverage/contracts/public-signing-expansion-facade.md`, `specs/014-expand-signing-coverage/quickstart.md`, and `src/public-contract.ts`

**Checkpoint**: User Story 1 should allow integrators to sign supported `evento` XML through the root import and receive verified signed XML back.

---

## Phase 4: User Story 2 - Preparar precondicoes de assinatura para `NFC-e` (Priority: P2)

**Goal**: Let integrators prepare `NFC-e` signing prerequisites with explicit `chNFe`, `cDV`, and `hashCSRT` outputs plus clear boundary diagnostics.

**Independent Test**: Run the `NFC-e` signing-prerequisites integration test and the invalid-input boundary unit test to verify that supported inputs produce a structured prerequisite bundle and invalid inputs fail clearly.

### Tests for User Story 2 ⚠️

- [x] T016 [P] [US2] Make `NFC-e` signing-prerequisite success flows fail in `tests/integration/prepare-nfce-signing-prerequisites.test.ts`
- [x] T017 [P] [US2] Make invalid `DV`, `CSC`, and `CSRT` boundary regressions fail in `tests/unit/nfce-signing-prerequisites-boundary.test.ts`

### Implementation for User Story 2

- [x] T018 [P] [US2] Implement prerequisite normalization and result shaping in `src/canonical/nfce/prepare-signing-prerequisites.ts` and `src/canonical/nfce/contracts.ts`
- [x] T019 [US2] Expose the root facade for `NFC-e` signing prerequisites in `src/canonical/facade/prepare-nfce-signing-prerequisites.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T020 [US2] Publish the `NFC-e` prerequisite contract and deferred dependency notes in `specs/014-expand-signing-coverage/contracts/public-signing-expansion-facade.md`, `specs/014-expand-signing-coverage/quickstart.md`, and `src/public-contract.ts`

**Checkpoint**: User Stories 1 and 2 should now let integrators sign supported events and prepare `NFC-e` signing prerequisites through the root import.

---

## Phase 5: User Story 3 - Explicitar boundaries com transporte e trust chain (Priority: P3)

**Goal**: Make the scope limits, deferred capabilities, and layer boundaries of the signing expansion explicit for follow-up phases.

**Independent Test**: Run package-contract documentation checks and signing-expansion boundary tests to verify that the repo clearly states what is supported now and what remains deferred.

### Tests for User Story 3 ⚠️

- [x] T021 [P] [US3] Make signing-expansion contract documentation checks fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-contract-boundary.test.ts`
- [x] T022 [P] [US3] Make signing-expansion boundary regressions fail in `tests/unit/signing-expansion-boundary.test.ts`

### Implementation for User Story 3

- [x] T023 [P] [US3] Document the expanded signing boundary and deferred capabilities in `src/public-contract.ts`, `README.md`, `specs/014-expand-signing-coverage/contracts/public-signing-expansion-facade.md`, and `specs/014-expand-signing-coverage/quickstart.md`
- [x] T024 [US3] Align roadmap and coverage references for the new signing slice in `docs/roadmap/coverage-matrix.md`, `docs/roadmap/specs-implementacao.md`, and `docs/roadmap/specs-pendencias-abertas.md`

**Checkpoint**: All user stories should now be independently understandable and the expanded signing slice should have explicit boundaries with `SOAP`, `QR Code`, trust chain, and multi-`UF` `NFC-e` rollout.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [x] T025 [P] Add sibling module documentation for the signing expansion in `src/canonical/signing/sign-event-xml.doc.md`, `src/canonical/nfce/prepare-signing-prerequisites.doc.md`, and `src/canonical/signing/contracts.doc.md`
- [x] T026 [P] Reconcile planning artifacts with the implemented boundary in `specs/014-expand-signing-coverage/research.md`, `specs/014-expand-signing-coverage/data-model.md`, and `specs/014-expand-signing-coverage/quickstart.md`
- [x] T027 Run the feature validation flow for `src/index.ts`, `src/canonical/signing/`, `src/canonical/nfce/`, `tests/contract/root-signing-expansion-facade.test.ts`, `tests/integration/sign-event-xml.test.ts`, `tests/integration/prepare-nfce-signing-prerequisites.test.ts`, and `specs/014-expand-signing-coverage/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, and `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP event-signing flow.
- **User Story 2 (P2)**: Starts after Foundational and expands the bridge between signing and `NFC-e` prerequisites.
- **User Story 3 (P3)**: Starts after Foundational and can proceed alongside or after User Story 2, provided the public boundaries are stable enough to document.

### Within Each User Story

- Tests for public contract, integration behavior, and boundary handling MUST be written and fail before implementation.
- Shared contracts must land before facade wiring.
- Root exports must land only after the internal helpers are stable enough to preserve additive contract behavior.
- Boundary documentation must land before the final validation pass.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, and T008 can run in parallel.
- T009, T010, and T011 can run in parallel.
- T012 and T013 can run in parallel.
- T015 and T016 can run in parallel.
- T021 and T022 can run in parallel.
- T025 and T026 can run in parallel.

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes public contract behavior and observable XML/output boundaries, so tests are mandatory.
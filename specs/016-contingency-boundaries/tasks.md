---
description: 'Task list for contingency boundaries'
---

# Tasks: Contingency Boundaries

**Input**: Design documents from `/specs/016-contingency-boundaries/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/public-contingency-boundaries-facade.md, quickstart.md

**Tests**: This feature changes the published operational contract, transport behavior, and roadmap-visible boundaries. Contract, unit, integration, fixture-backed regression, and package validation tasks are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the contingency-specific fixture and regression scaffolding for the new slice.

- [x] T001 Create the contingency fixture scaffold in `tests/fixtures/nfe/svc-an-status-response.xml` and `tests/fixtures/nfe/svc-rs-status-response.xml`
- [x] T002 [P] Create the contingency unit regression scaffold in `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts`
- [x] T003 [P] Create the contingency integration regression scaffold in `tests/integration/query-nfe-service-status-contingency.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Lock the first promoted contingency surface and prepare the shared boundary vocabulary before any user story work begins.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Confirm that the first promoted contingency diagnostic lands in `authorizeNFe` before any `authorizeNFCe` runtime promotion, and record the decision in `specs/016-contingency-boundaries/research.md`, `specs/016-contingency-boundaries/plan.md`, and `specs/016-contingency-boundaries/contracts/public-contingency-boundaries-facade.md`
- [x] T005 [P] Establish shared contingency boundary types and error vocabulary in `src/canonical/transport/contracts.ts` and `src/canonical/transport/errors.ts`
- [x] T006 [P] Prepare transport catalog placeholders and provenance for observable `SVC-AN` and `SVC-RS` diagnostics in `src/canonical/transport/service-catalog.ts`, `src/canonical/transport/supported-services.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [x] T007 [P] Add reusable contingency fixture helpers and assertions in `tests/fixtures/nfe/build-nfe-fixtures.ts` and `tests/config/nfe-contingency-assertions.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Diagnosticar contingencia por ambiente sem fallback silencioso (Priority: P1) 🎯 MVP

**Goal**: Let integrators observe `SVC-AN` and `SVC-RS` as structured contingency diagnostics on top of the existing `authorizeNFe` flow while preserving the normal path.

**Independent Test**: Run the root operational contract regression, the normal-flow `authorizeNFe` regression, the new contingency unit regression, and the `queryNFeServiceStatus` contingency integration regression to verify that `SVC` becomes observable without regressing the current path.

### Tests for User Story 1 ⚠️

- [x] T008 [P] [US1] Make the root contingency contract regression fail in `tests/contract/root-contract-boundary.test.ts` and `tests/contract/root-entrypoint.test.ts`
- [x] T009 [P] [US1] Make the `authorizeNFe` contingency-boundary regression fail in `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts` and `tests/integration/authorize-nfe-single.test.ts`
- [x] T010 [P] [US1] Make the observable `SVC` diagnostics regression fail in `tests/integration/query-nfe-service-status-contingency.test.ts` and `tests/unit/resolve-nfe-service-endpoint-errors.test.ts`

### Implementation for User Story 1

- [x] T011 [P] [US1] Add owned `SVC-AN` and `SVC-RS` contingency fixtures in `tests/fixtures/nfe/svc-an-status-response.xml` and `tests/fixtures/nfe/svc-rs-status-response.xml`
- [x] T012 [P] [US1] Implement supported contingency catalog entries and supported-service wiring in `src/canonical/transport/service-catalog.ts`, `src/canonical/transport/supported-services.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [x] T013 [US1] Implement observable contingency classification for the first promoted `authorizeNFe` slice in `src/canonical/nfe/authorize-nfe.ts`, `src/canonical/nfe/contracts.ts`, and `src/canonical/transport/contracts.ts`
- [x] T014 [US1] Update the published root contract for observable `SVC` diagnostics in `src/public-contract.ts`, `README.md`, `specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md`, and `specs/016-contingency-boundaries/contracts/public-contingency-boundaries-facade.md`

**Checkpoint**: User Story 1 should expose `SVC-AN` and `SVC-RS` as structured contingency diagnostics without regressing the normal `authorizeNFe` flow.

---

## Phase 4: User Story 2 - Entender o que entra agora em runtime e o que continua deferido (Priority: P2)

**Goal**: Make the promoted contingency diagnostic explicit while keeping `EPEC`, `offline`, and assisted-emitter behavior clearly outside the current runtime promise.

**Independent Test**: Run the deferred-boundary regressions and documentation contract checks to verify that `EPEC` and `offline` stay explicit, named, and outside the promoted runtime slice.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Make the deferred contingency boundary regressions fail in `tests/unit/nfce/authorize-nfce-boundaries.test.ts` and `tests/unit/nfce/authorize-nfce-unsupported-scope.test.ts`
- [x] T016 [P] [US2] Make the contingency documentation regression fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-contract-boundary.test.ts`

### Implementation for User Story 2

- [x] T017 [P] [US2] Update explicit deferred contingency boundary behavior for `offline` and related named capabilities in `src/canonical/nfce/coverage-boundary.ts` and `src/canonical/nfce/authorize-nfce.ts`
- [x] T018 [US2] Update the roadmap classification for observable `SVC` diagnostics versus deferred `EPEC` and `offline` in `docs/roadmap/coverage-matrix.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/topicos-oficiais.md`, and `docs/roadmap/ufs-ambientes.md`
- [x] T019 [US2] Align public docs and contract language for deferred contingency paths in `README.md`, `src/public-contract.ts`, and `specs/016-contingency-boundaries/contracts/public-contingency-boundaries-facade.md`

**Checkpoint**: User Stories 1 and 2 should now prove the supported `SVC` diagnostics while keeping `EPEC`, `offline`, and assisted-emitter behavior explicitly outside the promoted runtime slice.

---

## Phase 5: User Story 3 - Tornar auditavel a promocao de contingencia por ambiente (Priority: P3)

**Goal**: Record why `SVC` enters first as an observable contingency diagnostic and why `EPEC` and `offline` remain deferred, so the roadmap can grow additively with public rationale.

**Independent Test**: A reviewer can inspect the feature artifacts and identify the promoted contingency environments, the deferred paths, and the dominant state-level dependencies without relying on tribal knowledge.

### Implementation for User Story 3

- [x] T020 [P] [US3] Record the promoted-versus-deferred contingency rationale in `specs/016-contingency-boundaries/spec.md`, `specs/016-contingency-boundaries/research.md`, and `specs/016-contingency-boundaries/data-model.md`
- [x] T021 [US3] Update planning and quickstart guidance to preserve additive contingency promotion discipline in `specs/016-contingency-boundaries/plan.md`, `specs/016-contingency-boundaries/quickstart.md`, and `specs/016-contingency-boundaries/contracts/public-contingency-boundaries-facade.md`
- [x] T022 [US3] Add explicit traceability for `RFL-005`, `RTM-005`, `RTM-012`, and the dominant state signals from `SP`, `PR`, `RJ`, and `CE` in `docs/roadmap/specs-implementacao.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, and `specs/016-contingency-boundaries/spec.md`

**Checkpoint**: All user stories should now be independently understandable and the first contingency promotion should be technically and editorially auditable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, provenance, documentation, and validation work affecting multiple stories.

- [x] T023 [P] Update provenance and source-registry notes for the contingency slice in `docs/_meta/source-registry.md` and `specs/016-contingency-boundaries/research.md`
- [x] T024 [P] Review tarball and root-entrypoint coherence for the contingency boundary slice in `src/index.ts`, `package.json`, `tests/integration/package-tarball-smoke.test.ts`, and `tests/contract/root-entrypoint.test.ts`
- [x] T025 [P] Add or update sibling module documentation for the touched runtime modules in `src/canonical/transport/service-catalog.doc.md`, `src/canonical/transport/supported-services.doc.md`, `src/canonical/transport/catalog-provenance.doc.md`, `src/canonical/nfce/coverage-boundary.doc.md`, and `src/public-contract.doc.md`
- [x] T026 Run the feature validation flow for `src/canonical/nfe/`, `src/canonical/nfce/`, `src/canonical/transport/`, `src/public-contract.ts`, `README.md`, `tests/contract/`, `tests/integration/authorize-nfe-single.test.ts`, `tests/integration/query-nfe-service-status.test.ts`, `tests/integration/query-nfe-service-status-contingency.test.ts`, `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts`, `tests/unit/nfce/`, and `specs/016-contingency-boundaries/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP runtime value of observable `SVC` diagnostics without regressing the normal flow.
- **User Story 2 (P2)**: Starts after Foundational and hardens the boundary language around deferred contingency paths while preserving User Story 1 behavior.
- **User Story 3 (P3)**: Starts after Foundational and can proceed after or alongside User Story 2 once the promoted and deferred paths are stable enough to document.

### Within Each User Story

- Tests for public contract, integration behavior, and deferred-boundary handling MUST be written and fail before implementation.
- Shared contingency boundary vocabulary and transport catalog decisions must land before runtime behavior is considered complete.
- Runtime behavior updates must land before public-contract and roadmap synchronization.
- Provenance and rationale notes must land before the final validation pass.

### Parallel Opportunities

- T002 and T003 can run in parallel.
- T005, T006, and T007 can run in parallel.
- T008, T009, and T010 can run in parallel.
- T011 and T012 can run in parallel.
- T015 and T016 can run in parallel.
- T023, T024, and T025 can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch the contingency regressions in parallel:
Task: "Make the root contingency contract regression fail in tests/contract/root-contract-boundary.test.ts and tests/contract/root-entrypoint.test.ts"
Task: "Make the authorizeNFe contingency-boundary regression fail in tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts and tests/integration/authorize-nfe-single.test.ts"
Task: "Make the observable SVC diagnostics regression fail in tests/integration/query-nfe-service-status-contingency.test.ts and tests/unit/resolve-nfe-service-endpoint-errors.test.ts"

# Launch supporting implementation on separate files:
Task: "Add owned SVC-AN and SVC-RS contingency fixtures in tests/fixtures/nfe/"
Task: "Implement supported contingency catalog entries and supported-service wiring in src/canonical/transport/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that `SVC-AN` and `SVC-RS` are observable without regressing the normal `authorizeNFe` path.

### Incremental Delivery

1. Deliver observable `SVC` contingency diagnostics over the existing operational baseline.
2. Harden explicit deferred boundaries for `EPEC`, `offline`, and assisted-emitter behavior.
3. Record the promotion rationale and state-level dependencies for future contingency slices.
4. Finish with cross-cutting validation, provenance, tarball checks, and module documentation.

### Parallel Team Strategy

1. One contributor prepares fixtures and regression scaffolding under `tests/fixtures/nfe/`, `tests/unit/nfe/`, and `tests/integration/`.
2. One contributor updates contingency catalog and runtime logic under `src/canonical/nfe/`, `src/canonical/nfce/`, and `src/canonical/transport/`.
3. One contributor keeps the public contract, roadmap taxonomy, and feature artifacts aligned in `src/public-contract.ts`, `README.md`, `docs/roadmap/`, and `specs/016-contingency-boundaries/`.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes the published runtime contract and observable boundary behavior, so tests are mandatory.

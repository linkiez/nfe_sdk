---
description: 'Task list for the first NFe operational MVP slice'
---

# Tasks: Add NFe Operational MVP

**Input**: Design documents from `/specs/007-nfe-operational-mvp/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-nfe-operational-facade.md, quickstart.md

**Tests**: This feature expands the published package surface, adds new operational facades, extends transport catalog behavior, and introduces observable domain-facing results. Contract, integration, unit, fixture-backed regression, and package smoke tests are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish fixture and regression scaffolding for the first NFe operational MVP slice.

- [x] T001 Create the authorization fixture scaffold in `tests/fixtures/nfe-operational/authorization/single-input.json`, `tests/fixtures/nfe-operational/authorization/single-response-authorized.xml`, `tests/fixtures/nfe-operational/authorization/batch-input.json`, and `tests/fixtures/nfe-operational/authorization/batch-response-received.xml`
- [x] T002 [P] Create the root NFe operational facade contract test scaffold in `tests/contract/root-nfe-operational-facade.test.ts`
- [x] T003 [P] Create the query integration test scaffolds in `tests/integration/query-nfe-service-status.test.ts` and `tests/integration/query-nfe-document-situation.test.ts`
- [x] T004 [P] Create the maintenance integration test scaffolds in `tests/integration/submit-nfe-inutilization.test.ts`, `tests/integration/cancel-nfe.test.ts`, and `tests/integration/submit-nfe-correction-letter.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared operational boundaries that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Establish the NFe operational module boundaries and barrel wiring in `src/canonical/nfe/index.ts` and `src/canonical/facade/index.ts`
- [x] T006 [P] Create shared operational contracts and error primitives in `src/canonical/nfe/contracts.ts` and `src/canonical/nfe/errors.ts`
- [x] T007 [P] Create shared authorization-batch and transport-outcome mapping helpers in `src/canonical/nfe/authorization-batch.ts` and `src/canonical/nfe/transport-outcome-mapper.ts`
- [x] T008 [P] Add reusable NFe operational fixture loaders and assertion helpers in `tests/fixtures/nfe-operational/load-nfe-operational-fixture.ts` and `tests/config/nfe-operational-assertions.ts`
- [x] T009 Extend supported transport service definitions and catalog placeholders for MVP operations in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Autorizar uma NFe em homologacao com API de alto nivel (Priority: P1) 🎯 MVP

**Goal**: Let integrators authorize a supported NFe or batch from canonical inputs through the root package surface and receive structured operational outcomes without manually stitching serialization, signing, and SOAP transport.

**Independent Test**: Run the root operational contract test plus the single-document and batch authorization integration tests to verify that canonical inputs produce structured authorization outcomes through the root import.

### Tests for User Story 1 ⚠️

- [x] T010 [P] [US1] Make the root NFe operational facade contract fail against the current root export in `tests/contract/root-nfe-operational-facade.test.ts`
- [x] T011 [P] [US1] Make the single-document authorization regression fail in `tests/integration/authorize-nfe-single.test.ts`
- [x] T012 [P] [US1] Make the batch authorization and intermediate-result regression fail in `tests/integration/authorize-nfe-batch.test.ts`

### Implementation for User Story 1

- [x] T013 [P] [US1] Add owned authorization fixtures in `tests/fixtures/nfe-operational/authorization/single-input.json`, `tests/fixtures/nfe-operational/authorization/single-response-authorized.xml`, `tests/fixtures/nfe-operational/authorization/batch-input.json`, and `tests/fixtures/nfe-operational/authorization/batch-response-received.xml`
- [x] T014 [P] [US1] Implement authorization payload composition and structured outcome mapping in `src/canonical/nfe/authorization-payload.ts` and `src/canonical/nfe/authorization-outcome.ts`
- [x] T015 [P] [US1] Implement high-level authorization orchestration in `src/canonical/nfe/authorize-nfe.ts` and `src/canonical/nfe/authorization-batch.ts`
- [x] T016 [US1] Expose the authorization facade through `src/canonical/facade/authorize-nfe.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T017 [US1] Publish authorization MVP contract notes in `README.md`, `src/public-contract.ts`, and `specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md`

**Checkpoint**: User Story 1 should allow integrators to authorize a supported single NFe or batch from the root import and receive structured outcomes without manual XML or SOAP orchestration.

---

## Phase 4: User Story 2 - Consultar status e situacao sem inspecionar XML bruto (Priority: P2)

**Goal**: Let integrators query service status and document situation from the root package surface using structured inputs and application-oriented results instead of raw XML inspection.

**Independent Test**: Run the service-status and document-situation regressions to verify that the root import returns structured query results for homologation and for document lookup by access key.

### Tests for User Story 2 ⚠️

- [x] T018 [P] [US2] Make the service-status query regression fail in `tests/integration/query-nfe-service-status.test.ts`
- [x] T019 [P] [US2] Make the document-situation query regression fail in `tests/integration/query-nfe-document-situation.test.ts`
- [x] T020 [P] [US2] Make query result-mapping and inconclusive-response regressions fail in `tests/unit/nfe-operational-query-results.test.ts`

### Implementation for User Story 2

- [x] T021 [P] [US2] Add query fixtures in `tests/fixtures/nfe-operational/status-service/response-operational.xml`, `tests/fixtures/nfe-operational/document-situation/input.json`, `tests/fixtures/nfe-operational/document-situation/response-found.xml`, and `tests/fixtures/nfe-operational/document-situation/response-inconclusive.xml`
- [x] T022 [P] [US2] Extend query service definitions, shared-catalog entries, and provenance evidence in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [x] T023 [P] [US2] Implement query request and response mapping, including inconclusive document-situation handling, in `src/canonical/nfe/query-nfe-service-status.ts` and `src/canonical/nfe/query-nfe-document-situation.ts`
- [x] T024 [US2] Expose query facades through `src/canonical/facade/query-nfe-service-status.ts`, `src/canonical/facade/query-nfe-document-situation.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T025 [US2] Update query-facing package documentation in `README.md`, `src/public-contract.ts`, and `specs/007-nfe-operational-mvp/quickstart.md`

**Checkpoint**: User Stories 1 and 2 should now let integrators authorize supported NFe flows and query service or document state from the root import without manual XML inspection.

---

## Phase 5: User Story 3 - Executar manutencoes operacionais prioritarias da NFe com limites claros (Priority: P3)

**Goal**: Give integrators explicit high-level operations for inutilization, cancellation, and correction letter while keeping maintenance boundaries, evidence, and deferred scope clear.

**Independent Test**: Run the maintenance regressions to verify that inutilization, cancellation, and correction letter operations return structured outcomes and fail explicitly outside the supported homologation scope.

### Tests for User Story 3 ⚠️

- [x] T026 [P] [US3] Make the inutilization regression fail in `tests/integration/submit-nfe-inutilization.test.ts`
- [x] T027 [P] [US3] Make the cancellation regression fail in `tests/integration/cancel-nfe.test.ts`
- [x] T028 [P] [US3] Make the correction-letter regression fail in `tests/integration/submit-nfe-correction-letter.test.ts`
- [x] T029 [P] [US3] Make maintenance result-mapping and unsupported-scope regressions fail in `tests/unit/nfe-operational-maintenance-results.test.ts`

### Implementation for User Story 3

- [x] T030 [P] [US3] Add maintenance fixtures in `tests/fixtures/nfe-operational/inutilization/input.json`, `tests/fixtures/nfe-operational/inutilization/response-success.xml`, `tests/fixtures/nfe-operational/cancellation/input.json`, `tests/fixtures/nfe-operational/cancellation/response-success.xml`, `tests/fixtures/nfe-operational/correction-letter/input.json`, `tests/fixtures/nfe-operational/correction-letter/response-success.xml`, and `tests/fixtures/nfe-operational/maintenance/unsupported-scope-input.json`
- [x] T031 [P] [US3] Extend maintenance service definitions, shared-catalog entries, and provenance evidence in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [x] T032 [P] [US3] Implement maintenance payload and outcome mapping in `src/canonical/nfe/maintenance-outcome.ts`, `src/canonical/nfe/submit-nfe-inutilization.ts`, `src/canonical/nfe/cancel-nfe.ts`, and `src/canonical/nfe/submit-nfe-correction-letter.ts`
- [x] T033 [US3] Expose maintenance facades and publish coverage boundaries in `src/canonical/facade/submit-nfe-inutilization.ts`, `src/canonical/facade/cancel-nfe.ts`, `src/canonical/facade/submit-nfe-correction-letter.ts`, `src/canonical/index.ts`, `src/index.ts`, `README.md`, `src/public-contract.ts`, and `specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md`

**Checkpoint**: All user stories should now be independently functional and the MVP should expose the required operational maintenance flows with explicit supported-scope boundaries.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [X] T034 [P] Add sibling module documentation for the NFe operational slice in `src/canonical/nfe/contracts.doc.md`, `src/canonical/nfe/authorize-nfe.doc.md`, `src/canonical/nfe/query-nfe-service-status.doc.md`, `src/canonical/nfe/query-nfe-document-situation.doc.md`, and `src/canonical/nfe/maintenance-outcome.doc.md`
- [X] T035 [P] Review tarball and root export consistency across `src/index.ts`, `package.json`, `tests/integration/package-tarball-smoke.test.ts`, `tests/contract/root-entrypoint.test.ts`, and `specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md`
- [X] T036 [P] Review feature-artifact and provenance coherence for the operational slice in `specs/007-nfe-operational-mvp/spec.md`, `specs/007-nfe-operational-mvp/plan.md`, `specs/007-nfe-operational-mvp/research.md`, `specs/007-nfe-operational-mvp/data-model.md`, `specs/007-nfe-operational-mvp/quickstart.md`, and `specs/007-nfe-operational-mvp/tasks.md`
- [ ] T037 Run the feature validation flow for `src/index.ts`, `src/public-contract.ts`, `src/canonical/nfe/`, `src/canonical/facade/`, `src/canonical/transport/`, `tests/contract/root-nfe-operational-facade.test.ts`, `tests/integration/authorize-nfe-single.test.ts`, `tests/integration/authorize-nfe-batch.test.ts`, `tests/integration/query-nfe-service-status.test.ts`, `tests/integration/query-nfe-document-situation.test.ts`, `tests/integration/submit-nfe-inutilization.test.ts`, `tests/integration/cancel-nfe.test.ts`, `tests/integration/submit-nfe-correction-letter.test.ts`, `tests/unit/nfe-operational-query-results.test.ts`, `tests/unit/nfe-operational-maintenance-results.test.ts`, and `specs/007-nfe-operational-mvp/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the first end-to-end operational authorization flow for canonical inputs.
- **User Story 2 (P2)**: Starts after Foundational and expands the operational surface with service and document queries while preserving User Story 1 behavior.
- **User Story 3 (P3)**: Starts after User Story 2 when the shared transport catalog and provenance extensions are stable enough to be reused by maintenance flows without overlapping edits.

### Within Each User Story

- Tests for public contract, integration behavior, and observable result mapping MUST be written and fail before implementation.
- Shared operational contracts must land before facade wiring.
- Transport catalog extensions must land before each public operation is exposed.
- Authorization, query, and maintenance result mappers must land before package documentation is stabilized.
- Final validation happens only after package-surface, docs, and artifact coherence work are complete.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, T008, and T009 can run in parallel.
- T010, T011, and T012 can run in parallel.
- T013, T014, and T015 can run in parallel.
- T018, T019, and T020 can run in parallel.
- T021, T022, and T023 can run in parallel.
- T026, T027, T028, and T029 can run in parallel.
- T030 and T031 can run in parallel.
- T034, T035, and T036 can run in parallel.

### Cross-Story Coordination Notes

- T022 and T031 both touch the shared transport catalog and provenance files, so they are parallelizable only within their own story slices and not concurrently across User Stories 2 and 3.

---

## Parallel Example: User Story 1

```bash
# Launch the authorization regressions in parallel:
Task: "Make the root NFe operational facade contract fail against the current root export in tests/contract/root-nfe-operational-facade.test.ts"
Task: "Make the single-document authorization regression fail in tests/integration/authorize-nfe-single.test.ts"
Task: "Make the batch authorization and intermediate-result regression fail in tests/integration/authorize-nfe-batch.test.ts"

# Launch supporting implementation on separate files:
Task: "Add owned authorization fixtures in tests/fixtures/nfe-operational/authorization/"
Task: "Implement authorization payload composition and structured outcome mapping in src/canonical/nfe/authorization-payload.ts and src/canonical/nfe/authorization-outcome.ts"
Task: "Implement high-level authorization orchestration in src/canonical/nfe/authorize-nfe.ts and src/canonical/nfe/authorization-batch.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that supported canonical inputs authorize a single NFe and a batch from the root import with structured operational outcomes.

### Incremental Delivery

1. Deliver the minimal high-level authorization flow for single NFe and batch.
2. Add service-status and document-situation queries by structured root operations.
3. Add inutilization, cancellation, and correction-letter maintenance flows.
4. Finish with cross-cutting validation and package-level consistency checks.

### Parallel Team Strategy

1. One contributor opens the operational contracts and orchestration modules under `src/canonical/nfe/`.
2. One contributor extends transport catalog coverage and query support under `src/canonical/transport/` and `tests/integration/`.
3. One contributor maintains root exports, package contract coverage, and feature docs in `src/index.ts`, `src/public-contract.ts`, `README.md`, and `specs/007-nfe-operational-mvp/`.
4. Finish with a shared review of root exports, tarball smoke coverage, operational fixtures, and the full validation gate.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes public contract behavior and observable operational behavior, so tests are mandatory.
- The first operational MVP remains limited to homologation, canonical inputs, access-key lookup for document situation, and the mandatory maintenance flows declared in the spec.
- Production, multi-UF routing, contingencies, automatic receipt polling, and broader operational automation remain deferred beyond this task list.

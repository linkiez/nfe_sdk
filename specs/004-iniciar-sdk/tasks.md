---
description: 'Task list for the initial functional SDK slice'
---

# Tasks: Inicio do Desenvolvimento Funcional do SDK

**Input**: Design documents from `/specs/004-iniciar-sdk/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-functional-facade.md, quickstart.md

**Tests**: This feature changes the published package surface, adds canonical document assembly, introduces deterministic XML serialization, and normalizes shared schema-backed fields. Contract, integration, unit, and fixture-backed regression tests are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the fixture and test scaffolding for the first canonical SDK slice.

- [x] T001 Create the canonical input fixture scaffolds in `tests/fixtures/canonical-nfe/nfe-minimal-input.json` and `tests/fixtures/canonical-nfe/envi-nfe-minimal-input.json`
- [x] T002 [P] Create the root facade contract test scaffold in `tests/contract/root-functional-facade.test.ts`
- [x] T003 [P] Create the canonical XML integration test scaffold in `tests/integration/canonical-nfe-serialization.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared canonical boundaries that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Establish the canonical module boundaries and barrel wiring in `src/canonical/index.ts` and `src/canonical/facade/index.ts`
- [x] T005 [P] Create shared canonical contracts and deferred-gap primitives in `src/canonical/shared/contracts.ts` and `src/canonical/shared/gap-register.ts`
- [x] T006 [P] Add reusable fixture loading and XML equivalence helpers in `tests/fixtures/canonical-nfe/load-canonical-fixture.ts` and `tests/config/xml-equivalence.ts`
- [x] T007 Wire the canonical slice into the validation baseline in `package.json`, `tsconfig.build.json`, and `jest.config.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Montar um documento canonico sem tocar na arvore gerada (Priority: P1) 🎯 MVP

**Goal**: Let integrators create `NFe` and `enviNFe` through a slim root facade without importing generated internals.

**Independent Test**: Run the root facade contract test and a creation-flow integration test to verify that a consumer can create the supported canonical documents using only the root import.

### Tests for User Story 1 ⚠️

- [x] T008 [P] [US1] Make the root facade contract fail against the current root export in `tests/contract/root-functional-facade.test.ts`
- [x] T009 [P] [US1] Make the canonical creation flow fail for `NFe` and `enviNFe` in `tests/integration/canonical-nfe-facade.test.ts`

### Implementation for User Story 1

- [x] T010 [P] [US1] Implement the canonical input and document models in `src/canonical/nfe/canonical-nfe.ts` and `src/canonical/nfe/canonical-envi-nfe.ts`
- [x] T011 [P] [US1] Implement the public creation facade in `src/canonical/facade/create-nfe.ts` and `src/canonical/facade/create-envi-nfe.ts`
- [x] T012 [US1] Adapt the generated `PL_010c_NT2022_002v1.30` structures into canonical assembly in `src/canonical/nfe/generated-nfe-adapter.ts`
- [x] T013 [US1] Publish the canonical creation facade through `src/canonical/index.ts` and `src/index.ts`
- [x] T014 [US1] Document the supported root facade and scope limits in `README.md` and `specs/004-iniciar-sdk/contracts/public-functional-facade.md`

**Checkpoint**: User Story 1 should allow integrators to create supported canonical documents from the root import alone.

---

## Phase 4: User Story 2 - Serializar XML previsivel para os fluxos priorizados (Priority: P2)

**Goal**: Produce deterministic XML for the supported canonical `NFe` and `enviNFe` flows.

**Independent Test**: Run serialization integration and unit checks to verify that equivalent canonical inputs always produce structurally equivalent XML for the supported documents.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Make deterministic XML regression fail for supported documents in `tests/integration/canonical-nfe-serialization.test.ts`
- [x] T016 [P] [US2] Make XML structural equivalence checks fail in `tests/unit/deterministic-xml.test.ts`

### Implementation for User Story 2

- [x] T017 [P] [US2] Add reusable XML regression fixtures in `tests/fixtures/canonical-nfe/nfe-minimal.xml` and `tests/fixtures/canonical-nfe/envi-nfe-minimal.xml`
- [x] T018 [P] [US2] Implement deterministic XML serialization and ordering rules in `src/canonical/serialization/deterministic-xml.ts` and `src/canonical/serialization/xml-ordering.ts`
- [x] T019 [US2] Expose serialization functions through `src/canonical/facade/serialize-nfe-xml.ts`, `src/canonical/facade/serialize-envi-nfe-xml.ts`, and `src/index.ts`
- [x] T020 [US2] Record fixture-backed serialization evidence and deferred XSD validation limits in `specs/004-iniciar-sdk/contracts/public-functional-facade.md` and `specs/004-iniciar-sdk/quickstart.md`

**Checkpoint**: User Stories 1 and 2 should now support creation plus deterministic XML serialization for the declared slice.

---

## Phase 5: User Story 3 - Normalizar campos compartilhados antes das proximas fases operacionais (Priority: P3)

**Goal**: Normalize the initial shared fields so later phases reuse one canonical interpretation for environment, version, and identifiers.

**Independent Test**: Run shared-field normalization and gap-registration tests to verify that `NFe` and `enviNFe` use one consistent rule set for the fields prioritized in this phase.

### Tests for User Story 3 ⚠️

- [x] T021 [P] [US3] Make shared normalization rules fail for `environment`, `version`, and initial identifiers in `tests/unit/shared-field-normalization.test.ts`
- [x] T022 [P] [US3] Make deferred-gap reporting fail for unsupported identifiers and documents in `tests/unit/gap-register.test.ts`

### Implementation for User Story 3

- [x] T023 [P] [US3] Implement environment and version normalization rules in `src/canonical/shared/environment-rule.ts` and `src/canonical/shared/version-rule.ts`
- [x] T024 [P] [US3] Implement document and batch identifier normalization in `src/canonical/shared/document-id-rule.ts` and `src/canonical/shared/batch-id-rule.ts`
- [x] T025 [US3] Integrate shared normalization and deferred-gap reporting into `src/canonical/nfe/canonical-nfe.ts`, `src/canonical/nfe/canonical-envi-nfe.ts`, and `src/canonical/shared/gap-register.ts`
- [x] T026 [US3] Document normalization scope, deferred key-access work, and follow-up boundaries in `specs/004-iniciar-sdk/data-model.md` and `specs/004-iniciar-sdk/research.md`

**Checkpoint**: All user stories should now be independently functional within the declared `NFe` and `enviNFe` slice.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [x] T027 [P] Review root export and contract consistency across `src/index.ts`, `package.json`, and `specs/004-iniciar-sdk/contracts/public-functional-facade.md`
- [x] T028 [P] Review fixture, serializer, and quickstart consistency across `tests/fixtures/canonical-nfe/`, `tests/integration/canonical-nfe-serialization.test.ts`, and `specs/004-iniciar-sdk/quickstart.md`
- [x] T029 [P] Review provenance, scope, and deferred-gap notes across `specs/004-iniciar-sdk/plan.md`, `specs/004-iniciar-sdk/research.md`, and `specs/004-iniciar-sdk/data-model.md`
- [x] T030 Run the feature validation flow for `src/index.ts`, `src/canonical/`, `tests/contract/root-functional-facade.test.ts`, `tests/integration/canonical-nfe-serialization.test.ts`, and `specs/004-iniciar-sdk/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, and `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP root facade for canonical document creation.
- **User Story 2 (P2)**: Starts after Foundational and builds on the canonical document outputs from User Story 1 to add deterministic serialization.
- **User Story 3 (P3)**: Starts after Foundational and can proceed alongside or after User Story 2, provided the canonical document models from User Story 1 are already stable enough to consume shared normalization rules.

### Within Each User Story

- Tests for public contract, serialization behavior, and normalization rules MUST be written and fail before implementation.
- Canonical models and shared contracts must land before facade wiring.
- Serialization helpers must land before root serialization exports are stabilized.
- Shared field rules must land before deferred-gap notes are finalized.

### Parallel Opportunities

- T002 and T003 can run in parallel.
- T005 and T006 can run in parallel.
- T008 and T009 can run in parallel.
- T010 and T011 can run in parallel.
- T015 and T016 can run in parallel.
- T017 and T018 can run in parallel.
- T021 and T022 can run in parallel.
- T023 and T024 can run in parallel.
- T027, T028, and T029 can run in parallel.

---

## Parallel Example: User Story 2

```bash
# Launch the serialization regressions in parallel:
Task: "Make deterministic XML regression fail for supported documents in tests/integration/canonical-nfe-serialization.test.ts"
Task: "Make XML structural equivalence checks fail in tests/unit/deterministic-xml.test.ts"

# Launch supporting implementation on separate files:
Task: "Add reusable XML regression fixtures in tests/fixtures/canonical-nfe/nfe-minimal.xml and tests/fixtures/canonical-nfe/envi-nfe-minimal.xml"
Task: "Implement deterministic XML serialization and ordering rules in src/canonical/serialization/deterministic-xml.ts and src/canonical/serialization/xml-ordering.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that canonical `NFe` and `enviNFe` creation works from the root import without generated-tree imports.

### Incremental Delivery

1. Deliver canonical creation through the root facade.
2. Add deterministic XML serialization with fixture-backed regression evidence.
3. Add shared normalization and deferred-gap reporting for future phases.
4. Finish with cross-cutting validation and package-level consistency checks.

### Parallel Team Strategy

1. One contributor opens the canonical models and root facade under `src/canonical/nfe/` and `src/canonical/facade/`.
2. One contributor builds the deterministic serializer and XML fixtures under `src/canonical/serialization/` and `tests/fixtures/canonical-nfe/`.
3. One contributor implements shared normalization and gap tracking under `src/canonical/shared/` and the related unit tests.
4. Finish with a shared review of `src/index.ts`, package metadata, docs, and validation commands.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes public contract behavior and observable XML output, so tests are mandatory.
- The first functional slice remains limited to `NFe` and `enviNFe` from `PL_010c_NT2022_002v1.30`.
- Full XSD automation, signature, SOAP, and complete access-key logic remain deferred beyond this task list.

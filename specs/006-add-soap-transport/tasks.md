---
description: 'Task list for the initial SOAP transport slice'
---

# Tasks: Add SOAP Transport

**Input**: Design documents from `/specs/006-add-soap-transport/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-soap-transport-facade.md, quickstart.md

**Tests**: This feature changes the published package surface, introduces observable SOAP transport behavior, and adds catalog-driven endpoint resolution plus structured failure classification. Contract, integration, unit, and fixture-backed regression tests are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the fixture and test scaffolding for the first SOAP transport slice.

- [X] T001 Create the transport fixture scaffold in `tests/fixtures/transport/nfe-status-service/request.xml`, `tests/fixtures/transport/nfe-status-service/response-success.xml`, `tests/fixtures/transport/nfe-authorization/request.xml`, and `tests/fixtures/transport/nfe-authorization/response-success.xml`
- [X] T002 [P] Create the root transport facade contract test scaffold in `tests/contract/root-transport-facade.test.ts`
- [X] T003 [P] Create the status-service integration test scaffold in `tests/integration/execute-nfe-status-service.test.ts`
- [X] T004 [P] Create the authorization integration test scaffold in `tests/integration/execute-nfe-authorization.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared transport boundaries that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T005 Establish the transport module boundaries and barrel wiring in `src/canonical/transport/index.ts` and `src/canonical/facade/index.ts`
- [X] T006 [P] Create shared transport contracts and error primitives in `src/canonical/transport/contracts.ts` and `src/canonical/transport/errors.ts`
- [X] T007 [P] Create shared request-executor and supported-service definitions in `src/canonical/transport/request-executor.ts` and `src/canonical/transport/supported-services.ts`
- [X] T008 [P] Add reusable transport fixture loaders and SOAP assertion helpers in `tests/fixtures/transport/load-transport-fixture.ts` and `tests/config/soap-transport-assertions.ts`
- [X] T009 Wire the transport-slice validation baseline in `package.json` and create the service-catalog skeleton in `src/canonical/transport/service-catalog.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Consumir servico homologado sem montar SOAP manualmente (Priority: P1) 🎯 MVP

**Goal**: Let integrators execute the supported homologation services through the root package surface, receive structured outcomes back, and avoid manual SOAP envelope assembly.

**Independent Test**: Run the root transport contract test plus the status-service and authorization integration tests to verify that supported payloads execute through the root import with structured evidence and no manual SOAP assembly.

### Tests for User Story 1 ⚠️

- [X] T010 [P] [US1] Make the root transport facade contract fail against the current root export in `tests/contract/root-transport-facade.test.ts`
- [X] T011 [P] [US1] Make the status-service execution regression fail in `tests/integration/execute-nfe-status-service.test.ts`
- [X] T012 [P] [US1] Make the authorization execution regression fail in `tests/integration/execute-nfe-authorization.test.ts`

### Implementation for User Story 1

- [X] T013 [P] [US1] Add the owned success SOAP fixtures for status and authorization in `tests/fixtures/transport/nfe-status-service/request.xml`, `tests/fixtures/transport/nfe-status-service/response-success.xml`, `tests/fixtures/transport/nfe-authorization/request.xml`, and `tests/fixtures/transport/nfe-authorization/response-success.xml`
- [X] T014 [P] [US1] Implement the SOAP envelope builder and response parser in `src/canonical/transport/soap-envelope.ts` and `src/canonical/transport/soap-response-parser.ts`
- [X] T015 [P] [US1] Implement the transport execution flow and default fetch-backed executor in `src/canonical/transport/execute-nfe-soap-service.ts` and `src/canonical/transport/fetch-request-executor.ts`
- [X] T016 [US1] Expose the execution facade through `src/canonical/facade/execute-nfe-soap-service.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [X] T017 [US1] Document the root transport execution flow in `README.md`, `src/public-contract.ts`, and `specs/006-add-soap-transport/contracts/public-soap-transport-facade.md`

**Checkpoint**: User Story 1 should allow integrators to execute the supported homologation services from the root import and receive structured transport outcomes without manual SOAP assembly.

---

## Phase 4: User Story 2 - Selecionar endpoints por catalogo versionado (Priority: P2)

**Goal**: Let integrators and maintainers resolve supported endpoints from a versioned catalog and fail explicitly when a combination is outside the initial coverage.

**Independent Test**: Run the catalog-resolution unit regressions to verify that supported combinations resolve to one versioned entry and unsupported combinations fail before any network attempt.

### Tests for User Story 2 ⚠️

- [X] T018 [P] [US2] Make supported catalog-resolution regressions fail in `tests/unit/service-catalog.test.ts`
- [X] T019 [P] [US2] Make unsupported-combination resolution fail in `tests/unit/resolve-nfe-service-endpoint-errors.test.ts`

### Implementation for User Story 2

- [X] T020 [P] [US2] Implement catalog provenance and the initial SVAN entries in `src/canonical/transport/catalog-provenance.ts` and `src/canonical/transport/service-catalog.ts`
- [X] T021 [P] [US2] Implement endpoint-resolution normalization and unsupported-combination diagnostics in `src/canonical/transport/resolve-nfe-service-endpoint.ts` and `src/canonical/transport/errors.ts`
- [X] T022 [US2] Expose the endpoint-resolution facade through `src/canonical/facade/resolve-nfe-service-endpoint.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [X] T023 [US2] Publish catalog scope and versioning notes in `README.md`, `src/public-contract.ts`, and `specs/006-add-soap-transport/quickstart.md`

**Checkpoint**: User Stories 1 and 2 should now let integrators resolve supported endpoints deterministically and execute supported SOAP calls from the root import.

---

## Phase 5: User Story 3 - Diagnosticar indisponibilidade, rejeicao e uso indevido com retorno estruturado (Priority: P3)

**Goal**: Give integrators distinct, observable classifications for timeout, unavailability, usage errors, functional rejection, and protocol errors without mixing transport with domain orchestration.

**Independent Test**: Run the transport-classification unit regressions and the failure integration regressions to verify that timeout, unavailable, functional-rejection, usage-error, and protocol-error scenarios produce distinct structured outcomes.

### Tests for User Story 3 ⚠️

- [X] T024 [P] [US3] Make transport classification regressions fail in `tests/unit/transport-outcome-classification.test.ts`
- [X] T025 [P] [US3] Make timeout, unavailable, and protocol-error regressions fail in `tests/integration/execute-nfe-soap-service-failures.test.ts`

### Implementation for User Story 3

- [X] T026 [P] [US3] Add failure and edge-case transport fixtures in `tests/fixtures/transport/failures/unavailable-response.xml`, `tests/fixtures/transport/failures/functional-rejection-response.xml`, `tests/fixtures/transport/failures/protocol-error-response.xml`, and `tests/fixtures/transport/failures/usage-error-input.json`
- [X] T027 [P] [US3] Implement application-status extraction and transport outcome classification in `src/canonical/transport/application-status.ts` and `src/canonical/transport/transport-outcome-classification.ts`
- [X] T028 [P] [US3] Implement timeout, usage-error, and protocol-error handling in `src/canonical/transport/execute-nfe-soap-service.ts` and `src/canonical/transport/errors.ts`
- [X] T029 [US3] Document structured diagnostic evidence and classification boundaries in `README.md`, `specs/006-add-soap-transport/contracts/public-soap-transport-facade.md`, and `specs/006-add-soap-transport/data-model.md`

**Checkpoint**: All user stories should now be independently functional and the transport layer should return distinct, structured outcomes for the supported success and failure paths.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [X] T030 [P] Add sibling module documentation for the transport slice in `src/canonical/transport/contracts.doc.md`, `src/canonical/transport/service-catalog.doc.md`, `src/canonical/transport/execute-nfe-soap-service.doc.md`, and `src/canonical/transport/transport-outcome-classification.doc.md`
- [X] T031 [P] Review tarball and root export consistency across `src/index.ts`, `package.json`, `tests/integration/package-tarball-smoke.test.ts`, and `specs/006-add-soap-transport/contracts/public-soap-transport-facade.md`
- [X] T032 [P] Review feature-artifact coherence for the transport slice in `specs/006-add-soap-transport/tasks.md`, `specs/006-add-soap-transport/quickstart.md`, and `specs/006-add-soap-transport/research.md`
- [X] T033 Run the feature validation flow for `src/index.ts`, `src/canonical/transport/`, `tests/contract/root-transport-facade.test.ts`, `tests/unit/service-catalog.test.ts`, `tests/unit/resolve-nfe-service-endpoint-errors.test.ts`, `tests/unit/transport-outcome-classification.test.ts`, `tests/integration/execute-nfe-status-service.test.ts`, `tests/integration/execute-nfe-authorization.test.ts`, `tests/integration/execute-nfe-soap-service-failures.test.ts`, and `specs/006-add-soap-transport/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP root transport flow for the two supported homologation services.
- **User Story 2 (P2)**: Starts after Foundational and expands the public catalog boundary while preserving User Story 1 behavior.
- **User Story 3 (P3)**: Starts after Foundational and can proceed alongside or after User Story 2, provided the execution flow from User Story 1 is stable enough to classify failures.

### Within Each User Story

- Tests for public contract, integration behavior, and classification handling MUST be written and fail before implementation.
- Shared transport contracts must land before facade wiring.
- SOAP envelope and parser helpers must land before root execution exports are stabilized.
- Catalog provenance and supported entries must land before public resolution is exposed.
- Classification and diagnostics notes must land before the final validation pass.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, and T008 can run in parallel.
- T010, T011, and T012 can run in parallel.
- T013, T014, and T015 can run in parallel.
- T018 and T019 can run in parallel.
- T020 and T021 can run in parallel.
- T024 and T025 can run in parallel.
- T030, T031, and T032 can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch the root-transport regressions in parallel:
Task: "Make the status-service execution regression fail in tests/integration/execute-nfe-status-service.test.ts"
Task: "Make the authorization execution regression fail in tests/integration/execute-nfe-authorization.test.ts"
Task: "Make the root transport facade contract fail against the current root export in tests/contract/root-transport-facade.test.ts"

# Launch supporting implementation on separate files:
Task: "Add the owned success SOAP fixtures for status and authorization"
Task: "Implement the SOAP envelope builder and response parser in src/canonical/transport/soap-envelope.ts and src/canonical/transport/soap-response-parser.ts"
Task: "Implement the transport execution flow and default fetch-backed executor in src/canonical/transport/execute-nfe-soap-service.ts and src/canonical/transport/fetch-request-executor.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that the supported homologation services execute from the root import and return structured evidence without manual SOAP assembly.

### Incremental Delivery

1. Deliver the minimal root transport execution flow for status and authorization.
2. Expose deterministic catalog resolution with explicit unsupported-combination failures.
3. Add structured classification for timeout, unavailable, usage-error, functional-rejection, and protocol-error scenarios.
4. Finish with cross-cutting validation and package-level consistency checks.

### Parallel Team Strategy

1. One contributor opens the transport execution and parser modules under `src/canonical/transport/`.
2. One contributor builds catalog provenance and endpoint-resolution support under `src/canonical/transport/` and `tests/unit/`.
3. One contributor maintains the public contract, README, and feature docs in `src/public-contract.ts`, `README.md`, and `specs/006-add-soap-transport/`.
4. Finish with a shared review of `src/index.ts`, package metadata, tarball smoke coverage, catalog provenance, and validation commands.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes public contract behavior and observable transport behavior, so tests are mandatory.
- The first transport slice remains limited to homologation, `nfe-status-service`, `nfe-authorization`, and shared SVAN endpoints.
- Production, SVRS, SVC, per-UF routing, receipt polling, consultation of protocol, and full NFe domain orchestration remain deferred beyond this task list.

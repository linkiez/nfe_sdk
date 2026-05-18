# Tasks: Generic Event MVP

**Input**: Design documents from `/specs/009-generic-event-mvp/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/public-generic-event-facade.md

**Tests**: This feature changes the public package surface, runtime behavior, and contract outcomes, so contract, unit, integration, and smoke-oriented validation tasks are required.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the feature workspace and test scaffolding shared by all stories.

- [x] T001 Create the generic-event module barrel and documentation anchors in src/canonical/generic-event/index.ts and src/canonical/generic-event/index.doc.md
- [x] T002 [P] Create generic-event test folders and fixture scaffolding in tests/unit/generic-event/.gitkeep, tests/integration/generic-event/.gitkeep, and tests/fixtures/generic-event/.gitkeep

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared contracts, validation, transport mapping, and fixture builders required before any story work can proceed.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Define shared generic-event contracts and public type aliases in src/canonical/generic-event/contracts.ts
- [x] T004 [P] Define supported-family metadata and coverage boundaries in src/canonical/generic-event/family-boundary.ts
- [x] T005 [P] Implement pre-transport batch validation for size, family scope, and local required fields in src/canonical/generic-event/validate-generic-event-batch.ts
- [x] T006 [P] Implement shared batch and item classification helpers in src/canonical/generic-event/classify-generic-event-outcome.ts
- [x] T007 Implement generic event XML envelope builders and response parsers in src/canonical/generic-event/build-env-evento.ts and src/canonical/generic-event/parse-ret-env-evento.ts
- [x] T008 Create reusable fixture builders for generic-event requests and responses in tests/fixtures/generic-event/build-generic-event-fixtures.ts

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Registrar eventos genericos suportados por uma facade unica (Priority: P1) 🎯 MVP

**Goal**: Expose a single root facade that submits any supported generic event family without requiring raw `envEvento` assembly.

**Independent Test**: Import the package root, submit one supported homologation event with valid data, and verify a structured batch outcome with item-level protocol or status information.

### Tests for User Story 1 ⚠️

- [x] T009 [P] [US1] Add root contract regression coverage for `submitGenericEvents` in tests/contract/public-generic-event-facade.test.ts
- [x] T010 [P] [US1] Add unit coverage for pre-transport validation and single-item local failures in tests/unit/generic-event/submit-generic-events.validation.test.ts
- [x] T011 [P] [US1] Add integration coverage for a single supported generic event flow in tests/integration/generic-event/submit-single-generic-event.test.ts

### Implementation for User Story 1

- [x] T012 [P] [US1] Implement family payload mapping for delivery confirmation and interested actor events in src/canonical/generic-event/map-delivery-confirmation-event.ts and src/canonical/generic-event/map-interested-actor-event.ts
- [x] T013 [P] [US1] Implement family payload mapping for delivery failure and ECONF events in src/canonical/generic-event/map-delivery-failure-event.ts and src/canonical/generic-event/map-econf-event.ts
- [x] T014 [P] [US1] Add single-event fixtures for each supported family in tests/fixtures/generic-event/delivery-confirmation.ts, tests/fixtures/generic-event/interested-actor.ts, tests/fixtures/generic-event/delivery-failure.ts, and tests/fixtures/generic-event/econf.ts
- [x] T015 [US1] Implement the generic-event submission orchestrator in src/canonical/generic-event/submit-generic-events.ts
- [x] T016 [US1] Add the public facade wrapper and wire exports in src/canonical/facade/submit-generic-events.ts, src/canonical/facade/index.ts, src/canonical/index.ts, and src/index.ts
- [x] T017 [US1] Update the documented root contract evidence for the new facade in src/public-contract.ts, src/public-contract.doc.md, and src/index.doc.md

**Checkpoint**: User Story 1 should now be independently functional through the package root.

---

## Phase 4: User Story 2 - Processar lotes pequenos de eventos heterogeneos com rastreabilidade (Priority: P2)

**Goal**: Support small heterogeneous batches with structured batch and item outcomes, including mixed remote success and rejection states.

**Independent Test**: Submit a valid mixed batch with two or more supported families and verify that the returned outcome preserves batch status plus per-item remote processing details.

### Tests for User Story 2 ⚠️

- [X] T018 [P] [US2] Add contract regression coverage for batch and item outcome shape in tests/contract/generic-event-batch-outcome.test.ts
- [X] T019 [P] [US2] Add integration coverage for a heterogeneous batch with mixed remote outcomes in tests/integration/generic-event/submit-heterogeneous-generic-event-batch.test.ts
- [X] T020 [P] [US2] Add mixed-batch request and response fixtures in tests/fixtures/generic-event/heterogeneous-batch.ts and tests/fixtures/generic-event/ret-env-evento-mixed.xml

### Implementation for User Story 2

- [X] T021 [US2] Implement remote batch-to-item outcome correlation in src/canonical/generic-event/map-generic-event-batch-outcome.ts
- [X] T022 [US2] Extend the submission orchestrator for multi-item synchronous batches in src/canonical/generic-event/submit-generic-events.ts
- [X] T023 [US2] Add unit coverage for mixed success, remote rejection, and accepted-for-transport semantics in tests/unit/generic-event/generic-event-batch-outcome.test.ts
- [X] T024 [US2] Update the feature quickstart mixed-batch example in specs/009-generic-event-mvp/quickstart.md and specs/009-generic-event-mvp/contracts/public-generic-event-facade.md

**Checkpoint**: User Stories 1 and 2 should both be independently testable, including heterogeneous batch behavior.

---

## Phase 5: User Story 3 - Tornar explicitas as fronteiras entre eventos genericos suportados e backlog posterior (Priority: P3)

**Goal**: Make supported families, excluded scope, and pre-transport rejection rules explicit in code, docs, and public contract behavior.

**Independent Test**: Attempt to submit an over-limit batch and a batch containing an out-of-scope family, and verify explicit local rejection without remote transport.

### Tests for User Story 3 ⚠️

- [X] T025 [P] [US3] Add contract regression coverage for out-of-scope families and over-limit batches in tests/contract/generic-event-coverage-boundary.test.ts
- [X] T026 [P] [US3] Add unit coverage for local usage errors versus remote service failures in tests/unit/generic-event/generic-event-error-taxonomy.test.ts

### Implementation for User Story 3

- [X] T027 [US3] Implement explicit coverage-boundary diagnostics and over-limit guard behavior in src/canonical/generic-event/coverage-boundary.ts and src/canonical/generic-event/validate-generic-event-batch.ts
- [X] T028 [US3] Update public scope documentation for supported and excluded families in specs/009-generic-event-mvp/contracts/public-generic-event-facade.md, specs/009-generic-event-mvp/quickstart.md, and README.md
- [X] T029 [US3] Update package contract evidence and compatibility notes for scope boundaries in src/public-contract.ts and src/public-contract.doc.md

**Checkpoint**: All user stories should now be independently functional and their boundaries explicit.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish provenance, validation, and cross-story cleanup.

- [X] T030 [P] Update provenance notes for the implemented generic-event families in docs/\_meta/source-registry.md and specs/009-generic-event-mvp/research.md
- [X] T031 [P] Add facade wiring and serialization regression coverage in tests/unit/generic-event/submit-generic-events.facade.test.ts
- [X] T032 Update validation command references after implementation in specs/009-generic-event-mvp/quickstart.md and README.md
- [X] T033 Run the package validation gate and record any required follow-up adjustments in specs/009-generic-event-mvp/quickstart.md and specs/009-generic-event-mvp/contracts/public-generic-event-facade.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies - can start immediately.
- **Phase 2: Foundational**: Depends on Phase 1 - blocks all user stories.
- **Phase 3: User Story 1**: Depends on Phase 2.
- **Phase 4: User Story 2**: Depends on Phase 2 and reuses the public facade introduced in User Story 1.
- **Phase 5: User Story 3**: Depends on Phase 2 and hardens the same public facade with explicit boundary behavior.
- **Phase 6: Polish**: Depends on the user stories selected for delivery.

### User Story Dependencies

- **US1 (P1)**: First MVP increment; establishes the new root facade and single-item supported-family flow.
- **US2 (P2)**: Builds on the same facade to add heterogeneous batch behavior while remaining independently testable once implemented.
- **US3 (P3)**: Hardens contract boundaries and explicit scope messaging for the facade introduced in US1.

### Within Each User Story

- Tests and regression probes must be written before implementation tasks for that story.
- Fixture assets should be created before the implementation tasks that consume them.
- Public export wiring happens after the underlying generic-event orchestration exists.
- Documentation updates happen after behavior and contract shape are stable for the story.

### Dependency Graph

- **Recommended order**: US1 → US2 → US3.
- **Parallel start after foundation**: US1, US2, and US3 can be staffed in parallel, but US2 and US3 will integrate against the shared facade and outcome model established in US1.

---

## Parallel Opportunities

- T002 can run in parallel with T001 after the module path exists.
- T004, T005, and T006 can run in parallel once T003 is complete.
- T009, T010, and T011 can run in parallel for US1.
- T012, T013, and T014 can run in parallel for US1.
- T018, T019, and T020 can run in parallel for US2.
- T025 and T026 can run in parallel for US3.
- T030 and T031 can run in parallel during polish.

---

## Parallel Example: User Story 1

```bash
# Launch US1 tests together:
Task: "Root contract regression coverage in tests/contract/public-generic-event-facade.test.ts"
Task: "Unit coverage for pre-transport validation in tests/unit/generic-event/submit-generic-events.validation.test.ts"
Task: "Integration coverage for a single supported event in tests/integration/generic-event/submit-single-generic-event.test.ts"

# Launch US1 family mapping and fixture work together:
Task: "Implement delivery and interested actor mappers in src/canonical/generic-event/map-delivery-confirmation-event.ts and src/canonical/generic-event/map-interested-actor-event.ts"
Task: "Implement delivery failure and ECONF mappers in src/canonical/generic-event/map-delivery-failure-event.ts and src/canonical/generic-event/map-econf-event.ts"
Task: "Add single-event fixtures in tests/fixtures/generic-event/*.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Validate the new root facade independently with contract, unit, and integration coverage.
5. Stop for review before expanding to batch behavior.

### Incremental Delivery

1. Finish Setup + Foundational to establish the shared generic-event substrate.
2. Deliver US1 as the first public additive facade.
3. Deliver US2 to add heterogeneous batch behavior and per-item outcomes.
4. Deliver US3 to harden boundaries, exclusions, and explicit diagnostics.
5. Finish with Phase 6 polish and package validation.

### Parallel Team Strategy

1. One developer prepares shared contracts and validation in Phase 2.
2. A second developer can prepare US1 tests and fixtures while foundational helpers settle.
3. After US1 contract shape stabilizes, separate developers can split US2 batch mapping and US3 boundary hardening.

---

## Notes

- `[P]` tasks touch different files and can be run in parallel.
- `[US1]`, `[US2]`, and `[US3]` map each task back to the corresponding user story.
- Every user story has an independent test definition and explicit validation tasks.
- The MVP scope is User Story 1 only; User Stories 2 and 3 extend the same facade incrementally.
- Validation commands for the full feature remain `npm run lint`, `npx prettier --check specs/009-generic-event-mvp/*.md specs/009-generic-event-mvp/contracts/*.md .github/copilot-instructions.md`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`.

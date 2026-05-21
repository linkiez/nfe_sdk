---
description: 'Task list for the NFe receipt protocol slice'
---

# Tasks: NFe Receipt Protocol

**Input**: Design documents from `/specs/021-nfe-receipt-protocol/`

**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/public-nfe-receipt-protocol-facade.md`, `quickstart.md`

**Tests**: This feature expands the public runtime contract and observable operational behavior. Contract, integration, unit, and fixture-backed regression tests are required.

**Organization**: Tasks are grouped by user story to keep async submission, dedicated receipt reconciliation, and explicit boundaries independently testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish receipt-protocol fixtures and failing test scaffolds for the new runtime slice.

- [ ] T001 Create receipt-response fixture scaffolds in `tests/fixtures/nfe-operational/authorization/receipt-response-authorized.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-rejected.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-denied.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-unavailable.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-inconclusive.xml`, and `tests/fixtures/nfe-operational/authorization/receipt-response-processing.xml`
- [ ] T002 [P] Create the root receipt-facade contract scaffold in `tests/contract/root-nfe-receipt-facade.test.ts`
- [ ] T003 [P] Create the receipt reconciliation integration scaffold in `tests/integration/reconcile-nfe-receipt.test.ts`
- [ ] T004 [P] Create the receipt reconciliation unit scaffold in `tests/unit/nfe-receipt-reconciliation.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared receipt-protocol boundaries that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T005 Establish receipt-protocol contracts and routing-context types in `src/canonical/nfe/contracts.ts`
- [ ] T006 [P] Extend the async receipt parser baseline in `src/canonical/nfe/async-batch-retrieval.ts` and `tests/unit/canonical/nfe/async-batch-retrieval.test.ts`
- [ ] T007 [P] Wire receipt-protocol module boundaries in `src/canonical/nfe/index.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [ ] T008 [P] Prepare root contract and package-boundary baseline for receipt promotion in `src/public-contract.ts` and `README.md`

**Checkpoint**: Foundation ready - receipt-protocol user story work can now begin.

---

## Phase 3: User Story 1 - Submeter uma `NF-e` assinada e obter retorno assincrono observavel (Priority: P1) 🎯 MVP

**Goal**: Let integrators observe when `authorizeNFe` returns an intermediate async receipt instead of a terminal result, without requiring a follow-up query for immediate terminal responses.

**Independent Test**: Run the authorization integration regression and a focused unit check to verify that a supported submission returns either a terminal result or a `received` outcome with `receiptNumber` and explicit next-step semantics.

### Tests for User Story 1 ⚠️

- [ ] T009 [P] [US1] Make the async authorization receipt regression fail in `tests/integration/authorize-nfe-batch.test.ts`
- [ ] T010 [P] [US1] Make the receipt-aware authorization mapping regression fail in `tests/unit/nfe-receipt-reconciliation.test.ts`

### Implementation for User Story 1

- [ ] T011 [P] [US1] Add or update the received-batch fixture expectations in `tests/fixtures/nfe-operational/authorization/batch-response-received.xml` and `tests/integration/authorize-nfe-batch.test.ts`
- [ ] T012 [P] [US1] Implement or adjust async submission mapping in `src/canonical/nfe/authorize-nfe.ts` and `src/canonical/nfe/authorization-outcome.ts`
- [ ] T013 [US1] Align the public authorization contract for observable `receiptNumber` behavior in `src/canonical/nfe/contracts.ts` and `src/canonical/nfe/index.ts`
- [ ] T014 [US1] Document the async submission outcome in `README.md` and `specs/021-nfe-receipt-protocol/quickstart.md`

**Checkpoint**: User Story 1 should allow integrators to distinguish terminal authorization from async receipt-based continuation without opening generic polling.

---

## Phase 4: User Story 2 - Retomar o fluxo por `nRec` e reconciliar protocolo final (Priority: P2)

**Goal**: Let integrators call a dedicated public operation with `nRec` plus explicit routing context and receive a structured reconciliation result for terminal or pending outcomes.

**Independent Test**: Run the root receipt-facade contract test, the receipt reconciliation integration test, and the parser-focused unit tests to verify that a known `nRec` can be reconciled into `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive`, `pending`, `not-found`, `protocol-error`, or `usage-error` outcomes, with `pending` reserved for processing still in course, `unavailable` reserved for official/transport unavailability, and `inconclusive` reserved for completed-but-insufficient official evidence.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Make the dedicated receipt-facade contract fail in `tests/contract/root-nfe-receipt-facade.test.ts`
- [x] T016 [P] [US2] Make the receipt reconciliation journey fail in `tests/integration/reconcile-nfe-receipt.test.ts`
- [x] T017 [P] [US2] Expand parser and reconciliation boundary failures in `tests/unit/canonical/nfe/async-batch-retrieval.test.ts` and `tests/unit/nfe-receipt-reconciliation.test.ts`, including explicit assertions for the `pending` vs `unavailable` vs `inconclusive` classification matrix

### Implementation for User Story 2

- [x] T018 [P] [US2] Add the receipt reconciliation fixtures in `tests/fixtures/nfe-operational/authorization/receipt-response-authorized.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-rejected.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-denied.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-unavailable.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-inconclusive.xml`, and `tests/fixtures/nfe-operational/authorization/receipt-response-processing.xml`
- [x] T019 [P] [US2] Implement dedicated receipt reconciliation and XML request building in `src/canonical/nfe/reconcile-nfe-receipt.ts` and `src/canonical/nfe/async-batch-retrieval.ts`, preserving `pending` for processing-in-flight and `inconclusive` only for completed replies with insufficient terminal evidence
- [x] T020 [P] [US2] Map receipt reconciliation results into the operational-state model in `src/canonical/nfe/operational-state.ts` and `src/canonical/nfe/contracts.ts`, keeping `not-found`, `protocol-error`, and `usage-error` as explicit boundary classifications rather than document terminal outcomes
- [x] T021 [US2] Expose the root facade for `reconcileNFeReceipt` in `src/canonical/facade/reconcile-nfe-receipt.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T022 [US2] Publish the dedicated receipt operation contract in `specs/021-nfe-receipt-protocol/contracts/public-nfe-receipt-protocol-facade.md`, `src/public-contract.ts`, and `README.md`

**Checkpoint**: User Stories 1 and 2 should now let integrators observe async receipt issuance and reconcile a known `nRec` through a dedicated root operation.

---

## Phase 5: User Story 3 - Manter boundaries explicitas entre retomada por recibo e automacao operacional ampla (Priority: P3)

**Goal**: Make the non-goals and residual boundaries explicit so receipt reconciliation is not interpreted as generic polling, direct protocol lookup by key, local persistence, or multi-document recovery.

**Independent Test**: Run boundary-oriented contract and unit checks to verify that the repository clearly states what is promoted now and what remains outside the root runtime contract.

### Tests for User Story 3 ⚠️

- [x] T023 [P] [US3] Make receipt-boundary documentation checks fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-nfe-receipt-facade.test.ts`
- [x] T024 [P] [US3] Make receipt-boundary regressions fail in `tests/unit/nfe-receipt-reconciliation.test.ts`

### Implementation for User Story 3

- [x] T025 [P] [US3] Publish explicit non-goals and boundary notes in `specs/021-nfe-receipt-protocol/contracts/public-nfe-receipt-protocol-facade.md`, `specs/021-nfe-receipt-protocol/quickstart.md`, and `README.md`
- [x] T026 [US3] Reconcile root boundary messaging for `receipt-polling`, direct protocol lookup, and local persistence in `src/public-contract.ts` and `src/canonical/nfe/contracts.ts`
- [x] T027 [US3] Align feature artifacts and follow-up notes in `specs/021-nfe-receipt-protocol/research.md`, `specs/021-nfe-receipt-protocol/data-model.md`, and `specs/021-nfe-receipt-protocol/plan.md`

**Checkpoint**: All user stories should now be independently understandable and the receipt-protocol slice should have explicit boundaries with polling, key-based lookup, and operational persistence.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [x] T028 [P] Review tarball and exported surface consistency for `reconcileNFeReceipt` in `src/index.ts`, `package.json`, and `tests/integration/package-tarball-smoke.test.ts`
- [x] T029 [P] Reconcile final quickstart and contract wording in `specs/021-nfe-receipt-protocol/quickstart.md`, `specs/021-nfe-receipt-protocol/contracts/public-nfe-receipt-protocol-facade.md`, and `specs/021-nfe-receipt-protocol/tasks.md`
- [x] T030 Run the feature validation flow for `src/canonical/nfe/`, `src/canonical/facade/`, `src/index.ts`, `tests/contract/root-nfe-receipt-facade.test.ts`, `tests/integration/reconcile-nfe-receipt.test.ts`, and `tests/unit/canonical/nfe/async-batch-retrieval.test.ts` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP async-submission receipt signal.
- **User Story 2 (P2)**: Starts after Foundational and depends on the shared receipt contracts, but remains independently testable as a dedicated root operation.
- **User Story 3 (P3)**: Starts after Foundational and can proceed alongside or after User Story 2 once the public boundary vocabulary is stable enough to document.

### Within Each User Story

- Tests for behavioral or public contract changes MUST be written and fail before implementation.
- Shared contracts and parser behavior must land before facade wiring.
- Root exports must land only after the dedicated receipt operation is stable enough to preserve additive contract behavior.
- Boundary documentation must land before the final validation pass.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, and T008 can run in parallel.
- T009 and T010 can run in parallel.
- T015, T016, and T017 can run in parallel.
- T018, T019, and T020 can run in parallel.
- T023 and T024 can run in parallel.
- T028 and T029 can run in parallel.

---

## Parallel Example: User Story 2

```bash
# Launch the receipt-protocol regressions in parallel:
Task: "Make the dedicated receipt-facade contract fail in tests/contract/root-nfe-receipt-facade.test.ts"
Task: "Make the receipt reconciliation journey fail in tests/integration/reconcile-nfe-receipt.test.ts"
Task: "Expand parser and reconciliation boundary failures in tests/unit/canonical/nfe/async-batch-retrieval.test.ts and tests/unit/nfe-receipt-reconciliation.test.ts"

# Launch supporting implementation on separate files:
Task: "Add the receipt reconciliation fixtures in tests/fixtures/nfe-operational/authorization/receipt-response-*.xml"
Task: "Implement dedicated receipt reconciliation and XML request building in src/canonical/nfe/reconcile-nfe-receipt.ts and src/canonical/nfe/async-batch-retrieval.ts"
Task: "Map receipt reconciliation results into the operational-state model in src/canonical/nfe/operational-state.ts and src/canonical/nfe/contracts.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that `authorizeNFe` distinguishes terminal responses from async receipt-based continuation.

### Incremental Delivery

1. Deliver the minimal async submission receipt signal for `authorizeNFe`.
2. Add the dedicated root receipt reconciliation operation with explicit routing context.
3. Publish the remaining boundaries and non-goals so receipt promotion does not imply generic polling.
4. Finish with cross-cutting validation and package-level consistency checks.

### Parallel Team Strategy

1. One contributor expands fixtures and parser coverage under `tests/fixtures/nfe-operational/authorization/` and `tests/unit/canonical/nfe/`.
2. One contributor builds the dedicated runtime flow under `src/canonical/nfe/` and `src/canonical/facade/`.
3. One contributor maintains the public contract, README, and feature artifacts under `src/public-contract.ts`, `README.md`, and `specs/021-nfe-receipt-protocol/`.
4. Finish with a shared review of `src/index.ts`, tarball smoke coverage, and the final validation commands.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes the public runtime contract and observable XML/protocol behavior, so tests are mandatory.
- The slice remains limited to `nRec` known from a supported async submission plus explicit routing context.
- Generic polling, direct protocol lookup by key, local persistence, and multi-document recovery remain deferred beyond this task list.

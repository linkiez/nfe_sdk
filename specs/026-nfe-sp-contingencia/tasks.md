# Tasks: NF-e SP Production Contingency

**Input**: Design documents from `specs/026-nfe-sp-contingencia/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`, and `quickstart.md`

**Tests**: Required for public contracts, authorization routing, EPEC serialization, and recovery behavior. Use fixture-backed tests with injected executors only; never transmit live fiscal documents.

**Organization**: Tasks are grouped by user story. The repository and shared service/test infrastructure already exist, so Setup and Foundational phases have no implementation tasks. Shared contingency types belong to the earliest story that needs them.

## Phase 1: Setup

**Purpose**: Repository initialization

No tasks required: the TypeScript ESM package, Jest, lint, formatting, typecheck, and build configuration are already present.

---

## Phase 2: Foundational

**Purpose**: Shared prerequisites that block user stories

No tasks required: existing root facades, SVC-AN service definitions, injected `RequestExecutor`, NF-e schema, and EPEC schema provide the required foundation. Do not edit generated schema output unless implementation proves a schema gap.

---

## Phase 3: User Story 1 - Continue NF-e issuance during an official contingency (Priority: P1)

**Goal**: Allow explicit SP production contingency selection, gate SVC-AN on a fresh active status, and distinguish EPEC registration from NF-e authorization while keeping unsupported modes and uncertain submissions safe.

**Independent Test**: With fixture-backed executors, verify normal mode remains unchanged, SVC-AN sends authorization only after one production status `107`, EPEC is registered only with a valid protocol, and unsupported or unverified requests stop before transport.

### Tests for User Story 1

- [x] T001 [P] [US1] Add root-contract tests for explicit contingency mode, additive outcome metadata, and unchanged normal defaults in `tests/contract/nfe-sp-contingency.test.ts`
- [x] T002 [P] [US1] Add authorization boundary cases for SVC statuses `113`, `114`, unknown/missing status, wrong environment, transport failure, uncertain normal outcome, conflicting document identity, and FS-DA in `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts`
- [x] T003 [P] [US1] Add fixture-backed SVC status and request-sequence tests proving only status `107` permits one SVC-AN authorization in `tests/integration/query-nfe-service-status-contingency.test.ts`
- [x] T004 [P] [US1] Add EPEC serialization tests for production `tpAmb=1`, event `110140`, issuer IE, entry/exit `tpNF`, destination UF/identity, caller-supplied `vNF`/`vICMS`/`vST`, and preserved homologation defaults in `tests/unit/canonical/nfe/epec/epec-builder.test.ts`
- [x] T005 [P] [US1] Add injected-executor tests for production EPEC routing, valid acceptance protocol, and no automatic full-NF-e submission in `tests/integration/submit-epec-event-contingency.test.ts`

### Implementation for User Story 1

- [x] T006 [US1] Add typed execution mode, explicit contingency request, activation observation, and additive outcome metadata while preserving existing classifications in `src/canonical/nfe/contracts.ts` and `src/canonical/nfe/authorization-outcome.ts`
- [x] T007 [US1] Implement explicit SP mode selection in `src/canonical/nfe/authorize-nfe.ts`; preserve normal default behavior, route SVC-AN only after a fresh production `107`, use `tpEmis=6`, and stop before transport for other statuses, uncertain duplicate-risk context, or unsupported FS-DA
- [x] T008 [US1] Route the explicit SVC activation query through the production SVC-AN provider and reject wrong-environment evidence in `src/canonical/nfe/query-nfe-service-status.ts` and `src/canonical/facade/query-nfe-service-status.ts`, reusing existing catalog entries in `src/canonical/transport/service-catalog.ts`
- [x] T009 [US1] Extend EPEC detail contracts and XML building with issuer IE, invoice direction, recipient UF/identifier/optional IE, caller-supplied `vNF`/`vICMS`/`vST`, and explicit environment; validate against the checked-in EPEC XSD and preserve the homologation default in `src/canonical/nfe/epec/contracts.ts` and `src/canonical/nfe/epec/epec-builder.ts`
- [x] T010 [US1] Extend the existing EPEC submit facade for explicit SP production, Ambiente Nacional/SVC-AN routing, accepted-protocol validation, and an `awaiting-recovery` result without transmitting the NF-e in the same call in `src/canonical/nfe/submit-epec-event.ts`, `src/canonical/facade/submit-epec-event.ts`, and `src/index.ts`

**Checkpoint**: US1 works independently; normal authorization is unchanged, contingency is never selected implicitly, and every blocked route produces zero contingency authorization writes.

---

## Phase 4: User Story 2 - Reconcile documents after service recovery (Priority: P2)

**Goal**: Preserve caller-owned correlation and let the integrator explicitly submit the matching EPEC NF-e after recovery, with distinct terminal and non-terminal outcomes and no duplicate writes.

**Independent Test**: Register an EPEC with a fixture, then make a separate explicit recovery call using the same 44-digit key and `tpEmis=4`; verify accepted, pending, rejected, unavailable, and inconclusive states, and verify SVC-authorized documents are not retransmitted to the origin UF.

### Tests for User Story 2

- [x] T011 [P] [US2] Add public-contract tests for recovery correlation across authorization and known-receipt reconciliation, explicit next actions, and unchanged receipt classifications in `tests/contract/nfe-sp-contingency-recovery.test.ts`
- [x] T012 [P] [US2] Add fixture-backed EPEC recovery scenarios for matching-key `tpEmis=4` submission and known-`nRec` reconciliation; assert `reconciled`, pending, rejected, unavailable, and inconclusive outcomes and no automatic retry or SVC retransmission in `tests/integration/nfe-sp-contingency-recovery.test.ts` and `tests/integration/reconcile-nfe-receipt.test.ts`

### Implementation for User Story 2

- [x] T013 [US2] Project caller-supplied recovery context, contingency mode, document key, event protocol, recovery state, and next action into additive authorization and receipt outcomes while preserving existing classifications in `src/canonical/nfe/contracts.ts`, `src/canonical/nfe/authorization-outcome.ts`, `src/canonical/nfe/reconcile-nfe-receipt.ts`, and `src/canonical/facade/reconcile-nfe-receipt.ts`
- [x] T014 [US2] Implement explicit post-recovery EPEC submission through the normal SP authorizer using the exact registered key and `tpEmis=4`; reject mismatched context before transport and never retransmit SVC-authorized documents in `src/canonical/nfe/authorize-nfe.ts` and `src/canonical/facade/authorize-nfe.ts`
- [x] T015 [US2] Return the SP seven-day EPEC reconciliation limit as operational guidance and retain caller ownership of durable recovery records without timers, polling, or persistence in `src/canonical/nfe/submit-epec-event.ts` and `src/canonical/nfe/authorization-outcome.ts`

**Checkpoint**: US2 preserves the relation between the accepted event and later NF-e, exposes pending/reconciled/rejected/unavailable/inconclusive outcomes, and performs no implicit second write.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Align documentation and verify compatibility across the package

- [x] T016 [P] Update the public contract, EPEC/recovery data model, quickstart, and existing NF-e module documentation for the implemented mode boundaries, field validation, receipt correlation, and recovery actions in `specs/026-nfe-sp-contingencia/contracts/public-nfe-sp-contingency.md`, `specs/026-nfe-sp-contingencia/data-model.md`, `specs/026-nfe-sp-contingencia/quickstart.md`, `src/canonical/nfe/authorize-nfe.doc.md`, `src/canonical/nfe/authorization-outcome.doc.md`, `src/canonical/nfe/reconcile-nfe-receipt.doc.md`, and `src/canonical/facade/query-nfe-service-status.doc.md`
- [x] T017 [P] Synchronize source IDs, consultation dates, normative scope, and unresolved FS-DA/activation evidence between `specs/026-nfe-sp-contingencia/spec.md` and `specs/026-nfe-sp-contingencia/research.md`; retain the primary-source register and do not promote unusable or secondary sources to normative evidence
- [x] T018 Run the focused contingency Jest tests and the complete Jest suite with `npm test -- --runInBand`, covering `tests/contract/nfe-sp-contingency.test.ts`, `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts`, `tests/integration/query-nfe-service-status-contingency.test.ts`, `tests/unit/canonical/nfe/epec/epec-builder.test.ts`, `tests/integration/submit-epec-event-contingency.test.ts`, `tests/contract/nfe-sp-contingency-recovery.test.ts`, and `tests/integration/nfe-sp-contingency-recovery.test.ts`
- [x] T019 Run `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run audit:public-contract`, `npm run validate:tarball`, and the feature-document Prettier check from `specs/026-nfe-sp-contingencia/quickstart.md`; confirm generated schema directories and `xsd/` remain unchanged unless a validated schema gap requires regeneration

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No work required; the package and test infrastructure already exist.
- **Foundational (Phase 2)**: No work required; the existing typed request, routing, schema, and facade infrastructure is sufficient.
- **User Story 1 (Phase 3)**: Starts immediately. Complete tests T001-T005 before implementation T006-T010.
- **User Story 2 (Phase 4)**: Depends on US1's explicit EPEC result and shared contingency contract, especially T006 and T010. Complete tests T011-T012 before implementation T013-T015.
- **Polish (Phase 5)**: Depends on both user stories. T016 and T017 can run in parallel because they edit separate files; T018 follows implementation, and T019 must run after T016 and T017 so formatting checks include the final documents.

### User Story Dependencies

- **US1 (P1)**: Independent of other feature stories; forms the MVP.
- **US2 (P2)**: Depends on the EPEC registration result and additive outcome contract from US1 so the later action can correlate to the accepted event.

### Parallel Opportunities

- T001-T005 can be authored in parallel because they use separate test files and all precede implementation.
- T011-T012 can be authored in parallel after US1 because they use separate test files.
- T016 and T017 can run in parallel after implementation stabilizes because they touch separate documentation files.
- T018 can run after implementation; T019 runs only after T016 and T017 so no formatter check races with document edits.
- Do not parallelize implementation tasks T006-T010 or T013-T015 where tasks update shared NF-e contracts, outcomes, or facades.

## Parallel Example: User Story 1

```text
Task T001: Root contract scenarios in tests/contract/nfe-sp-contingency.test.ts
Task T002: Authorization boundary scenarios in tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts
Task T003: SVC request sequencing in tests/integration/query-nfe-service-status-contingency.test.ts
Task T004: EPEC serialization scenarios in tests/unit/canonical/nfe/epec/epec-builder.test.ts
Task T005: EPEC submission scenarios in tests/integration/submit-epec-event-contingency.test.ts
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Skip Setup and Foundational work; existing repository infrastructure is already in place.
2. Write and run T001-T005 to capture the failing public, SVC, EPEC, and boundary behaviors.
3. Implement T006-T010 and validate US1 independently with fixture-backed tests.
4. Stop at the US1 checkpoint if only production contingency selection and registration are needed.

### Incremental Delivery

1. Complete US1 to add explicit SVC-AN and production EPEC operations with safe boundaries.
2. Complete US2 to add explicit post-recovery correlation and outcome handling.
3. Complete T016-T018 for documentation, quality gates, and package compatibility.

## Notes

- Every task uses the required checklist format with a sequential ID and exact source, test, or documentation paths.
- `[P]` marks tasks that can proceed independently without editing the same file or depending on unfinished implementation.
- Tests must use injected executors and fixtures; no live SEFAZ calls, credential material, automatic fallback, polling, or local persistence are in scope.
- FS-DA remains an explicit assisted/unverified boundary until official SP applicability is confirmed.

## Phase 6: Convergence

- [x] T020 CRITICAL: Sign the EPEC event with the supplied `signingContext` and add an XSD-backed contract test proving the completed production envelope satisfies the required signature structure per Constitution II, CC-006, and US1/AC1 (contradicts)

## Phase 7: Convergence

- [x] T021 Escape the recipient `idEstrangeiro` value as XML text and add an XSD-backed case for special characters per US1/AC1 (partial)

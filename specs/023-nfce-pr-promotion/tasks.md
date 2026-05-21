# Tasks: NFC-e PR Promotion

**Input**: Design documents from `/specs/023-nfce-pr-promotion/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: This feature changes observable runtime behavior, focused fixtures, and public contract wording, so contract, integration, and unit tests are required before implementation for each affected story.

**Organization**: Tasks are grouped by user story so each increment can be implemented and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the focused validation scope, fixture inventory, and task-facing test surfaces for the PR promotion slice.

- [x] T001 Align the feature validation runbook in `specs/023-nfce-pr-promotion/quickstart.md` with the final `SP + PR` cohort, the preserved `unsupported-state` boundary, and the manual review step for `SC-004`.
- [x] T002 [P] Audit and reserve the focused NFC-e fixtures in `tests/fixtures/nfce/pr-homologation-input.json`, `tests/fixtures/nfce/pr-homologation-response-authorized.xml`, `tests/fixtures/nfce/sp-pilot-profile-input.json`, and `tests/fixtures/nfce/non-pilot-uf-input.json`.
- [x] T003 [P] Confirm the task-facing Jest surfaces in `tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`, `tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts`, `tests/integration/nfce/authorize-nfce-unsupported-state.test.ts`, and `tests/unit/nfce/authorize-nfce-boundaries.test.ts`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared cohort and boundary metadata that all stories depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Update the shared NFC-e cohort and deferred-capability metadata in `src/canonical/nfce/contracts.ts` so the promoted slice remains explicitly limited to `SP + PR`.
- [x] T005 [P] Tighten the handwritten boundary helpers in `src/canonical/nfce/coverage-boundary.ts` so excluded `UF` handling stays on `unsupported-state` and deferred capabilities stay on `unsupported-scope`.
- [x] T006 [P] Align package-facing cohort and deferred-scope notes in `src/public-contract.ts` and `README.md` before story-specific implementation lands.

**Checkpoint**: Shared cohort metadata and package boundary wording are ready for story implementation.

---

## Phase 3: User Story 1 - Autorizar NFC-e homologada do PR no root atual (Priority: P1) 🎯 MVP

**Goal**: Expand the existing `authorizeNFCe` runtime so `PR` behaves as a supported homologation cohort member alongside the existing `SP` baseline.

**Independent Test**: Run the focused `SP` and `PR` integration suites and confirm that `PR` authorizes through the existing facade while `SP` remains unchanged.

### Tests for User Story 1 ⚠️

- [x] T007 [P] [US1] Write or update a failing PR promotion regression in `tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`.
- [x] T008 [P] [US1] Write or update a failing SP baseline regression in `tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts`.

### Implementation for User Story 1

- [x] T009 [P] [US1] Refresh the promoted-cohort fixtures and shared assertions in `tests/fixtures/nfce/pr-homologation-input.json`, `tests/fixtures/nfce/pr-homologation-response-authorized.xml`, and `tests/config/nfce-assertions.ts`.
- [x] T010 [P] [US1] Update UF inference and promoted-profile selection in `src/canonical/nfce/resolve-nfce-uf.ts` and `src/canonical/nfce/select-nfce-profile.ts` for the finalized `SP + PR` slice.
- [x] T011 [US1] Implement the PR authorization flow through the existing root runtime in `src/canonical/nfce/authorize-nfce.ts`.
- [x] T012 [US1] Update user-facing PR runtime notes in `specs/023-nfce-pr-promotion/contracts/public-nfce-pr-promotion-facade.md` and `specs/023-nfce-pr-promotion/quickstart.md` after the behavior stabilizes.

**Checkpoint**: User Story 1 should now be independently functional and testable as the MVP.

---

## Phase 4: User Story 2 - Preservar boundaries explicitas para UFs e capacidades ainda deferidas (Priority: P2)

**Goal**: Keep excluded `UFs` and deferred NFC-e capabilities explicitly outside the promoted runtime slice without blurring cohort selection and capability deferral.

**Independent Test**: Run the unsupported-state integration test and the focused unit boundary suite to confirm non-promoted `UFs` stay blocked before transport and deferred capabilities still return `unsupported-scope`.

### Tests for User Story 2 ⚠️

- [x] T013 [P] [US2] Write or update a failing excluded-UF regression in `tests/integration/nfce/authorize-nfce-unsupported-state.test.ts`.
- [x] T014 [P] [US2] Write or update a failing boundary-classification regression in `tests/unit/nfce/authorize-nfce-boundaries.test.ts`.

### Implementation for User Story 2

- [x] T015 [P] [US2] Add or refresh out-of-cohort and deferred-capability fixture coverage in `tests/fixtures/nfce/non-pilot-uf-input.json` and `tests/fixtures/nfce/build-nfce-fixtures.ts`.
- [x] T016 [US2] Implement the final excluded-UF and deferred-capability handling in `src/canonical/nfce/authorize-nfce.ts` and `src/canonical/nfce/coverage-boundary.ts`.
- [x] T017 [US2] Update public boundary wording for excluded `UFs`, `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency in `src/public-contract.ts` and `README.md`.

**Checkpoint**: User Stories 1 and 2 should now both work independently, with `PR` promoted and all deferred boundaries still explicit.

---

## Phase 5: User Story 3 - Tornar publico o cohort promovido e sua proveniencia (Priority: P3)

**Goal**: Publish the `SP + PR` cohort and its exclusion rationale clearly enough that reviewers can verify why this slice is additive and why nearby `UFs` remain out of scope.

**Independent Test**: Run the root contract and package documentation suites and confirm they describe the `SP + PR` cohort, the preserved root facade, and the main excluded-`UF` rationale consistently.

### Tests for User Story 3 ⚠️

- [x] T018 [P] [US3] Add contract assertions for the promoted cohort wording in `tests/contract/root-contract-boundary.test.ts` and `tests/contract/package-contract-docs.test.ts`.
- [x] T019 [P] [US3] Add root-surface regression coverage in `tests/contract/root-entrypoint.test.ts` and `tests/contract/public-nfce-operational-facade.test.ts`.

### Implementation for User Story 3

- [x] T020 [P] [US3] Reconcile cohort and exclusion rationale across `specs/023-nfce-pr-promotion/spec.md`, `specs/023-nfce-pr-promotion/plan.md`, and `specs/023-nfce-pr-promotion/research.md`, explicitly preserving traceability to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`.
- [x] T021 [US3] Publish the final promoted-cohort contract and the named exclusion rationale for `PB`, `GO`, `SC`, `CE`, and `MS` in `specs/023-nfce-pr-promotion/contracts/public-nfce-pr-promotion-facade.md` and `docs/roadmap/ufs-ambientes.md`.
- [x] T022 [US3] Align package-facing provenance and cohort notes in `src/public-contract.ts`, `README.md`, and `docs/roadmap/specs-implementacao.md`, including the official-source traceability that supports `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`.

**Checkpoint**: All user stories should now be independently functional, validated, and publicly documented.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, provenance cleanup, and package hardening across the completed stories.

- [x] T023 [P] Reconcile any open-spec and provenance notes affected by the implementation in `docs/roadmap/specs-pendencias-abertas.md` and `specs/023-nfce-pr-promotion/research.md`, preserving the final named-UF boundary rationale.
- [x] T024 [P] Run the focused NFC-e validation flow from `specs/023-nfce-pr-promotion/quickstart.md` and record any resulting adjustments in `specs/023-nfce-pr-promotion/quickstart.md`.
- [x] T025 Run `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, and `npm run validate:tarball` for the final package verification of this slice.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on Foundational completion and can proceed after the shared cohort metadata is stable.
- **User Story 3 (Phase 5)**: Depends on the public contract shape and runtime boundaries delivered by User Stories 1 and 2.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1**: No dependency on other user stories after Foundational; this is the MVP.
- **US2**: Reuses the shared cohort and boundary surfaces from Phase 2, but remains independently testable through its own boundary suites.
- **US3**: Depends on the final runtime and boundary contract delivered by US1 and US2 so it can publish the cohort rationale without reopening runtime scope.

### Within Each User Story

- Write the focused tests first and verify they fail before implementation.
- Refresh fixtures before runtime changes that depend on them.
- Stabilize runtime behavior before updating package-facing docs and provenance notes.
- Re-run the same focused validation before moving to the next story.

### Parallel Opportunities

- `T002` and `T003` can run in parallel in Setup.
- `T005` and `T006` can run in parallel in Foundational.
- In US1, `T007` and `T008` can run in parallel, and `T009` and `T010` can run in parallel after the tests exist.
- In US2, `T013` and `T014` can run in parallel, and `T015` can run in parallel with either test task.
- In US3, `T018` and `T019` can run in parallel, and `T020` can run in parallel with either test task.
- In Polish, `T023` and `T024` can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Write the two runtime regressions first:
Task: "Write or update a failing PR promotion regression in tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts"
Task: "Write or update a failing SP baseline regression in tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts"

# Then refresh fixtures and selection helpers in parallel:
Task: "Refresh the promoted-cohort fixtures and shared assertions in tests/fixtures/nfce/ and tests/config/nfce-assertions.ts"
Task: "Update UF inference and promoted-profile selection in src/canonical/nfce/resolve-nfce-uf.ts and src/canonical/nfce/select-nfce-profile.ts"
```

## Parallel Example: User Story 2

```bash
# Boundary coverage first:
Task: "Write or update a failing excluded-UF regression in tests/integration/nfce/authorize-nfce-unsupported-state.test.ts"
Task: "Write or update a failing boundary-classification regression in tests/unit/nfce/authorize-nfce-boundaries.test.ts"

# Fixture refresh can proceed independently:
Task: "Add or refresh out-of-cohort and deferred-capability fixture coverage in tests/fixtures/nfce/non-pilot-uf-input.json and tests/fixtures/nfce/build-nfce-fixtures.ts"
```

## Parallel Example: User Story 3

```bash
# Publish the cohort contract from both package and feature-doc angles:
Task: "Add contract assertions for the promoted cohort wording in tests/contract/root-contract-boundary.test.ts and tests/contract/package-contract-docs.test.ts"
Task: "Add root-surface regression coverage in tests/contract/root-entrypoint.test.ts and tests/contract/public-nfce-operational-facade.test.ts"

# In parallel, reconcile the explanatory docs:
Task: "Reconcile cohort and exclusion rationale across specs/023-nfce-pr-promotion/spec.md, plan.md, and research.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Run the focused `SP` and `PR` integration suites and confirm the additive PR promotion is stable.

### Incremental Delivery

1. Finish Setup + Foundational.
2. Deliver US1 and validate `PR` promotion through the existing root facade.
3. Deliver US2 and validate excluded-UF and deferred-capability boundaries.
4. Deliver US3 and validate the public `SP + PR` cohort rationale.
5. Run Polish tasks and final package gates.

### Suggested MVP Scope

The recommended MVP is **User Story 1 only**. It delivers the immediate runtime value of promoting `PR` alongside `SP` while keeping the public surface unchanged and deferring broader NFC-e scope expansion.

---

## Notes

- All tasks use exact file paths and follow the required checklist format.
- `[P]` marks tasks that can run in parallel without file conflicts.
- User stories remain independently testable and traceable to the specification.
- The task plan intentionally preserves `unsupported-state` for excluded `UFs` and keeps `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency outside this slice.

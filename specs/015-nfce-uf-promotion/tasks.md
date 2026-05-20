---
description: "Task list for NFC-e UF promotion"
---

# Tasks: NFC-e UF Promotion

**Input**: Design documents from `/specs/015-nfce-uf-promotion/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-nfce-uf-promotion-facade.md, quickstart.md

**Tests**: This feature changes the published `NFC-e` runtime cohort, root contract expectations, transport/profile selection behavior, and roadmap-visible boundaries. Contract, integration, unit, fixture-backed regression, and package validation tasks are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the PR-specific fixture and regression scaffolding for the cohort expansion.

- [X] T001 Create the PR homologation fixture scaffold in `tests/fixtures/nfce/pr-homologation-input.json` and `tests/fixtures/nfce/pr-homologation-response-authorized.xml`
- [X] T002 [P] Create the PR pilot-profile integration scaffold in `tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`
- [X] T003 [P] Create the cohort-selection unit scaffold in `tests/unit/nfce/select-nfce-profile.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Lock the shared cohort and routing decisions before any user story work begins.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T004 Confirm the PR transport-routing decision and record the provenance outcome in `specs/015-nfce-uf-promotion/research.md` and `specs/015-nfce-uf-promotion/plan.md`
- [X] T005 [P] Establish a single source of truth for the promoted `SP` + `PR` cohort in `src/canonical/nfce/contracts.ts` and `src/canonical/nfce/select-nfce-profile.ts`
- [X] T006 [P] Add reusable PR fixture builders and assertions in `tests/fixtures/nfce/build-nfce-fixtures.ts` and `tests/config/nfce-assertions.ts`
- [X] T007 [P] Prepare transport and provenance placeholders for PR routing in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Autorizar NFC-e homologada no cohort SP + PR (Priority: P1) 🎯 MVP

**Goal**: Let integrators authorize supported `NFC-e` documents for `PR` through the existing root facade while preserving the current `SP` behavior.

**Independent Test**: Run the root NFC-e contract regression, the `SP` non-regression flow, the new `PR` homologation integration flow, and the cohort-selection unit test to verify that `PR` joins the promoted cohort while `SP` remains unchanged.

### Tests for User Story 1 ⚠️

- [X] T008 [P] [US1] Make the promoted-cohort root contract regression fail in `tests/contract/public-nfce-operational-facade.test.ts`
- [X] T009 [P] [US1] Make the PR homologation authorization regression fail in `tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`
- [X] T010 [P] [US1] Make the SP pilot non-regression integration fail in `tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts`
- [X] T011 [P] [US1] Make the SP/PR cohort-selection regression fail in `tests/unit/nfce/select-nfce-profile.test.ts`

### Implementation for User Story 1

- [X] T012 [P] [US1] Add owned PR homologation fixtures in `tests/fixtures/nfce/pr-homologation-input.json` and `tests/fixtures/nfce/pr-homologation-response-authorized.xml`
- [X] T013 [P] [US1] Implement the promoted SP+PR profile selection in `src/canonical/nfce/sp-pilot-profile.ts`, `src/canonical/nfce/select-nfce-profile.ts`, and `src/canonical/nfce/contracts.ts`
- [X] T014 [P] [US1] Extend `authorizeNFCe` orchestration and transport routing for PR only after the routing decision from `T004` in `src/canonical/nfce/authorize-nfce.ts`, `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [X] T015 [US1] Update the published root contract and compatibility notes for the SP+PR cohort in `src/public-contract.ts`, `README.md`, `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`, and `specs/015-nfce-uf-promotion/contracts/public-nfce-uf-promotion-facade.md`

**Checkpoint**: User Story 1 should allow `PR` homologation through the existing root facade without regressing `SP`.

---

## Phase 4: User Story 2 - Explicitar o que continua fora da promocao imediata (Priority: P2)

**Goal**: Make the promoted runtime cohort explicit while keeping `CSC`, `QR Code`, `DANFE NFC-e`, consumer query, and `offline` contingency clearly outside the immediate runtime promise.

**Independent Test**: Run the unsupported-capability and unsupported-UF regressions plus the package-contract documentation checks to verify that the promoted cohort remains narrow and the deferred capabilities stay explicit.

### Tests for User Story 2 ⚠️

- [X] T016 [P] [US2] Make the unsupported-capability and unsupported-UF boundary regressions fail in `tests/unit/nfce/authorize-nfce-boundaries.test.ts` and `tests/integration/nfce/authorize-nfce-unsupported-state.test.ts`
- [X] T017 [P] [US2] Make the deferred-cohort documentation regression fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/public-nfce-operational-facade.test.ts`

### Implementation for User Story 2

- [X] T018 [P] [US2] Update promoted-cohort and deferred-capability boundary behavior in `src/canonical/nfce/coverage-boundary.ts` and `src/canonical/nfce/authorize-nfce.ts`
- [X] T019 [US2] Update the roadmap classification for promoted runtime versus deferred backlog in `docs/roadmap/coverage-matrix.md`, `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/ufs-ambientes.md`, and `docs/roadmap/specs-implementacao.md`
- [X] T020 [US2] Align public docs and quickstart boundary language in `README.md`, `specs/015-nfce-uf-promotion/quickstart.md`, and `specs/015-nfce-uf-promotion/contracts/public-nfce-uf-promotion-facade.md`

**Checkpoint**: User Stories 1 and 2 should now prove the promoted SP+PR cohort while keeping deferred `NFC-e` auxiliary surfaces explicit.

---

## Phase 5: User Story 3 - Tornar auditavel o criterio de promocao das UFs (Priority: P3)

**Goal**: Record why `PR` was promoted now and why nearby `UFs` remain outside the first cohort so the roadmap can expand without informal contract drift.

**Independent Test**: A reviewer can inspect the feature artifacts and identify the `PR` promotion rationale, the excluded-`UF` reasons, and the minimum future-promotion signals without relying on tribal knowledge.

### Implementation for User Story 3

- [X] T021 [P] [US3] Record the promoted-cohort rationale and excluded-`UF` reasons for `PB`, `MS`, `GO`, `SC`, and `CE` in `specs/015-nfce-uf-promotion/spec.md`, `specs/015-nfce-uf-promotion/research.md`, and `specs/015-nfce-uf-promotion/data-model.md`
- [X] T022 [US3] Update the planning and contract artifacts to preserve future-promotion discipline in `specs/015-nfce-uf-promotion/plan.md`, `specs/015-nfce-uf-promotion/quickstart.md`, and `specs/015-nfce-uf-promotion/contracts/public-nfce-uf-promotion-facade.md`
- [X] T023 [US3] Add explicit traceability for `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012` in `docs/roadmap/specs-implementacao.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, and `specs/015-nfce-uf-promotion/spec.md`

**Checkpoint**: All user stories should now be independently understandable and the `PR` promotion should be technically and editorially auditable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, provenance, and validation work affecting multiple stories.

- [X] T024 [P] Update provenance and source-registry notes for the PR promotion slice in `docs/_meta/source-registry.md` and `specs/015-nfce-uf-promotion/research.md`
- [X] T025 [P] Review tarball and root-entrypoint coherence for the promoted cohort in `src/index.ts`, `package.json`, `tests/integration/package-tarball-smoke.test.ts`, and `tests/contract/root-entrypoint.test.ts`
- [X] T026 [P] Add or update sibling module documentation for the promoted cohort modules in `src/canonical/nfce/contracts.doc.md`, `src/canonical/nfce/coverage-boundary.doc.md`, and `src/canonical/nfce/prepare-signing-prerequisites.doc.md`
- [ ] T027 Run the feature validation flow for `src/canonical/nfce/`, `src/canonical/transport/`, `src/canonical/facade/authorize-nfce.ts`, `src/public-contract.ts`, `README.md`, `tests/contract/public-nfce-operational-facade.test.ts`, `tests/contract/package-contract-docs.test.ts`, `tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts`, `tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts`, `tests/integration/nfce/authorize-nfce-unsupported-state.test.ts`, `tests/unit/nfce/`, and `specs/015-nfce-uf-promotion/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP runtime value of promoting `PR` without regressing `SP`.
- **User Story 2 (P2)**: Starts after Foundational and hardens the runtime/backlog boundary language around the promoted cohort while preserving User Story 1 behavior.
- **User Story 3 (P3)**: Starts after Foundational and can proceed after or alongside User Story 2 once the promoted cohort and its exclusions are stable enough to document.

### Within Each User Story

- Tests for public contract, integration behavior, and boundary handling MUST be written and fail before implementation.
- Cohort constants and routing decisions must land before promotion behavior is considered complete.
- Runtime behavior updates must land before public-contract and roadmap synchronization.
- Provenance and rationale notes must land before the final validation pass.

### Parallel Opportunities

- T002 and T003 can run in parallel.
- T005, T006, and T007 can run in parallel.
- T008, T009, T010, and T011 can run in parallel.
- T012, T013, and T014 can run in parallel.
- T016 and T017 can run in parallel.
- T024, T025, and T026 can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch the promoted-cohort regressions in parallel:
Task: "Make the promoted-cohort root contract regression fail in tests/contract/public-nfce-operational-facade.test.ts"
Task: "Make the PR homologation authorization regression fail in tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts"
Task: "Make the SP pilot non-regression integration fail in tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts"
Task: "Make the SP/PR cohort-selection regression fail in tests/unit/nfce/select-nfce-profile.test.ts"

# Launch supporting implementation on separate files:
Task: "Add owned PR homologation fixtures in tests/fixtures/nfce/"
Task: "Implement the promoted SP+PR profile selection in src/canonical/nfce/sp-pilot-profile.ts, src/canonical/nfce/select-nfce-profile.ts, and src/canonical/nfce/contracts.ts"
Task: "Extend authorizeNFCe orchestration and transport routing for PR after T004 in src/canonical/nfce/authorize-nfce.ts and src/canonical/transport/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that `PR` authorizes successfully through `authorizeNFCe` while `SP` remains stable.

### Incremental Delivery

1. Deliver the promoted runtime cohort for `PR` over the existing `SP` baseline.
2. Harden the explicit deferred boundaries for auxiliary `NFC-e` capabilities.
3. Record the promotion rationale and excluded-`UF` criteria for future slices.
4. Finish with cross-cutting validation, provenance, and tarball checks.

### Parallel Team Strategy

1. One contributor prepares fixtures and regression scaffolding under `tests/fixtures/nfce/`, `tests/integration/nfce/`, and `tests/unit/nfce/`.
2. One contributor updates the promoted cohort and routing logic under `src/canonical/nfce/` and `src/canonical/transport/`.
3. One contributor keeps the public contract, roadmap taxonomy, and feature artifacts aligned in `src/public-contract.ts`, `README.md`, `docs/roadmap/`, and `specs/015-nfce-uf-promotion/`.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes the published runtime cohort and observable boundary behavior, so tests are mandatory.
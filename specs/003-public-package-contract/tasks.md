---
description: "Task list for the public package contract foundation feature"
---

# Tasks: Fundacao do Contrato Publico do Pacote

**Input**: Design documents from `/specs/003-public-package-contract/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-package-contract.md, quickstart.md

**Tests**: This feature changes the published package contract, package exports, build output, and tarball validation flow. Contract, integration, and audit-focused tests are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the test and validation scaffolding needed for package-contract work.

- [x] T001 Create the tarball consumer fixture package in tests/fixtures/package-root-consumer/package.json
- [x] T002 [P] Add the root contract test scaffold in tests/contract/root-entrypoint.test.ts
- [x] T003 [P] Add the tarball smoke test scaffold in tests/integration/package-tarball-smoke.test.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared contract-validation infrastructure that all stories depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Define the minimum public-contract expectations and handwritten/generated boundary as contract probes in tests/contract/root-entrypoint.test.ts and tests/contract/package-contract-docs.test.ts
- [x] T005 [P] Create the tarball smoke validation helper in tools/validate-package-tarball.ts
- [x] T006 [P] Create the manifest audit helper for contract-gap classification in tools/audit-public-contract.ts
- [x] T007 Wire the validation baseline for contract, integration, and audit checks in jest.config.ts and package.json

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Entender o que o pacote publica oficialmente (Priority: P1) 🎯 MVP

**Goal**: Make the redesigned root import and its official public surface clear to integrators.

**Independent Test**: Run the root contract tests and verify that README.md and the published root entrypoint describe the same minimal public surface without exposing generated subpaths as stable API.

### Tests for User Story 1 ⚠️

- [x] T008 [P] [US1] Make the root entrypoint contract probes fail against the current published surface in tests/contract/root-entrypoint.test.ts
- [x] T009 [P] [US1] Make the README-to-package contract probes fail against the current documented surface in tests/contract/package-contract-docs.test.ts

### Implementation for User Story 1

- [x] T010 [P] [US1] Redesign the published root entrypoint around the minimal contract in src/index.ts
- [x] T011 [P] [US1] Align normative root export metadata with the redesigned contract in package.json
- [x] T012 [US1] Document the official root contract, exclusions, and consumer guidance in README.md
- [x] T013 [US1] Update the contract deliverable with the final root entrypoint definition in specs/003-public-package-contract/contracts/public-package-contract.md
- [x] T014 [US1] Record the repository evidence backing the minimum public contract in specs/003-public-package-contract/contracts/public-package-contract.md

**Checkpoint**: User Story 1 should provide a clear, independently understandable minimum public contract for integrators.

---

## Phase 4: User Story 2 - Reproduzir build e distribuicao sem ambiguidade (Priority: P2)

**Goal**: Make the package build, pack, and root-import consumption path reproducible from the generated tarball.

**Independent Test**: Run `npm run build`, `npm pack`, and the tarball smoke validation to confirm the published root import can be consumed without relying on the open workspace.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Add tarball smoke validation coverage in tests/integration/package-tarball-smoke.test.ts
- [x] T016 [P] [US2] Add package file inclusion and export regression coverage in tests/contract/package-files.test.ts

### Implementation for User Story 2

- [x] T017 [P] [US2] Implement tarball generation and consumption validation in tools/validate-package-tarball.ts
- [x] T018 [US2] Align build output and minimal distribution packaging in package.json and tsconfig.build.json
- [x] T019 [US2] Wire the tarball smoke workflow into the project validation commands in package.json and jest.config.ts
- [x] T020 [US2] Record the reproducible pack-and-smoke workflow in README.md and specs/003-public-package-contract/quickstart.md

**Checkpoint**: User Story 2 should prove that the package can be built, packed, and consumed through its root import independently of the workspace.

---

## Phase 5: User Story 3 - Avaliar impacto antes de ampliar a cobertura funcional (Priority: P3)

**Goal**: Record compatibility boundaries and manifest-backed gaps so later functional phases do not silently expand the public contract.

**Independent Test**: Run the manifest audit and compatibility-boundary tests and verify that internal generated coverage, excluded surfaces, and contract-impact notes are explicitly recorded.

### Tests for User Story 3 ⚠️

- [x] T021 [P] [US3] Add manifest contract-gap audit coverage in tests/unit/manifest-contract-audit.test.ts
- [x] T022 [P] [US3] Add compatibility-boundary regression coverage for the redesigned root contract in tests/contract/root-contract-boundary.test.ts

### Implementation for User Story 3

- [x] T023 [P] [US3] Implement manifest gap classification and reporting in tools/audit-public-contract.ts
- [x] T024 [US3] Record excluded generated families, manifest audit findings, and backlog boundaries in specs/003-public-package-contract/contracts/public-package-contract.md
- [x] T025 [US3] Document compatibility notes and future expansion boundaries for the redesigned root contract in README.md
- [x] T026 [US3] Record semver impact, migration expectations, and release-compatibility notes for the redesigned root contract in specs/003-public-package-contract/contracts/public-package-contract.md and README.md

**Checkpoint**: User Story 3 should leave a clear compatibility boundary between the stable root contract and the remaining generated/internal inventory.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [x] T027 [P] Review root-contract consistency across src/index.ts, package.json, and README.md
- [x] T028 [P] Review manifest-audit consistency across tools/audit-public-contract.ts, src/manifest.json, and specs/003-public-package-contract/contracts/public-package-contract.md
- [x] T029 [P] Review tarball validation consistency across tools/validate-package-tarball.ts, tests/integration/package-tarball-smoke.test.ts, and specs/003-public-package-contract/quickstart.md
- [x] T030 Run the full package-foundation validation flow with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, `npm pack`, and the tarball smoke validation flow

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP public package contract.
- **User Story 2 (P2)**: Starts after Foundational and can build on the redesigned root contract while remaining independently testable through tarball validation.
- **User Story 3 (P3)**: Starts after Foundational and can build on the redesigned root contract while remaining independently testable through manifest-audit and compatibility checks.

### Within Each User Story

- Tests for public contract or packaging behavior MUST be written and fail before implementation.
- Entry-point and package-metadata changes happen before README and contract-note alignment.
- Tarball validation wiring happens before the final pack workflow is documented.
- Manifest gap classification happens before compatibility and backlog notes are finalized.

### Parallel Opportunities

- T002 and T003 can run in parallel.
- T005 and T006 can run in parallel after T004 starts the contract boundary work.
- T008 and T009 can run in parallel.
- T010 and T011 can run in parallel.
- T015 and T016 can run in parallel.
- T021 and T022 can run in parallel.
- T027, T028, and T029 can run in parallel.

---

## Parallel Example: User Story 2

```bash
# Launch the user story 2 validations in parallel:
Task: "Add tarball smoke validation coverage in tests/integration/package-tarball-smoke.test.ts"
Task: "Add package file inclusion and export regression coverage in tests/contract/package-files.test.ts"

# Launch supporting implementation on separate files:
Task: "Implement tarball generation and consumption validation in tools/validate-package-tarball.ts"
Task: "Align build output and minimal distribution packaging in package.json and tsconfig.build.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify the redesigned root import and README describe the same minimum contract.

### Incremental Delivery

1. Deliver the minimum public contract through the redesigned root import.
2. Add reproducible build and tarball validation.
3. Add manifest-backed compatibility and backlog boundaries.
4. Finish with cross-cutting validation and package-foundation checks.

### Parallel Team Strategy

1. One contributor defines the root contract boundary in `src/index.ts` and `package.json`.
2. One contributor builds the tarball validation flow in `tools/validate-package-tarball.ts` and integration tests.
3. One contributor builds the manifest audit path in `tools/audit-public-contract.ts` and related contract notes.
4. Finish with a shared review of README, package metadata, and pack validation.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes package exports and contract behavior, so tests are mandatory.
- `package.json`/exports remains the normative contract source.
- `manifest.json` remains an internal audit artifact in this phase.
- The distribution set must stay minimal and root-import oriented until a later explicit contract-expansion feature.
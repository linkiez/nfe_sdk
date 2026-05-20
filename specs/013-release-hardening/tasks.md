# Tasks: Release Hardening

**Input**: Design documents from `/specs/013-release-hardening/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/api-contract.md

**Tests**: No new dedicated test files are required by this slice. Validation is performed through the existing repository command set, the new CI workflow, example smoke checks, and documentation verification.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare repository-wide validation wiring and concrete repository scaffolding for the release-hardening slice.

- [x] T001 Update docs validation and markdown coverage scripts in /home/linkiez/Projetos/nfe_sdk/package.json
- [x] T002 [P] Expand internal link coverage for release-hardening artifacts in /home/linkiez/Projetos/nfe_sdk/tools/validate-links-comprehensive.ts
- [x] T003 [P] Create the repository scaffolding for /home/linkiez/Projetos/nfe_sdk/.github/workflows/, /home/linkiez/Projetos/nfe_sdk/docs/runbooks/, and /home/linkiez/Projetos/nfe_sdk/examples/{nfe,recipient,validation}/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared inventory and classification rules that all stories depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Inventory the documented root surface and evidence sources from /home/linkiez/Projetos/nfe_sdk/src/public-contract.ts, /home/linkiez/Projetos/nfe_sdk/tests/contract/, /home/linkiez/Projetos/nfe_sdk/tests/integration/, and /home/linkiez/Projetos/nfe_sdk/tests/unit/
- [x] T005 [P] Define stable/beta/backlog/fora-do-escopo classification rules and roadmap-phase mapping for /home/linkiez/Projetos/nfe_sdk/docs/roadmap/coverage-matrix.md using /home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md and /home/linkiez/Projetos/nfe_sdk/docs/capacidades-sdk.md
- [x] T006 [P] Establish built-package onboarding conventions for /home/linkiez/Projetos/nfe_sdk/README.md and /home/linkiez/Projetos/nfe_sdk/docs/index.md so examples consume the compiled root import `nfe-sdk`

**Checkpoint**: Foundation ready. User stories can now proceed independently.

---

## Phase 3: User Story 1 - Integrador valida build automaticamente via CI (Priority: P1) 🎯 MVP

**Goal**: Add a GitHub Actions workflow that blocks regressions with the same command set contributors use locally.

**Independent Test**: Open a PR with an intentional typecheck failure and confirm the workflow fails before merge while a clean commit passes all gates.

- [x] T007 [P] [US1] Wire the canonical docs-check command in /home/linkiez/Projetos/nfe_sdk/package.json for CI consumption
- [x] T008 [P] [US1] Finalize documentation coverage for the docs gate in /home/linkiez/Projetos/nfe_sdk/tools/validate-links-comprehensive.ts
- [x] T009 [US1] Implement the ordered CI workflow gates in /home/linkiez/Projetos/nfe_sdk/.github/workflows/ci.yml
- [x] T010 [US1] Document CI and local validation entrypoints in /home/linkiez/Projetos/nfe_sdk/README.md
- [x] T011 [US1] Validate the release gate command set locally from /home/linkiez/Projetos/nfe_sdk/package.json and /home/linkiez/Projetos/nfe_sdk/tools/validate-links-comprehensive.ts
- [x] T012 [US1] Verify CI trigger behavior for pull requests and default-branch pushes with a deliberately failing typecheck scenario documented for /home/linkiez/Projetos/nfe_sdk/.github/workflows/ci.yml

**Checkpoint**: CI validation is functional and independently testable.

---

## Phase 4: User Story 2 - Integrador consulta o que o SDK suporta hoje (Priority: P2)

**Goal**: Publish a single coverage matrix that explains the current exported surface and visible roadmap lacunas.

**Independent Test**: Open one document and verify every export in `src/public-contract.ts` appears exactly once with status, roadmap phase, and documentary reference.

- [x] T013 [US2] Collect coverage evidence for exported root surface items from /home/linkiez/Projetos/nfe_sdk/src/public-contract.ts and the tests under /home/linkiez/Projetos/nfe_sdk/tests/
- [x] T014 [P] [US2] Create exported-surface rows with stable/beta classification in /home/linkiez/Projetos/nfe_sdk/docs/roadmap/coverage-matrix.md
- [x] T015 [P] [US2] Add documented-gap rows for DANFE, DANFE NFC-e, QR Code, consulta por chave, and recuperação pós-transmissão in /home/linkiez/Projetos/nfe_sdk/docs/roadmap/coverage-matrix.md
- [x] T016 [US2] Link the new matrix from /home/linkiez/Projetos/nfe_sdk/docs/index.md and align discovery text in /home/linkiez/Projetos/nfe_sdk/README.md
- [x] T017 [US2] Reconcile /home/linkiez/Projetos/nfe_sdk/docs/roadmap/coverage-matrix.md against /home/linkiez/Projetos/nfe_sdk/src/public-contract.ts and /home/linkiez/Projetos/nfe_sdk/docs/capacidades-sdk.md to enforce one entry per documented export and `beta` for unit-only coverage

**Checkpoint**: The matrix is independently usable as the current adoption view of the SDK.

---

## Phase 5: User Story 3 - Integrador executa exemplos em homologação sem modificar o SDK (Priority: P3)

**Goal**: Provide example scripts that demonstrate the built public contract instead of private source imports.

**Independent Test**: Run `npm run build` and confirm the validation example executes via `tsx` while the NF-e and manifestação examples resolve imports from the built root package.

- [x] T018 [P] [US3] Create the built-package NF-e authorization example in /home/linkiez/Projetos/nfe_sdk/examples/nfe/authorize.ts
- [x] T019 [P] [US3] Create the built-package manifestação example in /home/linkiez/Projetos/nfe_sdk/examples/recipient/manifest.ts
- [x] T020 [P] [US3] Create the built-package XSD validation example in /home/linkiez/Projetos/nfe_sdk/examples/validation/validate-xsd.ts
- [x] T021 [US3] Document build-before-run onboarding for the examples in /home/linkiez/Projetos/nfe_sdk/README.md
- [x] T022 [US3] Smoke-check the example entrypoints with the local build from /home/linkiez/Projetos/nfe_sdk/examples/validation/validate-xsd.ts and import resolution for the other example files

**Checkpoint**: Examples are independently discoverable and validate the root package contract.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Add continuity guidance, provenance, and final release-hardening validation.

- [x] T023 [P] Consolidate homologation continuity guidance in /home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md
- [x] T024 [P] Register official-source provenance and continuity guidance references for the new runbook in /home/linkiez/Projetos/nfe_sdk/docs/\_meta/source-registry.md
- [x] T025 [P] Update navigation for the new release-hardening artifacts in /home/linkiez/Projetos/nfe_sdk/docs/index.md and /home/linkiez/Projetos/nfe_sdk/README.md
- [x] T026 Run the full release-hardening validation set from /home/linkiez/Projetos/nfe_sdk using `npm run build`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run format:check`, and `npm run docs:links`
- [x] T027 [P] Run packaged-root smoke validation with `npm run validate:tarball` from /home/linkiez/Projetos/nfe_sdk and reconcile any root-import packaging mismatch in /home/linkiez/Projetos/nfe_sdk/package.json or /home/linkiez/Projetos/nfe_sdk/README.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies. Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion. Blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on the desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational. No dependency on other stories.
- **User Story 2 (P2)**: Starts after Foundational. Uses the shared export inventory but remains independently testable.
- **User Story 3 (P3)**: Starts after Foundational. Depends on the built-package convention, not on US1 or US2 completion.

### Within Each User Story

- Canonical command wiring before workflow or smoke validation.
- Inventory and evidence collection before matrix authoring.
- Example files before README onboarding updates.
- Story-level validation before moving to the next priority.

### Parallel Opportunities

- `T002` and `T003` can run in parallel after `T001`.
- `T005` and `T006` can run in parallel after `T004`.
- `T007` and `T008` can run in parallel before `T009`.
- `T014` and `T015` can run in parallel after `T013`.
- `T018`, `T019`, and `T020` can run in parallel.
- `T023` and `T024` can run in parallel after the main artifacts exist.

---

## Parallel Example: User Story 1

```bash
# Prepare the CI prerequisites in parallel:
Task: "Wire the canonical docs-check command in package.json"
Task: "Finalize documentation coverage in tools/validate-links-comprehensive.ts"
```

## Parallel Example: User Story 2

```bash
# Draft the matrix content in parallel once export evidence is collected:
Task: "Create exported-surface rows in docs/roadmap/coverage-matrix.md"
Task: "Add documented-gap rows in docs/roadmap/coverage-matrix.md"
```

## Parallel Example: User Story 3

```bash
# Create the example scripts in parallel:
Task: "Create examples/nfe/authorize.ts"
Task: "Create examples/recipient/manifest.ts"
Task: "Create examples/validation/validate-xsd.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Confirm CI workflow and local gate commands behave as expected.

### Incremental Delivery

1. Finish Setup + Foundational.
2. Deliver User Story 1 and validate the CI barrier.
3. Deliver User Story 2 and validate the coverage matrix independently.
4. Deliver User Story 3 and validate example onboarding independently.
5. Finish continuity/provenance polish and run full validation.

### Suggested MVP Scope

- User Story 1 only. It provides the smallest release-hardening increment with immediate regression protection.

---

## Notes

- `[P]` tasks operate on separate files or non-overlapping concerns.
- `[US1]`, `[US2]`, and `[US3]` map every implementation task to a single user story.
- The coverage matrix is manual in this phase; no generator work is planned.
- The continuity artifact is documentation-only in this phase.

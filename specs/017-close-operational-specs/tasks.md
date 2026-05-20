# Tasks: Close Operational Specs

**Input**: Design documents from `/specs/017-close-operational-specs/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/closure-status-transition.md

**Tests**: This slice does not add new runtime behavior. It must audit existing closure evidence, preserve or rerun the final package gate for spec `007` when needed, and validate formatting for the documentation and roadmap files touched during status reconciliation.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Closure Audit)

**Purpose**: Confirm the actual delta between source artifacts and stale roadmap status before changing any record.

- [x] T001 Audit the current source-versus-roadmap delta for specs `007` and `010` in `specs/007-nfe-operational-mvp/tasks.md`, `specs/010-nfce-national-core/tasks.md`, `docs/roadmap/specs-implementacao.md`, `docs/roadmap/specs-pendencias-abertas.md`, and `docs/roadmap/checklist-fechamento-007-010.md`
- [x] T002 [P] Record the audited editorial delta and the authoritative evidence sources in `specs/017-close-operational-specs/research.md` and `specs/017-close-operational-specs/contracts/closure-status-transition.md`

---

## Phase 2: Foundational (Blocking Closure Rules)

**Purpose**: Lock the independent reconciliation policy and the single evidence sink before updating any spec or roadmap status.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Establish the canonical closure-evidence model and independent status-transition rules in `specs/017-close-operational-specs/data-model.md` and `specs/017-close-operational-specs/spec.md`
- [x] T004 [P] Align the audit-first and evidence-reuse instructions in `specs/017-close-operational-specs/plan.md` and `specs/017-close-operational-specs/quickstart.md`

**Checkpoint**: Closure policy and evidence targets are fixed; spec `007` and `010` can now be reconciled independently.

---

## Phase 3: User Story 1 - Encerrar o residuo mecanico da spec 010 (Priority: P1) 🎯 MVP

**Goal**: Remove any remaining ambiguity around the stale roadmap status for spec `010` without adding new NFC-e functionality.

**Independent Test**: A reviewer can inspect the NFC-e scaffold paths plus spec `010` artifacts and confirm whether the roadmap was stale or whether any scaffold confirmation work was actually still needed.

### Implementation for User Story 1

- [x] T005 [P] [US1] Verify whether the residual NFC-e scaffold placeholders in `tests/unit/nfce/.gitkeep`, `tests/integration/nfce/.gitkeep`, and `tests/fixtures/nfce/.gitkeep` were already satisfied before this slice, adding files only if the audit proves they are actually missing
- [x] T006 [US1] Record the authoritative closure evidence for spec `010` in `specs/017-close-operational-specs/research.md` and update `specs/010-nfce-national-core/tasks.md` only if the origin artifact truly needs correction

**Checkpoint**: Spec `010` should no longer depend on an ambiguous scaffolding residue.

---

## Phase 4: User Story 2 - Encerrar ou bloquear localmente o gate final da spec 007 (Priority: P2)

**Goal**: Make the final validation evidence for spec `007` explicit and auditable, either by reusing canonical proof already present or by documenting a localized blocker when a rerun is truly needed.

**Independent Test**: A reviewer can inspect the recorded gate result and determine whether spec `007` is fully closed or exactly what local defect still blocks it.

### Validation for User Story 2 ⚠️

- [x] T007 [P] [US2] Audit the currently recorded final-gate evidence for spec `007` in `specs/007-nfe-operational-mvp/tasks.md`, `specs/007-nfe-operational-mvp/quickstart.md`, and `specs/017-close-operational-specs/research.md`, choosing one canonical evidence sink for this slice
- [x] T008 [P] [US2] Rerun and capture the spec `007` closure gate only if the existing evidence is missing, stale, or not reproducible, then register the result in the chosen canonical evidence artifact and add secondary references only where needed

### Implementation for User Story 2

- [x] T009 [US2] Confirm the authoritative closure or blocker state for `T037` in the chosen canonical evidence artifact and update `specs/007-nfe-operational-mvp/tasks.md` only if the origin artifact truly needs correction

**Checkpoint**: Spec `007` should be either formally closed or explicitly blocked by a localized, evidenced defect.

---

## Phase 5: User Story 3 - Tornar o roadmap coerente com o fechamento residual (Priority: P3)

**Goal**: Reconcile the roadmap so it reflects only real open work after the stale-status audit.

**Independent Test**: A reviewer can read the roadmap status documents and verify why `007` and `010` are implemented or blocked without inspecting the whole repository history.

### Implementation for User Story 3

- [x] T010 [P] [US3] Update the per-spec status registry in `docs/roadmap/specs-implementacao.md` and `docs/roadmap/specs-pendencias-abertas.md`
- [x] T011 [US3] Align the next-iteration narrative with the resolved editorial delta in `docs/roadmap/proximas-iteracoes-recomendadas.md`, `specs/017-close-operational-specs/spec.md`, and `specs/017-close-operational-specs/contracts/closure-status-transition.md`

**Checkpoint**: The roadmap should no longer keep `007` or `010` open by administrative residue alone.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation for all closure artifacts.

- [x] T012 [P] Reconcile feature-closure documentation across `specs/017-close-operational-specs/plan.md`, `specs/017-close-operational-specs/quickstart.md`, and `specs/017-close-operational-specs/tasks.md`
- [x] T013 Run closure validation for `specs/017-close-operational-specs/`, `specs/007-nfe-operational-mvp/tasks.md`, `specs/010-nfce-national-core/tasks.md`, `docs/roadmap/specs-implementacao.md`, `docs/roadmap/specs-pendencias-abertas.md`, and `docs/roadmap/proximas-iteracoes-recomendadas.md` with `npm run format:check`, plus `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball` only if User Story 2 had to rerun the spec `007` gate

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and resolves the mechanical closure ambiguity for spec `010`.
- **User Story 2 (P2)**: Starts after Foundational and depends on the closure evidence rules from Phase 2; it can proceed independently of User Story 1 once the audit baseline exists.
- **User Story 3 (P3)**: Starts after Foundational and should update the roadmap only after the closure outcome of `007` and `010` is known.

### Within Each User Story

- Audit existing evidence before creating or changing any status record.
- Prefer reconciling roadmap/editorial artifacts first when the origin task files are already correct.
- Treat a failed `007` gate as a local blocker, not as permission to open new feature scope.
- Final formatting and validation run after all closure outcomes are documented.

### Parallel Opportunities

- T002 can run in parallel with T001 after the initial file audit begins.
- T003 and T004 can run in parallel once the residual audit is understood.
- T005 and T007 can run in parallel because they touch different spec families.
- T010 and T011 should not begin until the closure outcome of `007` and `010` is known.
- T012 can run in parallel with the preparation for T013.

---

## Parallel Example: User Story 1 + User Story 2

```bash
# Audit the two residual specs on separate tracks:
Task: "Verify or add the residual NFC-e scaffold placeholders in tests/unit/nfce/.gitkeep, tests/integration/nfce/.gitkeep, and tests/fixtures/nfce/.gitkeep"
Task: "Audit the currently recorded final-gate evidence for spec 007 in specs/007-nfe-operational-mvp/tasks.md, specs/007-nfe-operational-mvp/quickstart.md, and specs/017-close-operational-specs/research.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify whether spec `010` is closed by scaffold existence or documented redundancy.

### Incremental Delivery

1. Audit current closure evidence and fix the policy baseline.
2. Resolve the stale-status interpretation of spec `010`, creating scaffold artifacts only if the audit proves they are really absent.
3. Resolve or localize the final evidence state of spec `007`, rerunning the gate only if proof reuse is impossible.
4. Update roadmap status only after the actual closure outcomes are known.
5. Finish with formatting and conditional package validation.

### Parallel Team Strategy

1. One contributor audits and resolves spec `010` scaffolding evidence.
2. One contributor audits the spec `007` gate evidence and reruns it only if required.
3. One contributor updates the feature-local closure artifacts and roadmap status after the first two tracks converge.

---

## Notes

- `[P]` tasks touch different files and can run in parallel.
- `[US1]`, `[US2]`, and `[US3]` map each task back to its user story for traceability.
- This slice is allowed to close `007` and `010` independently.
- If spec `007` is already materially validated, T008 becomes a no-op evidence confirmation instead of a rerun.
- If spec `010` is already materially scaffolded and its origin task is already closed, T005 becomes a no-op verification and T006 records the editorial redundancy explicitly.

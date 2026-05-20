# Tasks: External Table Policy

**Input**: Design documents from `/specs/018-external-table-policy/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: This slice does not add runtime behavior, package exports, generated artifacts, or public contract changes. Behavioral test tasks are omitted by design. Validation stays focused on provenance-aware document updates and on executable checks for formatting, links, and Spec Kit bootstrap readiness.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Roadmap Audit)

**Purpose**: Confirm the current `RTM-010` baseline before changing the canonical policy.

- [x] T001 Confirm `.specify/feature.json` points to `specs/018-external-table-policy` and `.github/copilot-instructions.md` references `specs/018-external-table-policy/plan.md`
- [x] T002 [P] Audit the current `RTM-010` state in `docs/roadmap/politica-tabelas-externas.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/criterios-promocao.md`, and `docs/roadmap/portal-documentos-vigentes.md`

---

## Phase 2: Foundational (Blocking Governance Rules)

**Purpose**: Lock the canonical artifact, baseline fields, and support-document boundaries before editing roadmap content.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Establish the canonical policy ownership, per-group baseline fields, and promotion-decision model in `specs/018-external-table-policy/spec.md` and `specs/018-external-table-policy/data-model.md`
- [x] T004 [P] Align the canonical-policy-first execution order, supporting-reference boundaries, and focused validation scope in `specs/018-external-table-policy/plan.md`, `specs/018-external-table-policy/research.md`, and `specs/018-external-table-policy/quickstart.md`

**Checkpoint**: Canonical artifact ownership and validation scope are fixed; roadmap implementation can proceed without creating a parallel policy record.

---

## Phase 3: User Story 1 - Consolidar baseline e cadence das tabelas externas (Priority: P1) 🎯 MVP

**Goal**: Make the canonical policy document auditable per prioritized external-table group.

**Independent Test**: A reviewer can open `docs/roadmap/politica-tabelas-externas.md` and verify, for every prioritized `RTM-010` group, the primary source, observed baseline, observed publication date, effective date when applicable, and minimum review cadence.

### Implementation for User Story 1

- [x] T005 [P] [US1] Audit the scoped `RTM-010` group inventory (`cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp`, `cfop`) and baseline evidence in `docs/roadmap/portal-documentos-vigentes.md`, then record the supporting source mapping in `specs/018-external-table-policy/research.md`
- [x] T006 [US1] Update `docs/roadmap/politica-tabelas-externas.md` so each scoped group (`cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp`, `cfop`) exposes baseline, publication versus effective date handling, historical/coexisting-version rules, and minimum cadence
- [x] T007 [US1] Reconcile the supporting evidence references for the audited groups in `specs/018-external-table-policy/research.md` and `specs/018-external-table-policy/data-model.md` without duplicating the canonical policy content

**Checkpoint**: `RTM-010` groups have an auditable baseline and cadence in the canonical roadmap artifact.

---

## Phase 4: User Story 2 - Classificar atualizacoes externas sem inflar o runtime (Priority: P2)

**Goal**: Make the classification and promotion rules for external-table updates explicit and conservative.

**Independent Test**: A reviewer can follow the policy for a recently published external table and reach a clear outcome between `tooling`, `documentacao`, watchlist, or future runtime slice without reinterpreting the whole roadmap.

### Implementation for User Story 2

- [x] T008 [P] [US2] Update the classification and conservative promotion flow in `docs/roadmap/politica-tabelas-externas.md` for schema impact, validation impact, helper data, watchlist items, and exceptional future runtime promotion
- [x] T009 [P] [US2] Align the cross-roadmap promotion language for `RTM-010` in `docs/roadmap/criterios-promocao.md` and `docs/roadmap/rtm-cobertura-oficial.md`
- [x] T010 [US2] Align the sequencing narrative for the now-governed `RTM-010` slice in `docs/roadmap/proximas-iteracoes-recomendadas.md` and `specs/018-external-table-policy/spec.md`

**Checkpoint**: External-table updates can be classified consistently without implying new runtime scope.

---

## Phase 5: User Story 3 - Tornar o suporte ao integrador repetivel e auditavel (Priority: P3)

**Goal**: Make the operational support path for external tables explicit, especially for delta-by-UF groups and support-only data.

**Independent Test**: A reviewer can identify which groups already have governed baselines, which remain blocked by `UF`-specific deltas, and which remain support-only without inspecting prior session history.

### Implementation for User Story 3

- [x] T011 [P] [US3] Update the `RTM-010` support evidence in `docs/roadmap/portal-documentos-vigentes.md` so baseline-sensitive groups remain traceable from the canonical policy without turning this file into a second policy record
- [x] T012 [US3] Publish operator-facing guidance for republication, `UF` delta handling, and support-only groups in `specs/018-external-table-policy/quickstart.md` and `specs/018-external-table-policy/research.md`
- [x] T013 [US3] Reconcile the supporting-roadmap-reference model for support and provenance alignment in `specs/018-external-table-policy/data-model.md` and `specs/018-external-table-policy/spec.md`

**Checkpoint**: The support path for governed, delta-by-UF, and support-only groups is explicit and auditable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and focused validation for the external-table policy slice.

- [x] T014 [P] Reconcile feature-local documentation across `specs/018-external-table-policy/spec.md`, `specs/018-external-table-policy/plan.md`, `specs/018-external-table-policy/research.md`, `specs/018-external-table-policy/quickstart.md`, and `specs/018-external-table-policy/tasks.md`
- [x] T015 Run focused validation for `specs/018-external-table-policy/*.md`, `docs/roadmap/politica-tabelas-externas.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/criterios-promocao.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/portal-documentos-vigentes.md`, and `.github/copilot-instructions.md` with `npx prettier --check`, `npm run docs:links`, and `SPECIFY_FEATURE=018-external-table-policy .specify/scripts/bash/setup-tasks.sh --json`; keep `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, and `npm run build` named as escalation checks if document edits expose broader repository drift

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and establishes the canonical baseline and cadence model.
- **User Story 2 (P2)**: Starts after Foundational and depends on the canonical-policy ownership defined in Phase 2; it can proceed independently of User Story 1 once the audited groups are understood.
- **User Story 3 (P3)**: Starts after Foundational and should align support/provenance references only after the canonical policy and classification language are stable enough to reference.

### Within Each User Story

- Update the canonical policy artifact before broadening supporting-roadmap references.
- Preserve source and provenance ambiguity when official revocation or effective dates are unclear.
- Keep spec-local artifacts as evidence and execution guidance only.
- Finish with focused document validation rather than broad runtime gates.

### Parallel Opportunities

- T002 can run in parallel with T001 after the feature anchor is confirmed.
- T003 and T004 can run in parallel once the initial roadmap audit is understood.
- T005 and T008 can run in parallel because they prepare different aspects of the `RTM-010` policy update.
- T009 and T011 can run in parallel once the canonical policy edits are stable.
- T014 can run in parallel with the preparation for T015.

---

## Parallel Example: User Story 1 + User Story 2

```bash
# Audit baseline evidence and classification rules on separate tracks:
Task: "Audit the prioritized external-table groups and baseline evidence in docs/roadmap/portal-documentos-vigentes.md and record the supporting source mapping in specs/018-external-table-policy/research.md"
Task: "Update the classification and conservative promotion flow in docs/roadmap/politica-tabelas-externas.md for schema impact, validation impact, helper data, watchlist items, and exceptional future runtime promotion"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that `docs/roadmap/politica-tabelas-externas.md` alone is sufficient to audit baseline and cadence per prioritized group.

### Incremental Delivery

1. Audit the current `RTM-010` roadmap state and lock canonical ownership.
2. Establish auditable baseline and cadence in the canonical policy.
3. Align the classification and promotion language across supporting roadmap references.
4. Publish repeatable support guidance for `UF` deltas and support-only groups.
5. Finish with focused formatting, links, and Spec Kit bootstrap validation.

### Parallel Team Strategy

1. One contributor audits baseline evidence and updates the canonical policy.
2. One contributor aligns promotion language across supporting roadmap references.
3. One contributor reconciles spec-local evidence, quickstart guidance, and final validation once the first two tracks converge.

---

## Notes

- `[P]` tasks touch different files and can run in parallel.
- `[US1]`, `[US2]`, and `[US3]` map each task back to its user story for traceability.
- This slice is intentionally tooling-first and does not introduce new runtime behavior.
- Provenance tasks are kept explicit because the feature depends on external domain sources already consolidated in the roadmap.
- The canonical policy artifact remains `docs/roadmap/politica-tabelas-externas.md`; all other artifacts only support, validate, or reference it.

# Tasks: Trust Chain Diagnostics

**Input**: Design documents from `/specs/019-trust-chain-diagnostics/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/

**Tests**: This slice does not add runtime behavior, package exports, generated artifacts, or public contract changes. Behavioral test tasks are omitted by design. Validation stays focused on provenance-aware document updates and on executable checks for formatting, links, and Spec Kit bootstrap readiness.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Roadmap Audit)

**Purpose**: Confirm the feature anchor, current roadmap state, and implementation targets before creating the canonical diagnostic artifacts.

- [x] T001 Confirm `.specify/feature.json` points to `specs/019-trust-chain-diagnostics` and `.github/copilot-instructions.md` references `specs/019-trust-chain-diagnostics/plan.md`
- [x] T002 [P] Audit the current `RTM-018` state in `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/criterios-promocao.md`, `docs/roadmap/portal-documentos-vigentes.md`, and `docs/roadmap/portal-nacional-inventario.md`

---

## Phase 2: Foundational (Blocking Governance Rules)

**Purpose**: Lock the canonical artifact, inventory boundaries, and support-document roles before editing roadmap content.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Establish the canonical diagnostic artifact ownership, minimal inventory model, runbook role, and external-dependency boundaries in `specs/019-trust-chain-diagnostics/spec.md` and `specs/019-trust-chain-diagnostics/data-model.md`
- [x] T004 [P] Align the canonical-artifact-first execution order, support-reference boundaries, and focused validation scope in `specs/019-trust-chain-diagnostics/plan.md`, `specs/019-trust-chain-diagnostics/research.md`, `specs/019-trust-chain-diagnostics/quickstart.md`, and `specs/019-trust-chain-diagnostics/contracts/diagnostic-documentation-deliverables.md`

**Checkpoint**: Canonical artifact ownership, inventory scope, and runbook boundaries are fixed; roadmap implementation can proceed without creating a competing trust-chain record.

---

## Phase 3: User Story 1 - Diagnosticar interoperabilidade com uma trilha canonica (Priority: P1) 🎯 MVP

**Goal**: Create the canonical trust-chain diagnostic artifact with a minimal, auditable national-first inventory.

**Independent Test**: A reviewer can open `docs/roadmap/diagnostico-trust-chain.md` and identify the role, observed provenance, package boundary, and minimum interoperability support references for `www`, `www1`, download surface, signer, and `DF-e` viewer without consulting multiple competing artifacts.

### Implementation for User Story 1

- [x] T005 [P] [US1] Audit the prioritized `RTM-018` inventory (`www-chain`, `www1-chain`, `download-surface`, `assinador`, `visualizador-dfe`) in `docs/roadmap/portal-documentos-vigentes.md` and `docs/roadmap/portal-nacional-inventario.md`, then record the supporting source mapping in `specs/019-trust-chain-diagnostics/research.md`
- [x] T006 [US1] Create `docs/roadmap/diagnostico-trust-chain.md` as the canonical roadmap artifact for `RTM-018` and `RFL-007`, exposing the slice scope, minimal inventory, observed dates, operational roles, package boundaries, minimum `WSDL`/`SSL` support references, and explicit follow-ups
- [x] T007 [US1] Reconcile the canonical diagnostic inventory, minimum interoperability-boundary model, and artifact contract in `specs/019-trust-chain-diagnostics/data-model.md` and `specs/019-trust-chain-diagnostics/contracts/diagnostic-documentation-deliverables.md` without duplicating the full canonical roadmap content

**Checkpoint**: `RTM-018` has a single canonical diagnostic artifact with a bounded, auditable inventory.

---

## Phase 4: User Story 2 - Alinhar roadmap e promocao sem inflar o contrato publico (Priority: P2)

**Goal**: Make promotion, coverage, and sequencing language for trust chain and auxiliary downloads explicit and conservative across the roadmap.

**Independent Test**: A reviewer can compare the touched roadmap annexes and confirm they all treat trust chain and auxiliary downloads as `tooling` + `documentacao`, not as new runtime surface or required binary dependencies.

### Implementation for User Story 2

- [x] T008 [P] [US2] Update `docs/roadmap/criterios-promocao.md` and `docs/roadmap/rtm-cobertura-oficial.md` so `RTM-018` explicitly references the canonical diagnostic artifact, conservative promotion path, and remaining runtime follow-ups
- [x] T009 [P] [US2] Align the sequencing and closure language for the trust-chain slice in `docs/roadmap/proximas-iteracoes-recomendadas.md` and `specs/019-trust-chain-diagnostics/spec.md`, keeping explicit traceability to iteration `5` and `RFL-007`
- [x] T010 [US2] Update provenance and inventory support notes in `docs/roadmap/portal-documentos-vigentes.md` and `docs/roadmap/portal-nacional-inventario.md` so they reference the new canonical artifact without becoming a second canonical record

**Checkpoint**: `RTM-018` is sequenced, classified, and supported consistently across the roadmap without implying new runtime scope.

---

## Phase 5: User Story 3 - Explicitar os limites com assinatura, transporte e ambientes (Priority: P3)

**Goal**: Publish a reusable human diagnostic checklist and make all remaining boundaries explicit.

**Independent Test**: A reviewer can follow the trust-chain checklist and identify which steps belong to the roadmap slice, which depend on external infrastructure, and which remain delegated to signature, transport, or environment follow-ups.

### Implementation for User Story 3

- [x] T011 [P] [US3] Create `docs/roadmap/checklist-diagnostico-trust-chain.md` as the short human runbook for onboarding and troubleshooting against the canonical trust-chain artifact
- [x] T012 [US3] Publish boundary guidance for `SVAN`, `SVRS`, `WSDL`, `SSL`, mutual authentication, and credentialing in `specs/019-trust-chain-diagnostics/quickstart.md` and `specs/019-trust-chain-diagnostics/research.md`
- [x] T013 [US3] Reconcile the external-dependency boundary and runbook-step model in `specs/019-trust-chain-diagnostics/data-model.md` and `specs/019-trust-chain-diagnostics/spec.md`

**Checkpoint**: The operational support path is repeatable, and the slice boundaries with signature, transport, and environment concerns are explicit.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and focused validation for the trust-chain diagnostic slice.

- [x] T014 [P] Reconcile feature-local documentation across `specs/019-trust-chain-diagnostics/spec.md`, `specs/019-trust-chain-diagnostics/plan.md`, `specs/019-trust-chain-diagnostics/research.md`, `specs/019-trust-chain-diagnostics/data-model.md`, `specs/019-trust-chain-diagnostics/quickstart.md`, `specs/019-trust-chain-diagnostics/contracts/diagnostic-documentation-deliverables.md`, and `specs/019-trust-chain-diagnostics/tasks.md`
- [x] T015 Run focused validation for `specs/019-trust-chain-diagnostics/*.md`, `specs/019-trust-chain-diagnostics/contracts/*.md`, `docs/roadmap/diagnostico-trust-chain.md`, `docs/roadmap/checklist-diagnostico-trust-chain.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/criterios-promocao.md`, `docs/roadmap/portal-documentos-vigentes.md`, `docs/roadmap/portal-nacional-inventario.md`, and `.github/copilot-instructions.md` with `npx prettier --check`, `npm run docs:links`, and `SPECIFY_FEATURE=019-trust-chain-diagnostics .specify/scripts/bash/setup-tasks.sh --json`; keep `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, and `npm run build` named as escalation checks if document edits expose broader repository drift

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and creates the canonical trust-chain artifact plus the minimal inventory.
- **User Story 2 (P2)**: Starts after Foundational and should align roadmap references only after the canonical artifact and inventory scope are stable enough to reference.
- **User Story 3 (P3)**: Starts after Foundational and should publish the human runbook only after the canonical artifact and roadmap language are stable enough to support it.

### Within Each User Story

- Update the canonical roadmap artifact before broadening supporting-roadmap references.
- Preserve ambiguity when official downloads or chains do not expose a clear replacement or revocation path.
- Keep spec-local artifacts as evidence and execution guidance only.
- Finish with focused document validation rather than broad runtime gates.

### Parallel Opportunities

- T002 can run in parallel with T001 after the feature anchor is confirmed.
- T003 and T004 can run in parallel once the initial roadmap audit is understood.
- T005 and T008 can run in parallel because they prepare different aspects of the `RTM-018` update.
- T009 and T011 can run in parallel once the canonical diagnostic artifact is stable.
- T014 can run in parallel with preparation for T015.

---

## Parallel Example: User Story 1 + User Story 2

```bash
# Audit evidence and align roadmap promotion language on separate tracks:
Task: "Audit the prioritized RTM-018 inventory in docs/roadmap/portal-documentos-vigentes.md and docs/roadmap/portal-nacional-inventario.md, then record the supporting source mapping in specs/019-trust-chain-diagnostics/research.md"
Task: "Update docs/roadmap/criterios-promocao.md and docs/roadmap/rtm-cobertura-oficial.md so RTM-018 explicitly references the canonical diagnostic artifact, conservative promotion path, and remaining runtime follow-ups"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that `docs/roadmap/diagnostico-trust-chain.md` alone is sufficient to audit the minimal trust-chain inventory and its package boundaries.

### Incremental Delivery

1. Audit the current `RTM-018` roadmap state and lock canonical ownership.
2. Create the canonical diagnostic artifact and bounded inventory.
3. Align promotion, coverage, and provenance references across supporting roadmap annexes.
4. Publish the human checklist and explicit external-dependency boundaries.
5. Finish with focused formatting, links, and Spec Kit bootstrap validation.

### Parallel Team Strategy

1. One contributor audits inventory evidence and drafts the canonical roadmap artifact.
2. One contributor aligns promotion and coverage language across supporting roadmap references.
3. One contributor reconciles the spec-local evidence, quickstart guidance, and final validation once the first two tracks converge.

---

## Notes

- `[P]` tasks touch different files and can run in parallel.
- `[US1]`, `[US2]`, and `[US3]` map each task back to its user story for traceability.
- This slice is intentionally `tooling` + `documentacao` and does not introduce new runtime behavior.
- Provenance tasks stay explicit because the feature depends on external domain sources already consolidated in the roadmap.
- The canonical artifact of the slice will be `docs/roadmap/diagnostico-trust-chain.md`; all other artifacts only support, validate, or reference it.

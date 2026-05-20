---
description: "Task list for SEFAZ documentation research and Markdown deliverables"
---

# Tasks: Pesquisa e Consolidacao de Documentacao SEFAZ

**Input**: Design documents from `/specs/001-research-sefaz-docs/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/documentation-deliverables.md, quickstart.md

**Tests**: No dedicated automated test tasks are required by the specification. Validation is done through deliverable completeness, source traceability, and repository checks when helper automation is touched.

**Organization**: Tasks are grouped by user story to enable independent implementation and validation of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the documentation workspace and conversion guidance needed for the research flow.

- [X] T001 Create the documentation entrypoint scaffold in docs/index.md
- [X] T002 Create the source tracking workspace in docs/_meta/source-registry.md
- [X] T003 [P] Create the controlled MarkItDown workflow guide in docs/markitdown-workflow.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared dossier structure and artifacts that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T004 Create the NFe dossier scaffold, later converged into docs/roadmap/topicos-oficiais.md
- [X] T005 [P] Create the NFC-e national dossier scaffold, later converged into docs/roadmap/topicos-oficiais.md
- [X] T006 [P] Create the Manifestacao do Destinatario dossier scaffold, later converged into docs/roadmap/rtm-cobertura-oficial.md
- [X] T007 Create the NFC-e UF matrix scaffold covering all 27 UFs, later converged into docs/roadmap/ufs-ambientes.md
- [X] T008 Create the recent normative changes dossier, later converged into docs/ROADMAP.md
- [X] T009 Create the documentation navigation and coverage summary structure in docs/index.md

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Consolidar Documentacao Oficial Atual (Priority: P1) 🎯 MVP

**Goal**: Deliver current-state dossiers for NFe, NFC-e, and Manifestacao do Destinatario with traceable official sources.

**Independent Test**: Open docs/index.md, docs/roadmap/topicos-oficiais.md, docs/roadmap/portal-documentos-vigentes.md, and docs/roadmap/rtm-cobertura-oficial.md and verify the canonical annexes contain current effective-state content, primary sources, access dates, and documented gaps.

### Implementation for User Story 1

- [X] T010 [P] [US1] Populate the current effective NFe emission flow and primary sources, later converged into docs/roadmap/topicos-oficiais.md
- [X] T011 [P] [US1] Populate the current effective NFC-e national flow and primary sources, later converged into docs/roadmap/topicos-oficiais.md
- [X] T012 [P] [US1] Populate the current effective Manifestacao do Destinatario flow and primary sources, later converged into docs/roadmap/rtm-cobertura-oficial.md
- [X] T013 [US1] Register consulted primary sources, access dates, and access restrictions in docs/_meta/source-registry.md
- [X] T014 [US1] Update the central coverage summary and dossier links in docs/index.md

**Checkpoint**: User Story 1 should provide a navigable, source-traceable current-state documentation set.

---

## Phase 4: User Story 2 - Mapear Requisitos Funcionais Necessarios (Priority: P2)

**Goal**: Translate researched material into explicit SDK capability inventories and recent relevant change summaries.

**Independent Test**: Review the capability dossiers and confirm they enumerate SDK-relevant requirements, validations, prerequisites, and future-impact notes for each researched domain.

### Implementation for User Story 2

- [X] T015 [P] [US2] Document required SDK capabilities and validations for NFe, later consolidated into docs/capacidades-sdk.md and docs/roadmap/coverage-matrix.md
- [X] T016 [P] [US2] Document required SDK capabilities and shared versus state-sensitive rules for NFC-e, later consolidated into docs/capacidades-sdk.md and docs/roadmap/nfce-operacional-promovivel.md
- [X] T017 [P] [US2] Document required SDK capabilities and event prerequisites for Manifestacao do Destinatario, later consolidated into docs/capacidades-sdk.md and docs/roadmap/rtm-cobertura-oficial.md
- [X] T018 [US2] Summarize recent relevant notas tecnicas and replaced-version deltas, later converged into docs/ROADMAP.md
- [X] T019 [US2] Cross-reference capability records, source entries, and future SDK impacts in docs/_meta/source-registry.md

**Checkpoint**: User Story 2 should provide a requirement-oriented backlog input set without depending on later repository-polish work.

---

## Phase 5: User Story 3 - Disponibilizar Material Utilizavel no Repositorio (Priority: P3)

**Goal**: Make the documentation set reviewable, complete by UF for NFC-e, and easy to navigate in the repository.

**Independent Test**: Starting from docs/index.md, navigate to the canonical roadmap annexes and docs/roadmap/ufs-ambientes.md, then confirm all 27 UFs are represented and primary versus secondary source status is visible.

### Implementation for User Story 3

- [X] T020 [P] [US3] Populate all 27 UF entries with status, sources, and unresolved gaps, later converged into docs/roadmap/ufs-ambientes.md
- [X] T021 [P] [US3] Document primary-versus-secondary source handling and conversion constraints in docs/markitdown-workflow.md
- [X] T022 [US3] Add final navigation, deliverable inventory, and review guidance to docs/index.md
- [X] T023 [US3] Normalize final dossier structure and source sections for the NFe slice, later converged into docs/roadmap/topicos-oficiais.md
- [X] T024 [US3] Normalize final dossier structure and source sections for the NFC-e slice, later converged into docs/roadmap/topicos-oficiais.md and docs/roadmap/ufs-ambientes.md
- [X] T025 [US3] Normalize final dossier structure and source sections for Manifestacao do Destinatario, later converged into docs/roadmap/rtm-cobertura-oficial.md

**Checkpoint**: User Story 3 should leave the documentation set repository-ready and independently reviewable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and consistency work affecting multiple stories.

- [X] T026 [P] Review primary and secondary source separation and fill remaining metadata gaps in docs/_meta/source-registry.md
- [X] T027 [P] Run the deliverable validation checklist and update command guidance in specs/001-research-sefaz-docs/quickstart.md
- [X] T028 Validate the final docs artifact set and record any remaining open risks in docs/index.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts immediately after Foundational and produces the MVP documentation set.
- **User Story 2 (P2)**: Depends on User Story 1 dossiers being populated enough to derive capabilities and change summaries.
- **User Story 3 (P3)**: Depends on User Story 1 dossiers and can proceed in parallel with the end of User Story 2 once the dossier content exists.

### Within Each User Story

- Shared scaffolds before content population.
- Current-state dossiers before capability mapping.
- Capability mapping before final repository polish.
- UF matrix completion before final navigation and validation.

### Parallel Opportunities

- T003 can run in parallel with T001-T002.
- T005 and T006 can run in parallel after T004 starts the dossier pattern.
- T010, T011, and T012 can run in parallel.
- T015, T016, and T017 can run in parallel.
- T020 and T021 can run in parallel.
- T026 and T027 can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Populate current-state dossiers in parallel:
Task: "Populate the current effective NFe emission flow and primary sources in docs/nfe/emissao-nfe.md"
Task: "Populate the current effective NFC-e national flow and primary sources in docs/nfce/emissao-nfce.md"
Task: "Populate the current effective Manifestacao do Destinatario flow and primary sources in docs/manifestacao-destinatario/visao-geral.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Review the current-state dossiers and central index.

### Incremental Delivery

1. Deliver the current-state documentation set for NFe, NFC-e, and Manifestacao do Destinatario.
2. Add capability mapping and recent-change summaries.
3. Finish the NFC-e UF matrix and repository-polish tasks.
4. Run final validation and close remaining documentation gaps.

### Parallel Team Strategy

1. One contributor prepares the shared scaffolds and source registry.
2. After Foundation, split dossier population by domain for User Story 1.
3. Then split capability mapping by domain for User Story 2 while another contributor builds the UF matrix for User Story 3.
4. Finish with a shared validation pass over docs/index.md and docs/_meta/source-registry.md.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to user stories for traceability.
- This feature is documentation-first; validation is based on completeness, traceability, and repository checks rather than mandatory automated tests.
- Record certificate-gated pages and inaccessible official content as explicit gaps instead of bypassing restrictions.
- Keep primary and secondary sources separate in every final artifact.
- Preserve the distinction between current effective state and recent relevant historical changes.
---
description: "Task list for the project feature catalog"
---

# Tasks: Especificacao das Features do Projeto

**Input**: Design documents from `/specs/002-project-features/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/feature-catalog-deliverables.md, quickstart.md

**Tests**: No dedicated automated test tasks are required by the specification. Validation is done through documentation consistency, evidence traceability, and focused repository checks if maintained code or package metadata is touched.

**Organization**: Tasks are grouped by user story to enable independent implementation and validation of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the canonical catalog entrypoint and shared navigation anchors needed by all stories.

- [X] T001 Establish the canonical project-wide feature catalog by refining the existing structure in docs/capacidades-sdk.md
- [X] T002 [P] Update docs/index.md to add the canonical catalog entry while preserving existing links and adoption-summary navigation
- [X] T003 [P] Align deliverable and provenance guidance with the canonical catalog in docs/_meta/source-registry.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared taxonomy and documentation structure that all user stories depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T004 Define the shared feature entry legend for status, impact type, evidence, operational enablement, and gap handling in docs/capacidades-sdk.md
- [X] T005 [P] Refine the existing cross-cutting capabilities section in docs/capacidades-sdk.md
- [X] T006 [P] Refine the existing domain feature sections and the NFC-e UF matrix linkage in docs/capacidades-sdk.md
- [X] T007 Record the documentation-only and hybrid-granularity boundaries in docs/capacidades-sdk.md and docs/index.md

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Entender o que o SDK cobre hoje (Priority: P1) 🎯 MVP

**Goal**: Deliver a navigable feature catalog that lets an integrator identify the current visible capabilities of the SDK.

**Independent Test**: Open docs/capacidades-sdk.md and docs/index.md and verify that an integrator can identify shared package capabilities plus NFe, NFC-e, and Manifestacao do Destinatario coverage without reading generated code.

### Implementation for User Story 1

- [X] T008 [P] [US1] Populate the project-wide feature overview and shared package capabilities in docs/capacidades-sdk.md
- [X] T009 [P] [US1] Align NFe capability descriptions and canonical-catalog terminology, now reflected in docs/capacidades-sdk.md and docs/roadmap/coverage-matrix.md
- [X] T010 [P] [US1] Align NFC-e capability descriptions and matrix-linkage wording, now reflected in docs/capacidades-sdk.md and docs/roadmap/ufs-ambientes.md
- [X] T011 [P] [US1] Align Manifestacao do Destinatario capability descriptions and restricted-access wording, now reflected in docs/capacidades-sdk.md and docs/roadmap/rtm-cobertura-oficial.md
- [X] T012 [US1] Publish the catalog link and adoption guidance in docs/index.md without regressing existing NFe, NFC-e, Manifestacao do Destinatario, and NFC-e UF links

**Checkpoint**: User Story 1 should provide a readable, repository-level capability map for SDK consumers.

---

## Phase 4: User Story 2 - Priorizar evolucoes com base em lacunas reais (Priority: P2)

**Goal**: Make feature status, evidence, and gaps explicit enough to turn the catalog into backlog input.

**Independent Test**: Review docs/capacidades-sdk.md, docs/_meta/source-registry.md, and docs/roadmap/ufs-ambientes.md and verify that every cataloged feature has a status plus at least one evidence source or explicit gap.

### Implementation for User Story 2

- [X] T013 [P] [US2] Classify catalog entries with status, evidence, and explicit gap fields in docs/capacidades-sdk.md
- [X] T014 [P] [US2] Add catalog cross-references and evidence-backlink coverage in docs/_meta/source-registry.md
- [X] T015 [P] [US2] Normalize NFC-e per-UF status and unresolved-gap wording, now reflected in docs/roadmap/ufs-ambientes.md
- [X] T016 [P] [US2] Align NFe capability status and gap language with the catalog model, now reflected in docs/capacidades-sdk.md and docs/roadmap/coverage-matrix.md
- [X] T017 [P] [US2] Align Manifestacao do Destinatario operational-enablement and gap language with the catalog model, now reflected in docs/capacidades-sdk.md and docs/roadmap/rtm-cobertura-oficial.md
- [X] T018 [US2] Add a consolidated evolution-priority and open-gap summary to docs/capacidades-sdk.md

**Checkpoint**: User Story 2 should leave the catalog usable as prioritized backlog input without requiring a separate interpretation pass.

---

## Phase 5: User Story 3 - Avaliar compatibilidade antes de adotar mudancas (Priority: P3)

**Goal**: Expose compatibility impact and public-contract boundaries for each relevant feature.

**Independent Test**: Inspect docs/capacidades-sdk.md and README.md and verify that a reviewer can distinguish documentation-only features from items that may affect public contracts, generated artifacts, or future migration notes.

### Implementation for User Story 3

- [X] T019 [P] [US3] Add impact-type and public-contract notes to the project-wide feature entries in docs/capacidades-sdk.md
- [X] T020 [P] [US3] Align NFe future-impact and compatibility wording with the catalog impact model, now reflected in docs/capacidades-sdk.md and docs/roadmap/coverage-matrix.md
- [X] T021 [P] [US3] Align NFC-e future-impact and compatibility wording with the catalog impact model, now reflected in docs/capacidades-sdk.md and docs/roadmap/nfce-operacional-promovivel.md
- [X] T022 [P] [US3] Align Manifestacao do Destinatario future-impact and compatibility wording with the catalog impact model, now reflected in docs/capacidades-sdk.md and docs/roadmap/rtm-cobertura-oficial.md
- [X] T023 [US3] Link the canonical feature catalog from README.md and explain its role relative to public package contracts in README.md

**Checkpoint**: User Story 3 should give reviewers a compatibility-oriented view of the project without changing package behavior.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [X] T024 [P] Review canonical-catalog versus index navigation consistency in docs/capacidades-sdk.md and docs/index.md
- [X] T025 [P] Review evidence and gap traceability consistency in docs/capacidades-sdk.md and docs/_meta/source-registry.md
- [X] T026 [P] Review hybrid-granularity and compatibility wording consistency across docs/capacidades-sdk.md and the canonical roadmap annexes that absorbed the old domain dossiers
- [X] T027 [P] Confirm that no JSON, YAML, or similar structured sidecar catalog was introduced outside docs/ and specs/002-project-features/
- [X] T028 Run the final documentation validation pass and record any remaining open risks in docs/index.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP feature catalog.
- **User Story 2 (P2)**: Starts after Foundational and can build on the shared catalog structure while remaining independently testable through evidence and gap traceability.
- **User Story 3 (P3)**: Starts after Foundational and can proceed after the catalog structure exists, while remaining independently testable through impact and compatibility review.

### Within Each User Story

- Shared taxonomy before story-specific population.
- Canonical catalog positioning before dossier alignment.
- Feature summaries before evidence and gap normalization.
- Evidence and gap normalization before compatibility labeling.
- Compatibility labeling before final polish and navigation review.

### Parallel Opportunities

- T002 and T003 can run in parallel after T001 starts the shared catalog work.
- T005 and T006 can run in parallel after T004 defines the shared legend.
- T008, T009, T010, and T011 can run in parallel.
- T013, T014, T015, T016, and T017 can run in parallel.
- T019, T020, T021, and T022 can run in parallel.
- T024, T025, T026, and T027 can run in parallel.

---

## Parallel Example: User Story 2

```bash
# Normalize evidence and gap coverage in parallel:
Task: "Classify catalog entries with status, evidence, and explicit gap fields in docs/capacidades-sdk.md"
Task: "Add catalog cross-references and evidence-backlink coverage in docs/_meta/source-registry.md"
Task: "Normalize NFC-e per-UF status and unresolved-gap wording in docs/nfce/uf-matrix.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Review docs/capacidades-sdk.md and docs/index.md as the adoption-oriented MVP.

### Incremental Delivery

1. Deliver the shared feature catalog and navigation entry point.
2. Reinforce canonical ownership and hybrid-granularity boundaries.
3. Add evidence-backed status and gap classification.
4. Add compatibility and contract-impact guidance.
5. Finish with cross-document consistency review and risk capture.

### Parallel Team Strategy

1. One contributor refines the existing canonical catalog and index updates.
2. After Foundation, split domain alignment across NFe, NFC-e, and Manifestacao do Destinatario.
3. Run evidence and compatibility normalization in parallel where files do not conflict.
4. Finish with a shared review pass over docs/capacidades-sdk.md, docs/index.md, and README.md.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature is documentation-first; validation is based on consistency, traceability, and reviewer usability rather than dedicated automated tests.
- `docs/capacidades-sdk.md` remains the canonical catalog source in this feature.
- Keep confirmed support restricted to stable public-contract features.
- Keep the deliverable set documentation-only; do not add a structured sidecar catalog in this phase.
- Keep NFC-e per-UF detail in docs/nfce/uf-matrix.md rather than flattening it into the primary catalog.
- Separate SDK capability from operational enablement whenever certificates, credenciamento, or restricted official access affect real-world usage.
- Use hybrid granularity: broad catalog entries with subcapabilities captured in scope text or linked dossiers.

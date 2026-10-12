# Tasks: MDF-e Source and Schema Baseline

**Input**: Design documents from `/specs/030-mdfe-source-schema-baseline/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`

**Tests**: No automated test tasks are needed for this documentation-only feature. The final phase includes documentation checks and an impact assessment of package gates; no runtime, generator, XSD, or public-contract behavior changes are planned.

## Phase 1: Setup

**Purpose**: Confirm this feature's documentation-only deliverables and their ownership.

- [x] T001 Confirm the documentation-only scope and deliverable paths in `specs/030-mdfe-source-schema-baseline/plan.md`

## Phase 2: Foundational

**Purpose**: Finalize shared evidence vocabulary and validation guidance before source and scope work begins.

- [x] T002 [P] Finalize source, package, route, and scope status fields and traceability invariants in `specs/030-mdfe-source-schema-baseline/data-model.md`
- [x] T003 [P] Align the source-review procedure and documentation/package validation commands with the plan in `specs/030-mdfe-source-schema-baseline/quickstart.md`

**Checkpoint**: Shared evidence vocabulary and review procedure are stable; user stories can proceed.

## Phase 3: User Story 1 - Identify the current normative MDF-e baseline (Priority: P1)

**Goal**: Establish an independently reviewable register of authoritative MDF-e legal and technical sources, package versions, dates, provenance, and unresolved applicability gaps.

**Independent Test**: A reviewer follows each source-register entry to its official primary source and verifies publisher, title/version, publication/effective dates when available, applicability evidence, and retrieval location. Inaccessible, stale, conflicting, or non-authoritative material remains visibly unverified and is not promoted as a rule.

### Source and Schema Baseline

- [x] T004 [US1] Reconcile Ajuste SINIEF 21/10 and its relevant amendments, recording exact clauses, publishers, publication dates, effective dates, and status in `specs/030-mdfe-source-schema-baseline/research.md`
- [x] T005 [US1] Inspect the official MDF-e base and NT schema archives and record exact package names, revisions, publication metadata, namespace/XSD entrypoints, and SHA-256 digests in `specs/030-mdfe-source-schema-baseline/research.md`; record an explicit gap and keep a package unverified if its archive or digest cannot be verified
- [x] T006 [US1] Reconcile MOC, technical-note, legal-amendment, and schema-package versions and applicability intervals in `specs/030-mdfe-source-schema-baseline/research.md`, separating legal effectivity from technical rollout
- [x] T007 [US1] Classify current, historical, superseded, conflicting, navigational, and secondary sources and label the PR/PB captures as discovery leads in `specs/030-mdfe-source-schema-baseline/research.md`
- [x] T008 [US1] Review the source register against FR-001 through FR-004 and SC-001, correcting unsupported claims and preserving every unresolved provenance or applicability gap in `specs/030-mdfe-source-schema-baseline/research.md`

**Checkpoint**: The source and schema baseline is independently reviewable; uncertain packages or rules are explicitly blocked rather than treated as verified.

## Phase 4: User Story 2 - Define a bounded first MDF-e operational scope (Priority: P2)

**Goal**: Produce an evidence-traceable scope matrix for the candidate SP runtime cohort, with explicit environments, operations, routes, schema references, exclusions, and unresolved gaps.

**Independent Test**: A reviewer compares every included scope row with current primary sources and confirms that its issuer cohort, UF, environment, operation, schema package, and route are evidenced. Unsupported or partially verified operations, state differences, and contingency are explicitly excluded, deferred, or marked unverified.

### Scope and Route Matrix

- [x] T009 [US2] Record each SVRS production and homologation service name, version, endpoint, and source ID in `specs/030-mdfe-source-schema-baseline/research.md`, distinguishing the national catalog from state-specific eligibility
- [x] T010 [US2] Verify the SP issuer cohort, accreditation prerequisites, and any state-specific operational deltas from official sources; record verified facts and unresolved gaps in `specs/030-mdfe-source-schema-baseline/research.md`
- [x] T011 [US2] Add a scope-matrix row for each proposed issuer/UF/environment/operation/schema/route combination in `specs/030-mdfe-source-schema-baseline/research.md`, using the fields and readiness rules from `specs/030-mdfe-source-schema-baseline/data-model.md`
- [x] T012 [US2] Classify issuance, query, closure, cancellation, relevant events, distribution, production, and contingency as included, excluded, deferred, or unverified in `specs/030-mdfe-source-schema-baseline/research.md`, with source IDs and reasons for each decision
- [x] T013 [US2] Update `specs/031-mdfe-sp-runtime/spec.md` to reference the verified source register and scope matrix, carry forward explicit exclusions, and preserve a blocking status for any required unverified evidence

**Checkpoint**: The runtime follow-on has one explicit bounded cohort and an operation-by-environment decision traceable to the verified evidence; unresolved evidence continues to block promotion.

## Phase 5: Polish and Cross-Cutting Validation

**Purpose**: Confirm requirement coverage, documentation integrity, and the package impact boundary.

- [x] T014 Cross-check FR-001 through FR-009 and SC-001 through SC-004 against the source register and scope matrix, recording any uncovered requirement or success criterion in `specs/030-mdfe-source-schema-baseline/research.md`
- [x] T015 Run the documentation formatting and link checks plus the package test/lint/type/build/public-contract/tarball impact gates from `specs/030-mdfe-source-schema-baseline/quickstart.md`, and record command outcomes and any applicability limits in that file

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on T001; T002 and T003 can run in parallel because they update separate files.
- **User Story 1 (Phase 3)**: Depends on the foundational phase; its tasks run in order because they reconcile and update the same source register.
- **User Story 2 (Phase 4)**: Depends on completion of User Story 1 so every scope row can reference the reconciled source and schema baseline.
- **Polish (Phase 5)**: Depends on both user stories.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; no dependency on US2.
- **US2 (P2)**: Starts after US1; the source/schema baseline is a blocking input for routing and scope decisions.

### Parallel Opportunities

- After T001, run T002 and T003 in parallel.
- **US1**: No safe parallel pair; T004-T008 update and reconcile the same `research.md` evidence register.
- **US2**: No safe parallel pair; T009-T012 build one linked route/scope matrix in `research.md`, and T013 consumes that result.

## Implementation Strategy

### MVP First

1. Complete Setup and Foundational phases.
2. Complete US1 and independently review the primary source/schema register.
3. **MVP boundary**: Stop after US1 if required official package/applicability evidence remains unresolved. This delivers a verified baseline or a clearly documented blocker, but no runtime support.
4. Complete US2 only against the reconciled baseline; keep unsupported rows excluded or deferred.

### Incremental Delivery

1. Finalize evidence vocabulary and review procedure.
2. Reconcile official legal and technical sources, package metadata, and applicability (US1).
3. Define SP routes and the operation/environment matrix (US2).
4. Update the dependent runtime spec and complete documentation/package impact checks.

## Format Validation

Every task uses the required checklist structure `- [ ] T### [P?] [US#?] Description with file path`. Setup, foundational, and polish tasks omit story labels; story-phase tasks include `[US1]` or `[US2]`. Task IDs are sequential, and `[P]` appears only on the independent foundational tasks T002 and T003.

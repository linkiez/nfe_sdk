# Tasks: Roadmap Gap Audit

**Input**: Design documents from `specs/011-roadmap-gap-audit/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | quickstart.md ✅ | contracts/audit-artifacts-contract.md ✅

**Note**: This is a pure documentary audit feature. No changes to `src/`, `package.json#exports`, generated files, or the published package. Validation is Prettier formatting only (`npx prettier --check`). Test tasks are omitted per spec CC-001 and plan.md constitution check.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Anchor the audit feature to the Speckit context and ensure contracts are in place.

- [x] T001 Confirm `.specify/feature.json` points to `specs/011-roadmap-gap-audit` and `.github/copilot-instructions.md` references `specs/011-roadmap-gap-audit/plan.md`
- [x] T002 [P] Confirm `specs/011-roadmap-gap-audit/contracts/audit-artifacts-contract.md` is present and defines mandatory columns for all three artifacts
- [x] T003 [P] Confirm `specs/011-roadmap-gap-audit/checklists/requirements.md` is present and covers FR-001 through FR-010

**Checkpoint**: Feature anchor and contract baseline confirmed — audit work can begin

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Cross-reference corpus and spec scope before generating any artifact. Must complete before all user story phases.

**⚠️ CRITICAL**: No artifact can be produced without completing this phase first

- [x] T004 Read all eight formal specs (`specs/001` to `specs/008`) and record declared scope, explicit deferrals, and exclusions in `specs/011-roadmap-gap-audit/research.md`
- [x] T005 [P] Read downstream context specs (`specs/009-generic-event-mvp/spec.md`, `specs/010-nfce-national-core/spec.md`) and list topics they explicitly address, to be used only as non-duplication guard in the matrix
- [x] T006 [P] Audit `docs/_meta/official-conversion-manifest.json` and `docs/_meta/source-registry.md` to record which official files are present, which conversions failed (CE, SE, RJ, AP known), and which portal pages are access-restricted
- [x] T007 Read key official corpus files: MOC NF-e 7.0 (`docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/`), web services catalog, availability table, contingency annex, and DANFE NFC-e v6.0 to confirm normative baseline per theme
- [x] T008 [P] Read auxiliary official files: MOC NF-e ABI v1.00, informes page (NT tracking), manifestação do destinatário page, and EPEC conciliation page — record access restrictions and source gaps in `specs/011-roadmap-gap-audit/research.md`

**Checkpoint**: All eight specs read, corpus baseline confirmed, provenance gaps recorded — artifact production can begin in parallel

---

## Phase 3: User Story 1 – Coverage Matrix (Priority: P1) 🎯 MVP

**Goal**: Produce a traceable table that maps every spec 001–008 topic to its coverage status against the official internalised corpus.

**Independent Test**: Matrix exists at `specs/011-roadmap-gap-audit/coverage-matrix.md`, contains a row for every declared topic in specs 001–008, uses only Status values from the contract (covered / partial / deferred / missing / resolved-downstream), includes at least one Primary Source per row, and passes `npx prettier --check`.

### Implementation for User Story 1

- [x] T009 [P] [US1] Draft coverage rows for specs 001–003 (research, project features, public contract) in `specs/011-roadmap-gap-audit/coverage-matrix.md` — columns: Spec | Topic | Status | Primary Sources | Downstream Context | Notes
- [x] T010 [P] [US1] Draft coverage rows for specs 004–006 (SDK init, digital signing, SOAP transport) in `specs/011-roadmap-gap-audit/coverage-matrix.md`
- [x] T011 [P] [US1] Draft coverage rows for specs 007–008 (NF-e operational MVP, recipient DFe MVP) in `specs/011-roadmap-gap-audit/coverage-matrix.md`
- [x] T012 [US1] Add cross-cutting section to `specs/011-roadmap-gap-audit/coverage-matrix.md` covering NF-e ABI model 77, NFGas, NFAg, Agendamento SVC-AN, and ongoing NT tracking — each with provenance boundary note
- [x] T013 [US1] Review full `specs/011-roadmap-gap-audit/coverage-matrix.md` for consistency: confirm all deferred rows reference a GAP ID, all resolved-downstream rows name spec 009 or 010, and no row conflates SDK gap with external operational dependency
- [x] T014 [US1] Run `npx prettier --write specs/011-roadmap-gap-audit/coverage-matrix.md` and verify exit code 0

**Checkpoint**: `coverage-matrix.md` complete, formatted, and every row traceable to a source or provenance note

---

## Phase 4: User Story 2 – Gap Report and Prioritized Backlog (Priority: P2)

**Goal**: Derive the 15 gaps from the matrix and produce two complementary artifacts: a detailed gap report and a ranked backlog ordered by operational impact and normative risk.

**Independent Test**: `gap-report.md` contains GAP-001 through GAP-015, each with all mandatory fields (Category, Affected specs, Why gap, Primary sources, Provenance boundary, Downstream status). `prioritized-backlog.md` contains all 15 gaps ranked with mandatory columns (Rank, Gap ID, Priority Band, Operational Impact, Normative Risk, Effort Signal, Recommended Action, Rationale) and passes `npx prettier --check`.

### Implementation for User Story 2

- [x] T015 [P] [US2] Draft GAP-001 through GAP-005 (chave acesso, hashCSRT, EPEC, multi-UF routing, production env) in `specs/011-roadmap-gap-audit/gap-report.md` — confirm each links to a row in the coverage matrix
- [x] T016 [P] [US2] Draft GAP-006 through GAP-010 (NF-e ABI, prorrogação ICMS, consNSU/consChNFe, NFC-e signing, ConsultaCadastro) in `specs/011-roadmap-gap-audit/gap-report.md`
- [x] T017 [P] [US2] Draft GAP-011 through GAP-015 (NT tracking, RetAutorizacao async, cBenef, XSD validation, mudança manifestação) in `specs/011-roadmap-gap-audit/gap-report.md`
- [x] T018 [US2] Review `specs/011-roadmap-gap-audit/gap-report.md`: confirm every gap has at least one primary source, downstream status is explicit, and no gap collapses a deferred-scope item with a missing-runtime item without a clear category distinction
- [x] T019 [US2] Build `specs/011-roadmap-gap-audit/prioritized-backlog.md` with all 15 gaps ranked — blocker band (GAP-001, GAP-005, GAP-002, GAP-004), next-slice band (GAP-003, GAP-012, GAP-013, GAP-009, GAP-010), medium-term band (GAP-008, GAP-014, GAP-015, GAP-007, GAP-011), watchlist band (GAP-006)
- [x] T020 [US2] Add resolved-downstream table and out-of-scope families section to `specs/011-roadmap-gap-audit/prioritized-backlog.md` per contract requirement
- [x] T021 [US2] Run `npx prettier --write specs/011-roadmap-gap-audit/gap-report.md specs/011-roadmap-gap-audit/prioritized-backlog.md` and verify exit code 0

**Checkpoint**: `gap-report.md` and `prioritized-backlog.md` complete, consistent with matrix, formatted, and mutually traceable

---

## Phase 5: User Story 3 – Provenance Boundaries and Conflict Register (Priority: P3)

**Goal**: Make all provenance boundaries, access restrictions, conversion failures, and unresolved conflicts explicit across all three artifacts — ensuring no gap is silently promoted as confirmed support.

**Independent Test**: All three artifacts contain explicit provenance boundary language for access-restricted pages (manifestação, EPEC conciliation), conversion failures (CE, SE, RJ, AP), and gaps whose source is fragmented across MOC, FAQ, DANFE, and state supplements. A reviewer can identify every unresolved provenance uncertainty in under 10 minutes.

### Implementation for User Story 3

- [x] T022 [P] [US3] Audit `specs/011-roadmap-gap-audit/coverage-matrix.md` — add or confirm provenance boundary notes for all rows with access-restricted sources, failed conversions, or evidence limited to secondary references
- [x] T023 [P] [US3] Audit `specs/011-roadmap-gap-audit/gap-report.md` — verify every “Provenance boundary” field names the exact corpus file used and distinguishes primary official sources from secondary or auxiliary references
- [x] T024 [US3] Audit `specs/011-roadmap-gap-audit/prioritized-backlog.md` — confirm watchlist and monitor-only items include explicit notes that their normative evidence is incomplete or the standard is still in stabilization
- [x] T025 [US3] Cross-check that no item across the three artifacts claims confirmed SDK support for a topic whose only evidence came from an access-restricted page or a failed Markdown conversion

**Checkpoint**: All three artifacts have explicit, consistent provenance boundaries — ready for final validation

---

## Phase 6: Polish and Final Validation

**Purpose**: Cross-artifact consistency check and full Prettier validation gate.

- [x] T026 Verify internal consistency across all three artifacts: every GAP ID in `prioritized-backlog.md` exists in `gap-report.md`; every deferred row in `coverage-matrix.md` has a corresponding GAP entry; all Status values match the contract vocabulary
- [x] T027 [P] Run full Prettier check: `npx prettier --check specs/011-roadmap-gap-audit/*.md specs/011-roadmap-gap-audit/contracts/*.md .github/copilot-instructions.md` — fix any failures before proceeding
- [x] T028 [P] Verify `docs/ROADMAP.md` reflects the audit findings adequately (note: later convergence removed the parallel roadmap matrix from `docs/`; record decision in research.md if relevant)
- [x] T029 Confirm SC-003 manually: a reviewer unfamiliar with the previous sessions can identify the five most important gaps and their rationale in under 10 minutes using only the three artifacts in `specs/011-roadmap-gap-audit/`

---

## Dependencies

```
T001 → T002 → T003 (setup serial, anchor first)
T004 → T005, T006, T007, T008 (T004 first — defines scope; rest parallel)
T005–T008 → T009–T013 (US1 matrix drafts can run in parallel after foundation)
T013 → T014 (review before format)
T014 → T015–T017 (matrix complete before gap drafts)
T015–T017 → T018 → T019 → T020 → T021 (gap review before backlog)
T021 → T022–T025 (provenance audit after artifacts complete)
T025 → T026 → T027, T028 (final validation after provenance pass)
T027, T028 → T029 (manual SC-003 check last)
```

## Parallel Opportunities

| Parallel Group                | Tasks                  | Prerequisite |
| ----------------------------- | ---------------------- | ------------ |
| Setup verification            | T002, T003             | T001         |
| Corpus and downstream context | T005, T006, T007, T008 | T004         |
| Matrix drafts by spec range   | T009, T010, T011       | T005–T008    |
| Gap report batches            | T015, T016, T017       | T014         |
| Provenance audit per artifact | T022, T023             | T021         |
| Final checks                  | T027, T028             | T026         |

## Implementation Strategy

**MVP scope**: Phase 3 (US1 — coverage matrix) is the minimum deliverable for SC-001. It unblocks US2 and US3.

**Incremental delivery**:

1. Complete Phase 1–2 (setup + foundation) — all three artifacts depend on this
2. Complete Phase 3 (US1) — coverage matrix is the anchor for all gap derivation
3. Complete Phase 4 (US2) — gap report and backlog derive from the matrix
4. Complete Phase 5 (US3) — provenance layer prevents false-positive coverage claims
5. Complete Phase 6 — cross-artifact consistency gate and final Prettier check

**Current state** (2026-05-19): Phases 1–4 are complete. All three artifacts exist and pass Prettier. Phase 5 (provenance audit) and Phase 6 (final cross-artifact validation) remain.

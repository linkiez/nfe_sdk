# Tasks: NFC-e National Core

**Input**: Design documents from `/specs/010-nfce-national-core/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md, contracts/public-nfce-operational-facade.md

**Tests**: This feature expands the published package surface, adds observable NFC-e runtime behavior, introduces both unsupported-state and unsupported-scope boundaries, and depends on normative domain evidence. Contract, unit, integration, fixture-backed regression, provenance, and package smoke validation tasks are required.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no incomplete dependency conflicts)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the NFC-e module and regression scaffolding shared by all stories.

- [x] T001 Create the NFC-e module barrel and documentation anchors in `src/canonical/nfce/index.ts` and `src/canonical/nfce/index.doc.md`
- [ ] T002 [P] Create the NFC-e test and fixture scaffolding in `tests/unit/nfce/.gitkeep`, `tests/integration/nfce/.gitkeep`, and `tests/fixtures/nfce/.gitkeep`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared contracts, inference primitives, fixture helpers, and transport catalog support required before any user story can start.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T003 Establish shared NFC-e contracts and error primitives in `src/canonical/nfce/contracts.ts` and `src/canonical/nfce/errors.ts`
- [x] T004 [P] Implement shared NFC-e input normalization and UF inference helpers in `src/canonical/nfce/normalize-nfce-input.ts` and `src/canonical/nfce/resolve-nfce-uf.ts`
- [x] T005 [P] Add reusable NFC-e fixture builders and assertions in `tests/fixtures/nfce/build-nfce-fixtures.ts` and `tests/config/nfce-assertions.ts`
- [x] T006 [P] Extend the shared transport catalog and provenance placeholders for NFC-e authorization in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Emitir NFC-e homologada pela facade root (Priority: P1) 🎯 MVP

**Goal**: Let integrators authorize a valid NFC-e through the root package surface and receive a structured operational outcome without manual XML, signature, or SOAP orchestration.

**Independent Test**: Import the package root, authorize a valid homologation NFC-e, and verify a structured outcome with transport evidence and authorization protocol or receipt.

### Tests for User Story 1 ⚠️

- [x] T007 [P] [US1] Make the root NFC-e operational contract regression fail in `tests/contract/public-nfce-operational-facade.test.ts`
- [x] T008 [P] [US1] Make the NFC-e local validation regression fail in `tests/unit/nfce/authorize-nfce-validation.test.ts`
- [x] T009 [P] [US1] Make the homologation authorization flow regression fail in `tests/integration/nfce/authorize-nfce-homologation.test.ts`

### Implementation for User Story 1

- [x] T010 [P] [US1] Add SP homologation authorization fixtures in `tests/fixtures/nfce/sp-homologation-input.json` and `tests/fixtures/nfce/sp-homologation-response-authorized.xml`
- [x] T011 [P] [US1] Implement NFC-e authorization payload and outcome mapping in `src/canonical/nfce/authorization-payload.ts` and `src/canonical/nfce/authorization-outcome.ts`
- [x] T012 [P] [US1] Implement the NFC-e authorization orchestrator and response parser in `src/canonical/nfce/authorize-nfce.ts` and `src/canonical/nfce/parse-ret-envi-nfce.ts`
- [x] T013 [US1] Expose the new root facade through `src/canonical/facade/authorize-nfce.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T014 [US1] Publish the additive NFC-e root contract notes in `src/public-contract.ts`, `src/public-contract.doc.md`, `src/index.doc.md`, and `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`

**Checkpoint**: User Story 1 should now allow authorization of a supported homologation NFC-e from the root import with a structured outcome.

---

## Phase 4: User Story 2 - Aplicar a primeira extensao estadual sobre o nucleo comum (Priority: P2)

**Goal**: Route the shared NFC-e core through the SP pilot profile and reject non-pilot UFs deterministically before transport.

**Independent Test**: Authorize a valid SP NFC-e and verify the pilot profile is applied automatically; then submit a valid NFC-e from another UF and verify an explicit unsupported-state boundary without remote transport.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Make the UF inference and pilot selection regression fail in `tests/unit/nfce/resolve-nfce-uf.test.ts`
- [x] T016 [P] [US2] Make the unsupported-state boundary regression fail in `tests/unit/nfce/authorize-nfce-boundaries.test.ts`
- [x] T017 [P] [US2] Make the SP pilot and non-pilot integration regressions fail in `tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts` and `tests/integration/nfce/authorize-nfce-unsupported-state.test.ts`

### Implementation for User Story 2

- [x] T018 [P] [US2] Add pilot-profile fixtures for SP and a non-pilot UF in `tests/fixtures/nfce/sp-pilot-profile-input.json`, `tests/fixtures/nfce/sp-pilot-profile-response-authorized.xml`, and `tests/fixtures/nfce/non-pilot-uf-input.json`
- [x] T019 [P] [US2] Implement the SP pilot profile and profile selector in `src/canonical/nfce/sp-pilot-profile.ts` and `src/canonical/nfce/select-nfce-profile.ts`
- [x] T020 [P] [US2] Implement explicit unsupported-state boundary mapping and accepted-for-transport gating in `src/canonical/nfce/coverage-boundary.ts` and `src/canonical/nfce/authorize-nfce.ts`
- [x] T021 [P] [US2] Implement explicit unsupported-scope classification for deferred operational surfaces in `src/canonical/nfce/coverage-boundary.ts`, `src/canonical/nfce/contracts.ts`, and `src/canonical/nfce/authorize-nfce.ts`
- [x] T022 [US2] Extend NFC-e transport routing and endpoint provenance for the SP pilot in `src/canonical/transport/supported-services.ts`, `src/canonical/transport/service-catalog.ts`, and `src/canonical/transport/catalog-provenance.ts`
- [x] T023 [US2] Update the pilot-profile usage flow in `specs/010-nfce-national-core/quickstart.md` and `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`

**Checkpoint**: User Stories 1 and 2 should now prove the shared root contract plus automatic SP pilot routing with explicit non-pilot boundaries.

---

## Phase 5: User Story 3 - Explicitar as fronteiras entre o nucleo nacional e os deltas por UF (Priority: P3)

**Goal**: Make the supported national core, SP pilot coverage, and deferred NFC-e surfaces explicit in package docs, compatibility artifacts, and boundary behavior.

**Independent Test**: Review the published contract, docs, and coverage matrix, then execute a deferred-scope request and verify that unsupported state or unsupported scope is reported explicitly instead of being treated as hidden support.

### Tests for User Story 3 ⚠️

- [x] T024 [P] [US3] Make the public contract documentation regression fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-entrypoint.test.ts`
- [x] T025 [P] [US3] Make the NFC-e gap and boundary taxonomy regression fail in `tests/unit/gap-register.test.ts` and `tests/unit/nfce/authorize-nfce-boundaries.test.ts`
- [x] T026 [P] [US3] Make the deferred-scope NFC-e regression fail in `tests/unit/nfce/authorize-nfce-unsupported-scope.test.ts`

### Implementation for User Story 3

- [x] T027 [P] [US3] Update the published package contract and compatibility notes in `src/public-contract.ts`, `src/public-contract.doc.md`, `src/index.doc.md`, and `README.md`
- [x] T028 [P] [US3] Update the NFC-e coverage documentation and compatibility matrix, later converged into `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/coverage-matrix.md`, and `docs/roadmap/ufs-ambientes.md`
- [x] T029 [US3] Align feature artifacts with the final boundary language in `specs/010-nfce-national-core/spec.md`, `specs/010-nfce-national-core/data-model.md`, `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`, and `specs/010-nfce-national-core/quickstart.md`

**Checkpoint**: All user stories should now be independently functional and the supported-versus-deferred NFC-e boundaries should be explicit across code and docs.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish provenance, smoke coverage, and full-package validation.

- [x] T030 [P] Update provenance and source-registry notes for the implemented NFC-e slice in `docs/_meta/source-registry.md`, `docs/documentos-oficiais-portal-nfe.md`, and `specs/010-nfce-national-core/research.md`
- [x] T031 [P] Add tarball and root-surface regression coverage for the new facade in `tests/integration/package-tarball-smoke.test.ts` and `tests/contract/root-functional-facade.test.ts`
- [x] T032 Run the feature validation flow for `src/canonical/nfce/`, `src/canonical/facade/authorize-nfce.ts`, `src/index.ts`, `src/public-contract.ts`, `src/canonical/transport/`, `tests/contract/public-nfce-operational-facade.test.ts`, `tests/integration/nfce/`, `tests/unit/nfce/`, and `specs/010-nfce-national-core/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies - can start immediately.
- **Phase 2: Foundational**: Depends on Phase 1 - blocks all user stories.
- **Phase 3: User Story 1**: Depends on Phase 2.
- **Phase 4: User Story 2**: Depends on Phase 2, but its implementation tasks should start only after the root facade and base outcome model from User Story 1 are stable.
- **Phase 5: User Story 3**: Depends on Phase 2, but its implementation tasks should start only after the boundary vocabulary and root facade shape from User Story 1 are stable.
- **Phase 6: Polish**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **US1 (P1)**: First MVP increment; establishes the new root NFC-e facade and a successful homologation authorization flow.
- **US2 (P2)**: Can prepare tests and fixtures after Foundational, but implementation builds on the shared facade to add automatic SP pilot routing and explicit unsupported-state boundaries once US1 stabilizes the root contract.
- **US3 (P3)**: Can prepare tests and doc deltas after Foundational, but implementation hardens package docs, compatibility artifacts, and boundary language on top of the facade introduced by US1 and the pilot behavior introduced by US2.

### Within Each User Story

- Tests and regression probes must be written and fail before implementation tasks for that story.
- Fixture assets should be created before the implementation tasks that consume them.
- Shared transport catalog extensions must land before pilot routing is considered complete.
- Public export wiring happens after the underlying NFC-e orchestration exists.
- Documentation and compatibility updates happen after the story behavior and contract shape are stable.

### Dependency Graph

- **Recommended order**: US1 → US2 → US3.
- **Parallel start after foundation**: test scaffolding, fixtures, and documentation prep for US2 and US3 can start after Foundation, but implementation should converge in the order US1 → US2 → US3 to avoid contract churn.

---

## Parallel Opportunities

- T002 can run in parallel with T001 once the feature folder path is established.
- T004, T005, and T006 can run in parallel after T003.
- T007, T008, and T009 can run in parallel for US1.
- T010, T011, and T012 can run in parallel for US1.
- T015, T016, and T017 can run in parallel for US2.
- T018, T019, and T020 can run in parallel for US2.
- T024, T025, and T026 can run in parallel for US3.
- T027 and T028 can run in parallel for US3.
- T030 and T031 can run in parallel during polish.

---

## Parallel Example: User Story 2

```bash
# Launch US2 regressions together:
Task: "Make the UF inference and pilot selection regression fail in tests/unit/nfce/resolve-nfce-uf.test.ts"
Task: "Make the unsupported-state boundary regression fail in tests/unit/nfce/authorize-nfce-boundaries.test.ts"
Task: "Make the SP pilot and non-pilot integration regressions fail in tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts and tests/integration/nfce/authorize-nfce-unsupported-state.test.ts"

# Launch supporting US2 implementation on separate files:
Task: "Add pilot-profile fixtures in tests/fixtures/nfce/"
Task: "Implement the SP pilot profile and selector in src/canonical/nfce/sp-pilot-profile.ts and src/canonical/nfce/select-nfce-profile.ts"
Task: "Implement explicit boundary mapping in src/canonical/nfce/coverage-boundary.ts and src/canonical/nfce/authorize-nfce.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that a supported homologation NFC-e authorizes from the root import with a structured outcome.

### Incremental Delivery

1. Finish Setup + Foundational to establish the shared NFC-e substrate.
2. Deliver US1 as the first public authorization facade for NFC-e.
3. Deliver US2 to add automatic SP pilot routing and explicit unsupported-state behavior.
4. Deliver US3 to harden the compatibility matrix, package docs, and deferred-scope messaging.
5. Finish with Phase 6 provenance, smoke coverage, and full-package validation.

### Parallel Team Strategy

1. One contributor prepares shared contracts, normalization, and UF inference in `src/canonical/nfce/`.
2. One contributor prepares transport catalog and pilot routing support in `src/canonical/transport/` and `tests/integration/nfce/`.
3. One contributor maintains root exports, package contract evidence, and NFC-e docs in `src/index.ts`, `src/public-contract.ts`, `README.md`, and `docs/nfce/`.
4. Finish with a shared review of tarball smoke coverage, provenance notes, and the full validation gate.

---

## Notes

- `[P]` tasks touch different files and can be run in parallel.
- `[US1]`, `[US2]`, and `[US3]` map each task back to its user story for traceability.
- The MVP scope is User Story 1 only.
- User Stories 2 and 3 expand the same root facade incrementally without promoting multi-UF support.
- Full validation remains `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`.

# Tasks: Recipient DFe MVP

**Input**: Design documents from `/specs/008-recipient-dfe-mvp/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: This feature changes package exports, public contracts, transport routing, and observable recipient-side behavior. Contract, integration, and focused unit tests are required for each user story.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the recipient-side implementation workspace and fixture roots.

- [X] T001 Create recipient-side module scaffolding in `src/canonical/recipient/index.ts`
- [X] T002 [P] Create recipient fixture seed files in `tests/fixtures/recipient/common-actors.json` and `tests/fixtures/recipient/common-nsu.json`
- [X] T003 [P] Create recipient integration fixture README in `tests/fixtures/recipient/README.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared recipient infrastructure that MUST be complete before any user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T004 Create shared recipient models and boundary types in `src/canonical/recipient/recipient-shared.ts`
- [X] T005 [P] Register Ambiente Nacional recipient services in `src/canonical/transport/service-catalog.ts` and `src/canonical/transport/supported-services.ts`
- [X] T006 [P] Add shared recipient fixture loaders in `tests/fixtures/recipient/load-recipient-fixture.ts`
- [X] T007 Update root recipient export scaffolding in `src/canonical/facade/index.ts`, `src/canonical/index.ts`, `src/index.ts`, and `src/public-contract.ts`
- [X] T008 Add recipient contract baseline notes in `tests/contract/root-contract-boundary.test.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel.

---

## Phase 3: User Story 1 - Distribuir documentos fiscais do destinatario com cursor observavel (Priority: P1) 🎯 MVP

**Goal**: Expor distribuicao DFe via `distNSU` com cursor observavel e envelopes estruturados para resumo e documento completo.

**Independent Test**: Executar uma consulta em homologacao via `distNSU` com `ultNSU` conhecido e validar resultado estruturado, cursor atualizado e comportamento explicito para lote vazio.

### Tests for User Story 1 ⚠️

- [X] T009 [P] [US1] Add root recipient distribution contract coverage in `tests/contract/root-recipient-dfe-facade.test.ts`
- [X] T010 [P] [US1] Add distribution integration coverage for success and empty results in `tests/integration/distribute-recipient-dfe.test.ts`
- [X] T011 [P] [US1] Add distribution result mapping unit coverage in `tests/unit/recipient-distribution-results.test.ts`

### Implementation for User Story 1

- [X] T012 [P] [US1] Add `distNSU` integration fixtures in `tests/fixtures/recipient/distribution-distnsu-success.json` and `tests/fixtures/recipient/distribution-distnsu-empty.json`
- [X] T013 [P] [US1] Implement recipient document envelopes in `src/canonical/recipient/recipient-document-envelope.ts`
- [X] T014 [P] [US1] Implement recipient distribution outcome and cursor mapping in `src/canonical/recipient/recipient-distribution-outcome.ts`
- [X] T015 [US1] Implement `distNSU` orchestration in `src/canonical/recipient/distribute-recipient-dfe.ts`
- [X] T016 [US1] Wire the public distribution facade in `src/canonical/facade/distribute-recipient-dfe.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [X] T017 [US1] Update recipient distribution contract notes in `src/public-contract.ts`, `specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md`, and `specs/008-recipient-dfe-mvp/quickstart.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Registrar manifestacao do destinatario para os eventos basicos (Priority: P2)

**Goal**: Expor uma API de alto nivel para os quatro eventos basicos de Manifestacao do Destinatario, mantendo o download posterior separado.

**Independent Test**: Enviar, em homologacao, cada um dos quatro eventos basicos com fixture reutilizavel e verificar resultado estruturado com classificacao, protocolo quando houver e sem download automatico da NF-e.

### Tests for User Story 2 ⚠️

- [X] T018 [P] [US2] Extend root recipient facade contract coverage for manifestation in `tests/contract/root-recipient-dfe-facade.test.ts`
- [X] T019 [P] [US2] Add manifestation integration coverage for the four basic events in `tests/integration/manifest-recipient-operation.test.ts`
- [X] T020 [P] [US2] Add manifestation validation unit coverage in `tests/unit/recipient-manifestation-results.test.ts`

### Implementation for User Story 2

- [X] T021 [P] [US2] Add manifestation fixtures in `tests/fixtures/recipient/manifestation-210200.json`, `tests/fixtures/recipient/manifestation-210210.json`, `tests/fixtures/recipient/manifestation-210220.json`, and `tests/fixtures/recipient/manifestation-210240.json`
- [X] T022 [P] [US2] Implement manifestation outcome mapping in `src/canonical/recipient/recipient-manifestation-outcome.ts`
- [X] T023 [P] [US2] Implement manifestation validation rules in `src/canonical/recipient/recipient-manifestation-validation.ts`
- [X] T024 [US2] Implement event assembly and submission in `src/canonical/recipient/manifest-recipient-operation.ts`
- [X] T025 [US2] Wire the public manifestation facade in `src/canonical/facade/manifest-recipient-operation.ts`, `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [X] T026 [US2] Update manifestation contract and examples in `src/public-contract.ts`, `specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md`, and `specs/008-recipient-dfe-mvp/quickstart.md`

**Checkpoint**: At this point, User Stories 1 and 2 should both work independently.

---

## Phase 5: User Story 3 - Acompanhar limites operacionais e continuidade do fluxo do destinatario (Priority: P3)

**Goal**: Tornar explícitos os limites de escopo, dependências externas e estados operacionais do slice do destinatário.

**Independent Test**: Validar que distribuição e manifestação distinguem lote vazio, rejeição funcional, dependência externa, indisponibilidade e backlog futuro sem ambiguidade.

### Tests for User Story 3 ⚠️

- [X] T027 [P] [US3] Add recipient boundary contract coverage in `tests/contract/root-contract-boundary.test.ts`
- [X] T028 [P] [US3] Add integration coverage for unsupported scope, service-unavailable, usage-error, and dependency-limited outcomes in `tests/integration/recipient-operational-boundary.test.ts`
- [X] T029 [P] [US3] Add unit coverage for recipient coverage boundary helpers in `tests/unit/recipient-coverage-boundary.test.ts`

### Implementation for User Story 3

- [X] T030 [P] [US3] Implement recipient coverage boundary helpers in `src/canonical/recipient/recipient-coverage-boundary.ts`
- [X] T031 [P] [US3] Implement no-new-documents, backoff, consumption-limit, and service-unavailable mapping in `src/canonical/recipient/distribute-recipient-dfe.ts`
- [X] T032 [US3] Surface explicit unsupported-scope, dependency, and usage-error outcomes in `src/canonical/recipient/manifest-recipient-operation.ts` and `src/canonical/recipient/recipient-distribution-outcome.ts`
- [X] T033 [US3] Update boundary documentation in `src/public-contract.ts`, `docs/manifestacao-destinatario/capacidades-sdk.md`, and `specs/008-recipient-dfe-mvp/quickstart.md`
- [X] T034 [US3] Update tarball and package-boundary regression coverage in `tests/integration/package-tarball-smoke.test.ts` and `tests/contract/package-contract-docs.test.ts`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, provenance, and package-level validation across all stories.

- [X] T035 [P] Update recipient feature provenance notes in `docs/_meta/source-registry.md` and `specs/008-recipient-dfe-mvp/research.md`
- [X] T036 [P] Update package-level recipient documentation in `README.md`
- [X] T037 Run focused recipient quickstart and package validation commands from `specs/008-recipient-dfe-mvp/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational completion and is the MVP.
- **User Story 2 (P2)**: Can start after Foundational completion; reuses shared transport and signing work but remains independently testable from US1.
- **User Story 3 (P3)**: Can start after Foundational completion; builds on the observable outcomes of US1 and US2 while remaining independently testable.

### Within Each User Story

- Tests for behavioral and public contract changes MUST be written and fail before implementation.
- Shared fixtures must exist before the implementation tasks that consume them.
- Result models and validators come before facade wiring.
- Root export wiring happens after core behavior is implemented.
- Story-specific docs and contract notes finish the story before moving on.

### Parallel Opportunities

- `T002` and `T003` can run in parallel.
- `T005`, `T006`, and `T008` can run in parallel within Phase 2.
- In US1, `T009`, `T010`, and `T011` can run in parallel; `T012`, `T013`, and `T014` can run in parallel.
- In US2, `T018`, `T019`, and `T020` can run in parallel; `T021`, `T022`, and `T023` can run in parallel.
- In US3, `T027`, `T028`, and `T029` can run in parallel; `T030` and `T031` can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch all User Story 1 tests together:
Task: "Add root recipient distribution contract coverage in tests/contract/root-recipient-dfe-facade.test.ts"
Task: "Add distribution integration coverage for success and empty results in tests/integration/distribute-recipient-dfe.test.ts"
Task: "Add distribution result mapping unit coverage in tests/unit/recipient-distribution-results.test.ts"

# Launch the shared US1 modeling work together:
Task: "Add distNSU integration fixtures in tests/fixtures/recipient/distribution-distnsu-success.json and tests/fixtures/recipient/distribution-distnsu-empty.json"
Task: "Implement recipient document envelopes in src/canonical/recipient/recipient-document-envelope.ts"
Task: "Implement recipient distribution outcome and cursor mapping in src/canonical/recipient/recipient-distribution-outcome.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Test User Story 1 independently.
5. Demo or publish the MVP if ready.

### Incremental Delivery

1. Complete Setup + Foundational → foundation ready.
2. Add User Story 1 → test independently → demo the first recipient distribution MVP.
3. Add User Story 2 → test independently → demo recipient manifestation support.
4. Add User Story 3 → test independently → demo explicit boundary and operational limit handling.
5. Finish Polish → run package-wide validation.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together.
2. Once Foundational is complete:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Merge each story after its independent checkpoint passes.

---

## Notes

- [P] tasks = different files, no dependencies.
- [US1], [US2], and [US3] labels map tasks to user stories for traceability.
- Each user story should be independently completable and testable.
- Validate failing tests before implementation.
- Prefer additive changes to the root contract and package surface.
- Keep production, `consNSU`, `consChNFe`, EPEC, and generic events outside this slice.

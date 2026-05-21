# Tasks: NFe State Operations

**Input**: Design documents from `/specs/020-nfe-state-operations/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Este slice altera comportamento observavel, contratos operacionais e superficie publica root. Por isso, tarefas de teste de contrato, integracao e unidade sao obrigatorias antes da implementacao de cada comportamento relevante.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Alinhar o contexto ativo da feature, os artefatos de planejamento e a base de fixtures que o slice vai reutilizar.

- [x] T001 Confirm active feature context and quickstart commands in specs/020-nfe-state-operations/quickstart.md
- [x] T002 Inventory existing operational fixtures and identify missing state/maintenance cases in tests/fixtures/nfe-operational/
- [x] T003 [P] Review public contract and planning boundaries for task traceability in specs/020-nfe-state-operations/contracts/public-nfe-state-operations-facade.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Definir o modelo compartilhado de estado/evidencia e preparar as bases que bloqueiam todas as user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create shared operational-state domain module in src/canonical/nfe/operational-state.ts
- [x] T005 [P] Extend shared operational contracts for state, evidence, transition outcome, and boundaries in src/canonical/nfe/contracts.ts
- [x] T006 [P] Add unit coverage for shared operational-state mapping and boundary semantics in tests/unit/nfe-operational-state.test.ts
- [x] T007 Update reusable maintenance mapping helpers to emit shared state metadata in src/canonical/nfe/maintenance-outcome.ts
- [x] T008 Align root package contract metadata with the new additive state model in src/public-contract.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Consultar o estado operacional de uma NF-e sem interpretar XML bruto (Priority: P1) 🎯 MVP

**Goal**: Entregar uma leitura estruturada do estado operacional por chave de acesso, com protocolo, situacao, pendencia e evidencias reutilizando a consulta oficial existente.

**Independent Test**: Um integrador consegue usar `queryNFeDocumentSituation` via import raiz e receber um resultado unico que diferencie estado concluido, pendente, indisponivel ou inconclusivo sem usar `nRec` nem inspecionar XML bruto.

### Tests for User Story 1 ⚠️

- [x] T009 [P] [US1] Expand root export contract coverage for query-facing additive types in tests/contract/root-nfe-operational-facade.test.ts
- [x] T010 [P] [US1] Add integration scenarios for authorized, rejected, canceled, inutilized, pending, unavailable, and inconclusive access-key lookups in tests/integration/query-nfe-document-situation.test.ts
- [x] T011 [P] [US1] Add unit coverage for document-situation state/evidence mapping across all supported query classifications in tests/unit/nfe-operational-query-results.test.ts

### Implementation for User Story 1

- [x] T012 [P] [US1] Add or update document-situation SOAP fixtures for authorized, rejected, canceled, inutilized, pending, unavailable, and inconclusive cases in tests/fixtures/nfe-operational/document-situation/
- [x] T013 [US1] Refactor document-situation transport mapping to emit shared operational state and evidence in src/canonical/nfe/query-nfe-document-situation.ts
- [x] T014 [US1] Align facade-level query orchestration with the shared document-state contract in src/canonical/facade/query-nfe-document-situation.ts
- [x] T015 [US1] Export the additive query state surface from the root package in src/canonical/facade/index.ts and src/index.ts
- [x] T016 [US1] Update README usage and runtime boundary notes for access-key-only state queries in README.md

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Executar manutencoes pos-autorizacao com leitura consistente de estado (Priority: P2)

**Goal**: Fazer cancelamento, carta de correcao e inutilizacao devolverem resultados reconciliaveis com a mesma leitura operacional introduzida em US1.

**Independent Test**: Um integrador consegue executar uma manutencao suportada e receber um resultado que preserve classificacao, evidencias e estado atualizado de forma coerente com a consulta do documento.

### Tests for User Story 2 ⚠️

- [x] T017 [P] [US2] Expand maintenance result unit coverage for shared updated-state semantics in tests/unit/nfe-operational-maintenance-results.test.ts
- [x] T018 [P] [US2] Add cancellation state-reconciliation assertions in tests/integration/cancel-nfe.test.ts
- [x] T019 [P] [US2] Add correction-letter state-reconciliation assertions in tests/integration/submit-nfe-correction-letter.test.ts
- [x] T020 [P] [US2] Add inutilization state-reconciliation assertions in tests/integration/submit-nfe-inutilization.test.ts

### Implementation for User Story 2

- [x] T021 [P] [US2] Add or update maintenance SOAP fixtures for success and explicit failure transitions in tests/fixtures/nfe-operational/maintenance/
- [x] T022 [US2] Update cancellation maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/cancel-nfe.ts and src/canonical/facade/cancel-nfe.ts
- [x] T023 [US2] Update correction-letter maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/submit-nfe-correction-letter.ts and src/canonical/facade/submit-nfe-correction-letter.ts
- [x] T024 [US2] Update inutilization maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/submit-nfe-inutilization.ts and src/canonical/facade/submit-nfe-inutilization.ts
- [x] T025 [US2] Export additive maintenance state types from the root package in src/canonical/facade/index.ts and src/index.ts

**Checkpoint**: At this point, User Stories 1 and 2 should both work independently

---

## Phase 5: User Story 3 - Tornar as fronteiras da reconciliacao explicitamente auditaveis (Priority: P3)

**Goal**: Tornar as boundaries do slice explicitas em contrato, metadata publica e documentacao para evitar promessas silenciosas de polling, `nRec`, multi-documento ou variacoes dominantes por `UF`.

**Independent Test**: Um revisor consegue localizar nas docs e no contrato publico o que esta coberto pelo slice e o que permanece explicitamente fora do escopo.

### Tests for User Story 3 ⚠️

- [x] T026 [P] [US3] Add root contract assertions that operational boundaries remain additive and do not expose internal modules in tests/contract/root-nfe-operational-facade.test.ts
- [x] T027 [P] [US3] Add unit coverage for unsupported scope and explicit operational boundaries in tests/unit/nfe-operational-state.test.ts and tests/unit/nfe-operational-maintenance-results.test.ts

### Implementation for User Story 3

- [x] T028 [US3] Publish explicit operational boundary metadata in src/canonical/nfe/contracts.ts and src/public-contract.ts
- [x] T029 [US3] Update public feature contract boundaries in specs/020-nfe-state-operations/contracts/public-nfe-state-operations-facade.md
- [x] T030 [US3] Update implementation guidance and deferred-scope notes in specs/020-nfe-state-operations/quickstart.md and specs/020-nfe-state-operations/research.md
- [x] T031 [US3] Document explicit non-goals and future follow-ups for the slice in README.md and specs/020-nfe-state-operations/spec.md
- [x] T032 [US3] Update roadmap and RTM traceability for feature 020 in docs/roadmap/rtm-cobertura-oficial.md and docs/roadmap/specs-pendencias-abertas.md

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Consolidar o slice, remover inconsistencias entre stories e fechar os gates do pacote.

- [x] T033 [P] Normalize shared type names, exports, and inline documentation across src/canonical/nfe/contracts.ts, src/public-contract.ts, and src/index.ts
- [x] T034 [P] Reconcile quickstart, plan, and task references after implementation in specs/020-nfe-state-operations/plan.md, specs/020-nfe-state-operations/quickstart.md, and specs/020-nfe-state-operations/tasks.md
- [x] T035 Run focused slice validation commands for query and maintenance flows in tests/contract/root-nfe-operational-facade.test.ts, tests/integration/query-nfe-document-situation.test.ts, tests/integration/cancel-nfe.test.ts, tests/integration/submit-nfe-correction-letter.test.ts, tests/integration/submit-nfe-inutilization.test.ts, tests/unit/nfe-operational-query-results.test.ts, tests/unit/nfe-operational-maintenance-results.test.ts, and tests/unit/nfe-operational-state.test.ts
- [x] T036 Run full package validation gates from package.json in package.json

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion - MVP slice
- **User Story 2 (Phase 4)**: Depends on Foundational completion and reuses the shared state model from US1, but remains independently testable through maintenance-specific flows
- **User Story 3 (Phase 5)**: Depends on Foundational completion and should land after the shared contract vocabulary is stable from US1/US2
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: First delivery target after Foundational; no dependency on other user stories
- **US2 (P2)**: Depends on the shared state/evidence model introduced in Foundational and validated by US1
- **US3 (P3)**: Depends on the final contract vocabulary from US1 and US2 to document stable boundaries without drift

### Within Each User Story

- Tests for behavioral and public contract changes MUST be written and fail before implementation
- Fixtures should be updated before transport/result mapping depends on them
- Shared domain contracts before facade wiring
- Facade wiring before root exports and documentation
- Story validation should run before moving to the next priority

### Parallel Opportunities

- `T002` and `T003` can run in parallel during setup
- `T005` and `T006` can run in parallel after `T004`
- In US1, `T009`, `T010`, and `T011` can run in parallel; `T012` can proceed while tests are being written
- In US2, `T017` through `T020` can run in parallel; maintenance flow updates split cleanly by operation after `T021`
- In US3, `T026` and `T027` can run in parallel before documentation alignment tasks; `T032` follows once boundary wording is stable

---

## Parallel Example: User Story 1

```bash
# Launch US1 test authoring in parallel:
Task: "Expand root export contract coverage for query-facing additive types in tests/contract/root-nfe-operational-facade.test.ts"
Task: "Add integration scenarios for authorized, rejected, canceled, inutilized, pending, unavailable, and inconclusive access-key lookups in tests/integration/query-nfe-document-situation.test.ts"
Task: "Add unit coverage for document-situation state/evidence mapping across all supported query classifications in tests/unit/nfe-operational-query-results.test.ts"

# Then prepare shared fixtures alongside implementation:
Task: "Add or update document-situation SOAP fixtures for authorized, rejected, canceled, inutilized, pending, unavailable, and inconclusive cases in tests/fixtures/nfe-operational/document-situation/"
Task: "Refactor document-situation transport mapping to emit shared operational state and evidence in src/canonical/nfe/query-nfe-document-situation.ts"
```

---

## Parallel Example: User Story 2

```bash
# Launch maintenance test updates in parallel:
Task: "Add cancellation state-reconciliation assertions in tests/integration/cancel-nfe.test.ts"
Task: "Add correction-letter state-reconciliation assertions in tests/integration/submit-nfe-correction-letter.test.ts"
Task: "Add inutilization state-reconciliation assertions in tests/integration/submit-nfe-inutilization.test.ts"

# Then split operation-specific implementation by module:
Task: "Update cancellation maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/cancel-nfe.ts and src/canonical/facade/cancel-nfe.ts"
Task: "Update correction-letter maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/submit-nfe-correction-letter.ts and src/canonical/facade/submit-nfe-correction-letter.ts"
Task: "Update inutilization maintenance flow to emit shared state/evidence outcomes in src/canonical/nfe/submit-nfe-inutilization.ts and src/canonical/facade/submit-nfe-inutilization.ts"
```

---

## Parallel Example: User Story 3

```bash
# Boundary assertions can be prepared together:
Task: "Add root contract assertions that operational boundaries remain additive and do not expose internal modules in tests/contract/root-nfe-operational-facade.test.ts"
Task: "Add unit coverage for unsupported scope and explicit operational boundaries in tests/unit/nfe-operational-state.test.ts and tests/unit/nfe-operational-maintenance-results.test.ts"

# Then finish documentation and contract alignment:
Task: "Publish explicit operational boundary metadata in src/canonical/nfe/contracts.ts and src/public-contract.ts"
Task: "Update public feature contract boundaries in specs/020-nfe-state-operations/contracts/public-nfe-state-operations-facade.md"
Task: "Update roadmap and RTM traceability for feature 020 in docs/roadmap/rtm-cobertura-oficial.md and docs/roadmap/specs-pendencias-abertas.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate `queryNFeDocumentSituation` independently with contract, integration, and unit tests
5. Stop for review before maintenance flows

### Incremental Delivery

1. Setup + Foundational establish shared state/evidence vocabulary
2. Deliver US1 as the first promotable runtime increment
3. Deliver US2 by reconciling maintenance results onto the same model
4. Deliver US3 by freezing explicit boundaries and documentation
5. Run polish and full package gates before merging

### Parallel Team Strategy

1. One developer prepares the shared operational-state model and contracts
2. After Foundational completes:
   - Developer A: US1 query flow and tests
   - Developer B: US2 maintenance flows and tests
   - Developer C: US3 contract and documentation boundaries
3. Rejoin for package validation and docs alignment

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- Story labels map each task back to the clarified spec user stories
- Tests are intentionally first-class because this slice changes observable runtime behavior
- `SPECIFY_FEATURE=020-nfe-state-operations` should be used for Spec Kit scripts while work remains on `main`
- Keep `nRec`, generic polling, multi-document reconciliation, local persistence, and dominant `UF` variance out of implementation unless the spec is explicitly expanded

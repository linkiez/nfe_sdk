# Tasks: Recipient Continuity

**Input**: Design documents from `/specs/022-recipient-continuity/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: This feature changes public runtime behavior and root exports, so contract, integration, and unit tests are required before implementation for each affected story.

**Organization**: Tasks are grouped by user story so each increment can be implemented and validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare fixture locations and task-facing validation entrypoints for the new recipient continuity slice.

- [x] T001 Create the recipient continuity fixture inventory in `tests/fixtures/recipient/` and reserve filenames for summary, full-document, no-new-documents, and dependency-limited scenarios.
- [x] T002 [P] Create the new task-facing test file skeletons in `tests/contract/root-recipient-continuity-facade.test.ts`, `tests/integration/recipient-continuity.test.ts`, and `tests/unit/canonical/recipient/retrieve-recipient-document.test.ts`.
- [x] T003 [P] Align `specs/022-recipient-continuity/quickstart.md` with the final implementation validation flow so it names the focused recipient continuity tests and package gates explicitly.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared recipient continuity models, boundary rules, and root wiring that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Update shared recipient continuity types and classifications in `src/canonical/recipient/recipient-shared.ts` to model `continuation`, retrieval requests, retrieval outcomes, and additive boundary states.
- [x] T005 [P] Add shared follow-up matching and continuity helper logic in `src/canonical/recipient/recipient-follow-up.ts` for cursor advancement, next-action selection, and target document matching.
- [x] T006 [P] Update distributed envelope parsing support in `src/canonical/recipient/recipient-document-envelope.ts` and `src/canonical/recipient/recipient-distribution-outcome.ts` so downstream stories can detect follow-up candidates consistently.
- [x] T007 Wire the new recipient continuity modules internally through `src/canonical/recipient/index.ts` so foundational helpers are available without changing the root public surface yet.
- [x] T008 Update baseline public boundary text in `src/public-contract.ts` to describe the active continuity slice and its deferred boundaries before story-specific behavior lands.

**Checkpoint**: Shared continuity types, helpers, and root wiring are ready for story implementation.

---

## Phase 3: User Story 1 - Retomar a distribuicao do destinatario com continuidade observavel (Priority: P1) 🎯 MVP

**Goal**: Enriquecer `distributeRecipientDFe` para orientar explicitamente a continuidade do fluxo do destinatario a partir de `distNSU`.

**Independent Test**: Executar `distributeRecipientDFe` com fixtures homologadas de lote com documentos e de lote sem novidades e verificar `continuation.nextAction`, `cursorAdvanced`, `recommendedBackoffMs` e a manutencao das classificacoes ja publicadas.

### Tests for User Story 1 ⚠️

- [x] T009 [P] [US1] Write a failing contract test for additive continuity fields on `distributeRecipientDFe` in `tests/contract/root-recipient-continuity-facade.test.ts`.
- [x] T010 [P] [US1] Write a failing integration test for continuation over `distNSU` using homologation fixtures in `tests/integration/recipient-continuity.test.ts`.
- [x] T011 [P] [US1] Add fixture coverage for summary and no-new-documents continuation scenarios in `tests/fixtures/recipient/distnsu-summary-after-manifestation.xml` and `tests/fixtures/recipient/distnsu-no-new-documents.xml`.

### Implementation for User Story 1

- [x] T012 [US1] Implement additive continuation state derivation in `src/canonical/recipient/recipient-distribution-outcome.ts`.
- [x] T013 [US1] Update `src/canonical/recipient/distribute-recipient-dfe.ts` to return the new continuation block while preserving existing distribution behavior and boundaries.
- [x] T014 [US1] Update recipient-facing distribution docs and examples in `specs/022-recipient-continuity/contracts/public-recipient-continuity-facade.md` and `specs/022-recipient-continuity/quickstart.md` to reflect the final continuation fields.

**Checkpoint**: User Story 1 should now be independently functional and testable as the MVP.

---

## Phase 4: User Story 2 - Recuperar o documento posterior ao evento do destinatario com boundary explicita (Priority: P2)

**Goal**: Expor uma facade root dedicada para recuperar o documento liberado em etapa posterior, usando a continuidade da distribuicao sem acoplar o download ao registro do evento.

**Independent Test**: Executar `retrieveRecipientDocument` com um cursor conhecido e um `accessKey` esperado, usando fixture homologada com documento liberado e fixture de pendencia, e verificar `matchedDocument`, `classification` e `distributionOutcome`.

### Tests for User Story 2 ⚠️

- [x] T015 [P] [US2] Write a failing contract test for the new `retrieveRecipientDocument` root facade in `tests/contract/root-recipient-continuity-facade.test.ts`.
- [x] T016 [P] [US2] Write a failing integration test for successful and pending follow-up retrieval in `tests/integration/recipient-continuity.test.ts`.
- [x] T017 [P] [US2] Write a failing unit test for target matching and retrieval classifications in `tests/unit/canonical/recipient/retrieve-recipient-document.test.ts`.
- [x] T018 [P] [US2] Add fixture coverage for full-document release and dependency-limited retrieval in `tests/fixtures/recipient/distnsu-full-document-released.xml` and `tests/fixtures/recipient/distnsu-dependency-limited.xml`.

### Implementation for User Story 2

- [x] T019 [US2] Implement the recipient follow-up retrieval runtime in `src/canonical/recipient/retrieve-recipient-document.ts` using the shared continuation helpers and distribution evidence.
- [x] T020 [US2] Add the root facade wrapper in `src/canonical/facade/retrieve-recipient-document.ts` and export it through `src/canonical/facade/index.ts`, `src/canonical/index.ts`, and `src/index.ts`.
- [x] T021 [US2] Update `src/public-contract.ts` and `specs/022-recipient-continuity/contracts/public-recipient-continuity-facade.md` to publish `retrieveRecipientDocument` and preserve the separation from `manifestRecipientOperation`.
- [x] T021A [US2] Update shared root contract coverage in `tests/contract/root-entrypoint.test.ts`, `tests/contract/package-contract-docs.test.ts`, and `tests/contract/root-contract-boundary.test.ts` for the additive recipient continuity surface.
- [x] T021B [US2] Update tarball smoke coverage in `tests/integration/package-tarball-smoke.test.ts` so the packed package validates the new recipient continuity facade and published declarations.

**Checkpoint**: User Stories 1 and 2 should now work independently, with explicit separation between manifestation and follow-up retrieval.

---

## Phase 5: User Story 3 - Tornar explicitas as boundaries de continuidade do destinatario (Priority: P3)

**Goal**: Consolidar as boundaries publicas e diagnosticas do slice para que `consNSU`, polling agressivo, producao e automacao assistida continuem claramente fora do contrato.

**Independent Test**: Revisar o contrato publico, o quickstart e os testes de boundary para confirmar que cenarios fora do recorte retornam classificacoes explicitas e que a documentacao nao implica suporte a superficies deferidas.

### Tests for User Story 3 ⚠️

- [x] T022 [P] [US3] Add contract assertions for deferred continuity boundaries in `tests/contract/root-recipient-continuity-facade.test.ts`.
- [x] T023 [P] [US3] Add integration assertions for unsupported-scope, dependency-limited, and no-document boundary outcomes in `tests/integration/recipient-continuity.test.ts`.

### Implementation for User Story 3

- [x] T024 [US3] Tighten deferred boundary messaging and classification text in `src/canonical/recipient/recipient-follow-up.ts`, `src/canonical/recipient/recipient-shared.ts`, and `src/public-contract.ts`.
- [x] T025 [US3] Update feature-facing boundary documentation in `README.md`, `specs/022-recipient-continuity/spec.md`, and `specs/022-recipient-continuity/quickstart.md` to keep `consNSU`, `consChNFe`, producao, polling agressivo, and assisted backoffice out of scope.

**Checkpoint**: All user stories should now be independently functional, documented, and boundary-safe.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final package hardening, consistency checks, and end-to-end validation across all stories.

- [x] T026 [P] Update repository evidence and coverage references in `src/public-contract.ts` and `docs/roadmap/coverage-matrix.md` for the new recipient continuity facade status.
- [x] T027 [P] Reconcile implementation notes in `docs/roadmap/specs-implementacao.md` and `docs/roadmap/specs-pendencias-abertas.md` after the slice is implemented.
- [x] T028 Run the recipient continuity quickstart and package validation commands from `specs/022-recipient-continuity/quickstart.md`, then record any necessary doc adjustments in `specs/022-recipient-continuity/quickstart.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on Foundational completion and can proceed after the shared continuity models are in place.
- **User Story 3 (Phase 5)**: Depends on the public behavior from User Stories 1 and 2 being available for boundary hardening.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1**: No dependency on other user stories after Foundational; this is the MVP.
- **US2**: Reuses the shared continuity models from Phase 2 and the same recipient distribution evidence, but remains independently testable from its own facade and fixtures.
- **US3**: Depends on the public contract shape delivered by US1 and US2 so it can harden and document boundaries without reopening implementation scope.

### Within Each User Story

- Write tests first and confirm they fail before implementation.
- Add or update fixtures before wiring runtime behavior that depends on them.
- Implement runtime logic before root export wiring when adding new surface area.
- Update docs and contract text after behavior stabilizes, then rerun focused validation.

### Parallel Opportunities

- `T002` and `T003` can run in parallel in Setup.
- `T005` and `T006` can run in parallel in Foundational.
- In US1, `T009`, `T010`, and `T011` can run in parallel.
- In US2, `T015`, `T016`, `T017`, and `T018` can run in parallel.
- In US2, `T021A` and `T021B` can run in parallel after the root facade is wired.
- In US3, `T022` and `T023` can run in parallel.
- In Polish, `T026` and `T027` can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch the US1 tests together first:
Task: "Write a failing contract test for additive continuity fields in tests/contract/root-recipient-continuity-facade.test.ts"
Task: "Write a failing integration test for continuation over distNSU in tests/integration/recipient-continuity.test.ts"

# Prepare the fixture work in parallel:
Task: "Add summary and no-new-documents continuation fixtures in tests/fixtures/recipient/"
```

## Parallel Example: User Story 2

```bash
# Launch the US2 test coverage together first:
Task: "Write a failing contract test for retrieveRecipientDocument in tests/contract/root-recipient-continuity-facade.test.ts"
Task: "Write a failing integration test for successful and pending follow-up retrieval in tests/integration/recipient-continuity.test.ts"
Task: "Write a failing unit test for retrieval classifications in tests/unit/canonical/recipient/retrieve-recipient-document.test.ts"

# Prepare follow-up fixtures in parallel:
Task: "Add full-document and dependency-limited recipient fixtures in tests/fixtures/recipient/"
```

## Parallel Example: User Story 3

```bash
# Harden boundaries in parallel once behavior exists:
Task: "Add contract assertions for deferred continuity boundaries in tests/contract/root-recipient-continuity-facade.test.ts"
Task: "Add integration assertions for unsupported-scope and dependency-limited outcomes in tests/integration/recipient-continuity.test.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Run the focused US1 tests and confirm additive continuation behavior is stable.

### Incremental Delivery

1. Finish Setup + Foundational.
2. Deliver US1 and validate the enriched `distributeRecipientDFe` contract.
3. Deliver US2 and validate `retrieveRecipientDocument` independently.
4. Deliver US3 and validate the final public boundaries.
5. Run Polish tasks and the full package gates.

### Suggested MVP Scope

The recommended MVP is **User Story 1 only**. It closes the most important runtime gap from `RFL-003` by making continuity over `distNSU` explicit without expanding the public query surface.

---

## Notes

- All tasks use exact file paths and follow the required checklist format.
- `[P]` marks tasks that can be worked in parallel without file conflicts.
- User stories remain traceable and independently testable.
- The task plan intentionally keeps `consNSU`, `consChNFe`, producao, polling agressivo, and assisted backoffice flows outside this slice.

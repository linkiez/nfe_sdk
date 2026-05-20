---
description: "Task list for the initial digital signing slice"
---

# Tasks: Add Digital Signing

**Input**: Design documents from `/specs/005-add-digital-signing/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-signing-facade.md, quickstart.md

**Tests**: This feature changes the published package surface, introduces XML digital signing behavior, and adds certificate-source handling. Contract, integration, unit, and fixture-backed regression tests are required.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the unsigned-document fixture and test scaffolding for the first digital-signing slice.

- [x] T001 Create the unsigned signing fixture scaffold in `tests/fixtures/signing/nfe-unsigned.xml`
- [x] T002 [P] Create the root signing facade contract test scaffold in `tests/contract/root-signing-facade.test.ts`
- [x] T003 [P] Create the signed NFe integration test scaffold in `tests/integration/sign-nfe-xml.test.ts`
- [x] T004 [P] Create the signing-context integration test scaffold in `tests/integration/create-signing-context.test.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the shared signing boundaries that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T005 Establish the signing module boundaries and barrel wiring in `src/canonical/signing/index.ts` and `src/canonical/facade/index.ts`
- [x] T006 [P] Create signing contracts and error primitives in `src/canonical/signing/contracts.ts` and `src/canonical/signing/errors.ts`
- [x] T007 [P] Add reusable signing fixture loaders and XML assertion helpers in `tests/fixtures/signing/load-signing-fixture.ts` and `tests/config/xml-signature-assertions.ts`
- [x] T008 [P] Create reusable A1 test fixture sources in `tests/fixtures/signing/test-a1-fixture.ts` and `tests/fixtures/signing/invalid-a1-fixture.ts`
- [x] T009 Wire the selected PKCS#12 and XMLDSig dependencies plus build baseline in `package.json` and `tsconfig.build.json`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Assinar uma NF-e pronta para transmissao (Priority: P1) 🎯 MVP

**Goal**: Let integrators sign an already serialized `NFe` through the root package surface, receive verified signed XML back, and keep `enviNFe` limited to transport-envelope behavior.

**Independent Test**: Run the root signing contract test, the signed-`NFe` integration test, the `enviNFe` transport-envelope boundary regression, and the local verification unit test to verify that a supported `NFe` can be signed and verified without manual XMLDSig assembly while `enviNFe` remains an unsigned transport wrapper.

### Tests for User Story 1 ⚠️

- [x] T010 [P] [US1] Make the root signing facade contract fail against the current root export in `tests/contract/root-signing-facade.test.ts`
- [x] T011 [P] [US1] Make the signed `NFe` regression flow fail in `tests/integration/sign-nfe-xml.test.ts`
- [x] T012 [P] [US1] Make the `enviNFe` transport-envelope boundary regression fail in `tests/integration/envi-nfe-envelope-boundary.test.ts`
- [x] T013 [P] [US1] Make local signature verification fail in `tests/unit/signature-verification.test.ts`

### Implementation for User Story 1

- [x] T014 [P] [US1] Add the owned signed-`NFe` regression fixture expectations in `tests/fixtures/signing/nfe-signed-structure.json` and `tests/config/xml-signature-assertions.ts`
- [x] T015 [P] [US1] Implement minimal in-memory signing-context creation in `src/canonical/signing/create-signing-context.ts` and `src/canonical/signing/a1-memory-source.ts`
- [x] T016 [P] [US1] Implement XML signing and local verification in `src/canonical/signing/sign-nfe-xml.ts`, `src/canonical/signing/xml-signature.ts`, and `src/canonical/signing/verify-signed-nfe-xml.ts`
- [x] T017 [US1] Expose the signing root facade for signed `NFe` XML in `src/canonical/facade/create-signing-context.ts`, `src/canonical/facade/sign-nfe-xml.ts`, `src/canonical/index.ts`, and `src/index.ts`
- [x] T018 [US1] Document the `NFe`-only signing flow and `enviNFe` transport-envelope guarantee in `README.md` and `specs/005-add-digital-signing/contracts/public-signing-facade.md`

**Checkpoint**: User Story 1 should allow integrators to create a signing context from in-memory A1 material, receive verified signed XML for `NFe` from the root import, and prove that `enviNFe` remains only the transport envelope for that signed document.

---

## Phase 4: User Story 2 - Reutilizar um certificado A1 sem abrir detalhes criptograficos ao consumidor (Priority: P2)

**Goal**: Let integrators prepare and reuse a signing context from both supported A1 input modes with explicit failures for invalid inputs.

**Independent Test**: Run the signing-context integration test and the invalid-input unit test to verify that both file-path and in-memory A1 sources work and fail clearly when incompatible.

### Tests for User Story 2 ⚠️

- [x] T019 [P] [US2] Make reusable signing-context flows fail for file-path and in-memory sources in `tests/integration/create-signing-context.test.ts`
- [x] T020 [P] [US2] Make invalid certificate-source failures fail in `tests/unit/signing-context-inputs.test.ts`

### Implementation for User Story 2

- [x] T021 [P] [US2] Implement file-path source normalization and source-shape parsing in `src/canonical/signing/a1-file-source.ts` and `src/canonical/signing/source-normalization.ts`
- [x] T022 [P] [US2] Enhance signing-context creation diagnostics, source metadata, and failure handling in `src/canonical/signing/create-signing-context.ts` and `src/canonical/signing/errors.ts`
- [x] T023 [US2] Publish the two supported A1 input modes and reuse guarantees in `src/public-contract.ts` and `specs/005-add-digital-signing/quickstart.md`

**Checkpoint**: User Stories 1 and 2 should now let integrators prepare a reusable signing context from both supported A1 input modes and sign `NFe` XML through the root import.

---

## Phase 5: User Story 3 - Deixar limites e lacunas da assinatura inicial claros para as proximas fases (Priority: P3)

**Goal**: Make the scope limits, deferred capabilities, and provenance of the first signing slice explicit for follow-up phases.

**Independent Test**: Run package-contract documentation checks and signing-boundary unit checks to verify that the repo clearly states what is supported now and what remains deferred.

### Tests for User Story 3 ⚠️

- [x] T024 [P] [US3] Make signing-scope documentation checks fail in `tests/contract/package-contract-docs.test.ts` and `tests/contract/root-contract-boundary.test.ts`
- [x] T025 [P] [US3] Make signing coverage-boundary regressions fail in `tests/unit/signing-coverage-boundary.test.ts`

### Implementation for User Story 3

- [x] T026 [P] [US3] Implement signing coverage boundaries and deferred signing gaps in `src/canonical/signing/coverage-boundary.ts` and `src/canonical/signing/deferred-signing-gaps.ts`
- [x] T027 [US3] Update root package contract consistency for signing scope in `src/public-contract.ts`, `README.md`, and `specs/005-add-digital-signing/contracts/public-signing-facade.md`
- [x] T028 [US3] Record provenance, `enviNFe` boundary, and deferred follow-up notes in `specs/005-add-digital-signing/research.md`, `specs/005-add-digital-signing/data-model.md`, and `specs/005-add-digital-signing/quickstart.md`

**Checkpoint**: All user stories should now be independently functional and the repository should clearly express the scope and limits of the initial signing slice.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency and validation work affecting multiple stories.

- [x] T029 [P] Add sibling module documentation for the signing slice in `src/canonical/signing/contracts.doc.md`, `src/canonical/signing/create-signing-context.doc.md`, `src/canonical/signing/sign-nfe-xml.doc.md`, and `src/canonical/signing/coverage-boundary.doc.md`
- [x] T030 [P] Review tarball and root export consistency across `src/index.ts`, `package.json`, `tests/integration/package-tarball-smoke.test.ts`, and `specs/005-add-digital-signing/contracts/public-signing-facade.md`
- [x] T031 [P] Review feature-artifact coherence for the signing slice in `specs/005-add-digital-signing/tasks.md`, `specs/005-add-digital-signing/quickstart.md`, and `specs/005-add-digital-signing/research.md`
- [x] T032 Run the feature validation flow for `src/index.ts`, `src/canonical/signing/`, `tests/contract/root-signing-facade.test.ts`, `tests/integration/sign-nfe-xml.test.ts`, `tests/integration/envi-nfe-envelope-boundary.test.ts`, and `specs/005-add-digital-signing/quickstart.md` with `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run validate:tarball`

---

## Phase 7: Deferred Follow-up Backlog

**Purpose**: Convert the explicitly deferred signing boundaries of the first slice into concrete follow-up work for future features.

**Status**: These tasks are intentionally out of scope for the completed initial slice and remain open as roadmap candidates.

- [ ] T033 [US3] Define the next signing slice for `evento` XML coverage in `specs/005-add-digital-signing/spec.md`, `specs/005-add-digital-signing/plan.md`, and `specs/005-add-digital-signing/research.md`
- [ ] T034 [P] [US3] Define the next signing slice for `NFC-e` signing coverage and QR Code interaction boundaries in `specs/005-add-digital-signing/spec.md`, `specs/005-add-digital-signing/data-model.md`, and `specs/005-add-digital-signing/quickstart.md`
- [ ] T035 [P] [US3] Define how authorization transport, SOAP packaging, and signed-document submission should layer above the current root signing facade in `specs/005-add-digital-signing/plan.md`, `specs/005-add-digital-signing/contracts/public-signing-facade.md`, and `README.md`
- [ ] T036 [P] [US3] Define the deferred calculations for full access key coverage, `DV`, and `hashCSRT` in `specs/005-add-digital-signing/research.md`, `specs/005-add-digital-signing/data-model.md`, and `docs/ROADMAP.md`
- [ ] T037 [US3] Create the next feature spec entry for the first deferred signing expansion after the `NFe`-only slice in `specs/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all targeted user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP root signing flow for `NFe` XML while proving that `enviNFe` remains an unsigned transport envelope.
- **User Story 2 (P2)**: Starts after Foundational and expands the signing-context preparation flow to the two supported A1 input modes while preserving User Story 1 behavior.
- **User Story 3 (P3)**: Starts after Foundational and can proceed alongside or after User Story 2, provided the root signing surface and deferred-gap model are stable enough to document.

### Within Each User Story

- Tests for public contract, integration behavior, and boundary handling MUST be written and fail before implementation.
- Shared signing contracts must land before facade wiring.
- Signing and verification helpers must land before root exports are stabilized.
- Provenance and scope-limit notes must land before the final validation pass.

### Parallel Opportunities

- T002, T003, and T004 can run in parallel.
- T006, T007, and T008 can run in parallel.
- T010, T011, T012, and T013 can run in parallel.
- T014, T015, and T016 can run in parallel.
- T018 and T019 can run in parallel.
- T020 and T021 can run in parallel.
- T024 and T025 can run in parallel.
- T029, T030, and T031 can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch the root-signing regressions in parallel:
Task: "Make the signed NFe regression flow fail in tests/integration/sign-nfe-xml.test.ts"
Task: "Make the enviNFe transport-envelope boundary regression fail in tests/integration/envi-nfe-envelope-boundary.test.ts"
Task: "Make local signature verification fail in tests/unit/signature-verification.test.ts"

# Launch supporting implementation on separate files:
Task: "Add the owned signed-NFe regression fixture expectations for the US1 regression flow"
Task: "Implement minimal in-memory signing-context creation in src/canonical/signing/create-signing-context.ts and src/canonical/signing/a1-memory-source.ts"
Task: "Implement XML signing and local verification in src/canonical/signing/sign-nfe-xml.ts, src/canonical/signing/xml-signature.ts, and src/canonical/signing/verify-signed-nfe-xml.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. **STOP and VALIDATE**: Verify that a supported `NFe` XML can be signed and locally verified from the root import while `enviNFe` remains only the transport envelope.

### Incremental Delivery

1. Deliver the minimal root signing flow for `NFe`.
2. Expand signing-context creation to both public A1 input modes with explicit failures.
3. Add boundary documentation and deferred-gap tracking for follow-up signing phases.
4. Finish with cross-cutting validation and package-level consistency checks.

### Parallel Team Strategy

1. One contributor opens the signing flow and local verification modules under `src/canonical/signing/`.
2. One contributor builds the A1 source handling and fixture support under `src/canonical/signing/` and `tests/fixtures/signing/`.
3. One contributor maintains the public contract, provenance, and scope-limit docs in `src/public-contract.ts`, `README.md`, and `specs/005-add-digital-signing/`.
4. Finish with a shared review of `src/index.ts`, package metadata, tarball smoke coverage, the `enviNFe` transport boundary, and validation commands.

---

## Notes

- [P] tasks = different files, no incomplete dependency conflicts.
- [Story] labels map tasks to specific user stories for traceability.
- This feature changes public contract behavior and observable XML output, so tests are mandatory.
- The first signing slice remains limited to `NFe` from `PL_010c_NT2022_002v1.30`.
- `enviNFe` remains an unsigned transport envelope for the signed `NFe`; eventos, NFC-e, SOAP, autorizacao de uso, chave de acesso completa, DV, and `hashCSRT` remain deferred beyond this task list.

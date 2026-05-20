# Tasks: Implementação das Gaps do Roadmap Gap Audit (012)

**Input**: Design documents from `specs/012-implement-audit-gaps/`

**Branch**: `012-implement-audit-gaps`

**Plan**: [plan.md](./plan.md) | **Spec**: [spec.md](./spec.md) | **Contracts**:
[contracts/api-contract.md](./contracts/api-contract.md)

**Tests**: All new capabilities change public contracts and package exports — test tasks are
mandatory per CC-004.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: User story label (US1–US9)
- All new `.ts` modules require a companion `.doc.md` unless noted

## Path Conventions

Single-project repository. `src/canonical/` = handwritten layer. `src/types/`, `src/enums/`,
`src/interfaces/` = generated (no changes this feature). Test convention follows
plan.md: `tests/unit/canonical/{module}/`.

---

## Phase 1: Setup (Shared Scaffolding)

**Purpose**: Cross-story prerequisites that must exist before any user story implementation
begins.

**⚠️ CRITICAL**: Complete T001–T004 before starting any user story phase.

- [X] T001 Create `tests/fixtures/nfe/valid-access-key-vectors.json` with ≥5 MOC §2.2.6
      modulo-11 test vectors (key components + expected chNFe + cDV) to seed US1 tests
- [X] T002 [P] Add `UnknownUFError` class to `src/canonical/transport/errors.ts` (extends
      `TransportError`; thrown by US2 UF routing when an unrecognized UF code is supplied;
      follows existing module pattern in transport/errors.ts)
- [X] T003 Create `src/canonical/recipient/errors.ts` with `RecipientError` base and
      `InvalidManifestationTransitionError` class (thrown by US5 manifestation change when
      MOC §3.2.1.5 transition rules are violated; must follow T002 — separate file from T002)
- [X] T004 [P] Extend `GenericEventFamily` union in
      `src/canonical/generic-event/contracts.ts` with `'prorrogacao-icms'` variant (additive,
      non-breaking — prerequisite for US7 ICMS deferral)

**Checkpoint**: Shared error types and GenericEventFamily extension committed — US1–US9
implementation can begin.

---

## Phase 2: User Story 1 – Canonical NF-e Layer Complete (Priority: P1) 🎯 MVP

**Goal**: Implement correct access key calculation (GAP-001) and hashCSRT computation
(GAP-002) so every serialized NF-e is structurally valid.

**Independent Test**: Given the test vectors in `tests/fixtures/nfe/valid-access-key-vectors.json`,
run `npm test tests/unit/canonical/nfe/access-key.test.ts` — all modulo-11 vectors pass,
including fall-through rule (remainder 0 or 1 → cDV = 1).

### Tests for User Story 1 ⚠️

> **Write these tests FIRST and verify they FAIL (RED) before writing T007–T008.**

- [X] T005 [P] [US1] Write unit tests for modulo-11 access key in
      `tests/unit/canonical/nfe/access-key.test.ts` — cover: normal case, fall-through to 1,
      all-zero cNF, boundary cUF values; uses fixtures from T001
- [X] T006 [P] [US1] Write unit tests for hashCSRT in
      `tests/unit/canonical/nfe/hash-csrt.test.ts` — cover: SHA-1(CNPJ+idCSRT+CSRT) produces
      correct hex output, absent CSRT returns undefined

### Implementation for User Story 1

- [X] T007 [US1] Implement `src/canonical/nfe/access-key.ts` — pure modulo-11 algorithm
      per MOC §2.2.6 (returns `AccessKeyResult` with `chNFe: string` and `cDV: string`); add
      companion `src/canonical/nfe/access-key.doc.md`
- [X] T008 [P] [US1] Implement `src/canonical/nfe/hash-csrt.ts` — SHA-1 via Node.js
      built-in `crypto` module per MOC §2.2.10 (returns hex string or undefined when CSRT
      absent); add companion `src/canonical/nfe/hash-csrt.doc.md`
- [X] T009 [US1] Implement `computeNFeAccessKey` facade in
      `src/canonical/facade/compute-nfe-access-key.ts` and `computeHashCSRT` facade in
      `src/canonical/facade/compute-hash-csrt.ts`; add `.doc.md` for each
- [X] T010 [US1] Register `computeNFeAccessKey` and `computeHashCSRT` in
      `src/canonical/facade/index.ts` and re-export from `src/index.ts`

**Checkpoint**: `npm test tests/unit/canonical/nfe/access-key.test.ts` and
`hash-csrt.test.ts` pass. `computeNFeAccessKey` and `computeHashCSRT` are importable from
`nfe-sdk`.

---

## Phase 3: User Story 2 – Multi-UF Routing + Production (Priority: P2)

**Goal**: Route transmissions to the correct SEFAZ autorizador for all 27 Brazilian UFs
(GAP-004) and resolve production environment endpoints (GAP-005).

**Independent Test**: Given each of the 27 Brazilian UF codes, `resolveUFAutorizador(uf)`
returns a `UFRoutingResult` matching the expected autorizador from the MOC §4.3.7 table;
production URLs resolve without error.

### Tests for User Story 2 ⚠️

- [X] T011 [P] [US2] Write unit tests for UF routing in
      `tests/unit/canonical/transport/uf-routing.test.ts` — cover: all 14 own-autorizador UFs
      (AM,BA,CE,GO,MG,MS,MT,PA,PE,PR,RS,SP + SVC-AN,SVC-RS routing for 15 delegating UFs:
      AC,AL,AP,DF,ES,MA,PB,PI,RJ,RN,RO,RR,SE,TO → SVC-AN; SC → SVC-RS),
      `UnknownUFError` for invalid UF
- [X] T012 [P] [US2] Extend existing `tests/unit/service-catalog.test.ts` with production
      environment cases covering all 14 autorizadores — verify RED for production URLs

### Implementation for User Story 2

- [X] T013 [US2] Implement `src/canonical/transport/uf-routing.ts` — static
      UF→autorizador lookup table for all 27 UFs per MOC §4.3.7 (AC,AL,AP,DF,ES,MA,PB,PI,
      RJ,RN,RO,RR,SE,TO → SVC-AN; SC → SVC-RS; 12 own autorizadores); throws `UnknownUFError`
      for unrecognized UF; add `src/canonical/transport/uf-routing.doc.md`
- [X] T014 [P] [US2] Expand `src/canonical/transport/service-catalog.ts` with production
      environment URL entries for all 14 autorizadores (`nfe-authorization`, `nfe-ret-auth`,
      `nfe-service-status`, `nfe-events`, `nfe-distribution`, `nfe-contributor-query`) per MOC
      web services catalog; update `src/canonical/transport/service-catalog.doc.md`
- [X] T015 [US2] Implement `resolveUFAutorizador` facade in
      `src/canonical/facade/resolve-uf-autorizador.ts`; add `.doc.md`
- [X] T016 [US2] Register `resolveUFAutorizador` in `src/canonical/facade/index.ts`,
      `src/canonical/transport/index.ts`, and `src/index.ts`

**Checkpoint**: `npm test tests/unit/canonical/transport/uf-routing.test.ts` passes.
`resolveUFAutorizador('AC')` returns `{ autorizador: 'SVC-AN', usesSVC: true }`;
`resolveNFeServiceEndpoint` works for all UFs in production.

---

## Phase 4: User Story 3 – EPEC Contingency (Priority: P3)

**Goal**: Implement EPEC electronic contingency event submission (GAP-003): pre-emission
structure with `tpEmis=4`, SVC-AN/SVC-RS routing, and reconciliation flow.

**Depends on**: US2 (UF routing and SVC endpoint resolution must be complete)

**Independent Test**: Given a complete EPEC event input, the builder produces XML conforming
to `xsd/Evento_EPEC_PL_v1.01/` and routes to the correct SVC autorizador.

### Tests for User Story 3 ⚠️

- [X] T017 [P] [US3] Write unit tests for EPEC builder in
      `tests/unit/canonical/nfe/epec/epec-builder.test.ts` — cover: tpEmis=4 emitted, correct
      XSD structure, SVC-AN vs SVC-RS routing selection, parse approval and rejection responses

### Implementation for User Story 3

- [X] T018 [P] [US3] Create `src/canonical/nfe/epec/contracts.ts` with
      `EPECEventInput`, `EPECEventOutcome`, `EPECSVCTarget`, and `EPECEventClassification` types
      per data-model.md
- [X] T019 [US3] Implement `src/canonical/nfe/epec/epec-svc-routing.ts` — selects SVC-AN
      or SVC-RS per UF routing table from US2 (AC,AL,AP,AM,BA,CE,DF,ES,GO,MA,MG,PA,PB,PE,PI,
      PR,RJ,RN,RO,RR,SE,TO,RS → SVC-AN/SVC-RS per MOC §3.3.5)
- [X] T020 [US3] Implement `src/canonical/nfe/epec/epec-builder.ts` — EPEC event XML
      builder per `xsd/Evento_EPEC_PL_v1.01/` and MOC §3.3; sets `tpEmis=4` in authorization
      payload
- [X] T021 [US3] Implement `submitEPECEvent` facade in
      `src/canonical/facade/submit-epec-event.ts`; add `.doc.md`
- [X] T022 [US3] Register `submitEPECEvent` in `src/canonical/facade/index.ts` and
      `src/index.ts`; update `src/canonical/nfe/index.ts` to export epec sub-module; add a
      post-contingency reconciliation example to `quickstart.md` P3 showing the steps to
      reauthorize a pending EPEC NF-e via `authorizeNFe` once primary connectivity is restored
      (satisfies US3 AC2)

**Checkpoint**: `npm test tests/unit/canonical/nfe/epec/epec-builder.test.ts` passes.
`submitEPECEvent` is importable from `nfe-sdk`.

---

## Phase 5: User Story 4 – Async Authorization Cycle + cBenef (Priority: P4)

**Goal**: Implement `NfeRetAutorizacao` async polling (GAP-012) and document `cBenef`
external parameter acceptance (GAP-013).

**Independent Test**: Given a `retConsReciNFe` XML payload, `retrieveNFeAuthorizationBatch`
parses all items into `NFeAsyncBatchOutcome` with per-document classification.

### Tests for User Story 4 ⚠️

- [X] T023 [P] [US4] Write unit tests for async batch retrieval in
      `tests/unit/canonical/nfe/async-batch-retrieval.test.ts` — cover: complete response with
      mixed authorized/rejected items, processing-still-in-progress (cStat 105), parse errors

### Implementation for User Story 4

- [X] T024 [US4] Implement `src/canonical/nfe/async-batch-retrieval.ts` — parses
      `retConsReciNFe` per `consReciNFe_v4.00.xsd` into `NFeAsyncBatchOutcome` with per-item
      `AsyncBatchItemResult`; add `src/canonical/nfe/async-batch-retrieval.doc.md`
- [X] T025 [US4] Implement `retrieveNFeAuthorizationBatch` facade in
      `src/canonical/facade/retrieve-nfe-authorization-batch.ts` — submits `consReciNFe`,
      parses with T024, returns outcome; add `.doc.md`
- [X] T026 [P] [US4] Verify `cBenef` exists as a typed optional field in
      `src/canonical/nfe/canonical-nfe.ts` (or the relevant canonical NF-e type); if absent,
      add the field. Then update its JSDoc to document `cBenef` as an externally provided
      opaque parameter per GAP-013 design decision (R11: no UF table internalization)
- [X] T027 [US4] Register `retrieveNFeAuthorizationBatch` in `src/canonical/facade/index.ts`
      and `src/index.ts`

**Checkpoint**: `npm test tests/unit/canonical/nfe/async-batch-retrieval.test.ts` passes.
`retrieveNFeAuthorizationBatch` is importable from `nfe-sdk`.

---

## Phase 6: User Story 5 – Distribution & Recipient Extensions (Priority: P5)

**Goal**: Implement `consNSU` and `consChNFe` queries (GAP-008), contributor registration
query (GAP-010), and manifestation change with transition-rule enforcement (GAP-015).

**Independent Test**: Given a known NSU, `queryNFeByNSU` returns the wrapped DFe document
per MOC §3.2.2.1; `changeManifestRecipientOperation` with an invalid transition throws
`InvalidManifestationTransitionError`.

### Tests for User Story 5 ⚠️

- [X] T028 [P] [US5] Write unit tests for NSU and key queries in
      `tests/unit/canonical/recipient/query-nfe-by-nsu.test.ts` and
      `tests/unit/canonical/recipient/query-nfe-by-key.test.ts` — cover: successful response
      parse, document-not-found, malformed XML
- [X] T029 [P] [US5] Write unit tests for contributor registration in
      `tests/unit/canonical/recipient/query-contributor-registration.test.ts` — cover: found,
      not-found, and multiple results per CNPJ
- [X] T030 [P] [US5] Write unit tests for manifestation change in
      `tests/unit/canonical/recipient/change-manifestation.test.ts` — cover: allowed
      transitions (Ciência→Confirmação, Ciência→Desconhecimento, Ciência→NãoRealizada),
      forbidden transitions throw `InvalidManifestationTransitionError` per MOC §3.2.1.5

### Implementation for User Story 5

- [X] T031 [P] [US5] Implement `src/canonical/recipient/query-nfe-by-nsu.ts` — builds
      `consNSU` request per `xsd/PL_NFeDistDFe_103/` and parses `retDistDFeInt` per MOC
      §3.2.2.1; add `query-nfe-by-nsu.doc.md`
- [X] T032 [P] [US5] Implement `src/canonical/recipient/query-nfe-by-key.ts` — builds
      `consChNFe` request per `xsd/PL_NFeDistDFe_103/` and parses response; add
      `query-nfe-by-key.doc.md`
- [X] T033 [P] [US5] Implement `src/canonical/recipient/query-contributor-registration.ts`
      — builds `CadConsultaCadastro4` request, parses `retConsCad` response into
      `ContributorRegistrationOutcome`; add `query-contributor-registration.doc.md`
- [X] T034 [US5] Implement `src/canonical/recipient/change-manifestation.ts` — validates
      MOC §3.2.1.5 allowed transition matrix, throws `InvalidManifestationTransitionError` on
      violation, builds change-manifestation event XML; add `change-manifestation.doc.md`
- [X] T035 [US5] Implement `queryNFeByNSU` and `queryNFeByAccessKey` facades in
      `src/canonical/facade/query-nfe-by-nsu.ts` and `src/canonical/facade/query-nfe-by-key.ts`;
      add `.doc.md` for each
- [X] T036 [P] [US5] Implement `queryContributorRegistration` facade in
      `src/canonical/facade/query-contributor-registration.ts` and
      `changeManifestRecipientOperation` facade in
      `src/canonical/facade/change-manifest-recipient-operation.ts`; add `.doc.md` for each
- [X] T037 [US5] Register all four recipient extension facades in
      `src/canonical/facade/index.ts`, `src/canonical/recipient/index.ts`, and `src/index.ts`

**Checkpoint**: All three recipient test files pass. `queryNFeByNSU`, `queryNFeByAccessKey`,
`queryContributorRegistration`, and `changeManifestRecipientOperation` importable from
`nfe-sdk`.

---

## Phase 7: User Story 6 – e-CPF Test Fixture + XSD Pre-Validation (Priority: P6)

**Goal**: Confirm e-CPF signing works with existing infrastructure via a test fixture
(GAP-018) and implement optional XSD pre-validation via `xmllint` (GAP-014).

**Independent Test**: `validateNFeXsd(validXml)` returns `{ classification: 'valid' }`;
`validateNFeXsd(invalidXml)` returns `{ classification: 'invalid', errors: [...] }`;
`validateNFeXsd(xml)` when `xmllint` is absent returns
`{ classification: 'xmllint-unavailable' }`.

### Tests for User Story 6 ⚠️

- [X] T038 [P] [US6] Write unit tests for XSD validation in
      `tests/unit/canonical/validation/validate-nfe-xsd.test.ts` — cover: valid NF-e XML passes,
      structurally invalid XML returns errors, `xmllint` absence returns
      `'xmllint-unavailable'` classification without throwing; mock `child_process.spawnSync`
- [X] T039 [P] [US6] Create e-CPF signing unit test in
      `tests/unit/canonical/nfe/ecpf-signing.test.ts` — verify `createSigningContext` +
      `signNFeXml` succeeds with an e-CPF A1 test fixture PFX (self-signed), confirming no
      code change required per R15; add fixture reference in `tests/fixtures/signing/`

### Implementation for User Story 6

- [X] T040 [US6] Implement `src/canonical/validation/validate-nfe-xsd.ts` — invokes
      `xmllint --noout --schema <xsd-path> -` via `child_process.spawnSync`; resolves correct
      XSD path from `xsd/PL_010c_NT2022_002v1.30/` for modelo 55; returns
      `XsdValidationResult` with `XsdValidationClassification`; add
      `src/canonical/validation/validate-nfe-xsd.doc.md`
- [X] T041 [US6] Implement `validateNFeXsd` facade in
      `src/canonical/facade/validate-nfe-xsd.ts`; add `.doc.md`
- [X] T042 [US6] Register `validateNFeXsd` in `src/canonical/facade/index.ts` and
      `src/index.ts`

**Checkpoint**: Both test files pass (XSD validation + e-CPF fixture). `validateNFeXsd`
importable from `nfe-sdk`.

---

## Phase 8: User Story 7 – ICMS Deferral Events (Priority: P7)

**Goal**: Implement prorrogação de ICMS interestadual event builder (GAP-007) extending the
existing generic-event infrastructure with `'prorrogacao-icms'` family variant.

**Depends on**: Phase 1 T004 (`GenericEventFamily` extension must be complete)

**Independent Test**: Given an `ICMSDeferralPayload`, the event builder produces XML
conforming to `xsd/Evento_Prorrog_Indust_1.0/` with event code `110764`.

### Tests for User Story 7 ⚠️

- [X] T043 [P] [US7] Write unit tests for ICMS deferral payload in
      `tests/unit/canonical/generic-event/prorrogacao-icms.test.ts` — cover: event code 110764,
      XSD schema conformance via field-level assertions, both approval and rejection response
      parse paths

### Implementation for User Story 7

- [X] T044 [US7] Implement `src/canonical/generic-event/prorrogacao-icms-payload.ts` —
      maps `ICMSDeferralPayload` to `detEvento` XML structure per `xsd/Evento_Prorrog_Indust_1.0/`
      and MOC §3.4; event code `110764`; add companion `.doc.md`
- [X] T045 [US7] Implement `submitICMSDeferralEvent` facade in
      `src/canonical/facade/submit-icms-deferral-event.ts` — adapter over existing
      `submitGenericEvents` using the `prorrogacao-icms` family; add `.doc.md`
- [X] T046 [US7] Register `submitICMSDeferralEvent` in `src/canonical/facade/index.ts` and
      `src/index.ts`

**Checkpoint**: `npm test tests/unit/canonical/generic-event/prorrogacao-icms.test.ts`
passes. `submitICMSDeferralEvent` importable from `nfe-sdk`.

---

## Phase 9: User Story 8 – Documentation & NT Advisory (Priority: P8)

**Goal**: Publish mandatory manifestation deadline table (GAP-016) and define the NT
tracking process (GAP-011) so users have compliance guidance and maintainers have a
repeatable update workflow.

**Independent Test**: the canonical recipient-coverage annexes contain a table
with Ciência (90 days), Confirmação/Desconhecimento/NãoRealizada (180 days) deadlines per
MOC §3.2.3; `docs/_meta/nt-tracking-process.md` exists with a step-by-step update
checklist.

### Implementation for User Story 8

- [X] T047 [P] [US8] Update the recipient-coverage documentation, now reflected in the canonical roadmap annexes — add
      mandatory manifestation deadline table per MOC §3.2.3: Ciência da Operação (90 days,
      optional but recommended), Confirmação/Desconhecimento/Operação Não Realizada (180 days
      mandatory when applicable)
- [X] T048 [P] [US8] Create `docs/_meta/nt-tracking-process.md` — full NT review process:
      SEFAZ NT publication detection, `xsd/` schema update steps, `docs/_meta/source-registry.md`
      entry format, regression test run, and SDK version release checklist; list active NTs
      (2026.002 CBS, 2026.004 CNPJ Alfanumérico, 2024.003 Agro v1.10)
- [X] T049 [US8] Update `docs/_meta/source-registry.md` — add NT tracking section
      referencing `nt-tracking-process.md` and register the three currently active NTs as
      pending review items

**Checkpoint**: Both docs files exist and are Prettier-formatted. No code changes in this
phase.

---

## Phase 10: User Story 9 – Watchlist Monitoring (Priority: P9)

**Goal**: Create decision records for GAP-006 (NF-e ABI), GAP-017 (rural series), and
GAP-009 (signing coverage in specs 009/010) with explicit implementation criteria.

**Independent Test**: Three decision record files exist with monitoring posture, current
status, and criteria to initiate implementation.

### Implementation for User Story 9

- [X] T050 [P] [US9] Create `docs/_meta/watchlist/gap-006-nfe-abi.md` — NF-e ABI (modelo 77) monitoring decision record: current posture (monitor), implementation criteria (ABNT
      standard stable + confirmed integrator demand + ≥1 SEFAZ autorizador in production)
- [X] T051 [P] [US9] Create `docs/_meta/watchlist/gap-017-rural-series.md` — rural series
      reservation (série 890–899) watchlist record: current posture (monitor), implementation
      criteria (confirmed rural producer demand + MOC §2.2.8 series table internalized)
- [X] T052 [P] [US9] Create `docs/_meta/watchlist/gap-009-signing-coverage.md` —
      NFC-e/event signing confirmation record: references specs/009 and specs/010 for downstream
      confirmation that XML-DSig is applied to all event types and NFC-e (modelo 65)

**Checkpoint**: Three watchlist doc files exist and are Prettier-formatted.

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Final wiring, public contract audit, and full validation suite.

- [X] T053 Audit and complete `src/index.ts` — verify all 11 new public functions and
      23 new types from `contracts/api-contract.md` are re-exported; no existing export is
      removed or renamed (CC-001 compliance)
- [X] T054 [P] Update `src/public-contract.ts` to reflect the 11 new facade additions per
      `contracts/api-contract.md`; run `npm run audit:public-contract` (or equivalent) to
      confirm no regressions
- [X] T055 [P] Audit all new `.doc.md` files — confirm every new `.ts` module in
      `src/canonical/` has a companion `.doc.md`; add any missing ones
- [X] T056 [P] Run full validation suite: `npm test`, `npm run lint`, `npm run typecheck`,
      `npm run build`; resolve any failures before marking this task complete
- [X] T057 [P] Run `npx prettier --write "src/**/*.{ts,md}" "tests/**/*.{ts,md}"
"docs/**/*.md"` and commit formatting fixes
- [X] T058 Update `specs/012-implement-audit-gaps/plan.md` structure section to mark all
      `⏳` items as `✅` now that tasks.md is generated; note any implementation deviations
      from plan in plan.md
- [X] T059 Update `docs/_meta/source-registry.md` with provenance entries for all new
      canonical modules added in this feature (one entry per module: MOC section cited,
      XSD path if applicable, access date) — satisfies Constitution Principle II for this
      feature's source boundary

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately; T002/T003/T004 are parallel
- **Phase 2 (US1)**: Depends on Phase 1 (T001 fixture required for T005/T006)
- **Phase 3 (US2)**: Depends on Phase 1 only (T002 for UnknownUFError)
- **Phase 4 (US3)**: Depends on Phase 3 complete (needs UF routing from US2)
- **Phase 5 (US4)**: Depends on Phase 1 only; can run in parallel with US2–US3
- **Phase 6 (US5)**: Depends on Phase 1 only (T003 for InvalidManifestationTransitionError);
  can run in parallel with US2–US4
- **Phase 7 (US6)**: Depends on Phase 1 only; can run in parallel with US2–US5
- **Phase 8 (US7)**: Depends on Phase 1 T004 (GenericEventFamily extension); can run in
  parallel with US2–US6
- **Phases 9–10 (US8–US9)**: Documentation only, no code dependencies — can run at any
  time
- **Phase 11 (Polish)**: Depends on all prior phases complete

### User Story Dependencies (Code)

```text
Phase 1 (Setup) ──┬─► US1 (Phase 2)  [no story deps]
                  ├─► US2 (Phase 3)  [no story deps]
                  │     └─► US3 (Phase 4)  [depends: US2 routing]
                  ├─► US4 (Phase 5)  [no story deps]
                  ├─► US5 (Phase 6)  [no story deps]
                  ├─► US6 (Phase 7)  [no story deps]
                  └─► US7 (Phase 8)  [T004 GenericEventFamily]
US8/US9: documentation only, no ordering constraint
Phase 11: all code phases complete
```

### Within Each User Story

1. Test tasks (RED) → implementation tasks (GREEN) → wire-up tasks
2. `.ts` module before facade before index wiring
3. `.doc.md` files can be created in parallel with implementation

### Parallel Opportunities

**Highest parallel leverage**:

- After Phase 1 completes: US1, US2, US4, US5, US6, US7, US8, US9 can all start in
  parallel
- Within US5: T031/T032/T033 (tests) run in parallel; T031/T032/T033/T034 impl parallel
  before T037 wiring
- Within US1: T005/T006 (tests) in parallel; T007/T008 impl in parallel

**Example maximum parallel execution** (after Phase 1):

```text
Stream A: T005→T006→T007→T008→T009→T010   (US1)
Stream B: T011→T012→T013→T014→T015→T016   (US2, feeds US3)
Stream C: T023→T024→T025→T026→T027        (US4)
Stream D: T028→T029→T030→T031→T032→...    (US5)
Stream E: T038→T039→T040→T041→T042        (US6)
Stream F: T043→T044→T045→T046             (US7)
Stream G: T047→T048→T049                  (US8, any time)
Stream H: T050→T051→T052                  (US9, any time)
```

---

## Implementation Strategy

**MVP = Phase 1 + Phase 2 (US1)**. After T010, the SDK produces structurally valid NF-e
documents — this resolves the two hard blockers (GAP-001, GAP-002) and enables initial
real-world use.

**Second slice = Phase 3 (US2)**. Adds multi-UF routing and production endpoints (GAP-004,
GAP-005), unblocking deployment for all 27 Brazilian UFs. This also enables US3.

**Deliver in priority-band order**:

1. Phase 1 + 2 (blockers) — minimum viable SDK
2. Phase 3 (blockers) — real-world deployment
3. Phase 4 (US3) — contingency
4. Phase 5 (US4) — batch operations
5. Phases 6–8 (US5–US7) — independently shippable
6. Phases 9–10 (US8–US9) — always mergeable (docs only)
7. Phase 11 (Polish) — before final release tag

---

## Summary

| Phase         | Stories           | Tasks     | Parallel                       |
| ------------- | ----------------- | --------- | ------------------------------ |
| 1 — Setup     | —                 | T001–T004 | T002/T004 (T003 after T002)    |
| 2 — US1 P1 🎯 | GAP-001, 002      | T005–T010 | T005/T006, T007/T008           |
| 3 — US2 P2    | GAP-004, 005      | T011–T016 | T011/T012, T014                |
| 4 — US3 P3    | GAP-003           | T017–T022 | T018, T019                     |
| 5 — US4 P4    | GAP-012, 013      | T023–T027 | T026                           |
| 6 — US5 P5    | GAP-008, 010, 015 | T028–T037 | T028/T029/T030, T031/T032/T033 |
| 7 — US6 P6    | GAP-018, 014      | T038–T042 | T038/T039                      |
| 8 — US7 P7    | GAP-007           | T043–T046 | T043                           |
| 9 — US8 P8    | GAP-016, 011      | T047–T049 | T047/T048                      |
| 10 — US9 P9   | GAP-006, 017, 009 | T050–T052 | T050/T051/T052                 |
| 11 — Polish   | —                 | T053–T059 | T054/T055/T056/T057            |

**Total**: 59 tasks across 11 phases.

**MVP scope** (minimum to resolve hard blockers): T001–T010 (Phase 1 + Phase 2, 10 tasks).

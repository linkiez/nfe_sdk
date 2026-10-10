# Tasks: NF-e SP Production Authorization

**Input**: Design documents from `specs/025-nfe-sp-producao/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/public-nfe-sp-production-authorization.md`, `quickstart.md`

**Tests**: Required by `CC-004`, the public behavioral contract, and the repository constitution. All authorization and receipt tests use fixtures or injected executors; live production transmission is excluded.

**Organization**: Tasks are grouped by the two user stories in `spec.md`, ordered by priority.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add deterministic production SOAP response fixtures for the independent user-story tests.

- [x] T001 Add production authorization, receipt, malformed-response, contradictory-evidence, and wrong-environment XML fixtures in `tests/fixtures/nfe-operational/authorization/single-response-production-authorized.xml`, `tests/fixtures/nfe-operational/authorization/single-response-production-rejected.xml`, `tests/fixtures/nfe-operational/authorization/single-response-production-wrong-environment.xml`, `tests/fixtures/nfe-operational/authorization/single-response-production-malformed.xml`, `tests/fixtures/nfe-operational/authorization/single-response-production-authorized-missing-protocol.xml`, `tests/fixtures/nfe-operational/authorization/single-response-production-received-missing-receipt.xml`, `tests/fixtures/nfe-operational/authorization/batch-response-production-received.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-production-authorized.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-production-authorized-missing-protocol.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-production-processing.xml`, `tests/fixtures/nfe-operational/authorization/receipt-response-production-wrong-environment.xml`, and `tests/fixtures/nfe-operational/authorization/receipt-response-production-malformed.xml`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Make endpoint resolution authorizer-aware and install the official SP production routes before either story depends on them.

**⚠️ CRITICAL**: Both user stories depend on completion of this phase.

- [x] T002 [P] Add provider-aware endpoint-resolution regressions for SP production authorization and receipt lookup, while preserving existing unqualified SVCAN behavior, in `tests/unit/service-catalog.test.ts` and `tests/unit/resolve-nfe-service-endpoint-errors.test.ts`
- [x] T003 Extend endpoint-resolution and SOAP execution inputs with optional authorizer/provider selection, retain existing behavior for unambiguous catalog entries, and register SP production `nfe-authorization` and `nfe-authorization-batch` endpoints in `src/canonical/transport/contracts.ts`, `src/canonical/transport/resolve-nfe-service-endpoint.ts`, `src/canonical/transport/execute-nfe-soap-service.ts`, and `src/canonical/transport/service-catalog.ts`
- [x] T004 [P] Add production authorization and receipt result tests that retain non-secret transport metadata while proving credential, certificate, and private-key markers are absent from returned envelope evidence in `tests/integration/authorize-nfe-single.test.ts` and `tests/integration/reconcile-nfe-receipt.test.ts`
- [x] T005 Redact sensitive values from production request and response envelope evidence before returning `TransportOutcome`, while preserving its existing metadata and public shape, in `src/canonical/transport/execute-nfe-soap-service.ts`

**Checkpoint**: The resolver returns provider `SP` and the official authorization/receipt URLs when requested, rejects ambiguous routes, and existing catalog tests still pass.

---

## Phase 3: User Story 1 - Authorize an SP NF-e in production (Priority: P1) 🎯 MVP

**Goal**: Allow `authorizeNFe` to submit a consistently identified SP NF-e through the normal SP production authorizer and report only verified production outcomes.

**Independent Test**: Run the focused unit and integration authorization tests with injected executors. Verify authorized/rejected outcomes, production endpoint/provider selection, pre-transport rejection of unsupported or conflicting identity, response `tpAmb` enforcement, no default-executor use for production, and unchanged homologation behavior. Do not contact SEFAZ.

### Tests for User Story 1

- [x] T006 [P] [US1] Add production identity and fail-closed boundary tests for SP, non-SP, missing/malformed/conflicting identity, mixed batches, and missing production executor in `tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts`
- [x] T007 [P] [US1] Add single and batch mocked production journeys for authorization, rejection, timeout/unavailability, receipt issuance, wrong `tpAmb`, malformed XML, success status without required `nProt`/`nRec`, selected endpoint/provider, and homologation regression in `tests/integration/authorize-nfe-single.test.ts` and `tests/integration/authorize-nfe-batch.test.ts`

### Implementation for User Story 1

- [x] T008 [US1] Resolve issuer UF from `payload.cUF` and/or a 44-digit `documentId` access key, reject missing, malformed, conflicting, non-SP, or mixed-batch identity before transport, and preserve the existing contingency boundary in `src/canonical/nfe/coverage-boundary.ts` and `src/canonical/nfe/authorize-nfe.ts`
- [x] T009 [US1] Require a caller-provided `requestExecutor` for production while preserving the default executor for existing homologation requests in `src/canonical/nfe/authorize-nfe.ts`
- [x] T010 [US1] Validate authorization response `tpAmb` against the requested production environment and require `nProt` for authorization statuses `100`/`104` and `nRec` for receipt status `103`; classify missing or contradictory evidence as `protocol-error` in `src/canonical/nfe/authorization-outcome.ts`

**Checkpoint**: User Story 1 passes its mocked tests independently; environment or issuer mismatches and missing production executor cannot reach transport, and production evidence cannot be reported as success for a non-production response.

---

## Phase 4: User Story 2 - Continue an asynchronous authorization (Priority: P2)

**Goal**: Continue a known production `nRec` through the existing receipt facade and SP authorizer without duplicate receipt logic, blind resubmission, or automatic polling.

**Independent Test**: With injected executors, reconcile a known receipt using `authorizer: 'SP'` and `environment: 'production'`; verify the SP receipt endpoint, `tpAmb` consistency, pending versus terminal classification, and no resubmission or polling.

### Tests for User Story 2

- [x] T011 [P] [US2] Add mocked SP production receipt-routing, pending/terminal, malformed XML, terminal authorization without `nProt`, wrong-`tpAmb`, no-polling, and no-resubmission regressions; assert reconciliation performs only the known-receipt request and never submits the NF-e again in `tests/integration/reconcile-nfe-receipt.test.ts`

### Implementation for User Story 2

- [x] T012 [US2] Forward the explicit `routingContext.authorizer` from `reconcileNFeReceipt` to SOAP endpoint resolution so SP production receipts use provider `SP` in `src/canonical/nfe/reconcile-nfe-receipt.ts`
- [x] T013 [US2] Validate receipt response `tpAmb` against the requested environment before classifying pending or terminal results; classify malformed XML or terminal authorization without required `nProt` as `protocol-error` and preserve the existing spec 021 result classifications in `src/canonical/nfe/reconcile-nfe-receipt.ts`

**Checkpoint**: User Story 2 independently resumes a known receipt through the official SP production receipt endpoint and never treats an environment mismatch as successful reconciliation.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Document the additive public behavior and run the repository quality and package gates.

- [x] T014 Document SP production scope, injected mTLS executor prerequisites, explicit contingency boundary, diagnostic evidence/redaction behavior, protocol-error outcomes, and compatibility impact in `README.md` and `src/public-contract.ts`
- [x] T015 Run focused authorization/receipt regressions and the required Jest, lint, format, typecheck, build, tarball, and planning-document checks from `package.json` and `specs/025-nfe-sp-producao/quickstart.md`; run `npm run generate` only if generated schema output changes

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; creates the XML fixtures used by mocked behavior tests.
- **Foundational (Phase 2)**: Depends on Setup and blocks both user stories. T002 and T004 are independent regression-test work; T005 follows T004 and establishes the shared production evidence redaction behavior.
- **User Stories (Phases 3–4)**: Both depend on the provider-aware resolver and SP catalog entries. After the foundation is complete, US1 and US2 can be implemented independently because authorization and receipt orchestration live in separate modules.
- **Polish (Phase 5)**: Depends on both user stories.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; MVP scope. It does not depend on receipt reconciliation.
- **US2 (P2)**: Starts after Phase 2; consumes the existing spec 021 facade and result contract. It does not depend on US1 implementation, but does depend on the shared provider-aware transport foundation.

### Within Each User Story

- Write the listed tests first and confirm they fail for the missing production behavior.
- Complete US1 preflight/executor behavior before response classification changes that rely on production routing.
- Complete the US2 receipt-routing tests before forwarding routing context or validating receipt response environment.
- Preserve the existing public root facade and homologation behavior; do not add exports or generated schema changes for this slice.

### Parallel Opportunities

- T002 and T004 may run in parallel because they modify separate test files.
- T006, T007, and T011 may run in parallel after Phase 2 because their test changes target separate files.
- The US1 and US2 implementation tracks may run in parallel after Phase 2, except T010 and T011 must be sequenced because they modify the same receipt module.

---

## Parallel Example: User Story 1

```text
Task: T006 Add SP production identity and pre-transport boundary regressions in tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts
Task: T007 Add mocked single/batch SP production journeys in tests/integration/authorize-nfe-single.test.ts and tests/integration/authorize-nfe-batch.test.ts
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 fixtures and Phase 2 authorizer-aware transport foundation.
2. Complete Phase 3 User Story 1.
3. **STOP and VALIDATE**: Run the focused authorization tests and confirm the SP production path never reaches a live endpoint during tests.

### Incremental Delivery

1. Deliver normal SP production authorization with identity, environment, and executor boundaries.
2. Add one-shot continuation for a known SP production receipt by reusing spec 021.
3. Document public behavior and complete the full package validation gates.

## Notes

- `[P]` marks work that can proceed concurrently without editing the same files or depending on an incomplete task.
- `[US1]` and `[US2]` map directly to the priorities and acceptance criteria in `spec.md`.
- Credentials, client certificates, and production issuer permissions are integrator prerequisites; tests must use mocks and fixtures only.

## Knowledge Sources and Scope of Claims

- **Confirmed normative inputs**: `SRC-RH-002` (MOC 7.0, consulted 2026-05-19) supports the authorization lifecycle and TLS/mutual-certificate requirements; `SRC-NFE-003` and `SRC-NFE-004` (SEFAZ/SP pages, consulted 2026-05-16) provide SP operational context; `SRC-NFE-006` (official national Web Services table, consulted 2026-10-10) lists the SP authorization and receipt routes. Captures and exact references are recorded in `research.md`.
- **Repository interpretation**: Use the official SP normal-authorizer routes for this slice and keep SVC-AN a separate, explicit contingency route. Endpoint listings do not establish current service health.
- **Unresolved/external conditions**: Live endpoint availability, issuer credentialing, certificate provisioning, and production permission are not established by these sources and remain integrator prerequisites. No secondary source was used.

## Phase 6: Convergence

- [x] T016 Validate receipt XML well-formedness before mapping processing or terminal status per FR-004
- [x] T017 Expose the established continuation action on authorization results that contain a receipt per FR-005

# Feature Specification: MDF-e SP Homologation Authorization

**Feature Branch**: `035-mdfe-homologation-authorization`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Implement a bounded SP MDF-e issuance and authorization journey in homologation after baseline, schema, and document contracts are verified.

## User Scenarios & Testing

### User Story 1 - Submit a valid SP MDF-e in homologation (Priority: P1)

An eligible SP issuer can sign and submit a prepared MDF-e to the verified homologation route and observe the official result.

**Why this priority**: Homologation is the necessary controlled proof of the operational path before production can be considered.

**Independent Test**: Use official-schema fixtures and a controlled transport to exercise accepted, rejected, pending, unavailable, timeout, malformed-response, and environment-mismatch cases without issuing a live fiscal document.

**Acceptance Scenarios**:

1. **Given** a valid, signed document in the verified SP cohort and homologation scope, **When** it is submitted through the current official route, **Then** the result reports the document identity and the official authorization state.
2. **Given** invalid input, missing signing context, unsupported schema, or unverified routing, **When** submission is requested, **Then** the request stops before transport with the missing boundary stated.

### User Story 2 - Reconcile uncertain or asynchronous outcomes safely (Priority: P2)

An issuer can distinguish a terminal authorization result from a receipt or uncertain transport result and can continue only through an explicitly supported reconciliation operation.

**Why this priority**: A successful socket or SOAP exchange does not prove fiscal authorization, and a timeout can occur after the authorizer receives the document.

**Independent Test**: Controlled responses prove that pending and uncertain outcomes do not become authorization and that any receipt continuation uses an explicitly supported route and contract.

**Acceptance Scenarios**:

1. **Given** the authorizer returns a pending receipt, **When** the result is mapped, **Then** the receipt and next action are explicit and no terminal authorization is implied.
2. **Given** a timeout occurs after possible delivery, **When** the request returns, **Then** the result is inconclusive and does not trigger blind resubmission.

### Edge Cases

- The response is malformed, belongs to another environment, or lacks required protocol/receipt evidence.
- The service accepts transport but returns a fiscal rejection.
- The issuer credential is missing, expired, or mismatched.
- The endpoint changes after the evidence baseline is refreshed.
- The request may have been processed despite a transport timeout.

## Requirements

### Functional Requirements

- **FR-001**: This feature MUST depend on Features 032, 033, and 034 and MUST remain blocked until the selected SP homologation route, issuer cohort, package, and operation are verified.
- **FR-002**: The SDK MUST validate and sign the supported document, bind issuer/UF/schema/environment to the request, and submit only through the refreshed official homologation route.
- **FR-003**: The implementation MUST verify compatibility of existing signing and SOAP/transport capabilities before reuse; it MUST NOT assume an NF-e signature or transport contract is automatically valid for MDF-e.
- **FR-004**: Results MUST distinguish authorized, rejected, pending, unavailable, timeout/inconclusive, usage error, and protocol error according to official response evidence.
- **FR-005**: A pending receipt MUST expose a supported next action only when the official MDF-e reconciliation route and contract are verified; no generic polling or blind resubmission is implied.
- **FR-006**: Production endpoints, contingency, and unsupported issuer/operation combinations MUST be rejected before transport.
- **FR-007**: Diagnostics MUST identify service, environment, endpoint, document, and failure class without exposing certificate bytes, passwords, or other secret material.
- **FR-008**: Tests MUST use controlled responses and schema-valid fixtures; live fiscal issuance MUST NOT be a default test gate.

### Compatibility & Contract Constraints

- **CC-001**: Any public issuance operation and outcome type MUST be additive from the package root; existing NF-e/NFC-e contracts remain unchanged.
- **CC-002**: The feature covers only verified SP homologation issuance; it MUST NOT imply production, nationwide, or contingency behavior.
- **CC-003**: Pending/uncertain outcomes MUST remain distinguishable from authorization in the public contract.
- **CC-004**: Validation MUST include focused Jest contract/transport tests, lint, format, typecheck/build, public-contract audit, and tarball smoke checks.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [route register and scope matrix](../030-mdfe-source-schema-baseline/research.md) list the SVRS homologation catalog entry for `MDFeRecepcaoSinc` and current blocked decision.
- **KS-002**: Feature 032 is the gate for current route, issuer, operation, package, and rollout evidence; the catalog alone is not proof of eligibility or deployment.
- **KS-003**: Existing signing/transport behavior in other document families is reusable only after an explicit compatibility test and official MDF-e contract review.

### Key Entities

- **Homologation Submission**: One supported signed SP MDF-e sent to a verified test environment.
- **Authorization Outcome**: Evidence-based terminal or pending result, including a next action when supported.
- **Submission Evidence**: Sanitized metadata sufficient to diagnose and reconcile a request without retaining secrets.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of declared homologation scenarios map to an unambiguous result without equating transport success with authorization.
- **SC-002**: 100% of unverified, mismatched, or production requests are stopped before transmission.
- **SC-003**: No credential or private-key material appears in public results, diagnostics, or fixtures.
- **SC-004**: Every supported request is traceable to a verified package, issuer cohort, route, environment, and operation.

## Assumptions

- Features 032-034 complete the evidence, schema, and document preparation prerequisites.
- Credentials and certificates are provisioned externally by the integrator.
- Production and contingency are separate promotion decisions and are not implicit fallbacks.

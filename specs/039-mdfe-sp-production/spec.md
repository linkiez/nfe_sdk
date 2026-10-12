# Feature Specification: MDF-e SP Production Promotion

**Feature Branch**: `039-mdfe-sp-production`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Promote individually verified MDF-e SP operations from homologation to production after all external and operational gates pass.

## User Scenarios & Testing

### User Story 1 - Use a proven SP operation in production (Priority: P1)

An SP integrator can select production for an operation only after that same operation has passed the supported homologation path and current official production prerequisites are verified.

**Why this priority**: Production is the target operational value, but premature promotion risks real fiscal effects and cannot be justified by a catalog route alone.

**Independent Test**: Controlled production-shaped fixtures verify route/environment selection and preflight boundaries without transmitting live documents.

**Acceptance Scenarios**:

1. **Given** a specific operation has passed homologation and its current production route and issuer prerequisites are verified, **When** the integrator selects production, **Then** the SDK routes only that operation to the verified endpoint and reports official outcomes distinctly.
2. **Given** homologation evidence, production routing, issuer permission, package applicability, or credentials are missing, **When** production is selected, **Then** the SDK stops before transmission and identifies the missing gate.

### User Story 2 - Prevent accidental cross-environment or contingency fallback (Priority: P2)

An integrator can trust that a production request will not silently reach homologation, another UF, or an unverified contingency route.

**Why this priority**: Environment confusion or automatic fallback can cause incorrect state, duplicate submissions, and unsafe operational assumptions.

**Independent Test**: Deliberately mismatched issuer, key, route, certificate, and environment contexts are rejected before transport.

**Acceptance Scenarios**:

1. **Given** an environment or issuer mismatch, **When** a production operation is prepared, **Then** it fails locally with an explicit boundary.
2. **Given** the normal production route is unavailable, **When** a request is made, **Then** no contingency or homologation fallback occurs unless a separately verified feature explicitly authorizes it.

### Edge Cases

- An operation passed homologation but its production rollout is delayed.
- Issuer registration or certificate subject differs from the document identity.
- Official endpoints change after package release.
- A request times out after possible production receipt.
- Only some lifecycle operations have completed homologation.

## Requirements

### Functional Requirements

- **FR-001**: This feature MUST depend on Feature 032 and the relevant homologation features 035-038; it MUST promote operations individually, never as an unqualified whole-domain switch.
- **FR-002**: Each promoted operation MUST have current official production route, schema applicability, SP issuer/permission evidence, and passing homologation scenarios.
- **FR-003**: The SDK MUST bind document identity, issuer UF, environment, service, endpoint, schema revision, and credential context before transport.
- **FR-004**: Missing or inconsistent prerequisites MUST stop the request before network transmission and identify the unmet requirement without exposing secret values.
- **FR-005**: The SDK MUST NOT switch silently between production/homologation, UFs, authorizers, or contingency modes.
- **FR-006**: The feature MUST define an explicit refresh policy for time-sensitive route and applicability evidence; stale evidence MUST not be represented as current.
- **FR-007**: Live production transmission MUST NOT be a default automated test; tests MUST use controlled fixtures and verify safe routing boundaries.
- **FR-008**: Documentation MUST distinguish SDK production capability from external issuer accreditation, certificates, and authorization to issue.

### Compatibility & Contract Constraints

- **CC-001**: Production behavior MUST be additive and MUST preserve existing homologation behavior.
- **CC-002**: No operation may be promoted nationwide or to contingency as a side effect of SP production support.
- **CC-003**: Any changed result contract must remain explicit about authorized, rejected, pending, unavailable, timeout/inconclusive, and protocol-error states.
- **CC-004**: Validation MUST include focused environment-routing tests, Jest, lint, format, typecheck/build, public-contract audit, and package smoke validation.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [route register and scope matrix](../030-mdfe-source-schema-baseline/research.md) currently marks production operations deferred/blocked.
- **KS-002**: Feature 032 must verify current rollout, SP permission, package applicability, and production route; Features 035-038 establish operation-specific homologation behavior.
- **KS-003**: External credentialing and certificates remain integrator prerequisites; no SDK-side assumption may substitute for official authorization.

### Key Entities

- **Production Promotion Record**: Evidence that one operation passed homologation and meets current production requirements.
- **Environment Context**: Explicit production selection bound to issuer, service route, endpoint, and schema version.
- **External Prerequisite**: Credential, certificate, issuer registration, or permission provisioned outside the SDK.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of production-enabled operations have their own verified route, issuer permission, schema scope, and passing homologation evidence.
- **SC-002**: 100% of environment or issuer mismatches stop before transmission.
- **SC-003**: No request silently falls back to homologation, a different UF, or contingency.
- **SC-004**: Automated validation can exercise production routing decisions without creating a live fiscal document.

## Assumptions

- Production promotion occurs only after Features 032-038 have established the operation-specific prerequisites.
- Credentials, certificates, enrollment, and permission to issue are provisioned externally.
- Contingency is not part of production promotion and is owned by a separate evidence gate.

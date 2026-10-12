# Feature Specification: MDF-e SP Query Operations

**Feature Branch**: `036-mdfe-query-operations`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Provide the verified SP homologation query and service-status operations listed by the national MDF-e catalog.

## User Scenarios & Testing

### User Story 1 - Query an MDF-e by access key (Priority: P1)

An eligible SP integrator can query an MDF-e by key and receive a structured state result that is distinct from authorization submission.

**Why this priority**: Query is required to reconcile a document's current official state without treating local submission history as authoritative.

**Independent Test**: Controlled homologation responses cover found, not found, rejected request, malformed response, unavailable, and environment mismatch outcomes.

**Acceptance Scenarios**:

1. **Given** a valid key and verified SP homologation route, **When** the integrator queries the MDF-e, **Then** the SDK returns the official state and document identity when present.
2. **Given** an invalid key or unverified route, **When** a query is attempted, **Then** the SDK returns an explicit usage or scope boundary without claiming a state.

### User Story 2 - Inspect service status and non-closed manifests (Priority: P2)

An integrator can check the official service status and retrieve eligible non-closed manifest information as separate operations.

**Why this priority**: These operations support diagnosis and transport planning but have different response semantics from document lookup.

**Independent Test**: Separate controlled service responses verify status, non-closed query results, pagination/continuation if officially defined, and protocol errors.

**Acceptance Scenarios**:

1. **Given** an available official status operation, **When** the integrator checks it, **Then** the result reports service status without implying document authorization.
2. **Given** a supported query for non-closed manifests, **When** the service responds, **Then** the SDK preserves the official result and any documented continuation semantics.

### Edge Cases

- A key belongs to a different UF or environment than the selected context.
- A service response is valid XML but contains contradictory status fields.
- A non-closed query's continuation token or result set is incomplete.
- The service catalog is current but the operation is not authorized for the issuer cohort.

## Requirements

### Functional Requirements

- **FR-001**: The feature MUST depend on Features 032 and 033; operations remain blocked unless each operation, route, schema, and SP issuer permission is verified.
- **FR-002**: The SDK MUST keep query-by-key, service-status, and non-closed-manifest queries as distinct public operations and outcome types.
- **FR-003**: Each operation MUST bind the issuer context, UF, environment, route, and applicable schema version and MUST reject mismatches before transport.
- **FR-004**: The SDK MUST preserve official response identity, state, continuation, and error evidence without inferring authorization from service availability.
- **FR-005**: Unsupported response shapes, malformed data, or missing required official evidence MUST produce an explicit protocol or scope result.
- **FR-006**: Tests MUST cover controlled success and failure responses for each operation independently; no live production query is required.

### Compatibility & Contract Constraints

- **CC-001**: New query capabilities MUST be additive from the package root and MUST NOT change existing NF-e/NFC-e query behavior.
- **CC-002**: Nationally cataloged services MUST NOT be represented as universal SP issuer permission.
- **CC-003**: No query operation may imply event mutation, issuance, distribution authorization, or production support.
- **CC-004**: Validation MUST include focused Jest tests, lint, format, typecheck/build, public-contract checks, and package smoke validation.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [SVRS route register](../030-mdfe-source-schema-baseline/research.md) records production and homologation entries for `MDFeConsulta`, `MDFeStatusServico`, and `MDFeConsNaoEnc`.
- **KS-002**: Feature 032 must verify operation semantics, SP issuer permission, current deployment, and schema applicability before implementation.
- **KS-003**: The route catalog is operational evidence only; query semantics and access permissions require the associated official manuals and current authorizer evidence.

### Key Entities

- **MDF-e Query Context**: Issuer, UF, environment, access key, and verified route for a read operation.
- **Query Result**: Official document state or non-closed-manifest result with its protocol evidence.
- **Service Status Result**: Availability/status observation that does not imply document-level success.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of supported query responses are classified by the specific operation and not confused with authorization outcomes.
- **SC-002**: 100% of context mismatches and unverified operations stop before transport.
- **SC-003**: Every promoted operation maps to a current official route and verified SP permission.
- **SC-004**: Controlled tests cover the principal success, boundary, and protocol-error behavior for all included query services.

## Assumptions

- Query support is limited to the SP homologation cohort until production promotion is approved by Feature 039.
- Feature 032 may leave one or more listed operations blocked; the implementation scope follows those decisions rather than the catalog count.

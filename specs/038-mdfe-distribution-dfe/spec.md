# Feature Specification: MDF-e Distribution DFe for the SP Cohort

**Feature Branch**: `038-mdfe-distribution-dfe`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Define controlled MDF-e DFe distribution for an evidence-verified SP actor and environment.

## User Scenarios & Testing

### User Story 1 - Retrieve MDF-e documents permitted for the issuer (Priority: P1)

An authorized SP actor can retrieve only the MDF-e distribution records allowed by the official actor and query rules and understand the result's continuation state.

**Why this priority**: Distribution is a separate service and authorization domain; listing its endpoint does not establish which actors may request which documents.

**Independent Test**: Controlled service fixtures cover eligible and ineligible actors, supported query modes, document batches, continuation identifiers, empty results, and malformed responses.

**Acceptance Scenarios**:

1. **Given** an actor and query mode permitted by current official evidence, **When** the request is made in homologation, **Then** the SDK returns the official documents and continuation state without advancing past unconsumed results.
2. **Given** an actor, query mode, environment, or route without verified permission, **When** a request is attempted, **Then** it is stopped before transport or clearly classified as an official denial.

### User Story 2 - Resume distribution without losing or duplicating progress (Priority: P2)

An integrator can continue a multi-response distribution flow using official continuation semantics without the SDK silently discarding or inventing progress.

**Why this priority**: Incorrect sequence handling can skip documents or cause repeated processing while appearing successful.

**Independent Test**: Deterministic fixtures simulate consecutive responses, repeated continuation values, gaps, empty pages, and recovery after a transport interruption.

**Acceptance Scenarios**:

1. **Given** a valid continuation value and a supported request, **When** the integrator resumes, **Then** the next request uses the official continuation contract and reports progress explicitly.
2. **Given** the server returns a gap, duplicate, or malformed continuation state, **When** the flow is interpreted, **Then** the SDK exposes an explicit protocol/inconclusive result and does not advance local state silently.

### Edge Cases

- Actor authorization differs between homologation and production.
- A document distribution service is listed but issuer permissions are not published.
- A continuation value repeats or skips expected sequence state.
- A batch contains compressed XML that fails integrity or document validation.
- A timeout occurs after the authorizer may have advanced the distribution cursor.

## Requirements

### Functional Requirements

- **FR-001**: The feature MUST depend on Features 032 and 033 and MUST remain blocked until SP actor eligibility, query modes, route, schema, and environment permissions are verified.
- **FR-002**: The SDK MUST expose an additive distribution operation only for the verified actor/query scope and MUST not infer permissions from the endpoint catalog.
- **FR-003**: The SDK MUST preserve the official continuation/sequence contract and MUST distinguish response receipt from durable consumer processing.
- **FR-004**: The SDK MUST report document batches, continuation state, transport outcome, and protocol errors without silently advancing or dropping progress.
- **FR-005**: Returned payloads MUST be bounded and validated according to official document, compression, and size rules established during planning.
- **FR-006**: Tests MUST exercise sequential continuation and failure recovery using controlled fixtures, not production credentials or live document retrieval.

### Compatibility & Contract Constraints

- **CC-001**: Distribution support MUST be additive from the package root and MUST NOT alter existing NF-e/NFC-e distribution or recipient-manifestation contracts.
- **CC-002**: Actor permissions and data-access rules are part of the public behavior and MUST be backed by current primary evidence.
- **CC-003**: The feature MUST NOT add required local persistence or promise a background synchronization service.
- **CC-004**: Validation MUST include focused distribution fixtures, Jest, lint, format, typecheck/build, public-contract checks, and tarball validation.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [SVRS route register](../030-mdfe-source-schema-baseline/research.md) records `MDFeDistribuicaoDFe` version 1.00 in both environments.
- **KS-002**: Feature 032 must establish actor eligibility, query semantics, payload limits, continuation rules, and actual rollout before this feature can be implemented.
- **KS-003**: National route publication is not evidence of a specific SP actor's permission or entitlement to a distributed document.

### Key Entities

- **Distribution Request**: Verified actor, query mode, UF, environment, and continuation context.
- **Distribution Batch**: Official response containing documents and a continuation value.
- **Distribution Progress**: Consumer-observable state that distinguishes received data from acknowledged processing.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of supported requests map to a verified actor, query mode, environment, route, and schema scope.
- **SC-002**: 100% of malformed or uncertain continuation responses are surfaced without silent progress advancement.
- **SC-003**: Controlled tests prove correct continuation across success, empty, repeated, gap, and timeout scenarios.
- **SC-004**: No distribution capability is described as SP-supported solely because the national endpoint is cataloged.

## Assumptions

- Distribution is a separate capability from issuance, query-by-key, and recipient manifestation.
- Feature 032 may conclude that the initial SP distribution scope is unavailable or too ambiguous; that outcome keeps the feature blocked.
- Production distribution is owned by Feature 039 and is not implied here.

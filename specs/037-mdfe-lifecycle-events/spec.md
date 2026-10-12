# Feature Specification: MDF-e SP Lifecycle Events

**Feature Branch**: `037-mdfe-lifecycle-events`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Add schema-backed SP homologation support for only those MDF-e lifecycle events verified by the baseline.

## User Scenarios & Testing

### User Story 1 - Close an eligible MDF-e (Priority: P1)

An eligible SP issuer can submit a closure event for an authorized MDF-e when official lifecycle prerequisites are satisfied.

**Why this priority**: Closing a manifest is a core post-issuance obligation, but an invalid or premature event can create an operationally harmful state.

**Independent Test**: Controlled event fixtures exercise eligible and ineligible document states, valid and invalid event payloads, accepted/rejected responses, and malformed protocol responses.

**Acceptance Scenarios**:

1. **Given** an authorized MDF-e in a state where closure is permitted by the verified rules, **When** the issuer submits closure in homologation, **Then** the SDK reports the official event result and protocol evidence.
2. **Given** the document is not eligible for closure or the event schema is unverified, **When** closure is requested, **Then** the request is rejected locally or remains explicitly blocked before transport.

### User Story 2 - Cancel or register another verified lifecycle event (Priority: P2)

An issuer can perform only the cancellation or additional event subtypes whose schema, actor, lifecycle, and authorization rules have been verified.

**Why this priority**: A generic event service does not prove every event type is supported or permitted for every issuer and document state.

**Independent Test**: Each included event subtype has separate schema-valid fixtures and controlled responses; unsupported subtypes fail before transport.

**Acceptance Scenarios**:

1. **Given** a verified event subtype, valid actor, and eligible MDF-e, **When** the event is submitted, **Then** the result identifies the subtype and official outcome.
2. **Given** an event subtype, sequence, actor, or lifecycle state outside the verified scope, **When** it is requested, **Then** the SDK returns an explicit unsupported or usage boundary without implying success.

### Edge Cases

- An event is duplicated or submitted out of sequence.
- A document's current state cannot be established before the event.
- The event response contains a protocol but an unsuccessful official status.
- A signature valid for one XML target is applied to a different event subtype.
- A national event catalog does not establish SP issuer permission.

## Requirements

### Functional Requirements

- **FR-001**: The feature MUST depend on Features 032 and 033 and MUST include only event subtypes verified for the SP cohort, environment, schema revision, and lifecycle state.
- **FR-002**: The SDK MUST validate event-specific fields, document identity, actor, sequence, and lifecycle prerequisites before transmission when those rules are established by primary sources.
- **FR-003**: The SDK MUST sign each event according to the verified MDF-e signature contract; it MUST not assume NF-e event-signature compatibility without a focused compatibility proof.
- **FR-004**: Closure, cancellation, and any additional event subtype MUST have distinct operation identity and structured result semantics.
- **FR-005**: The SDK MUST distinguish accepted, rejected, pending/uncertain, unavailable, and protocol-error outcomes from transmission success.
- **FR-006**: Unsupported, unverified, duplicate, or out-of-sequence events MUST stop with an explicit boundary and MUST NOT be sent under a generic fallback.
- **FR-007**: Fixtures and tests MUST cover each promoted event type, lifecycle boundary, and controlled service outcome without using live production documents.

### Compatibility & Contract Constraints

- **CC-001**: Event operations and public result types MUST be additive from the package root; existing event APIs for other fiscal documents remain unchanged.
- **CC-002**: The presence of `MDFeRecepcaoEvento` in the national catalog MUST NOT be interpreted as support for every event subtype.
- **CC-003**: Event signing, schemas, and runtime operation are separate contracts and MUST each pass their own evidence gate.
- **CC-004**: Validation MUST include focused contract and fixture tests, lint, format, typecheck/build, public-contract checks, and package validation.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [route register and scope matrix](../030-mdfe-source-schema-baseline/research.md) list the SVRS `MDFeRecepcaoEvento` route and mark closure, cancellation, and other events as blocked.
- **KS-002**: Feature 032 is the gate for event subtype, actor, schema, effective interval, and SP permission evidence.
- **KS-003**: CONFAZ acts, current MOC/NT material, official SVRS event schemas, and SP operational sources are primary; generic NF-e event patterns are not a substitute.

### Key Entities

- **MDF-e Lifecycle Event**: A verified event subtype bound to a document, actor, sequence, and eligible lifecycle state.
- **Event Outcome**: Official processing result with protocol and next action where supported.
- **Lifecycle Gate**: Evidence-backed rule that permits or blocks an event before transport.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of promoted event subtypes have verified schema, actor, lifecycle, environment, and route evidence.
- **SC-002**: 100% of unsupported or ineligible event requests stop before transmission.
- **SC-003**: No event transmission success is reported as official event acceptance without a valid response outcome.
- **SC-004**: Each included event subtype has focused success, rejection, and boundary fixtures.

## Assumptions

- This feature is homologation-only until Feature 039 promotes individual operations.
- Feature 032 may exclude or defer cancellation or other events; the final task plan must follow that decision.
- No contingency event, EPEC, or nationwide event support is implied.

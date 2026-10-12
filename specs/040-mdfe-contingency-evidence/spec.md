# Feature Specification: MDF-e Contingency Evidence Gate

**Feature Branch**: `040-mdfe-contingency-evidence`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Resolve whether an official MDF-e contingency mode exists for the proposed SP cohort before any contingency runtime design is approved.

## User Scenarios & Testing

### User Story 1 - Determine the permitted MDF-e contingency behavior (Priority: P1)

A maintainer can identify from current primary sources whether MDF-e has a contingency mode applicable to SP, including activation, routing, payload, and recovery rules.

**Why this priority**: Feature 030 found no verified MDF-e contingency procedure. Inferring rules from NF-e or NFC-e would create an unsupported fiscal behavior.

**Independent Test**: An independent reviewer follows each registered primary source and confirms that every proposed mode and operational step is either evidenced or explicitly unresolved and excluded.

**Acceptance Scenarios**:

1. **Given** primary sources define a mode and its SP applicability, **When** the evidence review is completed, **Then** the mode, eligibility, activation, route, payload, recovery, and effective interval are recorded separately.
2. **Given** no primary source establishes a complete procedure, **When** the review closes, **Then** MDF-e contingency remains excluded from runtime and no implementation spec claims support.

### User Story 2 - Keep normal authorization safe while evidence is unresolved (Priority: P2)

An integrator can distinguish normal MDF-e authorization from contingency and is never silently redirected to an unverified fallback.

**Why this priority**: An explicit unsupported boundary is safer than applying an unrelated document's contingency behavior.

**Independent Test**: Review the runtime specs and assert that a service outage cannot trigger an MDF-e contingency route or imply authorization.

**Acceptance Scenarios**:

1. **Given** an MDF-e service is unavailable and no contingency procedure is verified, **When** an authorization is attempted, **Then** the normal flow returns an unavailable/inconclusive result and does not switch routes.
2. **Given** a later official source establishes a contingency mode, **When** evidence is accepted, **Then** a separate implementation spec is required before runtime support is added.

### Edge Cases

- NF-e/NFC-e manuals describe similarly named modes that do not apply to MDF-e.
- A portal says a service is unavailable but does not define a legal contingency procedure.
- A mode applies only to a subset of UFs, issuers, operations, or environments.
- Activation is described but expiration, reconciliation, or recovery is missing.

## Requirements

### Functional Requirements

- **FR-001**: The review MUST consult current primary CONFAZ, MOC/NT, SVRS, and relevant Fazenda SP publications and record source, consulted date, and exact evidence locator.
- **FR-002**: The review MUST determine separately whether official evidence exists for mode eligibility, activation, endpoint/routing, payload or issuance changes, duration, recovery/reconciliation, and SP applicability.
- **FR-003**: NF-e/NFC-e contingency behavior, service-availability notices, and secondary-library implementations MUST NOT be treated as MDF-e authority.
- **FR-004**: Until every required step has primary support, MDF-e contingency MUST remain excluded or unverified in the Feature 030 matrix and runtime contracts.
- **FR-005**: This feature MUST remain documentation-only; any verified procedure that warrants runtime support MUST be followed by a separate implementation specification and tests.
- **FR-006**: The review MUST update Feature 030's source register/matrix and identify which downstream runtime gates remain open.

### Compatibility & Contract Constraints

- **CC-001**: This evidence gate MUST NOT change the published ESM contract or add contingency runtime behavior.
- **CC-002**: Normal authorization MUST not silently fall back to a guessed contingency mode.
- **CC-003**: A positive evidence result does not itself authorize runtime implementation; a separate scope, plan, and test contract are required.
- **CC-004**: Validation MUST include documentation links, formatting, and an independent source/procedure review.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [contingency decisions and scope matrix](../030-mdfe-source-schema-baseline/research.md) currently exclude contingency in both environments because no official mode, activation, route, or recovery procedure was verified.
- **KS-002**: Feature 016 covers NF-e/NFC-e contingency boundaries and is not normative for MDF-e; consult it only to prevent accidental cross-document assumptions.
- **KS-003**: Only current primary MDF-e sources may establish requirements; secondary sources may only locate the official material.

### Key Entities

- **Contingency Mode Evidence**: Primary-source record for a mode, issuer, operation, environment, route, and validity interval.
- **Activation and Recovery Procedure**: Officially defined steps for entering, operating, reconciling, and leaving contingency.
- **Unsupported Boundary**: Explicit result that prevents inferred contingency behavior while evidence is incomplete.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Every contingency procedure element is marked evidenced, unresolved, or not applicable with a primary-source locator.
- **SC-002**: If any mandatory procedure element or SP applicability is unknown, all runtime specs keep contingency excluded.
- **SC-003**: No MDF-e contingency behavior is inferred from NF-e/NFC-e or service-availability notices.
- **SC-004**: A reviewer can determine whether a follow-on implementation spec is justified from the evidence register alone.

## Assumptions

- Feature 030's current outcome remains authoritative until newer primary evidence is reviewed.
- This feature can validly conclude that MDF-e contingency remains unsupported; it is not required to produce a positive implementation path.
- A future contingency runtime feature, if justified, will have a separate scope and compatibility review.

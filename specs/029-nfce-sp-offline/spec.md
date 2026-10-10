# Feature Specification: NFC-e SP Offline Contingency

**Feature Branch**: `029-nfce-sp-offline` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this slice specifies operationally bounded SP NFC-e offline issuance and later reconciliation.

## User Scenarios & Testing

### User Story 1 - Issue during loss of connectivity (Priority: P1)

An SP retailer can follow an officially permitted offline procedure during loss of service, while the result clearly identifies the document as pending subsequent transmission or resolution rather than authorized.

**Why this priority**: A retail checkout flow needs a deliberate response to an outage, but cannot present an offline document as an authorization already granted by the tax authority.

**Independent Test**: Exercise the supported offline conditions with controlled document and recovery fixtures; confirm explicit status and follow-up action without real production transmission.

**Acceptance Scenarios**:

1. **Given** an official offline condition applies and a valid eligible document is prepared, **When** the issuer enters the supported offline procedure, **Then** the result identifies the document and its offline status and states the next required action.
2. **Given** the offline condition is not officially supported or required issuer prerequisites are missing, **When** the issuer requests offline issuance, **Then** the flow stops with an explicit boundary and does not claim authorization.

### User Story 2 - Reconcile an offline document after recovery (Priority: P2)

After connectivity returns, the issuer can identify documents requiring transmission and distinguish accepted, rejected, pending, or unresolved outcomes.

**Why this priority**: Offline issuance is not complete until later official processing is reconciled and the issuer knows which documents need action.

**Independent Test**: Provide offline records and simulated official responses; verify correct association and distinct results without duplicate transmission.

**Acceptance Scenarios**:

1. **Given** an offline NFC-e awaiting follow-up, **When** service recovers and the issuer performs the supported reconciliation, **Then** the result is associated with the original document and exposes the official outcome or a clear next action.

### Edge Cases

- Clock or sequence information becomes stale while offline.
- The same offline document is submitted more than once.
- Offline duration exceeds a normative time limit.
- Recovery returns rejection, duplicate, pending, or an ambiguous response.
- A local workstation loses its temporary record before reconciliation.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST establish and document the current official conditions under which SP NFC-e offline issuance is permitted before enabling the flow.
- **FR-002**: The system MUST distinguish offline preparation/issuance, official authorization, and later reconciliation as separate document states.
- **FR-003**: The system MUST enforce all official document identity, environment, timing, sequencing, and issuer prerequisites applicable to the confirmed SP procedure.
- **FR-004**: The system MUST provide the auxiliary representation and consumer information required for an eligible offline document, consistent with the dedicated DANFE slice and current official rules.
- **FR-005**: The system MUST retain enough association information to reconcile the original offline document with later transmission and response.
- **FR-006**: The system MUST prevent silent duplicate follow-up and distinguish authorized, rejected, pending, unavailable, and inconclusive outcomes.
- **FR-007**: If required external activation, official conditions, or necessary evidence cannot be confirmed, the system MUST stop or return a clearly bounded assisted procedure rather than inventing permission.
- **FR-008**: The system MUST disclose records that require operator attention and MUST NOT silently discard an offline document or its unresolved state.
- **FR-009**: The system MUST keep broader automatic multi-document recovery or indefinite background polling outside scope unless explicitly added through a separate decision.

### Compatibility & Contract Constraints

- **CC-001**: Offline behavior MUST be additive and MUST preserve normal production and homologation authorization behavior.
- **CC-002**: Planning MUST identify all official offline-specific schema and document rules before changing generated artifacts; none are presumed by this specification.
- **CC-003**: Existing authorization result meanings MUST remain unchanged; new offline and reconciliation statuses must be explicit.
- **CC-004**: Validation MUST cover condition gates, document fixtures, duplicate/recovery cases, lint, format, type/build, and package contracts; live production use is not a default test gate.

### Knowledge Sources & Provenance

- **KS-001**: Primary sources: `SRC-RH-002`, MOC 7.0 (November 2020; consulted 2026-05-19), and `SRC-RH-003`, DANFE NFC-e/QR Code manual v6.0 (March 2025; consulted 2026-05-19); the current official SP offline instructions and service status must be identified before implementation.
- **KS-002**: No secondary source is normative. Any operational comparison is non-normative and must be labeled accordingly.
- **KS-003**: Captured local sources do not establish the current complete SP NFC-e offline policy, activation mechanism, timing limits, or state-specific recovery requirements. Planning MUST resolve and record these from current primary sources; runtime behavior MUST NOT be implemented from inferred NF-e or historical rules.

### Key Entities

- **Offline NFC-e**: Eligible SP consumer document prepared under an officially permitted offline procedure.
- **Offline record**: Information retained to identify and reconcile the original document after connectivity returns.
- **Reconciliation outcome**: Official or explicitly unresolved status after later processing.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Every supported offline condition has a cited current primary source, an explicit entry condition, and a recovery action before runtime promotion.
- **SC-002**: 100% of test cases distinguish offline status from official authorization.
- **SC-003**: 100% of recovered test documents remain associated with the original offline record and have a distinct terminal, pending, or operator-action result.
- **SC-004**: Unsupported or unverified conditions never trigger a claim of authorization or an automatic contingency switch.

## Assumptions

- SP is the initial offline cohort; no other UF is implied.
- Offline conditions, activation evidence, and limits are externally governed and may change; current authoritative sources are a planning gate.
- DANFE NFC-e output is delivered by spec `028`; this spec consumes that capability rather than defining a competing renderer.
- This slice does not imply that the SDK can authorize offline documents while disconnected.

# Feature Specification: MDF-e Baseline Applicability Resolution

**Feature Branch**: `032-mdfe-baseline-resolution`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Decompose the blocked MDF-e SP runtime roadmap using the evidence recorded by Feature 030.

## User Scenarios & Testing

### User Story 1 - Resolve schema identity and applicability (Priority: P1)

A maintainer can select an MDF-e schema baseline only after the official package identity, version, supersession, and applicability are supported by primary evidence.

**Why this priority**: Feature 030 inspected the base package and found that the SVRS-listed NT archive labeled 1.04 contains an internal directory labeled 1.05. Generating or shipping types before resolving that conflict would turn uncertain evidence into a package contract.

**Independent Test**: A reviewer traces each proposed document/event package to the official publication, exact archive digest, revision, effective interval, and environment/operation scope, or confirms that the unresolved item remains blocked.

**Acceptance Scenarios**:

1. **Given** an official clarification or superseding publication is available, **When** the baseline is reviewed, **Then** the source register records the exact identity, applicability, and supersession evidence without inferring deployment from a publication date.
2. **Given** SVRS does not resolve the 1.04/1.05 identity or applicability conflict, **When** the review closes, **Then** the package remains unverified and no downstream schema or runtime spec treats it as selected.

### User Story 2 - Verify the initial SP issuer and operation cohort (Priority: P2)

A maintainer can identify which SP issuer profiles, environments, and MDF-e operations have sufficient official evidence to enter implementation.

**Why this priority**: National service routes alone do not establish SP issuer eligibility, event permissions, or actual deployment in homologation and production.

**Independent Test**: Compare every proposed scope row with primary legal, technical, and operational sources and confirm it is either evidence-backed or explicitly excluded, deferred, or unverified.

**Acceptance Scenarios**:

1. **Given** official SP and SVRS evidence for an issuer and operation, **When** the scope matrix is updated, **Then** it records the exact cohort, operation, environment, route, schema, and evidence identifiers.
2. **Given** evidence is incomplete for issuer permissions, event subtype, package applicability, or rollout, **When** the matrix is reviewed, **Then** that row remains blocked and is not described as supported.

### Edge Cases

- The portal filename, page label, archive root, and NT revision disagree.
- Legal effectivity is known but technical rollout is not.
- A service is listed nationally but SP issuer eligibility is not established.
- A scheduled rollout date has passed but actual deployment is unverified.
- No official source resolves a required item by the review date.

## Requirements

### Functional Requirements

- **FR-001**: The work MUST reconcile the SVRS-listed `PL_MDFe_300b_NT012025_1.04.zip` identity conflict against primary SVRS evidence; absent authoritative resolution, it MUST remain unverified.
- **FR-002**: The work MUST establish applicability by package revision, document/event family, operation, environment, UF, and effective interval where official evidence provides those dimensions; unknown dimensions MUST remain explicitly unverified.
- **FR-003**: The work MUST distinguish legal effectivity, publication date, scheduled rollout, observed deployment, and package revision as separate facts.
- **FR-004**: The work MUST verify the proposed SP issuer/accreditation cohort and operation/event permissions from primary official sources or retain the affected rows as blocked.
- **FR-005**: The work MUST update Feature 030's source register and scope matrix with dated citations, package digests, and clear decisions, without silently changing a candidate to verified.
- **FR-006**: The work MUST leave Feature 031 and every downstream implementation slice blocked for each unresolved prerequisite.
- **FR-007**: This feature MUST NOT add XSDs, generated declarations, runtime code, package exports, or live service behavior.

### Compatibility & Contract Constraints

- **CC-001**: This evidence-resolution feature MUST NOT change the ESM import surface or published package contract.
- **CC-002**: No schema family or generated artifact is selected for implementation until package identity and applicability pass FR-001 and FR-002.
- **CC-003**: Unresolved official evidence MUST be recorded as a blocker, not replaced by a secondary source or an inferred default.
- **CC-004**: Validation MUST include internal-link and Markdown formatting checks plus an independent review of every changed source and scope row.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [research register](../030-mdfe-source-schema-baseline/research.md) is the starting evidence set, including SRC-001 through SRC-012, both archive digests, the route register, and the initial scope matrix.
- **KS-002**: CONFAZ, SVRS, and Fazenda SP are the primary authorities by legal, national technical/operational, and state-operational roles respectively; secondary references may locate but cannot resolve a conflict.
- **KS-003**: The 2026-10-12 findings are not assumed current indefinitely; every new conclusion MUST record its consultation date and source locator.

### Key Entities

- **Applicability Record**: Officially supported package-to-document, operation, environment, UF, and date relationship.
- **Issuer Cohort**: A specifically evidenced category of SP issuer and its required accreditation or permissions.
- **Evidence Gate**: A prerequisite that is either satisfied by primary evidence or remains visibly blocked.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of schema packages proposed for implementation have a reconciled exact identity and digest; any unresolved package is explicitly blocked.
- **SC-002**: 100% of proposed SP operation/environment rows are either traceable to primary evidence or remain explicitly excluded, deferred, or unverified.
- **SC-003**: No downstream spec reports a schema, issuer cohort, route, or rollout as verified solely from a scheduled date or national service listing.
- **SC-004**: A reviewer can identify every remaining blocker from the source register and scope matrix without relying on undocumented assumptions.

## Assumptions

- Feature 030 remains the canonical location for national and SP source records; this feature updates that evidence rather than duplicating it.
- If SVRS or another authority does not publish enough evidence to resolve a gate, the correct outcome is a documented blocker, not an inferred implementation choice.
- This feature is a documentation-only prerequisite; no live authorization or production credential is required.

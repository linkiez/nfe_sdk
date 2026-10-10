# Feature Specification: MDF-e SP Operational Runtime

**Feature Branch**: `031-mdfe-sp-runtime` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this is the first MDF-e runtime slice, dependent on verified national/state sources and schema baseline.

## User Scenarios & Testing

### User Story 1 - Create and authorize an SP MDF-e in homologation (Priority: P1)

An SP issuer can prepare, validate, sign, and submit an MDF-e in homologation and receive a clear official authorization outcome.

**Why this priority**: Homologation is the necessary operational proof before a production path can be promoted, and the repository currently has no MDF-e runtime baseline.

**Independent Test**: Use official schema-valid fixtures and controlled service responses to exercise successful, rejected, pending, unavailable, and invalid requests without sending real documents.

**Acceptance Scenarios**:

1. **Given** a valid SP MDF-e in the verified supported schema version, **When** the issuer submits it in homologation, **Then** the result identifies the document and its official terminal or pending state.
2. **Given** invalid document data, unsupported schema version, or an unverified operation, **When** the issuer attempts submission, **Then** the request is rejected locally or stopped at an explicit boundary before it is reported as authorized.

### User Story 2 - Complete the supported post-authorization lifecycle (Priority: P2)

An issuer can query and perform the post-issuance actions included in the verified scope, such as closure or cancellation, and can distinguish each result.

**Why this priority**: An isolated authorization call does not cover the core operational lifecycle required to manage a transport manifest.

**Independent Test**: Exercise each operation declared in the verified initial scope with valid and invalid lifecycle fixtures and controlled responses.

**Acceptance Scenarios**:

1. **Given** an authorized MDF-e in an eligible state, **When** the issuer performs a supported lifecycle operation, **Then** the result identifies the operation, the official outcome, and any follow-up requirement.
2. **Given** a lifecycle operation is unsupported, out of sequence, or invalid for the document, **When** it is requested, **Then** the system returns a specific boundary or validation result without implying success.

### User Story 3 - Promote the verified SP flow to production deliberately (Priority: P3)

An integrator can use the SP production environment only after the same operation has passed homologation and the issuer's external permissions and credentials are ready.

**Why this priority**: The ultimate goal is production readiness, but promotion must not precede source verification and end-to-end homologation evidence.

**Independent Test**: Verify that production operations require matching environment and external prerequisite evidence, and test their behavior against controlled production-shaped responses without live issuance.

**Acceptance Scenarios**:

1. **Given** verified current production routing and externally provisioned issuer credentials, **When** the issuer selects production, **Then** only the confirmed SP operations are routed to production and return distinct official outcomes.
2. **Given** prerequisites or current official routing evidence are missing, **When** production is requested, **Then** the flow stops before transmission and states the missing prerequisite.

### Edge Cases

- A schema or technical note changes the supported payload.
- Authorization returns a receipt or uncertain timeout after submission may have succeeded.
- The issuer requests a closure/cancellation or event in an invalid lifecycle state.
- The official service is unavailable or returns malformed data.
- The production credential is absent, expired, or does not match issuer identity.
- A state-specific route or service instruction has changed.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST implement the MDF-e document and schema behavior only from the version/applicability baseline verified by spec `030`.
- **FR-002**: The initial runtime cohort MUST be explicitly limited to SP issuer routing and to operations confirmed in the source/scope matrix; unsupported UF/operation combinations MUST stop explicitly.
- **FR-003**: The system MUST support the complete declared homologation path for each included operation, including document validation, signing, submission, response interpretation, and any asynchronous continuation required by the verified official lifecycle.
- **FR-004**: The system MUST distinguish authorized, rejected, pending, unavailable, timeout, and protocol-error outcomes and MUST NOT infer authorization from transmission success alone.
- **FR-005**: The system MUST support post-authorization query, closure, cancellation, and events only when each is included in the verified scope and MUST enforce official lifecycle prerequisites.
- **FR-006**: The system MUST bind every operation to document identity, issuer, UF, environment, service route, and supported schema version.
- **FR-007**: Production transmission MUST remain blocked until current official SP production route, credential prerequisites, and the corresponding homologation path have verified evidence.
- **FR-008**: The system MUST keep credentials and certificates externally provisioned and MUST NOT expose their secret material in results or diagnostics.
- **FR-009**: The system MUST preserve sufficient request/response evidence to support diagnosis and document-state reconciliation.
- **FR-010**: Contingency behavior MUST remain an explicit boundary unless a dedicated official-source-backed slice defines and tests its permitted modes and recovery.
- **FR-011**: The system MUST distinguish MDF-e runtime support from incidental MDF-e key fields in unrelated event schemas.

### Compatibility & Contract Constraints

- **CC-001**: The public package contract and ESM entrypoints for NF-e/NFC-e MUST remain unchanged; MDF-e exports, if introduced, are additive and deliberately documented.
- **CC-002**: Generated MDF-e artifacts MUST match the official schema versions and applicability established by spec `030`; unrelated schema families MUST remain reproducible.
- **CC-003**: The first MDF-e API contract MUST not imply nationwide, all-environment, all-operation, or contingency support beyond its confirmed SP scope.
- **CC-004**: Validation MUST cover generated-artifact reproducibility, schema-valid fixtures, focused Jest tests for success/failure/lifecycle behavior, lint, format, type/build, and package export checks.

### Knowledge Sources & Provenance

- **KS-001**: Primary MDF-e manuals, schema packages, technical notes, and service catalogs are to be identified and versioned by spec `030`; this runtime specification MUST NOT advance to implementation until those sources are attached or internally captured with provenance.
- **KS-002**: State-operational references are supplemental to national normative sources and MUST be labeled as such; secondary sources cannot establish fiscal behavior.
- **KS-003**: The existing PR/PB captures are discovery leads only. Current SP routing, production availability, issuer prerequisites, event scope, and schema applicability remain unresolved until primary sources are verified through spec `030`.

### Key Entities

- **MDF-e**: Transport manifest document identified by its access key and issuer.
- **MDF-e lifecycle operation**: Officially defined issuance, query, closure, cancellation, or event action applicable to the document's current state.
- **Schema baseline**: Versioned official structure and applicability interval for the document and supported events.
- **Operational outcome**: Official authorization or lifecycle response and the next action available to the issuer.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of declared supported SP homologation operations pass their official-schema fixture and controlled response scenarios.
- **SC-002**: 100% of unsupported UF, schema, lifecycle, or environment requests stop with an explicit boundary and are never represented as successful.
- **SC-003**: Every promoted production operation has a linked official route, verified external prerequisite, and passing homologation scenario before release.
- **SC-004**: An integrator can distinguish document authorization from submission, query, closure, cancellation, and event outcomes using the public result and documentation.

## Assumptions

- Spec `030` is a blocking prerequisite; an unresolved authoritative source or schema conflict prevents implementation promotion.
- SP is the initial runtime UF to align with the NF-e/NFC-e production roadmap, subject to confirmation against the official MDF-e service catalog.
- External issuer enrollment, certificates, and authorization to use production are not performed by the SDK.
- Contingency is not implied by normal production support and remains separately gated.
- The phrase “complete coverage” means complete within an explicit supported cohort and lifecycle slice, not unbounded nationwide coverage.

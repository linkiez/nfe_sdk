# Feature Specification: MDF-e Source and Schema Baseline

**Feature Branch**: `030-mdfe-source-schema-baseline` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; MDF-e has no operational facade or dedicated XSD baseline in the repository, so this is the prerequisite evidence and scope slice.

## User Scenarios & Testing

### User Story 1 - Identify the current normative MDF-e baseline (Priority: P1)

A maintainer can determine which current official MDF-e rules, manuals, technical notes, schema packages, service descriptions, and validity dates define the first supported SDK scope.

**Why this priority**: Without a verified primary baseline, an implementation could encode outdated or incomplete rules and cannot claim reliable document support.

**Independent Test**: An independent reviewer follows the source register to the primary publications and verifies each selected version, publication date, applicability, and retrieval evidence.

**Acceptance Scenarios**:

1. **Given** the official national and relevant state sources, **When** the maintainer prepares the baseline, **Then** each source is classified as normative or operational, given provenance, and reconciled for version and validity.
2. **Given** a source is inaccessible, contradictory, or not authoritative, **When** the baseline is reviewed, **Then** the unresolved gap is listed explicitly and is not promoted as a verified rule.

### User Story 2 - Define a bounded first MDF-e operational scope (Priority: P2)

A maintainer and integrator can see which issuer cohort, environments, document lifecycle operations, events, and contingency conditions are included in the first runtime slice.

**Why this priority**: MDF-e spans document issuance and post-issuance lifecycle; a bounded scope makes subsequent runtime work testable without implying national completeness.

**Independent Test**: A reviewer compares the scope matrix with official sources and confirms that every included operation has an authoritative basis and every excluded item has a visible boundary.

**Acceptance Scenarios**:

1. **Given** the verified source baseline, **When** the initial scope is reviewed, **Then** supported issuer/state cohort, environment, operations, schema version, and exclusions are explicit.
2. **Given** only partial state evidence exists, **When** a state is considered, **Then** the scope excludes or labels that state as unverified rather than assuming national behavior is sufficient.

### Edge Cases

- Several active schema package versions exist with overlapping applicability.
- A technical note supersedes or partially amends a manual.
- National rules and state service instructions appear inconsistent.
- A captured state page is navigational rather than normative or technical.
- A source cannot be retrieved, has no verifiable publication date, or is stale.

## Requirements

### Functional Requirements

- **FR-001**: The work MUST identify primary official MDF-e sources for the first supported lifecycle and record source identifier, publisher, title/version, publication/effective dates when available, consulted date, URL or local path, and normative/operational classification.
- **FR-002**: The work MUST distinguish current normative material from historical, superseded, secondary, and navigational references.
- **FR-003**: The work MUST identify the schema package(s), namespace, version, effective period, and official source for every MDF-e document or event included in the first runtime scope.
- **FR-004**: The work MUST reconcile applicable technical notes and amendments with the selected manual and schema versions, recording unresolved conflicts instead of choosing silently.
- **FR-005**: The work MUST define a testable first scope covering issuer cohort/UF, homologation and production boundaries, document issuance, post-issuance operations, relevant events, and contingency inclusion or exclusion.
- **FR-006**: The work MUST identify the required service catalog and routing evidence for each included UF/environment/operation combination.
- **FR-007**: The work MUST record unsupported, inaccessible, or unverified source areas and MUST prevent those areas from being represented as implemented or production-ready.
- **FR-008**: The work MUST produce an acceptance-ready follow-on runtime specification whose behavior is traceable to the verified source register and scope matrix.
- **FR-009**: The work MUST distinguish national requirements from state-specific operational deltas and package-local contract decisions.

### Compatibility & Contract Constraints

- **CC-001**: This source-baseline slice does not add or alter ESM import paths or the published runtime package contract.
- **CC-002**: It establishes, but does not implement, the MDF-e schema and generated-artifact inventory; official schema packages and their provenance must be identified before code generation is planned.
- **CC-003**: No compatibility promise is made for MDF-e until the follow-on runtime contract explicitly defines public identifiers and versioning.
- **CC-004**: Validation MUST include reviewable source provenance, version/applicability reconciliation, an explicit scope matrix, and a type/lint/build/test impact assessment for the follow-on work.

### Knowledge Sources & Provenance

- **KS-001**: Candidate primary captures: official PR MDF-e portal at `docs/_sources/markdown/official/sped.fazenda.pr.gov.br/index-704e8b126d.md`; official PB MDF-e page at `docs/_sources/markdown/official/www.sefaz.pb.gov.br/info/documentos-fiscais/mdf-e/index-72e0d57492.md`. These captures are discovery leads only and do not by themselves establish the national normative baseline.
- **KS-002**: Secondary references may be used only to discover primary publications; label them non-normative and do not use them to establish requirements.
- **KS-003**: No current authoritative national MDF-e manual/schema package and complete applicability matrix has yet been established in this repository. Planning MUST obtain and record this evidence. If access is unavailable or sources conflict, the affected runtime scope remains blocked or explicitly deferred.

### Key Entities

- **MDF-e normative source**: Official publication that defines a fiscal requirement or valid schema.
- **Schema baseline**: Verified set of schema versions and applicability intervals for the selected document/events.
- **Service route**: Official destination and operation mapping by UF and environment.
- **Scope matrix**: Explicit mapping of supported issuer cohort, operations, environment, and evidence maturity.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of schema families in the proposed initial scope have an official source, version, namespace, and applicability status recorded.
- **SC-002**: Every included runtime operation maps to at least one current primary source; unsupported or conflicting behavior is explicitly marked.
- **SC-003**: A reviewer can determine whether the initial MDF-e slice is ready to implement from the evidence register and scope matrix without relying on undocumented assumptions.
- **SC-004**: The follow-on runtime scope is limited to one explicit issuer cohort and contains a verifiable list of included and excluded lifecycle operations.

## Assumptions

- Existing PR and PB page captures are leads, not a verified technical specification.
- National primary sources define the fiscal baseline; state sources are required for state-specific services and operational differences.
- Schema capture and runtime implementation are separate slices so uncertain evidence cannot be mistaken for shipped support.
- SP is the initial runtime cohort unless verified source evidence or a focused clarification requires another choice.

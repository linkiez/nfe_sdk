# Feature Specification: MDF-e Schema Package and Reproducible Generation

**Feature Branch**: `033-mdfe-schema-codegen`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Add the verified MDF-e schema family to the package after Feature 032 resolves source identity and applicability.

## User Scenarios & Testing

### User Story 1 - Import the approved MDF-e schema baseline (Priority: P1)

A maintainer can add only officially verified MDF-e document and event schemas to the repository with provenance that can be reproduced later.

**Why this priority**: Runtime document contracts must come from the exact schema package and applicability interval selected by the evidence gate, not from a convenient or conflicting archive.

**Independent Test**: Starting from the registered official source, a reviewer verifies the imported schema files, namespaces, entrypoints, digest, and package revision against Feature 030 and Feature 032.

**Acceptance Scenarios**:

1. **Given** Feature 032 has verified a package for a specific document/event scope, **When** the schemas are imported, **Then** each checked-in schema is traceable to the exact archive, revision, source, digest, and applicability decision.
2. **Given** a package remains conflicting or unverified, **When** generation is requested, **Then** the package is not imported or promoted and the dependency gate remains explicit.

### User Story 2 - Regenerate TypeScript artifacts without unrelated churn (Priority: P2)

A maintainer can regenerate the approved MDF-e schema family and determine that the output is reproducible without changing unrelated families or indexes unexpectedly.

**Why this priority**: The current generator recursively rewrites indexes and skips existing generated files while reporting collisions, so an unbounded run can silently broaden the package diff.

**Independent Test**: Run the documented focused generation command twice and compare outputs; the second run produces no changes and unrelated generated files remain unchanged.

**Acceptance Scenarios**:

1. **Given** an approved MDF-e XSD subtree and clean repository state, **When** the focused generator runs, **Then** it creates the expected classes/interfaces/enums/types and only the explicitly reviewed index changes.
2. **Given** an existing generated file conflicts with new output, **When** regeneration detects the collision, **Then** the conflict is surfaced for review and is not silently treated as an accepted artifact.

### Edge Cases

- A verified NT is an overlay and does not replace the base package.
- An XSD imports a namespace or file not included in the proposed generation scope.
- Generated names collide with an existing package family.
- Filtering generation still rewrites recursive indexes.
- A second generation run produces a different output.

## Requirements

### Functional Requirements

- **FR-001**: The implementation MUST depend on Feature 032 and MUST consume only a schema package whose identity, digest, namespace inventory, and applicability are verified for the declared scope.
- **FR-002**: Each imported XSD MUST retain traceable provenance to its official source, archive digest, package revision, and applicability record.
- **FR-003**: The implementation MUST include only the document and event schema families required by the verified initial SP scope; unrelated or unsupported families MUST remain outside the generated scope.
- **FR-004**: The generation workflow MUST be bounded to the MDF-e source subtree and MUST document and control recursive index rewrites and existing-file collisions before accepting output.
- **FR-005**: Generated output MUST be deterministic across repeated generation from the same checked-in XSDs and toolchain.
- **FR-006**: The implementation MUST preserve unrelated generated files and MUST include an explicit before/after impact check for the package tree.
- **FR-007**: Generated declarations MUST remain internal inventory unless a deliberate additive public export is specified and compatibility-reviewed.
- **FR-008**: Jest coverage MUST include representative schema/codegen fixtures and the reproducibility or collision behavior changed by this feature.

### Compatibility & Contract Constraints

- **CC-001**: No existing ESM import path or NF-e/NFC-e public identifier may be removed or renamed.
- **CC-002**: Only the verified MDF-e schema family and its required shared dependencies may be added; normalization and generated naming changes require an explicit compatibility assessment.
- **CC-003**: Any additive public export requires a documented contract decision and package-manifest impact review; schema presence alone is not public runtime support.
- **CC-004**: Validation MUST include focused generation/reproducibility tests, Jest, lint, format, typecheck/build, public-contract audit, and tarball checks.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [schema package inspections](../030-mdfe-source-schema-baseline/research.md) provide the inspected names, hashes, namespaces, and entrypoint observations.
- **KS-002**: Feature 032 is the required authority for final package identity and applicability; Feature 030's current candidates are not sufficient for generation.
- **KS-003**: No secondary source may replace the official archive or resolve an official package conflict.

### Key Entities

- **Approved Schema Package**: An official archive with verified identity, digest, namespaces, entrypoints, and applicability.
- **Generated MDF-e Family**: The deterministic internal TypeScript output for an approved document/event schema scope.
- **Generation Impact Record**: The reviewed list of intended and excluded file changes from a generation run.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of checked-in MDF-e XSD files map to an approved archive digest and official applicability record.
- **SC-002**: Two consecutive focused generation runs produce identical MDF-e outputs.
- **SC-003**: No unrelated schema family or public package entrypoint changes as an unreviewed side effect.
- **SC-004**: Every collision or recursive-index effect is either addressed by a tested generator boundary or explicitly reviewed before merge.

## Assumptions

- Feature 032 may conclude that no package is currently safe to select; in that case this feature remains blocked rather than importing the conflicting archive.
- The existing repository generation layout remains authoritative unless a separate design explicitly changes it.
- Adding schema files or generated declarations does not by itself authorize live MDF-e transmission.

# Feature Specification: MDF-e Document Contract and Local Validation

**Feature Branch**: `034-mdfe-document-contract`
**Created**: 2026-10-12
**Status**: Draft
**Input**: Define the consumer-facing SP MDF-e document construction and validation slice on top of an approved schema family.

## User Scenarios & Testing

### User Story 1 - Prepare an MDF-e from structured input (Priority: P1)

An eligible SP issuer can build a schema-valid MDF-e from typed inputs without manually assembling the full XML document.

**Why this priority**: A verified schema inventory has user value only when consumers can prepare a consistent document and understand local validation failures before transport.

**Independent Test**: Build representative documents from valid and invalid fixtures, serialize valid input, and validate the XML against the exact approved XSD package without calling an authorization service.

**Acceptance Scenarios**:

1. **Given** structured input conforming to the verified document scope, **When** the integrator prepares an MDF-e, **Then** the SDK produces deterministic XML that validates against the selected schema.
2. **Given** required fields are missing, contradictory, or invalid for the declared schema revision, **When** the integrator validates the input, **Then** the SDK reports actionable local errors and does not return a document as ready for submission.

### User Story 2 - Apply only evidenced SP legal requirements (Priority: P2)

An SP issuer can distinguish national document rules from verified SP deltas and can provide legally required transport data without relying on undocumented defaults.

**Why this priority**: Adjuste SINIEF 03/26 and 05/26 and Portaria SRE 22/2026 change CIOT and unloading-UF obligations, while their technical rollout must remain separate from legal effective dates.

**Independent Test**: Exercise fixtures at each verified effective interval and confirm that required CIOT, unloading-UF, and mixed-cargo/TAC cases are accepted or rejected according to the selected schema and current primary evidence.

**Acceptance Scenarios**:

1. **Given** a legal or technical requirement is verified for the selected package and effective interval, **When** the document is validated, **Then** the SDK enforces that requirement and identifies its applicable scope.
2. **Given** a requirement is legally effective but matching schema deployment or package applicability is unverified, **When** the integrator validates a document, **Then** the unresolved technical boundary is explicit and the SDK does not invent a field or silently claim service acceptance.

### Edge Cases

- Required fields differ across verified package revisions.
- Legal and technical effective intervals do not begin on the same date.
- The unloading UF list is empty, duplicated, or inconsistent with the document's unloading data.
- A remunerated third-party road-freight case lacks required CIOT data.
- The document is schema-valid but violates a verified cross-field business rule.

## Requirements

### Functional Requirements

- **FR-001**: The feature MUST depend on Feature 033 and MUST construct only document shapes supported by the approved schema and applicability scope.
- **FR-002**: The SDK MUST provide a structured consumer contract for the supported MDF-e document input and deterministic XML serialization.
- **FR-003**: The SDK MUST validate required structure and applicable business invariants locally before returning a document as ready for signing or submission.
- **FR-004**: The SDK MUST apply CIOT and unloading-UF requirements only when their legal scope, technical representation, package revision, and effective interval are verified.
- **FR-005**: The SDK MUST distinguish local schema/business validation from remote authorization and MUST NOT represent local validity as authorization.
- **FR-006**: Invalid or contradictory input MUST produce a stable, actionable usage result without partial XML that appears complete.
- **FR-007**: Fixtures MUST cover each supported document profile and meaningful boundary conditions, including current SP unloading-UF cases where the verified schema represents them.
- **FR-008**: Examples and documentation MUST identify unsupported document fields and applicability boundaries instead of exposing raw generated declarations as a stable API by accident.

### Compatibility & Contract Constraints

- **CC-001**: New consumer-facing MDF-e functions/types, if needed, MUST be additive from the root ESM entrypoint and intentionally documented.
- **CC-002**: Existing NF-e/NFC-e exports and generated identifier mappings MUST remain unchanged.
- **CC-003**: Public MDF-e types MUST be separated from incidental `chMDFe` fields in unrelated Suframa event schemas.
- **CC-004**: Validation MUST include contract and fixture tests, lint, format, typecheck/build, public-contract review, and package validation.

### Knowledge Sources & Provenance

- **KS-001**: Feature 030's [source register and legal applicability notes](../030-mdfe-source-schema-baseline/research.md) record Ajustes SINIEF 03/26 and 05/26, Portaria SRE 22/2026, package candidates, and unresolved technical rollout.
- **KS-002**: Feature 032 determines which legal and technical rules are safe to apply to the chosen package and dates.
- **KS-003**: Official consolidated CONFAZ and Fazenda SP publications remain normative; publication summaries or package download dates cannot establish schema behavior.

### Key Entities

- **MDF-e Draft**: Structured consumer input for one supported transport manifest.
- **Validated MDF-e XML**: Deterministically serialized document that passes the selected XSD and verified local rules.
- **Applicability Decision**: Evidence-backed link among legal rule, schema revision, operation, UF, and effective interval.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of supported document fixtures serialize deterministically and validate against the selected official XSD.
- **SC-002**: 100% of invalid or out-of-scope inputs fail before signing or transmission with an explicit result.
- **SC-003**: Every enforced CIOT or unloading-UF condition traces to a verified legal and technical applicability record.
- **SC-004**: Integrators can distinguish local document validity from remote authorization in the API and documentation.

## Assumptions

- Feature 033 supplies the verified schema and reproducible generated inventory before this feature is implemented.
- Signing and remote authorization are separate capabilities owned by later specs.
- The SDK does not obtain CIOT, issuer accreditation, or other external permissions on behalf of the integrator.

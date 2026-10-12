# Feature Specification: NFC-e SP DANFE Rendering

**Feature Branch**: `028-nfce-sp-danfe` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this slice specifies the SP DANFE NFC-e consumer document.

## User Scenarios & Testing

### User Story 1 - Provide a compliant DANFE NFC-e (Priority: P1)

An issuer provides a consumer with a legible auxiliary representation of an NFC-e that contains the required document information and a scannable QR Code, whether authorized online or pending after offline contingency issuance.

**Why this priority**: Authorization and a QR Code URL alone do not provide the complete consumer-facing auxiliary document expected in retail operation.

**Independent Test**: Render representative authorized SP NFC-e fixtures and verify required content, layout constraints, and QR Code readability against the current official manual.

**Acceptance Scenarios**:

1. **Given** an authorized SP NFC-e and its official authorization response, **When** the issuer produces its auxiliary representation, **Then** the output includes the required document and authorization information and a QR Code corresponding to the exact access key and environment.
2. **Given** a signed SP NFC-e emitted with `tpEmis=9` and no authorization response, **When** the issuer produces its auxiliary representation, **Then** the output identifies the contingency as pending, omits an authorization protocol, and contains the official offline QR Code payload.
3. **Given** a document without valid authorization evidence or required data, **When** the issuer requests a DANFE NFC-e, **Then** the output is refused or clearly identified as incomplete, never presented as an authorized document.

### User Story 2 - Print for common retail use (Priority: P2)

An issuer can deliver the representation through common printer and digital-output paths without losing required content or machine readability.

**Why this priority**: The auxiliary document must remain usable at point of sale and in electronic delivery.

**Independent Test**: Check representative narrow-paper and digital outputs at defined sizes and scan their QR Codes.

**Acceptance Scenarios**:

1. **Given** a valid fixture with long item descriptions and supplemental values, **When** the output is rendered in supported formats, **Then** required text remains legible, does not overlap, and the QR Code remains scannable.

### Edge Cases

- Long merchant, consumer, address, or item text.
- High item count, discounts, freight, and other amounts.
- Optional or absent consumer identification.
- QR Code rendering on narrow paper or low-resolution output.
- XML and authorization-return messages disagree or required authorization evidence is absent.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST produce a DANFE NFC-e representation only from document data and evidence consistent with either the supported SP authorized flow or the supported signed offline-pending flow.
- **FR-002**: The representation MUST include the fields and notices required by the current official DANFE NFC-e manual.
- **FR-003**: The representation MUST provide a QR Code whose encoded content corresponds to the exact access key, environment, and official consultation URL; normal authorization uses the existing QR v3 URL and offline contingency uses the official offline QR v2 URL.
- **FR-004**: The system MUST keep consumer consultation availability distinct from local QR Code generation and document rendering.
- **FR-005**: The output MUST remain legible and non-overlapping for supported retail paper widths and digital output dimensions, including long names and item descriptions.
- **FR-006**: The system MUST define its supported output forms and report unsupported printer or media constraints rather than silently omitting required content.
- **FR-007**: The system MUST preserve a reproducible relationship between the rendered output and the source document/authorization evidence.
- **FR-008**: The system MUST clearly distinguish an authorized DANFE NFC-e from offline-pending, preview, or incomplete documents. Offline-pending output MUST print the official contingency/pending notice and MUST NOT print an authorization protocol.

### Compatibility & Contract Constraints

- **CC-001**: Rendering capability MUST be additive and MUST NOT change existing root import paths, NFC-e authorization semantics, or QR Code v3 composition.
- **CC-002**: No XSD changes are presumed; the rendering requirements consume the supported NFC-e document and official authorization response.
- **CC-003**: Any new public rendering result is additive; breaking changes require a separate compatibility and release decision.
- **CC-004**: Validation MUST include fixture-based output assertions, QR Code scan verification, lint, format, type/build checks, and package contract validation.

### Knowledge Sources & Provenance

- **KS-001**: Primary source: `SRC-RH-003`, Manual de Especificações Técnicas do DANFE NFC-e e QR Code, version 6.0 (published March 2025; consulted 2026-05-19), internalized at `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324 - Manual_de_Especificações_Técnicas_do_DANFE_NFC-e_QR_Code.md`; and `SRC-RH-002`, MOC 7.0 (November 2020; consulted 2026-05-19).
- **KS-002**: Secondary references are not required; local rendering convenience must not override primary requirements.
- **KS-003**: SP-specific printed fields, public URL, and any current post-manual changes MUST be verified against official state sources during planning; the national manual does not establish every current SP presentation delta.

### Key Entities

- **DANFE NFC-e**: Auxiliary document that represents an NFC-e to the consumer; it is not the fiscal XML itself.
- **Authorization evidence**: Official response information associated with the issued document.
- **Consumer QR Code**: Machine-readable link carrying the document/environment-specific consultation data.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of required fields for the confirmed SP fixture set appear in the rendered output.
- **SC-002**: 100% of representative QR Codes can be decoded and match their source access key and environment.
- **SC-003**: At 56 mm, 80 mm, and 210 mm print widths and digital viewports of 320x568, 768x1024, and 1280x800 CSS pixels, Chromium-based layout tests find no overlap or clipping of required content, and the QR Code remains decodable at its declared print dimensions.
- **SC-004**: Integrators can distinguish authorized output from preview or incomplete rendering from the result alone.

## Assumptions

- This slice targets SP; other state-specific DANFE differences require separate evidence and promotion.
- The national manual version 6.0 is the captured baseline and must be revalidated for later official publications before implementation.
- Authorization, credentialing, QR Code URL composition, and offline contingency are handled by their own slices.

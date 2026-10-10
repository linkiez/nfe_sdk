# Feature Specification: NF-e SP Production Contingency

**Feature Branch**: `026-nfe-sp-contingencia` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this slice defines operationally safe SP NF-e contingency and recovery.

## User Scenarios & Testing

### User Story 1 - Continue NF-e issuance during an official contingency (Priority: P1)

When normal authorization is unavailable and an official contingency mode is applicable, an SP issuer can follow the correct mode and understand what the SDK can and cannot perform.

**Why this priority**: Production readiness is incomplete if an outage produces an ambiguous result or an undocumented route.

**Independent Test**: Simulate normal-service unavailability and each contingency mode confirmed as applicable to SP; verify the selected behavior, explicit boundaries, and user-visible status without transmitting a live fiscal document.

**Acceptance Scenarios**:

1. **Given** an officially active and supported contingency route, **When** the issuer submits an eligible NF-e, **Then** the result identifies the contingency mode and its distinct processing state.
2. **Given** no official activation evidence or an unsupported mode, **When** the issuer requests contingency, **Then** the system refuses silent switching and returns an actionable boundary.

### User Story 2 - Reconcile documents after service recovery (Priority: P2)

After normal service returns, the issuer can identify pending contingency documents and determine which follow-up actions remain.

**Why this priority**: Contingency documents can require later transmission, confirmation, or resolution and must not disappear from the operational flow.

**Independent Test**: Feed pending, accepted, rejected, and inconclusive recovery responses and verify distinct final statuses and next actions.

**Acceptance Scenarios**:

1. **Given** an NF-e issued through a supported contingency mode, **When** service recovers, **Then** the issuer can distinguish reconciled, pending, and rejected documents without duplicate submission being implied.

### Edge Cases

- Official status changes while a request is in progress.
- The contingency endpoint is unavailable or reports a different environment.
- Recovery produces a duplicate, rejection, or inconclusive result.
- A mode requires physical forms, manual authorization, or state-specific operator action.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST represent normal operation and every contingency mode included in the supported SP scope as distinct states.
- **FR-002**: The system MUST only use a contingency mode when its official applicability and activation conditions are satisfied.
- **FR-003**: The system MUST distinguish SVC routing, EPEC, and security-form procedures where each is confirmed applicable; a mode requiring physical handling MAY be represented as an explicit assisted procedure rather than automated SDK behavior.
- **FR-004**: The system MUST NOT silently retry or redirect an uncertain production submission in a way that can create a duplicate document.
- **FR-005**: The system MUST retain the relation between the original document, selected contingency, and any later recovery response.
- **FR-006**: The system MUST expose pending, reconciled, rejected, unavailable, and inconclusive recovery outcomes with next actions.
- **FR-007**: Unsupported or unverified UF/mode combinations MUST return a clear boundary before a request is sent.
- **FR-008**: The system MUST keep operator-held forms, activation decisions, and other external permissions outside automatic claims of SDK support.

### Compatibility & Contract Constraints

- **CC-001**: New contingency behavior MUST be additive to the public NF-e contract and preserve normal homologation behavior.
- **CC-002**: Any contingency-specific schema or event family must be identified before implementation; no generated artifacts are presumed changed by this specification.
- **CC-003**: Existing outcome classifications MUST NOT change meaning silently; a breaking change requires an explicit migration decision.
- **CC-004**: Validation MUST include focused Jest scenarios, fixture-backed recovery cases, lint, format, type/build verification, and package-contract checks.

### Knowledge Sources & Provenance

- **KS-001**: Primary sources: `SRC-RH-002`, MOC 7.0 (published November 2020; consulted 2026-05-19), and its internalized Anexo III, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Anexo III - Manual de Contingência - NF-e.md` (version 7.00, November 2020; consulted 2026-10-10); `SRC-NFE-003`, SEFAZ/SP operational page (consulted 2026-05-16).
- **KS-002**: No secondary source is required. Operational comparisons must remain explicitly non-normative if introduced during planning.
- **KS-003**: The exact current activation source, applicability of each contingency mode to SP, and any changes after MOC 7.0 require official-source revalidation during planning.

### Key Entities

- **Contingency mode**: Officially defined alternative issuance route or procedure.
- **Activation evidence**: Official indication that a contingency route is applicable or active.
- **Recovery record**: Link between the original document, later transmission or query, and final status.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Every contingency mode in the confirmed SP scope has a defined entry condition, result, and recovery action.
- **SC-002**: 100% of unsupported or unverified mode requests stop with an explicit explanation before transmission.
- **SC-003**: Every simulated recovery response is distinguishable as pending, reconciled, rejected, unavailable, or inconclusive.
- **SC-004**: No test scenario implies silent duplicate submission or silent fallback between homologation and production.

## Assumptions

- SP remains the initial issuer UF; expansion to other UFs requires separate evidence and promotion.
- Official activation and credential availability are external inputs; the SDK does not impersonate the tax authority's activation decision.
- Physical security forms and operator procedures may be documented/tool-assisted without being represented as automated runtime.
- This feature depends on the normal production authorization and receipt/protocol contracts being defined in specs `025` and `021`.

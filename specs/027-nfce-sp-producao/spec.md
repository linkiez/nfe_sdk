# Feature Specification: NFC-e SP Production Authorization

**Feature Branch**: `027-nfce-sp-producao` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this slice closes normal NFC-e production authorization for SP.

## User Scenarios & Testing

### User Story 1 - Authorize an SP NFC-e in production (Priority: P1)

An enabled SP issuer submits a valid NFC-e in production and receives a clear authorization result suitable for checkout and customer delivery.

**Why this priority**: The current NFC-e authorization cohort is homologation-only, so production remains the primary gap for an SP baseline.

**Independent Test**: Exercise SP production requests against controlled authorized, rejected, unavailable, and pending responses without issuing a live fiscal document.

**Acceptance Scenarios**:

1. **Given** a valid signed SP NFC-e, a production environment, and externally provisioned credentials, **When** the issuer submits it, **Then** the result reports the official terminal outcome and the associated QR Code URL.
2. **Given** a non-SP issuer, environment mismatch, or missing required credential, **When** the issuer submits, **Then** the request is blocked with a specific boundary and is not described as authorized.

### User Story 2 - Keep QR Code and authorization outcomes consistent (Priority: P2)

An issuer can use the existing SP QR Code v3 composition while keeping it distinct from authorization and public consumer consultation.

**Why this priority**: A QR Code URL is useful only when its environment and access key match the NFC-e, but its composition alone is not proof of authorization.

**Independent Test**: Compare the returned key, environment, authorization result, and QR Code URL for homologation and production fixtures.

**Acceptance Scenarios**:

1. **Given** an authorized SP NFC-e, **When** the result is prepared for consumer delivery, **Then** its QR Code parameters match the document and environment and do not imply that URL generation authorized the document.

### Edge Cases

- A production request is accidentally built with homologation data or a homologation URL.
- The authorization is pending while the checkout workflow needs an explicit next action.
- A QR Code URL is validly composed but consumer consultation is unavailable.
- The integrator has not completed external SP credentialing.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST distinguish production from homologation for every SP NFC-e authorization.
- **FR-002**: The initial production cohort MUST remain SP-only; other UFs MUST receive an explicit unsupported boundary.
- **FR-003**: The system MUST submit only when issuer, document, environment, endpoint, signature, and externally supplied credentials are consistent.
- **FR-004**: The system MUST distinguish authorized, rejected, pending, unavailable, timeout, and protocol-error outcomes.
- **FR-005**: The system MUST keep the QR Code URL tied to the exact access key and environment of the document and MUST NOT treat URL composition as authorization.
- **FR-006**: The system MUST preserve the existing QR Code v3 URL behavior and explain that CSC is not a normative v3 URL parameter; any SDK-local CSC input rule MUST remain identified as a package contract, not a fiscal requirement.
- **FR-007**: The system MUST keep DANFE rendering and offline contingency as separate capabilities with explicit boundaries until their dedicated slices are delivered.
- **FR-008**: The system MUST keep credentialing and certificate acquisition as external integrator prerequisites.

### Compatibility & Contract Constraints

- **CC-001**: Production support MUST extend the existing additive NFC-e contract without changing homologation behavior or adding a new import path.
- **CC-002**: No generated schema change is presumed; planning MUST verify the exact schema version and any production-specific field constraints.
- **CC-003**: Existing root identifiers and result semantics remain stable; any breaking change requires a separate compatibility decision.
- **CC-004**: Validation MUST include focused contract, integration, and unit cases, fixtures for both environments, lint, format, type/build checks, and package validation; live fiscal transmission is not a default gate.

### Knowledge Sources & Provenance

- **KS-001**: Primary sources: `SRC-RH-002`, MOC 7.0 (published November 2020; consulted 2026-05-19); `SRC-RH-003`, Manual de Especificações Técnicas do DANFE NFC-e e QR Code, version 6.0 (published March 2025; consulted 2026-05-19); and `SRC-NFCE-004`/`SRC-NFCE-005`, SEFAZ/SP pages (consulted 2026-05-16).
- **KS-002**: No secondary source is required.
- **KS-003**: Current SP production endpoint behavior, credentialing steps, and any state-specific differences must be verified from official sources during planning. The QR Code manual does not establish that authorization or consumer consultation is available.

### Key Entities

- **NFC-e**: Consumer fiscal document identified by its access key and issuer.
- **Authorization outcome**: Official terminal or pending result and the next permitted action.
- **QR Code URL**: Consumer-facing URL associated with the exact document and environment.

## Success Criteria

### Measurable Outcomes

- **SC-001**: All defined SP production response scenarios map to one explicit authorization result and next action.
- **SC-002**: 100% of environment, issuer, or access-key mismatches are blocked from being reported as successful authorization.
- **SC-003**: The QR Code URL in every accepted result corresponds to the same access key and environment as the authorized document.
- **SC-004**: Integrators can distinguish authorization, QR Code generation, DANFE rendering, and offline contingency as separate capabilities.

## Assumptions

- SP is the first production cohort; promotion to PR or other UFs is a separate decision.
- Issuer credentialing and certificates are provided externally.
- The QR Code v3 helper in spec `024` is reused without treating CSC as a national v3 requirement.
- DANFE and offline issuance are covered by specs `028` and `029`, not duplicated here.

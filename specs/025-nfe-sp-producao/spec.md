# Feature Specification: NF-e SP Production Authorization

**Feature Branch**: `025-nfe-sp-producao` (not created; current branch is `main`)

**Created**: 2026-10-10

**Status**: Draft

**Input**: User request to create multiple specifications for complete production coverage of NF-e, NFC-e, and MDF-e; this slice closes normal NF-e production authorization for SP.

## User Scenarios & Testing

### User Story 1 - Authorize an SP NF-e in production (Priority: P1)

An authorized issuer submits a valid, signed NF-e for an SP establishment in production and receives a result that unambiguously states whether the document was authorized, rejected, or requires a follow-up action.

**Why this priority**: Normal production authorization is the missing core path between the existing homologation runtime and legal production use.

**Independent Test**: Exercise the supported SP production journey against controlled responses for authorized, rejected, unavailable, and invalid requests, without transmitting a real fiscal document.

**Acceptance Scenarios**:

1. **Given** a valid signed SP NF-e, a production environment, and externally provisioned credentials, **When** the issuer submits it, **Then** the result reports the official terminal authorization outcome.
2. **Given** an invalid request or an environment/endpoint mismatch, **When** the issuer attempts submission, **Then** the request is blocked or classified without being reported as authorized.

### User Story 2 - Continue an asynchronous authorization (Priority: P2)

An issuer receives a processing receipt and can continue through the established receipt/protocol journey without resubmitting the document blindly.

**Why this priority**: Production authorization must preserve the asynchronous behavior already defined by the receipt-protocol work.

**Independent Test**: Provide a processing receipt and verify that the issuer receives the existing follow-up action and can distinguish pending from terminal results.

**Acceptance Scenarios**:

1. **Given** the service returns a receipt, **When** the issuer checks the result, **Then** the receipt and next action are explicit and no authorization success is implied before a terminal response.

### Edge Cases

- The production service is unavailable or times out after the request may have been received.
- A response is malformed, contradictory, or belongs to a different environment.
- The issuer UF or access key is not SP, or the certificate is not available or usable.
- A duplicate submission could create a second fiscal document.

## Requirements

### Functional Requirements

- **FR-001**: The system MUST distinguish production from homologation in every NF-e authorization request and result.
- **FR-002**: This slice MUST support normal production authorization for SP issuers only; other UFs MUST remain explicit unsupported boundaries.
- **FR-003**: The system MUST use production authorization only when document identity, issuer UF, environment, endpoint, and externally supplied credentials are consistent.
- **FR-004**: The system MUST distinguish authorization, rejection, pending receipt, service unavailability, timeout, and protocol-error outcomes.
- **FR-005**: A pending receipt MUST expose the established continuation action and MUST NOT be presented as final authorization.
- **FR-006**: The system MUST preserve enough request/response evidence for the integrator to diagnose an outcome without exposing private-key material or credentials.
- **FR-007**: The system MUST NOT silently send a production request to a homologation endpoint or silently switch to contingency.
- **FR-008**: The system MUST keep external issuer credentialing and certificate acquisition as explicit integrator prerequisites.

### Compatibility & Contract Constraints

- **CC-001**: The feature may add production behavior to the existing public NF-e authorization capability; it MUST NOT add an import path or change existing homologation semantics.
- **CC-002**: No generated schema family is expected to change; planning MUST confirm that production-specific payload requirements fit the currently supported NF-e documents.
- **CC-003**: The contract change is additive; any change to existing exported identifiers requires a separate compatibility decision.
- **CC-004**: Validation MUST cover focused Jest behavior, lint, format, type/build verification, and the package contract; live production transmission is not a default test gate.

### Knowledge Sources & Provenance

- **KS-001**: Primary sources: `SRC-RH-002`, MOC 7.0 (published November 2020; consulted 2026-05-19), internalized at `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`; and `SRC-NFE-003`/`SRC-NFE-004`, SEFAZ/SP public NF-e pages (consulted 2026-05-16). These sources establish the fiscal authorization lifecycle and SP operational context.
- **KS-002**: No secondary source is required for this specification.
- **KS-003**: Exact current SP production service availability, credential prerequisites, and endpoint routing MUST be revalidated from official sources during planning; the captured sources do not prove a live production integration.

### Key Entities

- **NF-e**: Fiscal document identified by its access key and issuer establishment.
- **Authorization outcome**: Officially observable terminal or pending result and the action available to the issuer.
- **Environment**: Homologation or production context that must match the service used.

## Success Criteria

### Measurable Outcomes

- **SC-001**: All defined SP production scenarios return one unambiguous outcome from the supported authorization classifications.
- **SC-002**: 100% of environment or issuer-scope mismatches are prevented from being reported as successful authorization.
- **SC-003**: Every pending receipt exposes a continuation action and remains distinct from an authorized result.
- **SC-004**: An integrator can identify the document, service outcome, and next action from the returned result without inspecting private credential material.

## Assumptions

- The first production cohort is SP, consistent with the canonical roadmap's SP-first rule.
- Issuer credentialing, certificates, and permission to use production are provisioned externally.
- Spec `021-nfe-receipt-protocol` remains the owner of generic receipt/protocol behavior; this feature consumes that behavior rather than duplicating it.
- This specification defines SDK capability, not authorization to issue real fiscal documents.

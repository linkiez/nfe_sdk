# Feature Specification: Implementação das Gaps do Roadmap Gap Audit (GAP-001–GAP-018)

**Feature Branch**: `012-implement-audit-gaps`

**Created**: 2026-05-19

**Status**: Draft

**Input**: User description: "make new spec to implement all gaps of 011-roadmap-gap-audit"

## User Scenarios & Testing

### User Story 1 – Canonical NF-e Layer Complete (Priority: P1)

Integrators building NF-e issuance with the SDK need the access key (`chNFe`) calculated
correctly and the technical responsible `hashCSRT` included when applicable. Without these,
every NF-e produced by the SDK is structurally invalid and will be rejected by all SEFAZ
autorizadores.

**Addresses**: GAP-001 (chave de acesso + dígito verificador), GAP-002 (hashCSRT)

**Why this priority**: These are the two hard blockers — any serialized NF-e is invalid
without a correct access key. No real-world use is possible until both are fixed.

**Independent Test**: Given an NF-e with all mandatory fields filled in, when the SDK
computes the access key, then the resulting 44-digit key validates correctly via the
modulo-11 algorithm defined in MOC §2.2.6, and the document is accepted as structurally
valid.

**Acceptance Scenarios**:

1. **Given** a complete NF-e data structure, **When** the SDK serializes the document,
   **Then** the `chNFe` field is a 44-character numeric string that passes the modulo-11
   digit verifier algorithm (with fall-through to 1) as defined in MOC §2.2.6.
2. **Given** an NF-e with a software-house CNPJ and CSRT token, **When** the SDK
   serializes the document, **Then** the `hashCSRT` field in `infRespTec` is populated
   using SHA-1(CNPJ + idCSRT + CSRT) per MOC §2.2.10.
3. **Given** an NF-e without a CSRT (integrations where CSRT is not applicable), **When**
   the SDK serializes, **Then** `infRespTec.hashCSRT` is absent and the document remains
   valid.

---

### User Story 2 – Multi-UF Endpoint Catalog and Production Environment (Priority: P2)

Integrators operating for contributors in any Brazilian UF need the SDK to route
transmissions to the correct SEFAZ autorizador. Without multi-UF routing and production
endpoints, the SDK cannot be deployed in real operations for any non-national UF.

**Addresses**: GAP-004 (multi-UF routing catalog), GAP-005 (production environment)

**Why this priority**: GAP-004 is a prerequisite for GAP-005. Both block real-world
deployment for the majority of Brazilian contributors.

**Independent Test**: Given a contributor from any of the 14 distinct SEFAZ autorizadores,
when the SDK resolves the authorization endpoint, then it returns the correct production and
homologation URL as defined in the official web services catalog.

**Acceptance Scenarios**:

1. **Given** an NF-e with any valid Brazilian UF code, **When** the SDK resolves the
   authorization endpoint, **Then** it returns the correct URL from the 14-autorizador
   catalog (including SVC-AN and SVC-RS fallback routing for states without dedicated
   autorizador).
2. **Given** a production environment configuration, **When** the SDK builds a SOAP
   request, **Then** it uses production endpoint URLs and applies production-specific
   validation rules per MOC §4.3.7.
3. **Given** an invalid UF code, **When** the SDK attempts endpoint resolution, **Then** it
   returns a descriptive error identifying the unsupported UF rather than silently using a
   wrong endpoint.

---

### User Story 3 – EPEC Electronic Contingency (Priority: P3)

NF-e issuers who lose connectivity with their primary autorizador need the EPEC flow to
remain compliant during outages. Without EPEC, the SDK leaves issuers with no electronic
contingency path when the primary autorizador is unavailable.

**Addresses**: GAP-003 (EPEC — Evento Prévio de Emissão em Contingência)

**Why this priority**: The only currently active electronic contingency mode for NF-e.
Depends on GAP-004 routing (US2) for correct SVC endpoint selection.

**Independent Test**: Given a contributor in EPEC contingency mode, when the SDK submits
an EPEC event for a pre-issued NF-e, then the event is sent to SVC-AN or SVC-RS using the
correct `NfeRecepcaoEvento` service, and the SDK tracks the pending list for later
reconciliation.

**Acceptance Scenarios**:

1. **Given** an NF-e prepared for contingency emission, **When** the SDK switches to EPEC
   mode, **Then** the `tpEmis` field is set to the EPEC emission type code and the
   document is structured for EPEC pre-emission per MOC §3.3.2.
2. **Given** a submitted EPEC event, **When** connectivity to the primary autorizador is
   restored, **Then** the SDK provides the reconciliation flow to authorize the pending
   NF-e through the correct primary endpoint.
3. **Given** a UF with mandatory EPEC routing via SVC-AN vs SVC-RS, **When** the SDK is
   in contingency mode, **Then** it routes the EPEC event to the correct SVC per the UF
   routing rules in MOC §3.3.

---

### User Story 4 – Complete Synchronous/Asynchronous Authorization Cycle (Priority: P4)

NF-e issuers processing large batches need the SDK to support asynchronous batch results
via `NfeRetAutorizacao`. Additionally, NF-e documents with state fiscal benefits require the
`cBenef` field populated correctly to avoid UF-level rejections.

**Addresses**: GAP-012 (NfeRetAutorizacao polling), GAP-013 (campo `cBenef`)

**Why this priority**: Completes the core NF-e emission cycle started in spec 007.
High-volume issuers depend on async processing.

**Independent Test**: Given a batch of NF-e documents submitted asynchronously, when the
SDK polls `NfeRetAutorizacao`, then it returns the authorization protocol or error details
for every NF-e in the batch.

**Acceptance Scenarios**:

1. **Given** an NF-e batch processed asynchronously, **When** the SDK polls
   `NfeRetAutorizacao`, **Then** it parses the `retConsReciNFe` response per schema
   `consReciNFe_v4.00.xsd` and returns results for all documents in the batch.
2. **Given** an NF-e for a product with a state fiscal benefit, **When** the SDK serializes
   the document, **Then** the `cBenef` field in the ICMS group is populated from the
   UF-specific benefit table, producing XML that passes SEFAZ validation for that UF.
3. **Given** `cBenef` tables are not internalized for a given UF, **When** the SDK
   serializes a document with a fiscal benefit, **Then** it accepts the value as an
   externally provided parameter and clearly documents the external table dependency.

---

### User Story 5 – Distribution and Recipient Extensions (Priority: P5)

Recipients using DFe distribution need individual document retrieval by NSU or access key,
contributor registration consultation, and the ability to correct a previously registered
manifestation type.

**Addresses**: GAP-008 (consNSU + consChNFe), GAP-010 (NfeConsultaCadastro), GAP-015
(mudança de manifestação)

**Why this priority**: Completes the recipient MVP explicitly deferred in spec 008.

**Independent Test**: Given a recipient who received an NSU in the DFe distribution stream,
when the SDK issues a `consNSU` query, then it returns the individual document wrapped in
the `retDistDFeInt` response per MOC §3.2.2.1.

**Acceptance Scenarios**:

1. **Given** a known NSU from a previous distribution batch, **When** the SDK calls
   `consNSU`, **Then** it returns the DFe document associated with that NSU per
   MOC §3.2.2.1.
2. **Given** a known NF-e access key, **When** the SDK calls `consChNFe`, **Then** it
   returns the associated DFe document.
3. **Given** a CNPJ/IE for pre-issuance validation, **When** the SDK calls
   `NfeConsultaCadastro`, **Then** it returns the contributor's registration status from the
   appropriate UF's SEFAZ.
4. **Given** a recipient who previously registered the wrong manifestation type, **When** the
   SDK submits a manifestation change event per MOC §3.2.1.5, **Then** the previous
   manifestation is superseded and the new type registered with sequence constraints
   respected.

---

### User Story 6 – Signing Extensions: e-CPF and XSD Pre-Validation (Priority: P6)

Individual NF-e issuers (rural producers, sole proprietors) need to sign documents with
e-CPF certificates. All issuers benefit from optional XSD pre-validation to catch structural
errors before transmission.

**Addresses**: GAP-018 (e-CPF certificate support), GAP-014 (XSD validation)

**Why this priority**: e-CPF unblocks an entire emitter segment (individual persons).
XSD validation reduces reject rates and diagnosis cost across all user types.

**Independent Test**: Given an individual issuer with a valid e-CPF A1 certificate, when
the SDK signs an NF-e, then the resulting XML-DSig signature is valid and the document is
accepted by the SEFAZ autorizador.

**Acceptance Scenarios**:

1. **Given** an e-CPF A1 certificate, **When** the SDK signs an NF-e, **Then** the
   signature uses the same XML-DSig algorithm as e-CNPJ and the signed document passes
   SEFAZ authentication per MOC §4.2.4.1.
2. **Given** an NF-e XML document, **When** the SDK runs optional XSD pre-validation,
   **Then** it validates against the schema from `xsd/` appropriate to the document type
   and returns a list of violations before any network request is made.
3. **Given** an NF-e with a structural error, **When** XSD validation runs, **Then** the
   SDK returns a descriptive error identifying the offending field and the XSD constraint
   violated.

---

### User Story 7 – Industrial ICMS Deferral Events (Priority: P7)

Industrial contributors with interstate shipments under ICMS suspension need to submit ICMS
deferral extension events via the SDK.

**Addresses**: GAP-007 (prorrogação de ICMS interestadual)

**Why this priority**: Industry-specific but normatively mandatory for affected segments;
no alternative path exists within the SDK.

**Independent Test**: Given an industrial contributor with an ICMS-suspended interstate
shipment, when the SDK builds a deferral extension event, then the event XML conforms to
`xsd/Evento_Prorrog_Indust_1.0/` and the SDK handles both acceptance and rejection
responses from SEFAZ.

**Acceptance Scenarios**:

1. **Given** an NF-e associated with an ICMS-suspended interstate shipment, **When** the
   SDK builds a deferral extension event, **Then** the event XML conforms to the
   `Evento_Prorrog_Indust_1.0` schema per MOC §3.4.
2. **Given** a submitted deferral event, **When** SEFAZ responds, **Then** the SDK parses
   both approval and rejection responses correctly.

---

### User Story 8 – Documentation and Normative Advisory (Priority: P8)

SDK users need clear guidance on mandatory manifestation time limits. SDK maintainers need
a formal process to track new Technical Notes (NTs) and keep schemas current.

**Addresses**: GAP-016 (prazos e obrigatoriedade de manifestação), GAP-011 (rastreamento
de Notas Técnicas)

**Why this priority**: Documentation gaps create legal compliance risk for users. Untracked
NTs cause silent divergence from current normative rules.

**Independent Test**: Given the SDK documentation for recipient DFe operations, when a
developer reads the manifestation guide, then they can identify the mandatory time limits
per event type without consulting the raw MOC 7.0.

**Acceptance Scenarios**:

1. **Given** the SDK documentation for manifestation, **When** an integrator reads it,
   **Then** the guide explicitly states time limits by manifestation type (Ciência,
   Confirmação, Desconhecimento, Operação Não Realizada) per MOC §3.2.3.
2. **Given** the SDK repository, **When** a new NT is published by SEFAZ, **Then** there
   is a defined process for reviewing the NT, updating schemas in `xsd/`, updating
   `docs/_meta/source-registry.md`, and releasing a new SDK version.
3. **Given** an NT that changes a validation rule, **When** the update process is followed,
   **Then** regression tests run and pass before the next SDK release.

---

### User Story 9 – Watchlist Monitoring and Downstream Confirmations (Priority: P9)

NF-e ABI (modelo 77) and rural series reservation require monitoring postures, not
implementation. Signing coverage for NFC-e and generic events must be confirmed within
specs 009 and 010.

**Addresses**: GAP-006 (NF-e ABI — monitor-only), GAP-017 (série rural — watchlist),
GAP-009 (signing NFC-e/events — confirm-in-downstream-spec)

**Why this priority**: No code is produced here; these are governance and tracking items
that close the full gap register without premature implementation.

**Independent Test**: Given the roadmap tracking documentation, when NF-e ABI reaches
implementation maturity or rural series demand is confirmed, then a documented decision
record exists with clear criteria to initiate the relevant implementation slice.

**Acceptance Scenarios**:

1. **Given** the repository roadmap, **When** reviewing NF-e ABI status, **Then** there is
   a decision record with current monitoring posture and criteria for initiating
   implementation (standard stability + confirmed integrator demand).
2. **Given** specs 009 and 010 at implementation time, **When** their scope is finalized,
   **Then** each spec explicitly confirms that XML-DSig signing is applied to NFC-e
   (modelo 65) and all event types, resolving GAP-009.
3. **Given** a rural establishment emitter profile is confirmed in demand, **When** the
   rural series slice is initiated, **Then** the canonical layer validates series 890–899
   as reserved per MOC §2.2.8.

---

### Edge Cases

- What happens when a UF routes via SVC-AN vs SVC-RS (e.g., AC, AP, RN)?
- How does the SDK handle an EPEC pending list that exceeds daily emission limits?
- What if an NT changes a mandatory field validation rule mid-production deployment?
- How does the SDK signal that `cBenef` tables are not available for a given UF?
- What happens when an e-CPF certificate has expired at signing time?
- How does XSD validation behave when the bundled schema differs from an NT-updated version?
- What sequence constraints apply when changing manifestation type (e.g., Ciência → Confirmação vs Desconhecimento)?

## Requirements

### Functional Requirements

- **FR-001**: The SDK MUST calculate the NF-e access key (`chNFe`) using the modulo-11
  algorithm with fall-through rule per MOC §2.2.6.
- **FR-002**: The SDK MUST compute `hashCSRT` in `infRespTec` using SHA-1(CNPJ + idCSRT +
  CSRT) when a CSRT is provided, per MOC §2.2.10.
- **FR-003**: The SDK MUST route NF-e transmissions to the correct SEFAZ autorizador
  endpoint for all 27 Brazilian UFs (14 autorizadores + SVC-AN/SVC-RS routing), in both
  homologation and production environments.
- **FR-004**: The SDK MUST support a production environment configuration that applies
  production endpoint URLs and production-specific validation rules per MOC §4.3.7.
- **FR-005**: The SDK MUST support the EPEC contingency flow: pre-emission structure, event
  submission to SVC-AN or SVC-RS, pending list management, and reconciliation per
  MOC §3.3.1–3.3.17.
- **FR-006**: The SDK MUST poll `NfeRetAutorizacao` for async batch results, parsing
  `retConsReciNFe` per `consReciNFe_v4.00.xsd`.
- **FR-007**: The SDK MUST support the `cBenef` field in canonical NF-e, accepting
  UF-specific fiscal benefit codes as externally provided parameters and documenting the
  external table dependency.
- **FR-008**: The SDK MUST support `consNSU` and `consChNFe` queries for individual DFe
  retrieval by NSU and access key per MOC §3.2.2.1.
- **FR-009**: The SDK MUST support `NfeConsultaCadastro` for CNPJ/IE registration
  validation.
- **FR-010**: The SDK MUST support manifestation change per MOC §3.2.1.5, enforcing
  allowed sequence transitions.
- **FR-011**: The SDK MUST accept e-CPF A1 certificates for NF-e signing using the same
  XML-DSig infrastructure as e-CNPJ, per MOC §4.2.4.1.
- **FR-012**: The SDK MUST optionally validate NF-e XML against the appropriate XSD schema
  from `xsd/` before transmission, per MOC §4.2.1.4.
- **FR-013**: The SDK MUST support the ICMS deferral extension event per
  `xsd/Evento_Prorrog_Indust_1.0/` and MOC §3.4.
- **FR-014**: The SDK documentation MUST state mandatory manifestation time limits by event
  type per MOC §3.2.3.
- **FR-015**: The SDK repository MUST define a NT tracking and schema update process
  covering review, `xsd/` update, `docs/_meta/source-registry.md` update, and regression
  testing.

### Compatibility & Contract Constraints

- **CC-001**: All new capabilities MUST be additive — no existing ESM export path in
  `src/index.ts` may be removed or renamed; new exports may be added freely.
- **CC-002**: Canonical layer changes (GAP-001, GAP-002, GAP-013, GAP-017) MUST be
  backward-compatible; any new mandatory calculation parameter must default to the current
  behavior when omitted.
- **CC-003**: If any public contract change is breaking (e.g., return type change of an
  existing function), a migration note, semver major bump, and rollout description are
  required before merging.
- **CC-004**: Every new runtime slice MUST include Jest unit tests (happy path + edge cases
  - error branches) and pass Prettier formatting check.

### Knowledge Sources & Provenance

- **KS-001**: Primary source for all 18 gaps: MOC NF-e 7.0 (corpus internalizado at
  `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/`). Sections: §2.2.6
  (chave acesso), §2.2.8 (série rural), §2.2.10 (hashCSRT), §3.2.1.5 (mudança
  manifestação), §3.2.2.1 (consNSU/consChNFe), §3.2.3 (prazos manifestação), §3.3 (EPEC),
  §3.4 (prorrogação ICMS), §4.2.1.4 (XSD validation), §4.2.4 (XML-DSig), §4.2.4.1
  (e-CPF), §4.3.7 (produção), §5.2 (NfeRetAutorizacao).
- **KS-002**: XSD schemas at `xsd/` — secondary implementation reference. Schemas relevant
  per gap: `Evento_Prorrog_Indust_1.0/` (GAP-007), `PL_010c_NT2022_002v1.30/` (GAP-014
  baseline), `PL_NFeDistDFe_103/` (GAP-008).
- **KS-003**: `cBenef` UF tables (GAP-013) are not in the corpus — external dependency per
  state. NT informes page was access-restricted at audit time; `informe-04c66e64b8.md`
  captures known active NTs (2026.002 CBS, 2026.004 CNPJ Alfanumérico, 2024.003 Agro
  v1.10).
- **KS-004**: GAP-009 (NFC-e + event signing) provenance comes from specs 009 and 010;
  this spec requires only downstream confirmation and does not independently derive it.

### Key Entities

- **Gap**: An identified normative or documental gap from
  `specs/011-roadmap-gap-audit/gap-report.md`, with unique ID (GAP-001–GAP-018), priority
  band, and recommended action.
- **Implementation Slice**: A self-contained, independently testable unit of work that
  implements one or more related gaps. Maps 1-to-1 with a user story in this spec.
- **Priority Band**: Operational urgency classification: `blocker` (must fix before any
  real use), `next-slice` (near-term), `medium-term` (important but not blocking),
  `watchlist` (monitor — do not implement until demand is confirmed).

## Success Criteria

### Measurable Outcomes

- **SC-001**: All 4 blocker gaps (GAP-001, GAP-002, GAP-004, GAP-005) are resolved — an
  NF-e test against any SEFAZ homologation endpoint succeeds with a correct access key
  without any manual calculation outside the SDK.
- **SC-002**: All 27 Brazilian UFs route to the correct autorizador endpoint in homologation
  and production with zero ambiguous routing results.
- **SC-003**: The full async NF-e authorization cycle (sync batch + async polling + EPEC
  contingency) is supported end-to-end within the SDK for any contributor volume.
- **SC-004**: A recipient can query, retrieve, manifest, and change manifestation type for
  any NF-e in the DFe distribution stream using only the SDK API.
- **SC-005**: An individual person (e-CPF) issuer can sign and authorize an NF-e using the
  SDK without additional tooling.
- **SC-006**: All 15 implementable gaps (GAP-001 through GAP-015, GAP-016, GAP-018) are
  resolved with passing Jest tests and no public contract regressions.
- **SC-007**: Watchlist items (GAP-006, GAP-017) and downstream confirmations (GAP-009)
  each have a documented decision record or confirmation note in the repository.

## Assumptions

- Gap audit artifacts from `specs/011-roadmap-gap-audit/` are the authoritative source for
  gap scope; any conflict must be resolved in favor of the audit unless a new MOC reading
  justifies a change.
- Implementation slices will be developed sequentially by priority band: blockers → next-
  slice → medium-term → watchlist/monitoring.
- GAP-009 (signing for NFC-e and events) is addressed by specs 009 and 010; this spec
  only requires confirmation in those downstream specs.
- `cBenef` UF tables (GAP-013) are an external dependency; the SDK accepts them as
  parameters and documents the external lookup requirement.
- XSD validation (GAP-014) uses bundled schemas from `xsd/`; NT-driven schema updates are
  a separate process covered by GAP-011.
- e-CPF support (GAP-018) reuses the XML-DSig infrastructure from spec 005 without changes
  to the signing algorithm.
- Rural series validation (GAP-017) and NF-e ABI (GAP-006) will not be implemented until
  confirmed demand is documented.
- All implementations are for NF-e (modelo 55) and NFC-e (modelo 65) within the existing
  SDK architecture; NFGas, NFAg, and Agendamento SVC-AN are out of scope.

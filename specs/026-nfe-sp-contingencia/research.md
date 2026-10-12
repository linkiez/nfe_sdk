# Research: NF-e SP Production Contingency

**Feature**: `026-nfe-sp-contingencia` | **Consulted**: 2026-10-10

## R1 - Contingency modes confirmed for the SP slice

- **Decision**: Promote explicit production support only for `SVC-AN` and `EPEC` for issuer UF SP (`cUF` `35`). Represent `FS-DA` as an explicit assisted/unverified boundary, not an automated success path, until a current SP rule confirms applicability. Normal authorization remains the baseline mode.
- **Rationale**: The current SEFAZ/SP NF-e contingency page lists EPEC and SVC. The national MOC Anexo III describes FS-DA as a national modality and states that each UF's legislation governs the modalities. The current SP page does not list FS-DA, so national description alone is insufficient to claim SP runtime support. The official national Web Services table separately places SP in the SVC-AN cohort.
- **Alternatives considered**:
  - Automate all MOC modes for SP: rejected because no current state-level confirmation for FS-DA was found and the procedure requires physical security forms and operator actions.
  - Keep EPEC deferred: rejected because SEFAZ/SP publishes an NF-e EPEC procedure and the repository already has an EPEC event facade and schema family.

## R2 - SVC activation and routing gate

- **Decision**: Require an explicit SVC-AN request and perform a single production `NFeStatusServico` query against SVC-AN before authorization. Continue only for status `107` (SVC in operation). Treat `113` (deactivation in progress), `114` (disabled), missing status, transport failure, or unknown status as a boundary; do not submit the NF-e to SVC.
- **Rationale**: MOC 7.0 Anexo III §§2.1.3.3-2.1.3.5 says the source UF activates SVC and that the company may use authorization services only after the SVC status query returns `107`. The current SP page likewise says SVC use depends on activation by the source SEFAZ. Activation is dynamic; the SDK must observe it rather than infer it from a configured endpoint or a normal-service outage.
- **Alternatives considered**:
  - Route to SVC after a normal authorization timeout: rejected because timeout leaves acceptance uncertain and may create duplicate documents.
  - Treat SP membership in the SVC-AN cohort as activation: rejected because the official service table establishes eligibility, not current activation.
  - Poll status or retry until active: rejected; this slice performs one activation check per explicit SVC request.

## R3 - Production EPEC lifecycle

- **Decision**: Extend the existing root `submitEPECEvent` flow for explicitly requested SP production, retaining its homologation behavior. Production EPEC uses `tpAmb=1`, event `110140`, the SVC-AN event endpoint, and the caller-provided mTLS-capable executor. Return `registered` only for a valid accepted event response with its protocol. Do not automatically transmit the full NF-e after event registration; return an explicit recovery action for a later caller-initiated submission to the SP origin.
- **Rationale**: MOC Anexo III §2.1.4 defines EPEC as a prior event with `tpEmis=4`; after normal service recovers, the full NF-e with the same access key must be sent to the source UF. SEFAZ/SP's EPEC page says an EPEC without its corresponding NF-e within seven days blocks further EPEC issuance until reconciliation. The existing event builder hardcodes homologation and simplified fiscal fields, so production requires explicit environment-aware serialization and complete validated EPEC details rather than promoting those defaults.
- **Alternatives considered**:
  - Treat an accepted EPEC event as an authorized NF-e: rejected; the event is not itself the NF-e authorization.
  - Automatically submit the full NF-e immediately after EPEC: rejected; the MOC recovery step occurs after service restoration, and a multi-request automatic flow would obscure partial success.
  - Create a second EPEC facade: rejected; the root `submitEPECEvent` already exists and should remain the public operation.

## R4 - Document identity and duplicate-risk control

- **Decision**: Keep the contingency decision explicit and independent from the normal authorization result. Do not switch modes after a timeout, unavailable response, or unknown normal outcome. When the MOC requires a different NF-e number for a contingency document after an uncertain prior transmission, reject or boundary the conflicting attempt before transport. EPEC recovery must use the exact access key associated with the registered EPEC.
- **Rationale**: MOC Anexo III §§2.1.2, 2.1.3.5, 2.1.4, and 2.3 distinguish a new contingency document from an uncertain normal request, and require the same access key between an EPEC and its later full NF-e. The SDK is stateless and cannot determine whether an integrator has unresolved submissions unless that context is supplied.
- **Alternatives considered**:
  - Reuse the same key or silently retry: rejected because SVC and normal environments do not share synchronous duplicate detection.
  - Persist pending fiscal documents inside the SDK: rejected because the package currently has no storage contract and persistence belongs to the integrator.

## R5 - Recovery semantics and ownership

- **Decision**: Reuse `authorizeNFe` for the explicit post-recovery NF-e transmission and `reconcileNFeReceipt` for any known asynchronous receipt. Return contingency mode, document key, event/protocol references, recovery state, and next action additively. Keep recovery records caller-owned; do not add local persistence, polling, or automatic resubmission.
- **Rationale**: MOC Anexo III §2.3 requires later transmission for FS-DA/EPEC and states that an NF-e authorized by SVC does not need retransmission to the source UF. Existing facades already represent normal authorization and one-shot receipt reconciliation. A caller-provided recovery context preserves correlation without introducing an SDK database.
- **Alternatives considered**:
  - Add a generic polling or recovery scheduler: rejected because it changes resource ownership and can repeat fiscal writes.
  - Create a separate contingency recovery root facade: rejected for this slice; the existing root operations can perform the explicit actions while returning additive contingency metadata.

## R6 - Schema and package boundary

- **Decision**: Keep all changes in handwritten operational NF-e and transport code, existing public root facades, tests, fixtures, and feature documents. Reuse the existing NF-e `tpEmis` field and EPEC schema family; do not regenerate or edit generated classes unless implementation proves the checked-in schemas lack a required field.
- **Rationale**: `tpEmis` values for EPEC (`4`), FS-DA (`5`), and SVC-AN (`6`) and EPEC event `110140` are already defined by the existing NF-e/MOC schema inventory. The feature is orchestration, routing, activation evidence, validation, and recovery, not a new schema family.
- **Alternatives considered**:
  - Add contingency-only generated payload types or a new public subpath: rejected absent a schema change; additive types can remain on the existing root export.

## R7 - Verification boundary

- **Decision**: Use injected executors and fixtures for normal, SVC status, SVC authorization, EPEC event, and recovery sequences. Run Jest, lint, format, typecheck, build, public-contract audit, package-tarball validation, and feature-document formatting. No live SEFAZ request is an acceptance test.
- **Rationale**: Activation, production credentialing, and service availability are dynamic external conditions. Deterministic fixtures can validate behavior without transmitting live fiscal documents.
- **Alternatives considered**: A live production smoke test was rejected because it is nondeterministic and could create fiscal effects.

## Source Register

### Primary sources

- `SRC-RH-002`: MOC 7.0, Anexo III - Manual de Contingencia NF-e, version 7.00 (November 2020), internalized at `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Anexo III - Manual de Contingencia - NF-e.md`; official PDF: <https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-anexo-iii-manual-contingencia-nf-e.pdf>. Consulted 2026-10-10. Sections 2.1.2-2.1.4, 2.3.
- `SRC-NFE-006`: Portal Nacional da NF-e, Relacao de Servicos Web, <https://www.nfe.fazenda.gov.br/portal/webServices.aspx>; local capture `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md`. Consulted 2026-10-10. Confirms SP's normal authorizer and SVC-AN eligibility; does not establish live activation.
- `SRC-NFE-007`: SEFAZ/SP, Contingencia NF-e, <https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/contingencia.aspx>. Consulted 2026-10-10. Lists EPEC and SVC and says SVC depends on activation by the source SEFAZ; page does not identify FS-DA as an SP option or provide a live activation value.
- `SRC-NFE-008`: SEFAZ/SP, EPEC - Evento Previo de Emissao em Contingencia, <https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/epec.aspx>. Consulted 2026-10-10. Describes event registration, subsequent matching NF-e, seven-day reconciliation limit, and manual resolution of pending EPECs.
- `SRC-NFE-009`: SEFAZ/SP, Consulta Tributaria RC 33139/2026, <https://legislacao.fazenda.sp.gov.br/Paginas/RC33139_2026.aspx>. Search result was visible but direct extraction was rejected by the site; it is not used to establish mode applicability or implementation requirements.

### Secondary sources

None used.

### Evidence limits

- The official SP contingency page and EPEC page were fetched successfully on 2026-10-10.
- The official `AgendamentoSVC` page did not return usable content during this research. Activation is therefore checked through the official SVC status service as described by the MOC, not by scraping a portal status page.
- The MOC is version 7.00 (2020). Current SP portal material confirms EPEC and SVC, but the legal applicability of FS-DA to SP remains unconfirmed and is deliberately not promoted to automated runtime in this plan.

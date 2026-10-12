# Research: NFC-e SP Offline Contingency

**Consulted**: 2026-10-12
**Scope**: SP NFC-e model 65 offline contingency (`tpEmis=9`) and later authorization. NF-e contingency and NFC-e EPEC are not substitutes for this procedure.

## Decisions

### R-001: Treat offline contingency as a separate pending workflow

**Decision**: Do not represent offline creation as an `NFCeAuthorizationOutcome`. Prepare/sign locally, expose a pending record, and reconcile only on an explicit caller request after connectivity returns.

**Rationale**: The current public authorization outcome represents an authorization transport attempt. The feature spec requires a clear distinction between offline issuance and official authorization, and existing classifications must not change.

**Alternatives considered**: Reuse `authorizeNFCe` with a contingency flag; rejected because the current path signs and transmits synchronously and can make a pending document look like an authorization attempt. Add offline values to the current classification union; rejected because it changes the meaning of an existing public contract.

### R-002: Bound runtime eligibility to SP's officially permitted offline procedure

**Decision**: Model the offline path as SP model 65, `tpEmis=9`, and require a technical inability to transmit or obtain an authorization response. Treat other UFs and EPEC as separate unsupported scope unless separately specified.

**Rationale**: Portaria SRE 40/2024, article 6, directs taxpayers to operate in contingency when technical problems prevent transmission or obtaining an authorization response. SP's current consultation RC 34.105/2026 identifies offline `tpEmis=9` and states the mode has been available in SP since 2024-07-10. The SP portal describes EPEC as separately activated by SFP in production.

**Alternatives considered**: Infer NFC-e rules from NF-e contingency manuals; rejected by the spec and source boundary. Treat EPEC activation as a prerequisite to offline `tpEmis=9`; rejected because official guidance describes them as distinct contingency mechanisms.

### R-003: Enforce the documented offline XML transmission deadline

**Decision**: Require a caller-supplied deadline computed from the applicable business calendar; reject reconciliation after that instant. The SDK does not embed a holiday calendar and does not claim to calculate one.

**Rationale**: Manual Offline v2.0, MOC 7.0 Annex IV, and the current consolidated clause 11 state the end of the first following business day. The SDK can enforce a supplied instant but cannot reliably derive state, municipal, and exceptional holidays without an authoritative calendar dependency.

**Alternatives considered**: 24 hours from issue, weekend-only arithmetic, or indefinite retry; rejected because they do not faithfully represent the official business-day rule.

### R-004: Keep offline record durability with the integrator

**Decision**: Return the exact signed XML and a stable reconciliation record; do not add SDK storage, queueing, or background polling.

**Rationale**: This is a library with no existing persistence service, and FR-009 excludes automatic multi-document recovery and indefinite polling. The caller must retain unresolved documents and the evidence necessary to reconcile them.

**Alternatives considered**: Add an SDK-managed filesystem/database queue; rejected as platform-specific, stateful, and outside current architecture.

### R-005: Extend feature 028 for offline DANFE without changing online QR v3

**Decision**: Keep rendering in feature 028 and extend its input with a signed offline record. Render the official pending notice, do not render an authorization protocol, and compose the Manual v6 offline QR Code v2 URL from the signed XML and CSC. Existing online QR v3 behavior remains unchanged.

**Rationale**: The feature 028 renderer contract accepts both correlated authorized evidence and signed offline records. Manual v6 sections 3.1.8, 4.3.2, and 4.3.5 specify the pending notice, no authorization protocol, offline URL parameters, and SHA-1 hash construction for QR v2.

**Alternatives considered**: Pass an offline document through the authorized-only evidence shape; rejected because it misrepresents authorization. Add a duplicate renderer to 029; rejected because feature 028 owns DANFE.

### R-006: Make duplicate handling explicit without claiming stateless replay prevention

**Decision**: Reconciliation performs exactly one caller-requested transport attempt. It preserves the attempt result and evidence, correlates the response to the record, and surfaces rejected, duplicate, and inconclusive cases without retrying automatically. The caller persists attempt state and prevents stale or concurrent replays.

**Rationale**: The SDK has no durable state. Ajuste SINIEF clause 11 and Manual Offline v2.0 describe sequencing, maintaining the same key for transmission, and duplicate rejection risk, but do not provide an idempotency token that would let a stateless SDK guarantee cross-call replay prevention.

**Alternatives considered**: Claim SDK-level replay prevention with in-memory state; rejected because it fails across processes/restarts. Automatically retry ambiguous responses; rejected because it can submit the same offline record again without knowing whether SEFAZ received the first request.

## Source Register

### Normative primary sources

| ID     | Source                                                                                                                                                                                                                                                                          | Relevant evidence                                                                                                                                                                                                                                                                                                        | Consulted  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| SRC-01 | [Portaria SRE 40/2024, consolidated text](https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-40-de-2024.aspx), as amended by SRE 81/2025                                                                                                                                 | Articles 1, 4-6: NFC-e follows Ajuste SINIEF 19/16; article 6 requires contingency when technical problems prevent transmission or obtaining an authorization response.                                                                                                                                                  | 2026-10-12 |
| SRC-02 | [SEFAZ-SP Resposta à Consulta 34.105/2026](https://legislacao.fazenda.sp.gov.br/Paginas/RC34105_2026.aspx), dated 2026-07-08, published 2026-09-04                                                                                                                              | Paragraphs 5-8.1: offline `tpEmis=9` is available in SP since 2024-07-10; one DANFE copy stays available to the tax authority until transmission and authorization; electronic XML storage in a secure location may replace the second printed copy if the DANFE can be printed when requested. It cites MOC 7 Annex IV. | 2026-10-12 |
| SRC-03 | [Ajuste SINIEF 19/2016, CONFAZ](https://www.confaz.fazenda.gov.br/legislacao/ajustes/2016/AJ_019_16), current consolidated page                                                                                                                                                 | Clause 11 is the national NFC-e contingency authority cited by Portaria SRE 40/2024. Use its current consolidated text for implementation details.                                                                                                                                                                       | 2026-10-12 |
| SRC-04 | [MOC 7.0, Annex IV: NFC-e contingency manual](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-anexo-iv-manual-contingencia-nfc-e.pdf), November 2020                                                                                                          | Official result text says the offline XML is transmitted after technical recovery by the end of the first business day following emission. RC 34.105/2026 cites this same version for the electronic XML alternative to the second copy.                                                                                 | 2026-10-12 |
| SRC-05 | [Manual de Especificações da Contingência Offline para NFC-e, v2.0](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=tG8%20fKpcfbM=) and [Portal Nacional manuals listing](https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=ndIjl+iEFdE=) | Portal Nacional lists v2.0 as the offline manual. Use it with MOC Annex IV and current schema for the complete operational contract; extracted content did not establish a reliable publication date or all rejection cases.                                                                                             | 2026-10-12 |
| SRC-06 | [SEFAZ-SP NFC-e contingency guidance](https://portal.fazenda.sp.gov.br/servicos/nfce/Paginas/Conting%C3%AAncia.aspx)                                                                                                                                                            | States Portaria SRE 40/2024 authorizes offline contingency. EPEC is described separately; in production it is activated by SFP when normal authorization is unavailable.                                                                                                                                                 | 2026-10-12 |

### Non-normative sources

No secondary source was used to establish a fiscal requirement. Search snippets and vendor descriptions were treated only as discovery aids and were not used to override official sources.

## Confirmed Rules and Boundaries

- SP's Portaria article 6 addresses technical inability to transmit or obtain the authorization response and points to clause 11 of Ajuste SINIEF 19/16.
- SP has officially permitted offline NFC-e since 2024-07-10; the 2026 consultation describes the offline mode as `tpEmis=9`.
- The consulted MOC Annex IV deadline is the end of the first business day after emission. Do not substitute an older 24-hour interpretation without new authoritative evidence.
- One DANFE copy must remain available to the tax authority through later transmission and authorization. The cited MOC permits safe electronic XML retention instead of the second printed copy, with DANFE printing available on request.
- EPEC is a distinct mode and activation policy. It is not an implicit condition for offline `tpEmis=9`.
- An offline record is not an authorization. A receipt/intermediate response is not a terminal authorization.

## Unresolved Implementation Gates

- The official sources do not define an SDK-level idempotency token or a deterministic classification for every duplicate/late rejection. Preserve authority codes/messages and require operator action; do not automatically retry ambiguous results.
- The regional/municipal business calendar is external to the SDK. The caller supplies its source identifier, IANA time zone, consecutive evaluated dates, and deadline. Runtime checks completeness and consistency but cannot authenticate the calendar source.
- The state portals blocked direct automated extraction of the 2026 consultation during this pass; its cited permission date remains recorded from the official finding in the earlier source research.
- The state FAQ uses dynamic content and did not expose its item text in extraction. The SP contingency page and recent published consultation were used for the state-specific findings instead.
- Firecrawl search-feedback calls returned `503 DB_DISABLED`; no feedback was recorded. This does not affect the cited source content.

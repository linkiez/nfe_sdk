# Research: NFC-e SP Production Authorization

**Feature**: `027-nfce-sp-producao`
**Consulted**: 2026-10-12

## Decision 1: Use the dedicated SEFAZ/SP NFC-e production authorizer

- **Decision**: Route model 65 SP production authorization to `https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx`, using the existing `nfce-authorization-sp` service identity and a production catalog entry whose provider is `SP`. Keep the existing homologation route and the PR homologation profile unchanged. Production support remains SP-only; do not route through SVC-AN or reuse the NF-e model 55 endpoint.
- **Normative source**: `SRC-NFCE-007`, SEFAZ/SP, [WebServices](https://portal.fazenda.sp.gov.br/servicos/nfce/Paginas/WebServices.aspx), section “URL WEBSERVICES - AMBIENTE DE PRODUÇÃO”, consulted 2026-10-12. The page lists the production authorization URL literally. It separately lists homologation as `https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx`; an older local source capture shows a missing initial `h`, so the live official page is authoritative.
- **Rationale**: NFC-e has a dedicated SP host, distinct from NF-e authorization. Modeling the route by service, environment, and provider prevents accidental cross-environment or cross-model routing.
- **Alternatives considered**:
  - Reuse `nfe.fazenda.sp.gov.br`: rejected because SEFAZ/SP publishes a separate `nfce.fazenda.sp.gov.br` host.
  - Route to SVC-AN or silently fail over to it: rejected because it is not the normal SP NFC-e production authorizer and offline contingency is explicitly out of scope.

## Decision 2: Treat SP NFC-e authorization as a synchronous single-document operation

- **Decision**: Keep one signed NFC-e per authorization request and map the synchronous response directly to a terminal or explicit non-terminal result. Do not automatically poll `NFeRetAutorizacao4`, retry an uncertain submission, or report a pending response as authorized. Preserve a pending classification/next action only when the received response supports it.
- **Normative sources**:
  - `SRC-NFCE-006`, SEFAZ/SP, [Sobre a Nota Fiscal de Consumidor Eletrônica](https://portal.fazenda.sp.gov.br/servicos/nfce), consulted 2026-10-12, states the NFC-e authorizer supports synchronous authorization.
  - `SRC-NFCE-008`, Portal Nacional da NF-e, [NT 2023.002 v1.01 - Emitente CPF - NFC-e](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=T3QyeMfpios=), section 3.1, consulted 2026-10-12, states asynchronous NFC-e authorization is eliminated and the batch can contain only one NFC-e.
- **Rationale**: The specific NFC-e rule is newer and more relevant than the general asynchronous NF-e flow. SEFAZ/SP still lists a receipt endpoint; its listing alone does not establish that normal NFC-e authorization should use it.
- **Alternatives considered**:
  - Reuse the NF-e batch receipt flow: rejected for the normal SP NFC-e path by the NFC-e-specific synchronous rule.
  - Retry automatically after timeout: rejected because the first request may have been accepted and a retry can duplicate a fiscal submission.

## Decision 3: Return a QR URL only as a result of the matching document and environment

- **Decision**: Reuse `generateNFCeSPQRCode` after a successful authorization, with the exact access key and normalized environment. Add an optional CSC input to the existing authorization request for additive compatibility; require it on the new production path so a successful production outcome can include its QR URL. Preserve existing homologation calls without CSC; when CSC is supplied there, include the QR URL as well. Never return, log, or include the raw CSC token in the result or URL.
- **Normative sources**:
  - SEFAZ/SP, [Sobre a Nota Fiscal de Consumidor Eletrônica](https://portal.fazenda.sp.gov.br/servicos/nfce), consulted 2026-10-12, says that after credentialing an issuer must obtain the security code through “Gerenciar Cód Segurança” to issue NFC-e.
  - Portal Nacional da NF-e, [Manual de Especificações Técnicas do DANFE NFC-e e QR Code, version 6.0](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=k/IuuaW4YiY=), section 4.4.1, published 2025-03-24 and previously consulted 2026-05-19, defines online QR Code v3 parameters as access key, version `3`, and `tpAmb` (`1` production, `2` homologation); section 4.4 states v3 does not require CSC as a QR URL parameter.
- **Implementation interpretation**: CSC is a SEFAZ/SP issuer prerequisite and an existing SDK-local input requirement of `generateNFCeSPQRCode`; it is not a normative v3 URL parameter. The optional request field preserves current homologation callers, while production requires it to meet this feature's deliverable of returning a QR URL. Credentialing and CSC issuance remain external.
- **Rationale**: A QR URL is not an authorization result. Returning it only with a successful outcome and tying it to that outcome's access key/environment avoids implying authorization from URL composition alone.
- **Alternatives considered**:
  - Add a new QR Code import path or duplicate URL composition: rejected because the helper already exists as an additive root export.
  - Return a QR URL for rejected documents: rejected because that conflicts with the acceptance contract for an authorized document.

## Decision 4: Preserve the existing document schema and support 17-position production protocols

- **Decision**: Keep the checked-in NF-e/NFC-e 4.00 XSD family and generated TypeScript surface unchanged unless focused fixture validation disproves compatibility. Add regression coverage for a 17-digit authorization protocol and retain parsing as a string.
- **Normative sources**:
  - `SRC-NFCE-006`, SEFAZ/SP, [Sobre a Nota Fiscal de Consumidor Eletrônica](https://portal.fazenda.sp.gov.br/servicos/nfce), notice dated 2026-09-09, says production adopts the 17-position protocol on 2026-10-05; consulted 2026-10-12.
  - `SRC-NFCE-009`, Portal Nacional da NF-e, [NT 2025.002-RTC v1.51](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=AKD/muSmiIY=), sections 5.1-5.2, specifies 15- or 17-position `nProt` and SP NFC-e adoption of 17 positions; published 2026-07.
- **Repository evidence**: `xsd/PL_010c_NT2022_002v1.30/tiposBasico_v4.00.xsd` accepts 15 or 17 digits for `TProt`; the normal authorization outcome carries `protocolNumber` as a string.
- **Rationale**: This is an output-format variation already supported by the local schema; regeneration would add risk without evidence of a generated contract change.
- **Alternatives considered**:
  - Restrict protocols to 15 digits: rejected because this conflicts with SP production behavior in force since 2026-10-05.
  - Regenerate all schema-derived output: rejected unless a checked-in schema or focused contract test establishes a necessary change.

## Decision 5: Keep authentication and issuer setup external, with explicit transport prerequisites

- **Decision**: Require an SDK-created `SigningContext` for XML signing and a caller-provided `RequestExecutor` configured for client-certificate TLS on production. Reject missing/invalid production prerequisites before network I/O. Do not acquire/store certificates, provision CSC, perform issuer onboarding, or make live SEFAZ calls in automated tests.
- **Normative sources**:
  - SEFAZ/SP, [WebServices](https://portal.fazenda.sp.gov.br/servicos/nfce/Paginas/WebServices.aspx), consulted 2026-10-12, identifies distinct production and homologation service URLs.
  - Portal Nacional da NF-e, [MOC 7.0 - Visão Geral](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=LrBx7WT9PuA=), published 2020-11 and consulted 2026-05-19, specifies TLS 1.2+ with mutual client authentication and XML signing requirements. Treat it as national baseline, not proof of a current SP-specific certificate provisioning procedure.
- **Implementation interpretation**: The existing default `fetch` executor does not configure client certificates; an injected capable executor is required for production.
- **Alternatives considered**:
  - Imply that successful local signing provides production TLS authentication: rejected because signing and transport authentication are separate concerns.
  - Include certificate or CSC acquisition in the SDK: rejected by the feature's external-prerequisite boundary.

## Open operational limits

- Endpoint URLs are confirmed from the official service page; endpoint live availability, issuer authorization/credentialing state, certificate validity, CSC provisioning, and each issuer's production eligibility remain external and are not inferred by the SDK.
- The SEFAZ/SP services page confirms the service list but not all currently required XML fields or real-time endpoint health; fixtures must be checked against the repository's official schema family and current technical notes.
- Automated validation must use injected deterministic executors and must not issue a legally valid production document.

# Research: NF-e SP Production Authorization

**Feature**: `025-nfe-sp-producao` | **Date**: 2026-10-10

## R1 — Official SP Production Routing

**Decision**: Route normal NF-e authorization and known-receipt retrieval to provider `SP` when the environment is production and issuer UF is SP (`cUF` `35`). Use the official SP endpoints for NF-e 4.00:

- Authorization: `https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx`
- Receipt retrieval: `https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx`

**Rationale**: The national Portal da NF-e Web Services table lists São Paulo as an autonomous authorizer and lists these endpoints under `Sefaz São Paulo (SP)`. The same table lists SP among the states served by SVC-AN in contingency; that is a distinct contingency route, not the normal SP authorizer and not proof that contingency is currently activated. The source was retrieved successfully on 2026-10-10 and its local capture is `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md`.

**Alternatives considered**: Reusing the production SVC-AN entries was rejected because it sends a normal SP authorization to a contingency provider. Adding a separate public service name such as `nfe-authorization-sp` was rejected because the NF-e service semantics are unchanged; provider/authorizer is routing context.

**Boundary**: The portal table does not establish live service availability, credential validity, or whether SVC-AN is activated at a particular time. The SDK must not infer those conditions or switch providers automatically.

## R2 — Authorizer-Aware Transport Resolution

**Decision**: Extend the existing service catalog and resolver to select by service, environment, and explicit authorizer/provider when routing requires it. Preserve the existing root `authorizeNFe` and `reconcileNFeReceipt` operations. Add production catalog entries only for SP authorization and receipt retrieval in this slice.

**Rationale**: `resolveNFeServiceEndpoint` currently accepts only environment and service, and the catalog's production NF-e entries are SVC-AN. The existing `resolveUFAutorizador` already maps `35` to `SP`; the missing edge is propagation of that result into endpoint selection. Receipt requests already carry `routingContext.authorizer`, but `reconcileNFeReceipt` currently forwards only environment and service to transport.

**Alternatives considered**: A second SP-specific authorization facade would duplicate orchestration and public semantics. A global change to all UF endpoints is outside this feature's scope. Preserve current unambiguous catalog behavior for existing callers; reject unresolved or ambiguous production routes rather than silently selecting SVC-AN.

## R3 — Production Issuer Identity

**Decision**: Before network I/O, resolve the issuer UF for every submitted document from existing identity evidence: `payload.cUF` and/or the UF digits at the beginning of a 44-digit access key in `documentId`. Reject malformed, missing, conflicting, non-SP, or mixed-batch evidence. When both forms are available, they must agree.

**Rationale**: The existing contingency boundary has a private resolver for `payload.cUF` or a 44-digit `documentId`, but canonical normalization only requires a nonblank `documentId`; it does not validate the access-key length or reconcile multiple identity sources. Production dispatch cannot rely on a caller-selected environment or batch's first document alone.

**Alternatives considered**: Adding an independent caller-supplied `issuerUF` field without checking the access key was rejected because it can contradict the document. Existing inputs provide the minimum compatible identity path; strict production validation can be additive to existing homologation behavior.

## R4 — Receipt Continuation

**Decision**: Reuse `reconcileNFeReceipt` from spec 021 for the known `nRec` follow-up. Propagate its explicit `routingContext.authorizer = 'SP'` and `environment = 'production'` to the same provider-aware catalog, and preserve all existing pending and terminal classifications.

**Rationale**: Spec 021 owns the public one-shot receipt operation and parsing/classification lifecycle. Its current Draft status and unchecked task checklist do not prevent planning; implementation and tests already exist. Contract acceptance and the currently missing SP production route remain implementation gates.

**Alternatives considered**: A second receipt facade, duplicate XML parser, generic polling loop, or automatic resubmission were rejected. A timeout after a possibly accepted production request remains uncertain and must not imply that resubmission is safe.

## R5 — Mutual TLS and Credential Boundary

**Decision**: Production transport must use a caller-supplied request executor configured for mutual TLS; the default Node.js `fetch` executor remains unchanged and is not the production executor. Do not copy private-key or certificate bytes into public outcomes, logs, or this catalog.

**Rationale**: MOC 7.0 §4.3.1 specifies TLS 1.2 or later with mutual authentication through digital certificates. `fetchRequestExecutor` does not configure client-certificate TLS. `SigningContext` retains signing runtime material privately in a `WeakMap`, and the current `RequestExecutor` boundary allows an integrator to provide its own transport implementation without changing the signing contract.

**Alternatives considered**: Assuming the signing context automatically configures TLS was rejected: signing and transport authentication are separate operations in the current architecture. Implementing certificate provisioning or exposing key material in the SDK transport API is outside this slice. Executor TLS capability is an integrator precondition and cannot be cryptographically proven from the current executor function type.

## R6 — Schema, Public API, and Validation Scope

**Decision**: Preserve the NF-e 4.00 canonical schema family and existing root ESM exports. Implement routing and preflight only in handwritten `src/canonical/nfe/` and `src/canonical/transport/`; no generated XSD artifacts or new runtime dependency are expected. Validate via injected executors and fixtures; never transmit a real fiscal document as a routine test.

**Rationale**: The authorization service, request XML, and response classifications already exist. The gap is production endpoint selection, identity enforcement, and mTLS executor use, not a new schema or document type.

**Alternatives considered**: Changing `xsd/`, generated `src/classes/`, `src/interfaces/`, `src/types/`, or `src/enums/` was rejected absent evidence of a schema delta. A production network smoke test was rejected as neither deterministic nor appropriate for ordinary CI.

## R7 — Response Environment Consistency

**Decision**: Check the response `tpAmb` against the requested environment before mapping an authorization or receipt result. Production responses must identify environment `1`; missing, malformed, or mismatched environment is a protocol error and cannot map to authorized.

**Rationale**: Spec 025 requires the environment to remain explicit in requests and results and lists a response from another environment as an edge case. Endpoint selection alone does not prove that a returned SOAP document belongs to the intended environment.

**Alternatives considered**: Trusting the selected URL or the request's local environment field as response evidence was rejected because either could conceal a contradictory SOAP payload.

## Source Register

### Primary Sources

- `SRC-NFE-006`: Portal Nacional da NF-e, “Relação de Serviços Web”, <https://www.nfe.fazenda.gov.br/portal/webServices.aspx>, consulted 2026-10-10. The official table names the SP authorizer and service URLs, and separately lists SP in the SVC-AN contingency cohort. It does not report current endpoint health or current contingency activation.
- `SRC-RH-002`: MOC 7.0, internalized at `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`, consulted 2026-05-19. §4.3.1 specifies TLS 1.2+ and mutual certificate authentication; §§4.2.3–4.2.5 cover certificate and signature requirements.
- `SRC-NFE-003`: SEFAZ/SP NF-e overview, <https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Sobre.aspx>, registry access date 2026-05-16. Supplemental state context only; dynamic notices are not evidence of current availability.
- `SRC-NFE-004`: SEFAZ/SP NF-e services, <https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Servicos.aspx>, registry access date 2026-05-16. Supplemental service/credentialing context only; issuer permissions remain external prerequisites.

### Secondary Sources

None used.

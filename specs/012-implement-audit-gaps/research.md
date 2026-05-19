# Research: Implementação das Gaps do Roadmap Gap Audit

**Feature**: `012-implement-audit-gaps` | **Date**: 2026-05-19

Resolves all NEEDS CLARIFICATION items from Technical Context. Findings are organized by
gap; watchlist items (GAP-006, GAP-017, GAP-009) require no research decisions.

---

## R1 — GAP-001: Chave de Acesso (Access Key Calculation)

**Decision**: Implement `computeNFeAccessKey(fields)` in `src/canonical/nfe/access-key.ts`.

**Rationale**: MOC §2.2.6 specifies a 44-digit key composed of fixed-length fields:
`cUF(2) + AAMM(4) + CNPJ(14) + mod(2) + serie(3) + nNF(9) + tpEmis(1) + cNF(8) + cDV(1)`.
The check digit `cDV` is computed via modulo-11 over digits 1–43 with weights cycling 2–9;
if remainder is 0 or 1, `cDV = 1`; otherwise `cDV = 11 − remainder`. All computation is
pure arithmetic — no external library needed beyond Node.js built-ins.

**Alternatives considered**: Delegating to a third-party library (e.g., wmixvideo/nfe) was
rejected to keep the package dependency-free for this calculation and to allow direct
normative traceability.

---

## R2 — GAP-002: hashCSRT

**Decision**: Implement `computeHashCSRT(cnpj, idCSRT, csrt)` in
`src/canonical/nfe/hash-csrt.ts` using Node.js built-in `crypto.createHash('sha1')`.

**Rationale**: MOC §2.2.10 specifies `SHA-1(CNPJ_emitente + idCSRT + CSRT)` with the
result hex-encoded as `infRespTec.hashCSRT`. Node.js `crypto` module is a built-in with no
additional package required. `node-forge` (already a dependency) could also compute SHA-1,
but the built-in `crypto` is preferred for a pure hash operation without the overhead of
PKI scaffolding.

---

## R3 — GAP-003: EPEC Contingency

**Decision**: New module `src/canonical/nfe/epec/` with builder + SVC routing + contracts;
facade function `submitEPECEvent`.

**Rationale**: MOC §3.3 defines EPEC as `tpEmis = 4`. The event is submitted via
`NfeRecepcaoEvento` at SVC-AN (most UFs) or SVC-RS (RS, SC). Schema:
`xsd/Evento_EPEC_PL_v1.01/`. EPEC requires a pending list (emitter-side tracking of
submitted-but-not-yet-authorized NF-e). The reconciliation flow is a second `authorizeNFe`
call against the primary autorizador after connectivity is restored — no new SOAP service
needed, but the facade must accept an EPEC-flagged NF-e and route it correctly.

---

## R4 — GAP-004: Multi-UF Service Catalog

**Decision**: New `src/canonical/transport/uf-routing.ts` with a static UF → autorizador
mapping table; expand `service-catalog.ts` with all 14 autorizadores × all services ×
homologation environment.

**Rationale**: The existing catalog only contains SVAN (virtual) entries. MOC Annex
defines 14 autorizadores: AM, BA, CE, GO, MG, MS, MT, PA, PE, PR, RS, SP plus SVC-AN and
SVC-RS. UF routing: AC, AL, AP, DF, ES, MA, PB, PI, RJ, RN, RO, RR, SE, TO → SVC-AN;
SC → SVC-RS; the remaining 12 UFs → their own autorizador. `resolveNFeServiceEndpoint`
already accepts `provider` as input; the new `uf-routing.ts` adds the lookup step from UF
code to provider.

---

## R5 — GAP-005: Production Environment

**Decision**: Expand `service-catalog.ts` with production entries for all 14 autorizadores
(same service set as homologation, different URLs). No type change needed — `CanonicalEnvironment`
already supports `'production'`.

**Rationale**: `CanonicalEnvironment = 'homologation' | 'production'` exists since spec 004
but only homologation URLs were populated. Production endpoints follow the same WSDL service
names with `www.{uf}.fazenda.gov.br` domains instead of `homologacao.{uf}.fazenda.gov.br`
(or equivalent per autorizador).

---

## R6 — GAP-007: ICMS Deferral Extension

**Decision**: Extend `GenericEventFamily` with `'prorrogacao-icms'`; add payload type
`ICMSDeferralPayload`; add builder in `src/canonical/generic-event/prorrogacao-icms-payload.ts`
and facade `submitICMSDeferralEvent`.

**Rationale**: ICMS deferral (`prorrogação ICMS` interestadual) is a generic event with
code `110764` per MOC §3.4. Schema is in `xsd/Evento_Prorrog_Indust_1.0/`. The existing
`submitGenericEvents` infrastructure handles event submission; the new addition is the
payload type and family variant.

---

## R7 — GAP-008: consNSU / consChNFe

**Decision**: Two new facade functions: `queryNFeByNSU` and `queryNFeByAccessKey`, backed
by `src/canonical/recipient/query-nfe-by-nsu.ts` and `query-nfe-by-key.ts`.

**Rationale**: MOC §3.2.2.1 defines `consNSU` (query by NSU) and `consChNFe` (query by
access key) as sub-operations of `NFeDistDFe` (DFe distribution service). Schema:
`xsd/PL_NFeDistDFe_103/`. These are recipient-actor operations that return
`retDistDFeInt` — the same envelope as `distributeRecipientDFe`. The existing
`RecipientDocumentEnvelope` type can be reused for the result.

---

## R8 — GAP-010: NfeConsultaCadastro

**Decision**: New facade `queryContributorRegistration` backed by
`src/canonical/recipient/query-contributor-registration.ts`.

**Rationale**: `CadConsultaCadastro4` (or per-UF equivalent: `NfeConsultaCadastro4`) is a
SEFAZ service that validates CNPJ/IE registration status per UF. The result
(`retConsCad`) includes contributor name, address, IE situation, and date. UF routing
follows the same autorizador catalog from GAP-004.

---

## R9 — GAP-011: NT Tracking Process

**Decision**: Document the process in a new `docs/_meta/nt-tracking-process.md` file and
add a summary section to `docs/_meta/source-registry.md`.

**Rationale**: No code implementation. The process is: (1) SEFAZ publishes NT via the
portal informes page; (2) maintainer creates a repository issue citing the NT; (3) reviews
MOC diff and affected XSD schemas; (4) updates `xsd/` if schema changed; (5) updates
`docs/_meta/official-download-manifest.json` and `source-registry.md`; (6) runs regression
tests; (7) ships a patch release. Currently active NTs to track: 2026.002 CBS, 2026.004
CNPJ Alfanumérico, 2024.003 Agro v1.10.

---

## R10 — GAP-012: NfeRetAutorizacao (Async Batch Retrieval)

**Decision**: New facade `retrieveNFeAuthorizationBatch` backed by
`src/canonical/nfe/async-batch-retrieval.ts`.

**Rationale**: `NfeRetAutorizacao4` is the async counterpart to `NFeAutorizacao4`. The
caller submits a batch (receiving a `nRec` receipt number), then polls until the batch is
processed. Response schema: `retConsReciNFe` from `consReciNFe_v4.00.xsd`. The existing
`NFeAuthorizationBatch` type captures `nRec`; the new module adds the retrieval step that
returns per-NF-e authorization status.

---

## R11 — GAP-013: Campo cBenef

**Decision**: Accept `cBenef` as an opaque `string` optional field in the canonical NF-e
payload. Document it as requiring an external UF-specific table lookup. No runtime table
internalized.

**Rationale**: `cBenef` is part of the ICMS group in the generated NF-e schema. UF benefit
tables are published by state tax authorities and change frequently — internalizing them
would create a high-maintenance dependency. The generated type `TNFe` already has the
field; the canonical layer passes it through. A comment in `CanonicalNFeInput` documents
the external dependency.

---

## R12 — GAP-014: XSD Validation

**Decision**: Implement `validateNFeXsd(xml, options?)` in
`src/canonical/validation/validate-nfe-xsd.ts` using `xmllint` via Node.js `child_process`
with the schemas from `xsd/`.

**Rationale**: No pure-JS/ESM XSD 1.0 validator exists without native bindings. Options
evaluated:

- `libxmljs2` — native N-API bindings, breaks in restricted environments.
- `xsd-schema-validator` (Java) — requires JRE, unsuitable for npm library.
- Manual DOM traversal — impractical for full XSD 1.0 support.
- `xmllint` (system binary) — universally available on Linux/macOS servers where NF-e
  operations run; zero npm dependency; accurate XSD 1.0 validation.

`validateNFeXsd` is opt-in (caller passes `{ validate: true }` or calls it explicitly
before `serializeNFeXml`). When `xmllint` is absent, the function returns a
`XsdValidationResult` with `available: false` rather than throwing, so consumers in
environments without `xmllint` are not blocked.

**Alternatives considered**: Bundling a WASM xsd validator was rejected due to binary size
and uncertain ESM compatibility.

---

## R13 — GAP-015: Manifestation Change

**Decision**: New facade `changeManifestRecipientOperation` backed by
`src/canonical/recipient/change-manifestation.ts`. Enforces allowed sequence transitions
per MOC §3.2.1.5.

**Rationale**: MOC §3.2.1.5 allows changing a manifestation type under specific conditions:
`ciencia-da-operacao` can be superseded by any of the other three types; direct transitions
between `confirmacao`, `desconhecimento`, and `operacao-nao-realizada` are not allowed.
The function validates the proposed transition and submits the change event via
`NfeRecepcaoEvento`. Reuses `RecipientManifestationEventType` already defined.

---

## R14 — GAP-016: Manifestation Deadlines Documentation

**Decision**: Update `docs/manifestacao-destinatario/visao-geral.md` with a deadline table
per event type per MOC §3.2.3. Editorial change only — no code.

**Rationale**: MOC §3.2.3 deadlines: Ciência da Operação — 90 days from NF-e
authorization; Confirmação da Operação — 180 days; Desconhecimento da Operação — 180 days;
Operação Não Realizada — 180 days. These deadlines are legally binding for recipients.

---

## R15 — GAP-018: e-CPF Certificate Support

**Decision**: Document that e-CPF A1 certificates are already supported by the existing
`createSigningContext` + `signNFeXml` infrastructure. Add a test fixture with a self-signed
e-CPF-style certificate (CPF in subject CN) and an integration note.

**Rationale**: The existing signing layer (`node-forge` + `xml-crypto`) is
certificate-agnostic — it parses any valid PFX and uses the key/cert regardless of whether
the subject CN contains a CNPJ or CPF. The gap was a documentation and test coverage gap,
not a code gap. The `createSigningContext` function already accepts both `file-path` and
`in-memory-content` sources for PFX loading. The only addition is a test confirming CPF
subject certificates work correctly.

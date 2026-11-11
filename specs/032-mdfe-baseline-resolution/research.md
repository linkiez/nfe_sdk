# Research: MDF-e Baseline Resolution (gate record)

**Consulted**: 2026-11-11
**Feature**: [spec.md](spec.md) | **Evidence set**: [030 research](../030-mdfe-source-schema-baseline/research.md)

## Gate result

| Gate                                                                     | Result                   | Evidence                                                                                                                                           |
| ------------------------------------------------------------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package identity (`PL_MDFe_300b_NT012025_1.04.zip`, archive root `1.05`) | **Unresolved - blocked** | Portal lists revisions 1.01-1.04 only; no source explains the `1.05` root; digests unchanged since 2026-10-12 (030 research, "Resolution Review"). |
| Applicability by revision, operation, environment, UF and interval       | **Unverified - blocked** | No primary source gives an interval or deployment matrix.                                                                                          |
| SP issuer/accreditation cohort                                           | **Unverified - blocked** | Portaria CAT 102/2013 and SRE 22/2026 describe issuer rules, not per-operation access.                                                             |
| Actor permissions for query and distribution                             | **Unverified - blocked** | No reviewed page maps roles to the query and distribution services.                                                                                |
| Contingency                                                              | **Excluded**             | No official MDF-e procedure verified.                                                                                                              |

## Selected package and included operations

**By the review alone: none** (FR-001, CC-003). **By maintainer decision (below): `PL_MDFe_300b_NT012025_1.04.zip` for the consume-only operations.** The identity conflict stays recorded as an open risk; the lifecycle matrix keeps the consume-only rows `bloqueado` until the SDK implements them.

## What would unblock

1. An SVRS answer (portal contact, FAQ or published errata) stating which revision the archive is and its effective interval; or
2. A maintainer decision, recorded with its risk, to adopt the 1.04 archive as the baseline for the consume-only operations (query by key, non-closed query, distribution), on the grounds that its content is a superset of MOC 3.00b and keeps every schema those operations use. That decision is a compliance choice and is not made by this feature.

## Maintainer decision (2026-11-11)

The repository maintainer decided to adopt `PL_MDFe_300b_NT012025_1.04.zip` (SHA-256 `fc53c880bd757d5b03b79de15dd7687259dfbfa38fed85e9ebb9c638b93854cc`, archive root `PL_MDFe_300b_NT012025_1.05/`, 41 XSD) as the baseline **only for the consume-only operations**: query by key (`consSitMDFe`), non-closed query (`consMDFeNaoEnc`), service status (`consStatServMDFe`), distribution (`distMDFe`) and the reading of received MDF-e and events. Recorded risk: the revision label and the effective interval are still unconfirmed by SVRS, so a rejection or schema drift in homologation or production may require switching package; emission, closure, cancellation and other issued events remain out of scope and are not covered by this decision. Features 033-040 and the JCMserver3 MDF-e slice (US8) are therefore unblocked for these operations, with the first homologation evidence being the check of this decision; production stays gated by feature 039 (per-operation evidence).

## Implementation findings (2026-11-11)

- **Distribution uses its own package.** The `MDFeDistribuicaoDFe` service (third-party actors) is described by `distDFeInt`/`retDistDFeInt` 1.00 (MOC Online, NT 2015.002 v1.03), published by SVRS as `PL_MDFeDistDFe_100.zip` (SHA-256 `2dc8844ca085da8b7ebfab631425a3542b45f75e632af58e95350d2d77ee8725`, 5 XSD). The `distMDFe_v3.00.xsd` inside `PL_MDFe_300b_NT012025_1.04.zip` is a different request (`indDFe`, `indCompRet`) and is not used. The maintainer decision above covers the distribution package for the same consume-only operations.
- **SOAP contract.** Taken from the MOC Online MDF-e (SEFAZ-PR rendering of MOC 3.00b, support material that does not replace the official documents): SOAP 1.2, `mdfeDadosMsg` qualified by `http://www.portalfiscal.inf.br/mdfe/wsdl/<Service>`, no SOAP header since MOC 3.00b except for the distribution service, which still documents `mdfeCabecMsg` (`cUF`, `versaoDados`). Methods: `mdfeConsultaMDF`, `mdfeStatusServicoMDF`, `mdfeConsNaoEnc`, `mdfeDistDFeInteresse`. **Not verified against the WSDL**: the SVRS WSDL answers 403 without a client certificate. The first homologation call is the check.
- **Operation details used:** query by key serves up to 180 days after emission and returns `procEventoMDFe` and `procInfraSA`; status polling needs 3 minutes between calls; distribution serves 6 months, batches of 50, `ultNSU = maxNSU` means wait 1 hour, misuse is `cStat` 678 (the NF-e equivalent is 656); non-closed query is restricted to the issuer's CNPJ/CPF.
- **Fixtures** in `tests/fixtures/mdfe/` are synthetic documents that validate against the XSD (signature values are placeholders); no official sample was available.

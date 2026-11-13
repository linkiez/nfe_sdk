# Research: MDF-e production promotion record (spec 039)

Operations are promoted one at a time (FR-001). Each record needs a current official production route (FR-002, FR-006) and homologation evidence. Consulted on 2026-11-13.

## Production route evidence

Source: SVRS MDF-e portal, "Relação de Serviços Web" <https://dfe-portal.svrs.rs.gov.br/Mdfe/Servicos> (national environment, production table), read on 2026-11-13. Every production URL below matches the route register in `resolve-mdfe-endpoint.ts` (`https://mdfe.svrs.rs.gov.br`) and the homologation host `mdfe-homologacao.svrs.rs.gov.br`.

| Operation | Production route | Version |
|---|---|---|
| `mdfe-status-service` | `/ws/MDFeStatusServico/MDFeStatusServico.asmx` | 3.00 |
| `mdfe-document-situation` | `/ws/MDFeConsulta/MDFeConsulta.asmx` | 3.00 |
| `mdfe-not-closed` | `/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx` | 3.00 |
| `mdfe-distribution` | `/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx` | 1.00 |

The portal was not read again for the route set after this date; refresh it before promoting another operation (FR-006).

## Promotion records

| Operation | Promoted | Basis |
|---|---|---|
| `mdfe-status-service` | Yes | Read-only, no fiscal effect. Scenarios with a stub executor pass in `tests/integration/mdfe-queries.test.ts`; no recorded homologation call against the real SEFAZ. Production route verified above. |
| `mdfe-not-closed` | Yes | Read-only. Homologation answered through the server (`não encerrados`, with the real certificate); production route verified above. |
| `mdfe-distribution` | Yes | Read-only, NSU cursor with the 1-hour window; homologation sync ran end to end; production route verified above. |
| `mdfe-document-situation` | **No** | No homologation run with a real MDF-e access key yet; stays `unsupported` in production. |

## Limits of this record

- The first production calls (status, not-closed, distribution) are the proof of the mutual-TLS contract with the real issuer certificate. A rejection there must be recorded here before widening the scope.
- No issuance, closing or cancelling operation exists in the SDK; MDF-e is consumed only.

# Data Model: NF-e SP Production Authorization

This feature adds no persistence or generated schema. The entities below are request-time operational values and existing public result shapes.

## Authorization Request

| Field             | Source                                  | Rule                                                                                                     |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `environment`     | Existing `NFeAuthorizationRequest`      | Must normalize to `production` for this path; the existing homologation behavior remains unchanged.      |
| `documents`       | Existing single-document or batch input | Each document must identify SP (`cUF` `35`) before any executor call.                                    |
| `signingContext`  | Existing signing facade                 | Required as today; signing material remains private and is never copied into output evidence.            |
| `requestExecutor` | Existing optional request executor      | Required for production and configured by the integrator for TLS 1.2+ mutual certificate authentication. |
| `timeoutMs`       | Existing optional transport setting     | Uses existing positive timeout normalization; no retry or implicit resend follows timeout.               |

## Issuer Identity

| Evidence          | Current location                                       | Validation                                                                                                     |
| ----------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Issuer UF code    | `payload.cUF`                                          | If present, exactly two digits and equal to `35`.                                                              |
| Access-key UF     | First two digits of a 44-digit `documentId` access key | If the identifier is treated as an access key, require 44 numeric digits and UF `35`.                          |
| Combined identity | Both values above                                      | Values must agree; missing or contradictory evidence blocks production before network I/O.                     |
| Batch identity    | All normalized documents                               | Every item must independently resolve to SP; mixed or unknown batches are rejected before executor invocation. |

A separate unverified `issuerUF` hint is not an identity source. The implementation may extract and validate the existing UF resolution used by the contingency boundary, but must not silently choose one source when evidence conflicts.

## Authorizer Route

| Attribute                       | Value for this slice                                                                     |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| Provider/authorizer             | `SP`                                                                                     |
| Normal production authorization | `nfe-authorization` -> `https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx`           |
| Receipt continuation            | `nfe-authorization-batch` -> `https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx`  |
| Homologation                    | Existing catalog and behavior                                                            |
| Contingency                     | Separate explicit SVC boundary; never an automatic fallback from normal SP authorization |

Endpoint selection is keyed by service, environment, and authorizer/provider. Missing or ambiguous production route is a pre-transport failure, not a default to SVC-AN.

## Authorization Outcome

Reuse `NFeAuthorizationOutcome` and `TransportOutcome`:

- Before outcome mapping, require a valid response `tpAmb` equal to production (`1`); a missing or mismatched value is a protocol error and must not be reported as authorized.
- Malformed authorization XML is a protocol error. Status `100`/`104` without `nProt`, or status `103` without `nRec`, is contradictory protocol evidence and must not be classified as authorized or received.
- Terminal authorization/rejection is based on the existing official response mapping.
- `received` exposes the existing `receiptNumber` (`nRec`) and does not imply authorization.
- `timeout`, `unavailable`, and `protocol-error` remain distinct; uncertain transmission is not safe to resubmit automatically.
- Preserve the existing `SoapExchangeEvidence` shape and its non-secret metadata: endpoint, provider, HTTP status and duration when available, plus outcome status/classification and failure reason. Redact credential values and certificate/private-key bytes from request/response envelope evidence before returning it.

## Receipt Reconciliation

Use existing `NFeReceiptReconciliationRequest` and `NFeReceiptReconciliationResult` from spec 021. The caller supplies the known `receiptNumber` and explicit `routingContext` with `authorizer: 'SP'` and `environment: 'production'`. Receipt responses must also identify `tpAmb` `1` before they are classified; malformed XML or terminal authorization without `nProt` is a `protocol-error`. Preserve `pending`, `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive`, `not-found`, `protocol-error`, and `usage-error`; do not add persistence, loops, retries, or authorization resubmission.

## Lifecycle

```text
prepared -> preflight validated -> submitted
                                 -> terminal result
                                 -> received(nRec) -> one-shot reconciliation -> pending or terminal result
                                 -> timeout/unavailable/protocol-error (uncertain; no automatic resend)
```

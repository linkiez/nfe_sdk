# Data Model: NFC-e SP Production Authorization

## NFC-e production authorization request

**Purpose**: Caller input for submitting one signed model 65 document to the normal SP production authorizer.

| Field             | Type                                      |        Required | Validation / behavior                                                                                                                         |
| ----------------- | ----------------------------------------- | --------------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `document`        | Existing `NFCeAuthorizationDocumentInput` |             Yes | Must describe model 65, SP issuer/document identity, and one document only. When both UF and access key are present they must agree.          |
| `environment`     | Existing environment string               |             Yes | Normalized to `production` or `homologation`; production is supported only for SP.                                                            |
| `signingContext`  | Existing SDK `SigningContext`             |             Yes | Used by the existing signing pipeline before SOAP transmission.                                                                               |
| `requestExecutor` | Existing `RequestExecutor`                | Production: yes | Must provide client-certificate TLS for production; do not rely on the default executor for mTLS. Optional on homologation for compatibility. |
| `csc`             | Existing `NFCeCSCInput`                   | Production: yes | Required to compose the QR URL returned with a successful production result. Optional in homologation; never echo the raw token.              |
| `timeoutMs`       | Existing optional number                  |              No | Preserve current transport default and timeout validation.                                                                                    |
| `correlationId`   | Existing optional string                  |              No | Caller-side tracing only; do not treat as an idempotency key.                                                                                 |

## Resolved production route

| Field       | Value                                                    | Invariant                                                                      |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| UF          | `SP` (`cUF` 35)                                          | Production requests for other UFs return `unsupported-state` before transport. |
| Model       | `65`                                                     | Reject a model/operation mismatch before transport.                            |
| Service     | `nfce-authorization-sp`                                  | Reuse the existing service identity; select its production catalog entry.      |
| Provider    | `SP`                                                     | Must not resolve to `SVCAN`, `SVCRS`, or the NF-e model 55 service.            |
| Environment | `production`                                             | Must agree with request and NFC-e XML `tpAmb=1`.                               |
| Endpoint    | `https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx` | Confirmed in official SEFAZ/SP WebServices page consulted 2026-10-12.          |
| Transport   | One synchronous SOAP request                             | No automatic retry, receipt polling, or contingency failover.                  |

## Authorization outcome

Reuse the existing `NFCeAuthorizationOutcome` classifications and fields. Add an optional `qrCodeUrl` to the public result contract. For an authorized result with CSC input, compose that field from the exact authorized 44-digit access key and the same normalized environment using the existing SP QR Code v3 helper. A production success must contain the QR URL; non-authorized outcomes must not claim a successful QR/authorization pairing. Keep the raw CSC token out of the outcome, transport evidence, logs, and URL.

`protocolNumber` remains a string. For SP production it may have 17 digits from 2026-10-05; the schema also accepts 15 digits for existing responses and homologation compatibility.

## Validation failures and states

- **Pre-transport usage/boundary failure**: missing signing context; missing production mTLS executor or CSC; non-SP production; non-model-65 document; malformed or conflicting access key, issuer, key-derived XML identity, UF, or environment; invalid signing or required input. No transport call occurs.
- **Authorized**: SEFAZ reports authorization success and the SDK returns the exact protocol and matching QR URL.
- **Rejected**: SEFAZ returns a fiscal rejection; preserve its application status and do not mark the QR as an authorization result.
- **Pending**: preserve an explicit non-terminal classification and next action when the synchronous response requires operator follow-up. Do not poll or retry automatically.
- **Unavailable / timeout / protocol error**: preserve transport classification, avoid claiming authorization, and leave retry decisions to the caller where outcome uncertainty exists.

## Relationships

- One request targets one NFC-e document and resolves to one SP production service route.
- One authorization outcome may include one QR URL derived from the same document key and environment.
- CSC is caller-owned input; credential provisioning and issuer enrollment are external and are not represented as SDK-managed entities.

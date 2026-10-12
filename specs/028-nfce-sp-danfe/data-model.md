# Data Model: NFC-e SP DANFE Rendering

## Entities

### Signed NFC-e XML

The exact signed model 65 XML embedded in `transportOutcome.evidence.requestEnvelopeXml`. The renderer extracts it from the SOAP request evidence so document details cannot be independently substituted by the caller.

| Field                         | Source                        | Validation/use                                                                                                                     |
| ----------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `infNFe/@Id`                  | XML                           | Must be `NFe` followed by the 44-digit access key.                                                                                 |
| `ide/cUF`                     | XML                           | Must identify SP (`35`).                                                                                                           |
| `ide/mod`                     | XML                           | Must be NFC-e model `65`.                                                                                                          |
| `ide/tpAmb`                   | XML                           | Must match authorization environment (`1` production, `2` homologation).                                                           |
| Issuer identity/name/address  | `emit`                        | Render required CNPJ or CPF, name and full address.                                                                                |
| Issue time, number and series | `ide`                         | Render with locale/time-zone rules from the manual; preserve source precision.                                                     |
| Consumer identity/delivery    | `dest` and delivery address   | Render applicable identification; for delivery, include required name/address.                                                     |
| Items                         | `det/prod`                    | Full-detail output: code, description, quantity, unit, unit value and line total for every item. Never summarize or omit overflow. |
| Totals                        | `total/ICMSTot`               | Render distinct item count, item total, additions/discounts where present, and amount payable as applicable.                       |
| Payments/change               | `pag`                         | Render each payment method and partial amount, and change when present.                                                            |
| Fiscal/contributor messages   | `infAdic`                     | Render `infAdFisco` and `infCpl` when present, as escaped text.                                                                    |
| Reproducibility digest        | Captured `requestEnvelopeXml` | Compute SHA-256 over the exact SOAP request evidence for result metadata.                                                          |

### Authorization Evidence

The `NFCeAuthorizationOutcome` returned by the SDK, not caller-created status text.

| Field                                           | Validation/use                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `classification`                                | Must be `authorized`; all other classifications are rejected.                                                                         |
| `transportOutcome.environment`                  | Must match XML `tpAmb`.                                                                                                               |
| `transportOutcome.evidence.requestEnvelopeXml`  | Required and well-formed; extract the exact signed NFC-e XML submitted by the SDK.                                                    |
| `transportOutcome.evidence.responseEnvelopeXml` | Required and well-formed; correlate response `tpAmb`, authorized `chNFe` and `nProt` with the request XML and outcome.                |
| `protocolNumber`                                | Required; retain as a string with no fixed digit-length assumption.                                                                   |
| `qrCodeUrl`                                     | Required; must use the exact SP environment host/path and encode this document's 44-digit key, QR version 3 and matching environment. |

### Render Request

Proposed additive public input `RenderNFCeSPDANFEInput`:

| Field           | Required | Rule                                                                       |
| --------------- | -------: | -------------------------------------------------------------------------- |
| `authorization` |      Yes | Matching authorized SDK outcome containing the exact request XML evidence. |
| `paperWidthMm`  |       No | Finite width from 56 through 210 mm; default 80 mm. Reject invalid values. |

### Render Result

Proposed `NFCeSPDanfeResult`:

| Field                   | Rule                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `html`                  | Complete self-contained HTML with semantic text, inline SVG QR and print CSS; no remote assets. |
| `mediaType`             | Literal `text/html`.                                                                            |
| `accessKey`             | The exact validated 44-digit XML key.                                                           |
| `environment`           | `production` or `homologation`, correlated across all inputs.                                   |
| `protocolNumber`        | Exact authorization protocol string, including 17-digit SP protocols.                           |
| `requestEnvelopeSha256` | SHA-256 digest of the exact captured SOAP request envelope.                                     |

## Relationships and State

- One render request references exactly one signed XML and one authorization outcome.
- The access key and environment are derived from XML and must match the authorization response and QR URL; callers cannot override them independently.
- Only `authorized` evidence can transition to a DANFE result. Invalid, incomplete, mismatched, received, rejected, or transport-failure inputs produce an explicit error and no authorized-looking HTML.
- A homologation result includes the required centered uppercase sem-valor-fiscal notice. Production does not include that notice.
- QR output is generated from the already-correlated official QR URL; generation does not make a consumer consultation request.

## Out of Scope

Contingency documents, ECF, summary DANFE, non-SP layouts, consumer consultation, durable storage, source XML signing, PDF/PNG export, and guarantee of a particular printer's six-month legibility.

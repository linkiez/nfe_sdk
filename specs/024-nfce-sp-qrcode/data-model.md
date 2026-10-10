# Data Model: NFC-e SP QR Code

## 1. SP NFC-e QR Code Request

Represents the explicit local input accepted by the helper.

| Field         | Type                             | Required | Notes                                                                                                   |
| ------------- | -------------------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `uf`          | `'SP'`                           | yes      | The helper is intentionally paulista-only in this slice. Any other UF is rejected before composition.   |
| `environment` | `'homologation' \| 'production'` | yes      | Must remain explicit and must drive environment-specific URL composition.                               |
| `accessKey`   | `string`                         | yes      | Full 44-digit `NFC-e` access key already derived by the caller or by `prepareNFCeSigningPrerequisites`. |
| `csc`         | `NFCeCSCInput`                   | yes      | Reuses the existing handwritten `CSC` contract. The token is validated but never returned.              |

### Validation rules

- `uf` must be exactly `SP`.
- `environment` must normalize to `homologation` or `production`.
- `accessKey` must be present and structurally valid for model `65`.
- `csc.cscId` and `csc.cscToken` must both be non-empty after trim.

## 2. SP NFC-e QR Code Result

Represents the successful helper output published by the slice.

| Field         | Type                             | Required | Notes                                                          |
| ------------- | -------------------------------- | -------- | -------------------------------------------------------------- |
| `qrCodeUrl`   | `string`                         | yes      | Final URL ready for consumer use.                              |
| `environment` | `'homologation' \| 'production'` | yes      | Echoes the environment actually used in composition.           |
| `baseUrl`     | `string`                         | yes      | Environment-specific paulista base URL chosen by the helper.   |
| `accessKey`   | `string`                         | yes      | Echoes the document identity used in the URL.                  |
| `cscId`       | `string`                         | yes      | Auditable identifier for the `CSC` without exposing the token. |
| `uf`          | `'SP'`                           | yes      | Reinforces the state boundary in the result shape.             |

### Result invariants

- The result never contains the raw `CSC` token.
- The result URL follows the online QR Code version `3` shape `.../ConsultaQRCode.aspx?p=<accessKey>|3|<tpAmb>`.
- The result must differ between `homologation` and `production` at least in its environment metadata and selected base URL.
- The result remains local-only and does not imply remote authorization success.

## 3. QR Code Coverage Boundary

Represents the explicit boundary for state or scope outside this slice.

| Field            | Type                                   | Notes                                                                                    |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| `classification` | `'unsupported-state' \| 'usage-error'` | `unsupported-state` covers non-`SP` requests; `usage-error` covers invalid local inputs. |
| `code`           | `string`                               | Stable code for tests and docs.                                                          |
| `message`        | `string`                               | Human-readable explanation.                                                              |
| `retryable`      | `boolean`                              | `false` for current known boundaries in this slice.                                      |
| `uf`             | `string \| undefined`                  | Echoed when rejection is state-driven.                                                   |

## 4. Relationship to Existing Models

- `NFCeCSCInput` is reused directly from the current handwritten NFC-e contracts.
- `prepareNFCeSigningPrerequisites` remains the recommended upstream source for `accessKey`-ready identity material.
- `authorizeNFCe` remains a separate runtime operation; no successful `QR Code` result implies a successful transport authorization.

## 5. State Transitions

```text
request-received
  -> qr-code-generated      (valid SP request, local composition succeeds)
  -> unsupported-state      (UF is not SP)
  -> usage-error            (missing/invalid environment, access key, or CSC input)
```

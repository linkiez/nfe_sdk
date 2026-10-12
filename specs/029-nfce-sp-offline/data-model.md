# Data Model: NFC-e SP Offline Contingency

This is a proposed in-memory SDK contract. Persistence belongs to the integrator. The model does not imply fiscal authorization.

## Offline NFC-e Record

Represents one locally signed SP model 65 document awaiting submission or resolution.

| Field                      | Type                         | Rule                                                                                                                        |
| -------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `accessKey`                | string                       | 44-digit SP model 65 access key; must match the signed XML identity and check digit.                                        |
| `environment`              | `production \| homologation` | Must match the XML `tpAmb`; production is the initial SP runtime cohort.                                                    |
| `signedXml`                | string                       | Exact signed XML to retain and submit later; immutable for the lifetime of this record.                                     |
| `signedXmlSha256`          | string                       | Digest of the exact signed XML, used to detect record/payload mismatch and identify replays.                                |
| `issuedAt`                 | ISO date-time string         | Must match the document's fiscal issuance timestamp within confirmed schema rules.                                          |
| `businessCalendarEvidence` | calendar evidence            | Caller-supplied calendar ID, IANA time zone, and consecutive evaluated dates through the first following business day.      |
| `submissionDeadline`       | ISO date-time string         | Must be 23:59:59 on the first following business day in the evidence time zone.                                             |
| `qrCodeUrl`                | string                       | Official SP offline QR Code v2 URL derived from the signed XML and CSC; contains no raw CSC token.                          |
| `contingencyReason`        | string                       | Must match the XML contingency reason after exact length/content requirements are confirmed from the current manual/schema. |
| `status`                   | Offline record status        | Initially `pending-reconciliation`; never `authorized` during preparation.                                                  |
| `lastAttempt`              | optional attempt evidence    | Caller-persistable result from the most recent explicit reconciliation request.                                             |

### Planned Validation

- UF code/SP access key, model 65, check digit, environment, issuer identity, and XML identity agree.
- XML identifies offline emission (`tpEmis=9`) and includes all required contingency data per the current official schema/manual.
- Signing and local XML parsing succeed before a pending record is returned.
- Evidence must identify a non-empty calendar source and valid IANA time zone, contain consecutive dates after issuance through the first date marked as a business day, and stop at that date.
- The deadline must be 23:59:59 on the first following business day in the evidence time zone and later than issuance. The SDK validates evidence shape and consistency but cannot authenticate the caller's calendar source.
- No XML field is rewritten to make an invalid source document appear eligible.

## Reconciliation Classification

- The record itself has only `pending-reconciliation` status during preparation.
- Results use `authorized`, `deadline-expired`, `duplicate`, `inconclusive`, `received`, `rejected`, `timeout`, or `unavailable`.
- `operatorActionRequired` is a boolean on the result, not a classification. It is true for every result except `authorized` and `received`.
- `received` carries a receipt and is not authorization. `duplicate` and `timeout` remain individually identifiable.

## Reconciliation Attempt

Captures one explicit caller-triggered request and its result.

| Field                    | Type                          | Rule                                                                                          |
| ------------------------ | ----------------------------- | --------------------------------------------------------------------------------------------- |
| `accessKey`              | string                        | Must match the offline record.                                                                |
| `signedXmlSha256`        | string                        | Must match the retained record payload.                                                       |
| `attemptedAt`            | ISO date-time string          | Set by the caller or SDK clock; test with injected time where deadline behavior is evaluated. |
| `classification`         | Reconciliation classification | One of the result classifications above; never inferred from HTTP success alone.              |
| `operatorActionRequired` | boolean                       | Whether caller/operator action is needed; separate from the classification.                   |
| `officialStatusCode`     | optional string               | Preserve the correlated official application status when present.                             |
| `protocolNumber`         | optional string               | Present only for correlated authorization evidence.                                           |
| `receiptNumber`          | optional string               | Present for a confirmed intermediate receipt.                                                 |
| `responseEvidence`       | optional transport evidence   | Preserve exact response classification and correlation evidence needed by the caller.         |
| `operatorAction`         | optional string               | Stable action code/message for late, duplicate, rejected, or inconclusive cases.              |

## State Transitions

```text
pending-reconciliation -> received -> authorized
pending-reconciliation -> authorized
pending-reconciliation -> rejected (operatorActionRequired: true)
pending-reconciliation -> duplicate (operatorActionRequired: true)
pending-reconciliation -> timeout (operatorActionRequired: true)
pending-reconciliation -> unavailable (operatorActionRequired: true)
pending-reconciliation -> inconclusive (operatorActionRequired: true)
pending-reconciliation -> deadline-expired (operatorActionRequired: true)
```

The SDK must not silently convert `received`, `unavailable`, `timeout`, `inconclusive`, or duplicate responses into `authorized`. Every attempt is explicit and uses the same immutable signed XML; callers persist attempt state and prevent concurrent or accidental replays. The stateless SDK does not guarantee replay prevention across calls or processes.

## DANFE Dependency

Feature 028 owns rendering. It consumes this signed record and emits a pending, non-authorized DANFE with the record's offline QR Code URL; it requires no authorization response evidence and prints no protocol.

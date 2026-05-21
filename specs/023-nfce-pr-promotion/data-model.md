# Data Model: NFC-e PR Promotion

## Overview

This slice does not introduce persistent storage or new generated schema families. It refines the handwritten operational model that governs which UFs participate in the promoted NFC-e authorization cohort and how out-of-cohort or deferred-capability requests are classified.

## Entities

### Promoted NFC-e UF Cohort

- Purpose: Publicly defines which federation units are currently supported by the promoted runtime slice.
- Shape:
  - `ufs`: ordered list of promoted UF codes
  - `classificationForExcludedUf`: stable public classification for UFs outside the cohort
  - `supportedEnvironment`: `homologation`
- Invariants:
  - Must remain limited to `SP` and `PR` for this slice.
  - Must preserve `unsupported-state` as the classification for excluded UFs.
  - Must not imply support for auxiliary capabilities outside the current runtime contract.

### NFC-e Authorization Request

- Purpose: Existing root request contract consumed by `authorizeNFCe`.
- Relevant fields for this slice:
  - `document.documentId`
  - `document.environment`
  - `environment`
  - `signingContext`
  - `requestedCapabilities`
  - `requestExecutor`
  - `timeoutMs`
- Invariants:
  - `documentId` must remain a 44-digit access-key-like value so the runtime can infer the UF.
  - The request must stay in `homologation` for this slice.
  - Deferred capabilities continue to bypass transport with `unsupported-scope`.

### NFC-e Authorization Outcome

- Purpose: Existing structured outcome returned by `authorizeNFCe`.
- Relevant fields for this slice:
  - `acceptedForTransport`
  - `classification`
  - `coverageBoundary`
  - `protocolNumber`
  - `receiptNumber`
  - `transportOutcome`
  - `validationFailures`
- Invariants:
  - `PR` requests within the promoted cohort can proceed to transport and use the same observable outcome contract as the existing SP baseline.
  - Any UF outside `SP + PR` continues to return `acceptedForTransport: false` and `classification: unsupported-state`.
  - Deferred capability requests continue to return `classification: unsupported-scope`.

### NFC-e Coverage Boundary

- Purpose: Structured explanation for blocked NFC-e requests.
- Relevant fields:
  - `classification`
  - `code`
  - `message`
  - `retryable`
  - `uf`
- Invariants:
  - For excluded UFs, `classification` stays `unsupported-state` and the message must describe the promoted `SP and PR` cohort.
  - For deferred capabilities, `classification` stays `unsupported-scope` and must not be conflated with cohort selection.

### UF Promotion Rationale

- Purpose: Documentation-facing entity that explains why `PR` is included and why nearby UFs remain excluded.
- Shape:
  - `includedUf`: `PR`
  - `baselineUf`: `SP`
  - `excludedNearbyUfs`: `PB`, `GO`, `SC`, `CE`, `MS`
  - `reasonByUf`: dominant exclusion rationale
  - `sourceSet`: roadmap annexes and baseline specs
- Invariants:
  - The rationale remains documentation and contract metadata, not a new runtime payload.
  - Exclusions must be framed as explicit boundaries, not as implied future guarantees.

## Relationships

- The Promoted NFC-e UF Cohort constrains the NFC-e Authorization Request by deciding whether the request is allowed to continue to transport.
- The NFC-e Authorization Request yields an NFC-e Authorization Outcome.
- The NFC-e Coverage Boundary is embedded in the outcome when the request is blocked by either excluded UF or deferred capability.
- The UF Promotion Rationale documents the reasons behind the cohort membership used by the runtime and public contract.

## State Transitions

### Authorized PR/SP Flow

1. Request enters `authorizeNFCe` with a valid `documentId` and `homologation` environment.
2. UF is resolved from the access-key prefix.
3. If the UF is `SP` or `PR`, the request proceeds to the existing authorization flow.
4. Outcome is mapped to the existing structured NFC-e authorization result.

### Excluded UF Flow

1. Request enters `authorizeNFCe` with a valid `documentId` and `homologation` environment.
2. UF is resolved from the access-key prefix.
3. If the UF is outside `SP + PR`, the request stops before transport.
4. Outcome returns `unsupported-state` with an explicit cohort message.

### Deferred Capability Flow

1. Request enters `authorizeNFCe` with one or more deferred capabilities.
2. Runtime identifies the capability before transport.
3. Outcome returns `unsupported-scope` and leaves the cohort logic untouched.

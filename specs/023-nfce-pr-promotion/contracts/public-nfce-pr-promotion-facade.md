# Contract: Public NFC-e PR Promotion Facade

## Purpose

Define the additive runtime contract for promoting homologated `NFC-e` authorization in `PR` while preserving the existing `authorizeNFCe` root facade, the published `unsupported-state` boundary for UFs outside the promoted cohort, and the deferred boundaries for auxiliary NFC-e capabilities.

## Normative Contract Source

- `package.json#exports["."]` remains the normative published entrypoint.
- The stable runtime import remains the root package import.
- This slice extends the behavior of `authorizeNFCe`; it does not introduce a new runtime entrypoint.

## Required Public Surface

```ts
import { authorizeNFCe } from 'nfe-sdk';
```

- `authorizeNFCe` remains the single public runtime facade for this slice.
- The promoted operational cohort for this slice is exactly `SP + PR`.
- The root contract remains additive; no new import path or dedicated PR facade is introduced.

## Required Runtime Behavior

### 1. Supported cohort behavior

- A valid homologation request whose inferred UF is `SP` or `PR` may continue into the existing NFC-e authorization flow.
- `PR` must produce the same observable result shape already published for the `SP` baseline.
- The slice must preserve the existing structured outcome contract for accepted transport flows.

### 2. Excluded UF behavior

- Any UF outside `SP + PR` must stop before transport.
- The public classification for excluded UFs must remain `unsupported-state`.
- The coverage boundary message must continue to describe the promoted `SP and PR` cohort explicitly.

### 3. Deferred capability behavior

The following capabilities remain outside this runtime slice and must continue to surface as explicit deferred scope rather than implied support:

- `CSC`
- `QR Code`
- `DANFE NFC-e`
- consumer consultation
- offline contingency
- `EPEC NFC-e`
- automatic credentialing and broader onboarding automation

Requests that explicitly depend on deferred capabilities continue to use the published `unsupported-scope` boundary.

## Required Documentation Behavior

- Public-facing documentation must explain that `PR` is the first additive UF beyond the current `SP` baseline.
- Public-facing documentation must also explain why nearby UFs such as `PB`, `GO`, `SC`, `CE`, and `MS` remain outside this slice.
- The contract must not imply broader multi-UF support than `SP + PR`.

## Traceability and Exclusion Rationale

- This slice remains explicitly traceable to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012` through the published `SP + PR` cohort and the preserved root facade.
- `PB` remains outside this slice because `CSC` issuance and consumer-facing consultation still dominate its observable NFC-e delta.
- `GO` remains outside this slice because the strongest current signal is the state-specific `QR Code` delta, without a closed homologation runtime read.
- `SC` remains outside this slice because restrictive access and download policy still dominate the state-level variance.
- `CE` remains outside this slice because production-facing NFC-e evidence is visible, but the repository capture is still noisy and not closed enough for runtime promotion.
- `MS` remains outside this slice because the repository has stronger NF-e environment evidence than a closed NFC-e operational cohort read.
- Official roadmap artifacts remain normative; state-level evidence stays secondary and cannot override the published cohort boundary on its own.

## Compatibility Notes

- This slice is additive over the current root contract.
- No generated schema artifacts, emitted identifier layout, or subpath exports change in this slice.
- Preserving `unsupported-state` for excluded UFs is part of the compatibility contract.

## Validation Expectations

- Focused integration tests must cover `PR` authorization, `SP` regression, and excluded-UF `unsupported-state` behavior.
- Unit tests must confirm that deferred capabilities still map to `unsupported-scope` and excluded UFs still map to `unsupported-state`.
- Root contract checks must confirm that the public package surface remains stable while the documented NFC-e cohort is updated consistently.

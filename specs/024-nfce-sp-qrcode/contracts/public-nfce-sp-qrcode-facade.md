# Contract: Public NFC-e SP QR Code Facade

## Purpose

Define the additive public contract for generating the paulista `NFC-e` `QR Code` result with explicit `CSC` and environment inputs while preserving the current authorization runtime boundary and the documented backlog around renderer, consumer consultation, `CSC` administration, and broader multi-`UF` support.

## Normative Contract Source

- `package.json#exports["."]` remains the normative published entrypoint.
- The stable runtime import remains the root package import.
- This slice introduces one new additive helper; it does not introduce a new subpath export or a dedicated paulista package entrypoint.

## Required Public Surface

```ts
import { generateNFCeSPQRCode } from 'nfe-sdk';
```

- `generateNFCeSPQRCode` is the dedicated public helper introduced by this slice.
- The helper is restricted to `SP` in this phase.
- The root contract remains additive; no existing symbol is removed or renamed.

## Required Runtime Behavior

### 1. Supported paulista behavior

- A valid request for `SP` in `homologacao` must produce a structured result containing the final `QR Code` URL and minimal auditable metadata.
- A valid request for `SP` in `producao` must also produce a structured result, with explicit environment-specific semantics rather than silently reusing homologation metadata.
- The published online URL format follows QR Code version `3`, yielding `.../ConsultaQRCode.aspx?p=<accessKey>|3|<tpAmb>` for the paulista base URL selected by environment.
- The result must never include the raw `CSC` token.
- The helper requires explicit `CSC` input as a validated SDK-local prerequisite owned by the integrator. This is not a normative QR Code v3 requirement: `SRC-RH-003`, _Manual de Especificações Técnicas do DANFE NFC-e e QR Code_ (published `2025-03-24`, consulted `2026-05-19`), section `4.4`, says CSC is not required for version `3`; section `4.4.1` defines the online URL parameters as access key, version `3`, and `tpAmb`.
- The SDK validates the supplied token but neither embeds it in the URL nor returns it; only the CSC identifier is returned for local auditability.

### 2. Excluded UF behavior

- Any request for `PR` or another UF outside `SP` must stop before successful helper generation.
- The public boundary must stay explicit rather than implying that `QR Code` support follows the current authorization cohort automatically.
- The helper must remain narrower than the existing `SP + PR` authorization cohort.

### 3. Deferred adjacent capability behavior

The following capabilities remain outside this slice and must continue to appear as explicit backlog or boundary rather than implied support:

- `DANFE NFC-e` visual rendering
- consumer consultation
- `CSC` administration and credential lifecycle
- automatic credentialing and onboarding automation
- `offline` contingency
- multi-`UF` `QR Code` rollout beyond `SP`
- full production authorization closure for `NFC-e`

## Required Documentation Behavior

- Public-facing documentation must explain that this helper closes a smaller paulista step under `RFL-006` rather than the full `SP` runtime closure.
- Public-facing documentation must explain that `PR` remains outside this helper even though it is already inside the homologation authorization cohort.
- Public-facing documentation must keep renderer, consumer consultation, onboarding, and `offline` concerns outside the helper contract.

## Traceability and Boundary Rationale

- This slice remains explicitly traceable to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`.
- `SP` is the only supported UF because the roadmap requires paulista closure before auxiliary multi-`UF` rollout.
- `PR` remains outside this helper because the current promotion for `PR` covers authorization cohorting, not the auxiliary `QR Code` helper.
- `PB`, `GO`, `SC`, `CE`, `MS`, and other UFs remain outside because state-level `CSC`, `QR Code`, access, or environment deltas still dominate their backlog.

## Compatibility Notes

- This slice is additive over the current root contract.
- No generated schema artifacts, emitted identifier layout, or subpath exports change in this slice.
- Preserving the narrower `SP` boundary for this helper is part of the compatibility contract.

## Validation Expectations

- Focused contract tests must confirm the new root helper export and its documented boundaries.
- Focused unit and integration tests must confirm environment-aware `SP` generation for `homologacao` and `producao`.
- Package contract documentation checks must confirm that the root contract and README stay aligned with the new additive helper and preserved exclusions.

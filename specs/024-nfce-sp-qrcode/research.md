# Research: NFC-e SP QR Code

## Decision 1: Publish a dedicated root helper for the paulista `QR Code`

- **Decision**: Introduce a new additive root facade dedicated to generating the `SP` `NFC-e` `QR Code`, instead of overloading `authorizeNFCe` or treating `QR Code` as an option inside an existing authorization request.
- **Rationale**: The spec explicitly separates `QR Code` generation from authorization semantics and requires the package to avoid implying full production authorization just because the helper supports both `homologacao` and `producao`. A dedicated helper preserves the current `authorizeNFCe` contract and makes the additive package impact clear.
- **Alternatives considered**:
  - Extend `authorizeNFCe` with `requestedCapabilities: ['qr-code']`: rejected because the current contract publishes `qr-code` as deferred `unsupported-scope`, and changing that meaning would blur an existing boundary.
  - Extend `prepareNFCeSigningPrerequisites` to also emit the final `QR Code`: rejected because that helper is intentionally preparatory and still documents `qr-code` as a deferred downstream dependency.

## Decision 2: Reuse signing-prerequisite and shared environment primitives instead of parsing full XML

- **Decision**: Model the helper around explicit local inputs already aligned with the handwritten NFC-e runtime: canonical environment, `SP` identity, `CSC` credentials, and the access-key-oriented data already produced by `prepareNFCeSigningPrerequisites`.
- **Rationale**: The repository already has stable primitives for access-key derivation, `CSC` validation, and environment normalization. Reusing those surfaces keeps the slice local, deterministic, and testable without coupling it to XML parsing or remote transport.
- **Alternatives considered**:
  - Accept raw signed XML as the helper input: rejected because the helper only needs local identifier material and explicit `CSC` input, not a new XML parsing surface.
  - Derive all fields from authorization responses: rejected because the spec requires the helper to remain distinct from transport authorization and usable before a full production authorization runtime exists.

## Decision 3: Keep production support local to the helper and keep authorization boundaries unchanged

- **Decision**: Support `homologacao` and `producao` only within the new `SP` `QR Code` helper, while leaving `authorizeNFCe` on its current homologation-only transport/runtime boundary for this slice.
- **Rationale**: The roadmap prioritizes closing `SP` until `producao`, but this slice is intentionally smaller than full production authorization. Local `QR Code` composition can encode environment-specific semantics without widening transport support prematurely.
- **Alternatives considered**:
  - Expand `authorizeNFCe` to production in the same slice: rejected because it would reopen transport, endpoint, and operational-baseline work that belongs to a larger `SP` production closure slice.
  - Keep the helper homologation-only: rejected because the spec explicitly requires distinct `SP` results for both `homologacao` and `producao`.

## Decision 4: Restrict `QR Code` runtime support to `SP` and preserve explicit boundaries for all adjacent concerns

- **Decision**: Enforce `SP` as the only supported UF for the helper, return an explicit pre-transport boundary for `PR` and every other UF, and keep renderer visual, consumer consultation, `CSC` administration, onboarding, `offline`, and multi-`UF` rollout outside the slice.
- **Rationale**: The roadmap and the feature spec both require `SP` to close first. Even though `PR` is already inside the homologation authorization cohort, the helper must not imply that `QR Code` support expands automatically with that cohort.
- **Alternatives considered**:
  - Support the full `SP + PR` cohort immediately: rejected because it would contradict the spec's `SP`-only runtime boundary for this helper.
  - Treat non-`SP` requests as generic `unsupported-scope`: rejected because the spec wants state-specific exclusion rather than a generic deferred-capability message.

## Decision 5: Return the final URL with minimal auditable composition metadata and never echo the raw `CSC` token

- **Decision**: The public result returns the final `QR Code` URL together with a minimal auditable subset of composition metadata, such as environment, selected base URL, access key, and `CSC` identifier, while never returning the raw `CSC` token. The online URL follows version `3`, in the shape `.../ConsultaQRCode.aspx?p=<accessKey>|3|<tpAmb>`.
- **Normative source**: `SRC-RH-003`, _Manual de Especificações Técnicas do DANFE NFC-e e QR Code_ (published `2025-03-24`, consulted `2026-05-19`), section `4.4.1`, defines the online version 3 parameters as access key, version `3`, and `tpAmb` (`1` production, `2` homologation). Section `4.4` states that this version does not require CSC.
- **Implementation interpretation**: This SDK contract nevertheless requires explicit `CSC` input as a local prerequisite and returns only its identifier for auditability. That is a package-level validation choice, not a normative QR Code v3 requirement; the token is neither embedded in the URL nor returned.
- **Rationale**: The final URL gives the integrator a usable artifact immediately, while this distinction preserves source fidelity and auditability without drifting into renderer or secret-management behavior.
- **Alternatives considered**:
  - Return only intermediate fields: rejected because it would force manual URL assembly outside the SDK.
  - Return visual or rendering artifacts: rejected because the spec and roadmap keep `DANFE NFC-e` visual concerns outside this slice.

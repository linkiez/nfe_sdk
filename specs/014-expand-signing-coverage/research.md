# Research: Expand Signing Coverage

## Decision 1: Extend the existing signing context instead of creating a new credential abstraction

- **Decision**: Reuse the public signing context already introduced by spec `005` as the only reusable signing capability for the next slice.
- **Rationale**: The repository already exposes a stable additive signing context through the root package surface. Reusing it keeps the package contract small and avoids splitting cryptographic state across competing public abstractions.
- **Alternatives considered**:
  - Introduce a dedicated event-signing context: rejected because it would fragment the public model without adding user value.
  - Hide event signing behind transport APIs: rejected because event signing is a local pre-transport concern and needs its own focused boundary.

## Decision 2: Treat event XML as the first formal signing extension beyond `NFe`

- **Decision**: Make supported `evento` XML the P1 expansion target for this feature.
- **Rationale**: The open backlog from spec `005` and the roadmap recorte `RFL-004` both identify event signing as the most direct continuation of `RTM-003`. It closes the main formal gap in signing coverage without forcing a broader operational rollout.
- **Alternatives considered**:
  - Expand first to `NFC-e` document signing: rejected because it would couple this slice too early to `QR Code`, `CSC`, `DANFE NFC-e`, and `UF` rollout concerns.
  - Expand to all event families at once: rejected because the first continuation slice needs a tighter supported-boundary and clearer fixture evidence.

### Implemented boundary

- The implemented root-facing operation is `signEventXml`.
- The first regression-backed supported fixture is a `Carta de Correcao` event.
- The runtime fails before returning ambiguous output when `infEvento` or its `Id` are absent.

## Decision 3: Model `NFC-e` work in this slice as prerequisite preparation, not authorization

- **Decision**: Limit the `NFC-e` portion of this feature to a structured prerequisite-preparation capability covering access-key derivation, `cDV`, and `hashCSRT` coherence.
- **Rationale**: This keeps the slice additive and useful while preserving the published roadmap boundary that full `NFC-e` operation belongs to later phases. It also reuses already-published helper capabilities rather than inventing a second path to the same calculations.
- **Alternatives considered**:
  - Expose full `NFC-e` authorization here: rejected because it would overlap with `RTM-011`/`RTM-012` and over-promise phase scope.
  - Defer all `NFC-e` work entirely: rejected because the roadmap explicitly calls for closing the bridge between signing and mandatory identifiers.

### Implemented boundary

- The implemented root-facing operation is `prepareNFCeSigningPrerequisites`.
- The returned bundle includes `accessKey`, `checkDigit`, `hashCsrt`, echoed input metadata, and deferred dependencies.
- Empty `CSC` or `CSRT` inputs fail explicitly before any partial prerequisite bundle is returned.

## Decision 4: Keep generated schema artifacts untouched in this slice

- **Decision**: Restrict implementation to handwritten modules, fixtures, and docs.
- **Rationale**: The feature goal is to extend signing behavior and boundary clarity, not to change schema-derived inventory. Avoiding generated output keeps compatibility analysis simpler and aligns with the constitution's source-boundary requirements.
- **Alternatives considered**:
  - Add generated abstractions for every signable event family: rejected because it increases generator coupling without first proving the runtime boundary.
  - Normalize additional identifiers through generation changes: rejected because no emitted contract drift is needed to deliver this slice.

## Decision 5: Keep trust chain automation, `A3`, `QR Code`, and `DANFE NFC-e` explicitly deferred

- **Decision**: Record these items as explicit out-of-scope boundaries for this feature.
- **Rationale**: The roadmap already separates signing expansion from trust chain automation, transport, and visual or operational artifacts. Preserving those boundaries prevents accidental scope bleed and keeps this feature testable as a local runtime slice.
- **Alternatives considered**:
  - Bundle trust chain automation into the same feature: rejected because it belongs to a tooling-heavy slice with different validation needs.
  - Fold `QR Code` output into prerequisite preparation: rejected because that would blur the line between identifier preparation and consumer-facing `NFC-e` operation.
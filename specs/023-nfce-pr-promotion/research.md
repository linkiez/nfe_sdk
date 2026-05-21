# Research: NFC-e PR Promotion

## Decision 1: Keep `authorizeNFCe` as the only public runtime entrypoint

- Decision: Implement the slice as an additive promotion inside the existing `authorizeNFCe` root facade rather than introducing a PR-specific entrypoint.
- Rationale: The current root contract already publishes `authorizeNFCe` as the operational surface for homologation-only NFC-e authorization, and the constitution requires additive ESM package changes with explicit compatibility analysis. The runtime code already centralizes UF resolution, cohort selection, and boundary classification in handwritten NFC-e modules.
- Alternatives considered:
  - Create a new PR-specific facade: rejected because it would expand the root API without adding a new user-visible capability beyond cohort selection.
  - Add a separate subpath export: rejected because the package contract explicitly stabilizes only the root import in this phase.

## Decision 2: Preserve `unsupported-state` for UFs outside the promoted cohort

- Decision: Continue returning `unsupported-state` for any `UF` outside the promoted `SP + PR` cohort.
- Rationale: The current public NFC-e contract, integration tests, and boundary helpers already use `unsupported-state` as the published classification for non-promoted UFs. Reusing that classification avoids breaking public expectations while still making the cohort boundary explicit.
- Alternatives considered:
  - Introduce `unsupported-uf-cohort`: rejected because it would add a new public classification for a behavior already covered by the current contract.
  - Reuse `unsupported-scope`: rejected because deferred capability boundaries (`CSC`, `QR Code`, `offline`) already use `unsupported-scope`, and mixing UF selection with capability deferral would blur the published contract.

## Decision 3: Treat this feature as a smaller runtime slice derived from spec `015`

- Decision: Plan `023-nfce-pr-promotion` as a narrower implementation slice under `RFL-006`, focused on making the `PR` promotion explicit and validated without reopening the entire broader spec `015` scope.
- Rationale: The roadmap and open-spec summary show that the remaining runtime work is concentrated in the larger `015` and `016` tracks. A smaller slice reduces execution risk while still delivering a concrete, testable runtime increment aligned to the roadmap.
- Alternatives considered:
  - Implement all of `015` in one step: rejected because it bundles cohort promotion, deferred boundaries, and broader documentation obligations into a wider change set than needed for the immediate runtime milestone.
  - Skip directly to another UF or to auxiliary capabilities: rejected because the roadmap marks `PR` as the first conservative expansion beyond `SP`.

## Decision 4: Keep `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency outside this slice

- Decision: Explicitly preserve those capabilities as deferred boundaries, even for `PR`.
- Rationale: The roadmap annexes classify them as either backlog runtime, tooling, or example/documentation concerns, and the current NFC-e operational boundary code already represents capability deferral through `unsupported-scope`. Promoting `PR` should not silently expand that scope.
- Alternatives considered:
  - Pull `CSC` and `QR Code` into the same slice: rejected because state-level deltas remain dominant and would enlarge the runtime contract materially.
  - Treat `offline` contingency as part of PR readiness: rejected because offline operation remains a separate boundary-heavy track tied to broader contingency planning.

## Decision 5: Limit implementation to handwritten NFC-e runtime, tests, and public contract docs

- Decision: Restrict the feature to `src/canonical/nfce/*`, `src/public-contract.ts`, root-facing documentation, and focused Jest tests/fixtures.
- Rationale: The cohort and unsupported-state behavior are already concentrated in handwritten modules such as `authorize-nfce.ts`, `contracts.ts`, and `coverage-boundary.ts`. No generated schema families or XSD-derived artifacts need to change for this slice.
- Alternatives considered:
  - Regenerate schema-derived files: rejected because there is no schema-family change associated with this feature.
  - Expand into transport or signing internals: rejected because the existing runtime already routes PR using the same operational flow once the cohort is accepted.

## Decision 6: Use focused NFC-e validation before package-wide gates

- Decision: Validate first with targeted Jest coverage for PR, SP regression, and out-of-cohort unsupported-state behavior, then run the standard package gates.
- Rationale: The affected behavior is narrow and already exercised through NFC-e-specific integration and unit tests. Focused validation provides the fastest falsifiable check before the broader repository gates.
- Alternatives considered:
  - Run only full-package validation: rejected because it is slower and less discriminating for the initial implementation feedback loop.
  - Validate only by typecheck/build: rejected because this slice changes observable runtime contract behavior.

## Provenance Notes

- The roadmap justification for `PR` is now restated in the public contract and planning artifacts, and the exclusion rationale for `PB`, `GO`, `SC`, `CE`, and `MS` remains explicit as boundary rationale rather than implied runtime support.
- State-level evidence remains secondary to the canonical roadmap documents; planning, contract, and package-facing docs now keep that separation explicit while tracing the slice through `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`.

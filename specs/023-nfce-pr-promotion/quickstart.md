# Quickstart: NFC-e PR Promotion

## Objective

Validate the smaller runtime slice that keeps `authorizeNFCe` as the only public facade, promotes `PR` into the supported homologation cohort alongside `SP`, and preserves explicit boundaries for excluded UFs and deferred NFC-e capabilities.

## Prerequisites

- Node.js `>=18.18`
- Dependencies installed with `npm install`
- Test A1 certificate fixture available in the repository test harness
- Existing NFC-e integration fixtures for `SP`, `PR`, and a non-promoted UF

## Step 1: Run focused NFC-e tests first

```bash
npm test -- tests/integration/nfce/authorize-nfce-pr-pilot-profile.test.ts tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts tests/integration/nfce/authorize-nfce-unsupported-state.test.ts tests/unit/nfce/authorize-nfce-boundaries.test.ts
```

Expected outcome:

- `PR` authorizes through the promoted profile.
- `SP` remains green as the baseline cohort member.
- A non-promoted UF still returns `unsupported-state` before transport.
- Deferred NFC-e capabilities still return `unsupported-scope`.

## Step 2: Run contract checks for the published package surface

```bash
npm test -- tests/contract/root-entrypoint.test.ts tests/contract/root-contract-boundary.test.ts tests/contract/package-contract-docs.test.ts
```

Expected outcome:

- The root package surface stays unchanged.
- Public contract text continues to describe `authorizeNFCe` as homologation-only and limited to the `SP + PR` cohort.
- Deferred capabilities remain documented outside the immediate runtime slice.

## Step 3: Run package-quality gates

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run validate:tarball
```

Expected outcome:

- Handwritten TypeScript changes remain type-safe.
- Formatting and lint rules remain satisfied.
- The package builds and the packed root entrypoint remains consumable.

## Step 4: Review the promoted cohort and deferred boundaries

Confirm that:

- `authorizeNFCe` is still the only public runtime facade for this flow.
- The promoted cohort remains exactly `SP + PR`.
- UFs outside that cohort still map to `unsupported-state`.
- `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency remain outside this runtime slice.

Complete the directed review below in under 10 minutes:

- Confirm the documentation still names `PB`, `GO`, `SC`, `CE`, and `MS` as excluded UFs with explicit boundary rationale.
- Confirm the promotion notes still reference `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012` as the tracked roadmap lineage for this slice.
- Confirm the official-source boundary remains separated from any secondary operational evidence.

## Completion Criteria

The slice is ready for task breakdown when:

- Focused NFC-e runtime tests pass.
- Root contract checks pass.
- Package-quality gates pass.
- Planning and contract docs consistently describe `PR` as the first additive UF beyond `SP` without implying broader multi-UF support.
- A reviewer can complete the directed cohort and provenance review in under 10 minutes.

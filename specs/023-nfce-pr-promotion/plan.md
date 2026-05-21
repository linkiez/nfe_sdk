# Implementation Plan: NFC-e PR Promotion

**Branch**: `main` | **Date**: 2026-05-21 | **Spec**: `/home/linkiez/Projetos/nfe_sdk/specs/023-nfce-pr-promotion/spec.md`

**Input**: Feature specification from `/home/linkiez/Projetos/nfe_sdk/specs/023-nfce-pr-promotion/spec.md`

## Summary

Promote homologation authorization for `PR` as the first additive `NFC-e` UF beyond the existing baseline while preserving the current root facade `authorizeNFCe`, the published `unsupported-state` boundary for UFs outside the promoted cohort, and the deferred boundaries for `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency. The technical approach is to tighten the already centralized cohort-selection and boundary surfaces in the handwritten `src/canonical/nfce/*` runtime, expand focused PR/SP and out-of-cohort tests, and align root contract documentation without changing generated schema output or package entrypoints.

## Technical Context

**Language/Version**: TypeScript 6.x on Node.js `>=18.18`

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, `tsx`, `xsd2ts`, `xml-crypto`, `node-forge`

**Storage**: N/A

**Testing**: Jest with contract, integration, and unit suites

**Target Platform**: ESM npm package consumed on modern Node.js environments

**Project Type**: TypeScript ESM library/package

**Performance Goals**: Preserve the existing single-request authorization flow for `authorizeNFCe`; no new throughput target is introduced beyond maintaining current synchronous orchestration and timeout-based transport behavior.

**Constraints**: Additive root-only package change; no new public entrypoint; preserve `unsupported-state` for UFs outside `SP + PR`; keep `CSC`, `QR Code`, `DANFE NFC-e`, consumer consultation, and offline contingency outside the immediate runtime slice; avoid changes to generated schema families.

**Scale/Scope**: One additive runtime promotion for `PR` on top of the existing `SP` baseline, touching the handwritten NFC-e runtime, root contract docs, and focused fixtures/tests only.

**Knowledge Sources**: Primary normative sources are the roadmap canon in `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/recortes-funcionais-prioritarios.md`, `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/ufs-ambientes.md`, plus the established baseline specs `010` and `015`. This slice stays explicitly traceable to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`, while the exclusions for `PB`, `GO`, `SC`, `CE`, and `MS` remain documented as boundary rationale rather than promoted runtime support. Secondary sources remain state-level evidence and operational annexes already curated by the repository.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: Pass. The slice stays on the existing root import and current `authorizeNFCe` facade; no new exports, import paths, or migration notes are expected.
- **Schema families and normalization rules**: Pass. The feature stays in handwritten NFC-e operational code and does not alter generated classes, interfaces, enums, types, or XML normalization shapes.
- **Primary and secondary sources**: Pass. Primary roadmap/spec sources are identified; state-level evidence remains explicitly secondary and non-normative.
- **Handwritten vs generated boundaries**: Pass. Changes are confined to handwritten files under `src/canonical/nfce/*`, `src/public-contract.ts`, root docs, and tests; no strict-type exceptions are expected.
- **Focused validation commands**: Pass. Planned validation includes focused Jest suites for SP/PR and unsupported-state behavior, then `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, and `npm run validate:tarball`.
- **Release/package impact**: Pass. Package impact is additive documentation and runtime behavior within an existing root export.

## Project Structure

### Documentation (this feature)

```text
specs/023-nfce-pr-promotion/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── canonical/
│   ├── facade/
│   ├── nfce/
│   └── nfe/
├── public-contract.ts
└── index.ts

tests/
├── contract/
├── integration/
│   └── nfce/
├── unit/
│   └── nfce/
└── fixtures/
    └── nfce/

docs/
└── roadmap/
```

**Structure Decision**: Use the existing single-package layout. The feature is implemented entirely within handwritten NFC-e operational modules (`src/canonical/nfce/*`), root contract/docs (`src/public-contract.ts`, `README.md` if needed), and focused Jest fixtures/tests under `tests/integration/nfce`, `tests/unit/nfce`, and root contract coverage.

## Complexity Tracking

No constitution violations are expected for this slice.

## Post-Design Constitution Check

- **ESM-only package impact**: Still passes. Design keeps the root import and existing `authorizeNFCe` facade intact.
- **Schema families and normalization rules**: Still passes. No generated output or schema-derived contract is altered.
- **Primary and secondary sources**: Still passes. `research.md`, `contracts/`, and `quickstart.md` keep roadmap/spec sources primary and state-level evidence secondary.
- **Handwritten vs generated boundaries**: Still passes. Design remains confined to handwritten NFC-e runtime, docs, and tests.
- **Focused validation commands**: Still passes. `quickstart.md` now records the focused Jest slice and package gates explicitly.
- **Release/package impact**: Still passes. The contract remains additive and root-only.

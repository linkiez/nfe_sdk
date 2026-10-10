# Implementation Plan: NFC-e SP QR Code

**Branch**: `024-nfce-sp-qrcode` | **Date**: 2026-05-21 | **Spec**: `/home/linkiez/Projetos/nfe_sdk/specs/024-nfce-sp-qrcode/spec.md`

**Input**: Feature specification from `/home/linkiez/Projetos/nfe_sdk/specs/024-nfce-sp-qrcode/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add an additive root helper that generates the official `SP` `NFC-e` `QR Code` result for both `homologacao` and `producao` using explicit environment and `CSC` inputs, while keeping `authorizeNFCe` itself on its current homologation-only runtime boundary, preserving `unsupported-state` for non-`SP` helper requests, and keeping renderer, consumer consultation, `CSC` administration, `offline`, and broader multi-`UF` rollout outside this slice. The technical approach is to extend the handwritten `src/canonical/nfce/*` contracts with a dedicated `QR Code` request/result model, implement local composition logic on top of the existing signing-prerequisite/access-key primitives, expose a new root export, and cover the slice with focused contract, unit, and local integration tests plus root contract documentation updates.

## Technical Context

**Language/Version**: TypeScript 6.x on Node.js `>=18.18`

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, `tsx`, `xsd2ts`, `xml-crypto`, `node-forge`, existing handwritten canonical runtime modules under `src/canonical/*`

**Storage**: N/A

**Testing**: Jest with focused contract, integration, and unit suites; Prettier for spec docs; package quality gates via npm scripts

**Target Platform**: Root-only ESM npm package for modern Node.js environments

**Project Type**: TypeScript ESM library/package with generated schema inventory plus handwritten operational facades

**Performance Goals**: Preserve a deterministic local-only helper with no remote transport dependency; `QR Code` composition should remain synchronous, allocation-light, and effectively negligible relative to existing signing helpers.

**Constraints**: Additive root export only; no new subpath export; no generated schema or XSD pipeline changes; do not expand `authorizeNFCe` into full production authorization; reject `PR` and all non-`SP` UFs for this helper with explicit boundary behavior; never expose or persist raw `CSC` token material in the returned result.

**Scale/Scope**: One additive `NFC-e` helper for the `SP` baseline only, touching handwritten `src/canonical/nfce/*`, root exports/contracts, one feature contract doc, and focused test fixtures/assertions.

**Knowledge Sources**: Primary normative sources are `docs/roadmap/ROADMAP.md`, `docs/roadmap/runtimes-sdk.md`, `docs/roadmap/recortes-funcionais-prioritarios.md`, `docs/roadmap/nfce-operacional-promovivel.md`, and the feature spec itself, plus the roadmap-curated official `DANFE NFC-e` / `QR Code` and `NT 2018.001` references already named in the repository. Repository baseline sources include `specs/014-expand-signing-coverage/spec.md`, `src/public-contract.ts`, and the current handwritten `src/canonical/nfce/*` helpers. Secondary sources remain the curated state-level evidence used by roadmap annexes; none override the published `SP`-first boundary.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: Pass. The slice remains on `package.json#exports["."]`, adds a new root symbol only, and requires no CommonJS or subpath compatibility change.
- **Schema families and normalization rules**: Pass. The work stays in handwritten NFC-e runtime code and documentation; no generated classes, interfaces, enums, types, file layout, or schema normalization rules change.
- **Primary and secondary sources**: Pass. Primary roadmap and official-document provenance are named explicitly; state-level evidence remains secondary support only.
- **Handwritten vs generated boundaries**: Pass. Planned edits are limited to handwritten `src/canonical/nfce/*`, `src/canonical/facade/*`, `src/index.ts`, `src/public-contract.ts`, docs, and Jest coverage. No strict-type exceptions are expected.
- **Focused validation commands**: Pass. Planned validation is a focused Jest slice for the new helper and contract docs, then `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run validate:tarball`, and `npm run docs:links`. No regeneration command is expected because generated output is not part of this slice.
- **Release/package impact**: Pass. The npm surface change is additive, root-only, and compatible with the current package strategy.

## Project Structure

### Documentation (this feature)

```text
specs/024-nfce-sp-qrcode/
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
│   └── shared/
├── public-contract.ts
└── index.ts

tests/
├── config/
├── contract/
├── integration/
│   └── nfce/
└── unit/
    └── nfce/

docs/
└── roadmap/
```

**Structure Decision**: Use the existing single-package layout. The feature is confined to handwritten NFC-e runtime modules, root export wiring, package contract documentation, and focused Jest coverage. No new package, application, or generated-code structure is introduced.

## Complexity Tracking

No constitution violations are expected for this slice.

## Post-Design Constitution Check

- **ESM-only package impact**: Still passes. The design keeps the package root as the single normative entrypoint and adds one additive symbol rather than a new import path.
- **Schema families and normalization rules**: Still passes. `research.md`, `data-model.md`, and the contract doc keep the work on handwritten runtime/request-result modeling only.
- **Primary and secondary sources**: Still passes. The design stays traceable to `RFL-006`, `RTM-007`, `RTM-011`, and `RTM-012`, while official `QR Code` documentation remains normative and state-level evidence remains secondary.
- **Handwritten vs generated boundaries**: Still passes. Planned implementation is isolated to handwritten modules, contract docs, and tests; no generator exception or handwritten edit to generated output is needed.
- **Focused validation commands**: Still passes. `quickstart.md` records the focused Jest files and full package/documentation gates explicitly.
- **Release/package impact**: Still passes. The resulting package impact is an additive root helper plus aligned contract/docs wording; no export removal or migration note is required.

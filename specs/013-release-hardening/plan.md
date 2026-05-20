# Implementation Plan: Release Hardening

**Branch**: `013-release-hardening` | **Date**: 2026-05-19 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/013-release-hardening/spec.md`

## Summary

Harden the repository for repeatable releases and external adoption without changing the
published runtime API. The feature delivers four repository-facing artifacts: a GitHub
Actions CI workflow for the default branch, a function-level coverage matrix in `docs/`,
three or more executable onboarding examples that consume the built root import `nfe-sdk`,
and a homologation continuity runbook that documents import/export/recovery flows. The
implementation reuses existing commands and validators where possible: `build`, `lint`,
`typecheck`, `test`, `format:check`, `audit:public-contract`, `validate:tarball`, and the
Node-based internal-link validators in `tools/`.

## Technical Context

**Language/Version**: TypeScript 6.0.3 (strict mode), Node.js >=18.18 LTS, ESM-only
package; `tsx`-executed TypeScript for internal markdown link validation scripts

**Primary Dependencies**: TypeScript 6, Jest 30 / ts-jest, ESLint 9, Prettier 3, tsx 4,
GitHub Actions (workflow runtime), shared Node link validators in `tools/`

**Storage**: N/A — repository automation and documentation artifacts only

**Testing**: Jest contract/integration/unit suites, `npm run lint`, `npm run typecheck`,
`npm run build`, `npm run format:check`, `npm run docs:links` for markdown validation,
optional `npm run validate:tarball` smoke verification for packaged root import

**Target Platform**: GitHub-hosted Ubuntu runners for CI; local Linux/macOS Node.js
developer environments for examples and release validation

**Project Type**: npm package (ESM library) with supporting documentation, examples, and
repository automation

**Performance Goals**: Full CI feedback remains deterministic and comfortably under 10
minutes on a standard GitHub-hosted runner; docs verification stays offline against checked-in
files only

**Constraints**: No public export removals or renamed import paths; no generated schema
artifacts change; examples must consume the built package contract rather than `src/`;
continuity scope remains documentation-only (no new recovery scripts); examples requiring
external credentials are not executed in CI

**Scale/Scope**: 1 GitHub Actions workflow, 1 docs verification command path, 1 new
coverage matrix document, 1 continuity runbook, 3+ example scripts, targeted updates to
`package.json`, `README.md`, and `docs/index.md`

**Knowledge Sources**: `docs/roadmap/ROADMAP.md` Phase 8 (primary roadmap scope),
`src/public-contract.ts` and `package.json` (public package surface),
`docs/capacidades-sdk.md` and domain dossiers (documentation vocabulary),
`docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/manual_emissor_nfe.md`
(continuity operations),
`docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`
(DANFE and receipt lifecycle),
`docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324 - Manual_de_Especificações_Técnicas_do_DANFE_NFC-e_QR_Code.md`
(QR Code and DANFE NFC-e visibility), existing repository validators
`tools/validate-links-comprehensive.ts` / `tools/validate-links-nf.ts`, and
`specs/011-roadmap-gap-audit/coverage-matrix.md` as a non-normative structural precedent

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: The feature does not add, remove, or rename any runtime
  export from `src/index.ts`; examples intentionally validate the existing ESM root import
  `nfe-sdk` after local build. No migration note required for consumers. ✅
- **Affected schema families and normalization**: No XSD package, generator output,
  normalized identifier, or file-layout rule in `src/{classes,enums,interfaces,types}` is
  changed. The only new inventory is repository tooling and documentation. ✅
- **Primary sources and provenance**: Phase 8 roadmap, official MOC/manual sources, and the
  current public contract are all identified. The audit coverage matrix is used only as a
  structural reference and remains explicitly non-normative. ✅
- **Source boundaries**: Handwritten surfaces only: `.github/workflows/`, `docs/`,
  `examples/`, `package.json`, and existing root Python validators. Generated output remains
  untouched. No strict-type exemptions are planned. ✅
- **Validation commands**: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run test`,
  `npm run format:check`, `npm run docs:links`, and optionally
  `npm run validate:tarball` for packaged-root smoke coverage. No regeneration command is
  required because no schema output changes. ✅
- **npm package surface / release impact**: Release hardening is additive at repository level
  only. `package.json` may gain scripts, but package exports, `files`, and tarball contents
  remain consumer-compatible. Version stays unchanged in this feature. ✅

**Constitution Check result**: PASS — no violations.

_Post-Phase 1 re-check_: Design still passes all gates. The plan keeps runtime exports stable,
leaves generator outputs untouched, and treats the audit matrix as supporting context rather
than normative authority. Examples, docs, and CI wiring remain handwritten boundaries only. ✅

## Project Structure

### Documentation (this feature)

```text
specs/013-release-hardening/
├── plan.md              # this file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── api-contract.md  # repository delivery contract
├── checklists/
│   └── requirements.md  # spec quality checklist
└── tasks.md             # Phase 2 output (not created by /speckit.plan)
```

### Source Code (repository root)

```text
.github/
├── copilot-instructions.md              UPDATE (plan reference)
└── workflows/
    └── ci.yml                           NEW

docs/
├── coverage-matrix.md                   NEW
├── index.md                             UPDATE (navigation)
├── capacidades-sdk.md                   UPDATE (cross-reference as needed)
└── runbooks/
    └── homologation-continuity.md       NEW

examples/
├── nfe/
│   └── authorize.ts                     NEW
├── recipient/
│   └── manifest.ts                      NEW
└── validation/
    └── validate-xsd.ts                  NEW

package.json                             UPDATE (docs validation + format scope)
README.md                                UPDATE (examples + release-hardening entrypoints)
tools/validate-links-comprehensive.ts    UPDATE (include new documentation files)

src/
└── public-contract.ts                   READ-ONLY source of truth for matrix population

tests/
├── contract/                            READ-ONLY evidence for matrix classification
├── integration/                         READ-ONLY evidence for stable vs beta assessment
└── unit/                                READ-ONLY evidence for beta assessment
```

**Structure Decision**: Single-project repository hardening. The feature intentionally avoids
new runtime modules and instead extends repository infrastructure around the existing ESM
library. `src/public-contract.ts` remains the canonical source of truth for exported names;
new docs and examples sit outside the published tarball.

## Complexity Tracking

_No violations — Constitution Check passed without exceptions._

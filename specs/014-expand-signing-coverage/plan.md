# Implementation Plan: Expand Signing Coverage

**Branch**: `014-expand-signing-coverage` | **Date**: 2026-05-20 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/014-expand-signing-coverage/spec.md`

## Summary

Expand the current signing slice without reopening broad runtime promises. The feature
adds one additive event-signing capability, one additive `NFC-e` prerequisite-preparation
capability, and explicit boundary documentation that keeps `SOAP`, `QR Code`, `DANFE NFC-e`,
trust chain automation, and multi-`UF` rollout outside this phase. The implementation must
reuse the existing root signing context and the already-published access-key and `hashCSRT`
helpers rather than introducing parallel public flows.

## Technical Context

**Language/Version**: TypeScript 6.0.3 in strict mode on Node.js >=18.18 LTS, ESM-only npm package

**Primary Dependencies**: TypeScript 6, Jest 30 / ts-jest, ESLint 9, Prettier 3, existing signing utilities under `src/canonical/signing/`, existing facade exports under `src/canonical/`

**Storage**: N/A — runtime-only contract, fixtures, and documentation updates

**Testing**: Jest contract, integration, and unit suites plus `npm run lint`, `npm run format:check`, `npm run typecheck`, and `npm run build`

**Target Platform**: Local Linux/macOS/Windows Node.js consumers of the published ESM package; no browser or mobile runtime in scope

**Project Type**: npm package / TypeScript library with handwritten runtime modules plus generated schema inventory

**Performance Goals**: Event signing and `NFC-e` prerequisite preparation remain local, deterministic, and comfortably below network-bound operational latency; no new remote calls are introduced by this slice

**Constraints**: No export removals or renamed entrypoints; no generated schema artifact changes; no silent expansion into `QR Code`, `DANFE NFC-e`, trust chain automation, `A3`, or multi-`UF` operational promises

**Scale/Scope**: 2 new additive root-facing capabilities, targeted runtime modules in `src/canonical/signing/` and `src/canonical/nfce/`, new fixture sets, and focused updates to roadmap/package-boundary documentation

**Knowledge Sources**: `specs/014-expand-signing-coverage/spec.md`, `specs/005-add-digital-signing/spec.md`, `docs/roadmap/ROADMAP.md`, `docs/roadmap/recortes-funcionais-prioritarios.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `MOC 7.0`, `NT 2026.001`, technical documentation for `DANFE NFC-e` and `QR Code`, plus `SVAN`/`SVRS` manuals as operational context

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: The feature remains additive on the root ESM import. It plans new root-facing capabilities without removing or renaming existing exports. No migration note is required if the contract stays additive. ✅
- **Affected schema families and normalization**: Handwritten runtime code changes are expected around event-signing target resolution and `NFC-e` prerequisite shaping. The generated schema inventory under `src/{classes,interfaces,types,enums}` remains untouched. No emitted identifier or generated file-layout change is planned. ✅
- **Primary sources and provenance**: The spec and plan name the roadmap recorte, prior signing slice, and official fiscal sources separately from secondary operational references. Provenance is explicit and reproducible. ✅
- **Source boundaries**: The work is limited to handwritten source boundaries under `src/canonical/`, `tests/`, `docs/`, and `specs/`. No strict-type exemptions are planned. ✅
- **Validation commands**: Focused validation is defined as `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, and `npm run build`, with narrower test targeting when implementation starts. No generation command is required because generated artifacts are not part of this slice. ✅
- **npm package surface / release impact**: The package surface expands additively with no planned breaking change. Release impact is limited to new root exports plus documentation and test evidence. ✅

**Constitution Check result**: PASS — no violations.

_Post-Phase 1 re-check_: Design still passes all gates. The plan keeps the generated inventory untouched, preserves additive ESM package evolution, and records official sources and deferred boundaries explicitly. ✅

## Project Structure

### Documentation (this feature)

```text
specs/014-expand-signing-coverage/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-signing-expansion-facade.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── canonical/
│   ├── facade/
│   │   ├── create-signing-context.ts           READ-ONLY baseline
│   │   ├── sign-nfe-xml.ts                     READ-ONLY baseline
│   │   ├── compute-hash-csrt.ts                READ-ONLY baseline
│   │   ├── compute-nfe-access-key.ts           READ-ONLY baseline
│   │   ├── sign-event-xml.ts                   NEW
│   │   └── prepare-nfce-signing-prerequisites.ts NEW
│   ├── signing/
│   │   ├── contracts.ts                        UPDATE
│   │   ├── errors.ts                           UPDATE
│   │   ├── sign-nfe-xml.ts                     READ-ONLY baseline
│   │   ├── sign-event-xml.ts                   NEW
│   │   ├── verify-signed-event-xml.ts          NEW
│   │   └── event-signature-target.ts           NEW
│   ├── nfce/
│   │   ├── contracts.ts                        UPDATE
│   │   └── prepare-signing-prerequisites.ts    NEW
│   └── index.ts                                UPDATE
└── index.ts                                    UPDATE

tests/
├── contract/
│   └── root-signing-expansion-facade.test.ts   NEW
├── integration/
│   ├── sign-event-xml.test.ts                  NEW
│   └── prepare-nfce-signing-prerequisites.test.ts NEW
├── unit/
│   ├── event-signing-boundary.test.ts          NEW
│   └── nfce-signing-prerequisites-boundary.test.ts NEW
└── fixtures/
    ├── signing/
    │   ├── event-cce-unsigned.xml              NEW
    │   ├── event-cancel-unsigned.xml           NEW
    │   └── load-event-signing-fixture.ts       NEW
    └── nfce/
        ├── signing-prerequisites-valid.ts      NEW
        └── signing-prerequisites-invalid.ts    NEW

docs/
└── roadmap/
    ├── coverage-matrix.md                      UPDATE
    ├── specs-implementacao.md                  UPDATE
    └── specs-pendencias-abertas.md             UPDATE

README.md                                       UPDATE
src/public-contract.ts                          UPDATE
```

**Structure Decision**: Single-package repository with changes limited to handwritten runtime, test, and documentation boundaries. The new slice extends the existing signing and `NFC-e` modules instead of creating a parallel package or generated family.

## Complexity Tracking

No constitution violations require justification.

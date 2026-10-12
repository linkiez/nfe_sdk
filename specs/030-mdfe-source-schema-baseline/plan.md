# Implementation Plan: MDF-e Source and Schema Baseline

**Branch**: `030-mdfe-source-schema-baseline` (feature key; Git branch remains `main`) | **Date**: 2026-10-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/030-mdfe-source-schema-baseline/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Establish a provenance-backed national MDF-e source and schema baseline, then define a narrow, evidence-supported candidate scope for the dependent SP runtime specification. This is a documentation and source-curation slice: it does not add an MDF-e runtime, download or generate XSD artifacts, alter package exports, or claim production readiness. The official SVRS index currently identifies MOC 3.00b and the NT 2025.001 schema package revision 1.04; exact schema applicability intervals, the complete SP issuer/operation matrix, and contingency behavior remain explicit verification gates.

## Technical Context

**Language/Version**: TypeScript 6.x on Node.js `>=18.18`; no TypeScript source change is planned

**Primary Dependencies**: Existing npm package toolchain: Jest, ESLint, Prettier, TypeScript, and `xsd2ts`; no dependency changes

**Storage**: Version-controlled Markdown research/design artifacts; official schema archives remain external until provenance and applicability are verified

**Testing**: Prettier check for this feature's Markdown and `npm run docs:links`; package test, lint, typecheck, build, public-contract, and tarball commands are impact gates, not evidence of fiscal correctness

**Target Platform**: Repository documentation for the Node.js ESM npm package; no runtime platform behavior changes

**Project Type**: TypeScript ESM library with XSD-to-TypeScript generation pipeline

**Performance Goals**: N/A; this slice produces reviewable source and scope records only

**Constraints**: No public API, runtime, XSD inventory, generated artifact, or package export changes. Documentation edits are limited to this feature directory plus the dependent `specs/031-mdfe-sp-runtime/spec.md`, solely to make its scope traceable to the verified baseline and preserve explicit blockers. Treat the SVRS listing as the current technical index, not proof of every UF's deployment or a complete applicability timeline. Keep unresolved source conflicts visible and block dependent runtime claims. The current Git branch remains `main`; the Spec Kit feature directory is selected explicitly without switching branches.

**Scale/Scope**: One national MDF-e source register, a schema-package/applicability record, an SVRS service-route record, and an explicit initial-scope matrix. SP is a candidate runtime cohort only; confirm issuer eligibility and operation boundaries from primary sources before promoting it.

**Knowledge Sources**: Primary normative sources: CONFAZ Ajuste SINIEF 21/10 and amendments. Primary technical/operational sources: SVRS MDF-e documents and services indexes, with SP Fazenda guidance for its state-specific authorizer context. The official SPED/RFB MDF-e listing is retained as a legacy reference where it conflicts with the live SVRS index. Local PR/PB captures and approved secondary repositories are discovery aids only. Research was consulted on 2026-10-12; schema applicability dates, a complete SP issuer/operation matrix, and contingency requirements remain unresolved evidence gaps.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: Pass. This documentation-only slice does not alter package entrypoints, exports, compatibility, or migration requirements.
- **Schema families and normalization rules**: Pass with a gate. The target is the official MDF-e schema family indexed as MOC 3.00b with the NT 2025.001 package revision 1.04; namespaces and applicable intervals must be extracted from and reconciled against the official artifacts before code generation or runtime support is planned. No identifiers, shapes, or generated file layout change here.
- **Primary and secondary sources**: Pass with explicit gaps. CONFAZ is the normative legal authority; SVRS publishes current technical packages and routes; SP Fazenda supplies state-operational context. The source register records the stale SPED/RFB 3.00a listing and other unresolved conflicts. Local PR/PB captures and secondary material cannot establish MDF-e rules.
- **Handwritten and generated boundaries**: Pass. This slice edits feature documentation under `specs/030-mdfe-source-schema-baseline/` and may update only `specs/031-mdfe-sp-runtime/spec.md` to carry forward verified evidence and blockers. No handwritten runtime or generated output is changed, and no strict-type exception is introduced. The design records that the current filtered generator still rewrites recursive indexes and skips existing generated files, so regeneration safety and collisions require separate handling before code generation.
- **Focused validation commands**: Pass. Run `npm exec prettier -- --check specs/030-mdfe-source-schema-baseline/*.md`, `npm run docs:links`, `npm test -- --runInBand`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run audit:public-contract`, and `npm run validate:tarball`. No regeneration command applies because this slice does not add or modify XSD/generated artifacts; a future generated-output change must use `npm run generate -- <verified-mdfe-xsd-subtree>` only after the generator ownership/collision risks are addressed.
- **Release/package impact**: Pass. No npm metadata, tarball contents, exports, versioning, or release action changes.

## Project Structure

### Documentation (this feature)

```text
specs/030-mdfe-source-schema-baseline/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

The generated Phase 1 artifacts are `data-model.md` and `quickstart.md`. No `contracts/` directory is needed because this documentation-only feature changes no public package interface.

### Source Code (repository root)

No source code changes are planned. The only allowed documentation change outside this feature directory is `specs/031-mdfe-sp-runtime/spec.md`, which must remain blocked for any required evidence that is still unverified.

**Structure Decision**: Keep source and scope evidence in this feature directory, with one narrowly bounded dependent-spec alignment in `specs/031-mdfe-sp-runtime/spec.md` required by FR-008. No `src/`, `xsd/`, generated artifact, or test file is changed. The dependent runtime feature may add verified XSD packages and generated artifacts only after the source/applicability gate and generator ownership risks are resolved.

## Complexity Tracking

No constitution violations are introduced by this documentation-only design. The unresolved source/applicability items are explicit acceptance gates, not exceptions to repository principles.

## Post-Design Constitution Check

- **ESM-only package impact**: Pass. No runtime or published contract changes are part of this feature.
- **Schema families and normalization rules**: Pass with the applicability gate retained. The design models official packages and evidence intervals without generating declarations or normalizing identifiers.
- **Primary and secondary sources**: Pass. Legal acts, official technical indexes, SP operational guidance, stale official references, discovery captures, and unresolved evidence are classified separately in `research.md`.
- **Handwritten and generated boundaries**: Pass. Only feature documentation and the evidence-linked dependent runtime spec may change; generator behavior is documented as a follow-on risk, not modified in this slice.
- **Focused validation commands**: Pass. `quickstart.md` lists the focused documentation checks and package-impact gates; regeneration is explicitly not applicable.
- **Release/package impact**: Pass. No published package surface or release change is expected.

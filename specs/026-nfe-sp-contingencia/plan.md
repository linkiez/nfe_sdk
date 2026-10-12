# Implementation Plan: NF-e SP Production Contingency

**Branch**: `026-nfe-sp-contingencia` (target; current branch remains `main`) | **Date**: 2026-10-10 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/026-nfe-sp-contingencia/spec.md`

## Summary

Extend the existing root NF-e operational contracts with explicit SP production contingency states. Support SVC-AN authorization only after an explicit request and a fresh SVC status `107` observation; extend the existing EPEC event facade for production and make later NF-e transmission an explicit recovery action. Keep FS-DA as an assisted/unverified boundary because current SEFAZ/SP material does not confirm it as an SP route. Preserve normal authorization, prohibit automatic fallback/retry, and keep recovery persistence with the integrator.

## Technical Context

**Language/Version**: TypeScript 6.x strict, ESM; Node.js >=18.18.

**Primary Dependencies**: Existing TypeScript, Jest 30, ESLint 9, Prettier 3, `@xmldom/xmldom`, `node-forge`, and `xml-crypto`; no new dependency expected.

**Storage**: None in the SDK runtime. The integrator owns durable contingency and recovery records.

**Testing**: Jest 30 with XML fixtures and injected `RequestExecutor`; no live SEFAZ transmission.

**Target Platform**: Node.js ESM consumers on supported Node versions; Linux CI.

**Project Type**: Published npm ESM SDK/library with one stable root export.

**Performance Goals**: Keep normal authorization at its current request count. An explicit SVC-AN attempt performs at most one SVC status check and one authorization request; EPEC registration is one event request; recovery is an explicit later call. No polling or retry loop.

**Constraints**: SP (`cUF` 35) only. Normal mode remains the default. SVC-AN authorization requires a fresh production status `107`; `113`, `114`, unknown, wrong-environment, and transport-failure results block authorization. EPEC production uses event `110140`, `tpAmb=1`, `tpEmis=4` on the matching later NF-e, and the SVC-AN event route. A normal timeout never triggers contingency. The caller supplies a production mTLS executor and owns recovery persistence. FS-DA is an explicit boundary until state-level applicability is confirmed. No credential material may enter public evidence.

**Scale/Scope**: Additive extension of current SP NF-e authorization, service-status routing, EPEC event submission, and one-shot recovery using existing facades. No other UFs, NFC-e, automatic issuance, physical-form supply, local database, generic scheduler, or generated schema changes are in scope.

**Knowledge Sources**: Primary sources and evidence limits are recorded in [research.md](research.md). Normative sources: MOC 7.0 Anexo III, current SEFAZ/SP contingency and EPEC pages, and the national NF-e Web Services table. No secondary sources were used. Current live SVC activation is not inferred from the static service catalog; the SVC status response is the per-attempt evidence.

## Constitution Check

_GATE: PASS before Phase 0 research; rechecked after Phase 1 design._

- **ESM/package impact**: Additive fields and options remain on existing root exports (`authorizeNFe`, `queryNFeServiceStatus`, `submitEPECEvent`, `reconcileNFeReceipt`). No new subpath or facade is planned. Existing classification meanings and homologation defaults remain stable.
- **Schemas/normalization**: The NF-e 4.00 schema already defines `tpEmis` values used by EPEC, FS-DA, and SVC-AN; the EPEC schema family is already present. No generated identifier, file-layout, or shape change is expected. Reassess and regenerate only if an implementation gap proves otherwise.
- **Sources/provenance**: Official MOC and current SP sources are cited in `research.md`. The legal applicability of FS-DA to SP and a portal-based live activation endpoint remain unverified; neither is represented as runtime support. No secondary source is used.
- **Source boundaries/types**: Changes remain in handwritten NF-e/transport code and public-contract/docs/tests. Generated directories and `xsd/` are out of scope absent schema evidence. Strict typing remains enabled; no unchecked cast or compiler relaxation is planned.
- **Validation**: Focused fixture-backed Jest tests, then `npm test -- --runInBand`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run audit:public-contract`, `npm run validate:tarball`, and Prettier checks for the new feature documents. Run `npm run generate` only if generated output changes.
- **Release impact**: The result/request additions are additive to the root package surface. Review semantic-version impact and packed public declarations before release.

**Constitution Check result**: PASS. The static evidence gaps are represented as boundaries rather than claims of support.

## Project Structure

### Documentation (this feature)

```text
specs/026-nfe-sp-contingencia/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfe-sp-contingency.md
└── tasks.md                         # Created by the later tasks phase
```

### Source Code (repository root)

```text
src/
├── index.ts                         # Keep the root ESM entrypoint stable
├── public-contract.ts               # Record additive mode/outcome surface
└── canonical/
    ├── nfe/
    │   ├── authorize-nfe.ts         # Explicit contingency request and SVC gate
    │   ├── authorization-outcome.ts # Additive mode/state/recovery projection
    │   ├── query-nfe-service-status.ts # Route SVC activation status explicitly
    │   ├── submit-epec-event.ts     # Production EPEC environment and response mapping
    │   ├── epec/                    # Validate complete EPEC event details
    │   ├── reconcile-nfe-receipt.ts # Reuse known-receipt one-shot continuation
    │   └── contracts.ts             # Add typed request/outcome metadata
    └── transport/
        ├── service-catalog.ts       # Reuse official production SVC-AN services
        ├── resolve-nfe-service-endpoint.ts
        └── execute-nfe-soap-service.ts

tests/
├── fixtures/nfe-operational/authorization/
├── integration/
├── unit/
└── contract/
```

**Structure Decision**: Extend the current handwritten NF-e and SOAP transport modules. Reuse existing root facades, EPEC XSD, SVC-AN catalog entries, SP production route from spec 025, and known-receipt facade from spec 021. Keep activation checks and contingency-state projection at the operational NF-e boundary. Do not edit generated schema trees or create a second contingency-specific facade.

## Phase 0: Research

Complete in [research.md](research.md): confirm SP-published modes, SVC activation semantics and status codes, EPEC event/recovery lifecycle, duplicate-number constraints, available root contracts, and evidence limits.

## Phase 1: Design and Contracts

- Define the typed execution mode, contingency attempt, SVC activation observation, caller-owned recovery record, outcome states, and validation rules in [data-model.md](data-model.md).
- Specify additive root facade inputs/outputs and failure boundaries in [contracts/public-nfe-sp-contingency.md](contracts/public-nfe-sp-contingency.md).
- Provide deterministic, fixture-backed scenarios and package validation commands in [quickstart.md](quickstart.md).
- Recheck the Constitution gates above after design; result remains PASS.

## Complexity Tracking

No constitution violations or additional runtime layers are proposed. Static-page activation scraping, local persistence, automatic retry/polling, automated FS-DA physical handling, and secondary-source assumptions are intentionally excluded.

<!--
Sync Impact Report
Version change: 1.0.0 -> 1.1.0
Modified principles:
- II. Schema Fidelity with Explicit Normalization -> II. Schema Fidelity with Explicit Normalization and Provenance
Added sections:
- Knowledge Sources & Provenance
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ✅ specs/001-research-sefaz-docs/quickstart.md
- ✅ README.md
Follow-up TODOs:
- None
-->
# NFe SDK Constitution

## Core Principles

### I. TypeScript ESM Package First
This repository MUST evolve as an ESM-only npm package implemented in TypeScript.
Package metadata, exports, generated artifacts, examples, and documentation MUST target
modern Node.js ESM consumers. Any proposal to introduce or retain CommonJS compatibility
MUST be treated as an explicit migration decision, justified in the specification and
reviewed for downstream impact before implementation.

Rationale: package consumers need predictable import semantics, typed entrypoints, and a
single supported module strategy.

### II. Schema Fidelity with Explicit Normalization and Provenance
Generated and handwritten artifacts MUST preserve the semantics of NFe, NFCe, and
Manifestacao do Destinatario schemas. Any renaming, normalization, sanitization, or
partitioning of schema-derived identifiers MUST be deterministic, documented, and
reproducible from source schemas. Changes that alter emitted identifiers, file layout, or
data shape contracts MUST include compatibility analysis and migration notes when they are
breaking. When repository decisions also depend on external manuals, portal guidance, or
reference implementations, the authoritative primary sources and any secondary knowledge
sources MUST be recorded separately with enough traceability to reproduce the conclusion.

Rationale: fiscal integrations depend on stable contracts, and silent generator drift is a
package compatibility failure.

### III. Strict Type Safety and Source Boundaries
TypeScript strictness for maintained sources is non-negotiable. Handwritten pipeline code,
supporting runtime code, and generated output MUST have clear ownership boundaries, with
stable entrypoints documenting what is safe to edit manually. Relaxing compiler guarantees,
adding unchecked casts, or suppressing type errors requires written justification in the
implementation plan and a narrow validation strategy.

Rationale: this repository mixes generated and maintained code, so weak boundaries turn
small generator changes into large correctness regressions.

### IV. Testable Public Contracts
Any change that affects generator behavior, package exports, emitted public types, schema
parsing, or normalization rules MUST add or update Jest tests and representative fixtures
before merge. The required flow is: define or update the contract expectation, observe the
failing test or probe, implement the change, and re-run the same focused validation until
it passes.

Rationale: this project ships contracts to consumers, so regressions must be caught at the
public API and schema-fixture level, not by manual inspection alone.

### V. Tooling-Enforced Consistency
ESLint, Prettier, TypeScript validation, and the relevant test command MUST be part of the
normal delivery path for changes. Repository scripts MUST provide canonical entrypoints for
linting, formatting, testing, and build or type verification. Any exemption for generated
files MUST be explicit, automated, and documented in the generation workflow rather than
handled ad hoc in reviews.

Rationale: a generation-heavy package accumulates drift quickly unless quality checks are
standardized and reproducible.

## Technical Standards

- Runtime baseline: Node.js LTS with ESM package metadata and npm as the package manager
	and publication target.
- Testing baseline: Jest is the required framework for unit, integration, and regression
	coverage over generator logic, exported package entrypoints, and representative schema
	fixtures.
- Quality baseline: ESLint and Prettier are mandatory for maintained sources; TypeScript
	strict mode MUST remain enabled for handwritten code.
- Repository boundary: `tools/` owns the generation pipeline, `xsd/` is the source schema
	inventory, and `src/` is the generated or published TypeScript surface unless a feature
	spec explicitly defines another published entrypoint.
- Compatibility rule: changes to exported identifiers, import paths, or generated file
	layout MUST include downstream impact assessment before release.

## Knowledge Sources & Provenance

- Official primary sources from SEFAZ, NF-e, NFC-e, manuals, notas tecnicas, and schema
	artifacts are the normative authority for repository decisions involving fiscal rules,
	documentation, and SDK behavior.
- Secondary sources MAY complement a documented primary-source gap, but they MUST remain
	explicitly labeled as non-normative and MUST NOT override an official source.
- Any specification, plan, task list, dossier, or implementation note derived from external
	knowledge MUST record the consulted sources, the date of consultation, and the boundary
	between confirmed normative guidance, operational interpretation, and unresolved gaps.
- The following repositories are pre-approved as secondary reference material for this
	repository and MUST be treated as complementary only:
	- https://github.com/wmixvideo/nfe
	- https://github.com/nfephp-org/sped-nfe
	- https://github.com/nfewizard-org/nfewizard-io
	- https://github.com/lucashpmelo/node-mde
	- https://github.com/brasil-js/danfe
	- https://github.com/smart-fun/XmlToJson

## Delivery Workflow & Quality Gates

1. Specifications MUST state the target package impact, affected schema families, public
	 contract changes, and any ESM import or export implications.
2. Implementation plans MUST fail the Constitution Check unless they name the focused
	 validation commands for Jest, lint, format, and type or build verification, plus any
	 required regeneration command when emitted output changes.
3. Specifications, plans, and documentation-heavy tasks MUST identify the primary sources
	 they depend on and list any approved secondary references separately when they are used.
4. Tasks MUST include regression fixture work, test coverage work, and documentation or
	 package metadata updates whenever schema normalization, public exports, or naming
	 conventions change.
5. Reviews MUST verify that generated artifacts are reproducible from the checked-in source
	 schemas and that handwritten edits do not silently modify generated-only surfaces.
6. Release preparation MUST evaluate semantic version impact for exported identifiers,
	 emitted file layout, and package metadata before publishing.

## Governance

This constitution overrides conflicting local habits for this repository. Amendments MUST be
documented in the same change that updates the constitution, include a rationale and
consumer-impact assessment, and propagate to dependent Speckit templates or guidance files.

Constitution versioning follows semantic versioning: MAJOR for incompatible governance
changes or principle removal or redefinition, MINOR for new mandatory principles or
sections, and PATCH for clarifications that do not change obligations.

Compliance review is required in every specification, implementation plan, task list, and
pull request. Any unresolved deviation MUST be recorded in Complexity Tracking or equivalent
review notes before implementation begins.

**Version**: 1.1.0 | **Ratified**: 2026-05-16 | **Last Amended**: 2026-05-16

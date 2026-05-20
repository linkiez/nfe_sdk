# Research: Release Hardening

**Feature**: `013-release-hardening` | **Date**: 2026-05-19

Resolves the planning decisions for CI, documentation verification, coverage reporting,
examples, and continuity onboarding for the release-hardening slice.

---

## R1 — CI Trigger and Gate Shape

**Decision**: Add a GitHub Actions workflow at `.github/workflows/ci.yml` triggered on
`pull_request` and `push` for the repository default branch, with ordered gates for `build`,
`lint`, `typecheck`, `test`, and documentation verification.

**Rationale**: The spec clarifications fixed the CI target as the repository default branch,
not a hard-coded branch name. The repository currently has no workflow in `.github/workflows/`,
so the CI file is a net-new delivery. The package already exposes canonical validation
commands in `package.json`, which minimizes drift between local validation and CI.

**Alternatives considered**:

- Hard-code `main`: rejected because the remote default branch is currently not `main`.
- Run separate independent jobs without ordering: rejected because the spec requires a clear
  validation sequence and contributor-friendly failure reading.

---

## R2 — Documentation Verification Strategy

**Decision**: Consolidate the existing root Python link validators into Node-based tools under
`tools/` and expand repository scripts so CI runs a dedicated documentation-verification step
backed by `npm run docs:links` and `npm run format:check`.

**Rationale**: The repository already contains multiple internal-link validators, with the
comprehensive variant being the closest fit for a repeatable docs gate. Moving that behavior to
shared Node tooling under `tools/validate-links*.ts` avoids keeping parallel Python and Node
automation paths while still avoiding a new linting dependency or a second source of truth for
markdown link validation. `format:check` already exists and should be expanded to include the
new spec/documentation surfaces this slice introduces.

**Alternatives considered**:

- Add `markdownlint` or a new npm package: rejected to keep the slice dependency-light.
- Rely only on Prettier: rejected because formatting does not validate broken internal links.

---

## R3 — Function-Level Coverage Matrix Source of Truth

**Decision**: Build `docs/roadmap/coverage-matrix.md` from `src/public-contract.ts` as the canonical
export inventory, then annotate each entry with roadmap phase, documentary evidence, and the
status classification `stable` / `beta` / `backlog` / `fora-do-escopo`.

**Rationale**: `src/public-contract.ts` already centralizes the documented root surface in
`DOCUMENTED_SURFACE`. The spec clarification fixed that exports with only unit validation must
appear as `beta`, which means the matrix must combine the contract inventory with test-layer
and documentation evidence. The older audit matrix in `specs/011-roadmap-gap-audit/coverage-matrix.md`
is useful only as a structural precedent, not as a normative source.

**Alternatives considered**:

- Derive the matrix directly from `src/index.ts`: rejected because `public-contract.ts` is the
  explicit canonical contract artifact.
- Auto-generate the matrix from tests: rejected because the spec chooses a manually curated
  matrix in this phase.

---

## R4 — Example Execution Model

**Decision**: Example scripts in `examples/` must import from `nfe-sdk` and run only after
`npm run build`, consuming the compiled local package contract rather than importing from `src/`.

**Rationale**: The package name and root `exports` map in `package.json` make local
self-reference feasible after build. This validates the same public contract external consumers
will use and prevents examples from passing against private source paths that are not part of
package guarantees.

**Alternatives considered**:

- Import directly from `src/`: rejected because it bypasses the public package surface.
- Support both `src/` and package-root execution modes: rejected because it weakens the goal
  of release-oriented onboarding.

---

## R5 — Continuity Artifact Scope

**Decision**: Consolidate continuity guidance in `docs/roadmap/proximas-iteracoes-recomendadas.md`,
keeping import, export, recovery and adjacent operational follow-ups visible without reopening a
parallel runbook tree outside the canonical roadmap annexes.

**Rationale**: The clarifications fixed this artifact as documentation with usage flows, not as
new executable tooling. Official material in `manual_emissor_nfe.md` explicitly treats import,
export, backup, and restore as operational support capabilities, which aligns with a runbook
artifact in `docs/` rather than runtime code.

**Alternatives considered**:

- Add recovery CLI scripts: rejected because the spec explicitly excludes new continuity scripts.
- Keep continuity guidance embedded only in README: rejected because the scope needs a dedicated
  operational artifact.

---

## R6 — Release Impact and Package Boundaries

**Decision**: Treat the feature as repository hardening only: update scripts, docs, examples,
and CI without changing runtime exports, generated trees, or published entrypoint semantics.

**Rationale**: The constitution requires explicit package-surface analysis. This slice hardens
release delivery but does not expand the functional API. The `files` whitelist in `package.json`
continues to exclude `examples/`, so examples remain onboarding material rather than published
package surface.

**Alternatives considered**:

- Promote examples into published tarball: rejected because it would expand the package surface
  without direct user need.
- Change exports or add subpath imports for examples: rejected because Phase 8 does not require
  contract expansion.

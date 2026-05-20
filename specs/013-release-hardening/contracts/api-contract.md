# Repository Delivery Contract: Release Hardening

**Feature**: `013-release-hardening` | **Date**: 2026-05-19

This contract defines the repository-facing artifacts required by the release-hardening
slice. It does not change the public runtime API of `nfe-sdk`.

---

## 1. CI Workflow Contract

### Workflow File

- Path: `.github/workflows/ci.yml`
- Trigger: `pull_request` and `push` on the repository default branch
- Runtime: GitHub-hosted Ubuntu runner with Node.js aligned to `package.json#engines.node`
- Publish behavior: none

### Required Validation Gates

| Gate         | Command Contract                     | Required Outcome                                            |
| ------------ | ------------------------------------ | ----------------------------------------------------------- |
| `build`      | `npm run build`                      | Compiles the distributable ESM package without errors.      |
| `lint`       | `npm run lint`                       | Maintained source files pass ESLint.                        |
| `typecheck`  | `npm run typecheck`                  | Handwritten TypeScript remains strict-clean.                |
| `test`       | `npm run test`                       | Existing Jest contract/integration/unit suites pass.        |
| `docs-check` | repository docs verification command | Markdown links and formatting checks pass for covered docs. |

### Failure Semantics

- Any failed gate marks the workflow as failed.
- No gate in this feature is advisory-only.
- The workflow must not publish npm artifacts, create releases, or mutate repository state.

---

## 2. Documentation Verification Contract

### Required Inputs

| Surface             | Requirement                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Markdown formatting | Must be checked by `npm run format:check` or an equivalent canonical repository command.                                 |
| Internal links      | Must be checked by a repository-owned validator rooted in the existing Python link-check scripts.                        |
| Covered docs        | Must include at least `docs/index.md`, the new coverage matrix, the continuity runbook, and any updated navigation docs. |

### Contract Rules

- Validation must run offline against checked-in files only.
- Broken internal links fail the docs gate.
- Introducing the docs gate may add a new script in `package.json`, but must not change package exports.

---

## 3. Coverage Matrix Contract

### Artifact

- Path: `docs/roadmap/coverage-matrix.md`
- Audience: integrators and maintainers
- Source of truth for inventory: `src/public-contract.ts`

### Required Columns

| Column              | Requirement                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `Surface`           | Exported root function/type or explicitly documented roadmap gap. |
| `Kind`              | `function`, `type`, `documented-gap`, or `auxiliary-surface`.     |
| `Status`            | `stable`, `beta`, `backlog`, or `fora-do-escopo`.                 |
| `Roadmap Phase`     | Phase from `docs/roadmap/ROADMAP.md`.                             |
| `Primary Reference` | Main document or contract reference.                              |
| `Evidence`          | Test or documentation evidence supporting the status.             |
| `Notes`             | Short reasoning for boundary or limitation.                       |

### Classification Rules

- Every exported item in `DOCUMENTED_SURFACE` must appear exactly once.
- Any public export with unit-only validation must be marked `beta`.
- Explicit roadmap lacunas such as DANFE, DANFE NFC-e, QR Code, consulta por chave, and
  recuperação pós-transmissão may appear even when no root export exists yet.

---

## 4. Example Artifact Contract

### Required Example Set

| Path                                  | Flow                         | Contract                                                                   |
| ------------------------------------- | ---------------------------- | -------------------------------------------------------------------------- |
| `examples/nfe/authorize.ts`           | NF-e authorization           | Must document prerequisites and import from `nfe-sdk`.                     |
| `examples/recipient/manifest.ts`      | Manifestação do destinatário | Must document prerequisites and import from `nfe-sdk`.                     |
| `examples/validation/validate-xsd.ts` | XSD validation               | Must run against the built package and document any local tool dependency. |

### Example Rules

- Examples must be executed only after local build.
- Examples must consume the built root import `nfe-sdk`, not `src/` paths.
- Example headers must document required environment variables and external dependencies.
- External-credential examples are not required to run inside CI for this feature.

---

## 5. Continuity Guidance Contract

### Artifact

- Path: `docs/roadmap/proximas-iteracoes-recomendadas.md`
- Audience: integrators operating in homologation

### Required Sections

| Section              | Requirement                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `Importação`         | Must describe when imported artifacts return to editable state and when they do not.     |
| `Exportação`         | Must describe what can be exported and what operational evidence may be lost.            |
| `Recuperação`        | Must describe recovery or restoration flows with command examples and expected outcomes. |
| `Limites do runtime` | Must distinguish support tooling from public runtime API.                                |

### Boundary Rules

- The runbook is documentation-only in this phase.
- The runbook must include command examples or command-like flows.
- The runbook must not require adding new recovery executables to the package.

---

## 6. Non-Goals

- No change to `src/index.ts` exports.
- No new published subpath imports.
- No inclusion of `examples/` in the npm tarball.
- No schema regeneration or XSD inventory changes.

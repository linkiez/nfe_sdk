# Data Model: Release Hardening

**Feature**: `013-release-hardening` | **Date**: 2026-05-19

This feature adds no runtime fiscal domain model. The data model below describes the
repository-facing artifacts needed to implement release hardening consistently.

---

## Entities

### 1. CI Workflow Definition

| Field                | Type               | Description                                                                                    |
| -------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| `workflowPath`       | string             | Fixed path for the GitHub Actions workflow file, expected at `.github/workflows/ci.yml`.       |
| `triggers`           | string[]           | Event list that starts validation, limited to `pull_request` and `push` on the default branch. |
| `jobs`               | CIGateDefinition[] | Ordered validation gates executed by the workflow.                                             |
| `nodeVersion`        | string             | Node.js baseline aligned with `package.json#engines.node`.                                     |
| `publishesArtifacts` | boolean            | Must remain `false` for this feature.                                                          |

**Relationships**:

- Contains multiple `CIGateDefinition` entries.
- References `DocumentationVerificationProfile` for the docs gate.

---

### 2. CI Gate Definition

| Field           | Type     | Description                                                                        |
| --------------- | -------- | ---------------------------------------------------------------------------------- |
| `id`            | string   | Stable gate identifier such as `build`, `lint`, `typecheck`, `test`, `docs-check`. |
| `command`       | string   | Canonical repository command executed by the gate.                                 |
| `blocking`      | boolean  | Whether a failure blocks the workflow result. Always `true` in this feature.       |
| `failureSignal` | string   | Human-readable failure category shown in CI logs and PR status.                    |
| `dependsOn`     | string[] | Prior gates that must succeed before execution.                                    |

**Lifecycle**:

1. Queued by workflow trigger.
2. Executes canonical command.
3. Produces pass/fail status and logs.
4. Blocks merge if unsuccessful.

---

### 3. Documentation Verification Profile

| Field               | Type     | Description                                                                                   |
| ------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `scriptCommand`     | string   | Primary docs validation command, expected to be rooted in the existing Python link validator. |
| `formatCommand`     | string   | Prettier-based check covering markdown and adjacent textual config surfaces.                  |
| `coveredPaths`      | string[] | Documentation paths that must be validated by the profile.                                    |
| `offlineOnly`       | boolean  | Must remain `true`; no external fetches during docs verification.                             |
| `failsOnBrokenLink` | boolean  | True when any unresolved internal link must fail CI.                                          |

**Relationships**:

- Used by the CI gate `docs-check`.
- Covers `CoverageMatrixDocument` and `ContinuityRunbook`.

---

### 4. Coverage Matrix Entry

| Field                    | Type   | Description                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------------- |
| `surfaceName`            | string | Public export name from `src/public-contract.ts`.                         |
| `surfaceKind`            | enum   | `function`, `type`, `documented-gap`, or `auxiliary-surface`.             |
| `status`                 | enum   | `stable`, `beta`, `backlog`, or `fora-do-escopo`.                         |
| `roadmapPhase`           | string | Phase reference from the roadmap, e.g. `Fase 5`, `Fase 6`, `Fase 8`.      |
| `documentationReference` | string | Primary document that explains the capability or gap.                     |
| `testEvidence`           | enum   | `contract-and-integration`, `unit-only`, `documentation-only`, or `none`. |
| `notes`                  | string | Short justification for status assignment.                                |

**Rules**:

- Every export in `DOCUMENTED_SURFACE` must appear exactly once.
- Entries with `testEvidence = unit-only` must use `status = beta`.
- Roadmap-only items with no public export may still appear as `documented-gap`.

---

### 5. Example Script Descriptor

| Field                  | Type     | Description                                                                       |
| ---------------------- | -------- | --------------------------------------------------------------------------------- |
| `id`                   | string   | Stable identifier such as `nfe-authorize-example`.                                |
| `path`                 | string   | Repository path under `examples/`.                                                |
| `flow`                 | enum     | `nfe-authorization`, `recipient-manifestation`, `xsd-validation`, or future flow. |
| `requiresBuild`        | boolean  | Must be `true` because examples consume the compiled local package.               |
| `requiresCredentials`  | boolean  | Indicates whether the example needs homologation credentials/certificates.        |
| `environmentVariables` | string[] | Variables documented in the script header.                                        |
| `usesRootImport`       | boolean  | Must be `true`; examples import from `nfe-sdk`.                                   |
| `ciExecuted`           | boolean  | Must be `false` for external-credential examples in this phase.                   |

**Relationships**:

- References one or more `CoverageMatrixEntry` items as example evidence.
- May be cited from `README.md` and `docs/index.md`.

---

### 6. Continuity Runbook

| Field                      | Type                       | Description                                                     |
| -------------------------- | -------------------------- | --------------------------------------------------------------- |
| `path`                     | string                     | Planned location under `docs/runbooks/`.                        |
| `audience`                 | enum                       | `integrator` for this phase.                                    |
| `sections`                 | ContinuityRunbookSection[] | Ordered operational sections.                                   |
| `documentsRuntimeBoundary` | boolean                    | Must be `true`; the runbook separates tooling from runtime API. |
| `includesCommandExamples`  | boolean                    | Must be `true`.                                                 |

#### Continuity Runbook Section

| Field                  | Type     | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `name`                 | string   | Section title such as `Importação`, `Exportação`, `Recuperação`.            |
| `purpose`              | string   | Operational reason for the step.                                            |
| `preservesFiscalState` | boolean  | Whether the documented flow preserves previously obtained fiscal state.     |
| `exampleCommands`      | string[] | Commands or command-like examples shown to the user.                        |
| `expectedOutcome`      | string   | Observable result of following the documented flow.                         |
| `notes`                | string   | Boundary notes, including when a flow returns a document to editable state. |

**Rules**:

- Must clearly distinguish import/export/recovery from runtime API execution.
- Must not require shipping a new CLI or recovery script in this phase.

---

## Relationships Overview

```text
CI Workflow Definition
├── CIGateDefinition (build)
├── CIGateDefinition (lint)
├── CIGateDefinition (typecheck)
├── CIGateDefinition (test)
└── CIGateDefinition (docs-check)
    └── Documentation Verification Profile

Coverage Matrix Entry
├── references publicPackageContract documentedSurface
├── references documentation evidence
└── references test evidence

Example Script Descriptor
├── consumes built root import `nfe-sdk`
└── supports Coverage Matrix Entry evidence

Continuity Runbook
└── documents operational support flows without expanding runtime surface
```

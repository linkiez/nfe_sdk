# Contract: Documentation Deliverables

## Purpose

Define the minimum documentation outputs that this feature must produce in `docs/` so planning, implementation, and review all validate the same artifact contract.

## Required Deliverables

### 1. `docs/index.md`

- Must be the primary entry point for the documentation set.
- Must link to all thematic dossiers and to the NFC-e UF matrix.
- Must summarize scope, research date, source policy, and known coverage gaps.

### 2. `docs/nfe/*.md`

- Must capture the current effective NFe emission flow.
- Must list primary sources and any secondary supplements separately.
- Must include required SDK capabilities, recent relevant changes, and known gaps.

### 3. `docs/nfce/*.md`

- Must capture the current effective NFC-e flow at the national level.
- Must reference the dedicated UF matrix.
- Must distinguish nationally shared rules from UF-specific deviations.

### 4. `docs/manifestacao-destinatario/*.md`

- Must capture recipient-manifestation flows, event types, prerequisites, and traceable sources.
- Must identify certificate-gated or otherwise restricted official surfaces when encountered.

### 5. `docs/nfce/uf-matrix.md`

- Must contain one entry per UF.
- Each UF entry must state coverage status, sources consulted, state-specific deltas if any, and unresolved gaps.

## Required Sections Per Thematic Dossier

Each thematic dossier must include:

1. Scope
2. Current effective state
3. Recent relevant changes
4. Required SDK capabilities
5. Primary sources
6. Secondary sources, if any
7. Known gaps and open risks

## Validation Expectations

- Every deliverable path above must exist.
- Every requirement claim must point to at least one source record or explicitly note a gap.
- Secondary sources must never appear mixed into the primary-source list.
- The NFC-e matrix must cover all 27 UFs.
# Contract: Feature Catalog Deliverables

## Purpose

Define the minimum outputs for the project feature catalog so planning, implementation, and review all validate the same public-facing documentation contract.

## Required Deliverables

### 1. `docs/capacidades-sdk.md`

- Must be the primary entry point for the project-wide feature catalog.
- Must be the canonical source for the catalog in this phase.
- Must organize entries around user-visible SDK capabilities.
- Must include a separate section for cross-cutting capabilities such as generation, normalization, and compatibility.
- Must use hybrid granularity, keeping major entries broad and capturing relevant subcapabilities in scope text or linked dossiers.

### 2. `docs/index.md`

- Must link to the project-wide feature catalog.
- Must preserve links to the existing NFe, NFC-e, Manifestacao do Destinatario, and NFC-e UF artifacts.
- Must make clear that the feature catalog is the adoption-oriented summary, while thematic dossiers remain detailed evidence sources.

### 3. Domain capability support sections

- Existing capability dossiers, now reflected in `docs/capacidades-sdk.md` and canonical roadmap annexes, must remain aligned with the final feature classification.
- They must continue to distinguish confirmed facts, gaps, and operational prerequisites.

### 4. NFC-e UF linkage

- The main catalog must link to `docs/roadmap/ufs-ambientes.md` instead of duplicating per-UF detail inline.
- The linked matrix remains the authoritative place for state-specific deltas, coverage gaps, and operational notes.

## Required Sections Per Feature Entry

Each catalog entry must include:

1. Feature name
2. User value summary
3. Covered domains or flows
4. Current status (`confirmed`, `partial`, `externally-dependent`, or `future`)
5. Impact type
6. Primary evidence source or explicit gap
7. Operational enablement notes when applicable

## Validation Expectations

- Every feature entry must point to at least one evidence source or an explicit gap declaration.
- Confirmed features must correspond to stable public-contract behavior of the package.
- Features with certificates, credenciamento, or restricted access must distinguish SDK capability from operational enablement.
- The catalog must keep NFC-e state variation in the linked UF matrix rather than flattening it into the primary list.
- The project-wide catalog and the detailed dossiers must not contradict one another on feature status.
- The deliverable set remains documentation-only in this phase and must not require an additional JSON, YAML, or similar structured catalog artifact.

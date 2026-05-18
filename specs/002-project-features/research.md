# Research: Especificacao das Features do Projeto

## Decision 1: Use a user-visible feature catalog as the primary organizing model

- **Decision**: Organize the project feature catalog around capabilities visible to SDK consumers, and keep generator, normalization, and compatibility capabilities in a dedicated cross-cutting section.
- **Rationale**: The clarified specification prioritizes quick discoverability for integrators and maintainers. A user-visible catalog makes adoption decisions easier, while a separate cross-cutting section preserves the generator behavior that materially affects package consumers.
- **Alternatives considered**:
  - Organize only by fiscal domain: rejected because core package capabilities such as generation and normalization would be hidden.
  - Organize only by technical artifact family: rejected because it weakens the user-facing value of the catalog.

## Decision 2: Reserve confirmed support for stable public-contract features only

- **Decision**: Mark a feature as confirmed only when it is already stable as a public package contract; classify everything else as partial, externally dependent, or future.
- **Rationale**: The repository mixes generated output, documentation, and evolving domain research. This stricter threshold prevents the feature catalog from overstating support based solely on generated presence or internal implementation details.
- **Alternatives considered**:
  - Treat any generated artifact as confirmed support: rejected because schema presence alone does not prove stable package support.
  - Treat README or dossier mention as sufficient confirmation: rejected because that would blur documentation intent with contract stability.

## Decision 3: Model NFC-e as one primary feature with per-UF variation in an auxiliary matrix

- **Decision**: Keep NFC-e coverage as a single primary catalog feature and reference a linked per-UF matrix for state-specific deltas, gaps, and operational dependencies.
- **Rationale**: This preserves a readable top-level catalog while respecting the real complexity of state-level variation. It also aligns with the existing dossier structure, where `docs/nfce/uf-matrix.md` already acts as the scalable place for UF detail.
- **Alternatives considered**:
  - One feature per UF: rejected because the main catalog would become too large and repetitive.
  - No per-UF representation in the specification: rejected because it would hide a material adoption risk.

## Decision 4: Separate SDK capability from operational enablement

- **Decision**: For features affected by certificates, credenciamento, or restricted official access, document SDK capability separately from the operational prerequisites needed for real-world usage.
- **Rationale**: Some fiscal flows, especially Manifestacao do Destinatario and parts of NFC-e, have access constraints that do not invalidate modeling or generator support. The catalog must therefore distinguish what the package can represent from what an operator still needs to enable externally.
- **Alternatives considered**:
  - Mark all restricted flows as future work: rejected because that would hide implemented or modeled package value.
  - Collapse all restricted flows into partial support with no further distinction: rejected because it loses the operational nuance needed for adoption.

## Decision 5: Require one primary evidence source or an explicit gap for every catalog entry

- **Decision**: Each feature entry must point to at least one primary repository evidence source, such as README guidance, generated layout, maintained code, or consolidated dossiers, or explicitly declare a current evidence gap.
- **Rationale**: The clarified spec needs to remain auditable without imposing unnecessary proof burden. One primary evidence source keeps the catalog grounded and reviewable while still allowing honest declaration of unresolved gaps.
- **Alternatives considered**:
  - Require multiple evidence sources for every feature: rejected because it adds friction without proportionate planning value.
  - Allow unsupported catalog entries with only a general source section: rejected because it weakens traceability and reviewability.

## Decision 6: Design implementation around documentation updates, not generator changes

- **Decision**: Phase 1 design should target documentation-facing artifacts that unify existing evidence instead of changing `tools/`, `src/`, or `xsd/` during planning.
- **Rationale**: The current feature is about defining and structuring project capabilities. The most direct implementation path is to produce or update catalog documentation linked to existing dossiers, deferring any runtime or generator changes to later backlog items.
- **Alternatives considered**:
  - Couple the feature catalog to immediate generator refactoring: rejected because it expands scope beyond specification and planning.
  - Keep the work inside `specs/` only with no intended documentation output: rejected because the catalog is meant to guide real adopters of the repository.

## Decision 7: Keep `docs/capacidades-sdk.md` as the canonical catalog source

- **Decision**: Use `docs/capacidades-sdk.md` as the canonical project-wide catalog, with `docs/index.md` as navigation and thematic dossiers as supporting evidence.
- **Rationale**: The clarified specification prefers one authoritative catalog entry point for adoption decisions while preserving existing dossiers as detailed evidence. This reduces ambiguity over where maintainers and integrators should look first.
- **Alternatives considered**:
  - Split canonical responsibility across multiple docs files: rejected because it weakens reviewer confidence and makes adoption slower.
  - Keep the canonical catalog only under `specs/`: rejected because the result must be visible in repository documentation, not just planning artifacts.

## Decision 8: Keep the feature documentation-only in this phase

- **Decision**: Do not require any JSON, YAML, or equivalent structured feature catalog output in this phase.
- **Rationale**: The current goal is to establish a human-readable, evidence-backed capability model. Adding a machine-consumable artifact now would increase maintenance cost and create a new surface that the spec explicitly excludes from scope.
- **Alternatives considered**:
  - Add an optional structured file as a sidecar: rejected because it still introduces synchronization overhead without current product value.
  - Make a structured output mandatory: rejected because it expands the scope beyond clarification and documentation.

## Decision 9: Use hybrid catalog granularity

- **Decision**: Keep broad top-level feature entries in the canonical catalog and describe relevant subcapabilities or flows in the entry scope or linked dossiers.
- **Rationale**: This preserves fast scanning for integrators while still enabling backlog derivation and compatibility analysis. It also matches the existing repository evidence, which is organized by dossier and domain rather than by many tiny flow-specific artifacts.
- **Alternatives considered**:
  - Use only broad domain-level entries: rejected because it hides operationally relevant gaps and reduces planning value.
  - Use one feature per flow: rejected because it would overinflate the catalog and duplicate evidence across related capabilities.

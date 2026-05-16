# Data Model: Pesquisa e Consolidacao de Documentacao SEFAZ

## SourceRecord

- **Purpose**: Represents a single consulted source used to justify a requirement or dossier section.
- **Fields**:
  - `id`: Stable identifier for cross-reference inside the documentation set.
  - `title`: Human-readable source title.
  - `url`: Public source location or local archived path.
  - `sourceType`: `primary` or `secondary`.
  - `domain`: `nfe`, `nfce`, `manifestacao-destinatario`, or `shared`.
  - `jurisdiction`: `national` or a UF code.
  - `publicationDate`: Source publication or revision date when available.
  - `accessedAt`: Research access date.
  - `accessNotes`: Notes about restrictions, certificate requirements, or extraction limitations.
- **Relationships**:
  - Referenced by `RequirementRecord`, `ThematicDossier`, and `UfCoverageEntry`.

## RequirementRecord

- **Purpose**: Represents one capability, rule, or operational expectation inferred from the researched material.
- **Fields**:
  - `id`: Stable requirement identifier.
  - `title`: Short statement of the requirement.
  - `description`: Detailed summary in repository language.
  - `domain`: `nfe`, `nfce`, `manifestacao-destinatario`, or `shared`.
  - `status`: `confirmed-primary`, `supplemented-secondary`, or `gap`.
  - `sdkImpact`: Summary of how the SDK may need to respond in future work.
  - `currentState`: Whether the requirement belongs to the current effective rule set.
  - `recentChangeSummary`: Optional summary of recent technical-note deltas.
- **Relationships**:
  - Links to one or more `SourceRecord` items.
  - Aggregated into `ThematicDossier` sections.

## ThematicDossier

- **Purpose**: Represents a final Markdown deliverable for one major topic.
- **Fields**:
  - `slug`: File/directory identifier.
  - `title`: Display title.
  - `domain`: `nfe`, `nfce`, `manifestacao-destinatario`, or `index`.
  - `summary`: Short overview of scope.
  - `requiredSections`: Ordered list of mandatory sections.
  - `coverageStatus`: Summary of completeness and gaps.
- **Relationships**:
  - Contains many `RequirementRecord` items.
  - References many `SourceRecord` items.
  - May embed or reference many `UfCoverageEntry` items.

## UfCoverageEntry

- **Purpose**: Represents the status of NFC-e documentation coverage for one UF.
- **Fields**:
  - `uf`: Two-letter federation unit code.
  - `status`: `covered`, `covered-no-specific-delta`, `partial`, or `blocked`.
  - `serviceNotes`: Notes on state-specific emission, authorization, contingency, or events.
  - `primarySources`: List of primary-source identifiers.
  - `secondarySources`: List of secondary-source identifiers.
  - `gaps`: Outstanding uncertainties or unavailable official references.
  - `lastVerifiedAt`: Most recent verification date.
- **Relationships**:
  - Belongs to the NFC-e matrix deliverable.
  - References `SourceRecord` items.

## ChangeNote

- **Purpose**: Captures recent relevant changes that remain important for SDK planning.
- **Fields**:
  - `id`: Stable identifier.
  - `title`: Technical note or change title.
  - `effectiveScope`: Affected flow, schema, or operational rule.
  - `impactSummary`: Why the change still matters.
  - `supersedesOrUpdates`: Optional note on replaced versions.
- **Relationships**:
  - Referenced by `RequirementRecord` and `ThematicDossier`.
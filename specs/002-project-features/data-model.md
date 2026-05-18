# Data Model: Especificacao das Features do Projeto

## FeatureCatalogEntry

- **Purpose**: Represents one user-visible or cross-cutting project feature recorded in the catalog.
- **Fields**:
  - `id`: Stable identifier for the feature entry.
  - `name`: Short, user-readable feature name.
  - `category`: `user-visible` or `cross-cutting`.
  - `domains`: One or more of `shared`, `nfe`, `nfce`, or `manifestacao-destinatario`.
  - `summary`: Concise statement of user value.
  - `scope`: What the repository currently covers for this feature.
  - `subcapabilities`: Optional list of important flows, subcapabilities, or linked dossier anchors captured under the same top-level feature entry.
  - `status`: `confirmed`, `partial`, `externally-dependent`, or `future`.
  - `impactType`: `documentation`, `generated-artifacts`, `normalization`, `public-contract`, or `planning`.
  - `operationalEnablement`: Optional summary of external prerequisites for real-world usage.
  - `gaps`: Explicit unresolved limitations or ambiguities.
- **Relationships**:
  - Links to one or more `EvidenceSource` items.
  - Links to zero or more `OperationalPrerequisite` items.
  - May link to one `UfCoverageMatrixReference` when the feature depends on per-UF variation.

## CatalogDocumentationBoundary

- **Purpose**: Records the delivery constraint that the feature catalog remains documentation-only in this phase.
- **Fields**:
  - `canonicalPath`: Canonical repository path for the project-wide catalog.
  - `navigationPath`: Repository path used as the main documentation entry point.
  - `structuredArtifactRequired`: Always `false` in this phase.
  - `notes`: Clarifies that thematic dossiers are supporting evidence rather than competing canonical sources.
- **Relationships**:
  - Applies to the overall feature catalog, not to individual feature entries.

## EvidenceSource

- **Purpose**: Captures the main repository artifact that supports or limits a feature entry.
- **Fields**:
  - `id`: Stable identifier for evidence tracking.
  - `kind`: `readme`, `generated-layout`, `maintained-code`, `dossier`, `spec`, or `gap`.
  - `pathOrReference`: Repository path or explicit gap reference.
  - `description`: Short explanation of what the evidence proves.
  - `confidence`: `primary`, `supplementary`, or `gap`.
- **Relationships**:
  - Belongs to one or more `FeatureCatalogEntry` items.

## OperationalPrerequisite

- **Purpose**: Represents an external condition required to use a feature in production or against official services.
- **Fields**:
  - `id`: Stable identifier.
  - `type`: `certificate`, `credenciamento`, `state-access`, `restricted-portal`, or `other`.
  - `description`: Human-readable prerequisite explanation.
  - `appliesTo`: Linked feature identifiers.
  - `sourceReference`: Evidence or dossier entry describing the prerequisite.
- **Relationships**:
  - Can apply to many `FeatureCatalogEntry` items.

## UfCoverageMatrixReference

- **Purpose**: Links the main NFC-e feature entry to a structured per-UF breakdown.
- **Fields**:
  - `path`: Repository path to the auxiliary matrix.
  - `coverageMode`: `linked-matrix`.
  - `notes`: Summary of why per-UF detail is externalized.
- **Relationships**:
  - Referenced by the NFC-e primary `FeatureCatalogEntry`.

## CompatibilityImpact

- **Purpose**: Describes whether a feature affects public package contracts, generated output, or only internal planning.
- **Fields**:
  - `id`: Stable identifier.
  - `impactType`: `none`, `documentation-only`, `internal`, or `potential-breaking`.
  - `affectedSurface`: Export paths, generated identifiers, dossier structure, or backlog only.
  - `migrationNoteRequired`: Boolean flag for future implementation work.
- **Relationships**:
  - Associated with one `FeatureCatalogEntry`.

# Data Model: Roadmap Gap Audit

## Audit Scope

Represents the explicit boundary of the audit execution.

| Field                      | Type       | Description                                                                                 |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| `formalSpecIds`            | `string[]` | Ordered formal targets of the audit. Fixed to `001` through `008`.                          |
| `contextSpecIds`           | `string[]` | Downstream specs used only to avoid duplicate gap classification. Fixed to `009` and `010`. |
| `officialCorpusRoots`      | `string[]` | Repository paths used as normative baseline.                                                |
| `excludedPromotionTargets` | `string[]` | Paths that must not receive immediate promotion of audit artifacts, notably `docs/`.        |

## Coverage Matrix Row

Represents one auditable intersection between a spec and an official capability cluster.

| Field              | Type       | Description                                                                |
| ------------------ | ---------- | -------------------------------------------------------------------------- |
| `specId`           | `string`   | Formal spec identifier from `001` to `008`.                                |
| `topicId`          | `string`   | Thematic category or roadmap topic under evaluation.                       |
| `coverageStatus`   | `enum`     | One of `covered`, `partial`, `deferred`, `missing`, `resolved-downstream`. |
| `summary`          | `string`   | Short explanation of the coverage judgment.                                |
| `primarySourceIds` | `string[]` | Primary source references supporting the classification.                   |
| `contextSpecIds`   | `string[]` | Optional downstream specs used to avoid duplication.                       |
| `notes`            | `string`   | Provenance, fragmentation or access notes when needed.                     |

## Gap Finding

Represents a distinct gap surfaced by the audit.

| Field              | Type       | Description                                                                                        |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------- |
| `gapId`            | `string`   | Stable identifier for cross-reference across artifacts.                                            |
| `title`            | `string`   | Concise gap title.                                                                                 |
| `category`         | `enum`     | One of `runtime`, `documentation`, `state`, `external-dependency`, `provenance`, `deferred-scope`. |
| `topicId`          | `string`   | Roadmap-aligned topic grouping for the gap.                                                        |
| `description`      | `string`   | Observable deficiency or ambiguity.                                                                |
| `affectedSpecIds`  | `string[]` | Specs from `001` to `008` impacted by this finding.                                                |
| `primarySourceIds` | `string[]` | Normative references that justify the finding.                                                     |
| `sourceConfidence` | `enum`     | One of `high`, `medium`, `low`, `incomplete`.                                                      |
| `downstreamStatus` | `enum`     | One of `not-addressed`, `resolved-downstream`, `partially-addressed-downstream`.                   |

## Provenance Link

Represents the traceability edge between a claim and the supporting source.

| Field            | Type     | Description                                                                |
| ---------------- | -------- | -------------------------------------------------------------------------- |
| `claimId`        | `string` | Coverage row or gap identifier being justified.                            |
| `sourcePathOrId` | `string` | Registry ID or repository path to the supporting source.                   |
| `sourceKind`     | `enum`   | One of `primary`, `secondary`, `registry`, `context-spec`.                 |
| `usageMode`      | `enum`   | One of `normative`, `contextual`, `non-duplicative`, `uncertainty-marker`. |
| `note`           | `string` | Why this source is relevant and any boundary on its use.                   |

## Priority Recommendation

Represents the ranking logic applied to a gap.

| Field               | Type     | Description                                                                                          |
| ------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `gapId`             | `string` | Linked gap identifier.                                                                               |
| `priorityBand`      | `enum`   | One of `blocker`, `next-slice`, `medium-term`, `watchlist`.                                          |
| `operationalImpact` | `enum`   | One of `high`, `medium`, `low`.                                                                      |
| `normativeRisk`     | `enum`   | One of `high`, `medium`, `low`.                                                                      |
| `effortSignal`      | `enum`   | One of `low`, `medium`, `high`, `unknown`. Secondary only.                                           |
| `recommendedAction` | `enum`   | One of `new-runtime-slice`, `doc-deepening`, `editorial-followup`, `state-research`, `monitor-only`. |
| `rationale`         | `string` | Why the item received this rank.                                                                     |

## Relationships

- One `Audit Scope` governs many `Coverage Matrix Row` records.
- One `Coverage Matrix Row` may produce zero or many `Gap Finding` records.
- Each `Gap Finding` must have one or more `Provenance Link` entries.
- Each `Gap Finding` should have exactly one `Priority Recommendation` in the backlog artifact.
- `resolved-downstream` rows may reference `009` or `010`, but those specs never replace a primary source link for normative conclusions.

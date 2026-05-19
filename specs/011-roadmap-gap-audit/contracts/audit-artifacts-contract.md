# Contract: Audit Artifacts

## Purpose

Define the minimum contract for the three artifacts produced by the roadmap gap audit so they remain mutually consistent and reviewable.

## Artifact 1: Coverage Matrix

**Recommended filename**: `coverage-matrix.md`

### Mandatory columns

| Column               | Meaning                                                               |
| -------------------- | --------------------------------------------------------------------- |
| `Spec`               | Formal spec ID from `001` to `008`                                    |
| `Topic`              | Roadmap-aligned topic under comparison                                |
| `Status`             | `covered`, `partial`, `deferred`, `missing`, or `resolved-downstream` |
| `Primary Sources`    | Registry IDs or repository paths for normative support                |
| `Downstream Context` | Optional `009` or `010` note when used only to avoid duplication      |
| `Notes`              | Provenance, access or fragmentation remarks                           |

### Contract rules

- Every row must reference one audited spec from `001` to `008`.
- `resolved-downstream` can appear only with an explicit `Downstream Context` note.
- A row cannot cite a secondary source as the sole normative justification.

## Artifact 2: Gap Report

**Recommended filename**: `gap-report.md`

### Mandatory fields per gap

- `Gap ID`
- `Title`
- `Category`
- `Affected specs`
- `Why this is a gap`
- `Primary source links`
- `Provenance boundary`
- `Downstream status`

### Contract rules

- Each gap must be traceable back to at least one matrix row.
- Each gap must state whether it is a runtime gap, documentary gap, state gap, external dependency, provenance gap or deliberate deferment.
- If source evidence is incomplete, the gap must say so explicitly instead of inferring closure.

## Artifact 3: Prioritized Backlog

**Recommended filename**: `prioritized-backlog.md`

### Mandatory columns

| Column               | Meaning                                                |
| -------------------- | ------------------------------------------------------ |
| `Rank`               | Ordered backlog position                               |
| `Gap ID`             | Cross-reference to the gap report                      |
| `Priority Band`      | `blocker`, `next-slice`, `medium-term`, or `watchlist` |
| `Operational Impact` | High, medium or low                                    |
| `Normative Risk`     | High, medium or low                                    |
| `Effort Signal`      | Secondary estimate only                                |
| `Recommended Action` | Suggested follow-up type                               |
| `Rationale`          | Why this item has this rank                            |

### Contract rules

- Backlog ordering must prefer operational impact and normative risk over effort.
- Effort cannot be the only justification for a top-ranked item.
- Items already addressed in `009` or `010` may remain in the backlog only if the note explains why downstream work does not fully close the audited gap.

## Cross-artifact invariants

- Every backlog item must reference a gap report entry.
- Every gap report entry must trace back to a coverage matrix row.
- Every artifact must stay inside `specs/011-roadmap-gap-audit/` during this phase.
- Promotion to `docs/` is out of scope for this contract.

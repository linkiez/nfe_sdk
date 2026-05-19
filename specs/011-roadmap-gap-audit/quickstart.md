# Quickstart: Roadmap Gap Audit

## Goal

Produce and review the three audit artifacts for feature 011:

1. Coverage matrix for specs `001` to `008`
2. Gap report derived from the official corpus
3. Prioritized backlog ranked by operational impact and normative risk

## Inputs

- Formal spec scope:
  - `specs/001-research-sefaz-docs/spec.md`
  - `specs/002-project-features/spec.md`
  - `specs/003-public-package-contract/spec.md`
  - `specs/004-iniciar-sdk/spec.md`
  - `specs/005-add-digital-signing/spec.md`
  - `specs/006-add-soap-transport/spec.md`
  - `specs/007-nfe-operational-mvp/spec.md`
  - `specs/008-recipient-dfe-mvp/spec.md`
- Downstream non-duplication context:
  - `specs/009-generic-event-mvp/spec.md`
  - `specs/010-nfce-national-core/spec.md`
- Normative baseline:
  - `docs/ROADMAP.md`
  - `docs/matriz-tematica-roadmap.md`
  - `docs/_meta/source-registry.md`
  - `docs/documentos-oficiais-portal-nfe.md`
  - `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/`

## Execution Flow

1. Read specs `001` through `008` and map their declared scope to the roadmap topics.
2. Read the official corpus registry and identify which themes are normatively covered in the repository.
3. Build the coverage matrix first.
4. Derive gaps only from the matrix and the official provenance links.
5. Mark any overlap with `009` or `010` as downstream context, not as formal closure of the audited scope.
6. Rank the backlog using operational impact and normative risk first.
7. Keep all three artifacts inside `specs/011-roadmap-gap-audit/`.

## Validation

Run the focused formatting check for the planning artifacts:

```bash
npx prettier --check specs/011-roadmap-gap-audit/*.md specs/011-roadmap-gap-audit/contracts/*.md .github/copilot-instructions.md
```

Optional broader repository checks remain available if the feature scope expands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

## Review Heuristics

- Do not collapse all findings into a single unsupported bucket.
- Do not infer missing official behavior when the source is fragmented or access-restricted.
- Do not let `009` or `010` erase a real gap in `001-008`; only use them to prevent duplicate backlog items.
- Do not promote the artifacts to `docs/` during this phase.

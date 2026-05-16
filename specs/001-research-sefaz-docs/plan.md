# Implementation Plan: Pesquisa e Consolidacao de Documentacao SEFAZ

**Branch**: `001-research-sefaz-docs` | **Date**: 2026-05-16 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/001-research-sefaz-docs/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/001-research-sefaz-docs/spec.md)

**Input**: Feature specification from `/specs/001-research-sefaz-docs/spec.md`

## Summary

Consolidar a documentacao oficial e complementar necessaria para NFe, NFC-e e manifestacao do destinatario em artefatos Markdown versionados no repositorio, usando um fluxo de pesquisa guiado por fontes oficiais, conversao com MarkItDown e organizacao final em um indice central com dossies tematicos e matriz por UF para NFC-e.

## Technical Context

**Language/Version**: TypeScript 6.x on Node.js >= 18.18 for repository tooling; Python 3.10+ for MarkItDown execution

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, xsd2ts, MarkItDown CLI/API, official NFe and NFC-e portal sources

**Storage**: Markdown files in `docs/`, planning artifacts in `specs/001-research-sefaz-docs/`, optional temporary local source files for conversion

**Testing**: Jest for any helper automation touched by implementation; focused smoke validation of generated Markdown structure and source traceability; repository validation with `npm run lint`, `npm run typecheck`, and `npm test`

**Target Platform**: Linux-based local development and CI environments with internet access, Node.js, npm, and Python available

**Project Type**: ESM npm package with documentation research and content-generation workflow

**Performance Goals**: Produce the full documentation set in a reproducible batch workflow without manual copy and paste, and keep final artifacts reviewable in standard Git diffs

**Constraints**: Primary-source-first research, complete NFC-e UF coverage, separation of primary and secondary sources, no package export changes in this feature, MarkItDown inputs must be sanitized and converted from controlled local files or streams

**Scale/Scope**: Central index plus thematic dossies for NFe, NFC-e, and manifestacao do destinatario, one NFC-e matrix covering all 27 UFs, and traceability across national manuals, technical notes, and state-level references

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Post-design re-check: PASS.

- ESM-only package impact is documented: no public `exports` or package entrypoints change in this feature; all outputs are repository documentation artifacts.
- Affected schema families and normalization rules are documented as unaffected in this feature; the work informs future schema and SDK changes but does not mutate generated `src/` output.
- Handwritten source boundaries are explicit: feature work is expected in `docs/`, `specs/001-research-sefaz-docs/`, and optionally `tools/` or `tests/` if automation is added; generated `src/` output remains untouched.
- Focused validation commands are identified: `npm run lint`, `npm run typecheck`, `npm test`, and repository-level artifact checks such as `find docs -maxdepth 2 -type f | sort` and spot checks for source attribution in generated Markdown.
- Release impact is captured as none for the npm package surface in this feature; any breaking SDK implications discovered during research are recorded as future work rather than implemented here.

## Project Structure

### Documentation (this feature)

```text
specs/001-research-sefaz-docs/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── documentation-deliverables.md
└── tasks.md
```

### Source Code (repository root)

```text
docs/
├── index.md
├── nfe/
├── nfce/
└── manifestacao-destinatario/

specs/
└── 001-research-sefaz-docs/

tools/
└── generate.ts

tests/
└── config/

xsd/

src/
├── classes/
├── enums/
├── interfaces/
├── types/
└── manifest.json
```

**Structure Decision**: Keep the existing single-package repository layout. The repository keeps original XML schemas in `xsd/` and generated TypeScript output in `src/`. This feature writes final artifacts to `docs/`, keeps planning artifacts in `specs/001-research-sefaz-docs/`, and only touches `tools/` or `tests/` if supporting automation becomes necessary.

## Complexity Tracking

No constitution violations are currently required.

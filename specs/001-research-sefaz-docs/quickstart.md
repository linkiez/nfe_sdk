# Quickstart: Pesquisa e Consolidacao de Documentacao SEFAZ

## 1. Prepare the repository

```bash
npm install
```

Use the repository structure as the local technical baseline during research: the original NFe schemas are stored in `xsd/`, and the generated TypeScript artifacts derived from them are stored in `src/`.

If implementation adds helper automation, validate repository tooling before and after changes:

```bash
npm run lint
npm run typecheck
npm test
```

## 2. Prepare a dedicated MarkItDown environment

Use an isolated Python environment for conversion tooling:

```bash
python -m venv .venv-markitdown
source .venv-markitdown/bin/activate
pip install 'markitdown[all]'
```

## 3. Collect trusted source material

- Start from official NFe and NFC-e portals.
- Prefer public manuals, notas tecnicas, informes tecnicos, XML schema references, FAQs, and state portals.
- Include official state resources when they materially help UF coverage, such as the Sao Paulo NFe portal overview page: https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Sobre.aspx
- When official material is incomplete, the following approved secondary repositories may be used as explicitly non-normative complementary references:
	- https://github.com/wmixvideo/nfe
	- https://github.com/nfephp-org/sped-nfe
	- https://github.com/nfewizard-org/nfewizard-io
	- https://github.com/lucashpmelo/node-mde
	- https://github.com/brasil-js/danfe
	- https://github.com/smart-fun/XmlToJson
- Download or snapshot the exact source files/pages that will be converted. The repository now exposes a helper for the tracked official sources:

```bash
npm run download:official-docs
```

- Archived files are written to `docs/_sources/official/` and the crawl manifest is written to `docs/_meta/official-download-manifest.json`.
- Record any certificate-gated or inaccessible page as a documented gap instead of bypassing it.
- Record every use of a secondary repository in the same research trail as the primary source gap it complements.

## 4. Convert controlled inputs to Markdown

Convert only trusted local files or validated streams:

```bash
markitdown local-source-file.pdf -o converted-source.md
```

For HTML or other formats, keep the original artifact and the converted Markdown traceable to the same source record.

## 5. Assemble final deliverables in `docs/`

Create or update:

- `docs/index.md`
- `docs/roadmap/topicos-oficiais.md`
- `docs/roadmap/portal-documentos-vigentes.md`
- `docs/roadmap/rtm-cobertura-oficial.md`
- `docs/roadmap/ufs-ambientes.md`

## 6. Validate the output set

Run repository validation when code or helper scripts changed:

```bash
npm run lint
npm run typecheck
npm test
```

Run artifact-level checks:

```bash
find docs -maxdepth 3 -type f | sort
grep -R "Primary sources\|Secondary sources\|Known gaps" docs
```

Current implementation note: the repository now uses Portuguese dossier headings, so this focused check is also useful:

```bash
grep -R "Fontes primarias\|Fontes secundarias\|Lacunas e riscos abertos\|Registro de Fontes" docs
```

## 7. Review before merge

- Confirm each dossier names the current effective state.
- Confirm recent relevant technical-note deltas are summarized, not historically expanded.
- Confirm all 27 UFs are represented in the NFC-e matrix.
- Confirm primary and secondary sources are clearly separated.
- Confirm every documented gap is explicit instead of silently inferred from missing official material.
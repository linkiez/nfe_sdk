# Quickstart: Pesquisa e Consolidacao de Documentacao SEFAZ

## 1. Prepare the repository

```bash
npm install
```

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
- Download or snapshot the exact source files/pages that will be converted.
- Record any certificate-gated or inaccessible page as a documented gap instead of bypassing it.

## 4. Convert controlled inputs to Markdown

Convert only trusted local files or validated streams:

```bash
markitdown local-source-file.pdf -o converted-source.md
```

For HTML or other formats, keep the original artifact and the converted Markdown traceable to the same source record.

## 5. Assemble final deliverables in `docs/`

Create or update:

- `docs/index.md`
- thematic NFe dossier files
- thematic NFC-e dossier files
- thematic manifestacao do destinatario dossier files
- `docs/nfce/uf-matrix.md`

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

## 7. Review before merge

- Confirm each dossier names the current effective state.
- Confirm recent relevant technical-note deltas are summarized, not historically expanded.
- Confirm all 27 UFs are represented in the NFC-e matrix.
- Confirm primary and secondary sources are clearly separated.
# Research: Pesquisa e Consolidacao de Documentacao SEFAZ

## Decision 1: Prioritize official portal documentation as the normative base

- **Decision**: Use the Portal Nacional da NF-e as the primary national source for NFe and Manifestacao do Destinatario research, using its public sections for `Documentos`, `Notas Tecnicas`, `Informes Tecnicos`, `Manuais`, `Esquemas XML`, and service pages. For NFC-e, use the national portal when extractable and complement with state portals for full UF coverage.
- **Rationale**: The official NFe portal publicly exposes the documentation categories needed for normative research and explicitly links to service, document, legislation, download, FAQ, and state-portal entry points. The manifestacao page indicates that some operational views require certificate access, so the planning workflow must rely on public documentation and note restricted areas when encountered.
- **Alternatives considered**:
  - Use only portal landing pages: rejected because they are insufficient for detailed feature mapping and UF coverage.
  - Use secondary summaries as the default source: rejected because the specification requires primary-source-first traceability.

## Decision 2: Model the deliverables as a documentation set, not a single consolidated file

- **Decision**: Produce an index in `docs/index.md`, thematic dossiers for NFe, NFC-e, and manifestacao do destinatario, and a dedicated NFC-e UF coverage matrix.
- **Rationale**: The clarified scope includes complete NFC-e coverage by UF. A single file would be difficult to review, hard to diff, and poor for traceability. A central index plus thematic files preserves navigability while allowing the per-UF matrix to scale.
- **Alternatives considered**:
  - One monolithic Markdown file: rejected because full NFC-e UF coverage would make it too long and hard to maintain.
  - Separate files without an index: rejected because reviewers would lose a stable entry point.

## Decision 3: Use MarkItDown as an isolated conversion tool, not as a direct remote fetcher

- **Decision**: Use MarkItDown through a dedicated Python 3.10+ environment, converting controlled local files or validated streams rather than giving it unrestricted remote targets.
- **Rationale**: MarkItDown supports HTML, PDF, XML, and other formats relevant to SEFAZ documentation, and its CLI/API fit the requested workflow. Its own security guidance warns that it performs I/O with current-process privileges and recommends using the narrowest conversion method needed, so the implementation should download or snapshot trusted sources first and then convert local content.
- **Alternatives considered**:
  - Manual copy and paste into Markdown: rejected because it is not reproducible.
  - Direct remote conversion with permissive URLs: rejected because it weakens input control and reproducibility.

## Decision 4: Treat secondary sources as explicitly labeled supplements

- **Decision**: Allow secondary sources only when primary material is incomplete, and always label them separately from normative references.
- **Rationale**: The clarified specification allows reliable secondary sources but requires preserving the distinction between normative facts and interpretive support. This prevents accidental elevation of non-official guidance into SDK requirements.
- **Alternatives considered**:
  - Ban secondary sources entirely: rejected because some portal paths are brittle or certificate-gated.
  - Mix primary and secondary references in one source list: rejected because it damages traceability.

## Decision 5: Focus on current rules with recent relevant changes only

- **Decision**: Document the current effective state for each flow and include only recent technical-note or version changes that materially affect implementation, migration, or compatibility.
- **Rationale**: The feature is intended to support SDK planning, not create a historical archive. Recent deltas remain important because they frequently explain current schema, validation, or event behavior.
- **Alternatives considered**:
  - Capture only the latest state with no recent history: rejected because migration-relevant deltas would be lost.
  - Capture broad historical lineage: rejected because it expands scope without clear implementation value.
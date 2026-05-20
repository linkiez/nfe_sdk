# Quickstart: Especificacao das Features do Projeto

## 1. Prepare the repository baseline

```bash
npm install
```

This feature plans a documentation-facing catalog for the existing ESM npm package. Use the current repository layout as the evidence base:

- `README.md` for package purpose, guarantees, scripts, and compatibility guidance
- `docs/capacidades-sdk.md` as the canonical catalog target
- `src/` for generated package surface and domain coverage hints
- `docs/` for consolidated NFe, NFC-e, Manifestacao do Destinatario, and NFC-e per-UF dossiers

## 2. Review the planned evidence sources

Before implementing the catalog, inspect the repository artifacts that will justify feature entries:

```bash
find docs -maxdepth 2 -type f | sort
find src -maxdepth 2 -type d | sort
```

Use the clarified specification to keep the classification consistent:

- confirmed support only for stable public-contract features
- per-feature evidence or explicit gap required
- operational enablement separated from SDK capability
- NFC-e per-UF differences linked through an auxiliary matrix
- no mandatory JSON or YAML sidecar in this phase
- hybrid granularity, with broad entries and linked subcapabilities

## 3. Draft or update the feature catalog deliverables

The intended implementation should produce or update:

- a canonical project-level feature catalog in `docs/capacidades-sdk.md`
- links from the existing documentation index
- evidence-backed domain feature summaries for NFe, NFC-e, and Manifestacao do Destinatario
- an explicit linkage to `docs/roadmap/ufs-ambientes.md`

## 4. Validate catalog consistency

Run focused artifact checks during implementation:

```bash
grep -R "suporte\|capacidade\|lacuna\|evidencia" docs specs/002-project-features
find specs/002-project-features -maxdepth 2 -type f | sort
```

Confirm that each feature entry includes:

- a user-facing summary
- broad feature scope with subcapabilities when relevant
- current state classification
- impact type
- at least one evidence source or explicit gap
- operational prerequisites only when needed

## 5. Run repository quality gates if maintained code changes

If implementation touches scripts, maintained TypeScript, or package metadata, run the full baseline:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
```

If the implementation remains documentation-only, keep the focused artifact checks above, confirm no unintended changes landed under `src/`, and ensure no structured sidecar catalog was introduced.

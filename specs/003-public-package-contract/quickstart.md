# Quickstart: Fundacao do Contrato Publico do Pacote

## 1. Confirm the current contract anchors

Before implementing the package foundation, inspect the files that currently define or describe the published surface:

```bash
cat package.json
sed -n '1,120p' src/index.ts
sed -n '1,160p' README.md
```

Use these checks to confirm the current mismatch between the broad root export and the intended minimal contract.

## 2. Redesign the root import deliberately

The goal of this feature is not only to describe the current root entrypoint, but to reshape it into a minimal public contract that can support later functional phases.

Keep these rules in mind:

- `package.json`/exports remains the normative contract source
- only the root import belongs to the stable public surface in this phase
- subpaths and generated trees stay outside the stable contract unless explicitly promoted
- `manifest.json` remains an internal audit artifact

## 3. Validate the published package, not only the workspace

Run the focused validation flow that proves the package can be distributed and consumed:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm pack
npm run validate:tarball
```

The `validate:tarball` command installs the generated tarball in a temporary consumer workspace and imports `nfe-sdk` through the published root entrypoint.

## 4. Audit manifest and generated coverage boundaries

Review `src/manifest.json` only as an internal audit input:

- identify generated families that remain outside the public contract
- record collisions, unstable areas, or publication gaps
- convert those findings into explicit backlog or compatibility notes

You can materialize the current audit report with:

```bash
npm run audit:public-contract
```

## 5. Finish with contract-focused review

Before moving to `/speckit.tasks`, confirm that:

- the redesigned root import is explicitly delimited
- the contract described in docs matches `package.json`/exports
- the tarball validation proves the root import is consumable
- no unintended subpath or generated artifact was silently promoted to public contract
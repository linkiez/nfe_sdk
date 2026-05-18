# Contract: Public Package Contract

## Purpose

Define the minimum public package contract that this feature must stabilize before later functional roadmap phases can build on top of it.

## Normative Contract Source

- `package.json`/exports is the normative definition of the public contract in this phase.
- The published root import is the only stable entrypoint covered by the minimum contract.
- README and planning docs explain the contract, but do not override the package metadata.

## Required Deliverables

### 1. Root entrypoint definition

- The package must expose one clearly defined root import.
- The root import may be redesigned in this phase to better support later functional slices.
- The final root import must be explicitly documented and validated.

#### Final root entrypoint for this phase

```ts
import { publicPackageContract } from 'nfe-sdk';
```

- `publicPackageContract` is the only documented stable export of the root entrypoint in this phase.
- The generated schema trees remain outside the stable root surface even though they continue to exist in the repository.

### 2. Minimal distribution set

- The published package contents must include only what is needed to support the root import and its contract documentation.
- The distribution must not silently promote generated subpaths or broad generated trees to stable public API.

#### Published files expected from this phase

- `dist/index.js`
- `dist/index.d.ts`
- `dist/public-contract.js`
- `dist/public-contract.d.ts`
- `README.md`

### 3. Tarball-based validation

- `npm pack` must succeed for the feature to be considered complete.
- A smoke validation must consume the generated tarball through the published root import.
- The smoke validation must not depend on importing directly from the open source workspace.

### 4. Manifest audit boundary

- `src/manifest.json` remains internal to validation and audit.
- Manifest findings may justify backlog, exclusions, or compatibility notes.
- Manifest contents must not be treated as public contract for external consumers in this phase.

## Repository Evidence

- `package.json#exports["."]` defines the normative root entrypoint.
- `src/index.ts` keeps the root contract separate from the generated tree.
- `src/public-contract.ts` defines the handwritten minimum contract published at the root.
- `README.md` explains the published root contract and its exclusions.

## Excluded Surface and Current Audit Findings

- Generated families under `src/classes/`, `src/interfaces/`, `src/types/`, and `src/enums/` remain internal inventory.
- `src/manifest.json` remains internal audit input.
- Current manifest evidence already records unresolved collisions, unpublished families, and sanitized-pattern retries in generated families such as `ConSitNFe`, `Evento_AtorInteressado_PL_v1.02`, `Evento_Averb_PL_v1.01`, and other generated folders listed by the manifest audit.

## Compatibility and Release Notes

- A future expansion beyond `publicPackageContract` at the root must be treated as a deliberate contract change.
- Promoting generated families or subpaths to public API requires a dedicated compatibility review.
- If the root contract changes incompatibly, the release must carry explicit migration guidance and semver impact notes before publication.

## Validation Expectations

- The contract described in docs must match the root import actually published by `package.json`/exports.
- Any redesign of the root import must be reflected in compatibility notes and release impact review.
- Generated artifact families that remain outside the public contract must be recorded explicitly rather than implied.
- The plan and later tasks must keep handwritten root entrypoint logic separate from generated tree ownership.

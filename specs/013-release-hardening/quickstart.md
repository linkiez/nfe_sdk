# Quickstart: Release Hardening

**Feature**: `013-release-hardening` | **Date**: 2026-05-19

This quickstart describes the minimum implementation flow for the release-hardening slice.
It focuses on repository automation, documentation, and onboarding artifacts without
changing the runtime API.

---

## 1. Prepare Repository Validation Commands

1. Update `package.json` to keep the existing canonical commands for `build`, `lint`,
   `typecheck`, and `test`.
2. Expand `format:check` so markdown coverage includes the current specs/docs surfaces that
   this slice touches.
3. Add or wire a canonical documentation-verification command that reuses the existing
   Python internal-link validator.

**Expected result**: local contributors can run one command for docs verification and reuse
exactly the same commands in CI.

---

## 2. Add the CI Workflow

1. Create `.github/workflows/ci.yml`.
2. Configure the workflow for `pull_request` and `push` on the repository default branch.
3. Execute the repository validation gates in order:
   - `npm ci`
   - `npm run build`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - documentation verification command

**Expected result**: every PR gets deterministic pass/fail feedback before merge, and the
workflow never publishes artifacts.

---

## 3. Build the Coverage Matrix

1. Use `src/public-contract.ts` as the export inventory.
2. Create `docs/roadmap/coverage-matrix.md` with one entry per exported surface.
3. Add roadmap-only lacunas that still matter for adoption visibility:
   - DANFE
   - DANFE NFC-e
   - QR Code
   - consulta por chave
   - recuperação pós-transmissão
4. Mark unit-only validated exports as `beta`.

**Expected result**: an integrator can inspect one document and understand current support
and deferred boundaries without reading the code.

---

## 4. Add Onboarding Examples

1. Create at least three example scripts under `examples/`.
2. Ensure every example imports from `nfe-sdk` and assumes a prior local build.
3. Document required environment variables at the top of each file.
4. Keep credential-dependent examples out of CI execution.

### Example local flow

```bash
npm ci
npm run build
npx tsx examples/validation/validate-xsd.ts
```

**Expected result**: examples validate the built public contract rather than private source
paths.

---

## 5. Add the Continuity Runbook

1. Consolidate continuity guidance in `docs/roadmap/proximas-iteracoes-recomendadas.md`.
2. Cover import, export, and recovery flows separately.
3. State clearly when a flow preserves fiscal state and when it returns material to an
   editable state.
4. Include command examples and expected outcomes.

**Expected result**: continuity support is visible to adopters without expanding the runtime
surface or introducing new executables.

---

## 6. Update Entry Docs

1. Update `README.md` with release-hardening navigation and example discovery.
2. Update `docs/index.md` to link the new coverage matrix and continuity runbook.
3. Keep the documentation language aligned with existing repository conventions.

**Expected result**: contributors and integrators can discover the new artifacts from the
existing entrypoints.

---

## 7. Validate Before Task Generation

Run the focused validation set after the feature is implemented:

```bash
npm run build
npm run lint
npm run typecheck
npm run test
npm run format:check
npm run docs:links
```

Optional packaged-root smoke check:

```bash
npm run validate:tarball
```

**Expected result**: the repository stays release-ready, docs stay internally consistent,
and the package root contract remains stable.

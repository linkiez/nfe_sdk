# Quickstart: Validate NF-e SP Production Authorization

This guide validates the contract with local fixtures and injected executors. It does not make a real production request.

## Prerequisites

- Node.js >=18.18 and npm dependencies installed (`npm ci`).
- No SEFAZ account, live credential, or production endpoint access is needed for these checks.

## Focused Scenarios

1. Resolve the production NF-e authorization service for authorizer `SP`; expect provider `SP` and endpoint `https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx`.
2. Resolve receipt retrieval for authorizer `SP`; expect endpoint `https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx`.
3. With a mocked request executor, submit one SP document and verify terminal authorized, rejected, unavailable, timeout, and protocol-error classifications map without changing homologation behavior.
4. Verify a missing or non-production response `tpAmb` is classified as a protocol error and never mapped to success, for both authorization and receipt responses.
5. Verify missing, malformed, conflicting, non-SP, and mixed-batch UF evidence blocks the executor call.
6. Return a mocked `received` response with `nRec`; call the existing `reconcileNFeReceipt` using SP/production context and verify pending and terminal receipt classifications. Assert that no automatic polling or resubmission occurs.
7. Verify the default executor is not accepted for production and that transport evidence contains no credential or private-key material.
8. Verify SVC-AN is not selected as a silent fallback for normal SP production.

## Commands

Run the focused routing and operational tests added by the feature, then the required package gates:

```bash
npm test -- --runInBand tests/unit/service-catalog.test.ts tests/unit/canonical/transport/uf-routing.test.ts tests/unit/nfe/authorize-nfe-contingency-boundaries.test.ts tests/unit/nfe-receipt-reconciliation.test.ts
npm test -- --runInBand
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run validate:tarball
npx prettier --check specs/025-nfe-sp-producao
```

The first command's feature-specific test paths must be updated if the implementation follows the repository's final test placement. No `npm run generate` is expected unless implementation changes an XSD-derived artifact; if so, regenerate and review generated diffs explicitly.

## Expected Result

All mocked scenarios pass, existing homologation tests remain green, and the public package validation succeeds. No live production transmission is performed.

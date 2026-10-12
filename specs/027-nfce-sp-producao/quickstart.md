# Quickstart: NFC-e SP Production Authorization

This guide defines deterministic validation for the production authorization slice. It does not authorize a live fiscal document or replace SEFAZ/SP issuer credentialing.

## Prerequisites

- Node.js `>=18.18` and npm dependencies installed.
- The repository's test fixtures, including deterministic signing material.
- No production certificate, CSC token, or live SEFAZ call is needed for automated tests; use an injected executor.

## Focused validation

Run the NFC-e unit, integration, and public facade contract tests:

```bash
npx jest --runInBand tests/unit/nfce tests/integration/nfce tests/contract/public-nfce-operational-facade.test.ts
```

Expected: tests pass without external network access. Coverage must include SP production authorized/rejected/pending/timeout/protocol-error responses, non-SP and mismatched-environment preflight boundaries, exact production endpoint selection, mTLS executor requirement, QR URL/access-key/environment correspondence, raw CSC non-disclosure, and a 17-digit protocol. Existing SP+PR homologation behavior must remain unchanged.

The production integration test validates the signed model 65 request XML with `validateNFeXsd` against the checked-in `nfe_v4.00.xsd`, then checks protocol parsing and response semantics. The repository does not contain a separate authorization-response XSD, so response envelopes are validated through their SOAP status and protocol assertions. No schema-derived output changes are expected.

## Delivery gates

```bash
npm test -- --runInBand
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run audit:public-contract
npm run validate:tarball
```

Expected: all commands succeed; root package import remains ESM-compatible and no new public import path is required.

## Manual production readiness (outside automated tests)

Before a real issuer rollout, an authorized integrator must independently verify SP production credentialing, certificate validity and client-TLS configuration, CSC provisioning, and endpoint availability. The SDK must be configured with a production mTLS-capable executor and the matching issuer's credentials. Start with an explicitly approved operational procedure; do not use a test fixture or automatic retry to submit a legally valid production NFC-e.

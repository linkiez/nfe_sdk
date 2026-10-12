# Quickstart: NF-e SP Production Contingency

## Prerequisites

- Node.js >=18.18 and dependencies installed with `npm install`.
- Use deterministic SOAP fixtures and an injected `RequestExecutor`; never use production SEFAZ endpoints with a real fiscal document as a test.
- Production integrations provide their own mTLS-capable executor and remain responsible for official activation, issuer credentials, and durable recovery records.

## Validation Scenarios

1. **Normal baseline**: submit the existing SP production authorization fixture with no contingency mode. Expect the same provider, endpoint, classification, and protocol behavior established by spec 025.
2. **SVC-AN activation**: mock SVC production status `107`, then authorization success. Expect one status request followed by one SVC-AN authorization using `tpEmis=6`; do not send if status is `113`, `114`, unknown, wrong-environment, or unavailable.
3. **No automatic fallback**: make normal SP authorization time out. Expect the timeout result only; no SVC status or authorization request occurs unless the caller makes a separate explicit SVC request.
4. **EPEC**: mock an accepted production EPEC event `110140`. Expect production `tpAmb=1`, SP-to-SVC-AN routing, event protocol, `awaiting-recovery`, an explicit later action, and the seven-day reconciliation guidance. Do not send the full NF-e in the same event call.
5. **EPEC recovery**: after simulated service restoration, explicitly submit the same 44-digit key with `tpEmis=4` through the normal SP authorizer. Verify `reconciled`, pending, rejected, unavailable, and inconclusive recovery outcomes remain distinct and correlate to the EPEC protocol, including when a known receipt is reconciled separately.
6. **FS-DA boundary**: request FS-DA for SP. Until official applicability is confirmed, expect an explicit assisted/unverified boundary and zero transport calls.
7. **Duplicate protection**: provide an uncertain normal attempt with a conflicting contingency document identity. Expect a pre-transport boundary; no retry or duplicate submission is implied.

## Commands

Run focused tests added for the changed facade and transport slices, then the full required gates:

```bash
npm test -- --runInBand
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run audit:public-contract
npm run validate:tarball
npx prettier --check specs/026-nfe-sp-contingencia/*.md specs/026-nfe-sp-contingencia/contracts/*.md
```

Run `npm run generate` only if implementation changes generated schema output.

# Quickstart: Validate NFC-e SP Offline Contingency

This guide defines the implementation validation path. It uses fixtures and an injected request executor; it does not transmit to a live SEFAZ endpoint.

## Prerequisites

- Node.js >=18.18 and dependencies installed with npm.
- The feature 028 offline DANFE contract accepts a signed record and renders a pending state with an offline QR Code.
- Offline XML fixtures represent SP model 65, `tpEmis=9`, both supported environments where applicable, and boundary/invalid cases.

## Focused behavior scenarios

1. Prepare a valid SP offline document with caller-provided calendar ID, IANA time zone, and consecutive evaluated dates. Verify the returned record is `pending-reconciliation`, preserves the evidence, exact signed XML, matching access key, and digest. Confirm the deadline is 23:59:59 on the first following business day, the operation made no network call, and it did not report authorization.
2. Reject an unsupported UF, wrong model/environment, invalid key/XML identity, missing/incomplete calendar evidence, a future deadline outside the evidence's first following business day, missing official contingency prerequisites, or an expired deadline without returning an authorized result.
3. Reconcile with fixture responses for direct authorization, intermediate receipt, rejection, unavailable service, timeout, mismatched identity, duplicate response, and inconclusive evidence. Verify each maps to a distinct status/action and remains associated with the original record.
4. Simulate duplicate responses and repeat attempts. Confirm one transport call per invocation, no automatic retry, preserved evidence, visible operator action, and no claim of cross-process replay prevention.
5. Verify normal `authorizeNFCe` behavior and classifications remain unchanged.
6. Render the offline DANFE fixture and assert it visibly identifies the pending contingency state without an authorization protocol claim.

## Commands

Run the focused offline Jest suite after implementation:

```bash
npm test -- --runInBand --testPathPatterns='nfce.*offline|offline.*nfce'
```

Run repository quality and package checks:

```bash
npx eslint src/canonical/nfce tests
npx prettier --check specs/029-nfce-sp-offline/**/*.md
npm run format:check
npm run typecheck
npm run build
npm test -- --runInBand
npm run audit:public-contract
npm run validate:tarball
npm run docs:links
```

## Expected outcomes

- Offline preparation produces only a pending record and signed XML; it never implies authorization.
- Only a correlated official authorization response transitions a record to `authorized`; pending DANFE output prints no protocol number.
- Receipt, rejection, unavailable, timeout, mismatch, duplicate, late, and ambiguous results remain explicit and retain caller-action information.
- Normal authorization behavior is unchanged, no test performs live production transport, and no offline record is silently dropped.
- Feature 028 owns both authorized and offline-pending DANFE output; this feature adds no competing renderer.

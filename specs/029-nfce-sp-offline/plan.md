# Implementation Plan: NFC-e SP Offline Contingency

**Branch**: `main` (feature branch not created) | **Date**: 2026-10-12 | **Spec**: [spec.md](./spec.md)

**Input**: [Feature specification](./spec.md)

## Summary

Plan an additive SP model 65 offline workflow using `tpEmis=9`: validate and sign the eligible XML locally, return an explicitly non-authorized offline record, and provide an explicit single-document reconciliation operation after connectivity returns. The caller supplies the business-day deadline because the SDK has no authoritative holiday calendar. The stateless SDK performs one attempt per call and leaves durable replay prevention to the caller. Existing authorization outcomes retain their current meanings.

The official sources confirm offline contingency is permitted in SP and give an XML transmission deadline of the end of the first following business day. Feature 028 owns the implemented DANFE renderer contract for signed offline records, pending notices, no authorization protocol, and the official offline QR Code v2 payload. Feature 029 consumes that contract and adds no competing renderer.

## Technical Context

**Language/Version**: TypeScript 6 strict, ESM, Node.js >=18.18.

**Primary Dependencies**: Existing `@xmldom/xmldom`, signing and SOAP transport modules; Jest 30, ESLint 9, Prettier 3, TypeScript 6. No new runtime dependency is anticipated.

**Storage**: None inside the SDK. The caller owns durable retention of signed XML, offline record, retry state, and response evidence.

**Testing**: Jest with offline XML fixtures and injected `RequestExecutor` responses; no live SEFAZ request. Validate focused tests, lint, format, typecheck, build, public contract, tarball, and docs links.

**Target Platform**: Node.js ESM consumers using SP NFC-e model 65.

**Project Type**: Published npm SDK.

**Performance Goals**: One document per explicit call; no background polling or multi-document recovery target.

**Constraints**: Preserve normal authorization behavior and public classifications. Never report an offline document as authorized. Enforce only requirements verified against current SP/national sources and applicable schemas. Require the caller to supply a deadline derived from its business calendar. Keep EPEC separate; it is not the offline `tpEmis=9` workflow. No automatic activation inference, persistent queue, background polling, cross-process replay guarantee, or competing DANFE renderer. QR v3 online behavior remains unchanged; offline DANFE uses the documented QR v2 payload.

**Scale/Scope**: SP only, one NFC-e per prepare/reconcile operation, caller-managed persistence and retry.

**Knowledge Sources**: Official sources and confirmed rules are recorded in [research.md](./research.md), consulted 2026-10-12. Confirmed schema constraints, the calendar-evidence boundary, and the implemented DANFE 028 integration are reflected in [contracts/public-nfce-sp-offline.md](./contracts/public-nfce-sp-offline.md).

## Constitution Check

_Gate evaluated before research and re-evaluated after design._

- **PASS**: ESM-only package; proposed additive APIs use the current root/canonical export chain. Existing authorization contract meanings remain unchanged.
- **PASS**: NFC-e model 65 schema family is identified. No generated XSD or output change is presumed; exact offline field constraints must be verified before implementing handwritten validation.
- **PASS**: Primary SP, CONFAZ, and Portal Nacional sources are documented separately from any non-normative observations in [research.md](./research.md).
- **PASS**: Runtime changes, if approved, belong in handwritten `src/canonical/nfce/` modules and root exports. No strict-type exception or generator change is planned.
- **PASS**: Focused Jest, lint, format, typecheck/build, package-contract, tarball, and docs-link checks are listed in [quickstart.md](./quickstart.md). No regeneration command is planned unless schema research proves a generated surface change is necessary.
- **PASS**: Proposed public APIs affect the npm package surface; implementation must update the public-contract audit and assess semantic-version impact.
- **PASS**: Feature 028 owns both authorized and offline-pending DANFE rendering; feature 029 uses its approved signed-record contract and does not add another renderer.

## Design Decisions

- Use a separate offline preparation/reconciliation contract rather than adding offline states to `NFCeAuthorizationOutcome` or changing `authorizeNFCe` semantics.
- Preparation accepts a caller-provided document and signing context, validates the SP/model/environment and confirmed offline XML rules, signs locally, and returns the signed XML plus a `pending-reconciliation` record. It performs no transport and makes no authorization claim.
- Reconciliation transmits the retained signed XML for one explicit attempt through the existing injected transport boundary. It returns a distinct offline status for authorized, rejected, receipt/intermediate, unavailable, or inconclusive results and preserves response evidence. A receipt is not authorization.
- The SDK does not persist records or guarantee cross-process idempotency. The record key is the NFC-e access key plus a digest of the signed XML; callers must retain attempt state durably and prevent concurrent/accidental replays. Every call performs one explicit transport attempt. Duplicate or ambiguous official responses remain visible and require explicit operator action; no response is silently treated as authorization.
- Use current official source/schema validation for `tpEmis=9`, `dhCont`, `xJust` length 15-256, SP/model 65 identity, `idDest=1`, `finNFe=1`, `indFinal=1`, `indPres=1`, timestamp, and caller-supplied deadline. Do not copy NF-e contingency behavior or invent a holiday calendar, sequence guarantee, or rejection-code interpretation.
- Treat expiry of the confirmed transmission deadline as an explicit operator-action boundary; do not silently discard the document or imply that a late submission is compliant.
- The offline auxiliary document is an integration dependency on feature 028, not a new renderer in this feature.

## Project Structure

### Documentation

```text
specs/029-nfce-sp-offline/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/
    └── public-nfce-sp-offline.md
```

### Source Code (proposed; implementation remains gated)

```text
src/
├── index.ts                              # Additive root exports
└── canonical/
    ├── index.ts                          # Canonical public exports
    └── nfce/
        ├── contracts.ts                  # Separate offline request/result types
        ├── prepare-nfce-sp-offline.ts    # Local validation, signing, record creation
        ├── reconcile-nfce-sp-offline.ts  # Explicit one-document transport/reconciliation
        └── index.ts                      # NFC-e public exports

tests/
└── existing NFC-e Jest tree              # Fixtures, outcome and public-contract coverage
```

**Structure Decision**: Extend the existing handwritten NFC-e runtime, reuse signing and transport utilities, and keep caller-owned persistence outside the SDK. Do not edit generated XSD-derived files unless the schema audit explicitly establishes a necessary change. The implementation and tests follow the existing NFC-e Jest tree.

## Complexity Tracking

No constitution exception or additional architecture layer is proposed. The feature 028 renderer mismatch is recorded as a blocking scope dependency rather than hidden with a second renderer or an incompatible authorization outcome change.

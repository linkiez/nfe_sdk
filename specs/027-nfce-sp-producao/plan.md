# Implementation Plan: NFC-e SP Production Authorization

**Branch**: `main` (feature branch `027-nfce-sp-producao` not created) | **Date**: 2026-10-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/027-nfce-sp-producao/spec.md`

## Summary

Extend the existing root `authorizeNFCe` operation to authorize one signed model 65 document through the normal São Paulo production NFC-e endpoint. Preserve the current SP+PR homologation behavior, keep production SP-only, and add the production SP route to the existing service catalog. Return the official synchronous authorization classification and, for an authorized document, a QR Code v3 URL composed from the same access key and environment. Production requires caller-provisioned signing, mutual-TLS transport, and CSC prerequisites; the SDK does not acquire credentials or silently fail over to SVC-AN.

## Technical Context

**Language/Version**: TypeScript 6.0.3 strict, ESM; Node.js >=18.18.

**Primary Dependencies**: Existing TypeScript, Jest 30, ESLint 9, Prettier 3, `@xmldom/xmldom`, `node-forge`, and `xml-crypto`; no new dependency expected.

**Storage**: None. Authorization and QR composition remain stateless.

**Testing**: Jest 30 with deterministic signed fixtures and injected `RequestExecutor`; no live SEFAZ transmission.

**Target Platform**: Node.js ESM consumers on supported Node.js versions.

**Project Type**: Published npm SDK/library with one root ESM export.

**Performance Goals**: Preserve the one-request synchronous authorization path and existing configured timeout; no polling or automatic retry.

**Constraints**: Production is SP-only and must use the official NFC-e model 65 endpoint, never the NF-e model 55 host or an implicit contingency provider. Validate issuer/document/environment/endpoint/signature coherence before transport. Production requires a caller-provided mTLS-capable `RequestExecutor`, SDK `SigningContext`, and CSC input for the requested authorization-plus-QR result. Keep the token out of outputs and diagnostics. Preserve existing homologation calls and SP+PR cohort. No live fiscal submission.

**Scale/Scope**: One NFC-e per synchronous request; SP normal production authorization, current homologation compatibility, structured outcomes, and matching SP QR Code URL. No other UF rollout, credentialing, CSC administration, DANFE rendering, consumer consultation, offline contingency, or automatic receipt polling.

**Knowledge Sources**: Official SEFAZ/SP NFC-e `Sobre` and `WebServices` pages; Portal Nacional NT 2023.002 v1.01, NT 2025.002-RTC v1.51, MOC 7.0, and QR Code manual v6.0. Exact URLs, publication/consultation dates, normative facts, and implementation interpretations are in [research.md](research.md). No secondary source used.

## Constitution Check

_Gate before Phase 0 research: PASS. Rechecked after Phase 1 design: PASS._

- **ESM/package**: Extend the existing root `authorizeNFCe` contract additively; add optional request CSC input and optional response QR URL without a new import path. Production requires CSC to meet the spec's QR result requirement. Existing homologation requests without CSC remain valid. Assess the additive production capability for semantic versioning and document the executor prerequisite.
- **Schemas/normalization**: Keep the NF-e/NFC-e 4.00 schema family and generated shapes unchanged. Accept 15- or 17-digit protocol strings as supported by the checked-in `TProt`; validate SP model 65, UF, key, and environment agreement. No XSD regeneration is planned unless a focused schema test disproves compatibility.
- **Sources**: Official SP service and NFC-e pages plus national technical notes/manuals are traced in [research.md](research.md). Confirmed fiscal rules are distinguished from SDK-local CSC and executor requirements.
- **Boundaries/types**: Limit runtime edits to maintained `src/canonical/nfce/` and `src/canonical/transport/`; do not edit generated `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/`, or `xsd/`. Keep strict types; no unchecked cast or exception planned.
- **Validation**: Add focused unit, endpoint/catalog, integration, and public-contract tests. Run `npx jest --runInBand tests/unit/nfce tests/integration/nfce tests/contract/public-nfce-operational-facade.test.ts`, then `npm test -- --runInBand`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run audit:public-contract`, and `npm run validate:tarball`. Run XSD validation against checked-in NFC-e/NF-e 4.00 schemas for representative signed fixtures. Run `npm run generate` only if later evidence requires schema-derived output changes.
- **Release**: Keep the root ESM entrypoint stable. Review additive request/result fields, new production behavior, and packed package contents before release; no new dependency or package metadata change is expected.

## Project Structure

### Documentation (this feature)

```text
specs/027-nfce-sp-producao/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/public-nfce-sp-production-authorization.md
└── spec.md
```

### Source Code (repository root)

```text
src/canonical/nfce/
├── authorize-nfce.ts
├── contracts.ts
├── authorization-payload.ts
├── authorization-outcome.ts
├── select-nfce-profile.ts
└── generate-nfce-sp-qr-code.ts
src/canonical/transport/
├── service-catalog.ts
├── supported-services.ts
├── catalog-provenance.ts
└── execute-nfe-soap-service.ts
tests/unit/nfce/
tests/integration/nfce/
tests/contract/
xsd/PL_010c_NT2022_002v1.30/  # read-only schema validation input
```

**Structure Decision**: Extend the existing NFC-e facade and authorizer-aware SOAP transport catalog. Reuse `signNFeXml`, the shared SOAP transport executor, the authorization outcome mapper, and `generateNFCeSPQRCode`; production constructs the single-document synchronous envelope directly so the caller's signed fiscal XML is transmitted. Keep the root public entrypoint and generated schema surface stable; add only a production SP catalog route and additive optional NFC-e request/result fields.

## Complexity Tracking

No constitution violations or additional architecture layers are proposed.

# Quickstart: NFC-e SP QR Code

## Goal

Validate that the new paulista `NFC-e` `QR Code` helper is additive, environment-aware for `homologacao` and `producao`, and still preserves the published boundaries for `PR`, other `UFs`, renderer concerns, consumer consultation, and `offline` behavior.

## Focused validation flow

1. Add or update a root contract test for the new facade, for example `tests/contract/root-nfce-sp-qrcode-facade.test.ts`.
2. Add focused unit coverage for local composition and boundary handling, for example `tests/unit/nfce/generate-nfce-sp-qr-code.test.ts`.
3. Add focused integration-style regression coverage for root usage in both environments, for example:
   - `tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts`
   - `tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts`
4. Update package contract documentation checks affected by the new root export and compatibility notes.
5. Confirm that the helper keeps the online `QR Code` composition on version `3`, while still requiring explicit `CSC` input as a validated local prerequisite owned by the integrator.

## Suggested focused commands

```bash
npx jest --runInBand \
  tests/contract/root-nfce-sp-qrcode-facade.test.ts \
  tests/contract/package-contract-docs.test.ts \
  tests/contract/root-contract-boundary.test.ts \
  tests/unit/nfce/generate-nfce-sp-qr-code.test.ts \
  tests/integration/nfce/generate-nfce-sp-qrcode-homologation.test.ts \
  tests/integration/nfce/generate-nfce-sp-qrcode-production.test.ts \
  tests/integration/nfce/generate-nfce-sp-qrcode-unsupported-state.test.ts

npm run lint
npm run format:check
npm run typecheck
npm run build
npm run validate:tarball
npm run docs:links
```

## Manual review checklist

- Confirm the helper is exported from the root package only and does not introduce a subpath export.
- Confirm `authorizeNFCe` remains on its prior homologation-only runtime boundary in this slice.
- Confirm `PR` and every non-`SP` UF still stop before successful helper generation.
- Confirm the returned result exposes the final URL and auditable metadata, but never the raw `CSC` token.
- Confirm the paulista base URL changes between `homologacao` and `producao` without silently reusing the same environment semantics.
- Confirm public docs still classify `DANFE NFC-e` visual rendering, consumer consultation, `CSC` administration, onboarding, and `offline` as out of scope.

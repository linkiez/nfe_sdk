# Quickstart: Expand Signing Coverage

## 1. Confirm the current signing baseline before extending it

Review the current root contract and the initial signing slice before changing anything:

```bash
sed -n '1,220p' src/index.ts
sed -n '1,220p' src/public-contract.ts
sed -n '1,220p' specs/005-add-digital-signing/spec.md
sed -n '1,220p' specs/014-expand-signing-coverage/spec.md
```

The goal is to extend the published signing capability, not replace it.

## 2. Keep event signing above the existing reusable signing context

Implement the event-signing slice as a continuation of the current local-signing flow:

- reuse the existing reusable signing context;
- accept unsigned event XML as the public input boundary;
- validate the generated signature locally before returning the result;
- fail explicitly for unsupported event families or invalid signable references.

The first implemented regression path of this slice is a supported `Carta de Correcao` event signed through the root import.

## 3. Keep the `NFC-e` portion preparatory, not operational

This feature should prepare the identifiers that later `NFC-e` flows depend on without claiming to finish those later flows.

- derive `chNFe`, `cDV`, and `hashCSRT` coherently;
- separate calculated identifiers from deferred dependencies such as `QR Code`, authorization, and `UF` rollout;
- avoid returning output that looks like a fully authorized or fully rendered `NFC-e` package.

The currently implemented P2 path prepares these identifiers through the root import with explicit `CSC` and `CSRT` validation, while transport and QR Code generation remain deferred.

## 4. Preserve clear runtime boundaries

Before moving forward, confirm that this feature does **not** silently expand into:

- `SOAP` transport behavior;
- trust chain automation;
- `A3` certificate flows;
- `QR Code` generation;
- `DANFE NFC-e` rendering;
- multi-`UF` operational guarantees.

Those remain explicit backlog for later slices.

## 5. Add focused regression evidence

Every addition in this slice must have reusable automated evidence:

- fixtures for supported unsigned event XML;
- expected success and failure outcomes for event-signing boundaries;
- valid and invalid `NFC-e` prerequisite inputs;
- contract coverage for the additive root surface.

## 6. Validate the slice with focused package checks

Execute the minimum validation gate for this feature:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

Use narrower Jest targeting while iterating, then rerun the broader package checks before finishing.

## 7. Review the phase boundary before moving to `/speckit.tasks`

Before generating or refining tasks further, confirm that:

- the new slice remains additive on the root import;
- event signing is the first formal signing extension beyond `NFe`;
- the `NFC-e` portion stops at prerequisite preparation;
- transport, trust chain, `QR Code`, and `DANFE NFC-e` remain explicitly deferred;
- roadmap and package-boundary documentation still describe the same scope.

When validating the currently implemented P1 slice, the narrow gate is:

```bash
npx jest tests/contract/root-signing-expansion-facade.test.ts tests/integration/sign-event-xml.test.ts tests/unit/event-signing-boundary.test.ts
```

For the currently implemented P2 slice, the narrow gate is:

```bash
npx jest tests/integration/prepare-nfce-signing-prerequisites.test.ts tests/unit/nfce-signing-prerequisites-boundary.test.ts
```
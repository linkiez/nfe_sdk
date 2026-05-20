# Contract: Public Signing Expansion Facade

## Purpose

Define the additive public surface expected from spec `014`, extending the existing signing slice without reopening broad transport or `NFC-e` operational promises.

## Normative Contract Source

- `package.json` exports remains the normative source of the published contract.
- The root import remains the only stable entrypoint for this phase.
- This contract describes the expected public expansion for event signing and `NFC-e` prerequisite preparation; internal subpaths remain non-contractual.

## Required Public Surface

### 1. Root import remains the stable entrypoint

The package must continue to be consumed through the root import and may grow additively with the new signing-expansion slice.

- Existing signing capabilities remain available through the root import.
- The event-signing capability enters as an additive root-facing operation.
- The `NFC-e` prerequisite-preparation capability enters as an additive root-facing operation.

### 2. Event signing expectations for this slice

The public event-signing capability of this phase must:

- accept supported unsigned event XML plus a previously prepared reusable signing context;
- return signed event XML only after local verification succeeds;
- fail explicitly when the event family, signable reference, or XML structure falls outside the supported boundary;
- preserve the original XML when signing fails.

At the current implementation boundary of this slice:

- the root import already publishes an additive `signEventXml` capability;
- the supported regression evidence covers a signed `Carta de Correcao` event fixture;
- unsupported or malformed event XML without a signable `infEvento Id` must fail before any ambiguous output is returned.

### 3. `NFC-e` prerequisite-preparation expectations for this slice

The public `NFC-e` prerequisite-preparation capability of this phase must:

- accept the minimum document and credential inputs required to derive the document access key, `cDV`, and `hashCSRT` coherently;
- return a structured result that separates calculated identifiers from deferred operational dependencies;
- fail explicitly when required inputs are missing, inconsistent, or invalid;
- avoid presenting prerequisite preparation as equivalent to authorization, `QR Code`, or `DANFE NFC-e` completion.

At the current implementation boundary of this slice:

- the root import already publishes an additive `prepareNFCeSigningPrerequisites` capability;
- the supported regression evidence verifies coherence with the existing public `computeNFeAccessKey` and `computeHashCSRT` helpers;
- empty `CSC` or `CSRT` inputs must fail explicitly before any partially prepared bundle is returned.

### 4. Internal boundaries that remain non-contractual

The following elements remain internal or deferred in this phase:

- event-family-specific target resolution details;
- runtime cryptographic material attached to the reusable signing context;
- trust chain automation and certificate acquisition workflows;
- `A3` support;
- `QR Code`, `DANFE NFC-e`, and multi-`UF` rollout concerns;
- generator-owned schema inventory under `src/classes/`, `src/interfaces/`, `src/types/`, and `src/enums/`.

## Compatibility Notes

- This phase must stay additive over the root contract stabilized in specs `003`, `004`, and `005`.
- Any breaking rename of the new root-facing capabilities would require contract review, semver impact assessment, and a migration note.
- Expanding this surface into full `NFC-e` authorization, transport, or trust chain automation requires later features.

## Validation Expectations

- Contract tests must verify that the root import exposes only the intended additive expansion.
- Integration tests must verify supported event signing and successful `NFC-e` prerequisite preparation for valid inputs.
- Unit tests must verify explicit boundary failures for unsupported event families, invalid signable references, and incomplete `NFC-e` prerequisite inputs.
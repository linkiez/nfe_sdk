# Data Model: Expand Signing Coverage

## SigningExpansionFacade

- **Purpose**: Represents the additive public surface introduced by this feature for event signing and `NFC-e` prerequisite preparation.
- **Fields**:
  - `publishedExports`: additive root-facing capabilities introduced by this slice (`signEventXml` and `prepareNFCeSigningPrerequisites`).
  - `supportedEventFamilies`: event families intentionally covered by the first extension, beginning with the regression-backed `Carta de Correcao` path.
  - `nfcePreparationBoundary`: statement of what the `NFC-e` prerequisite flow prepares versus what it does not execute.
  - `deferredCapabilities`: trust chain, `QR Code`, `DANFE NFC-e`, `A3`, and operational rollout items left outside this feature.
- **Relationships**:
  - Reuses `SigningContext` from spec `005`.
  - Produces `SignedEventXml` and `NFCeSigningPrerequisites`.

## UnsignedEventXml

- **Purpose**: Represents event XML that is structurally eligible for signing in this slice.
- **Fields**:
  - `xml`: raw event XML input.
  - `eventFamily`: logical family classification for supported-boundary checks.
  - `signableReference`: expected identifier that the signature must target.
  - `schemaVersion`: event schema version associated with the document.
- **Relationships**:
  - Is consumed together with `SigningContext` to produce `SignedEventXml`.
  - Is preserved unchanged when boundary validation fails.

## SignedEventXml

- **Purpose**: Represents event XML after a valid local signature has been applied.
- **Fields**:
  - `xml`: signed XML payload.
  - `verifiedReference`: identifier actually validated after signing.
  - `eventFamily`: carried-through family classification for regression evidence.
  - `verificationStatus`: pass/fail outcome of local signature verification.
- **Relationships**:
  - Is produced from `UnsignedEventXml` plus `SigningContext`.
  - Is validated by `EventSignatureVerificationReport` before returning to the caller.

## EventSignatureBoundary

- **Purpose**: Represents why an event-signing request is supported, unsupported, or invalid within this feature.
- **Fields**:
  - `classification`: supported, unsupported-family, invalid-reference, or malformed-input style category.
  - `code`: stable boundary identifier used by tests and docs.
  - `message`: human-readable explanation.
  - `retryable`: whether the same request can succeed without changing feature scope.
- **Relationships**:
  - Explains failures for `UnsignedEventXml` requests.
  - Feeds contract and unit-level regression evidence.

## NFCeSigningPrerequisites

- **Purpose**: Structured package of calculated identifiers and scope notes needed before later `NFC-e` signing or authorization flows.
- **Fields**:
  - `accessKey`: full `chNFe` derived for the document context.
  - `checkDigit`: derived `cDV` value.
  - `hashCsrt`: computed `hashCSRT` when the required credential inputs are present.
  - `receivedInputs`: normalized view of the minimum inputs actually supplied.
  - `deferredOperationalDependencies`: explicit items that still belong to `QR Code`, authorization, or `UF` rollout.
- **Relationships**:
  - Reuses existing access-key and `hashCSRT` contract expectations.
  - Does not itself authorize, transmit, or render `NFC-e` artifacts.

## NFCePrerequisiteBoundary

- **Purpose**: Represents why a prerequisite-preparation request is valid, incomplete, or blocked by out-of-scope capability.
- **Fields**:
  - `classification`: valid, incomplete-input, invalid-input, or deferred-scope.
  - `code`: stable boundary identifier.
  - `message`: user-facing explanation.
  - `missingInputs`: required fields absent from the request.
  - `invalidInputs`: fields present but unusable, such as empty `CSC`, empty `CSRT`, or a non-`65` model.
- **Relationships**:
  - Guards the creation of `NFCeSigningPrerequisites`.
  - Feeds unit and integration regressions for prerequisite handling.

## SigningExpansionRegressionEvidence

- **Purpose**: Represents reusable automated evidence for the new slice.
- **Fields**:
  - `scenarioId`: stable identifier for the regression case.
  - `inputFixture`: event XML or `NFC-e` prerequisite input fixture.
  - `expectedOutcome`: success structure or explicit boundary failure.
  - `validationLayer`: contract, integration, or unit coverage scope.
- **Relationships**:
  - Covers both `SignedEventXml` and `NFCeSigningPrerequisites`.
  - Supports roadmap and public-contract documentation updates.
# Public Contract: NFC-e SP Offline Contingency

**Status**: Implemented; the offline DANFE contract is owned by feature 028 and consumed here.

## API Boundary

The implementation should expose additive, root-exported functions and types under the existing ESM package contract. Names below are design placeholders for task generation and may be adjusted to local naming conventions without changing behavior.

### Prepare offline document

`prepareNFCeSPOffline(input)` accepts unsigned SP model 65 XML with `tpEmis=9`, environment, signing context, CSC, caller-provided business-calendar evidence, and the deadline. It validates confirmed XML identity/fields, checks that the evidence covers consecutive dates through the first following business day and that the deadline is 23:59:59 in its IANA time zone, signs locally, derives the official offline QR Code v2 URL, and returns the evidence with the signed record. The SDK does not authenticate the calendar source.

This operation MUST NOT contact SEFAZ or claim authorization. Invalid or unverified prerequisites return a validation/coverage boundary and no pending record.

### Reconcile one record

`reconcileNFCeSPOffline(input)` accepts one retained offline record, an injected mTLS-capable request executor, and optional timeout/correlation metadata. It transmits the exact retained XML in one explicit attempt and returns a separately typed offline reconciliation result.

The result classification MUST be one of `authorized`, `deadline-expired`, `duplicate`, `inconclusive`, `received`, `rejected`, `timeout`, or `unavailable`, matching `NFCeSPOfflineReconciliationClassification`. `operatorActionRequired` is a separate boolean; duplicate, timeout, and unresolved outcomes remain distinct. The result MUST correlate response access key/environment and preserve official response and transport evidence. A receipt or generic HTTP success is not authorization. Each invocation performs exactly one explicit attempt and MUST NOT automatically retry.

## Invariants

- The existing `authorizeNFCe` API and `NFCeAuthorizationOutcome` classifications retain their current meanings.
- The offline record is caller-owned and immutable: access key and signed-XML digest must match on every reconciliation attempt.
- No SDK database, filesystem queue, background retry, automatic polling, or multi-document recovery is added.
- The stateless SDK cannot prevent repeated calls or cross-process replays. Callers MUST persist attempt state and prevent concurrent/stale replays. Duplicate/rejection and ambiguous responses remain visible for operator action and are never silently converted to authorization.
- Deadline and contingency-field validation use the current official MOC, Ajuste SINIEF, and applicable NFC-e schema; no NF-e rule is copied by analogy. Calendar source authority remains the caller's responsibility.
- Production authorization uses only injected transport. Tests use deterministic response fixtures and never contact a live production endpoint.

## DANFE Integration

Feature 028 owns both authorized and offline DANFE rendering. Its offline overload accepts the signed record, prints the required pending contingency notice, omits the authorization protocol, and uses the record's QR Code v2 offline URL. It does not claim authorization and does not require a SOAP response.

Feature 028's spec, plan, and public contract define the implemented overload; no competing renderer is added here.

## Compatibility

The new offline functions and types are additive exports. No generated schema changes, package metadata changes, or new runtime dependency are currently planned. Implementation must update the public contract audit, root exports, tests, docs, and release-version assessment.

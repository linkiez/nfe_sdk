# Contract: Public NF-e SP Production Contingency

## Purpose

Define additive contingency selection and recovery behavior for the existing NF-e root facades. This contract does not add automatic fallback, background polling, persistence, or a new public subpath.

## Stable Public Entry Point

Consumers continue using the package root:

```ts
import {
  authorizeNFe,
  queryNFeServiceStatus,
  reconcileNFeReceipt,
  submitEPECEvent,
} from 'nfe-sdk';
```

The existing root exports remain stable. `authorizeNFe`, `queryNFeServiceStatus`, and `submitEPECEvent` may receive additive typed options and return additive metadata. Existing outcome classifications retain their current meanings.

## Explicit Mode Selection

- Normal authorization remains the default and follows spec 025's SP production contract.
- Contingency is selected explicitly in the authorization request as `svc-an`, `epec`, or `fs-da`; no timeout or transport failure changes the selected mode.
- Production contingency is limited to issuer SP (`cUF` `35`) in this slice.
- A request with a mode that is unsupported for SP returns an actionable boundary before authorization transport.
- `fs-da` is an assisted/unverified boundary, not an automated success path, until current SP applicability is confirmed.

## SVC-AN Contract

- Query `NFeStatusServico` using the SVC-AN provider in production before the explicit SVC authorization request.
- Continue only when the official status is `107 - Servico SVC em Operacao`.
- Status `113`, `114`, missing/unknown status, a different environment, or any query transport failure returns a boundary/unavailable/inconclusive result and MUST NOT send the authorization request.
- The authorization uses provider `SVCAN`, production endpoint evidence, and NF-e `tpEmis=6`.
- A successful SVC authorization is final for this mode; the SDK does not retransmit the NF-e to the origin UF after recovery.

## EPEC Contract

- Existing `submitEPECEvent` remains the public entry point. Its current homologation behavior remains the default.
- Explicit production use is allowed only for SP with a caller-provided mTLS-capable executor and valid EPEC detail data. The event is `110140`, carries production `tpAmb=1`, and routes to the production Ambiente Nacional/SVC-AN event endpoint.
- EPEC detail data includes the issuer CNPJ, numeric issuer IE, matching access key/issuer UF, emission date-time, `tpNF` (`0` entry or `1` exit), destination UF and one destination identifier (CNPJ, CPF, or foreign identifier), optional destination IE, and caller-supplied `vNF`, `vICMS`, and `vST`. Validate these fields against `xsd/Evento_EPEC_PL_v1.01/e110140_v1.00.xsd`; do not assume `ISENTO`, outgoing direction, same-state destination, or zero tax totals.
- `registered` means the EPEC event was accepted and a protocol is available; it does not mean the NF-e was authorized.
- The result identifies the matching 44-digit NF-e key, EPEC protocol, state `awaiting-recovery`, and next action `transmitNFeAfterRecovery`.
- A valid production registration returns `reconciliationDeadlineDays: 7` as guidance from SP's published procedure; the SDK does not schedule or enforce the deadline.
- After normal service recovers, the integrator explicitly submits the corresponding full NF-e through `authorizeNFe`, with `tpEmis=4` and the exact key associated with the accepted EPEC. The SDK does not perform this later write automatically.
- SP's published EPEC guidance states that failure to issue the corresponding NF-e within seven days blocks additional EPEC use until reconciliation; return that deadline as operational guidance, not as a timer or automatic scheduler.

## Recovery and Correlation

- The integrator owns the durable recovery record. Requests/results carry the document key, contingency mode, EPEC event protocol when applicable, outcome state, and next action to preserve correlation.
- Reuse `authorizeNFe` for an explicit post-recovery NF-e transmission and `reconcileNFeReceipt` for an existing known `nRec`.
- `reconcileNFeReceipt` accepts optional caller-supplied recovery context (`mode`, `documentKey`, and `eventProtocol`) and returns it with the receipt result. It preserves the existing receipt `classification`; when recovery metadata is present, an authorized receipt item maps to `reconciled`, pending remains `pending`, rejection/denial maps to `rejected`, service failure maps to `unavailable`, and missing, malformed, or non-unique terminal evidence maps to `inconclusive`.
- Receipt outcomes expose `executionMode`, `documentKey`, `eventProtocol`, `contingencyState`, `recoveryContext`, `recoveryState`, and `nextAction` additively. A terminal item whose access key differs from the supplied recovery key remains classified as received by the existing receipt contract, while its recovery state is `inconclusive`.
- Preserve terminal, pending, rejected, unavailable, and inconclusive outcomes. A timeout or pending response never authorizes a blind second submission.
- SVC documents are not resent to the normal authorizer. EPEC/FS-DA documents are sent to the origin only as an explicit recovery action and under the applicable official deadline.

## Outcome Compatibility

Add a typed execution mode (`normal`, `svc-an`, `epec`, or `fs-da`) and an optional contingency state/record to relevant outcomes. Keep the existing `classification`, transport evidence, `receiptNumber`, and `protocolNumber` semantics unchanged. For unsupported or not-yet-verified modes, use the existing `contingency-boundary`/usage boundary shape instead of claiming authorization success.

## Credentials and Safety

- Production SOAP calls require an integrator-supplied mTLS-capable `requestExecutor`.
- Redact credentials and private-key/certificate material from diagnostics as required by spec 025.
- Tests use injected executors and fixtures only; no real fiscal document is sent to SEFAZ.

## Compatibility and Validation

- No new root facade or subpath is introduced.
- Preserve homologation EPEC behavior and normal authorization behavior.
- Use the existing NF-e 4.00 `tpEmis` field and EPEC event schema; generated output is unchanged unless implementation proves a schema gap.
- Contract tests cover ESM root exports, mode selection, activation gating, production environment, EPEC acceptance/recovery, failure outcomes, and absence of automatic fallback.

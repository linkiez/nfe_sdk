# Contract: Public NF-e SP Production Authorization

## Purpose

Define the additive production behavior of the existing root `authorizeNFe` facade for São Paulo issuers. This contract does not add an SP-only facade or change homologation behavior.

## Public Entry Point

Consumers continue using the package root:

```ts
import { authorizeNFe, reconcileNFeReceipt } from 'nfe-sdk';
```

`authorizeNFe` keeps the existing `NFeAuthorizationRequest` and `NFeAuthorizationOutcome` shapes. `environment: 'production'` enables this path only when all supported documents resolve unambiguously to SP (`cUF` `35`) and agree with any 44-digit access key. Missing, malformed, conflicting, non-SP, or mixed-batch identity is rejected before transport. Homologation behavior and its existing inputs remain unchanged.

## Transport and Routing

- Normal production authorization resolves service `nfe-authorization` with provider/authorizer `SP` to `https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx`.
- Known-receipt continuation resolves service `nfe-authorization-batch` with provider/authorizer `SP` to `https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx`.
- Resolution includes environment and provider/authorizer; an unresolved or ambiguous route fails closed rather than selecting SVC-AN.
- The endpoint URLs are sourced from `SRC-NFE-006`; they are official catalog values, not a claim of live health.

## Credentials and TLS

The MOC requires TLS 1.2 or later with mutual certificate authentication. Production calls therefore require an integrator-supplied `requestExecutor` configured with the appropriate client certificate and private-key handling. The SDK's default Node.js `fetch` executor does not configure client certificates and must not be used for this production path. Issuer credentialing, certificate provisioning, and production authorization remain integrator prerequisites.

The SDK must not expose credential values or certificate/private-key bytes in outcomes or logs. `SoapExchangeEvidence` retains its existing public shape and non-secret metadata (`service`, `environment`, `provider`, `endpointUrl`, `httpStatus`, `durationMs`, transport/application classifications and status, and `failureReason` when available). Request and response envelope evidence must redact sensitive values before it is returned. A TLS handshake or transport failure is not an authorization result.

## Observable Outcomes

- Preserve existing `authorized`, `rejected`, and other `NFeAuthorizationOutcome` classifications.
- Validate response `tpAmb` as production (`1`) before mapping authorization or receipt evidence; missing or mismatched environment is a protocol error, never success.
- Malformed authorization or receipt XML is a protocol error. Authorization statuses `100`/`104` without `nProt`, status `103` without `nRec`, and a receipt response claiming terminal authorization without `nProt` are contradictory and must be a protocol error, never `authorized` or `received`.
- A service response with a receipt returns `received` and its `receiptNumber`; it is not final authorization.
- Continue a known receipt only through the existing one-shot `reconcileNFeReceipt` operation from spec 021, with `routingContext.authorizer: 'SP'` and `routingContext.environment: 'production'`.
- Preserve the existing receipt result classifications, including `pending` versus terminal outcomes.
- Timeout, service unavailability, and protocol error remain explicit. The SDK does not blindly resubmit a document or infer success after an uncertain transmission.
- Expose the existing non-secret transport metadata and request/response evidence needed for diagnosis; redact credential values and certificate/private-key bytes from any returned envelope evidence.

## Contingency Boundary

SP's normal authorizer and SVC-AN are separate routes. This feature does not activate or select contingency automatically. A normal SP production request stays on SP and reports the observed result. Any explicit contingency authorization workflow is outside this contract.

## Compatibility

- Existing root ESM export `authorizeNFe` remains stable; production support is additive.
- Existing homologation requests retain current semantics and endpoint selection.
- No generated NF-e 4.00 schema, public import path, or dependency change is expected.
- Review the additive runtime behavior and package tarball before release.

## Contract Validation

Use injected executors and fixtures to verify endpoint/provider selection, preflight rejection before executor invocation, terminal and receipt outcomes, and SP production receipt continuation. Routine checks must never send a real fiscal document to SEFAZ.

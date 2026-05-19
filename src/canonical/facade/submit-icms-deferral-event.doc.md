# submit-icms-deferral-event.ts

## Purpose

Provides a high-level facade for submitting an ICMS Deferral (`Pedido de Prorrogacao`) event to SEFAZ as a single-item generic event batch.

## Exports

### `ICMSDeferralEventInput`

Interface with all required inputs for submitting an ICMS deferral event.

**Fields:**
- `accessKey: string` — NF-e access key (44 digits)
- `payload: ICMSDeferralPayload` — Deferral payload (protocol + items)
- `occurredAt: string` — Event occurrence datetime (ISO 8601)
- `authorDocument: string` — Author's document number (CPF or CNPJ digits only)
- `authorDocumentType: 'cpf' | 'cnpj'` — Author document type
- `environment: CanonicalEnvironment` — `'production'` or `'homologation'`
- `signingContext: SigningContext` — Certificate context for XML signing
- `requestExecutor: RequestExecutor` — HTTP transport executor

### `submitICMSDeferralEvent(input): Promise<GenericEventBatchOutcome>`

Submits an ICMS deferral event to SEFAZ.

**Internally constructs:**
- `batchId`: `icms-deferral-${input.accessKey}`
- Event family: `'prorrogacao-icms'`
- Event code: `'110764'`
- `sequenceNumber: 1`
- Author actor from `authorDocument` + `authorDocumentType`

**Returns:** `GenericEventBatchOutcome` from `submitGenericEvents`.

## Dependencies

- `submitGenericEvents` from `../generic-event/submit-generic-events.js`
- `ICMSDeferralPayload` from `../generic-event/prorrogacao-icms-payload.js`
- `CanonicalEnvironment` from `../shared/contracts.js`
- `SigningContext` from `../signing/contracts.js`
- `RequestExecutor` from `../transport/request-executor.js`

## Location

`src/canonical/facade/submit-icms-deferral-event.ts`

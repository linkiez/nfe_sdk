# prorrogacao-icms-payload.ts

## Purpose

Defines the canonical payload type and XML serialization for the ICMS Deferral (`Pedido de Prorrogacao`) generic event (family `prorrogacao-icms`).

## Exports

### `ICMSDeferralItem`

Interface representing a single line item in an ICMS deferral request.

**Fields:**
- `itemNumber: string` — Item number (numItem attribute in XML)
- `quantity: string` — Item quantity (qtdeItem in XML)

### `ICMSDeferralPayload`

Interface representing the full payload for an ICMS deferral event.

**Fields:**
- `authorizationProtocol: string` — SEFAZ authorization protocol number (nProt)
- `items: readonly ICMSDeferralItem[]` — List of items with deferral request

### `mapICMSDeferralEvent(payload): string`

Serializes an `ICMSDeferralPayload` to the `detEvento` XML string required by the generic event envelope.

**Returns:** XML string starting with `<detEvento versao="1.00">` containing `descEvento`, `nProt`, and one `itemPedido` per item.

**XML escaping:** All string values are escaped via `escapeGenericEventXml`.

## Usage

This module is used internally by `build-env-evento.ts` when `family === 'prorrogacao-icms'`. It is also re-exported from `src/canonical/generic-event/index.ts` and the canonical facade.

## Location

`src/canonical/generic-event/prorrogacao-icms-payload.ts`

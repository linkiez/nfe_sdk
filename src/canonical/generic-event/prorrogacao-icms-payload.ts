import { escapeGenericEventXml } from './contracts.js';

/** One item in an ICMS deferral request. */
export interface ICMSDeferralItem {
  /** Item number as it appears on the NF-e (1-3 digits). */
  readonly itemNumber: string;
  /** Quantity of the item for which deferral is requested (decimal). */
  readonly quantity: string;
}

/** Payload for an ICMS industrial deferral event (event code `110764`). */
export interface ICMSDeferralPayload {
  /** Authorization protocol number of the NF-e to be deferred. */
  readonly authorizationProtocol: string;
  /** Items included in the deferral request (1–990 items). */
  readonly items: readonly ICMSDeferralItem[];
}

/** Maps an ICMS deferral payload into the `detEvento` XML fragment (versao 1.00). */
export function mapICMSDeferralEvent(payload: ICMSDeferralPayload): string {
  const itemsXml = payload.items
    .map(
      (item) =>
        `<itemPedido numItem="${escapeGenericEventXml(item.itemNumber)}">` +
        `<qtdeItem>${escapeGenericEventXml(item.quantity)}</qtdeItem>` +
        `</itemPedido>`,
    )
    .join('');

  return (
    '<detEvento versao="1.00">' +
    '<descEvento>Pedido de Prorrogacao</descEvento>' +
    `<nProt>${escapeGenericEventXml(payload.authorizationProtocol)}</nProt>` +
    itemsXml +
    '</detEvento>'
  );
}

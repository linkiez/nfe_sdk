import {
	escapeGenericEventXml,
	type DeliveryConfirmationPayload,
} from './contracts.js';

/** Maps one delivery-confirmation payload into the `detEvento` XML fragment. */
export function mapDeliveryConfirmationEvent(
	payload: DeliveryConfirmationPayload,
): string {
	return [
		'<detEvento versao="1.00">',
		'<descEvento>Comprovante de Entrega da NF-e</descEvento>',
		`<dhEntrega>${escapeGenericEventXml(payload.deliveredAt)}</dhEntrega>`,
		`<hashComprovante>${escapeGenericEventXml(payload.deliveryHash)}</hashComprovante>`,
		`<docRecebedor>${escapeGenericEventXml(payload.recipientDocument)}</docRecebedor>`,
		`<xNomeRecebedor>${escapeGenericEventXml(payload.recipientName)}</xNomeRecebedor>`,
		'</detEvento>',
	].join('');
}
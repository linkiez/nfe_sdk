import {
	escapeGenericEventXml,
	type DeliveryFailurePayload,
} from './contracts.js';

/** Maps one delivery-failure payload into the `detEvento` XML fragment. */
export function mapDeliveryFailureEvent(payload: DeliveryFailurePayload): string {
	return [
		'<detEvento versao="1.00">',
		'<descEvento>Insucesso na Entrega da NF-e</descEvento>',
		`<dhTentativaEntrega>${escapeGenericEventXml(payload.attemptedAt)}</dhTentativaEntrega>`,
		`<nTentativa>${payload.attemptNumber}</nTentativa>`,
		`<tpMotivo>${escapeGenericEventXml(payload.reasonType)}</tpMotivo>`,
		`<xJustMotivo>${escapeGenericEventXml(payload.reasonDescription)}</xJustMotivo>`,
		'</detEvento>',
	].join('');
}
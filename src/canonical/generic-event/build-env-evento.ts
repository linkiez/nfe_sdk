import { normalizeGenericEventDocumentNumber } from './contracts.js';
import type {
	DeliveryConfirmationPayload,
	DeliveryFailurePayload,
	EconfPayload,
	GenericEventBatchRequest,
	GenericEventInputItem,
	InterestedActorPayload,
} from './contracts.js';
import { mapDeliveryConfirmationEvent } from './map-delivery-confirmation-event.js';
import { mapDeliveryFailureEvent } from './map-delivery-failure-event.js';
import { mapEconfEvent } from './map-econf-event.js';
import { mapInterestedActorEvent } from './map-interested-actor-event.js';
import { mapICMSDeferralEvent, type ICMSDeferralPayload } from './prorrogacao-icms-payload.js';

/** One normalized item used to compose the generic `envEvento` XML payload. */
export interface GenericEventEnvelopeBuildItem {
	readonly accessKey: string;
	readonly authorDocumentNumber: string;
	readonly authorDocumentTagName: 'CPF' | 'CNPJ';
	readonly detailXml: string;
	readonly eventCode: string;
	readonly occurredAt: string;
	readonly sequenceNumber: number;
}

/** Builds the generic `envEvento` payload for a validated generic-event batch request. */
export function buildGenericEventEnvelopeXml(
	input: GenericEventBatchRequest,
): string {
	const normalizedBatchId = normalizeBatchId(input.batchId);
	const items = input.items.map(normalizeEnvelopeBuildItem);

	return [
		'<envEvento versao="1.00">',
		`<idLote>${normalizedBatchId}</idLote>`,
		...items.map((item) => buildEnvelopeItemXml(item)),
		'</envEvento>',
	].join('');
}

function normalizeBatchId(batchId: string): string {
	const digitsOnlyBatchId = batchId.replaceAll(/\D/gu, '');
	return digitsOnlyBatchId.length > 0 ? digitsOnlyBatchId : '1';
}

function normalizeEnvelopeBuildItem(
	item: GenericEventInputItem,
): GenericEventEnvelopeBuildItem {
	const authorDocumentTagName = item.author.documentType === 'cpf' ? 'CPF' : 'CNPJ';

	return {
		accessKey: item.accessKey,
		authorDocumentNumber: normalizeGenericEventDocumentNumber(
			item.author.documentNumber,
		),
		authorDocumentTagName,
		detailXml: buildDetailXml(item),
		eventCode: item.eventCode,
		occurredAt: item.occurredAt,
		sequenceNumber: item.sequenceNumber,
	};
}

function buildEnvelopeItemXml(item: GenericEventEnvelopeBuildItem): string {
	const sequenceValue = String(item.sequenceNumber).padStart(2, '0');

	return [
		'<evento versao="1.00">',
		`<infEvento Id="ID${item.eventCode}${item.accessKey}${sequenceValue}">`,
		'<cOrgao>91</cOrgao>',
		'<tpAmb>2</tpAmb>',
		`<${item.authorDocumentTagName}>${item.authorDocumentNumber}</${item.authorDocumentTagName}>`,
		`<chNFe>${item.accessKey}</chNFe>`,
		`<dhEvento>${item.occurredAt}</dhEvento>`,
		`<tpEvento>${item.eventCode}</tpEvento>`,
		`<nSeqEvento>${item.sequenceNumber}</nSeqEvento>`,
		'<verEvento>1.00</verEvento>',
		item.detailXml,
		'</infEvento>',
		'</evento>',
	].join('');
}

function buildDetailXml(item: GenericEventInputItem): string {
	switch (item.family) {
		case 'delivery-confirmation':
			return mapDeliveryConfirmationEvent(
				item.payload as DeliveryConfirmationPayload,
			);
		case 'interested-actor-transporter':
			return mapInterestedActorEvent(item.payload as InterestedActorPayload);
		case 'delivery-failure':
			return mapDeliveryFailureEvent(item.payload as DeliveryFailurePayload);
		case 'econf':
			return mapEconfEvent(item.payload as EconfPayload);
		case 'prorrogacao-icms':
			return mapICMSDeferralEvent(item.payload as ICMSDeferralPayload);
		default:
			return '<detEvento versao="1.00"></detEvento>';
	}
}
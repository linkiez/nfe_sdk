import { escapeGenericEventXml, type EconfPayload } from './contracts.js';

/** Maps one ECONF payload into the `detEvento` XML fragment. */
export function mapEconfEvent(payload: EconfPayload): string {
	return [
		'<detEvento versao="1.00">',
		'<descEvento>ECONf</descEvento>',
		...payload.paymentDetails.map((detail) =>
			[
				'<detPag>',
				`<indPag>${escapeGenericEventXml(detail.indicator)}</indPag>`,
				`<tPag>${escapeGenericEventXml(detail.method)}</tPag>`,
				`<vPag>${escapeGenericEventXml(detail.value)}</vPag>`,
				detail.paidAt ? `<dPag>${escapeGenericEventXml(detail.paidAt)}</dPag>` : '',
				detail.payerDocument
					? `<CNPJPag>${escapeGenericEventXml(detail.payerDocument)}</CNPJPag>`
					: '',
				detail.payerState
					? `<UFPag>${escapeGenericEventXml(detail.payerState)}</UFPag>`
					: '',
				'</detPag>',
			].join(''),
		),
		'</detEvento>',
	].join('');
}
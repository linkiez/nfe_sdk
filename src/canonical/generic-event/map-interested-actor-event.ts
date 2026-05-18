import {
	escapeGenericEventXml,
	type InterestedActorPayload,
} from './contracts.js';

/** Maps one interested-actor payload into the `detEvento` XML fragment. */
export function mapInterestedActorEvent(
	payload: InterestedActorPayload,
): string {
	return [
		'<detEvento versao="1.00">',
		'<descEvento>Ator interessado na NF-e</descEvento>',
		`<tpAutorizacao>${escapeGenericEventXml(payload.authorizationType)}</tpAutorizacao>`,
		`<autXML>${escapeGenericEventXml(payload.authorizedDocument)}</autXML>`,
		'</detEvento>',
	].join('');
}
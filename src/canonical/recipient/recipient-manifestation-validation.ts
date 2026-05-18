import {
	escapeRecipientXml,
	isSupportedRecipientActor,
	isValidRecipientAccessKey,
	normalizeRecipientDocumentNumber,
} from './recipient-shared.js';
import type {
	RecipientManifestationEventType,
	RecipientManifestationRequest,
} from './recipient-shared.js';

const EVENT_CODE_BY_TYPE: Readonly<Record<RecipientManifestationEventType, string>> = {
	'ciencia-da-operacao': '210210',
	'confirmacao-da-operacao': '210200',
	'desconhecimento-da-operacao': '210220',
	'operacao-nao-realizada': '210240',
};
const JUSTIFICATION_MIN_LENGTH = 15;

/**
 * Resolves the SEFAZ event code published for one recipient manifestation type.
 *
 * @param eventType - Public manifestation event identifier.
 * @returns Stable numeric event code used in the XML payload.
 */
export function getRecipientManifestationEventCode(
	eventType: RecipientManifestationEventType,
): string {
	return EVENT_CODE_BY_TYPE[eventType];
}

/**
 * Validates the public manifestation request before transport is attempted.
 *
 * @param input - Public manifestation request received by the facade.
 * @returns Human-readable usage error when the request falls outside the supported contract.
 */
export function validateRecipientManifestationRequest(
	input: RecipientManifestationRequest,
): string | undefined {
	if (!isSupportedRecipientActor(input.actor)) {
		return 'Recipient manifestation requires a supported CPF or CNPJ actor.';
	}

	if (!isValidRecipientAccessKey(input.accessKey)) {
		return 'Recipient manifestation requires a valid 44-digit access key.';
	}

	if (input.signingContext.supportedAlgorithms.length === 0) {
		return 'Recipient manifestation requires a valid signing context.';
	}

	if (
		input.eventType === 'operacao-nao-realizada' &&
		(input.justification?.trim().length ?? 0) < JUSTIFICATION_MIN_LENGTH
	) {
		return 'Recipient manifestation for operacao-nao-realizada requires a justification with at least 15 characters.';
	}

	if (
		input.eventType !== 'operacao-nao-realizada' &&
		input.justification?.trim().length
	) {
		return 'Recipient manifestation accepts justification only for operacao-nao-realizada.';
	}

	return undefined;
}

/**
 * Creates the minimal manifestation payload used by the recipient MVP.
 *
 * @param input - Public manifestation request already validated by the facade.
 * @returns XML payload that can be wrapped by the transport layer.
 */
export function createRecipientManifestationPayloadXml(
	input: RecipientManifestationRequest,
): string {
	const documentNumber = normalizeRecipientDocumentNumber(input.actor.documentNumber);
	const documentTagName = input.actor.documentType === 'cpf' ? 'CPF' : 'CNPJ';
	const eventCode = getRecipientManifestationEventCode(input.eventType);
	const detailPayload = input.justification?.trim().length
		? `<xJust>${escapeRecipientXml(input.justification.trim())}</xJust>`
		: '';

	return [
		'<envEvento versao="1.00">',
		'<idLote>1</idLote>',
		'<evento versao="1.00">',
		`<infEvento Id="ID${eventCode}${input.accessKey}01">`,
		'<cOrgao>91</cOrgao>',
		'<tpAmb>2</tpAmb>',
		`<${documentTagName}>${documentNumber}</${documentTagName}>`,
		`<chNFe>${escapeRecipientXml(input.accessKey)}</chNFe>`,
		`<tpEvento>${eventCode}</tpEvento>`,
		'<nSeqEvento>1</nSeqEvento>',
		'<verEvento>1.00</verEvento>',
		`<detEvento versao="1.00"><descEvento>${escapeRecipientXml(getRecipientManifestationEventDescription(input.eventType))}</descEvento>${detailPayload}</detEvento>`,
		'</infEvento>',
		'</evento>',
		'</envEvento>',
	].join('');
}

function getRecipientManifestationEventDescription(
	eventType: RecipientManifestationEventType,
): string {
	switch (eventType) {
		case 'confirmacao-da-operacao':
			return 'Confirmacao da Operacao';
		case 'ciencia-da-operacao':
			return 'Ciencia da Operacao';
		case 'desconhecimento-da-operacao':
			return 'Desconhecimento da Operacao';
		case 'operacao-nao-realizada':
			return 'Operacao nao Realizada';
		default:
			return 'Manifestacao do Destinatario';
	}
}
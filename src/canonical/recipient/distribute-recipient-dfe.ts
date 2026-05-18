import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import {
	createRecipientBoundaryTransportOutcome,
	createUnsupportedRecipientScopeMessage,
} from './recipient-coverage-boundary.js';
import { mapRecipientDistributionTransportOutcome } from './recipient-distribution-outcome.js';
import {
	escapeRecipientXml,
	isSupportedRecipientActor,
	isValidRecipientNSU,
	normalizeRecipientDocumentNumber,
} from './recipient-shared.js';
import type {
	RecipientDistributionOutcome,
	RecipientDistributionQuery,
} from './recipient-shared.js';

const RECIPIENT_DISTRIBUTION_SERVICE = 'nfe-recipient-distribution' as const;

/**
 * Executes the supported recipient DFe distribution flow through `distNSU`.
 *
 * @param input - Structured recipient distribution query.
 * @returns Structured recipient distribution outcome.
 */
export async function distributeRecipientDFe(
	input: RecipientDistributionQuery,
): Promise<RecipientDistributionOutcome> {
	if (input.environment !== 'homologation') {
		const failureReason = createUnsupportedRecipientScopeMessage(
			input.environment,
			'distributeRecipientDFe',
		);

		return {
			actor: input.actor,
			classification: 'unsupported-scope',
			cursor: {
				hasMoreDocumentsNow: false,
				maxNSU: input.ultNSU,
				ultNSU: input.ultNSU,
			},
			documents: [],
			failureReason,
			transportOutcome: createRecipientBoundaryTransportOutcome(
				RECIPIENT_DISTRIBUTION_SERVICE,
				failureReason,
			),
		};
	}

	if (!isSupportedRecipientActor(input.actor)) {
		return createUsageErrorDistributionOutcome(
			input,
			'Recipient distribution requires a supported CPF or CNPJ actor.',
		);
	}

	if (!isValidRecipientNSU(input.ultNSU)) {
		return createUsageErrorDistributionOutcome(
			input,
			'Recipient distribution requires a 15-digit ultNSU cursor.',
		);
	}

	const transportOutcome = await executeNFeSoapService({
		environment: input.environment,
		payloadXml: createRecipientDistributionPayloadXml(input),
		requestExecutor: input.requestExecutor,
		service: RECIPIENT_DISTRIBUTION_SERVICE,
		timeoutMs: input.timeoutMs,
	});

	return mapRecipientDistributionTransportOutcome(input, transportOutcome);
}

/**
 * Creates the minimal `distNSU` payload used by the recipient MVP.
 *
 * @param input - Structured recipient distribution query.
 * @returns XML payload that can be wrapped by the transport layer.
 */
export function createRecipientDistributionPayloadXml(
	input: RecipientDistributionQuery,
): string {
	const documentNumber = normalizeRecipientDocumentNumber(input.actor.documentNumber);
	const documentTagName = input.actor.documentType === 'cpf' ? 'CPF' : 'CNPJ';

	return [
		'<distDFeInt versao="1.01">',
		'<tpAmb>2</tpAmb>',
		'<cUFAutor>91</cUFAutor>',
		`<${documentTagName}>${documentNumber}</${documentTagName}>`,
		'<distNSU>',
		`<ultNSU>${escapeRecipientXml(input.ultNSU)}</ultNSU>`,
		'</distNSU>',
		'</distDFeInt>',
	].join('');
}

function createUsageErrorDistributionOutcome(
	input: RecipientDistributionQuery,
	failureReason: string,
): RecipientDistributionOutcome {
	return {
		actor: input.actor,
		classification: 'usage-error',
		cursor: {
			hasMoreDocumentsNow: false,
			maxNSU: input.ultNSU,
			ultNSU: input.ultNSU,
		},
		documents: [],
		failureReason,
		transportOutcome: createRecipientBoundaryTransportOutcome(
			RECIPIENT_DISTRIBUTION_SERVICE,
			failureReason,
		),
	};
	}
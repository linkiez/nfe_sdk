import { signEventXml } from '../signing/sign-event-xml.js';
import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import { buildDistDFeIntXml } from '../nfe/queries/nfe-query-payloads.js';

import { createRecipientBoundaryTransportOutcome } from './recipient-coverage-boundary.js';
import { mapRecipientDistributionTransportOutcome } from './recipient-distribution-outcome.js';
import { mapRecipientManifestationTransportOutcome } from './recipient-manifestation-outcome.js';
import {
	createRecipientManifestationPayloadXml,
	validateRecipientManifestationRequest,
} from './recipient-manifestation-validation.js';
import {
	isSupportedRecipientActor,
	isValidRecipientNSU,
	normalizeRecipientDocumentNumber,
} from './recipient-shared.js';
import type {
	RecipientDistributionOutcome,
	RecipientDistributionQuery,
	RecipientManifestationOutcome,
	RecipientManifestationRequest,
} from './recipient-shared.js';

const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const stripDeclaration = (xml: string): string => xml.trim().replace(/^<\?xml[^>]*\?>\s*/u, '');

function distributionRefusal(
	input: RecipientDistributionQuery,
	reason: string,
): RecipientDistributionOutcome {
	return {
		actor: input.actor,
		classification: 'usage-error',
		continuation: { cursorAdvanced: false, nextAction: 'resolve-boundary', reason: 'usage-error' },
		cursor: { hasMoreDocumentsNow: false, maxNSU: input.ultNSU, ultNSU: input.ultNSU },
		documents: [],
		failureReason: reason,
		transportOutcome: createRecipientBoundaryTransportOutcome('nfe-recipient-distribution', reason),
	};
}

/**
 * Distribution query in the official wire format: real `distDFeInt` (with `tpAmb` and the
 * author UF), the `NFeDistribuicaoDFe` envelope and production support (Ambiente Nacional).
 *
 * @param input - Query with `wireFormat: true` and `authorUF`.
 * @returns Distribution outcome; refused requests are `usage-error`.
 */
export async function distributeRecipientDFeWire(
	input: RecipientDistributionQuery,
): Promise<RecipientDistributionOutcome> {
	const environment = input.environment.trim().toLowerCase();

	if (environment !== 'homologation' && environment !== 'production') {
		return distributionRefusal(input, `Unsupported environment "${input.environment}".`);
	}
	if (!isSupportedRecipientActor(input.actor)) {
		return distributionRefusal(input, 'Recipient distribution requires a supported CPF or CNPJ actor.');
	}
	if (!isValidRecipientNSU(input.ultNSU)) {
		return distributionRefusal(input, 'Recipient distribution requires a 15-digit ultNSU cursor.');
	}
	if (input.authorUF === undefined || !/^\d{2}$/u.test(input.authorUF)) {
		return distributionRefusal(input, 'authorUF (2 digits) is required for the official distribution query.');
	}
	if (environment === 'production' && !input.requestExecutor) {
		return distributionRefusal(input, 'Production distribution requires an injected requestExecutor for mTLS.');
	}

	const transportOutcome = await executeNFeSoapService({
		environment,
		payloadXml: buildDistDFeIntXml(
			environment,
			input.authorUF,
			normalizeRecipientDocumentNumber(input.actor.documentNumber),
			{ ultNSU: input.ultNSU.trim() },
		),
		requestExecutor: input.requestExecutor,
		service: 'nfe-recipient-distribution',
		timeoutMs: input.timeoutMs,
		wireFormat: true,
	});

	return mapRecipientDistributionTransportOutcome(input, transportOutcome);
}

function manifestationRefusal(
	input: RecipientManifestationRequest,
	reason: string,
): RecipientManifestationOutcome {
	return {
		classification: 'usage-error',
		downloadRemainsSeparate: true,
		eventType: input.eventType,
		failureReason: reason,
		transportOutcome: createRecipientBoundaryTransportOutcome('nfe-recipient-manifestation', reason),
	};
}

/**
 * Manifestation in the official wire format: complete `envEvento` (namespace, `tpAmb`,
 * `dhEvento`), signed with the recipient certificate, sent to the national `RecepcaoEvento`
 * and supported in production.
 *
 * @param input - Request with `wireFormat: true` and `eventDateTime`.
 * @returns Manifestation outcome; refused requests are `usage-error`.
 */
export async function manifestRecipientOperationWire(
	input: RecipientManifestationRequest,
): Promise<RecipientManifestationOutcome> {
	const environment = input.environment.trim().toLowerCase();

	if (environment !== 'homologation' && environment !== 'production') {
		return manifestationRefusal(input, `Unsupported environment "${input.environment}".`);
	}
	const problem = validateRecipientManifestationRequest(input);

	if (problem) {
		return manifestationRefusal(input, problem);
	}
	if (
		input.eventDateTime === undefined ||
		!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/u.test(input.eventDateTime)
	) {
		return manifestationRefusal(input, 'eventDateTime must be an ISO 8601 date/time with UTC offset.');
	}
	if (environment === 'production' && !input.requestExecutor) {
		return manifestationRefusal(input, 'Production manifestation requires an injected requestExecutor for mTLS.');
	}

	const unsignedXml = createRecipientManifestationPayloadXml({ ...input, environment }, {
		eventDateTime: input.eventDateTime,
		namespace: NFE_NAMESPACE,
	});
	const signedXml = stripDeclaration(
		await signEventXml({ signingContext: input.signingContext, unsignedXml }),
	);
	const transportOutcome = await executeNFeSoapService({
		environment,
		payloadXml: signedXml,
		requestExecutor: input.requestExecutor,
		service: 'nfe-recipient-manifestation',
		timeoutMs: input.timeoutMs,
		wireFormat: true,
	});

	return mapRecipientManifestationTransportOutcome(input, transportOutcome);
}

import type { SupportedNFeSoapService } from '../transport/supported-services.js';
import type { TransportOutcome } from '../transport/contracts.js';

import type {
	RecipientCoverageBoundary,
	RecipientManifestationEventType,
} from './recipient-shared.js';

const SUPPORTED_RECIPIENT_ENVIRONMENTS = ['homologation'] as const;
const SUPPORTED_RECIPIENT_DISTRIBUTION_MODES = ['distNSU'] as const;
const SUPPORTED_RECIPIENT_MANIFESTATION_EVENT_TYPES = [
	'confirmacao-da-operacao',
	'ciencia-da-operacao',
	'desconhecimento-da-operacao',
	'operacao-nao-realizada',
] as const satisfies readonly RecipientManifestationEventType[];
const INCLUDED_SCOPE = [
	'homologation',
	'distNSU',
	'cpf',
	'cnpj',
	'summary-envelopes',
	'full-document-envelopes',
	'210200',
	'210210',
	'210220',
	'210240',
] as const;
const EXCLUDED_SCOPE = [
	'production',
	'consNSU',
	'consChNFe',
	'generic-events',
	'EPEC',
	'auto-download-after-manifestation',
	'multi-uf-expansion',
] as const;
const EXTERNAL_DEPENDENCIES = [
	'digital-certificate',
	'recipient-enablement',
	'national-service-availability',
] as const;
const ONE_HOUR_BACKOFF_MS = 60 * 60 * 1000;
const EMPTY_BATCH_BACKOFF_MS = 5 * 60 * 1000;

/**
 * Returns the explicit supported and excluded boundary for the recipient MVP.
 *
 * @returns Structured coverage boundary for documentation and tests.
 */
export function getRecipientCoverageBoundary(): RecipientCoverageBoundary {
	return {
		excludedScope: EXCLUDED_SCOPE,
		externalDependencies: EXTERNAL_DEPENDENCIES,
		includedScope: INCLUDED_SCOPE,
	};
}

/**
 * Returns the supported environment values for the recipient MVP.
 *
 * @returns Read-only supported environment identifiers.
 */
export function getSupportedRecipientEnvironments():
	readonly (typeof SUPPORTED_RECIPIENT_ENVIRONMENTS)[number][] {
	return SUPPORTED_RECIPIENT_ENVIRONMENTS;
}

/**
 * Returns the supported distribution modes for the recipient MVP.
 *
 * @returns Read-only supported distribution mode identifiers.
 */
export function getSupportedRecipientDistributionModes():
	readonly (typeof SUPPORTED_RECIPIENT_DISTRIBUTION_MODES)[number][] {
	return SUPPORTED_RECIPIENT_DISTRIBUTION_MODES;
}

/**
 * Returns the supported manifestation events for the recipient MVP.
 *
 * @returns Read-only manifestation event identifiers.
 */
export function getSupportedRecipientManifestationEventTypes():
	readonly RecipientManifestationEventType[] {
	return SUPPORTED_RECIPIENT_MANIFESTATION_EVENT_TYPES;
}

/**
 * Builds the stable unsupported-scope message for recipient operations.
 *
 * @param requestedEnvironment - Raw environment requested by the caller.
 * @param requestedOperation - Requested recipient operation identifier.
 * @returns Stable unsupported-scope diagnostic.
 */
export function createUnsupportedRecipientScopeMessage(
	requestedEnvironment: string,
	requestedOperation: string,
): string {
	return `Unsupported recipient scope: environment "${requestedEnvironment}", operation "${requestedOperation}". Supported environment: "${SUPPORTED_RECIPIENT_ENVIRONMENTS.join(', ')}".`;
}

/**
 * Creates a minimal transport-like evidence object for boundary-only outcomes.
 *
 * @param service - Recipient service associated with the boundary result.
 * @param failureReason - Stable reason that explains the boundary.
 * @returns Minimal transport outcome reused by structured recipient boundaries.
 */
export function createRecipientBoundaryTransportOutcome(
	service: SupportedNFeSoapService,
	failureReason: string,
): TransportOutcome {
	return {
		classification: 'usage-error',
		environment: 'homologation',
		evidence: {
			endpointUrl: '',
			provider: 'SVCAN',
			requestEnvelopeXml: '',
		},
		failureReason,
		service,
	};
}

/**
 * Detects whether a response should be surfaced as an external dependency limit.
 *
 * @param applicationStatusCode - Application status code observed in the response.
 * @param applicationStatusMessage - Human-readable message observed in the response.
 * @returns `true` when the result depends on certificate or enablement outside the SDK.
 */
export function isRecipientDependencyLimited(
	applicationStatusCode?: string,
	applicationStatusMessage?: string,
): boolean {
	const normalizedMessage = applicationStatusMessage?.toLowerCase() ?? '';

	return (
		applicationStatusCode === '280' ||
		applicationStatusCode === '281' ||
		normalizedMessage.includes('certificado') ||
		normalizedMessage.includes('habilit') ||
		normalizedMessage.includes('credenc')
	);
}

/**
 * Detects whether a response should be surfaced as a recipient usage error.
 *
 * @param applicationStatusCode - Application status code observed in the response.
 * @param applicationStatusMessage - Human-readable message observed in the response.
 * @returns `true` when the result represents invalid usage or consumption abuse.
 */
export function isRecipientUsageBoundary(
	applicationStatusCode?: string,
	applicationStatusMessage?: string,
): boolean {
	const normalizedMessage = applicationStatusMessage?.toLowerCase() ?? '';

	return (
		applicationStatusCode === '656' ||
		normalizedMessage.includes('consumo indevido') ||
		normalizedMessage.includes('uso indevido') ||
		normalizedMessage.includes('justificativa')
	);
}

/**
 * Suggests the next polling backoff based on the observed distribution status.
 *
 * @param applicationStatusCode - Application status code observed in the response.
 * @returns Suggested backoff in milliseconds when the service recommends waiting.
 */
export function getRecipientRecommendedBackoffMs(
	applicationStatusCode?: string,
): number | undefined {
	if (applicationStatusCode === '656') {
		return ONE_HOUR_BACKOFF_MS;
	}

	if (applicationStatusCode === '137') {
		return EMPTY_BATCH_BACKOFF_MS;
	}

	return undefined;
}
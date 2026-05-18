import type { TransportOutcome } from '../transport/contracts.js';

import type {
	GenericEventCoverageBoundary,
	GenericEventFamily,
} from './contracts.js';

const SUPPORTED_GENERIC_EVENT_SCOPES = ['homologation', 'batch-up-to-20'] as const;
const SUPPORTED_GENERIC_EVENT_FAMILIES = [
	'delivery-confirmation',
	'interested-actor-transporter',
	'delivery-failure',
	'econf',
] as const satisfies readonly GenericEventFamily[];
const GENERIC_EVENT_CODE_BY_FAMILY: Readonly<Record<GenericEventFamily, string>> = {
	'delivery-confirmation': '110130',
	'delivery-failure': '110192',
	'econf': '110750',
	'interested-actor-transporter': '110150',
};
const INCLUDED_SCOPE = [
	'homologation',
	'national-generic-event-service',
	'synchronous-processing',
	'batch-up-to-20',
	'110130',
	'110150',
	'110192',
	'110750',
] as const;
const EXCLUDED_SCOPE = [
	'production',
	'EPEC',
	'recipient-manifestation-facade',
	'correction-letter-facade',
	'cancellation-facade',
	'regional-event-variants',
	'automatic-batch-fragmentation',
] as const;
const EXTERNAL_DEPENDENCIES = [
	'digital-certificate',
	'national-service-availability',
	'event-specific-enablements',
] as const;
const NORMATIVE_SOURCES = [
	'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/MOC NFe ABI Visão Geral - v1.00 - minuta.md',
	'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-f0fdfae921.md',
	'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-b62dcde362.md',
	'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_EntregaNFe_PL_v1.01/',
	'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_AtorInteressado_PL_v1.02/',
	'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_InsucessoNFe_PL_v1.02/',
	'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_Econf_v1.00/',
] as const;

/** Returns the explicit supported and excluded boundary for the generic-event MVP. */
export function getGenericEventCoverageBoundary(): GenericEventCoverageBoundary {
	return {
		excludedScope: EXCLUDED_SCOPE,
		externalDependencies: EXTERNAL_DEPENDENCIES,
		includedScope: INCLUDED_SCOPE,
		normativeSources: NORMATIVE_SOURCES,
	};
}

/** Returns the supported family identifiers for the generic-event MVP. */
export function getSupportedGenericEventFamilies(): readonly GenericEventFamily[] {
	return SUPPORTED_GENERIC_EVENT_FAMILIES;
}

/** Returns the supported event codes keyed by the published family identifiers. */
export function getSupportedGenericEventFamilyCodes(): Readonly<
	Record<GenericEventFamily, string>
> {
	return GENERIC_EVENT_CODE_BY_FAMILY;
}

/** Returns the stable supported scope labels for the generic-event MVP. */
export function getSupportedGenericEventScopes(): readonly string[] {
	return SUPPORTED_GENERIC_EVENT_SCOPES;
}

/** Verifies whether the supplied family stays inside the published generic-event scope. */
export function isSupportedGenericEventFamily(
	family: string,
): family is GenericEventFamily {
	return SUPPORTED_GENERIC_EVENT_FAMILIES.includes(family as GenericEventFamily);
}

/** Builds the stable unsupported-scope message for generic-event operations. */
export function createUnsupportedGenericEventScopeMessage(
	requestedEnvironment: string,
	requestedOperation: string,
): string {
	return `Unsupported generic-event scope: environment "${requestedEnvironment}", operation "${requestedOperation}". Supported environment: "homologation".`;
}

/** Creates a minimal transport-like evidence object for pre-transport boundary outcomes. */
export function createGenericEventBoundaryTransportOutcome(
	failureReason: string,
): TransportOutcome {
	return {
		classification: 'usage-error',
		environment: 'homologation',
		evidence: {
			endpointUrl: '',
			provider: 'SVAN',
			requestEnvelopeXml: '',
		},
		failureReason,
		service: 'nfe-correction-letter',
	};
}
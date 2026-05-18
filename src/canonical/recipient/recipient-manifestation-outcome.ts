import type { TransportOutcome } from '../transport/contracts.js';

import {
	isRecipientDependencyLimited,
	isRecipientUsageBoundary,
} from './recipient-coverage-boundary.js';
import type {
	RecipientManifestationOutcome,
	RecipientManifestationRequest,
} from './recipient-shared.js';

/**
 * Maps the raw transport result into the recipient manifestation contract.
 *
 * @param input - Public manifestation request used for the transport call.
 * @param transportOutcome - Raw transport evidence returned by the SOAP layer.
 * @returns Structured recipient manifestation outcome.
 */
export function mapRecipientManifestationTransportOutcome(
	input: RecipientManifestationRequest,
	transportOutcome: TransportOutcome,
): RecipientManifestationOutcome {
	const responseEnvelopeXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
	const nestedStatusCodes = extractTagValues(responseEnvelopeXml, 'cStat');
	const nestedStatusMessages = extractTagValues(responseEnvelopeXml, 'xMotivo');
	const protocolNumbers = extractTagValues(responseEnvelopeXml, 'nProt');
	const applicationStatusCode =
		nestedStatusCodes.at(-1) ?? transportOutcome.applicationStatusCode;
	const applicationStatusMessage =
		nestedStatusMessages.at(-1) ?? transportOutcome.applicationStatusMessage;
	const protocolNumber = protocolNumbers.at(-1);

	if (transportOutcome.classification === 'success') {
		if (
			isRecipientDependencyLimited(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientManifestationOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'dependency-limited',
				failureReason: applicationStatusMessage,
				input,
				protocolNumber,
				transportOutcome,
			});
		}

		if (
			applicationStatusCode === '135' ||
			applicationStatusCode === '136' ||
			applicationStatusCode === '128'
		) {
			return createRecipientManifestationOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'success',
				input,
				protocolNumber,
				transportOutcome,
			});
		}

		if (
			isRecipientUsageBoundary(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientManifestationOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'usage-error',
				failureReason: applicationStatusMessage,
				input,
				protocolNumber,
				transportOutcome,
			});
		}

		return createRecipientManifestationOutcome({
			applicationStatusCode,
			applicationStatusMessage,
			classification: 'rejected',
			failureReason: applicationStatusMessage,
			input,
			protocolNumber,
			transportOutcome,
		});
	}

	if (transportOutcome.classification === 'functional-rejection') {
		if (
			isRecipientDependencyLimited(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientManifestationOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'dependency-limited',
				failureReason: applicationStatusMessage,
				input,
				protocolNumber,
				transportOutcome,
			});
		}

		if (
			isRecipientUsageBoundary(
				applicationStatusCode,
				applicationStatusMessage,
			)
		) {
			return createRecipientManifestationOutcome({
				applicationStatusCode,
				applicationStatusMessage,
				classification: 'usage-error',
				failureReason: applicationStatusMessage,
				input,
				protocolNumber,
				transportOutcome,
			});
		}

		return createRecipientManifestationOutcome({
			applicationStatusCode,
			applicationStatusMessage,
			classification: 'rejected',
			failureReason: applicationStatusMessage,
			input,
			protocolNumber,
			transportOutcome,
		});
	}

	return createRecipientManifestationOutcome({
		applicationStatusCode,
		applicationStatusMessage,
		classification: mapTransportClassification(transportOutcome.classification),
		failureReason: transportOutcome.failureReason ?? applicationStatusMessage,
		input,
		protocolNumber,
		transportOutcome,
	});
}

function mapTransportClassification(
	classification: TransportOutcome['classification'],
): RecipientManifestationOutcome['classification'] {
	switch (classification) {
		case 'protocol-error':
			return 'protocol-error';
		case 'timeout':
			return 'timeout';
		case 'unavailable':
			return 'unavailable';
		case 'usage-error':
			return 'usage-error';
		default:
			return 'rejected';
	}
}

function createRecipientManifestationOutcome(input: {
	readonly applicationStatusCode?: string;
	readonly applicationStatusMessage?: string;
	readonly classification: RecipientManifestationOutcome['classification'];
	readonly failureReason?: string;
	readonly input: RecipientManifestationRequest;
	readonly protocolNumber?: string;
	readonly transportOutcome: TransportOutcome;
}): RecipientManifestationOutcome {
	return {
		applicationStatusCode: input.applicationStatusCode,
		applicationStatusMessage: input.applicationStatusMessage,
		classification: input.classification,
		downloadRemainsSeparate: true,
		eventType: input.input.eventType,
		failureReason: input.failureReason,
		protocolNumber: input.protocolNumber,
		transportOutcome: input.transportOutcome,
	};
	}

function extractTagValues(xml: string, tagName: string): string[] {
	return Array.from(
		xml.matchAll(new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'gu')),
		(match) => match[1],
	);
}
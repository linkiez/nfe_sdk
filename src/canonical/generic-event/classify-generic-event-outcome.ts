import type { TransportOutcome } from '../transport/contracts.js';

import type {
	GenericEventBatchClassification,
	GenericEventItemClassification,
} from './contracts.js';

/** Classifies one remote generic-event item from the observed status code and message. */
export function classifyGenericEventItemStatus(input: {
	readonly applicationStatusCode?: string;
	readonly applicationStatusMessage?: string;
}): GenericEventItemClassification {
	if (isDependencyLimited(input.applicationStatusCode, input.applicationStatusMessage)) {
		return 'dependency-limited';
	}

	if (isUsageBoundary(input.applicationStatusCode, input.applicationStatusMessage)) {
		return 'usage-error';
	}

	if (isSuccessfulItemCode(input.applicationStatusCode)) {
		return 'success';
	}

	if (!input.applicationStatusCode) {
		return 'protocol-error';
	}

	return 'rejected';
}

/** Classifies the public batch outcome from the underlying transport evidence. */
export function classifyGenericEventBatchTransportOutcome(input: {
	readonly itemClassifications: readonly GenericEventItemClassification[];
	readonly transportOutcome: TransportOutcome;
}): GenericEventBatchClassification {
	if (input.transportOutcome.classification === 'timeout') {
		return 'timeout';
	}

	if (input.transportOutcome.classification === 'unavailable') {
		return 'unavailable';
	}

	if (input.transportOutcome.classification === 'protocol-error') {
		return 'protocol-error';
	}

	if (input.transportOutcome.classification === 'usage-error') {
		return 'usage-error';
	}

	if (input.itemClassifications.length === 0) {
		return 'protocol-error';
	}

	if (input.itemClassifications.every((classification) => classification === 'success')) {
		return 'success';
	}

	const successfulItemCount = input.itemClassifications.filter(
		(classification) => classification === 'success',
	).length;

	if (successfulItemCount > 0) {
		return 'partial-success';
	}

	if (
		input.itemClassifications.every(
			(classification) => classification === 'dependency-limited',
		)
	) {
		return 'dependency-limited';
	}

	return 'rejected';
}

function isSuccessfulItemCode(applicationStatusCode?: string): boolean {
	return (
		applicationStatusCode === '128' ||
		applicationStatusCode === '135' ||
		applicationStatusCode === '136'
	);
}

function isDependencyLimited(
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

function isUsageBoundary(
	applicationStatusCode?: string,
	applicationStatusMessage?: string,
): boolean {
	const normalizedMessage = applicationStatusMessage?.toLowerCase() ?? '';

	return (
		applicationStatusCode === '656' ||
		normalizedMessage.includes('consumo indevido') ||
		normalizedMessage.includes('uso indevido') ||
		normalizedMessage.includes('lote')
	);
}
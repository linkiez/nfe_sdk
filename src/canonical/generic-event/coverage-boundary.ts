import type { GenericEventValidationFailure } from './contracts.js';

const USAGE_ERROR_REASONS = [
	'unsupported-environment',
	'missing-batch-id',
	'empty-batch',
	'batch-limit-exceeded',
	'invalid-signing-context',
	'unsupported-family',
] as const;
const DEPENDENCY_LIMITED_REASONS = ['dependency-limited'] as const;

/** Stable boundary failure reasons used by the generic-event slice. */
export type GenericEventBoundaryFailureReason =
	| (typeof USAGE_ERROR_REASONS)[number]
	| (typeof DEPENDENCY_LIMITED_REASONS)[number];

/** Classifies one boundary failure reason into the public generic-event taxonomy. */
export function classifyGenericEventBoundaryFailure(
	reason: GenericEventBoundaryFailureReason,
): 'usage-error' | 'dependency-limited' {
	if (reason === 'dependency-limited') {
		return 'dependency-limited';
	}

	return 'usage-error';
}

/** Creates a standardized validation failure for published generic-event boundaries. */
export function createGenericEventBoundaryValidationFailure(input: {
	readonly fieldPath: string;
	readonly itemIndex?: number;
	readonly message: string;
	readonly reason: GenericEventBoundaryFailureReason;
}): GenericEventValidationFailure {
	return {
		fieldPath: input.fieldPath,
		itemIndex: input.itemIndex,
		message: input.message,
		reason: input.reason,
	};
}
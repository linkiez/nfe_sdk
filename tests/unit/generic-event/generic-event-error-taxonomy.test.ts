import { classifyGenericEventBoundaryFailure } from '../../../src/canonical/generic-event/coverage-boundary';

describe('generic-event error taxonomy', () => {
	it('keeps local usage errors distinct from remote service failures', () => {
		expect(classifyGenericEventBoundaryFailure('batch-limit-exceeded')).toBe(
			'usage-error',
		);
		expect(classifyGenericEventBoundaryFailure('unsupported-family')).toBe(
			'usage-error',
		);
		expect(classifyGenericEventBoundaryFailure('dependency-limited')).toBe(
			'dependency-limited',
		);
	});
});
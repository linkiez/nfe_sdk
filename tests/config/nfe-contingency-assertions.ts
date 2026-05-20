export function expectNFeContingencyBoundary(
  outcome: {
    readonly classification: string;
    readonly coverageBoundary?: {
      readonly code: string;
      readonly contingencyEnvironment?: string;
      readonly message: string;
      readonly retryable: boolean;
    };
    readonly transportOutcome: {
      readonly classification: string;
    };
  },
  expectedEnvironment: 'SVC-AN' | 'SVC-RS',
): void {
  expect(outcome.classification).toBe('contingency-boundary');
  expect(outcome.coverageBoundary).toEqual(
    expect.objectContaining({
      code: 'nfe-contingency-boundary',
      contingencyEnvironment: expectedEnvironment,
      retryable: true,
    }),
  );
  expect(outcome.coverageBoundary?.message).toContain(expectedEnvironment);
  expect(outcome.transportOutcome.classification).toBe('usage-error');
}

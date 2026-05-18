/**
 * Asserts that an operational result carries the expected transport classification.
 *
 * @param result - Result object that embeds a `transportOutcome` field.
 * @param classification - Expected transport classification.
 */
export function expectOperationalTransportClassification(
  result: {
    readonly transportOutcome: {
      readonly classification: string;
    };
  },
  classification: string,
): void {
  expect(result.transportOutcome.classification).toBe(classification);
}

/**
 * Asserts that an operational result carries the expected failure reason.
 *
 * @param result - Result object that optionally exposes a `failureReason` field.
 * @param failureReason - Expected synthesized failure reason.
 */
export function expectOperationalFailureReason(
  result: {
    readonly failureReason?: string;
  },
  failureReason: string,
): void {
  expect(result.failureReason).toBe(failureReason);
}
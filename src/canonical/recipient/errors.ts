/**
 * Base error for the recipient-distribution and manifestation slice.
 */
export class RecipientError extends Error {
  /**
   * @param message - Human-readable failure description.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'RecipientError';
  }
}

/**
 * Error raised when a manifestation event is requested for a transition that
 * the SEFAZ rules do not permit (e.g. re-confirming an already-confirmed note).
 */
export class InvalidManifestationTransitionError extends RecipientError {
  /**
   * @param currentType - The manifestation type that is already registered.
   * @param requestedType - The manifestation type that was attempted.
   */
  public constructor(currentType: string, requestedType: string) {
    super(
      `Invalid manifestation transition: cannot change from "${currentType}" to "${requestedType}".`,
    );
    this.name = 'InvalidManifestationTransitionError';
  }
}

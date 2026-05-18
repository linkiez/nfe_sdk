/**
 * Base error for the operational NFe slice.
 */
export class NFeOperationalError extends Error {
  /**
   * @param message - Human-readable failure description.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFeOperationalError';
  }
}

/**
 * Error raised when the operational caller provides unsupported input.
 */
export class NFeOperationalUsageError extends NFeOperationalError {
  /**
   * @param message - Failure description for invalid operational usage.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFeOperationalUsageError';
  }
}

/**
 * Error raised when an operational flow is requested outside the MVP scope.
 */
export class NFeOperationalUnsupportedScopeError extends NFeOperationalError {
  /**
   * @param message - Failure description for unsupported operational scope.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFeOperationalUnsupportedScopeError';
  }
}

/**
 * Input used to build an unsupported-scope diagnostic.
 */
export interface UnsupportedOperationalScopeDetails {
  /** Included environment values published by the MVP. */
  readonly supportedEnvironments: readonly string[];
  /** Requested environment value. */
  readonly requestedEnvironment: string;
  /** Requested operation identifier. */
  readonly requestedOperation: string;
}

/**
 * Builds the public error message for unsupported operational scope.
 *
 * @param details - Normalized requested values and supported boundaries.
 * @returns Stable human-readable diagnostic string.
 */
export function createUnsupportedOperationalScopeMessage(
  details: UnsupportedOperationalScopeDetails,
): string {
  return `Unsupported NFe operational scope: environment "${details.requestedEnvironment}", operation "${details.requestedOperation}". Supported environment: "${details.supportedEnvironments.join(', ')}".`;
}
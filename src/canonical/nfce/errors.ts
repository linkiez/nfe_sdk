/**
 * Base error for the NFC-e operational slice.
 */
export class NFCeOperationalError extends Error {
  /**
   * @param message - Human-readable failure description.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFCeOperationalError';
  }
}

/**
 * Error raised when the operational caller provides invalid NFC-e input.
 */
export class NFCeOperationalUsageError extends NFCeOperationalError {
  /**
   * @param message - Failure description for invalid operational usage.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFCeOperationalUsageError';
  }
}

/**
 * Error raised when an NFC-e flow is requested outside the published slice.
 */
export class NFCeOperationalUnsupportedScopeError extends NFCeOperationalError {
  /**
   * @param message - Failure description for unsupported operational scope.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'NFCeOperationalUnsupportedScopeError';
  }
}

/**
 * Input used to build an unsupported-scope diagnostic for NFC-e operations.
 */
export interface UnsupportedNFCeOperationalScopeDetails {
  /** Included environment values published by the slice. */
  readonly supportedEnvironments: readonly string[];
  /** Requested environment value. */
  readonly requestedEnvironment: string;
  /** Requested operation identifier. */
  readonly requestedOperation: string;
}

/**
 * Builds the public error message for unsupported NFC-e operational scope.
 *
 * @param details - Normalized requested values and supported boundaries.
 * @returns Stable human-readable diagnostic string.
 */
export function createUnsupportedNFCeOperationalScopeMessage(
  details: UnsupportedNFCeOperationalScopeDetails,
): string {
  return `Unsupported NFC-e operational scope: environment "${details.requestedEnvironment}", operation "${details.requestedOperation}". Supported environment: "${details.supportedEnvironments.join(', ')}".`;
}
/**
 * Base error for the initial SOAP transport slice.
 */
export class TransportError extends Error {
  /**
   * @param message - Human-readable failure description.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'TransportError';
  }
}

/**
 * Error raised when endpoint resolution falls outside the supported catalog.
 */
export class ResolveNFeServiceEndpointError extends TransportError {
  /**
   * @param message - Failure reason for the resolution step.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'ResolveNFeServiceEndpointError';
  }
}

/**
 * Error raised when the transport execution flow cannot proceed.
 */
export class ExecuteNFeSoapServiceError extends TransportError {
  /**
   * @param message - Failure reason for the execution step.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'ExecuteNFeSoapServiceError';
  }
}

/**
 * Error raised when the caller provides unsupported transport input.
 */
export class TransportUsageError extends TransportError {
  /**
   * @param message - Usage problem detected before any transport attempt.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'TransportUsageError';
  }
}

/**
 * Input used to build an explicit unsupported transport-combination diagnostic.
 */
export interface UnsupportedTransportCombinationDetails {
  readonly requestedEnvironment: string;
  readonly requestedService: string;
  readonly supportedEnvironments: readonly string[];
  readonly supportedServices: readonly string[];
}

/**
 * Builds the public error message for unsupported transport combinations.
 *
 * @param details - Normalized requested values and supported boundaries.
 * @returns Stable human-readable diagnostic string.
 */
export function createUnsupportedTransportCombinationMessage(
  details: UnsupportedTransportCombinationDetails,
): string {
  return `Unsupported transport combination: environment "${details.requestedEnvironment}", service "${details.requestedService}". Supported environment: "${details.supportedEnvironments.join(', ')}". Supported services: "${details.supportedServices.join('", "')}".`;
}
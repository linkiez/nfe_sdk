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
 * Error raised when a UF code cannot be resolved to a known SEFAZ autorizador.
 */
export class UnknownUFError extends TransportError {
  /**
   * @param uf - The unrecognised UF code that triggered the error.
   */
  public constructor(uf: string) {
    super(
      `Unknown UF code: "${uf}". Must be one of the 27 Brazilian state codes.`,
    );
    this.name = 'UnknownUFError';
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

export interface ObservableContingencyBoundaryDetails {
  readonly contingencyEnvironment: 'SVC-AN' | 'SVC-RS';
  readonly issuerUF: string;
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

export function createObservableContingencyBoundaryMessage(
  details: ObservableContingencyBoundaryDetails,
): string {
  return `authorizeNFe currently exposes only an observable contingency boundary for ${details.contingencyEnvironment} in production when issuer UF "${details.issuerUF}" delegates to a shared SVC route.`;
}
/**
 * Base error for the initial signing slice.
 */
export class SigningError extends Error {
  /**
   * @param message - Human-readable failure description.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'SigningError';
  }
}

/**
 * Error raised when the reusable signing context cannot be created.
 */
export class CreateSigningContextError extends SigningError {
  /**
   * @param message - Failure reason for the context creation step.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'CreateSigningContextError';
  }
}

/**
 * Error raised when the SDK cannot sign the provided NFe XML.
 */
export class SignNFeXmlError extends SigningError {
  /**
   * @param message - Failure reason for the XML signing step.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'SignNFeXmlError';
  }
}

/**
 * Error raised when local verification of the produced signature fails.
 */
export class SignatureVerificationError extends SigningError {
  /**
   * @param message - Failure reason for the local verification step.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'SignatureVerificationError';
  }
}
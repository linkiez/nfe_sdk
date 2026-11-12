/** Raised when the injected request executor fails for a reason other than a timeout. */
export class MDFeTransportError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = 'MDFeTransportError';
  }
}

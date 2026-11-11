/** Raised by `renderDAMDFE` when the XML cannot be drawn (malformed, not an authorized MDF-e). */
export class MDFeDamdfeUsageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MDFeDamdfeUsageError';
  }
}

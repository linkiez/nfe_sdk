import type { MDFeParseErrorCode } from './contracts.js';

/** Raised by `parseMDFeXml` when the XML is not a readable, supported MDF-e. */
export class MDFeParseError extends Error {
  readonly code: MDFeParseErrorCode;

  constructor(code: MDFeParseErrorCode, message: string) {
    super(message);
    this.name = 'MDFeParseError';
    this.code = code;
  }
}

import { parseSoapApplicationStatus } from './soap-response-parser.js';

/**
 * Minimal application status extracted from a SOAP response for transport classification.
 */
export interface ApplicationStatus {
  readonly applicationStatusCode?: string;
  readonly applicationStatusMessage?: string;
}

/**
 * Extracts the minimal application status needed by the transport slice.
 *
 * @param responseEnvelopeXml - SOAP response envelope returned by transport execution.
 * @returns Minimal application status fields.
 */
export function extractApplicationStatus(
  responseEnvelopeXml: string,
): ApplicationStatus {
  return parseSoapApplicationStatus(responseEnvelopeXml);
}
/**
 * Parsed application status extracted from a SOAP response payload.
 */
export interface ParsedSoapApplicationStatus {
  readonly applicationStatusCode?: string;
  readonly applicationStatusMessage?: string;
}

function extractTagText(xml: string, tagName: string): string | undefined {
  const tagExpression = new RegExp(`<${tagName}>([^<]+)</${tagName}>`);
  const match = tagExpression.exec(xml);

  return match?.[1]?.trim();
}

/**
 * Extracts the minimal application status used by the initial transport slice.
 *
 * @param responseEnvelopeXml - SOAP response envelope returned by the executor.
 * @returns Minimal parsed application status fields.
 */
export function parseSoapApplicationStatus(
  responseEnvelopeXml: string,
): ParsedSoapApplicationStatus {
  return {
    applicationStatusCode: extractTagText(responseEnvelopeXml, 'cStat'),
    applicationStatusMessage: extractTagText(responseEnvelopeXml, 'xMotivo'),
  };
}
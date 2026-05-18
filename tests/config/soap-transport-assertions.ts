/**
 * Asserts that a SOAP envelope contains the expected body element.
 *
 * @param xml - SOAP envelope XML.
 * @param bodyElementName - Element expected inside the SOAP body.
 */
export function expectSoapEnvelopeToContainBodyElement(
  xml: string,
  bodyElementName: string,
): void {
  expect(xml).toContain('<soap:Envelope');
  expect(xml).toContain('<soap:Body>');
  expect(xml).toContain(`<${bodyElementName}`);
}

/**
 * Asserts that a SOAP envelope contains the expected application status code.
 *
 * @param xml - SOAP response XML.
 * @param statusCode - Expected application status code.
 */
export function expectSoapEnvelopeToContainStatusCode(
  xml: string,
  statusCode: string,
): void {
  expect(xml).toContain(`<cStat>${statusCode}</cStat>`);
}

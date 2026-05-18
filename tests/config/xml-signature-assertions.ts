export function expectXmlToContainSignature(xml: string): void {
  expect(xml).toContain('<Signature');
  expect(xml).toContain('<SignedInfo>');
  expect(xml).toContain('<SignatureValue>');
  expect(xml).toContain('<X509Certificate>');
}

export function expectXmlToReferenceDocumentId(
  xml: string,
  documentId: string,
): void {
  expect(xml).toContain(`Reference URI="#${documentId}"`);
}

/**
 * Asserts that the signed XML contains every required structural fragment.
 *
 * @param xml - Signed XML payload.
 * @param requiredFragments - Structural fragments expected in the payload.
 */
export function expectXmlToMatchSignedStructure(
  xml: string,
  requiredFragments: readonly string[],
): void {
  for (const fragment of requiredFragments) {
    expect(xml).toContain(fragment);
  }
}

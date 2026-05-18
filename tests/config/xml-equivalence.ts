export function normalizeXmlForComparison(xml: string): string {
  return xml.replace(/>\s+</g, '><').trim();
}

export function expectXmlToBeEquivalent(
  receivedXml: string,
  expectedXml: string,
): void {
  expect(normalizeXmlForComparison(receivedXml)).toBe(
    normalizeXmlForComparison(expectedXml),
  );
}

/**
 * Removes the XML declaration and surrounding whitespace so the document can be embedded in
 * another XML document.
 *
 * @param xml - XML text, with or without `<?xml ...?>`.
 * @returns The XML without declaration.
 */
export const stripXmlDeclaration = (xml: string): string =>
  xml.trim().replace(/^<\?xml[^>]*\?>\s*/u, '');

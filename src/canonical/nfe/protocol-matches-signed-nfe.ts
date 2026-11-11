const tagValue = (xml: string, tag: string): string | undefined =>
  new RegExp(`<${tag}>([^<]*)</${tag}>`, 'u').exec(xml)?.[1]?.trim();

/**
 * Checks that a `protNFe` belongs to the given signed NFe: the protocol `digVal` must equal the
 * `DigestValue` of the NFe signature. A rebuilt NFe that differs in any signed byte fails.
 *
 * @param signedXml - Signed `NFe` XML.
 * @param protocolXml - `protNFe` block (or an answer containing it).
 * @returns `true` only when both digests exist and are equal.
 */
export function protocolMatchesSignedNfe(signedXml: string, protocolXml: string): boolean {
  const protocolDigest = tagValue(protocolXml, 'digVal');
  const signatureDigest = tagValue(signedXml, 'DigestValue');

  return protocolDigest !== undefined && protocolDigest === signatureDigest;
}

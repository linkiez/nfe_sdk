import { stripXmlDeclaration } from './strip-xml-declaration.js';

const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';

/**
 * Assembles the authorized `nfeProc` from the signed NFe that was sent and the `protNFe` block
 * found in a SEFAZ answer (authorization, receipt or protocol query).
 *
 * @param signedXml - Signed `NFe` XML exactly as sent to SEFAZ.
 * @param responseXml - SEFAZ answer (or the bare `protNFe` block) that carries the protocol.
 * @returns The `nfeProc` XML, or `undefined` when the answer has no `protNFe`.
 */
export function assembleNfeProc(signedXml: string, responseXml: string): string | undefined {
  const protocol = /<protNFe[\s\S]*?<\/protNFe>/u.exec(responseXml)?.[0];

  return protocol === undefined
    ? undefined
    : `<nfeProc xmlns="${NFE_NAMESPACE}" versao="4.00">${stripXmlDeclaration(signedXml)}${protocol}</nfeProc>`;
}

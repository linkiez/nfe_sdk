import type { NFCeSPAuthorizedXmlDanfeResult } from './contracts.js';
import projectAuthorizedNFCeXml from './render-nfce-sp-danfe-authorized-projection.js';
import renderNFCeHtml from './render-nfce-sp-danfe-html.js';

/**
 * Renders the HTML DANFE of an authorized SP NFC-e from its stored `nfeProc` XML.
 *
 * @param authorizedXml - Authorized `nfeProc` exactly as stored.
 * @param paperWidthMm - Supported physical output width.
 * @param logo - Validated issuer logo data URI, if any.
 * @returns The HTML DANFE with the identity of the rendered authorization.
 * @throws {NFCeOperationalUsageError} When the XML is not an authorized SP NFC-e.
 */
export default async function renderFromAuthorizedXml(
  authorizedXml: string,
  paperWidthMm: number,
  logo?: string,
): Promise<NFCeSPAuthorizedXmlDanfeResult> {
  const { presentation, identity } = projectAuthorizedNFCeXml(authorizedXml);

  return {
    accessKey: identity.accessKey,
    authorizedXmlSha256: identity.authorizedXmlSha256,
    environment: identity.environment,
    html: await renderNFCeHtml(presentation, identity, paperWidthMm, logo),
    mediaType: 'text/html',
    protocolNumber: identity.protocolNumber,
  };
}

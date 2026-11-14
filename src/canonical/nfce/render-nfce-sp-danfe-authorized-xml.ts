import { createHash } from 'node:crypto';

import type { NFCeSPAuthorizedXmlDanfeResult } from './contracts.js';
import { NFCeOperationalUsageError } from './errors.js';
import renderNFCeHtml from './render-nfce-sp-danfe-html.js';
import projectNFCe from './render-nfce-sp-danfe-projection.js';
import support from './render-nfce-sp-danfe-support.js';
import xml from './render-nfce-sp-danfe-xml.js';
import { SP_QR_CODE_BASE_URLS } from './resolve-nfce-qr-code-endpoint.js';

const NFCE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
/** `100` authorized and `150` authorized after the deadline are the protocols that authorize use. */
const AUTHORIZING_STATUSES = ['100', '150'];
const { child, localName, requiredText, text } = xml;
const { assertValidAccessKey, findExactlyOne, parseXml } = support;

function usage(message: string): NFCeOperationalUsageError {
  return new NFCeOperationalUsageError(`renderNFCeSPDANFE ${message}`);
}

/**
 * Renders the DANFE of an authorized SP NFC-e from its `nfeProc` (signed NFe plus `protNFe`), the
 * legal artifact the caller stores, without needing the captured SOAP evidence.
 *
 * Everything printed comes from the XML: the access key from `infNFe/@Id` must match the protocol,
 * the environment (`tpAmb`) must match the protocol, the protocol must authorize use (`cStat` 100
 * or 150) and the QR Code is the version 3 consultation URL of that key (an `infNFeSupl` QR Code,
 * when present, must be exactly that URL).
 *
 * @param authorizedXml - The stored authorized `nfeProc` XML.
 * @param paperWidthMm - Already validated paper width.
 * @returns Self-contained HTML plus identity and the digest of the XML that was rendered.
 * @throws {NFCeOperationalUsageError} When the XML is malformed, not an SP model 65 authorized
 *   `nfeProc`, or inconsistent.
 */
export default async function renderFromAuthorizedXml(
  authorizedXml: string,
  paperWidthMm: number,
): Promise<NFCeSPAuthorizedXmlDanfeResult> {
  const document = parseXml(authorizedXml, 'authorized nfeProc');
  const root = document.documentElement;
  if (
    root === null ||
    localName(root) !== 'nfeProc' ||
    root.namespaceURI !== NFCE_NAMESPACE
  ) {
    throw usage('requires an authorized nfeProc document.');
  }
  const nfe = findExactlyOne(document, 'NFe', 'NFe');
  const infNFe = child(nfe, 'infNFe');
  const id = infNFe?.getAttribute('Id');
  if (infNFe === undefined || id === null || id === undefined || !id.startsWith('NFe')) {
    throw usage('requires an NFC-e access key in infNFe/@Id.');
  }
  const accessKey = id.slice(3);
  assertValidAccessKey(accessKey);

  const ide = child(infNFe, 'ide');
  if (ide === undefined || requiredText(ide, 'cUF', 'ide/cUF') !== '35') {
    throw usage('supports SP NFC-e XML only.');
  }
  if (requiredText(ide, 'mod', 'ide/mod') !== '65') {
    throw usage('supports NFC-e model 65 only.');
  }
  const tpAmb = requiredText(ide, 'tpAmb', 'ide/tpAmb');
  const environment =
    tpAmb === '1' ? 'production' : tpAmb === '2' ? 'homologation' : undefined;
  if (environment === undefined) {
    throw usage('requires ide/tpAmb 1 or 2.');
  }

  const protocol = child(
    document.getElementsByTagNameNS(NFCE_NAMESPACE, 'protNFe').item(0) ?? root,
    'infProt',
  );
  if (protocol === undefined) {
    throw usage('requires an authorization protocol (protNFe/infProt).');
  }
  const protocolNumber = requiredText(protocol, 'nProt', 'protNFe/infProt/nProt');
  if (requiredText(protocol, 'chNFe', 'protNFe/infProt/chNFe') !== accessKey) {
    throw usage('protocol access key does not match the NFC-e.');
  }
  if (
    !AUTHORIZING_STATUSES.includes(
      requiredText(protocol, 'cStat', 'protNFe/infProt/cStat'),
    ) ||
    requiredText(protocol, 'tpAmb', 'protNFe/infProt/tpAmb') !== tpAmb
  ) {
    throw usage('protocol status or tpAmb does not confirm this authorization.');
  }

  const qrCodeUrl = `${SP_QR_CODE_BASE_URLS[environment]}?p=${accessKey}|3|${tpAmb}`;
  const supplementary = child(nfe, 'infNFeSupl');
  const embeddedQrCode = text(supplementary && child(supplementary, 'qrCode'));
  if (embeddedQrCode !== undefined && embeddedQrCode !== qrCodeUrl) {
    throw usage('QR Code in the XML does not match the access key and environment.');
  }

  const authorizedXmlSha256 = createHash('sha256')
    .update(authorizedXml, 'utf8')
    .digest('hex');
  const authorizationDate = requiredText(
    protocol,
    'dhRecbto',
    'protNFe/infProt/dhRecbto',
  );

  return {
    accessKey,
    authorizedXmlSha256,
    environment,
    html: await renderNFCeHtml(
      projectNFCe(nfe, accessKey, authorizationDate),
      { accessKey, environment, protocolNumber, qrCodeUrl, authorizedXmlSha256 },
      paperWidthMm,
    ),
    mediaType: 'text/html',
    protocolNumber,
  };
}

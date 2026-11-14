import { DOMParser } from '@xmldom/xmldom';

import { NFCeOperationalUsageError } from './errors.js';
import xml from './render-nfce-sp-danfe-xml.js';

const NFCE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
type XmlDocument = ReturnType<DOMParser['parseFromString']>;
type XmlElement = NonNullable<XmlDocument['documentElement']>;
const { localName } = xml;

function parseXml(
  xml: string,
  label: string,
): ReturnType<DOMParser['parseFromString']> {
  const errors: string[] = [];
  let document: XmlDocument;
  try {
    document = new DOMParser({
      onError: (level, message) => {
        if (level === 'error' || level === 'fatalError') errors.push(message);
      },
    }).parseFromString(xml, 'application/xml');
  } catch {
    throw new NFCeOperationalUsageError(
      `renderNFCeSPDANFE received malformed ${label} XML.`,
    );
  }

  if (errors.length > 0 || document.documentElement === null) {
    throw new NFCeOperationalUsageError(
      `renderNFCeSPDANFE received malformed ${label} XML.`,
    );
  }
  return document;
}

function assertSoapEnvelope(document: XmlDocument, label: string): void {
  const root = document.documentElement;
  const soapNamespaces = [
    'http://schemas.xmlsoap.org/soap/envelope/',
    'http://www.w3.org/2003/05/soap-envelope',
  ];
  if (
    root === null ||
    localName(root) !== 'Envelope' ||
    !soapNamespaces.includes(root.namespaceURI ?? '') ||
    !Array.from(root.childNodes).some(
      (node) =>
        node.nodeType === 1 &&
        localName(node as XmlElement) === 'Body' &&
        (node as XmlElement).namespaceURI === root.namespaceURI,
    )
  ) {
    throw new NFCeOperationalUsageError(
      `renderNFCeSPDANFE requires a valid SOAP ${label} envelope.`,
    );
  }
}

function findExactlyOne(
  document: ReturnType<DOMParser['parseFromString']>,
  name: string,
  label: string,
): XmlElement {
  const elements = Array.from(
    document.getElementsByTagNameNS(NFCE_NAMESPACE, name),
  );
  if (elements.length !== 1) {
    throw new NFCeOperationalUsageError(
      `renderNFCeSPDANFE requires exactly one ${label} element.`,
    );
  }
  return elements[0]!;
}

function assertValidAccessKey(accessKey: string): void {
  if (!/^\d{44}$/u.test(accessKey) || !accessKey.startsWith('35')) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires a 44-digit SP access key.',
    );
  }
  if (accessKey.slice(20, 22) !== '65') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE supports NFC-e model 65 only.',
    );
  }
  let weight = 2;
  let sum = 0;
  for (let index = 42; index >= 0; index -= 1) {
    sum += Number(accessKey[index]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  const remainder = sum % 11;
  const checkDigit = remainder < 2 ? 0 : 11 - remainder;
  if (Number(accessKey[43]) !== checkDigit) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE received an invalid access-key check digit.',
    );
  }
}

/** XML and access-key checks shared by the NFC-e DANFE rendering paths. */
export default { assertSoapEnvelope, assertValidAccessKey, findExactlyOne, parseXml };

import { DOMParser } from '@xmldom/xmldom';

import { NFCeOperationalUsageError } from './errors.js';

const NFCE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
type XmlDocument = ReturnType<DOMParser['parseFromString']>;
type XmlElement = NonNullable<XmlDocument['documentElement']>;

function localName(element: XmlElement): string {
  return element.localName ?? element.tagName.split(':').at(-1) ?? element.tagName;
}

function childElements(parent: XmlElement): XmlElement[] {
  return Array.from(parent.childNodes).filter(
    (node): node is XmlElement =>
      node.nodeType === 1 &&
      (node as XmlElement).namespaceURI === NFCE_NAMESPACE,
  );
}

function child(parent: XmlElement, name: string): XmlElement | undefined {
  return childElements(parent).find((element) => localName(element) === name);
}

function descendants(parent: XmlElement, name: string): XmlElement[] {
  return Array.from(parent.getElementsByTagNameNS(NFCE_NAMESPACE, name));
}

function text(element: XmlElement | undefined): string | undefined {
  const value = element?.textContent?.trim();
  return value === undefined || value.length === 0 ? undefined : value;
}

function requiredText(
  parent: XmlElement,
  name: string,
  field: string,
): string {
  const value = text(child(parent, name));
  if (value === undefined) {
    throw new NFCeOperationalUsageError(
      `renderNFCeSPDANFE requires NFC-e field "${field}".`,
    );
  }
  return value;
}

const xml = { child, descendants, localName, requiredText, text };

export default xml;

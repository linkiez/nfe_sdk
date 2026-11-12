import { DOMParser } from '@xmldom/xmldom';

import { XmlNode, type DomElementLike } from './xml-node.js';

/**
 * Parses XML into a namespace-agnostic tree.
 *
 * @param xml - XML text.
 * @returns The root element, or `undefined` when the text is not well-formed XML.
 */
export function parseXmlTree(xml: string): XmlNode | undefined {
  if (xml.trim() === '') return undefined;
  let failed = false;
  try {
    const document = new DOMParser({
      onError: () => {
        failed = true;
      },
    }).parseFromString(xml, 'text/xml');
    const root = document?.documentElement as unknown as DomElementLike | null | undefined;

    return failed || root === null || root === undefined ? undefined : new XmlNode(root);
  } catch {
    return undefined;
  }
}

import { DOMParser } from '@xmldom/xmldom';

import { SignEventXmlError } from './errors.js';

/**
 * Detects the signable event identifier from an unsigned XML payload.
 *
 * @param unsignedXml - Unsigned event XML payload provided by the caller.
 * @returns The `Id` value from the supported `infEvento` element.
 * @throws {SignEventXmlError} When the XML does not contain a signable `infEvento` identifier.
 */
export function detectEventDocumentId(unsignedXml: string): string {
  const document = new DOMParser().parseFromString(unsignedXml, 'text/xml');
  const eventElement = document.getElementsByTagName('infEvento').item(0);

  if (!eventElement) {
    throw new SignEventXmlError(
      'The unsigned XML must contain an infEvento element.',
    );
  }

  const documentId = eventElement.getAttribute('Id');

  if (!documentId) {
    throw new SignEventXmlError(
      'The unsigned XML must provide an infEvento Id attribute.',
    );
  }

  return documentId;
}
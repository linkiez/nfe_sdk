import {
  expectXmlToContainSignature,
  expectXmlToMatchSignedStructure,
  expectXmlToReferenceDocumentId,
} from './xml-signature-assertions';

export function expectXmlToReferenceEventId(
  xml: string,
  documentId: string,
): void {
  expectXmlToReferenceDocumentId(xml, documentId);
}

export { expectXmlToContainSignature, expectXmlToMatchSignedStructure };

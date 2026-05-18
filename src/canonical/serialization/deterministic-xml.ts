import type {
  CanonicalEnviNFeDocument,
  CanonicalNFeDocument,
} from '../shared/contracts.js';
import {
  getOrderedEnviNFeMetadata,
  getOrderedNFeMetadata,
  getOrderedPayloadEntries,
} from './xml-ordering.js';

const XML_DECLARATION = '<?xml version="1.0" encoding="utf-8"?>';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function serializeEntries(
  entries: ReadonlyArray<readonly [tagName: string, value: string]>,
  indentation: string,
): string {
  return entries
    .map(
      ([tagName, value]) =>
        `${indentation}<${tagName}>${escapeXml(value)}</${tagName}>`,
    )
    .join('\n');
}

function serializePayload(document: CanonicalNFeDocument): string {
  const payloadEntries = getOrderedPayloadEntries(document.payload);

  if (payloadEntries.length === 0) {
    return '';
  }

  return [
    '  <payload>',
    serializeEntries(payloadEntries, '    '),
    '  </payload>',
  ].join('\n');
}

function serializeNFeElement(document: CanonicalNFeDocument): string {
  const sections = [
    `<NFe versao="${escapeXml(document.metadata.version)}">`,
    '  <metadata>',
    serializeEntries(getOrderedNFeMetadata(document), '    '),
    '  </metadata>',
  ];
  const payloadSection = serializePayload(document);

  if (payloadSection.length > 0) {
    sections.push(payloadSection);
  }

  sections.push('</NFe>');

  return sections.join('\n');
}

/**
 * Serializes a canonical `NFe` document into deterministic XML.
 *
 * @param document - Canonical NFe document created by the root facade.
 * @returns Deterministic XML representation for the initial SDK slice.
 */
export function serializeDeterministicNFeXml(
  document: CanonicalNFeDocument,
): string {
  return `${XML_DECLARATION}\n${serializeNFeElement(document)}`;
}

/**
 * Serializes a canonical `enviNFe` document into deterministic XML.
 *
 * @param document - Canonical enviNFe document created by the root facade.
 * @returns Deterministic XML representation for the initial SDK slice.
 */
export function serializeDeterministicEnviNFeXml(
  document: CanonicalEnviNFeDocument,
): string {
  const serializedDocuments = document.documents
    .map((nfeDocument) => serializeNFeElement(nfeDocument))
    .join('\n')
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n');

  return [
    XML_DECLARATION,
    `<enviNFe versao="${escapeXml(document.metadata.version)}">`,
    '  <metadata>',
    serializeEntries(getOrderedEnviNFeMetadata(document), '    '),
    '  </metadata>',
    '  <documents>',
    serializedDocuments,
    '  </documents>',
    '</enviNFe>',
  ].join('\n');
}
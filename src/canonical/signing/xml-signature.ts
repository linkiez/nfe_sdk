import { DOMParser } from '@xmldom/xmldom';
import { SignedXml } from 'xml-crypto';

import { SignNFeXmlError } from './errors.js';

const DIGEST_ALGORITHM = 'http://www.w3.org/2001/04/xmlenc#sha256';
const ENVELOPED_SIGNATURE_TRANSFORM =
  'http://www.w3.org/2000/09/xmldsig#enveloped-signature';
const NFE_REFERENCE_XPATH = "//*[local-name(.)='infNFe']";
const NFE_SIGNATURE_LOCATION_XPATH = "//*[local-name(.)='NFe']";
const EVENT_REFERENCE_XPATH = "//*[local-name(.)='infEvento']";
const EVENT_SIGNATURE_LOCATION_XPATH = "//*[local-name(.)='evento']";
const SIGNATURE_ALGORITHM = 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256';
const XML_CANONICALIZATION = 'http://www.w3.org/2001/10/xml-exc-c14n#';

/**
 * Detects the signed NFe document identifier from an unsigned XML payload.
 *
 * @param unsignedXml - Unsigned XML payload provided by the caller.
 * @returns The `Id` value from the supported `infNFe` element.
 * @throws {SignNFeXmlError} When the XML does not contain a signable `infNFe` identifier.
 */
export function detectNFeDocumentId(unsignedXml: string): string {
  const document = new DOMParser().parseFromString(unsignedXml, 'text/xml');
  const infNFeElement = document.getElementsByTagName('infNFe').item(0);

  if (!infNFeElement) {
    throw new SignNFeXmlError('The unsigned XML must contain an infNFe element.');
  }

  const documentId = infNFeElement.getAttribute('Id');

  if (!documentId) {
    throw new SignNFeXmlError('The unsigned XML must provide an infNFe Id attribute.');
  }

  return documentId;
}

/**
 * Applies XMLDSig to the supported unsigned NFe XML payload.
 *
 * @param unsignedXml - Unsigned NFe XML payload.
 * @param documentId - Signable identifier referenced by XMLDSig.
 * @param privateKeyPem - PEM-encoded private key extracted from the A1 payload.
 * @param publicCertPem - PEM-encoded public certificate extracted from the A1 payload.
 * @returns Signed XML payload with an enveloped XMLDSig block.
 */
export function signNFeXmlDocument(input: {
  documentId: string;
  privateKeyPem: string;
  publicCertPem: string;
  unsignedXml: string;
}): string {
  const signedXml = new SignedXml({
    privateKey: input.privateKeyPem,
    publicCert: input.publicCertPem,
  });

  signedXml.canonicalizationAlgorithm = XML_CANONICALIZATION;
  signedXml.signatureAlgorithm = SIGNATURE_ALGORITHM;
  signedXml.addReference({
    digestAlgorithm: DIGEST_ALGORITHM,
    transforms: [ENVELOPED_SIGNATURE_TRANSFORM, XML_CANONICALIZATION],
    uri: `#${input.documentId}`,
    xpath: NFE_REFERENCE_XPATH,
  });
  signedXml.computeSignature(input.unsignedXml, {
    location: {
      action: 'append',
      reference: NFE_SIGNATURE_LOCATION_XPATH,
    },
  });

  return signedXml.getSignedXml();
}

/**
 * Applies XMLDSig to a supported unsigned event XML payload.
 *
 * @param unsignedXml - Unsigned event XML payload.
 * @param documentId - Signable identifier referenced by XMLDSig.
 * @param privateKeyPem - PEM-encoded private key extracted from the A1 payload.
 * @param publicCertPem - PEM-encoded public certificate extracted from the A1 payload.
 * @returns Signed XML payload with an enveloped XMLDSig block.
 */
export function signEventXmlDocument(input: {
  documentId: string;
  privateKeyPem: string;
  publicCertPem: string;
  unsignedXml: string;
}): string {
  const signedXml = new SignedXml({
    privateKey: input.privateKeyPem,
    publicCert: input.publicCertPem,
  });

  signedXml.canonicalizationAlgorithm = XML_CANONICALIZATION;
  signedXml.signatureAlgorithm = SIGNATURE_ALGORITHM;
  signedXml.addReference({
    digestAlgorithm: DIGEST_ALGORITHM,
    transforms: [ENVELOPED_SIGNATURE_TRANSFORM, XML_CANONICALIZATION],
    uri: `#${input.documentId}`,
    xpath: EVENT_REFERENCE_XPATH,
  });
  signedXml.computeSignature(input.unsignedXml, {
    location: {
      action: 'append',
      reference: EVENT_SIGNATURE_LOCATION_XPATH,
    },
  });

  return signedXml.getSignedXml();
}
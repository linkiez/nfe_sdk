import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import { SignedXml } from 'xml-crypto';

import type { SignatureVerificationReport } from './contracts.js';
import { SignatureVerificationError } from './errors.js';

const XMLDSIG_NAMESPACE = 'http://www.w3.org/2000/09/xmldsig#';

/**
 * Verifies the local XMLDSig signature before returning the signed XML to the caller.
 *
 * @param signedXml - Signed NFe XML payload.
 * @param publicCertPem - PEM-encoded public certificate used during verification.
 * @returns Verification report with the referenced signed identifier.
 * @throws {SignatureVerificationError} When the signature is missing or invalid.
 */
export function verifySignedNFeXml(input: {
  publicCertPem: string;
  signedXml: string;
}): SignatureVerificationReport {
  const document = new DOMParser().parseFromString(input.signedXml, 'text/xml');
  const signatureNode = document
    .getElementsByTagNameNS(XMLDSIG_NAMESPACE, 'Signature')
    .item(0);

  if (!signatureNode) {
    throw new SignatureVerificationError(
      'The signed XML does not contain an XMLDSig Signature element.',
    );
  }

  const verifier = new SignedXml({
    getCertFromKeyInfo: () => null,
    publicCert: input.publicCertPem,
  });
  const signatureXml = new XMLSerializer().serializeToString(signatureNode);

  verifier.loadSignature(signatureXml);

  if (!verifier.checkSignature(input.signedXml)) {
    throw new SignatureVerificationError(
      'The signed XML failed local signature verification.',
    );
  }

  const referenceUri = verifier.getReferences()[0]?.uri ?? '';

  return {
    isValid: true,
    verifiedReference: referenceUri.replace(/^#/, ''),
  };
}
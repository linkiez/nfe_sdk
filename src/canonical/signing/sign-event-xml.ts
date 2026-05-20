import type { SignEventXmlInput } from './contracts.js';
import { getSigningRuntimeMaterial } from './contracts.js';
import { detectEventDocumentId } from './event-signature-target.js';
import { SignEventXmlError } from './errors.js';
import { verifySignedEventXml } from './verify-signed-event-xml.js';
import { signEventXmlDocument } from './xml-signature.js';

/**
 * Signs a supported unsigned event XML payload and verifies it locally before returning.
 *
 * @param input - Reusable signing context plus the unsigned event XML payload.
 * @returns Signed event XML payload.
 * @throws {SignEventXmlError} When the signing context was not created by this SDK instance.
 */
export async function signEventXml(input: SignEventXmlInput): Promise<string> {
  const runtimeMaterial = getSigningRuntimeMaterial(input.signingContext);

  if (!runtimeMaterial) {
    throw new SignEventXmlError(
      'The provided signing context was not created by this SDK instance.',
    );
  }

  const documentId = detectEventDocumentId(input.unsignedXml);
  const signedXml = signEventXmlDocument({
    documentId,
    privateKeyPem: runtimeMaterial.privateKeyPem,
    publicCertPem: runtimeMaterial.publicCertPem,
    unsignedXml: input.unsignedXml,
  });
  const verificationReport = verifySignedEventXml({
    publicCertPem: runtimeMaterial.publicCertPem,
    signedXml,
  });

  if (
    !verificationReport.isValid ||
    verificationReport.verifiedReference !== documentId
  ) {
    throw new SignEventXmlError(
      'The signed XML did not pass local verification for the expected event Id.',
    );
  }

  return signedXml;
}
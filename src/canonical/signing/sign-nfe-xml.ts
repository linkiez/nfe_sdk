import type { SignNFeXmlInput } from './contracts.js';
import { getSigningRuntimeMaterial } from './contracts.js';
import { SignNFeXmlError } from './errors.js';
import { verifySignedNFeXml } from './verify-signed-nfe-xml.js';
import { detectNFeDocumentId, signNFeXmlDocument } from './xml-signature.js';

/**
 * Signs a supported unsigned NFe XML payload and verifies it locally before returning.
 *
 * @param input - Reusable signing context plus the unsigned XML payload.
 * @returns Signed NFe XML payload.
 * @throws {SignNFeXmlError} When the signing context was not created by this SDK instance.
 */
export async function signNFeXml(input: SignNFeXmlInput): Promise<string> {
  const runtimeMaterial = getSigningRuntimeMaterial(input.signingContext);

  if (!runtimeMaterial) {
    throw new SignNFeXmlError(
      'The provided signing context was not created by this SDK instance.',
    );
  }

  const documentId = detectNFeDocumentId(input.unsignedXml);
  const signedXml = signNFeXmlDocument({
    documentId,
    privateKeyPem: runtimeMaterial.privateKeyPem,
    publicCertPem: runtimeMaterial.publicCertPem,
    unsignedXml: input.unsignedXml,
  });
  const verificationReport = verifySignedNFeXml({
    publicCertPem: runtimeMaterial.publicCertPem,
    signedXml,
  });

  if (!verificationReport.isValid || verificationReport.verifiedReference !== documentId) {
    throw new SignNFeXmlError(
      'The signed XML did not pass local verification for the expected document Id.',
    );
  }

  return signedXml;
}
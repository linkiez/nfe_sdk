import { DOMParser } from '@xmldom/xmldom';

import type { SignEventXmlInput } from './contracts.js';
import { getSigningRuntimeMaterial } from './contracts.js';
import { SignEventXmlError } from './errors.js';
import { verifySignedNFeXml } from './verify-signed-nfe-xml.js';
import { signInutilizationXmlDocument } from './xml-signature.js';

/**
 * Signs an unsigned `inutNFe` request and verifies the signature locally.
 *
 * @param input - Reusable signing context plus the unsigned `inutNFe` XML.
 * @returns Signed `inutNFe` XML.
 * @throws {SignEventXmlError} When the context is foreign or `infInut` has no `Id`.
 */
export async function signInutilizationXml(input: SignEventXmlInput): Promise<string> {
  const runtimeMaterial = getSigningRuntimeMaterial(input.signingContext);

  if (!runtimeMaterial) {
    throw new SignEventXmlError('The provided signing context was not created by this SDK instance.');
  }
  const element = new DOMParser()
    .parseFromString(input.unsignedXml, 'text/xml')
    .getElementsByTagName('infInut')
    .item(0);
  const documentId = element?.getAttribute('Id');

  if (!documentId) {
    throw new SignEventXmlError('The unsigned XML must contain an infInut element with an Id attribute.');
  }
  const signedXml = signInutilizationXmlDocument({
    documentId,
    privateKeyPem: runtimeMaterial.privateKeyPem,
    publicCertPem: runtimeMaterial.publicCertPem,
    unsignedXml: input.unsignedXml,
  });
  const report = verifySignedNFeXml({ publicCertPem: runtimeMaterial.publicCertPem, signedXml });

  if (!report.isValid || report.verifiedReference !== documentId) {
    throw new SignEventXmlError('The signed inutilization did not pass local verification.');
  }

  return signedXml;
}

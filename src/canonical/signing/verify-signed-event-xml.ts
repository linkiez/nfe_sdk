import type { SignatureVerificationReport } from './contracts.js';
import { verifySignedNFeXml } from './verify-signed-nfe-xml.js';

/**
 * Verifies the local XMLDSig signature for a signed event XML payload.
 *
 * @param signedXml - Signed event XML payload.
 * @param publicCertPem - PEM-encoded public certificate used during verification.
 * @returns Verification report with the referenced signed identifier.
 */
export function verifySignedEventXml(input: {
  publicCertPem: string;
  signedXml: string;
}): SignatureVerificationReport {
  return verifySignedNFeXml(input);
}
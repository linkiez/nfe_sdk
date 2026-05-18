import type { SignNFeXmlInput } from '../signing/contracts.js';
import { signNFeXml as signInternalNFeXml } from '../signing/sign-nfe-xml.js';

/**
 * Public root-facade function that signs a supported unsigned NFe XML payload.
 *
 * @param input - Reusable signing context and unsigned NFe XML payload.
 * @returns Signed NFe XML payload that already passed local verification.
 */
export async function signNFeXml(input: SignNFeXmlInput): Promise<string> {
  return signInternalNFeXml(input);
}
import type { SignEventXmlInput } from '../signing/contracts.js';
import { signEventXml as signInternalEventXml } from '../signing/sign-event-xml.js';

/**
 * Public root-facade function that signs a supported unsigned event XML payload.
 *
 * @param input - Reusable signing context and unsigned event XML payload.
 * @returns Signed event XML payload that already passed local verification.
 */
export async function signEventXml(input: SignEventXmlInput): Promise<string> {
  return signInternalEventXml(input);
}
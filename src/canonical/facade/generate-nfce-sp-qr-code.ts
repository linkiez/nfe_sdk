import { generateNFCeSPQRCode as generateInternalNFCeSPQRCode } from '../nfce/generate-nfce-sp-qr-code.js';
import type {
  NFCeSPQRCodeRequest,
  NFCeSPQRCodeResponse,
} from '../nfce/contracts.js';

/**
 * Public root-facade function that generates the paulista NFC-e QR Code result.
 *
 * @param input - Structured SP QR Code request provided by the integrator.
 * @returns Successful QR Code result or an explicit unsupported-state boundary.
 */
export function generateNFCeSPQRCode(
  input: NFCeSPQRCodeRequest,
): NFCeSPQRCodeResponse {
  return generateInternalNFCeSPQRCode(input);
}
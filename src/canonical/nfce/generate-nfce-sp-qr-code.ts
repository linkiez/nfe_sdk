import { normalizeEnvironment } from '../shared/environment-rule.js';

import type {
  NFCeSPQRCodeRequest,
  NFCeSPQRCodeResponse,
  NFCeSPQRCodeResult,
} from './contracts.js';
import { createUnsupportedStateNFCeSPQRCodeBoundary } from './coverage-boundary.js';
import { NFCeOperationalUsageError } from './errors.js';
import { assertNFCeModel65, assertValidNFCeCSCInput } from './prepare-signing-prerequisites.js';
import { resolveNFCeQRCodeEndpoint } from './resolve-nfce-qr-code-endpoint.js';
import { resolveNFCeUF } from './resolve-nfce-uf.js';

const SUPPORTED_QR_CODE_UF = 'SP' as const;

/**
 * Validates that the provided access key is shaped like a published NFC-e key.
 *
 * @param accessKey - Full 44-digit access key supplied to the helper.
 * @throws {NFCeOperationalUsageError} When the key is not 44 digits.
 */
function assertValidNFCeAccessKey(accessKey: string): void {
  if (!/^\d{44}$/.test(accessKey)) {
    throw new NFCeOperationalUsageError(
      'generateNFCeSPQRCode requires a 44-digit NFC-e accessKey.',
    );
  }

  assertNFCeModel65(accessKey.slice(20, 22), 'generateNFCeSPQRCode');
}

/**
 * Generates the paulista NFC-e QR Code consultation URL for the supported local slice.
 *
 * The v3 online URL carries only the access key, the version and the environment; the CSC is
 * optional and, when informed, only its identifier is echoed.
 *
 * @param input - Explicit SP request with access key and environment; the CSC is optional.
 * @returns Successful QR Code result or an explicit unsupported-state boundary.
 * @throws {NFCeOperationalUsageError} When the access key, environment, or CSC input is invalid.
 */
export function generateNFCeSPQRCode(
  input: NFCeSPQRCodeRequest,
): NFCeSPQRCodeResponse {
  const normalizedEnvironment = normalizeEnvironment(input.environment);

  assertValidNFCeAccessKey(input.accessKey);
  if (input.csc !== undefined) {
    assertValidNFCeCSCInput(input.csc);
  }

  const resolvedUF = resolveNFCeUF(input.accessKey);

  if (input.uf.trim().toUpperCase() !== resolvedUF) {
    throw new NFCeOperationalUsageError(
      `generateNFCeSPQRCode received uf "${input.uf}" but accessKey resolves to "${resolvedUF}".`,
    );
  }

  const endpoint = resolveNFCeQRCodeEndpoint(resolvedUF, normalizedEnvironment);

  if (endpoint === undefined) {
    return createUnsupportedStateNFCeSPQRCodeBoundary(resolvedUF);
  }

  const qrCodeUrl = endpoint.composeOnlineUrl(input.accessKey);

  const result: NFCeSPQRCodeResult = {
    accessKey: input.accessKey,
    baseUrl: endpoint.baseUrl,
    ...(input.csc === undefined ? {} : { cscId: input.csc.cscId }),
    environment: normalizedEnvironment,
    qrCodeUrl,
    qrCodeVersion: endpoint.qrCodeVersion,
    uf: SUPPORTED_QR_CODE_UF,
  };

  return result;
}
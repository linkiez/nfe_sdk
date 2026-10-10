import type { CanonicalEnvironment } from '../shared/contracts.js';
import { normalizeEnvironment } from '../shared/environment-rule.js';

import type {
  NFCeSPQRCodeRequest,
  NFCeSPQRCodeResponse,
  NFCeSPQRCodeResult,
} from './contracts.js';
import { createUnsupportedStateNFCeSPQRCodeBoundary } from './coverage-boundary.js';
import { NFCeOperationalUsageError } from './errors.js';
import { assertNFCeModel65, assertValidNFCeCSCInput } from './prepare-signing-prerequisites.js';
import { resolveNFCeUF } from './resolve-nfce-uf.js';

const SP_QR_CODE_BASE_URL_BY_ENVIRONMENT: Readonly<Record<CanonicalEnvironment, string>> = {
  homologation:
    'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
  production:
    'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
};

const QR_CODE_VERSION = '3' as const;
const SUPPORTED_QR_CODE_UF = 'SP' as const;

/**
 * Maps the canonical environment to the NFC-e QR Code `tpAmb` value.
 *
 * @param environment - Normalized canonical environment.
 * @returns QR Code environment marker expected by the paulista consultation URL.
 */
function mapEnvironmentToQRCodeTpAmb(
  environment: CanonicalEnvironment,
): '1' | '2' {
  return environment === 'production' ? '1' : '2';
}

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
 * @param input - Explicit SP request with access key, environment, and CSC input.
 * @returns Successful QR Code result or an explicit unsupported-state boundary.
 * @throws {NFCeOperationalUsageError} When the access key, environment, or CSC input is invalid.
 */
export function generateNFCeSPQRCode(
  input: NFCeSPQRCodeRequest,
): NFCeSPQRCodeResponse {
  const normalizedEnvironment = normalizeEnvironment(input.environment);

  assertValidNFCeAccessKey(input.accessKey);
  assertValidNFCeCSCInput(input.csc);

  const resolvedUF = resolveNFCeUF(input.accessKey);

  if (input.uf.trim().toUpperCase() !== resolvedUF) {
    throw new NFCeOperationalUsageError(
      `generateNFCeSPQRCode received uf "${input.uf}" but accessKey resolves to "${resolvedUF}".`,
    );
  }

  if (resolvedUF !== SUPPORTED_QR_CODE_UF) {
    return createUnsupportedStateNFCeSPQRCodeBoundary(resolvedUF);
  }

  const baseUrl = SP_QR_CODE_BASE_URL_BY_ENVIRONMENT[normalizedEnvironment];
  const qrCodeUrl =
    `${baseUrl}?p=${input.accessKey}|${QR_CODE_VERSION}|` +
    mapEnvironmentToQRCodeTpAmb(normalizedEnvironment);

  const result: NFCeSPQRCodeResult = {
    accessKey: input.accessKey,
    baseUrl,
    cscId: input.csc.cscId,
    environment: normalizedEnvironment,
    qrCodeUrl,
    uf: SUPPORTED_QR_CODE_UF,
  };

  return result;
}
import type { CanonicalEnvironment } from '../shared/contracts.js';

/** QR Code version used by every NFC-e emitted by this SDK (NT 2025.001). */
const QR_CODE_VERSION = '3' as const;

/**
 * Public consultation (QR Code) base URLs of São Paulo, the only UF with evidence in the matrix.
 * Single source for QR Code generation, DANFE rendering and offline preparation.
 */
export const SP_QR_CODE_BASE_URLS: Readonly<Record<CanonicalEnvironment, string>> = {
  homologation:
    'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
  production:
    'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
};

/** Consultation-by-key page of SP (`urlChave` of the NFC-e), per environment (ENCAT, QR Code table). */
const SP_CONSULTATION_URLS: Readonly<Record<CanonicalEnvironment, string>> = {
  homologation: 'https://www.homologacao.nfce.fazenda.sp.gov.br/consulta',
  production: 'https://www.nfce.fazenda.sp.gov.br/consulta',
};

/** Official QR Code endpoint of one UF and environment. */
export interface NFCeQRCodeEndpoint {
  readonly uf: 'SP';
  /** Public consultation base URL. */
  readonly baseUrl: string;
  /** Consultation-by-key URL printed on the DANFE and sent as `urlChave`. */
  readonly consultationUrl: string;
  readonly qrCodeVersion: typeof QR_CODE_VERSION;
  /** QR Code environment marker: `1` production, `2` homologation. */
  readonly tpAmb: '1' | '2';
  /** Composes the online v3 URL (`p=chave|3|tpAmb`); the CSC is never part of it. */
  composeOnlineUrl(accessKey: string): string;
}

/**
 * Resolves the official QR Code endpoint for a UF and environment.
 *
 * @param uf - Two-letter UF resolved from the access key.
 * @param environment - Normalized canonical environment.
 * @returns The endpoint, or `undefined` when the UF has no official evidence in the matrix.
 */
export function resolveNFCeQRCodeEndpoint(
  uf: string,
  environment: CanonicalEnvironment,
): NFCeQRCodeEndpoint | undefined {
  if (uf !== 'SP') {
    return undefined;
  }

  const baseUrl = SP_QR_CODE_BASE_URLS[environment];
  const tpAmb = environment === 'production' ? '1' : '2';

  return {
    baseUrl,
    composeOnlineUrl: (accessKey) =>
      `${baseUrl}?p=${accessKey}|${QR_CODE_VERSION}|${tpAmb}`,
    consultationUrl: SP_CONSULTATION_URLS[environment],
    qrCodeVersion: QR_CODE_VERSION,
    tpAmb,
    uf: 'SP',
  };
}

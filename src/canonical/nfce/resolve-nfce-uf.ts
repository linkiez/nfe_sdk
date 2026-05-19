import type { NFCeAuthorizationDocumentInput } from './contracts.js';
import { NFCeOperationalUsageError } from './errors.js';
import { normalizeNFCeInput } from './normalize-nfce-input.js';

const UF_BY_IBGE_CODE = {
  '11': 'RO',
  '12': 'AC',
  '13': 'AM',
  '14': 'RR',
  '15': 'PA',
  '16': 'AP',
  '17': 'TO',
  '21': 'MA',
  '22': 'PI',
  '23': 'CE',
  '24': 'RN',
  '25': 'PB',
  '26': 'PE',
  '27': 'AL',
  '28': 'SE',
  '29': 'BA',
  '31': 'MG',
  '32': 'ES',
  '33': 'RJ',
  '35': 'SP',
  '41': 'PR',
  '42': 'SC',
  '43': 'RS',
  '50': 'MS',
  '51': 'MT',
  '52': 'GO',
  '53': 'DF',
} as const;

/**
 * Supported Brazilian federation units inferred from a 44-digit access key prefix.
 */
export type NFCeUF = (typeof UF_BY_IBGE_CODE)[keyof typeof UF_BY_IBGE_CODE];

/**
 * Resolves the operational UF from an NFC-e document identifier shaped like an access key.
 *
 * @param input - NFC-e document input or raw document identifier.
 * @returns Federation-unit abbreviation inferred from the identifier prefix.
 * @throws {NFCeOperationalUsageError} When the identifier is blank or not a supported 44-digit access key.
 */
export function resolveNFCeUF(input: NFCeAuthorizationDocumentInput | string): NFCeUF {
  const documentId =
    typeof input === 'string' ? input.trim() : normalizeNFCeInput(input).documentId;

  if (!/^\d{44}$/.test(documentId)) {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe requires a 44-digit access-key-like documentId to infer the operational UF in this slice.',
    );
  }

  const resolvedUF = UF_BY_IBGE_CODE[documentId.slice(0, 2) as keyof typeof UF_BY_IBGE_CODE];

  if (!resolvedUF) {
    throw new NFCeOperationalUsageError(
      `authorizeNFCe could not infer the operational UF from documentId "${documentId}".`,
    );
  }

  return resolvedUF;
}
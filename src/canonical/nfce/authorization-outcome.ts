import type { NFeAuthorizationOutcome } from '../nfe/contracts.js';

import type { NFCeAuthorizationOutcome } from './contracts.js';

/**
 * Maps the shared NFe authorization outcome into the public NFC-e outcome shape.
 *
 * `cStat` 150 (authorized out of time) is flagged as `authorizedLate`. A denial answer is mapped to
 * `protocol-error`, because the NFC-e has no denial.
 *
 * @param outcome - Structured NFe authorization outcome reused by the NFC-e slice.
 * @param qrCodeUrl - Optional URL associated with the same authorized document and environment.
 * @returns Structured NFC-e authorization outcome exposed by the root facade.
 */
export function mapNFCeAuthorizationOutcome(
  outcome: NFeAuthorizationOutcome,
  qrCodeUrl?: string,
): NFCeAuthorizationOutcome {
  const denied = outcome.classification === 'denied';
  const authorized = outcome.classification === 'authorized';

  return {
    acceptedForTransport: true,
    // The NFC-e has no denial (Ajuste SINIEF 10/2023): an issuer irregularity is rejection 781.
    // A denial answer is unexpected, so it is never reported as `denied` nor as a final state.
    classification: denied ? 'protocol-error' : outcome.classification,
    ...(authorized && outcome.protocolStatusCode === '150'
      ? { authorizedLate: true }
      : {}),
    ...(outcome.protocolStatusCode === undefined
      ? {}
      : { protocolStatusCode: outcome.protocolStatusCode }),
    ...(denied
      ? {
          failureReason: `Resposta de denegacao inesperada para NFC-e (cStat ${outcome.protocolStatusCode ?? 'desconhecido'}); consulte a situacao pela chave.`,
        }
      : outcome.failureReason === undefined
        ? {}
        : { failureReason: outcome.failureReason }),
    ...(outcome.signedXml === undefined ? {} : { signedXml: outcome.signedXml }),
    ...(authorized && outcome.authorizedXml !== undefined
      ? { authorizedXml: outcome.authorizedXml }
      : {}),
    protocolNumber: outcome.protocolNumber,
    ...(outcome.classification === 'authorized' && qrCodeUrl !== undefined
      ? { qrCodeUrl }
      : {}),
    ...(outcome.classification === 'received' &&
    outcome.nextAction === 'reconcileNFeReceipt'
      ? { nextAction: outcome.nextAction }
      : {}),
    receiptNumber: outcome.receiptNumber,
    transportOutcome: outcome.transportOutcome,
    validationFailures: [],
  };
}
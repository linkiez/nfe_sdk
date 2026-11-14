import type { NFeSignedEventDetails } from '../nfe/contracts.js';

const NFCE_MODEL = '65';
const MODEL_OFFSET = 20;
const MAX_APPLICATION_VERSION_LENGTH = 20;
/** UFs whose NFC-e inutilization is dispensed since 2026-11-01 (SP, AC, BA). */
const INUTILIZATION_DISPENSED_UFS: readonly string[] = ['35', '12', '29'];

const modelOf = (accessKey: string): string =>
  accessKey.slice(MODEL_OFFSET, MODEL_OFFSET + 2);

/**
 * Whether a 44-digit access key belongs to an NFC-e (model 65).
 *
 * @param accessKey - Access key, valid or not.
 * @returns True when it has 44 digits and the model digits are `65`.
 */
function isNfceAccessKey(accessKey: string | undefined): boolean {
  return (
    accessKey !== undefined &&
    /^\d{44}$/u.test(accessKey) &&
    modelOf(accessKey) === NFCE_MODEL
  );
}

/**
 * Validates the cancellation by substitution (event 110112) before anything is signed.
 *
 * @param accessKey - Access key of the NFC-e being cancelled.
 * @param event - Event details that carry `substituteAccessKey`.
 * @returns The first problem found, or `undefined`.
 */
function validateSubstitution(
  accessKey: string,
  event: NFeSignedEventDetails,
): string | undefined {
  if (!isNfceAccessKey(accessKey)) {
    return 'The cancellation by substitution exists for the NFC-e (model 65) only.';
  }
  if (!isNfceAccessKey(event.substituteAccessKey)) {
    return 'substituteAccessKey must be the 44-digit access key of an NFC-e (model 65).';
  }
  if (event.substituteAccessKey === accessKey) {
    return 'substituteAccessKey must be different from the cancelled note.';
  }
  const version = event.applicationVersion;
  if (
    version === undefined ||
    version !== version.trim() ||
    version.length < 1 ||
    version.length > MAX_APPLICATION_VERSION_LENGTH
  ) {
    return 'applicationVersion (verAplic) is required, with 1 to 20 characters, for the cancellation by substitution.';
  }
  return undefined;
}

/**
 * Whether the NFC-e inutilization of a UF is dispensed (no request is sent).
 *
 * @param uf - 2-digit IBGE code of the issuer UF.
 * @returns True for SP, AC and BA.
 */
function isInutilizationDispensed(uf: string): boolean {
  return INUTILIZATION_DISPENSED_UFS.includes(uf);
}

/** Model-65 rules of the NFC-e lifecycle events and inutilization shared by the SDK paths. */
export default {
  isInutilizationDispensed,
  isNfceAccessKey,
  validateSubstitution,
};

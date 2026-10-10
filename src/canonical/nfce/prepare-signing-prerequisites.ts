import { computeNFeAccessKey } from '../nfe/access-key.js';
import { computeHashCSRT } from '../nfe/hash-csrt.js';

import type {
  NFCeCSCInput,
  NFCeSigningPrerequisitesInput,
  NFCeSigningPrerequisitesResult,
} from './contracts.js';
import { getNFCeSigningPrerequisiteDependencies } from './contracts.js';
import { NFCeOperationalUsageError } from './errors.js';

/**
 * Validates that the NFC-e model identifier stays aligned with the published `65` semantics.
 *
 * @param model - Model value supplied by the caller.
 * @param operation - Human-readable operation label used in the error message.
 * @throws {NFCeOperationalUsageError} When the provided model is not `65`.
 */
export function assertNFCeModel65(model: string, operation: string): void {
  if (model !== '65') {
    throw new NFCeOperationalUsageError(
      `${operation} requires model "65"; received "${model}".`,
    );
  }
}

/**
 * Validates that the explicit NFC-e CSC input is present and non-empty.
 *
 * @param csc - CSC identifier and token supplied by the integrator.
 * @throws {NFCeOperationalUsageError} When either CSC field is blank.
 */
export function assertValidNFCeCSCInput(csc: NFCeCSCInput): void {
  if (csc.cscId.trim().length === 0) {
    throw new NFCeOperationalUsageError('CSC id must not be empty.');
  }

  if (csc.cscToken.trim().length === 0) {
    throw new NFCeOperationalUsageError('CSC token must not be empty.');
  }
}

/**
 * Prepares additive NFC-e signing prerequisites without implying authorization or QR Code completion.
 *
 * @param input - Structured fields required to derive chNFe, cDV, and hashCSRT.
 * @returns Structured prerequisite bundle with calculated identifiers and deferred dependencies.
 */
export function prepareNFCeSigningPrerequisites(
  input: NFCeSigningPrerequisitesInput,
): NFCeSigningPrerequisitesResult {
  assertNFCeModel65(input.accessKeyFields.mod, 'NFC-e signing prerequisites');
  assertValidNFCeCSCInput(input.csc);

  const accessKey = computeNFeAccessKey(input.accessKeyFields);
  const hashCsrt = computeHashCSRT(input.hashCsrtInput);

  return {
    accessKey: accessKey.chNFe,
    checkDigit: accessKey.cDV,
    deferredOperationalDependencies: getNFCeSigningPrerequisiteDependencies(),
    hashCsrt,
    receivedInputs: {
      cscId: input.csc.cscId,
      hasCscToken: true,
      hasHashCsrtInput: true,
      model: input.accessKeyFields.mod,
    },
  };
}
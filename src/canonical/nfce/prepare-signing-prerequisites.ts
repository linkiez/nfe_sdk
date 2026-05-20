import { computeNFeAccessKey } from '../nfe/access-key.js';
import { computeHashCSRT } from '../nfe/hash-csrt.js';

import type {
  NFCeSigningPrerequisitesInput,
  NFCeSigningPrerequisitesResult,
} from './contracts.js';
import { getNFCeSigningPrerequisiteDependencies } from './contracts.js';
import { NFCeOperationalUsageError } from './errors.js';

/**
 * Prepares additive NFC-e signing prerequisites without implying authorization or QR Code completion.
 *
 * @param input - Structured fields required to derive chNFe, cDV, and hashCSRT.
 * @returns Structured prerequisite bundle with calculated identifiers and deferred dependencies.
 */
export function prepareNFCeSigningPrerequisites(
  input: NFCeSigningPrerequisitesInput,
): NFCeSigningPrerequisitesResult {
  if (input.accessKeyFields.mod !== '65') {
    throw new NFCeOperationalUsageError(
      `NFC-e signing prerequisites require model "65"; received "${input.accessKeyFields.mod}".`,
    );
  }

  if (input.csc.cscId.trim().length === 0) {
    throw new NFCeOperationalUsageError('CSC id must not be empty.');
  }

  if (input.csc.cscToken.trim().length === 0) {
    throw new NFCeOperationalUsageError('CSC token must not be empty.');
  }

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
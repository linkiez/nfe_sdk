import { submitNFeCorrectionLetter as submitInternalNFeCorrectionLetter } from '../nfe/submit-nfe-correction-letter.js';
import type { OperationalMaintenanceOutcome } from '../nfe/contracts.js';
import type { OperationalMaintenanceFacadeInput } from '../nfe/maintenance-outcome.js';

/**
 * Public root-facade function that runs the supported correction-letter flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured correction-letter outcome.
 */
export async function submitNFeCorrectionLetter(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return submitInternalNFeCorrectionLetter(input);
}
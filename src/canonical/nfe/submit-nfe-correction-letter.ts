import type { OperationalMaintenanceOutcome } from './contracts.js';
import type { OperationalMaintenanceFacadeInput } from './maintenance-outcome.js';
import { executeOperationalMaintenanceOperation } from './maintenance-outcome.js';

/**
 * Executes the supported homologation correction-letter maintenance flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured correction-letter outcome.
 */
export async function submitNFeCorrectionLetter(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return executeOperationalMaintenanceOperation({
    ...input,
    operation: 'submit-nfe-correction-letter',
  });
}
import { submitNFeInutilization as submitInternalNFeInutilization } from '../nfe/submit-nfe-inutilization.js';
import type { OperationalMaintenanceOutcome } from '../nfe/contracts.js';
import type { OperationalMaintenanceFacadeInput } from '../nfe/maintenance-outcome.js';

/**
 * Public root-facade function that runs the supported inutilization flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured inutilization outcome.
 */
export async function submitNFeInutilization(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return submitInternalNFeInutilization(input);
}
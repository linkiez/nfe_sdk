import { cancelNFe as cancelInternalNFe } from '../nfe/cancel-nfe.js';
import type { OperationalMaintenanceOutcome } from '../nfe/contracts.js';
import type { OperationalMaintenanceFacadeInput } from '../nfe/maintenance-outcome.js';

/**
 * Public root-facade function that runs the supported cancellation flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured cancellation outcome.
 */
export async function cancelNFe(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return cancelInternalNFe(input);
}
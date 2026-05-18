import type { OperationalMaintenanceOutcome } from './contracts.js';
import type { OperationalMaintenanceFacadeInput } from './maintenance-outcome.js';
import { executeOperationalMaintenanceOperation } from './maintenance-outcome.js';

/**
 * Executes the supported homologation cancellation maintenance flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured cancellation outcome.
 */
export async function cancelNFe(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return executeOperationalMaintenanceOperation({
    ...input,
    operation: 'cancel-nfe',
  });
}
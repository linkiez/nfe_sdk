import type { OperationalMaintenanceOutcome } from './contracts.js';
import type { OperationalMaintenanceFacadeInput } from './maintenance-outcome.js';
import { executeOperationalMaintenanceOperation } from './maintenance-outcome.js';

/**
 * Executes the supported homologation inutilization maintenance flow.
 *
 * @param input - Operation-specific maintenance input.
 * @returns Structured inutilization outcome.
 */
export async function submitNFeInutilization(
  input: OperationalMaintenanceFacadeInput,
): Promise<OperationalMaintenanceOutcome> {
  return executeOperationalMaintenanceOperation({
    ...input,
    operation: 'submit-nfe-inutilization',
  });
}
import { normalizeRequiredIdentifier } from './contracts.js';

/**
 * Normalizes the initial canonical batch identifier.
 *
 * @param batchId - Raw batch identifier provided by the integrator.
 * @returns The normalized canonical batch identifier.
 */
export function normalizeBatchId(batchId: string): string {
  return normalizeRequiredIdentifier(batchId, 'batchId');
}
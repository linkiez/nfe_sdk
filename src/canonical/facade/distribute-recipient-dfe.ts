import { distributeRecipientDFe as distributeInternalRecipientDFe } from '../recipient/distribute-recipient-dfe.js';
import type {
	RecipientDistributionOutcome,
	RecipientDistributionQuery,
} from '../recipient/recipient-shared.js';

/**
 * Public root-facade function that runs recipient DFe distribution through `distNSU`.
 *
 * @param input - Structured distribution query received from the integrator.
 * @returns Structured recipient distribution outcome.
 */
export async function distributeRecipientDFe(
	input: RecipientDistributionQuery,
): Promise<RecipientDistributionOutcome> {
	return distributeInternalRecipientDFe(input);
}
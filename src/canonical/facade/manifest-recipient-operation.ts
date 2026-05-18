import { manifestRecipientOperation as manifestInternalRecipientOperation } from '../recipient/manifest-recipient-operation.js';
import type {
	RecipientManifestationOutcome,
	RecipientManifestationRequest,
} from '../recipient/recipient-shared.js';

/**
 * Public root-facade function that registers one supported recipient manifestation event.
 *
 * @param input - Structured manifestation request received from the integrator.
 * @returns Structured recipient manifestation outcome.
 */
export async function manifestRecipientOperation(
	input: RecipientManifestationRequest,
): Promise<RecipientManifestationOutcome> {
	return manifestInternalRecipientOperation(input);
}
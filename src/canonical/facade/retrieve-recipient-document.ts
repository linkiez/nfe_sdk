import { retrieveRecipientDocument as retrieveInternalRecipientDocument } from '../recipient/retrieve-recipient-document.js';
import type {
	RecipientDocumentRetrievalOutcome,
	RecipientDocumentRetrievalRequest,
} from '../recipient/recipient-shared.js';

/**
 * Public root-facade function that retrieves one later recipient document through
 * an additive `distNSU` continuation step.
 *
 * @param input - Structured follow-up retrieval request.
 * @returns Structured follow-up retrieval outcome.
 */
export async function retrieveRecipientDocument(
	input: RecipientDocumentRetrievalRequest,
): Promise<RecipientDocumentRetrievalOutcome> {
	return retrieveInternalRecipientDocument(input);
}

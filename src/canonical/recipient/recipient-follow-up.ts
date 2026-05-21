import type {
	RecipientDocumentEnvelope,
	RecipientDocumentRetrievalClassification,
	RecipientFollowUpTarget,
} from './recipient-shared.js';

/**
 * Finds the first distributed document that satisfies the follow-up target.
 *
 * @param documents - Distributed document envelopes from one continuity attempt.
 * @param target - Functional target for the expected document.
 * @returns The matched document when one is present.
 */
export function findRecipientFollowUpDocument(
	documents: readonly RecipientDocumentEnvelope[],
	target: RecipientFollowUpTarget,
): RecipientDocumentEnvelope | undefined {
	return documents.find(
		(document) =>
			document.accessKey === target.accessKey &&
			target.documentKinds.includes(document.kind),
	);
}

/**
 * Maps one distribution classification into a follow-up retrieval classification.
 *
 * This helper preserves explicit boundaries for unsupported scope and dependency
 * limitations instead of promoting consNSU, consChNFe, or internal polling.
 *
 * @param distributionClassification - Classification returned by recipient distribution.
 * @param hasMatchedDocument - Whether the expected document was found.
 * @returns Retrieval classification derived from the observed continuity result.
 */
export function mapRecipientRetrievalClassification(
	distributionClassification: string,
	hasMatchedDocument: boolean,
): RecipientDocumentRetrievalClassification {
	if (hasMatchedDocument) {
		return 'document-available';
	}

	if (distributionClassification === 'documents-available') {
		return 'document-pending';
	}

	if (
		distributionClassification === 'no-new-documents' ||
		distributionClassification === 'dependency-limited' ||
		distributionClassification === 'timeout' ||
		distributionClassification === 'unavailable' ||
		distributionClassification === 'protocol-error' ||
		distributionClassification === 'usage-error' ||
		distributionClassification === 'unsupported-scope'
	) {
		return distributionClassification;
	}

	return 'document-pending';
}

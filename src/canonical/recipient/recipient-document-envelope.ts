import { gunzipSync } from 'node:zlib';

import type { RecipientDocumentEnvelope } from './recipient-shared.js';

/**
 * Parses the distributed `docZip` items into structured recipient document envelopes.
 *
 * @param responseEnvelopeXml - SOAP response envelope returned by the distribution flow.
 * @returns Structured recipient document envelopes extracted from the response.
 */
export function parseRecipientDocumentEnvelopes(
	responseEnvelopeXml: string,
): readonly RecipientDocumentEnvelope[] {
	const docZipMatches = responseEnvelopeXml.matchAll(
		/<docZip\s+NSU="([^"]+)"\s+schema="([^"]+)">([^<]+)<\/docZip>/gu,
	);

	return Array.from(docZipMatches, ([, nsu, schemaType, compressedPayload]) => {
		const rawXml = decodeRecipientDocZipPayload(compressedPayload);
		const rootTag = extractRootTag(rawXml);
		const accessKey = extractFirstTagText(rawXml, 'chNFe');

		return {
			accessKey,
			compressedPayload,
			kind: inferEnvelopeKind(schemaType, rootTag),
			normalizedPayload: {
				issuerDocumentNumber:
					extractFirstTagText(rawXml, 'CNPJ') ??
					extractFirstTagText(rawXml, 'CPF'),
				rawXml,
				recipientDocumentNumber: extractFirstTagText(rawXml, 'CNPJDest'),
				rootTag,
			},
			nsu,
			schemaType,
		} satisfies RecipientDocumentEnvelope;
	});
}

function decodeRecipientDocZipPayload(compressedPayload: string): string {
	const decodedBuffer = Buffer.from(compressedPayload, 'base64');

	try {
		return gunzipSync(decodedBuffer).toString('utf8');
	} catch {
		return decodedBuffer.toString('utf8');
	}
}

function inferEnvelopeKind(
	schemaType: string,
	rootTag: string,
): RecipientDocumentEnvelope['kind'] {
	const normalizedSchemaType = schemaType.toLowerCase();
	const normalizedRootTag = rootTag.toLowerCase();

	if (
		normalizedSchemaType.includes('resnfe') ||
		normalizedRootTag === 'resnfe'
	) {
		return 'summary';
	}

	if (
		normalizedSchemaType.includes('procnfe') ||
		normalizedRootTag === 'procnfe' ||
		normalizedRootTag === 'nfeproc'
	) {
		return 'full-document';
	}

	return 'other';
}

function extractRootTag(xml: string): string {
	const match = /<([A-Za-z0-9:_-]+)(\s|>)/u.exec(xml.trim());

	return match?.[1] ?? 'unknown';
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
	const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

	return match?.[1];
}
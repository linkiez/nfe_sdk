/** One parsed item extracted from a `retEnvEvento` payload. */
export interface ParsedGenericEventResponseItem {
	readonly applicationStatusCode?: string;
	readonly applicationStatusMessage?: string;
	readonly eventCode?: string;
	readonly protocolNumber?: string;
	readonly receiptTimestamp?: string;
}

/** Parsed projection extracted from a `retEnvEvento` XML response. */
export interface ParsedGenericEventBatchResponse {
	readonly applicationStatusCode?: string;
	readonly applicationStatusMessage?: string;
	readonly items: readonly ParsedGenericEventResponseItem[];
}

/** Parses the minimal `retEnvEvento` fields required by the generic-event MVP. */
export function parseRetEnvEventoXml(
	responseXml: string,
): ParsedGenericEventBatchResponse {
	const trimmedResponseXml = responseXml.trim();
	const itemBlocks = extractInfEventoBlocks(trimmedResponseXml);

	return {
		applicationStatusCode: extractFirstTagValue(trimmedResponseXml, 'cStat'),
		applicationStatusMessage: extractFirstTagValue(trimmedResponseXml, 'xMotivo'),
		items: itemBlocks.map((itemBlock) => ({
			applicationStatusCode: extractFirstTagValue(itemBlock, 'cStat'),
			applicationStatusMessage: extractFirstTagValue(itemBlock, 'xMotivo'),
			eventCode: extractFirstTagValue(itemBlock, 'tpEvento'),
			protocolNumber: extractFirstTagValue(itemBlock, 'nProt'),
			receiptTimestamp: extractFirstTagValue(itemBlock, 'dhRegEvento'),
		})),
	};
}

function extractInfEventoBlocks(responseXml: string): string[] {
	return Array.from(
		responseXml.matchAll(/<infEvento>([\s\S]*?)<\/infEvento>/gu),
		(match) => match[1],
	);
}

function extractFirstTagValue(
	responseXml: string,
	tagName: string,
): string | undefined {
	const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(responseXml);
	return match?.[1];
}
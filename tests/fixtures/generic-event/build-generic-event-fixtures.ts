import type {
	GenericEventBatchRequest,
	GenericEventInputItem,
} from '../../../src/canonical/generic-event/contracts.js';

/** Creates one fixture generic-event item with deterministic defaults. */
export function createFixtureGenericEventItem(
	overrides: Partial<GenericEventInputItem> = {},
): GenericEventInputItem {
	return {
		accessKey:
			overrides.accessKey ?? '35190500000000000000550010000000011000000010',
		author:
			overrides.author ?? {
				documentNumber: '12345678000195',
				documentType: 'cnpj',
			},
		eventCode: overrides.eventCode ?? '110130',
		family: overrides.family ?? 'delivery-confirmation',
		occurredAt: overrides.occurredAt ?? '2026-05-18T10:00:00-03:00',
		payload:
			overrides.payload ?? {
				deliveredAt: '2026-05-18T09:55:00-03:00',
				deliveryHash: 'fixture-hash',
				recipientDocument: '12345678909',
				recipientName: 'Jose da Silva',
			},
		sequenceNumber: overrides.sequenceNumber ?? 1,
	};
}

/** Creates one fixture generic-event batch request with deterministic defaults. */
export function buildFixtureGenericEventBatchRequest(
	overrides: Partial<GenericEventBatchRequest> = {},
): GenericEventBatchRequest {
	return {
		batchId: overrides.batchId ?? '000000000000001',
		environment: overrides.environment ?? 'homologation',
		items:
			overrides.items ?? [createFixtureGenericEventItem()],
		requestExecutor: overrides.requestExecutor,
		signingContext:
			overrides.signingContext ?? {
				certificateIdentity: 'fixture-certificate',
				sourceMetadata: { type: 'in-memory-content' },
				supportedAlgorithms: [
					'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
				],
			},
		timeoutMs: overrides.timeoutMs ?? 5000,
	};
}

/** Builds a minimal `retEnvEvento` fixture XML payload. */
export function buildFixtureRetEnvEventoXml(input: {
	readonly batchStatusCode?: string;
	readonly batchStatusMessage?: string;
	readonly items: readonly {
		readonly eventCode: string;
		readonly protocolNumber?: string;
		readonly receiptTimestamp?: string;
		readonly statusCode: string;
		readonly statusMessage: string;
	}[];
}): string {
	const batchStatusCode = input.batchStatusCode ?? '128';
	const batchStatusMessage = input.batchStatusMessage ?? 'Lote de evento processado';

	return [
		'<retEnvEvento versao="1.00">',
		`<cStat>${batchStatusCode}</cStat>`,
		`<xMotivo>${batchStatusMessage}</xMotivo>`,
		...input.items.map((item) =>
			[
				'<retEvento versao="1.00">',
				'<infEvento>',
				`<tpEvento>${item.eventCode}</tpEvento>`,
				`<cStat>${item.statusCode}</cStat>`,
				`<xMotivo>${item.statusMessage}</xMotivo>`,
				item.protocolNumber ? `<nProt>${item.protocolNumber}</nProt>` : '',
				item.receiptTimestamp
					? `<dhRegEvento>${item.receiptTimestamp}</dhRegEvento>`
					: '',
				'</infEvento>',
				'</retEvento>',
			].join(''),
		),
		'</retEnvEvento>',
	].join('');
}
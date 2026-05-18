import * as publicApi from '../../../src/index';

import { buildFixtureGenericEventBatchRequest } from '../../fixtures/generic-event/build-generic-event-fixtures';

type SubmitGenericEvents = (input: {
	batchId: string;
	environment: string;
	items: readonly unknown[];
	requestExecutor: (input: {
		endpointUrl: string;
		headers: Readonly<Record<string, string>>;
		requestXml: string;
		service: string;
		timeoutMs: number;
	}) => Promise<{
		headers: Readonly<Record<string, string>>;
		responseXml: string;
		status: number;
	}>;
	signingContext: unknown;
	timeoutMs: number;
}) => Promise<{
	acceptedForTransport: boolean;
	applicationStatusCode?: string;
	classification: string;
	itemOutcomes: readonly {
		applicationStatusCode?: string;
		classification: string;
		protocolNumber?: string;
	}[];
	transportOutcome: {
		classification: string;
	};
}>;

describe('submitGenericEvents integration', () => {
	it('returns a structured batch outcome for one supported generic event', async () => {
		const submitGenericEvents = (publicApi as Record<string, unknown>)
			.submitGenericEvents as SubmitGenericEvents | undefined;
		const request = buildFixtureGenericEventBatchRequest();

		expect(typeof submitGenericEvents).toBe('function');

		const outcome = await submitGenericEvents?.({
			...request,
			requestExecutor: async (transportRequest) => {
				expect(transportRequest.requestXml).toContain('<tpEvento>110130</tpEvento>');
				expect(transportRequest.requestXml).toContain('<idLote>000000000000001</idLote>');

				return {
					headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
					responseXml: [
						'<retEnvEvento versao="1.00">',
						'<cStat>128</cStat>',
						'<xMotivo>Lote de evento processado</xMotivo>',
						'<retEvento versao="1.00">',
						'<infEvento>',
						'<tpEvento>110130</tpEvento>',
						'<cStat>135</cStat>',
						'<xMotivo>Evento registrado e vinculado a NF-e</xMotivo>',
						'<nProt>135260000001130</nProt>',
						'</infEvento>',
						'</retEvento>',
						'</retEnvEvento>',
					].join(''),
					status: 200,
				};
			},
			timeoutMs: 5000,
		});

		expect(outcome?.acceptedForTransport).toBe(true);
		expect(outcome?.classification).toBe('success');
		expect(outcome?.itemOutcomes).toEqual([
			expect.objectContaining({
				applicationStatusCode: '135',
				classification: 'success',
				protocolNumber: '135260000001130',
			}),
		]);
		expect(outcome?.transportOutcome.classification).toBe('success');
	});
});
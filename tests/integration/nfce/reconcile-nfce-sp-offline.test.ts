import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { reconcileNFCeSPOffline } from '../../../src/index.js';
import type { RequestExecutor } from '../../../src/canonical/transport/request-executor.js';
import { buildNFCeSPOfflineRecord } from '../../fixtures/nfce/build-nfce-sp-offline-record.js';

interface ReconciliationResponseFixture {
  readonly batchStatus: string;
  readonly message: string;
  readonly protocolNumber?: string;
  readonly protocolStatus?: string;
  readonly receiptNumber?: string;
}

interface ReconciliationFixtures {
  readonly authorized: ReconciliationResponseFixture;
  readonly duplicate: ReconciliationResponseFixture;
  readonly receipt: ReconciliationResponseFixture;
}

const fixtures = JSON.parse(
  readFileSync(
    resolve(
      process.cwd(),
      'tests/fixtures/nfce/offline/reconciliation-responses.json',
    ),
    'utf8',
  ),
) as ReconciliationFixtures;

function responseXml(
  fixture: ReconciliationResponseFixture,
  accessKey: string,
): string {
  const protocol =
    fixture.protocolNumber === undefined
      ? ''
      : `<protNFe><infProt><tpAmb>1</tpAmb><chNFe>${accessKey}</chNFe><nProt>${fixture.protocolNumber}</nProt><cStat>${fixture.protocolStatus}</cStat></infProt></protNFe>`;
  const receipt =
    fixture.receiptNumber === undefined
      ? ''
      : `<nRec>${fixture.receiptNumber}</nRec>`;
  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>1</tpAmb><cStat>${fixture.batchStatus}</cStat><xMotivo>${fixture.message}</xMotivo>${receipt}${protocol}</retEnviNFe></soap:Body></soap:Envelope>`;
}

function successfulExecutor(xml: string): jest.MockedFunction<RequestExecutor> {
  return jest
    .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
    .mockResolvedValue({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml: xml,
      status: 200,
    });
}

describe('reconcileNFCeSPOffline integration', () => {
  beforeEach(() => {
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Date.parse('2026-05-20T12:00:00-03:00'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('preserves the offline identity across a timeout and caller-initiated retry', async () => {
    const record = buildNFCeSPOfflineRecord();
    const requests: string[] = [];
    const requestExecutor = jest
      .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
      .mockImplementationOnce(async (request) => {
        requests.push(request.requestXml);
        const timeout = new Error('fixture timeout');
        timeout.name = 'AbortError';
        throw timeout;
      })
      .mockImplementationOnce(async (request) => {
        requests.push(request.requestXml);
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: responseXml(fixtures.authorized, record.accessKey),
          status: 200,
        };
      });

    const firstAttempt = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor,
    });
    const retry = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor,
    });

    expect(firstAttempt.classification).toBe('timeout');
    expect(retry).toMatchObject({
      accessKey: record.accessKey,
      classification: 'authorized',
      signedXmlSha256: record.signedXmlSha256,
    });
    expect(requests).toHaveLength(2);
    expect(requests[0]).toContain(record.signedXml);
    expect(requests[1]).toContain(record.signedXml);
    expect(requestExecutor).toHaveBeenCalledTimes(2);
  });

  it('surfaces duplicate responses for operator action after one explicit attempt', async () => {
    const record = buildNFCeSPOfflineRecord();
    const requestExecutor = successfulExecutor(
      responseXml(fixtures.duplicate, record.accessKey),
    );

    const result = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor,
    });

    expect(result).toMatchObject({
      accessKey: record.accessKey,
      classification: 'duplicate',
      operatorActionRequired: true,
      signedXmlSha256: record.signedXmlSha256,
    });
    expect(requestExecutor).toHaveBeenCalledTimes(1);
  });
});

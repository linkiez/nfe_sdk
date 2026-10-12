import { reconcileNFCeSPOffline } from '../../../src/index.js';
import type { RequestExecutor } from '../../../src/canonical/transport/request-executor.js';
import { buildNFCeSPOfflineRecord } from '../../fixtures/nfce/build-nfce-sp-offline-record.js';

function responseXml(
  statusCode: string,
  accessKey: string,
  details = '<nProt>13526000000000001</nProt>',
): string {
  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>1</tpAmb><cStat>${statusCode}</cStat><xMotivo>fixture response</xMotivo>${statusCode === '100' || statusCode === '104' ? `<protNFe><infProt><tpAmb>1</tpAmb><chNFe>${accessKey}</chNFe>${details}<cStat>100</cStat></infProt></protNFe>` : statusCode === '103' ? '<nRec>351000000000001</nRec>' : ''}</retEnviNFe></soap:Body></soap:Envelope>`;
}

function executorWith(response: string): jest.MockedFunction<RequestExecutor> {
  return jest
    .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
    .mockResolvedValue({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml: response,
      status: 200,
    });
}

describe('reconcileNFCeSPOffline', () => {
  beforeEach(() => {
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Date.parse('2026-05-20T12:00:00-03:00'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('submits the retained signed XML once and authorizes only a matching response', async () => {
    const record = buildNFCeSPOfflineRecord();
    let requestXml = '';
    const requestExecutor = executorWith(
      responseXml('104', record.accessKey),
    ).mockImplementation(async (request) => {
      requestXml = request.requestXml;
      return {
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: responseXml('104', record.accessKey),
        status: 200,
      };
    });

    const result = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor,
    });

    expect(result.classification).toBe('authorized');
    expect(result.accessKey).toBe(record.accessKey);
    expect(result.signedXmlSha256).toBe(record.signedXmlSha256);
    expect(requestXml).toContain(record.signedXml);
    expect(requestExecutor).toHaveBeenCalledTimes(1);
  });

  it('distinguishes receipt, duplicate, mismatch, timeout, and expired deadline without retry', async () => {
    const record = buildNFCeSPOfflineRecord();
    const receivedExecutor = executorWith(responseXml('103', record.accessKey));
    const duplicateExecutor = executorWith(
      responseXml('204', record.accessKey),
    );
    const rejectedExecutor = executorWith(responseXml('215', record.accessKey));
    const unavailableExecutor = executorWith(
      responseXml('108', record.accessKey),
    );
    const mismatchExecutor = executorWith(
      responseXml('100', '35260512345678000123650020000004561876543210'),
    );
    const timeoutExecutor: RequestExecutor = async () => {
      const error = new Error('fixture timeout');
      error.name = 'AbortError';
      throw error;
    };
    const timeoutSpy = jest
      .fn<ReturnType<RequestExecutor>, Parameters<RequestExecutor>>()
      .mockImplementation(timeoutExecutor);

    const received = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: receivedExecutor,
    });
    const duplicate = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: duplicateExecutor,
    });
    const rejected = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: rejectedExecutor,
    });
    const unavailable = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: unavailableExecutor,
    });
    const mismatch = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: mismatchExecutor,
    });
    const timeout = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: timeoutSpy,
    });
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Date.parse('2026-05-22T00:00:00-03:00'));
    const expired = await reconcileNFCeSPOffline({
      offlineRecord: record,
      requestExecutor: executorWith(responseXml('100', record.accessKey)),
    });

    expect(received).toMatchObject({
      classification: 'received',
      receiptNumber: '351000000000001',
    });
    expect(duplicate.classification).toBe('duplicate');
    expect(rejected.classification).toBe('rejected');
    expect(unavailable.classification).toBe('unavailable');
    expect(mismatch.classification).toBe('inconclusive');
    expect(timeout.classification).toBe('timeout');
    expect(expired.classification).toBe('deadline-expired');
    expect(receivedExecutor).toHaveBeenCalledTimes(1);
    expect(duplicateExecutor).toHaveBeenCalledTimes(1);
    expect(rejectedExecutor).toHaveBeenCalledTimes(1);
    expect(unavailableExecutor).toHaveBeenCalledTimes(1);
    expect(mismatchExecutor).toHaveBeenCalledTimes(1);
    expect(timeoutSpy).toHaveBeenCalledTimes(1);
  });
});

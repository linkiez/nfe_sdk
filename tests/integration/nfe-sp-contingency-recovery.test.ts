import * as publicApi from '../../src/index';

import { loadNFeOperationalTextFixture } from '../fixtures/nfe-operational/load-nfe-operational-fixture';

const DOCUMENT_KEY = '35260112345678000195550010000000011000000014';
const EPEC_PROTOCOL = '135260000000001';

describe('NF-e SP contingency recovery integration', () => {
  it('submits the matching EPEC NF-e explicitly to SP with tpEmis=4', async () => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string; tpEmis: string };
              version: '4.00';
            };
          };
          environment: 'production';
          recoveryContext: {
            documentKey: string;
            eventProtocol: string;
            mode: 'epec';
          };
          requestExecutor: (request: {
            endpointUrl: string;
            requestXml: string;
            service: string;
          }) => Promise<{
            headers: Readonly<Record<string, string>>;
            responseXml: string;
            status: number;
          }>;
          signingContext: object;
        }) => Promise<{
          classification: string;
          contingencyState?: string;
          documentKey?: string;
          eventProtocol?: string;
          executionMode?: string;
          recoveryState?: string;
        }>)
      | undefined;
    const requests: Array<{
      endpointUrl: string;
      requestXml: string;
      service: string;
    }> = [];
    const outcome = await authorizeNFe?.({
      documents: {
        kind: 'single-document',
        payload: {
          documentId: DOCUMENT_KEY,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '1' },
          version: '4.00',
        },
      },
      environment: 'production',
      recoveryContext: {
        documentKey: DOCUMENT_KEY,
        eventProtocol: EPEC_PROTOCOL,
        mode: 'epec',
      },
      requestExecutor: async (request) => {
        requests.push(request);
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml:
            '<retEnviNFe><tpAmb>1</tpAmb><cStat>104</cStat><protNFe><infProt><tpAmb>1</tpAmb><cStat>100</cStat><nProt>135260000000002</nProt></infProt></protNFe></retEnviNFe>',
          status: 200,
        };
      },
      signingContext: {},
    });

    expect(requests).toHaveLength(1);
    expect(requests[0]?.endpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    );
    expect(requests[0]?.service).toBe('nfe-authorization');
    expect(requests[0]?.requestXml).toContain('<tpEmis>4</tpEmis>');
    expect(outcome).toMatchObject({
      classification: 'authorized',
      contingencyState: 'reconciled',
      documentKey: DOCUMENT_KEY,
      eventProtocol: EPEC_PROTOCOL,
      executionMode: 'epec',
      recoveryState: 'reconciled',
    });
  });

  it('rejects an EPEC recovery key mismatch before transport', async () => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((
          input: Record<string, unknown>,
        ) => Promise<{ classification: string }>)
      | undefined;
    const requestExecutor = jest.fn();

    const outcome = await authorizeNFe?.({
      documents: {
        kind: 'single-document',
        payload: {
          documentId: DOCUMENT_KEY,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '1' },
          version: '4.00',
        },
      },
      environment: 'production',
      recoveryContext: {
        documentKey: `35${'0'.repeat(42)}`,
        eventProtocol: EPEC_PROTOCOL,
        mode: 'epec',
      },
      requestExecutor,
      signingContext: {},
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('does not retransmit an SVC-authorized NF-e during recovery', async () => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: Record<string, unknown>) => Promise<{
          classification: string;
          nextAction?: string;
          recoveryState?: string;
        }>)
      | undefined;
    const requestExecutor = jest.fn();

    const outcome = await authorizeNFe?.({
      documents: {
        kind: 'single-document',
        payload: {
          documentId: DOCUMENT_KEY,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '6' },
          version: '4.00',
        },
      },
      environment: 'production',
      recoveryContext: { documentKey: DOCUMENT_KEY, mode: 'svc-an' },
      requestExecutor,
      signingContext: {},
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(outcome?.recoveryState).toBe('inconclusive');
    expect(outcome?.nextAction).toBe('reconcileNFeReceipt');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it.each([
    {
      expectedState: 'reconciled',
      fixture: 'authorization/receipt-response-authorized.xml',
      documentKey: '35240100000000000000550010000000011000000010',
    },
    {
      expectedState: 'pending',
      fixture: 'authorization/receipt-response-processing.xml',
      documentKey: '35240100000000000000550010000000011000000010',
    },
    {
      expectedState: 'rejected',
      fixture: 'authorization/receipt-response-rejected.xml',
      documentKey: '35240100000000000000550010000000021000000025',
    },
    {
      expectedState: 'unavailable',
      fixture: 'authorization/receipt-response-unavailable.xml',
      documentKey: '35240100000000000000550010000000011000000010',
    },
    {
      expectedState: 'inconclusive',
      fixture: 'authorization/receipt-response-inconclusive.xml',
      documentKey: '35240100000000000000550010000000041000000049',
    },
  ])(
    'projects EPEC recovery as $expectedState',
    async ({ expectedState, fixture, documentKey }) => {
      const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
        .reconcileNFeReceipt as
        | ((input: Record<string, unknown>) => Promise<{
            classification: string;
            contingencyState?: string;
            eventProtocol?: string;
            executionMode?: string;
            recoveryContext?: Record<string, string>;
            recoveryState?: string;
          }>)
        | undefined;
      const recoveryContext = {
        documentKey,
        eventProtocol: EPEC_PROTOCOL,
        mode: 'epec',
      };

      const outcome = await reconcileNFeReceipt?.({
        receiptNumber: '135190000000002',
        recoveryContext,
        requestExecutor: async () => ({
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: loadNFeOperationalTextFixture(fixture),
          status: 200,
        }),
        routingContext: { authorizer: 'SVCAN', environment: 'homologation' },
        timeoutMs: 5000,
      });

      expect(outcome?.recoveryState).toBe(expectedState);
      expect(outcome?.contingencyState).toBe(expectedState);
      expect(outcome?.executionMode).toBe('epec');
      expect(outcome?.eventProtocol).toBe(EPEC_PROTOCOL);
      expect(outcome?.recoveryContext).toEqual(recoveryContext);
    },
  );

  it('keeps an authorized receipt classification but marks a key mismatch inconclusive', async () => {
    const reconcileNFeReceipt = (publicApi as Record<string, unknown>)
      .reconcileNFeReceipt as
      | ((input: Record<string, unknown>) => Promise<{
          classification: string;
          recoveryState?: string;
        }>)
      | undefined;

    const outcome = await reconcileNFeReceipt?.({
      receiptNumber: '135190000000002',
      recoveryContext: {
        documentKey: DOCUMENT_KEY,
        eventProtocol: EPEC_PROTOCOL,
        mode: 'epec',
      },
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml: loadNFeOperationalTextFixture(
          'authorization/receipt-response-authorized.xml',
        ),
        status: 200,
      }),
      routingContext: { authorizer: 'SVCAN', environment: 'homologation' },
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('authorized');
    expect(outcome?.recoveryState).toBe('inconclusive');
  });
});

import { reconcileNFeReceipt } from '../../src/index';

const KEY = '35261122233300018155001000000010100000000011';
type Call = { endpointUrl: string; requestXml: string };

const response = (batchStatus: string, items: string) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRetAutorizacao4"><retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><verAplic>SP</verAplic><nRec>351000000000001</nRec><cStat>${batchStatus}</cStat><xMotivo>x</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto>${items}</retConsReciNFe></nfeResultMsg></soap:Body></soap:Envelope>`;

const item = (cStat: string, xMotivo = 'x') =>
  `<protNFe versao="4.00"><infProt><tpAmb>1</tpAmb><verAplic>SP</verAplic><chNFe>${KEY}</chNFe><dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><nProt>135260000000001</nProt><digVal>a=</digVal><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo></infProt></protNFe>`;

async function reconcile(responseXml: string) {
  const calls: Call[] = [];
  const result = await reconcileNFeReceipt({
    receiptNumber: '351000000000001',
    requestExecutor: async (call: Call) => {
      calls.push(call);
      return { headers: {}, responseXml, status: 200 };
    },
    routingContext: { authorizer: 'SP', environment: 'production' },
    timeoutMs: 1000,
    wireFormat: true,
  } as never);

  return { calls, result };
}

describe('reconcileNFeReceipt (official wire format)', () => {
  it('sends consReciNFe to the SP retorno route and finds the authorized item', async () => {
    const { calls, result } = await reconcile(
      response('104', item('100', 'Autorizado o uso da NF-e')),
    );

    expect(calls[0].endpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRetAutorizacao4"><consReciNFe ',
    );
    expect(result.classification).toBe('authorized');
  });

  it.each([
    ['539', 'rejected'],
    ['110', 'denied'],
    ['301', 'denied'],
  ])('classifies the item cStat %s as %s', async (cStat, expected) => {
    const { result } = await reconcile(response('104', item(cStat)));

    expect(result.classification).toBe(expected);
  });

  it('keeps waiting while the batch is still processing (105)', async () => {
    const { result } = await reconcile(response('105', ''));

    expect(['pending', 'processing']).toContain(result.classification);
  });
});

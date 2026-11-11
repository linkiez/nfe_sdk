import {
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
} from '../../src/index';

const KEY = '35261122233300018155001000000010100000000011';

type Call = {
  endpointUrl: string;
  requestXml: string;
  headers: Readonly<Record<string, string>>;
};

const soap = (inner: string, ns: string) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/${ns}">${inner}</nfeResultMsg></soap:Body></soap:Envelope>`;

const statusResponse = (cStat: string, xMotivo: string) =>
  soap(
    `<retConsStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><verAplic>SP_NFE_PL009_V4</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto><tMed>1</tMed></retConsStatServ>`,
    'NFeStatusServico4',
  );

function situation(cStat: string, xMotivo: string, extra = ''): string {
  return soap(
    `<retConsSitNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><verAplic>SP_NFE_PL009_V4</verAplic><cStat>${cStat}</cStat><xMotivo>${xMotivo}</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto><chNFe>${KEY}</chNFe>${extra}</retConsSitNFe>`,
    'NFeConsultaProtocolo4',
  );
}

const protocol = (cStat: string) =>
  `<protNFe versao="4.00"><infProt><tpAmb>1</tpAmb><verAplic>SP</verAplic><chNFe>${KEY}</chNFe><dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><nProt>135260000000001</nProt><digVal>abc=</digVal><cStat>${cStat}</cStat><xMotivo>x</xMotivo></infProt></protNFe>`;

const event = (tpEvento: string, seq: number, nProt: string) =>
  `<procEventoNFe versao="1.00"><evento versao="1.00"><infEvento Id="ID${tpEvento}${KEY}0${seq}"><tpEvento>${tpEvento}</tpEvento><nSeqEvento>${seq}</nSeqEvento></infEvento></evento><retEvento versao="1.00"><infEvento><cStat>135</cStat><xMotivo>Evento registrado</xMotivo><tpEvento>${tpEvento}</tpEvento><nSeqEvento>${seq}</nSeqEvento><nProt>${nProt}</nProt></infEvento></retEvento></procEventoNFe>`;

const executor = (calls: Call[], responseXml: string) => async (call: Call) => {
  calls.push(call);
  return { headers: {}, responseXml, status: 200 };
};

describe('queryNFeServiceStatus (official wire format)', () => {
  it('sends consStatServ to the SP production route and reports an operating service', async () => {
    const calls: Call[] = [];
    const snapshot = await queryNFeServiceStatus({
      environment: 'production',
      issuerUF: '35',
      requestExecutor: executor(
        calls,
        statusResponse('107', 'Servico em Operacao'),
      ),
      wireFormat: true,
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeStatusServico4"><consStatServ ',
    );
    expect(calls[0].requestXml).toContain(
      '<tpAmb>1</tpAmb><cUF>35</cUF><xServ>STATUS</xServ>',
    );
    expect(snapshot.classification).toBe('success');
    expect(snapshot.applicationStatusCode).toBe('107');
    expect(snapshot.responseEnvironment).toBe('production');
  });

  it.each(['108', '109'])(
    'classifies cStat %s as unavailable',
    async (cStat) => {
      const snapshot = await queryNFeServiceStatus({
        environment: 'homologation',
        issuerUF: '35',
        requestExecutor: executor(
          [],
          statusResponse(cStat, 'Servico Paralisado'),
        ),
        wireFormat: true,
      } as never);

      expect(snapshot.classification).toBe('unavailable');
    },
  );

  it('refuses production without an executor and wire format without issuerUF', async () => {
    const noExecutor = await queryNFeServiceStatus({
      environment: 'production',
      issuerUF: '35',
      wireFormat: true,
    } as never);
    const noUf = await queryNFeServiceStatus({
      environment: 'homologation',
      requestExecutor: jest.fn(),
      wireFormat: true,
    } as never);

    expect(noExecutor.classification).toBe('usage-error');
    expect(noUf.classification).toBe('usage-error');
  });
});

describe('queryNFeDocumentSituation (official wire format)', () => {
  const query = (responseXml: string) => {
    const calls: Call[] = [];
    return {
      calls,
      result: queryNFeDocumentSituation({
        accessKey: KEY,
        environment: 'production',
        requestExecutor: executor(calls, responseXml),
        wireFormat: true,
      } as never),
    };
  };

  it('sends consSitNFe to the SP route and reads an authorized document with its events', async () => {
    const { calls, result } = query(
      situation(
        '100',
        'Autorizado o uso da NF-e',
        protocol('100') + event('110110', 1, '135260000000050'),
      ),
    );
    const outcome = await result;

    expect(calls[0].endpointUrl).toBe(
      'https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<consSitNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>1</tpAmb><xServ>CONSULTAR</xServ>',
    );
    expect(calls[0].requestXml).toContain(`<chNFe>${KEY}</chNFe>`);
    expect(outcome.classification).toBe('success');
    expect(outcome.state.primaryState).toBe('authorized');
    expect(outcome.protocolNumber).toBe('135260000000001');
    expect((outcome as unknown as { events: unknown[] }).events).toEqual([
      {
        protocol: '135260000000050',
        sequence: 1,
        statusCode: '135',
        type: '110110',
      },
    ]);
  });

  it.each([
    ['101', 'canceled'],
    ['151', 'canceled'],
    ['110', 'denied'],
    ['301', 'denied'],
    ['302', 'denied'],
  ])('maps cStat %s to the %s state', async (cStat, state) => {
    const { result } = query(situation(cStat, 'motivo', protocol(cStat)));
    const outcome = await result;

    expect(outcome.classification).toBe('success');
    expect(outcome.state.primaryState).toBe(state);
  });

  it('treats 150 as authorized out of time and 217 as not found', async () => {
    expect(
      (
        await query(
          situation('150', 'Autorizado fora de prazo', protocol('150')),
        ).result
      ).state.primaryState,
    ).toBe('authorized');
    const missing = await query(situation('217', 'NF-e nao consta na base'))
      .result;

    expect(missing.classification).toBe('not-found');
  });

  it('keeps other statuses as inconclusive and requires an executor in production', async () => {
    const odd = await query(situation('226', 'Rejeicao')).result;
    const refused = await queryNFeDocumentSituation({
      accessKey: KEY,
      environment: 'production',
      wireFormat: true,
    } as never);

    expect(odd.classification).toBe('inconclusive');
    expect(refused.classification).toBe('usage-error');
  });

  it('refuses a malformed access key before any request', async () => {
    const executorSpy = jest.fn();
    const outcome = await queryNFeDocumentSituation({
      accessKey: '123',
      environment: 'homologation',
      requestExecutor: executorSpy,
      wireFormat: true,
    } as never);

    expect(outcome.classification).toBe('usage-error');
    expect(executorSpy).not.toHaveBeenCalled();
  });

  it('queries the SVC-AN authorizer when asked, for documents authorized in contingency', async () => {
    const calls: Call[] = [];
    const outcome = await queryNFeDocumentSituation({
      accessKey: KEY,
      authorizer: 'SVCAN',
      environment: 'production',
      requestExecutor: executor(
        calls,
        situation('100', 'Autorizado o uso da NF-e', protocol('100')),
      ),
      wireFormat: true,
    } as never);

    expect(calls[0].endpointUrl).toBe(
      'https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
    );
    expect(outcome.state.primaryState).toBe('authorized');
  });

  describe('authorized XML recovery (signedXml)', () => {
    const signedNfe = `<?xml version="1.0" encoding="UTF-8"?><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe Id="NFe${KEY}"/><Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><Reference URI="#NFe${KEY}"><DigestValue>abc=</DigestValue></Reference></SignedInfo></Signature></NFe>`;
    const withSigned = (responseXml: string, signedXml: string | undefined) =>
      queryNFeDocumentSituation({
        accessKey: KEY,
        environment: 'production',
        requestExecutor: executor([], responseXml),
        signedXml,
        wireFormat: true,
      } as never);

    it('always exposes the protNFe block of the answer', async () => {
      const outcome = await withSigned(
        situation('100', 'Autorizado o uso da NF-e', protocol('100')),
        undefined,
      );

      expect(outcome.protocolXml).toBe(protocol('100'));
      expect(outcome.authorizedXml).toBeUndefined();
    });

    it('assembles the nfeProc when the protocol digest matches the signed NFe', async () => {
      const outcome = await withSigned(
        situation('100', 'Autorizado o uso da NF-e', protocol('100')),
        signedNfe,
      );

      expect(outcome.authorizedXml).toBe(
        `<nfeProc xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">${signedNfe.replace(/^<\?xml[^>]*\?>/u, '')}${protocol('100')}</nfeProc>`,
      );
    });

    it('does not assemble when the digest differs (the rebuilt NFe is not the authorized one)', async () => {
      const outcome = await withSigned(
        situation('100', 'Autorizado o uso da NF-e', protocol('100')),
        signedNfe.replace('abc=', 'other='),
      );

      expect(outcome.authorizedXml).toBeUndefined();
      expect(outcome.authorizedXmlIssue).toBe('digest-mismatch');
    });

    it('does not assemble for a document that is not authorized', async () => {
      const outcome = await withSigned(
        situation('101', 'Cancelamento homologado', protocol('101')),
        signedNfe,
      );

      expect(outcome.authorizedXml).toBeUndefined();
      expect(outcome.authorizedXmlIssue).toBeUndefined();
    });
  });
});

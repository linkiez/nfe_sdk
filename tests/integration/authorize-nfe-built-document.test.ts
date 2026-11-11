import {
  authorizeNFe,
  buildNFeDocument,
  createSigningContext,
  validateNFeXsd,
} from '../../src/index';

import { baseDraft } from '../fixtures/nfe-builder/reference-drafts';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

type Outcome = Awaited<ReturnType<typeof authorizeNFe>> & {
  authorizedXml?: string;
  signedXml?: string;
  protocolStatusCode?: string;
  protocolStatusMessage?: string;
};

function responseFor(
  accessKey: string,
  protocolStatus: { cStat: string; xMotivo: string },
  batchStatus = '104',
): string {
  return [
    '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body>',
    '<nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4">',
    '<retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">',
    `<tpAmb>2</tpAmb><verAplic>SP_NFE_PL009_V4</verAplic><cStat>${batchStatus}</cStat><xMotivo>Lote processado</xMotivo><cUF>35</cUF>`,
    '<dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto>',
    '<protNFe versao="4.00"><infProt>',
    `<tpAmb>2</tpAmb><verAplic>SP_NFE_PL009_V4</verAplic><chNFe>${accessKey}</chNFe>`,
    '<dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><nProt>135260000000001</nProt>',
    `<digVal>abc=</digVal><cStat>${protocolStatus.cStat}</cStat><xMotivo>${protocolStatus.xMotivo}</xMotivo>`,
    '</infProt></protNFe></retEnviNFe></nfeResultMsg></soap:Body></soap:Envelope>',
  ].join('');
}

async function authorizeBuilt(
  respond: (accessKey: string) => string,
  environment: 'homologation' | 'production' = 'homologation',
) {
  const built = buildNFeDocument(baseDraft());
  const fixture = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });
  const requests: string[] = [];
  const endpoints: string[] = [];
  const outcome = (await authorizeNFe({
    documents: { kind: 'built-document', payload: built },
    environment,
    requestExecutor: async (request: {
      endpointUrl: string;
      requestXml: string;
    }) => {
      requests.push(request.requestXml);
      endpoints.push(request.endpointUrl);
      return {
        headers: {},
        responseXml: respond(built.accessKey),
        status: 200,
      };
    },
    signingContext,
    timeoutMs: 5000,
  } as unknown as Parameters<typeof authorizeNFe>[0])) as Outcome;

  return { built, endpoints, outcome, requests };
}

describe('authorizeNFe with a built document', () => {
  jest.setTimeout(60_000);

  it('signs the document, sends a real enviNFe in nfeDadosMsg and returns the authorized nfeProc', async () => {
    const { built, endpoints, outcome, requests } = await authorizeBuilt(
      (key) =>
        responseFor(key, { cStat: '100', xMotivo: 'Autorizado o uso da NF-e' }),
    );

    expect(endpoints).toEqual([
      'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    ]);
    expect(requests).toHaveLength(1);
    expect(requests[0]).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4">',
    );
    expect(requests[0]).toMatch(
      /<enviNFe xmlns="http:\/\/www\.portalfiscal\.inf\.br\/nfe" versao="4\.00"><idLote>\d{1,15}<\/idLote><indSinc>1<\/indSinc><NFe /,
    );
    expect(requests[0]).toContain('<Signature');
    expect(requests[0]).toContain(`Id="${built.id}"`);
    expect(outcome.classification).toBe('authorized');
    expect(outcome.protocolNumber).toBe('135260000000001');
    expect(outcome.protocolStatusCode).toBe('100');
    expect(validateNFeXsd(outcome.signedXml ?? '').classification).toBe(
      'valid',
    );
    expect(outcome.authorizedXml).toMatch(
      /^<nfeProc xmlns="http:\/\/www\.portalfiscal\.inf\.br\/nfe" versao="4\.00"><NFe /,
    );
    expect(outcome.authorizedXml).toContain('<protNFe versao="4.00">');
    expect(outcome.authorizedXml).toContain(
      `<chNFe>${built.accessKey}</chNFe>`,
    );
  });

  it.each(['110', '301', '302'])(
    'classifies a protocol with cStat %s as denied and keeps no authorized XML',
    async (cStat) => {
      const { outcome } = await authorizeBuilt((key) =>
        responseFor(key, { cStat, xMotivo: 'Uso Denegado' }),
      );

      expect(outcome.classification).toBe('denied');
      expect(outcome.authorizedXml).toBeUndefined();
    },
  );

  it('classifies a rejection reported inside the protocol (batch cStat 104) as rejected, not authorized', async () => {
    const { outcome } = await authorizeBuilt((key) =>
      responseFor(key, {
        cStat: '539',
        xMotivo: 'Rejeicao: Duplicidade de NF-e',
      }),
    );

    expect(outcome.classification).toBe('rejected');
    expect(outcome.protocolStatusCode).toBe('539');
    expect(outcome.protocolStatusMessage).toBe('Rejeicao: Duplicidade de NF-e');
    expect(outcome.authorizedXml).toBeUndefined();
  });

  it('keeps the receipt flow when the lote is only received (cStat 103)', async () => {
    const { outcome } = await authorizeBuilt(
      () =>
        '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>2</tpAmb><cStat>103</cStat><xMotivo>Lote recebido com sucesso</xMotivo><infRec><nRec>351000000000001</nRec></infRec></retEnviNFe></soap:Body></soap:Envelope>',
    );

    expect(outcome.classification).toBe('received');
    expect(outcome.receiptNumber).toBe('351000000000001');
    expect(outcome.nextAction).toBe('reconcileNFeReceipt');
  });

  it('refuses production for a non-SP issuer and requires an executor in production', async () => {
    const built = buildNFeDocument(baseDraft());
    const fixture = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixture.passphrase,
      source: {
        contentBase64: fixture.certificateBase64,
        type: 'in-memory-content',
      },
    });

    await expect(
      authorizeNFe({
        documents: { kind: 'built-document', payload: built },
        environment: 'production',
        signingContext,
        timeoutMs: 1000,
      } as unknown as Parameters<typeof authorizeNFe>[0]),
    ).rejects.toThrow(/requestExecutor/i);
  });
});

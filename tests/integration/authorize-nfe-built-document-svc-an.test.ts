import {
  authorizeNFe,
  buildNFeDocument,
  createSigningContext,
} from '../../src/index';

import { baseDraft } from '../fixtures/nfe-builder/reference-drafts';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

type Environment = 'homologation' | 'production';
type Outcome = Awaited<ReturnType<typeof authorizeNFe>> & {
  authorizedXml?: string;
  signedXml?: string;
  activationEvidence?: { statusCode?: string; provider?: string };
  failureReason?: string;
};
type Call = { endpointUrl: string; requestXml: string; service: string };

const tpAmbOf = (environment: Environment) =>
  environment === 'production' ? '1' : '2';

const soap = (inner: string, ns: string) =>
  `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/${ns}">${inner}</nfeResultMsg></soap:Body></soap:Envelope>`;

const statusResponse = (environment: Environment, cStat: string) =>
  soap(
    `<retConsStatServ xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>${tpAmbOf(environment)}</tpAmb><verAplic>SVCAN</verAplic><cStat>${cStat}</cStat><xMotivo>x</xMotivo><cUF>91</cUF><dhRecbto>2026-11-10T12:00:00-03:00</dhRecbto></retConsStatServ>`,
    'NFeStatusServico4',
  );

const authorizationResponse = (environment: Environment, accessKey: string) =>
  soap(
    `<retEnviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><tpAmb>${tpAmbOf(environment)}</tpAmb><verAplic>SVCAN</verAplic><cStat>104</cStat><xMotivo>Lote processado</xMotivo><cUF>35</cUF><dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><protNFe versao="4.00"><infProt><tpAmb>${tpAmbOf(environment)}</tpAmb><verAplic>SVCAN</verAplic><chNFe>${accessKey}</chNFe><dhRecbto>2026-11-10T12:00:05-03:00</dhRecbto><nProt>335260000000001</nProt><digVal>abc=</digVal><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></retEnviNFe>`,
    'NFeAutorizacao4',
  );

function svcDraft(environment: Environment, tpEmis = '6') {
  const base = baseDraft();

  return baseDraft({
    ide: {
      ...base.infNFe.ide,
      dhCont: '2026-11-10T11:30:00-03:00',
      tpAmb: tpAmbOf(environment),
      tpEmis,
      xJust: 'SEFAZ-SP indisponivel no momento da emissao',
    },
  } as never);
}

async function run(options: {
  environment?: Environment;
  statusCode?: string;
  tpEmis?: string;
  contingency?: object | null;
  withExecutor?: boolean;
}) {
  const environment = options.environment ?? 'production';
  const built = buildNFeDocument(svcDraft(environment, options.tpEmis));
  const fixture = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });
  const calls: Call[] = [];
  const request = {
    contingency:
      options.contingency === null
        ? undefined
        : (options.contingency ?? { mode: 'svc-an' }),
    documents: { kind: 'built-document', payload: built },
    environment,
    requestExecutor:
      options.withExecutor === false
        ? undefined
        : async (call: Call) => {
            calls.push(call);
            return {
              headers: {},
              responseXml:
                call.service === 'nfe-status-service'
                  ? statusResponse(environment, options.statusCode ?? '107')
                  : authorizationResponse(environment, built.accessKey),
              status: 200,
            };
          },
    signingContext,
    timeoutMs: 5000,
  };
  const outcome = (await authorizeNFe(
    request as unknown as Parameters<typeof authorizeNFe>[0],
  )) as Outcome;

  return { built, calls, outcome };
}

describe('authorizeNFe with a built document in SVC-AN', () => {
  jest.setTimeout(60_000);

  it.each([
    ['production', 'https://www.sefazvirtual.fazenda.gov.br'],
    ['homologation', 'https://hom.sefazvirtual.fazenda.gov.br'],
  ] as const)(
    'checks the SVC-AN status then sends the tpEmis 6 document to the SVC-AN authorizer (%s)',
    async (environment, host) => {
      const { built, calls, outcome } = await run({ environment });

      expect(calls.map((call) => call.service)).toEqual([
        'nfe-status-service',
        'nfe-authorization',
      ]);
      expect(calls[0].endpointUrl).toBe(
        `${host}/NFeStatusServico4/NFeStatusServico4.asmx`,
      );
      expect(calls[1].endpointUrl).toBe(
        `${host}/NFeAutorizacao4/NFeAutorizacao4.asmx`,
      );
      expect(calls[1].requestXml).toContain('<tpEmis>6</tpEmis>');
      expect(calls[1].requestXml).toContain('<dhCont>');
      expect(calls[1].requestXml).toContain('<xJust>');
      expect(calls[1].requestXml).toContain(`Id="${built.id}"`);
      expect(built.accessKey[34]).toBe('6');
      expect(outcome).toMatchObject({
        classification: 'authorized',
        contingencyState: 'activation-verified',
        executionMode: 'svc-an',
      });
      expect(outcome.activationEvidence?.statusCode).toBe('107');
      expect(outcome.signedXml).toContain('<Signature');
      expect(outcome.authorizedXml).toMatch(/^<nfeProc /u);
    },
  );

  it.each(['108', '109', '113', '114'])(
    'does not send the document when the SVC-AN status is %s',
    async (statusCode) => {
      const { calls, outcome } = await run({ statusCode });

      expect(outcome.classification).toBe('contingency-boundary');
      expect(calls.map((call) => call.service)).toEqual(['nfe-status-service']);
    },
  );

  it('requires an injected executor and sends nothing without it', async () => {
    const { outcome } = await run({ withExecutor: false });

    expect(outcome).toMatchObject({
      classification: 'contingency-boundary',
      contingencyState: 'unavailable',
    });
  });

  it('refuses a prior uncertain authorization of the same key', async () => {
    const draftKey = buildNFeDocument(svcDraft('production')).accessKey;
    const { calls, outcome } = await run({
      contingency: {
        mode: 'svc-an',
        previousSubmission: {
          classification: 'received',
          documentKey: draftKey,
        },
      },
    });

    expect(outcome).toMatchObject({
      classification: 'contingency-boundary',
      contingencyState: 'inconclusive',
    });
    expect(calls).toHaveLength(0);
  });

  it.each(['fs-da', 'epec'])(
    'keeps %s outside automated authorization',
    async (mode) => {
      const { calls, outcome } = await run({ contingency: { mode } });

      expect(outcome.classification).toBe('contingency-boundary');
      expect(calls).toHaveLength(0);
    },
  );

  it('refuses a SVC-AN request for a document that was not built with tpEmis 6', async () => {
    await expect(run({ tpEmis: '1' })).rejects.toThrow(/tpEmis/u);
  });

  it('refuses a tpEmis 6 document without an explicit contingency request', async () => {
    await expect(run({ contingency: null })).rejects.toThrow(/tpEmis/u);
  });
});

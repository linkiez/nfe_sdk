import {
  buildNFeDocument,
  cancelNFe,
  createSigningContext,
  submitNFeCorrectionLetter,
  validateNFeXsd,
} from '../../src/index';
import { resolve } from 'node:path';

import { baseDraft } from '../fixtures/nfe-builder/reference-drafts';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

const ACCESS_KEY = buildNFeDocument(baseDraft()).accessKey;
const PROTOCOL = '135260000000001';
const NOW = '2026-11-10T12:30:00-03:00';

const CANCEL_XSD = resolve(process.cwd(), 'xsd', 'Evento_Canc_PL_v1.01');
const CCE_XSD = resolve(process.cwd(), 'xsd', 'Evento_CCe_PL_v1.01');

type Call = {
  endpointUrl: string;
  requestXml: string;
  headers: Readonly<Record<string, string>>;
};

function eventResponse(
  cStat: string,
  xMotivo: string,
  tpEvento: string,
): string {
  return [
    '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body>',
    '<nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4">',
    '<retEnvEvento xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.00"><idLote>1</idLote><tpAmb>2</tpAmb>',
    '<verAplic>SP_EVENTOS_PL_100</verAplic><cOrgao>35</cOrgao><cStat>128</cStat><xMotivo>Lote de Evento Processado</xMotivo>',
    `<retEvento versao="1.00"><infEvento><tpAmb>2</tpAmb><verAplic>SP_EVENTOS_PL_100</verAplic><cOrgao>35</cOrgao><cStat>${cStat}</cStat>`,
    `<xMotivo>${xMotivo}</xMotivo><chNFe>${ACCESS_KEY}</chNFe><tpEvento>${tpEvento}</tpEvento><xEvento>x</xEvento>`,
    `<nSeqEvento>1</nSeqEvento><dhRegEvento>2026-11-10T12:30:05-03:00</dhRegEvento><nProt>135260000000099</nProt></infEvento></retEvento>`,
    '</retEnvEvento></nfeResultMsg></soap:Body></soap:Envelope>',
  ].join('');
}

async function context() {
  const fixture = createTestA1FixtureSource();

  return createSigningContext({
    passphrase: fixture.passphrase,
    source: {
      contentBase64: fixture.certificateBase64,
      type: 'in-memory-content',
    },
  });
}

function cancelInput(
  signingContext: unknown,
  overrides: Record<string, unknown> = {},
) {
  return {
    accessKey: ACCESS_KEY,
    canonicalPayload: {},
    environment: 'homologation',
    signedEvent: {
      eventDateTime: NOW,
      issuerTaxId: '11222333000181',
      justification: 'Erro na emissao do documento fiscal',
      protocol: PROTOCOL,
      signingContext,
    },
    timeoutMs: 5000,
    ...overrides,
  };
}

describe('signed NF-e events (cancellation and correction letter)', () => {
  jest.setTimeout(60_000);

  it('signs, sends and registers a cancellation in the SEFAZ event envelope', async () => {
    const calls: Call[] = [];
    const outcome = await cancelNFe({
      ...cancelInput(await context()),
      requestExecutor: async (request: Call) => {
        calls.push(request);
        return {
          headers: {},
          responseXml: eventResponse(
            '135',
            'Evento registrado e vinculado a NF-e',
            '110111',
          ),
          status: 200,
        };
      },
    } as never);

    expect(calls).toHaveLength(1);
    expect(calls[0].endpointUrl).toBe(
      'https://homologacao.nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx',
    );
    expect(calls[0].requestXml).toContain(
      '<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4">',
    );
    expect(calls[0].requestXml).toContain(
      `<infEvento Id="ID110111${ACCESS_KEY}01">`,
    );
    expect(calls[0].requestXml).toContain(
      '<xJust>Erro na emissao do documento fiscal</xJust>',
    );
    expect(calls[0].requestXml).toContain(`<nProt>${PROTOCOL}</nProt>`);
    expect(calls[0].requestXml).toContain('<Signature');
    expect(calls[0].headers['content-type']).toContain('nfeRecepcaoEvento');
    expect(outcome.classification).toBe('success');
    expect(outcome.applicationStatusCode).toBe('135');
    expect(outcome.protocolNumber).toBe('135260000000099');
    const typed = outcome as unknown as {
      signedXml: string;
      authorizedXml: string;
    };
    expect(
      validateNFeXsd(typed.signedXml, {
        schemaFamily: 'envEventoCancNFe_v1.00.xsd',
        xsdDir: CANCEL_XSD,
      }).classification,
    ).toBe('valid');
    expect(typed.authorizedXml).toMatch(
      /^<procEventoNFe xmlns="http:\/\/www\.portalfiscal\.inf\.br\/nfe" versao="1\.00"><evento /,
    );
    expect(typed.authorizedXml).toContain('<retEvento versao="1.00">');
  });

  it.each([
    ['135', true],
    ['136', true],
    ['155', true],
    ['573', false],
    ['501', false],
  ])(
    'classifies the event protocol cStat %s as registered=%s',
    async (cStat, registered) => {
      const outcome = await cancelNFe({
        ...cancelInput(await context()),
        requestExecutor: async () => ({
          headers: {},
          responseXml: eventResponse(cStat, 'motivo oficial', '110111'),
          status: 200,
        }),
      } as never);

      expect(outcome.classification).toBe(registered ? 'success' : 'rejected');
      expect(outcome.applicationStatusCode).toBe(cStat);
      if (!registered) {
        expect(
          (outcome as unknown as { authorizedXml?: string }).authorizedXml,
        ).toBeUndefined();
        expect(outcome.failureReason).toBe('motivo oficial');
      }
    },
  );

  it('signs, sends and registers a correction letter validated by its XSD', async () => {
    const calls: Call[] = [];
    const outcome = await submitNFeCorrectionLetter({
      accessKey: ACCESS_KEY,
      canonicalPayload: {},
      environment: 'homologation',
      requestExecutor: async (request: Call) => {
        calls.push(request);
        return {
          headers: {},
          responseXml: eventResponse(
            '135',
            'Evento registrado e vinculado a NF-e',
            '110110',
          ),
          status: 200,
        };
      },
      signedEvent: {
        correctionText: 'Corrigir a descricao complementar do transportador',
        eventDateTime: NOW,
        issuerTaxId: '11222333000181',
        sequence: 2,
        signingContext: await context(),
      },
      timeoutMs: 5000,
    } as never);

    expect(calls[0].requestXml).toContain(
      `<infEvento Id="ID110110${ACCESS_KEY}02">`,
    );
    expect(calls[0].requestXml).toContain('<nSeqEvento>2</nSeqEvento>');
    expect(calls[0].requestXml).toContain(
      '<descEvento>Carta de Correcao</descEvento>',
    );
    expect(calls[0].requestXml).toContain(
      '<xCondUso>A Carta de Correcao e disciplinada pelo paragrafo 1o-A',
    );
    expect(outcome.classification).toBe('success');
    const typed = outcome as unknown as { signedXml: string };
    expect(
      validateNFeXsd(typed.signedXml, {
        schemaFamily: 'envCCe_v1.00.xsd',
        xsdDir: CCE_XSD,
      }).classification,
    ).toBe('valid');
  });

  it.each([
    ['justificativa curta', { justification: 'curta' }],
    ['justificativa longa', { justification: 'x'.repeat(256) }],
    [
      'justificativa com espacos nas pontas',
      { justification: ' erro na emissao do documento ' },
    ],
    ['protocolo invalido', { protocol: '123' }],
  ])(
    'refuses a cancellation with %s before signing or sending',
    async (_name, change) => {
      const requestExecutor = jest.fn();
      const base = cancelInput(await context());
      const outcome = await cancelNFe({
        ...base,
        requestExecutor,
        signedEvent: { ...base.signedEvent, ...change },
      } as never);

      expect(outcome.classification).toBe('usage-error');
      expect(requestExecutor).not.toHaveBeenCalled();
    },
  );

  it('refuses a correction letter text outside 15–1000 characters', async () => {
    const requestExecutor = jest.fn();
    const outcome = await submitNFeCorrectionLetter({
      accessKey: ACCESS_KEY,
      canonicalPayload: {},
      environment: 'homologation',
      requestExecutor,
      signedEvent: {
        correctionText: 'curto',
        eventDateTime: NOW,
        issuerTaxId: '11222333000181',
        signingContext: await context(),
      },
    } as never);

    expect(outcome.classification).toBe('usage-error');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('requires an executor in production, an SP key and matching environment', async () => {
    const base = cancelInput(await context(), { environment: 'production' });

    const withoutExecutor = await cancelNFe(base as never);
    const outsideSp = await cancelNFe({
      ...base,
      accessKey: `31${ACCESS_KEY.slice(2)}`,
      requestExecutor: jest.fn(),
    } as never);

    expect(withoutExecutor.classification).toBe('usage-error');
    expect(withoutExecutor.failureReason).toMatch(/requestExecutor/);
    expect(outsideSp.classification).toBe('unsupported-scope');
  });

  it('keeps the legacy flat payload behavior when no signedEvent is given', async () => {
    const outcome = await cancelNFe({
      accessKey: ACCESS_KEY,
      canonicalPayload: { xJust: 'x' },
      environment: 'homologation',
      requestExecutor: async () => ({
        headers: {},
        responseXml:
          '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retEnvEvento><cStat>128</cStat></retEnvEvento></soap:Body></soap:Envelope>',
        status: 200,
      }),
      timeoutMs: 1000,
    } as never);

    expect(outcome.operation).toBe('cancel-nfe');
  });
});

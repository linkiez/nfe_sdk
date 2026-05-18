import * as publicApi from '../../src/index';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

type CreateSigningContext = (input: {
  passphrase: string;
  source: { contentBase64: string; type: 'in-memory-content' };
}) => Promise<unknown>;

describe('recipient operational boundary', () => {
  it('returns unsupported-scope when recipient distribution is requested outside homologation', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as
      | ((input: {
          actor: { documentNumber: string; documentType: 'cnpj' };
          environment: 'production';
          ultNSU: string;
        }) => Promise<{ classification: string; failureReason?: string }>)
      | undefined;

    const outcome = await distributeRecipientDFe?.({
      actor: {
        documentNumber: '12345678000195',
        documentType: 'cnpj',
      },
      environment: 'production',
      ultNSU: '000000000000000',
    });

    expect(outcome?.classification).toBe('unsupported-scope');
    expect(outcome?.failureReason).toContain('Unsupported recipient scope');
  });

  it('surfaces service unavailability explicitly during recipient distribution', async () => {
    const distributeRecipientDFe = (publicApi as Record<string, unknown>)
      .distributeRecipientDFe as
      | ((input: {
          actor: { documentNumber: string; documentType: 'cpf' };
          environment: 'homologation';
          requestExecutor: (input: {
            endpointUrl: string;
            headers: Readonly<Record<string, string>>;
            requestXml: string;
            service: 'nfe-recipient-distribution';
            timeoutMs: number;
          }) => Promise<{
            headers: Readonly<Record<string, string>>;
            responseXml: string;
            status: number;
          }>;
          timeoutMs: number;
          ultNSU: string;
        }) => Promise<{ classification: string }>)
      | undefined;

    const outcome = await distributeRecipientDFe?.({
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<soap:Envelope><soap:Body><retDistDFeInt><cStat>109</cStat><xMotivo>Servico Paralisado sem Previsao</xMotivo></retDistDFeInt></soap:Body></soap:Envelope>',
        status: 503,
      }),
      timeoutMs: 5000,
      ultNSU: '000000000000000',
    });

    expect(outcome?.classification).toBe('unavailable');
  });

  it('returns usage-error when manifestation input violates the published contract', async () => {
    const manifestRecipientOperation = (publicApi as Record<string, unknown>)
      .manifestRecipientOperation as
      | ((input: {
          accessKey: string;
          actor: { documentNumber: string; documentType: 'cpf' };
          environment: 'homologation';
          eventType: 'operacao-nao-realizada';
          signingContext: { supportedAlgorithms: string[] };
        }) => Promise<{ classification: string; failureReason?: string }>)
      | undefined;

    const outcome = await manifestRecipientOperation?.({
      accessKey: '35190500000000000000550010000000011000000010',
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      eventType: 'operacao-nao-realizada',
      signingContext: {
        supportedAlgorithms: [
          'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
        ],
      },
    });

    expect(outcome?.classification).toBe('usage-error');
    expect(outcome?.failureReason).toContain('requires a justification');
  });

  it('returns dependency-limited when manifestation depends on external enablement', async () => {
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as CreateSigningContext | undefined;
    const manifestRecipientOperation = (publicApi as Record<string, unknown>)
      .manifestRecipientOperation as
      | ((input: {
          accessKey: string;
          actor: { documentNumber: string; documentType: 'cpf' };
          environment: 'homologation';
          eventType: 'ciencia-da-operacao';
          requestExecutor: (input: {
            endpointUrl: string;
            headers: Readonly<Record<string, string>>;
            requestXml: string;
            service: 'nfe-recipient-manifestation';
            timeoutMs: number;
          }) => Promise<{
            headers: Readonly<Record<string, string>>;
            responseXml: string;
            status: number;
          }>;
          signingContext: unknown;
          timeoutMs: number;
        }) => Promise<{ classification: string; failureReason?: string }>)
      | undefined;
    const signingFixture = createTestA1FixtureSource();
    const signingContext = await createSigningContext?.({
      passphrase: signingFixture.passphrase,
      source: {
        contentBase64: signingFixture.certificateBase64,
        type: 'in-memory-content',
      },
    });

    const outcome = await manifestRecipientOperation?.({
      accessKey: '35190500000000000000550010000000011000000010',
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      eventType: 'ciencia-da-operacao',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<soap:Envelope><soap:Body><retEnvEvento><cStat>128</cStat><xMotivo>Lote de evento processado</xMotivo><retEvento><infEvento><cStat>280</cStat><xMotivo>Solicitante nao habilitado para emissao do evento</xMotivo></infEvento></retEvento></retEnvEvento></soap:Body></soap:Envelope>',
        status: 200,
      }),
      signingContext,
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('dependency-limited');
    expect(outcome?.failureReason).toContain('habilitado');
  });
});

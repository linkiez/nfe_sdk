import * as publicApi from '../../src/index';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';
import { loadRecipientJsonFixture } from '../fixtures/recipient/load-recipient-fixture';

type CreateSigningContext = (input: {
  passphrase: string;
  source: { contentBase64: string; type: 'in-memory-content' };
}) => Promise<unknown>;

type ManifestRecipientOperation = (input: {
  accessKey: string;
  actor: {
    documentNumber: string;
    documentType: 'cpf' | 'cnpj';
  };
  environment: 'homologation';
  eventType:
    | 'ciencia-da-operacao'
    | 'confirmacao-da-operacao'
    | 'desconhecimento-da-operacao'
    | 'operacao-nao-realizada';
  justification?: string;
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
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  downloadRemainsSeparate: boolean;
  protocolNumber?: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('manifestRecipientOperation integration', () => {
  it.each([
    ['manifestation-210200.json', '210200', '135', '135260000000200'],
    ['manifestation-210210.json', '210210', '135', '135260000000210'],
    ['manifestation-210220.json', '210220', '136', '135260000000220'],
    ['manifestation-210240.json', '210240', '135', '135260000000240'],
  ])(
    'returns a structured manifestation outcome for %s',
    async (
      fixturePath,
      expectedEventCode,
      expectedApplicationStatusCode,
      expectedProtocolNumber,
    ) => {
      const createSigningContext = (publicApi as Record<string, unknown>)
        .createSigningContext as CreateSigningContext | undefined;
      const manifestRecipientOperation = (publicApi as Record<string, unknown>)
        .manifestRecipientOperation as ManifestRecipientOperation | undefined;
      const fixture = loadRecipientJsonFixture<{
        expectedEventCode: string;
        input: {
          accessKey: string;
          actor: { documentNumber: string; documentType: 'cpf' };
          environment: 'homologation';
          eventType:
            | 'ciencia-da-operacao'
            | 'confirmacao-da-operacao'
            | 'desconhecimento-da-operacao'
            | 'operacao-nao-realizada';
          justification?: string;
        };
        responseXml: string;
      }>(fixturePath);
      const signingFixture = createTestA1FixtureSource();
      const signingContext = await createSigningContext?.({
        passphrase: signingFixture.passphrase,
        source: {
          contentBase64: signingFixture.certificateBase64,
          type: 'in-memory-content',
        },
      });

      expect(typeof manifestRecipientOperation).toBe('function');

      const outcome = await manifestRecipientOperation?.({
        ...fixture.input,
        requestExecutor: async (request) => {
          expect(request.service).toBe('nfe-recipient-manifestation');
          expect(request.requestXml).toContain(
            `<tpEvento>${expectedEventCode}</tpEvento>`,
          );

          return {
            headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
            responseXml: fixture.responseXml,
            status: 200,
          };
        },
        signingContext,
        timeoutMs: 5000,
      });

      expect(outcome?.classification).toBe('success');
      expect(outcome?.applicationStatusCode).toBe(
        expectedApplicationStatusCode,
      );
      expect(outcome?.protocolNumber).toBe(expectedProtocolNumber);
      expect(outcome?.downloadRemainsSeparate).toBe(true);
      expect(outcome?.transportOutcome.classification).toBe('success');
    },
  );
});

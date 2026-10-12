import * as publicApi from '../../src/index';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

async function createEPECSigningContext() {
  const fixtureSource = createTestA1FixtureSource();
  return publicApi.createSigningContext({
    passphrase: fixtureSource.passphrase,
    source: {
      contentBase64: fixtureSource.certificateBase64,
      type: 'in-memory-content',
    },
  });
}

describe('submitEPECEvent production contingency', () => {
  it('submits one production EPEC event and returns the accepted protocol', async () => {
    const submitEPECEvent = (publicApi as Record<string, unknown>)
      .submitEPECEvent as
      | ((input: Record<string, unknown>) => Promise<{
          classification: string;
          eventProtocol?: string;
          nextAction?: string;
          reconciliationDeadlineDays?: number;
          state?: string;
        }>)
      | undefined;
    const requests: string[] = [];
    const signingContext = await createEPECSigningContext();

    const outcome = await submitEPECEvent?.({
      chNFe: '35260112345678000195550010000000011000000014',
      emissionDateTime: '2026-01-01T10:00:00-03:00',
      environment: 'production',
      issuerCNPJ: '12345678000195',
      issuerIE: '123456789012',
      issuerUF: '35',
      recipientDocument: '98765432000100',
      recipientUF: 'RJ',
      requestExecutor: async (request: { requestXml: string }) => {
        requests.push(request.requestXml);
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml:
            '<retEnvEvento><cStat>128</cStat><xMotivo>Lote de evento processado</xMotivo><retEvento><infEvento><cStat>135</cStat><xMotivo>Evento registrado</xMotivo><nProt>135260000000001</nProt></infEvento></retEvento></retEnvEvento>',
          status: 200,
        };
      },
      signingContext,
      totalICMS: '120.00',
      totalICMSST: '15.00',
      totalValue: '1500.00',
      tpNF: '0',
    });

    expect(outcome?.classification).toBe('registered');
    expect(outcome?.eventProtocol).toBe('135260000000001');
    expect(outcome?.state).toBe('awaiting-recovery');
    expect(outcome?.nextAction).toBe('transmitNFeAfterRecovery');
    expect(outcome?.reconciliationDeadlineDays).toBe(7);
    expect(requests).toHaveLength(1);
    expect(requests[0]).toContain('<tpAmb>1</tpAmb>');
    expect(requests[0]).toContain('<tpEvento>110140</tpEvento>');
    expect(requests[0]).not.toContain('<enviNFe');
  });

  it('does not send production EPEC when required fiscal details are missing', async () => {
    const submitEPECEvent = (publicApi as Record<string, unknown>)
      .submitEPECEvent as
      | ((
          input: Record<string, unknown>,
        ) => Promise<{ classification: string }>)
      | undefined;
    const requestExecutor = jest.fn();

    const outcome = await submitEPECEvent?.({
      chNFe: '35260112345678000195550010000000011000000014',
      emissionDateTime: '2026-01-01T10:00:00-03:00',
      environment: 'production',
      issuerCNPJ: '12345678000195',
      issuerUF: '35',
      recipientDocument: '98765432000100',
      requestExecutor,
      signingContext: {},
      totalValue: '1500.00',
    });

    expect(outcome?.classification).toBe('usage-error');
    expect(requestExecutor).not.toHaveBeenCalled();
  });

  it('does not classify a production EPEC without a valid event protocol as registered', async () => {
    const submitEPECEvent = (publicApi as Record<string, unknown>)
      .submitEPECEvent as
      | ((input: Record<string, unknown>) => Promise<{
          classification: string;
          eventProtocol?: string;
          state?: string;
        }>)
      | undefined;
    const signingContext = await createEPECSigningContext();

    const outcome = await submitEPECEvent?.({
      chNFe: '35260112345678000195550010000000011000000014',
      emissionDateTime: '2026-01-01T10:00:00-03:00',
      environment: 'production',
      issuerCNPJ: '12345678000195',
      issuerIE: '123456789012',
      issuerUF: '35',
      recipientDocument: '98765432000100',
      recipientUF: 'RJ',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<retEnvEvento><cStat>128</cStat><retEvento><infEvento><cStat>135</cStat><nProt>invalid</nProt></infEvento></retEvento></retEnvEvento>',
        status: 200,
      }),
      signingContext,
      totalICMS: '120.00',
      totalICMSST: '15.00',
      totalValue: '1500.00',
      tpNF: '0',
    });

    expect(outcome).toMatchObject({
      classification: 'protocol-error',
      state: 'inconclusive',
    });
    expect(outcome?.eventProtocol).toBeUndefined();
  });
});

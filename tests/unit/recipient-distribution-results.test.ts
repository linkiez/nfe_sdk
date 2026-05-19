import { mapRecipientDistributionTransportOutcome } from '../../src/canonical/recipient/recipient-distribution-outcome';

describe('recipient distribution result mapping', () => {
  it('maps successful distribution responses into structured envelopes and cursor continuity', () => {
    const outcome = mapRecipientDistributionTransportOutcome(
      {
        actor: {
          documentNumber: '12345678909',
          documentType: 'cpf',
        },
        environment: 'homologation',
        ultNSU: '000000000000000',
      },
      {
        applicationStatusCode: '138',
        applicationStatusMessage: 'Documentos localizados',
        classification: 'success',
        environment: 'homologation',
        evidence: {
          endpointUrl: 'https://example.invalid/distribution',
          provider: 'SVCAN',
          requestEnvelopeXml: '<soap:Envelope/>',
          responseEnvelopeXml:
            '<retDistDFeInt><cStat>138</cStat><xMotivo>Documentos localizados</xMotivo><ultNSU>000000000000101</ultNSU><maxNSU>000000000000105</maxNSU><loteDistDFeInt><docZip NSU="000000000000101" schema="resNFe_v1.01">PHJlc05GZT48Y2hORmU+MzUxOTA1MDAwMDAwMDAwMDAwMDA1NTAwMTAwMDAwMDAwMTEwMDAwMDAwMTA8L2NoTkZlPjxDTlBKPjEyMzQ1Njc4MDAwMTk1PC9DTlBKPjxDTlBKRGVzdD4xMjM0NTY3ODAwMDE5NTwvQ05QSkRlc3Q+PC9yZXNORmU+</docZip></loteDistDFeInt></retDistDFeInt>',
        },
        service: 'nfe-recipient-distribution',
      },
    );

    expect(outcome.classification).toBe('documents-available');
    expect(outcome.cursor.ultNSU).toBe('000000000000101');
    expect(outcome.cursor.hasMoreDocumentsNow).toBe(true);
    expect(outcome.documents[0]).toEqual(
      expect.objectContaining({
        accessKey: '35190500000000000000550010000000011000000010',
        kind: 'summary',
        nsu: '000000000000101',
      }),
    );
  });

  it('maps consumption-limit responses into usage-error with one-hour backoff', () => {
    const outcome = mapRecipientDistributionTransportOutcome(
      {
        actor: {
          documentNumber: '12345678909',
          documentType: 'cpf',
        },
        environment: 'homologation',
        ultNSU: '000000000000101',
      },
      {
        applicationStatusCode: '656',
        applicationStatusMessage: 'Consumo indevido',
        classification: 'functional-rejection',
        environment: 'homologation',
        evidence: {
          endpointUrl: 'https://example.invalid/distribution',
          provider: 'SVCAN',
          requestEnvelopeXml: '<soap:Envelope/>',
          responseEnvelopeXml:
            '<retDistDFeInt><cStat>656</cStat><xMotivo>Consumo indevido</xMotivo><ultNSU>000000000000101</ultNSU><maxNSU>000000000000101</maxNSU></retDistDFeInt>',
        },
        service: 'nfe-recipient-distribution',
      },
    );

    expect(outcome.classification).toBe('usage-error');
    expect(outcome.failureReason).toBe('Consumo indevido');
    expect(outcome.cursor.recommendedBackoffMs).toBe(3600000);
  });
});

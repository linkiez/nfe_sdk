import { retrieveRecipientDocument } from '../../../../src/canonical/recipient/retrieve-recipient-document';

describe('retrieveRecipientDocument', () => {
  it('returns document-available when a matching full document is present in the follow-up distribution', async () => {
    const outcome = await retrieveRecipientDocument({
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<?xml version="1.0" encoding="utf-8"?><soap:Envelope><soap:Body><retDistDFeInt><tpAmb>2</tpAmb><cStat>138</cStat><xMotivo>Documentos localizados</xMotivo><ultNSU>000000000000101</ultNSU><maxNSU>000000000000101</maxNSU><loteDistDFeInt><docZip NSU="000000000000101" schema="procNFe_v4.00">PHByb2NORmU+PE5GZT48aW5mTkZlPjxpZGU+PGNORj4xMDAwMDAwMDE8L2NORj48L2lkZT48L2luZk5GZT48L05GZT48cHJvdE5GZT48aW5mUHJvdD48Y2hORmU+MzUxOTA1MDAwMDAwMDAwMDAwMDA1NTAwMTAwMDAwMDAwMTEwMDAwMDAwMTE8L2NoTkZlPjwvaW5mUHJvdD48L3Byb3RORmU+PC9wcm9jTkZlPg==</docZip></loteDistDFeInt></retDistDFeInt></soap:Body></soap:Envelope>',
        status: 200,
      }),
      startingCursor: '000000000000100',
      target: {
        accessKey: '35190500000000000000550010000000011000000011',
        documentKinds: ['full-document'],
      },
      timeoutMs: 5000,
    });

    expect(outcome.classification).toBe('document-available');
    expect(outcome.matchedDocument).toEqual(
      expect.objectContaining({
        accessKey: '35190500000000000000550010000000011000000011',
        kind: 'full-document',
      }),
    );
    expect(outcome.distributionOutcome.continuation.nextAction).toBe(
      'consume-documents',
    );
  });

  it('returns document-pending when the follow-up distribution succeeds without the target document', async () => {
    const outcome = await retrieveRecipientDocument({
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml:
          '<?xml version="1.0" encoding="utf-8"?><soap:Envelope><soap:Body><retDistDFeInt><tpAmb>2</tpAmb><cStat>138</cStat><xMotivo>Documentos localizados</xMotivo><ultNSU>000000000000101</ultNSU><maxNSU>000000000000101</maxNSU><loteDistDFeInt><docZip NSU="000000000000101" schema="resNFe_v1.01">PHJlc05GZT48Y2hORmU+MzUxOTA1MDAwMDAwMDAwMDAwMDA1NTAwMTAwMDAwMDAwMTEwMDAwMDAwMTA8L2NoTkZlPjxDTlBKPjEyMzQ1Njc4MDAwMTk1PC9DTlBKPjxDTlBKRGVzdD4xMjM0NTY3ODAwMDE5NTwvQ05QSkRlc3Q+PC9yZXNORmU+</docZip></loteDistDFeInt></retDistDFeInt></soap:Body></soap:Envelope>',
        status: 200,
      }),
      startingCursor: '000000000000100',
      target: {
        accessKey: '35190500000000000000550010000000011000000011',
        documentKinds: ['full-document'],
      },
      timeoutMs: 5000,
    });

    expect(outcome.classification).toBe('document-pending');
    expect(outcome.matchedDocument).toBeUndefined();
    expect(outcome.distributionOutcome.classification).toBe(
      'documents-available',
    );
  });
});

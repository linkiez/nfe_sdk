import { reconcileNFeReceipt } from '../../src/canonical/nfe/reconcile-nfe-receipt';

describe('reconcileNFeReceipt', () => {
  it('maps a single authorized receipt item into an authorized reconciliation result', async () => {
    const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
      <tpAmb>2</tpAmb>
      <nRec>135190000000002</nRec>
      <cStat>104</cStat>
      <xMotivo>Lote processado</xMotivo>
      <retProt>
        <infProt>
          <chNFe>35240100000000000000550010000000011000000010</chNFe>
          <nProt>135190000000001</nProt>
          <cStat>100</cStat>
          <xMotivo>Autorizado o uso da NF-e</xMotivo>
        </infProt>
      </retProt>
    </retConsReciNFe>`;

    const result = await reconcileNFeReceipt({
      receiptNumber: '135190000000002',
      requestExecutor: async ({ requestXml, service }) => {
        expect(service).toBe('nfe-authorization-batch');
        expect(requestXml).toContain('<consReciNFe');
        expect(requestXml).toContain('<nRec>135190000000002</nRec>');

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(result.classification).toBe('authorized');
    expect(result.receiptNumber).toBe('135190000000002');
    expect(result.documentKey).toBe(
      '35240100000000000000550010000000011000000010',
    );
    expect(result.protocolNumber).toBe('135190000000001');
    expect(result.statusCode).toBe('100');
    expect(result.statusMessage).toBe('Autorizado o uso da NF-e');
    expect(result.state?.primaryState).toBe('authorized');
    expect(result.transportOutcome.classification).toBe('success');
  });

  it('maps a processing receipt response into a pending reconciliation result', async () => {
    const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
      <tpAmb>2</tpAmb>
      <nRec>135190000000002</nRec>
      <cStat>105</cStat>
      <xMotivo>Lote em processamento</xMotivo>
    </retConsReciNFe>`;

    const result = await reconcileNFeReceipt({
      receiptNumber: '135190000000002',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(result.classification).toBe('pending');
    expect(result.receiptNumber).toBe('135190000000002');
    expect(result.statusCode).toBe('105');
    expect(result.statusMessage).toBe('Lote em processamento');
    expect(result.state?.primaryState).toBe('pending');
    expect(result.state?.pendingReason).toBe('Lote em processamento');
    expect(result.transportOutcome.classification).toBe('success');
  });

  it('returns usage-error when receiptNumber is blank', async () => {
    const result = await reconcileNFeReceipt({
      receiptNumber: '   ',
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(result.classification).toBe('usage-error');
    expect(result.statusMessage).toBe(
      'receiptNumber is required for receipt reconciliation.',
    );
  });

  it('returns inconclusive when one receipt resolves to multiple protocol items', async () => {
    const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
      <tpAmb>2</tpAmb>
      <nRec>135190000000010</nRec>
      <cStat>104</cStat>
      <xMotivo>Lote processado</xMotivo>
      <retProt>
        <infProt>
          <chNFe>35240100000000000000550010000000011000000010</chNFe>
          <nProt>135190000000001</nProt>
          <cStat>100</cStat>
          <xMotivo>Autorizado o uso da NF-e</xMotivo>
        </infProt>
      </retProt>
      <retProt>
        <infProt>
          <chNFe>35240100000000000000550010000000021000000025</chNFe>
          <cStat>204</cStat>
          <xMotivo>Duplicidade de NF-e</xMotivo>
        </infProt>
      </retProt>
    </retConsReciNFe>`;

    const result = await reconcileNFeReceipt({
      receiptNumber: '135190000000010',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      routingContext: {
        authorizer: 'SVCAN',
        environment: 'homologation',
      },
      timeoutMs: 5000,
    });

    expect(result.classification).toBe('inconclusive');
    expect(result.items).toHaveLength(2);
    expect(result.state?.primaryState).toBe('inconclusive');
  });
});

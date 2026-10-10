import {
  parseRetConsReciNFe,
  classifyAsyncBatchItem,
} from '../../../../src/canonical/nfe/async-batch-retrieval';

describe('async batch retrieval parsing', () => {
  describe('parseRetConsReciNFe', () => {
    it('returns complete classification with mixed authorized and rejected items', () => {
      const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
        <tpAmb>1</tpAmb>
        <verAplic>SVCAN0.4.0.0</verAplic>
        <nRec>135000000000001</nRec>
        <cStat>104</cStat>
        <xMotivo>Lote processado</xMotivo>
        <dhRecbto>2024-01-15T10:00:00-03:00</dhRecbto>
        <retProt>
          <infProt>
            <tpAmb>1</tpAmb>
            <verAplic>SVCAN0.4.0.0</verAplic>
            <chNFe>35240100000000000000550010000000011000000010</chNFe>
            <dhRecbto>2024-01-15T10:00:01-03:00</dhRecbto>
            <nProt>135000000000002</nProt>
            <cStat>100</cStat>
            <xMotivo>Autorizado o uso da NF-e</xMotivo>
          </infProt>
        </retProt>
        <retProt>
          <infProt>
            <tpAmb>1</tpAmb>
            <verAplic>SVCAN0.4.0.0</verAplic>
            <chNFe>35240100000000000000550010000000021000000025</chNFe>
            <dhRecbto>2024-01-15T10:00:01-03:00</dhRecbto>
            <cStat>204</cStat>
            <xMotivo>Duplicidade de NF-e</xMotivo>
          </infProt>
        </retProt>
      </retConsReciNFe>`;

      const result = parseRetConsReciNFe(responseXml);

      expect(result.classification).toBe('complete');
      expect(result.items).toHaveLength(2);

      const authorized = result.items.find(
        (item) => item.chNFe === '35240100000000000000550010000000011000000010',
      );
      expect(authorized).toBeDefined();
      expect(authorized?.classification).toBe('authorized');
      expect(authorized?.protocolNumber).toBe('135000000000002');
      expect(authorized?.statusCode).toBe('100');

      const rejected = result.items.find(
        (item) => item.chNFe === '35240100000000000000550010000000021000000025',
      );
      expect(rejected).toBeDefined();
      expect(rejected?.classification).toBe('rejected');
      expect(rejected?.protocolNumber).toBeUndefined();
      expect(rejected?.statusCode).toBe('204');
    });

    it('returns processing classification when batch is still being processed (cStat 105)', () => {
      const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
        <tpAmb>1</tpAmb>
        <nRec>135000000000099</nRec>
        <cStat>105</cStat>
        <xMotivo>Lote em processamento</xMotivo>
        <dhRecbto>2024-01-15T10:00:00-03:00</dhRecbto>
      </retConsReciNFe>`;

      const result = parseRetConsReciNFe(responseXml);

      expect(result.classification).toBe('processing');
      expect(result.items).toHaveLength(0);
    });

    it('returns not-found classification when batch does not exist (cStat 215)', () => {
      const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
        <tpAmb>1</tpAmb>
        <nRec>135000000099999</nRec>
        <cStat>215</cStat>
        <xMotivo>Rejeição: Número do Recibo divergente</xMotivo>
        <dhRecbto>2024-01-15T10:00:00-03:00</dhRecbto>
      </retConsReciNFe>`;

      const result = parseRetConsReciNFe(responseXml);

      expect(result.classification).toBe('not-found');
      expect(result.items).toHaveLength(0);
    });

    it('returns protocol-error classification when XML cannot be parsed', () => {
      const result = parseRetConsReciNFe('not-valid-xml');

      expect(result.classification).toBe('protocol-error');
      expect(result.items).toHaveLength(0);
    });

    it('returns protocol-error when a processing response is not well-formed XML', () => {
      const result = parseRetConsReciNFe(
        '<retConsReciNFe><tpAmb>1</tpAmb><cStat>105</cStat>',
      );

      expect(result.classification).toBe('protocol-error');
      expect(result.items).toHaveLength(0);
    });

    it('returns protocol-error classification when XML is empty', () => {
      const result = parseRetConsReciNFe('');

      expect(result.classification).toBe('protocol-error');
      expect(result.items).toHaveLength(0);
    });

    it('classifies cancelled items correctly (cStat 101)', () => {
      const responseXml = `<retConsReciNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">
        <tpAmb>1</tpAmb>
        <nRec>135000000000003</nRec>
        <cStat>104</cStat>
        <xMotivo>Lote processado</xMotivo>
        <dhRecbto>2024-01-15T10:00:00-03:00</dhRecbto>
        <retProt>
          <infProt>
            <chNFe>35240100000000000000550010000000031000000038</chNFe>
            <nProt>135000000000004</nProt>
            <cStat>101</cStat>
            <xMotivo>Cancelamento de NF-e homologado</xMotivo>
          </infProt>
        </retProt>
      </retConsReciNFe>`;

      const result = parseRetConsReciNFe(responseXml);

      expect(result.classification).toBe('complete');
      expect(result.items).toHaveLength(1);
      expect(result.items[0]?.classification).toBe('cancelled');
      expect(result.items[0]?.statusCode).toBe('101');
    });
  });

  describe('classifyAsyncBatchItem', () => {
    it('classifies cStat 100 as authorized', () => {
      expect(classifyAsyncBatchItem('100')).toBe('authorized');
    });

    it('classifies cStat 101 as cancelled', () => {
      expect(classifyAsyncBatchItem('101')).toBe('cancelled');
    });

    it('classifies cStat 105 as pending', () => {
      expect(classifyAsyncBatchItem('105')).toBe('pending');
    });

    it('classifies cStat 204 as rejected', () => {
      expect(classifyAsyncBatchItem('204')).toBe('rejected');
    });

    it('classifies cStat 205 as rejected', () => {
      expect(classifyAsyncBatchItem('205')).toBe('rejected');
    });

    it('classifies cStat 301 as denied', () => {
      expect(classifyAsyncBatchItem('301')).toBe('denied');
    });

    it('classifies cStat 302 as denied', () => {
      expect(classifyAsyncBatchItem('302')).toBe('denied');
    });

    it('classifies unknown cStat as processing-error', () => {
      expect(classifyAsyncBatchItem('999')).toBe('processing-error');
    });
  });
});

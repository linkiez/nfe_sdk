import {
  buildConsNSUXml,
  parseRetDistDFeIntForNSU,
} from '../../../../src/canonical/recipient/query-nfe-by-nsu.js';

const SAMPLE_SUCCESS_XML = `
<retDistDFeInt versao="1.01">
  <tpAmb>2</tpAmb>
  <verAplic>AN_9.0.4</verAplic>
  <cStat>138</cStat>
  <xMotivo>Documento localizado</xMotivo>
  <dhResp>2024-01-15T10:30:00-03:00</dhResp>
  <loteDistDFeInt>
    <docZip NSU="000000000001234" schema="procNFe_v4.00.xsd">base64encodedcontent</docZip>
  </loteDistDFeInt>
</retDistDFeInt>`;

const SAMPLE_NOT_FOUND_XML = `
<retDistDFeInt versao="1.01">
  <tpAmb>2</tpAmb>
  <verAplic>AN_9.0.4</verAplic>
  <cStat>137</cStat>
  <xMotivo>Nenhum documento localizado</xMotivo>
  <dhResp>2024-01-15T10:30:00-03:00</dhResp>
</retDistDFeInt>`;

describe('buildConsNSUXml', () => {
  it('builds consNSU XML with CNPJ actor in homologation', () => {
    const xml = buildConsNSUXml({
      actor: { documentNumber: '12345678000195', documentType: 'cnpj' },
      nsu: '000000000001234',
      environment: 'homologation',
    });

    expect(xml).toContain('<consNSU>');
    expect(xml).toContain('<NSU>000000000001234</NSU>');
    expect(xml).toContain('<CNPJ>12345678000195</CNPJ>');
    expect(xml).toContain('<tpAmb>2</tpAmb>');
  });

  it('builds consNSU XML with CPF actor in production', () => {
    const xml = buildConsNSUXml({
      actor: { documentNumber: '12345678901', documentType: 'cpf' },
      nsu: '000000000009999',
      environment: 'production',
    });

    expect(xml).toContain('<CPF>12345678901</CPF>');
    expect(xml).toContain('<tpAmb>1</tpAmb>');
  });
});

describe('parseRetDistDFeIntForNSU', () => {
  it('returns documents-available when cStat is 138', () => {
    const outcome = parseRetDistDFeIntForNSU(SAMPLE_SUCCESS_XML);

    expect(outcome.classification).toBe('documents-available');
    expect(outcome.documents.length).toBe(1);
  });

  it('returns no-new-documents when cStat is 137', () => {
    const outcome = parseRetDistDFeIntForNSU(SAMPLE_NOT_FOUND_XML);

    expect(outcome.classification).toBe('no-new-documents');
    expect(outcome.documents.length).toBe(0);
  });

  it('returns protocol-error for malformed XML', () => {
    const outcome = parseRetDistDFeIntForNSU('not xml at all');

    expect(outcome.classification).toBe('protocol-error');
  });
});

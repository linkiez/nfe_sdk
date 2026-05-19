import {
  buildConsChNFeXml,
  parseRetDistDFeIntForKey,
} from '../../../../src/canonical/recipient/query-nfe-by-key.js';

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

const VALID_ACCESS_KEY = '35240112345678000195550010000000011000000015';

describe('buildConsChNFeXml', () => {
  it('builds consChNFe XML with CNPJ actor in homologation', () => {
    const xml = buildConsChNFeXml({
      actor: { documentNumber: '12345678000195', documentType: 'cnpj' },
      chNFe: VALID_ACCESS_KEY,
      environment: 'homologation',
    });

    expect(xml).toContain('<consChNFe>');
    expect(xml).toContain(`<chNFe>${VALID_ACCESS_KEY}</chNFe>`);
    expect(xml).toContain('<CNPJ>12345678000195</CNPJ>');
    expect(xml).toContain('<tpAmb>2</tpAmb>');
  });

  it('builds consChNFe XML in production environment', () => {
    const xml = buildConsChNFeXml({
      actor: { documentNumber: '12345678901', documentType: 'cpf' },
      chNFe: VALID_ACCESS_KEY,
      environment: 'production',
    });

    expect(xml).toContain('<CPF>12345678901</CPF>');
    expect(xml).toContain('<tpAmb>1</tpAmb>');
  });
});

describe('parseRetDistDFeIntForKey', () => {
  it('returns documents-available when cStat is 138', () => {
    const outcome = parseRetDistDFeIntForKey(SAMPLE_SUCCESS_XML);

    expect(outcome.classification).toBe('documents-available');
    expect(outcome.documents.length).toBe(1);
  });

  it('returns no-new-documents when cStat is 137', () => {
    const outcome = parseRetDistDFeIntForKey(SAMPLE_NOT_FOUND_XML);

    expect(outcome.classification).toBe('no-new-documents');
    expect(outcome.documents.length).toBe(0);
  });

  it('returns protocol-error for malformed XML', () => {
    const outcome = parseRetDistDFeIntForKey('not xml');

    expect(outcome.classification).toBe('protocol-error');
  });
});

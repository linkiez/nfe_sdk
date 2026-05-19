import {
  buildCadConsultaCadastroXml,
  parseRetConsCad,
} from '../../../../src/canonical/recipient/query-contributor-registration.js';

const SAMPLE_FOUND_XML = `
<retConsCad versao="2.00">
  <infCons>
    <verAplic>SVRS202401150001</verAplic>
    <cStat>111</cStat>
    <xMotivo>Consulta cadastro com uma ocorrência</xMotivo>
    <UF>SP</UF>
    <dhCons>2024-01-15T10:30:00</dhCons>
    <infCad>
      <IE>123456789012</IE>
      <CNPJ>12345678000195</CNPJ>
      <xNome>EMPRESA TESTE LTDA</xNome>
      <indSitIE>1</indSitIE>
    </infCad>
  </infCons>
</retConsCad>`;

const SAMPLE_NOT_FOUND_XML = `
<retConsCad versao="2.00">
  <infCons>
    <verAplic>SVRS202401150001</verAplic>
    <cStat>120</cStat>
    <xMotivo>Empresa nao encontrada</xMotivo>
    <UF>SP</UF>
    <dhCons>2024-01-15T10:30:00</dhCons>
  </infCons>
</retConsCad>`;

const SAMPLE_MULTIPLE_XML = `
<retConsCad versao="2.00">
  <infCons>
    <verAplic>SVRS202401150001</verAplic>
    <cStat>111</cStat>
    <xMotivo>Consulta cadastro com uma ocorrência</xMotivo>
    <UF>SP</UF>
    <dhCons>2024-01-15T10:30:00</dhCons>
    <infCad>
      <IE>111111111111</IE>
      <CNPJ>12345678000195</CNPJ>
      <xNome>EMPRESA A LTDA</xNome>
      <indSitIE>1</indSitIE>
    </infCad>
    <infCad>
      <IE>222222222222</IE>
      <CNPJ>12345678000195</CNPJ>
      <xNome>EMPRESA A LTDA FILIAL</xNome>
      <indSitIE>1</indSitIE>
    </infCad>
  </infCons>
</retConsCad>`;

describe('buildCadConsultaCadastroXml', () => {
  it('builds XML with CNPJ query', () => {
    const xml = buildCadConsultaCadastroXml({
      cnpj: '12345678000195',
      uf: 'SP',
      environment: 'homologation',
    });

    expect(xml).toContain('<CNPJ>12345678000195</CNPJ>');
    expect(xml).toContain('<UF>SP</UF>');
    expect(xml).toContain('<tpAmb>2</tpAmb>');
  });

  it('builds XML with IE query', () => {
    const xml = buildCadConsultaCadastroXml({
      ie: '123456789012',
      uf: 'MG',
      environment: 'production',
    });

    expect(xml).toContain('<IE>123456789012</IE>');
    expect(xml).toContain('<UF>MG</UF>');
    expect(xml).toContain('<tpAmb>1</tpAmb>');
  });
});

describe('parseRetConsCad', () => {
  it('returns found with contributor details on cStat 111', () => {
    const outcome = parseRetConsCad(SAMPLE_FOUND_XML);

    expect(outcome.classification).toBe('found');
    expect(outcome.name).toBe('EMPRESA TESTE LTDA');
    expect(outcome.ie).toBe('123456789012');
  });

  it('returns not-found on empty result', () => {
    const outcome = parseRetConsCad(SAMPLE_NOT_FOUND_XML);

    expect(outcome.classification).toBe('not-found');
  });

  it('returns found with first result when multiple infCad entries per CNPJ', () => {
    const outcome = parseRetConsCad(SAMPLE_MULTIPLE_XML);

    expect(outcome.classification).toBe('found');
    expect(outcome.name).toBe('EMPRESA A LTDA');
  });

  it('returns protocol-error for malformed XML', () => {
    const outcome = parseRetConsCad('not xml');

    expect(outcome.classification).toBe('protocol-error');
  });
});

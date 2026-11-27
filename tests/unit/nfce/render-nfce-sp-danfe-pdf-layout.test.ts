import layoutNFCeDanfe from '../../../src/canonical/nfce/render-nfce-sp-danfe-pdf-layout.js';
import type NFCePresentation from '../../../src/canonical/nfce/render-nfce-sp-danfe-model.js';

const KEY = '35260512345678000123650020000004561876543219';
const presentation: NFCePresentation = {
  additionalMessages: ['Tributos totais incidentes: R$ 1,50'],
  authorizationDate: '20/05/2026 10:30:03',
  documentDate: '20/05/2026 10:30:00',
  documentNumber: '456',
  documentSeries: '2',
  issuerAddress: 'Rua de Teste, 100 - Centro - Sao Paulo/SP',
  issuerDocument: 'CNPJ 12.345.678/0001-23 - IE 123456789',
  issuerName: 'Comercio Teste & Filhos',
  items: [
    {
      code: 'SKU-1',
      description: 'Cafe & acucar',
      quantity: '2,0000',
      unit: 'UN',
      unitPrice: '5,00',
      total: '10,00',
    },
  ],
  payments: [{ method: 'Dinheiro', amount: '21,00' }],
  totals: [{ label: 'Valor a pagar', value: '21,00' }],
};
const identity = {
  accessKey: KEY,
  environment: 'production' as const,
  protocolNumber: '135260000000001',
  qrCodeUrl: `https://www.nfce.fazenda.sp.gov.br/x?p=${KEY}|3|1`,
};
const texts = (blocks: ReturnType<typeof layoutNFCeDanfe>) =>
  blocks.flatMap((block) =>
    block.kind === 'text'
      ? [block.text]
      : block.kind === 'pair'
        ? [`${block.left} ${block.right}`]
        : [],
  );

describe('layoutNFCeDanfe', () => {
  it('lays out every section of the DANFE NFC-e in print order', () => {
    const lines = texts(layoutNFCeDanfe(presentation, identity, false));

    expect(lines).toEqual(
      expect.arrayContaining([
        'Comercio Teste & Filhos',
        'CONSUMIDOR NÃO IDENTIFICADO',
        'DANFE NFC-e - Documento Auxiliar da Nota Fiscal de Consumidor Eletrônica',
        'Número 456 - Série 2',
        'Emissão: 20/05/2026 10:30:00',
        'Itens da compra (1)',
        '1. Cafe & acucar',
        'Quantidade: 2,0000 UN',
        'Valor a pagar R$ 21,00',
        'Dinheiro: R$ 21,00',
        'Consulte pela chave de acesso',
        '3526 0512 3456 7800 0123 6500 2000 0004 5618 7654 3219',
        'Protocolo de autorização: 135260000000001 - 20/05/2026 10:30:03',
        identity.qrCodeUrl,
        'Tributos totais incidentes: R$ 1,50',
      ]),
    );
    expect(lines.indexOf('Itens da compra (1)')).toBeLessThan(
      lines.indexOf('Consulte pela chave de acesso'),
    );
  });

  it('prints the QR Code once and the logo only when there is one', () => {
    const kinds = (logo: boolean) =>
      layoutNFCeDanfe(presentation, identity, logo).map((block) => block.kind);

    expect(kinds(false).filter((kind) => kind === 'qr')).toHaveLength(1);
    expect(kinds(false)).not.toContain('logo');
    expect(kinds(true)[0]).toBe('logo');
  });

  it('opens with the homologation notice and names the consumer when there is one', () => {
    const lines = texts(
      layoutNFCeDanfe(
        { ...presentation, consumer: 'CPF 123.456.789-01 Consumidor', change: '0,50' },
        { ...identity, environment: 'homologation' },
        false,
      ),
    );

    expect(lines[0]).toBe('EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL');
    expect(lines).toContain('Consumidor: CPF 123.456.789-01 Consumidor');
    expect(lines).toContain('Troco: R$ 0,50');
    expect(lines).not.toContain('CONSUMIDOR NÃO IDENTIFICADO');
  });
});

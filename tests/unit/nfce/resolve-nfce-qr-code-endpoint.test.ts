import {
  resolveNFCeQRCodeEndpoint,
  SP_QR_CODE_BASE_URLS,
} from '../../../src/canonical/nfce/resolve-nfce-qr-code-endpoint';

describe('resolveNFCeQRCodeEndpoint', () => {
  it.each([
    [
      'homologation',
      'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
      '2',
    ],
    [
      'production',
      'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
      '1',
    ],
  ] as const)(
    'resolves the SP public consultation address and tpAmb for %s',
    (environment, baseUrl, tpAmb) => {
      expect(resolveNFCeQRCodeEndpoint('SP', environment)).toMatchObject({
        baseUrl,
        qrCodeVersion: '3',
        tpAmb,
        uf: 'SP',
      });
    },
  );

  it('shares the SP base URLs with the other NFC-e modules', () => {
    expect(SP_QR_CODE_BASE_URLS.production).toBe(
      resolveNFCeQRCodeEndpoint('SP', 'production')?.baseUrl,
    );
  });

  it('returns undefined for a UF without official evidence in the matrix', () => {
    expect(resolveNFCeQRCodeEndpoint('PR', 'homologation')).toBeUndefined();
    expect(resolveNFCeQRCodeEndpoint('MG', 'production')).toBeUndefined();
  });

  it('composes the online v3 URL with only key, version and tpAmb', () => {
    const endpoint = resolveNFCeQRCodeEndpoint('SP', 'production');
    const key = '3'.repeat(44);

    expect(endpoint?.composeOnlineUrl(key)).toBe(
      `https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=${key}|3|1`,
    );
  });

  it.each([
    ['homologation', 'https://www.homologacao.nfce.fazenda.sp.gov.br/consulta'],
    ['production', 'https://www.nfce.fazenda.sp.gov.br/consulta'],
  ] as const)(
    'resolves the SP consultation-by-key URL (urlChave) for %s',
    (environment, consultationUrl) => {
      expect(resolveNFCeQRCodeEndpoint('SP', environment)).toMatchObject({
        consultationUrl,
      });
    },
  );
});

import { generateNFCeSPQRCode } from '../../../src/canonical/nfce/generate-nfce-sp-qr-code';
import type { NFCeSPQRCodeRequest } from '../../../src/canonical/nfce/contracts';

import { loadNFCeJsonFixture } from '../../fixtures/nfce/build-nfce-fixtures';

type FixtureRequest = Required<NFCeSPQRCodeRequest>;

describe('generateNFCeSPQRCode with optional CSC (QR Code v3, NT 2025.001)', () => {
  const withCsc = (): FixtureRequest =>
    loadNFCeJsonFixture<FixtureRequest>('sp-qrcode-homologation-input.json');
  const withoutCsc = (): Omit<FixtureRequest, 'csc'> => {
    const { uf, environment, accessKey } = withCsc();
    return { uf, environment, accessKey };
  };

  it('generates the online v3 URL without any CSC', () => {
    const input = withoutCsc();

    const result = generateNFCeSPQRCode(input);

    expect(result).toMatchObject({
      accessKey: input.accessKey,
      environment: 'homologation',
      uf: 'SP',
      qrCodeUrl:
        'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=' +
        input.accessKey +
        '|3|2',
    });
  });

  it('reports the QR Code version used', () => {
    expect(generateNFCeSPQRCode(withoutCsc())).toMatchObject({
      qrCodeVersion: '3',
    });
    expect(generateNFCeSPQRCode(withCsc())).toMatchObject({
      qrCodeVersion: '3',
    });
  });

  it('keeps the same URL whether or not a CSC is informed', () => {
    const without = generateNFCeSPQRCode(withoutCsc());
    const withToken = generateNFCeSPQRCode(withCsc());

    expect(withToken).toMatchObject({
      qrCodeUrl: (without as { qrCodeUrl: string }).qrCodeUrl,
    });
  });

  it('keeps echoing the CSC id of the previous contract when a CSC is informed', () => {
    const input = withCsc();

    expect(generateNFCeSPQRCode(input)).toMatchObject({
      cscId: input.csc.cscId,
    });
  });

  it('never exposes the CSC token in the URL or in the result', () => {
    const input = withCsc();

    const serialized = JSON.stringify(generateNFCeSPQRCode(input));

    expect(serialized).not.toContain(input.csc.cscToken);
    expect(serialized).not.toContain('cscToken');
  });

  it('does not report a CSC id when no CSC was informed', () => {
    const result = generateNFCeSPQRCode(withoutCsc());

    expect(result).not.toHaveProperty('cscId');
  });

  it('still rejects a blank CSC token when a CSC is informed', () => {
    const input = withCsc();

    expect(() =>
      generateNFCeSPQRCode({ ...input, csc: { ...input.csc, cscToken: ' ' } }),
    ).toThrow('CSC token must not be empty.');
  });

  it('keeps the unsupported-state boundary for UFs without proven coverage', () => {
    const input = loadNFCeJsonFixture<FixtureRequest>(
      'pr-qrcode-unsupported-input.json',
    );
    const withoutToken = {
      uf: input.uf,
      environment: input.environment,
      accessKey: input.accessKey,
    };

    expect(generateNFCeSPQRCode(withoutToken)).toMatchObject({
      classification: 'unsupported-state',
    });
  });
});

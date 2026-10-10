import { generateNFCeSPQRCode } from '../../../src/canonical/nfce/generate-nfce-sp-qr-code';

import {
  expectNFCeSPQRCodeResult,
  expectNFCeSPQRCodeUnsupportedStateBoundary,
} from '../../config/nfce-assertions';
import { loadNFCeJsonFixture } from '../../fixtures/nfce/build-nfce-fixtures';

interface NFCeSPQRCodeFixtureRequest {
  readonly uf: 'PR' | 'SP';
  readonly environment: 'homologation' | 'production';
  readonly accessKey: string;
  readonly csc: {
    readonly cscId: string;
    readonly cscToken: string;
  };
}

describe('generateNFCeSPQRCode', () => {
  it('generates the official SP homologation QR Code URL with auditable metadata', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    const result = generateNFCeSPQRCode(input);

    expectNFCeSPQRCodeResult(result, {
      accessKey: input.accessKey,
      baseUrl:
        'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
      cscId: input.csc.cscId,
      environment: 'homologation',
      qrCodeUrl:
        'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=' +
        input.accessKey +
        '|3|2',
      uf: 'SP',
    });
  });

  it('generates the official SP production QR Code URL with production semantics', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-production-input.json',
    );

    const result = generateNFCeSPQRCode(input);

    expectNFCeSPQRCodeResult(result, {
      accessKey: input.accessKey,
      baseUrl:
        'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
      cscId: input.csc.cscId,
      environment: 'production',
      qrCodeUrl:
        'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=' +
        input.accessKey +
        '|3|1',
      uf: 'SP',
    });
  });

  it('returns an explicit unsupported-state boundary for PR and other non-SP requests', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'pr-qrcode-unsupported-input.json',
    );

    const result = generateNFCeSPQRCode(input);

    expectNFCeSPQRCodeUnsupportedStateBoundary(result, 'PR');
  });

  it('rejects access keys that are not NFC-e model 65', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    expect(() =>
      generateNFCeSPQRCode({
        ...input,
        accessKey: '35260512345678000123550010000001231123456781',
      }),
    ).toThrow('model "65"');
  });

  it('rejects a blank CSC identifier', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    expect(() =>
      generateNFCeSPQRCode({
        ...input,
        csc: { ...input.csc, cscId: ' ' },
      }),
    ).toThrow('CSC id must not be empty.');
  });

  it('rejects a blank CSC token', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    expect(() =>
      generateNFCeSPQRCode({
        ...input,
        csc: { ...input.csc, cscToken: ' ' },
      }),
    ).toThrow('CSC token must not be empty.');
  });

  it('rejects a UF that does not match the access key', () => {
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    expect(() =>
      generateNFCeSPQRCode({
        ...input,
        uf: 'PR',
      }),
    ).toThrow('accessKey resolves to "SP"');
  });
});

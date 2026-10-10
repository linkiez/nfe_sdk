import * as publicApi from '../../src/index';

import {
  expectNFCeSPQRCodeResult,
  expectNFCeSPQRCodeUnsupportedStateBoundary,
} from '../config/nfce-assertions';
import { loadNFCeJsonFixture } from '../fixtures/nfce/build-nfce-fixtures';

interface NFCeSPQRCodeFixtureRequest {
  readonly uf: 'PR' | 'SP';
  readonly environment: 'homologation' | 'production';
  readonly accessKey: string;
  readonly csc: {
    readonly cscId: string;
    readonly cscToken: string;
  };
}

describe('root nfce sp qrcode facade contract', () => {
  it('publishes generateNFCeSPQRCode as an additive root helper', () => {
    expect(publicApi).toHaveProperty('generateNFCeSPQRCode');
  });

  it('keeps the root helper restricted to SP while returning auditable metadata', () => {
    const helper = (publicApi as Record<string, unknown>)
      .generateNFCeSPQRCode as
      | ((input: NFCeSPQRCodeFixtureRequest) => unknown)
      | undefined;
    const supportedInput = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );
    const unsupportedInput = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'pr-qrcode-unsupported-input.json',
    );

    const supportedResult = helper?.(supportedInput);
    const unsupportedResult = helper?.(unsupportedInput);

    expectNFCeSPQRCodeResult(supportedResult, {
      accessKey: supportedInput.accessKey,
      baseUrl:
        'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
      cscId: supportedInput.csc.cscId,
      environment: 'homologation',
      qrCodeUrl:
        'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?p=' +
        supportedInput.accessKey +
        '|3|2',
      uf: 'SP',
    });
    expectNFCeSPQRCodeUnsupportedStateBoundary(unsupportedResult, 'PR');
  });
});

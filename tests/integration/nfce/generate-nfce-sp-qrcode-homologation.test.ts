import * as publicApi from '../../../src/index';

import { expectNFCeSPQRCodeResult } from '../../config/nfce-assertions';
import { loadNFCeJsonFixture } from '../../fixtures/nfce/build-nfce-fixtures';

interface NFCeSPQRCodeFixtureRequest {
  readonly uf: 'SP';
  readonly environment: 'homologation';
  readonly accessKey: string;
  readonly csc: {
    readonly cscId: string;
    readonly cscToken: string;
  };
}

describe('generateNFCeSPQRCode homologation integration', () => {
  it('returns the official paulista homologation QR Code URL from the root import', () => {
    const helper = (publicApi as Record<string, unknown>).generateNFCeSPQRCode as
      | ((input: NFCeSPQRCodeFixtureRequest) => unknown)
      | undefined;
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'sp-qrcode-homologation-input.json',
    );

    const result = helper?.(input);

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
});
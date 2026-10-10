import * as publicApi from '../../../src/index';

import { expectNFCeSPQRCodeUnsupportedStateBoundary } from '../../config/nfce-assertions';
import { loadNFCeJsonFixture } from '../../fixtures/nfce/build-nfce-fixtures';

interface NFCeSPQRCodeFixtureRequest {
  readonly uf: 'PR';
  readonly environment: 'homologation';
  readonly accessKey: string;
  readonly csc: {
    readonly cscId: string;
    readonly cscToken: string;
  };
}

describe('generateNFCeSPQRCode unsupported-state integration', () => {
  it('returns a pre-composition unsupported-state boundary for PR from the root import', () => {
    const helper = (publicApi as Record<string, unknown>).generateNFCeSPQRCode as
      | ((input: NFCeSPQRCodeFixtureRequest) => unknown)
      | undefined;
    const input = loadNFCeJsonFixture<NFCeSPQRCodeFixtureRequest>(
      'pr-qrcode-unsupported-input.json',
    );

    const result = helper?.(input);

    expectNFCeSPQRCodeUnsupportedStateBoundary(result, 'PR');
  });
});
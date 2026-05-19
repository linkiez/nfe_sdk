import { NFCeOperationalUsageError } from '../../../src/canonical/nfce/errors';
import { resolveNFCeUF } from '../../../src/canonical/nfce/resolve-nfce-uf';

describe('resolveNFCeUF', () => {
  it('infers SP from a 44-digit access-key-like document identifier', () => {
    expect(resolveNFCeUF('35190500000000000000550010000000011000000010')).toBe(
      'SP',
    );
  });

  it('infers a non-pilot UF without collapsing it into unsupported scope', () => {
    expect(resolveNFCeUF('33190500000000000000550010000000011000000010')).toBe(
      'RJ',
    );
  });

  it('fails with a local usage error when the document identifier cannot infer the UF', () => {
    expect(() => resolveNFCeUF('NFCE-OPER-001')).toThrow(
      NFCeOperationalUsageError,
    );
  });
});

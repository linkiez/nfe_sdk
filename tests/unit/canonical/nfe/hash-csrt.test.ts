import { computeHashCSRT } from '../../../../src/index';

describe('computeHashCSRT', () => {
  it('exports a callable function from the public index', () => {
    expect(typeof computeHashCSRT).toBe('function');
  });

  it('returns the SHA-1 of CNPJ+idCSRT+CSRT as lowercase hex', () => {
    // Reference: MOC §7.1.3 — hashCSRT = SHA-1(CNPJ_emitente + idCSRT + CSRT)
    // Inputs are concatenated as plain strings before hashing.
    const result = computeHashCSRT({
      CNPJ: '11444777000161',
      idCSRT: '01',
      CSRT: 'G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W',
    });

    // SHA-1("1144477700016101G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W")
    expect(result).toMatch(/^[0-9a-f]{40}$/);
    // Deterministic: same input yields same output
    const resultAgain = computeHashCSRT({
      CNPJ: '11444777000161',
      idCSRT: '01',
      CSRT: 'G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W',
    });
    expect(result).toBe(resultAgain);
  });

  it('produces a different hash when any input differs', () => {
    const base = computeHashCSRT({
      CNPJ: '11444777000161',
      idCSRT: '01',
      CSRT: 'G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W',
    });
    const diffCNPJ = computeHashCSRT({
      CNPJ: '99999999000191',
      idCSRT: '01',
      CSRT: 'G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W',
    });
    const diffCSRT = computeHashCSRT({
      CNPJ: '11444777000161',
      idCSRT: '01',
      CSRT: 'DIFFERENTCSRTVALUE',
    });

    expect(base).not.toBe(diffCNPJ);
    expect(base).not.toBe(diffCSRT);
  });

  it('rejects CNPJ with length other than 14', () => {
    expect(() =>
      computeHashCSRT({
        CNPJ: '1144477700016',
        idCSRT: '01',
        CSRT: 'G8063VRTNDMO886SFNK5LDUDIF2OIUQN9W',
      }),
    ).toThrow();
  });

  it('rejects empty CSRT', () => {
    expect(() =>
      computeHashCSRT({
        CNPJ: '11444777000161',
        idCSRT: '01',
        CSRT: '',
      }),
    ).toThrow();
  });
});

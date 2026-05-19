import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { computeNFeAccessKey } from '../../../../src/index';

interface AccessKeyVector {
  description: string;
  input: {
    cUF: string;
    AAMM: string;
    CNPJ: string;
    mod: string;
    serie: string;
    nNF: string;
    tpEmis: string;
    cNF: string;
  };
  expected: {
    chNFe: string;
    cDV: number;
  };
}

const fixtureFile = join(
  __dirname,
  '../../../../tests/fixtures/nfe/valid-access-key-vectors.json',
);
const vectors: AccessKeyVector[] = JSON.parse(
  readFileSync(fixtureFile, 'utf-8'),
);

describe('computeNFeAccessKey', () => {
  it('exports a callable function from the public index', () => {
    expect(typeof computeNFeAccessKey).toBe('function');
  });

  it.each(vectors)(
    'computes correct chNFe and cDV for: $description',
    ({ input, expected }) => {
      const result = computeNFeAccessKey(input);

      expect(result.chNFe).toBe(expected.chNFe);
      expect(result.cDV).toBe(expected.cDV);
      expect(result.chNFe).toHaveLength(44);
    },
  );

  it('rejects invalid cUF length', () => {
    expect(() =>
      computeNFeAccessKey({
        cUF: '350',
        AAMM: '2401',
        CNPJ: '11444777000161',
        mod: '55',
        serie: '001',
        nNF: '000000001',
        tpEmis: '1',
        cNF: '00000001',
      }),
    ).toThrow();
  });

  it('rejects CNPJ with length other than 14', () => {
    expect(() =>
      computeNFeAccessKey({
        cUF: '35',
        AAMM: '2401',
        CNPJ: '1144477700016',
        mod: '55',
        serie: '001',
        nNF: '000000001',
        tpEmis: '1',
        cNF: '00000001',
      }),
    ).toThrow();
  });
});

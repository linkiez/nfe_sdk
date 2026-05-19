import { resolveUFAutorizador } from '../../../../src/index';

describe('resolveUFAutorizador', () => {
  it('exports a callable function from the public index', () => {
    expect(typeof resolveUFAutorizador).toBe('function');
  });

  it('routes SP (35) to its own autorizador SP', () => {
    const result = resolveUFAutorizador('35');

    expect(result.uf).toBe('35');
    expect(result.autorizador).toBe('SP');
  });

  it('routes SC (42) to SVCRS', () => {
    const result = resolveUFAutorizador('42');

    expect(result.autorizador).toBe('SVCRS');
  });

  it('routes AC (12) to SVCAN', () => {
    const result = resolveUFAutorizador('12');

    expect(result.autorizador).toBe('SVCAN');
  });

  it('routes all 12 UFs with own autorizadores correctly', () => {
    const ownAutorizadores: Record<string, string> = {
      '13': 'AM',
      '29': 'BA',
      '23': 'CE',
      '52': 'GO',
      '31': 'MG',
      '50': 'MS',
      '51': 'MT',
      '15': 'PA',
      '26': 'PE',
      '41': 'PR',
      '43': 'RS',
      '35': 'SP',
    };

    for (const [uf, expected] of Object.entries(ownAutorizadores)) {
      expect(resolveUFAutorizador(uf).autorizador).toBe(expected);
    }
  });

  it('routes all 14 SVC-AN delegating UFs to SVCAN', () => {
    const svcanUFs = [
      '12', // AC
      '27', // AL
      '16', // AP
      '53', // DF
      '32', // ES
      '21', // MA
      '25', // PB
      '22', // PI
      '33', // RJ
      '24', // RN
      '11', // RO
      '14', // RR
      '28', // SE
      '17', // TO
    ];

    for (const uf of svcanUFs) {
      expect(resolveUFAutorizador(uf).autorizador).toBe('SVCAN');
    }
  });

  it('throws UnknownUFError for an unrecognised UF code', () => {
    expect(() => resolveUFAutorizador('99')).toThrow('Unknown UF code');
    expect(() => resolveUFAutorizador('00')).toThrow('Unknown UF code');
  });

  it('throws UnknownUFError for non-numeric input', () => {
    expect(() => resolveUFAutorizador('XX')).toThrow('Unknown UF code');
  });
});

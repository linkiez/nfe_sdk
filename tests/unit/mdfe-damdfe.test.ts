import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import {
  MDFeDamdfeUsageError,
  encodeCode128C,
  renderDAMDFE,
} from '../../src/canonical/mdfe/index';
import { CODE128_PATTERNS } from '../../src/canonical/mdfe/code128-patterns';

const fixture = (name: string): string =>
  readFileSync(resolve(process.cwd(), 'tests/fixtures/mdfe', name), 'utf8');
const KEY = '35261111222333000181580010000000011123456780';
const text = (pdf: Uint8Array): string => Buffer.from(pdf).toString('latin1');

describe('Code 128C encoding of the access key', () => {
  it('has well-formed bar patterns (11 modules per symbol, 13 for the stop)', () => {
    expect(CODE128_PATTERNS).toHaveLength(107);
    CODE128_PATTERNS.forEach((pattern, value) => {
      const widths = [...pattern].map(Number);
      expect(widths.reduce((a, b) => a + b, 0)).toBe(value === 106 ? 13 : 11);
      expect(widths).toHaveLength(value === 106 ? 7 : 6);
    });
    expect(new Set(CODE128_PATTERNS).size).toBe(107);
  });

  it('encodes Start C, digit pairs, the weighted check symbol and Stop', () => {
    const symbols = encodeCode128C('12345678');

    expect(symbols).toEqual([
      105,
      12,
      34,
      56,
      78,
      (105 + 12 * 1 + 34 * 2 + 56 * 3 + 78 * 4) % 103,
      106,
    ]);
  });

  it('encodes the 44 digit key in 22 pairs', () => {
    const symbols = encodeCode128C(KEY);

    expect(symbols).toHaveLength(1 + 22 + 1 + 1);
    expect(symbols[0]).toBe(105);
    expect(symbols[symbols.length - 1]).toBe(106);
  });

  it('refuses odd or non numeric input', () => {
    expect(() => encodeCode128C('123')).toThrow();
    expect(() => encodeCode128C('12ab')).toThrow();
  });
});

describe('renderDAMDFE', () => {
  it('draws a PDF of an authorized MDF-e with the key, protocol and the homologation notice', async () => {
    const pdf = await renderDAMDFE({
      authorizedXml: fixture('mdfe-proc-authorized.xml'),
    });
    const content = text(pdf);

    expect(content.startsWith('%PDF-1.4')).toBe(true);
    expect(content.trimEnd().endsWith('%%EOF')).toBe(true);
    expect(content).toContain(KEY);
    expect(content).toContain('135260000000001');
    expect(content).toContain(
      'EMITIDO EM AMBIENTE DE HOMOLOGAÇÃO - SEM VALOR FISCAL',
    );
    expect(content).toContain('EMPRESA TESTE LTDA');
  });

  it('lists only the linked documents, not the MDF-e own key', async () => {
    const content = text(
      await renderDAMDFE({
        authorizedXml: fixture('mdfe-proc-authorized.xml'),
      }),
    );
    const occurrences = content.split(KEY).length - 1;

    expect(occurrences).toBe(1);
  });

  it('adds pages for long document lists', async () => {
    const keys = Array.from(
      { length: 120 },
      (_, i) =>
        `<infNFe><chNFe>${String(i).padStart(44, '0')}</chNFe></infNFe>`,
    ).join('');
    const xml = fixture('mdfe-proc-authorized.xml').replace(
      /<infNFe>[\s\S]*?<\/infNFe>/u,
      keys,
    );
    const content = text(await renderDAMDFE({ authorizedXml: xml }));

    expect(
      (content.match(/\/Type \/Page\b(?!s)/gu) ?? []).length,
    ).toBeGreaterThan(2);
  });

  it.each([
    ['an event', fixture('mdfe-event-closure.xml')],
    [
      'a document without protocol',
      fixture('mdfe-proc-authorized.xml').replace(
        /<protMDFe[\s\S]*<\/protMDFe>/u,
        '',
      ),
    ],
    [
      'a document the authority did not authorize',
      fixture('mdfe-proc-authorized.xml').replace(
        '<cStat>100</cStat>',
        '<cStat>101</cStat>',
      ),
    ],
    ['text that is not XML', 'nope'],
  ])('refuses %s', async (_name, authorizedXml) => {
    await expect(renderDAMDFE({ authorizedXml })).rejects.toBeInstanceOf(
      MDFeDamdfeUsageError,
    );
  });
});

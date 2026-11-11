import { renderNFeDANFE } from '../../src/index';

const NS = 'http://www.portalfiscal.inf.br/nfe';
const nfeProc = (mod: string, cStat: string) =>
  `<nfeProc xmlns="${NS}" versao="4.00"><NFe xmlns="${NS}"><infNFe Id="NFe${'1'.repeat(44)}"><ide><mod>${mod}</mod></ide></infNFe></NFe><protNFe versao="4.00"><infProt><cStat>${cStat}</cStat></infProt></protNFe></nfeProc>`;

describe('renderNFeDANFE input validation', () => {
  it.each([
    ['empty input', ''],
    ['malformed XML', '<nfeProc'],
    ['another model', nfeProc('65', '100')],
    ['a rejected protocol', nfeProc('55', '539')],
    ['a denied protocol', nfeProc('55', '110')],
    [
      'a document without protocol',
      `<NFe xmlns="${NS}"><infNFe><ide><mod>55</mod></ide></infNFe></NFe>`,
    ],
  ])('refuses %s before drawing anything', async (_name, authorizedXml) => {
    await expect(renderNFeDANFE({ authorizedXml })).rejects.toMatchObject({
      name: 'NFeDanfeUsageError',
    });
  });

  it('is exposed on the root entrypoint', () => {
    expect(typeof renderNFeDANFE).toBe('function');
  });
});

import { resolve } from 'node:path';
import { validateNFeXsd } from '../../src/index';

import {
  buildConsStatServXml,
  buildConsSitNFeXml,
  buildDistDFeIntXml,
} from '../../src/canonical/nfe/queries/nfe-query-payloads';
import { buildConsReciNFeXml } from '../../src/canonical/nfe/async-batch-retrieval';

const NFE_XSD = resolve(
  process.cwd(),
  'docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/PL_009_V4_00_NT_2018_005_v1.20a/PL_009_V4_00_NT_2018_005_v1.20',
);
const DIST_XSD = resolve(process.cwd(), 'xsd', 'PL_NFeDistDFe_103');
const KEY = '35261122233300018155001000000010100000000011'
  .slice(0, 44)
  .padEnd(44, '0');

const valid = (xml: string, schema: string, dir: string) =>
  validateNFeXsd(xml, { schemaFamily: schema, xsdDir: dir }).classification;

describe('official query payloads', () => {
  it.each(['homologation', 'production'])(
    'consStatServ %s is valid against consStatServ_v4.00.xsd',
    (env) => {
      expect(
        valid(
          buildConsStatServXml(env, '35'),
          'consStatServ_v4.00.xsd',
          NFE_XSD,
        ),
      ).toBe('valid');
    },
  );

  it('consSitNFe is valid against consSitNFe_v4.00.xsd', () => {
    expect(
      valid(
        buildConsSitNFeXml('production', KEY),
        'consSitNFe_v4.00.xsd',
        NFE_XSD,
      ),
    ).toBe('valid');
  });

  it('consReciNFe is valid against consReciNFe_v4.00.xsd', () => {
    expect(
      valid(
        buildConsReciNFeXml('351000000000001', '2'),
        'consReciNFe_v4.00.xsd',
        NFE_XSD,
      ),
    ).toBe('valid');
  });

  it.each([
    [{ ultNSU: '000000000000000' }],
    [{ nsu: '000000000000123' }],
    [{ accessKey: KEY }],
  ])('distDFeInt %j is valid against distDFeInt_v1.01.xsd', (selector) => {
    expect(
      valid(
        buildDistDFeIntXml('production', '35', '11222333000181', selector),
        'distDFeInt_v1.01.xsd',
        DIST_XSD,
      ),
    ).toBe('valid');
    expect(
      valid(
        buildDistDFeIntXml('homologation', '35', '12345678909', selector),
        'distDFeInt_v1.01.xsd',
        DIST_XSD,
      ),
    ).toBe('valid');
  });

  it('uses tpAmb 1 for production and 2 for homologation and the informed cUFAutor', () => {
    expect(
      buildDistDFeIntXml('production', '35', '11222333000181', {
        ultNSU: '000000000000000',
      }),
    ).toContain('<tpAmb>1</tpAmb><cUFAutor>35</cUFAutor><CNPJ>');
    expect(
      buildDistDFeIntXml('homologation', '35', '11222333000181', {
        ultNSU: '000000000000000',
      }),
    ).toContain('<tpAmb>2</tpAmb>');
  });

  it('refuses malformed values', () => {
    expect(() => buildConsStatServXml('production', '3')).toThrow(/cUF/);
    expect(() => buildConsSitNFeXml('production', '123')).toThrow(/accessKey/);
    expect(() =>
      buildDistDFeIntXml('production', '35', '123', {
        ultNSU: '000000000000000',
      }),
    ).toThrow(/taxId/);
    expect(() =>
      buildDistDFeIntXml('production', '35', '11222333000181', { ultNSU: '1' }),
    ).toThrow(/ultNSU/);
  });
});

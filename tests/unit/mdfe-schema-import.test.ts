import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PACKAGE_FOLDER = 'PL_MDFe_300b_NT012025_1.05';
const DISTRIBUTION_FOLDER = 'PL_MDFeDistDFe_100';
const MDFE_FOLDERS = [PACKAGE_FOLDER, DISTRIBUTION_FOLDER];
/** SHA-256 of the canonical JSON of every manifest entry that existed before the MDF-e import. */
const PRE_MDFE_MANIFEST_SHA256 =
  'd32deae2af2653494f2a395c4368693373ff2974104cbb5d58040f4da026e67e';

interface ManifestEntry {
  collisions: string[];
  files: number;
  folderPath: string;
}

const root = process.cwd();
const manifest = JSON.parse(
  readFileSync(resolve(root, 'src/manifest.json'), 'utf8'),
) as ManifestEntry[];

describe('MDF-e schema package import (spec 033)', () => {
  it('imports the 41 XSD of the maintainer-selected SVRS package with the consume-only entrypoints', () => {
    const files = readdirSync(resolve(root, 'xsd', PACKAGE_FOLDER)).filter(
      (name) => name.endsWith('.xsd'),
    );

    expect(files).toHaveLength(41);
    expect(files).toEqual(
      expect.arrayContaining([
        'mdfe_v3.00.xsd',
        'procMDFe_v3.00.xsd',
        'consSitMDFe_v3.00.xsd',
        'retConsSitMDFe_v3.00.xsd',
        'consMDFeNaoEnc_v3.00.xsd',
        'retConsMDFeNaoEnc_v3.00.xsd',
        'consStatServMDFe_v3.00.xsd',
        'retConsStatServMDFe_v3.00.xsd',
        'distMDFe_v3.00.xsd',
        'retDistMDFe_v3.00.xsd',
        'procEventoMDFe_v3.00.xsd',
      ]),
    );
  });

  it.each(MDFE_FOLDERS)(
    'adds exactly one manifest entry for %s, without collisions',
    (folder) => {
      const entries = manifest.filter((e) => e.folderPath === folder);

      expect(entries).toHaveLength(1);
      expect(entries[0].collisions).toEqual([]);
      expect(entries[0].files).toBeGreaterThan(0);
    },
  );

  it('imports the 5 XSD of the SVRS distribution package (distDFeInt 1.00)', () => {
    const files = readdirSync(resolve(root, 'xsd', DISTRIBUTION_FOLDER)).filter(
      (name) => name.endsWith('.xsd'),
    );

    expect(files.sort()).toEqual([
      'distDFeInt_v1.00.xsd',
      'retDistDFeInt_v1.00.xsd',
      'tiposDistDFe_v1.00.xsd',
      'tiposGeralMDFe_v1.00.xsd',
      'xmldsig-core-schema_v1.01.xsd',
    ]);
  });

  it('leaves the output of every other document family unchanged', () => {
    const others = manifest.filter((e) => !MDFE_FOLDERS.includes(e.folderPath));
    const canonical = (value: unknown): unknown =>
      Array.isArray(value)
        ? value.map(canonical)
        : value !== null && typeof value === 'object'
          ? Object.fromEntries(
              Object.entries(value as Record<string, unknown>)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, item]) => [key, canonical(item)]),
            )
          : value;
    const digest = createHash('sha256')
      .update(JSON.stringify(canonical(others)))
      .digest('hex');

    expect(digest).toBe(PRE_MDFE_MANIFEST_SHA256);
  });

  it('generates the MDF-e declarations in their own folder of each artifact family', () => {
    for (const family of ['classes', 'interfaces', 'types', 'enums']) {
      for (const folder of MDFE_FOLDERS) {
        expect(existsSync(resolve(root, 'src', family, folder))).toBe(true);
      }
    }
  });
});

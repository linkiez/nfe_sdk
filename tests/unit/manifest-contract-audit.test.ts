import manifest from '../../src/manifest.json';
import { auditPublicContractManifest } from '../../tools/audit-public-contract';

describe('manifest contract audit', () => {
  it('classifies collisions, unpublished families, and needs-review gaps', () => {
    const report = auditPublicContractManifest([
      {
        collisions: ['classes/Foo.ts'],
        files: 0,
        folderPath: 'SampleFamily',
        retriesWithSanitizedPatterns: ['SampleFamily/pattern.xsd'],
      },
    ]);

    expect(report.gaps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          gapType: 'collision',
          manifestReference: 'SampleFamily',
        }),
        expect.objectContaining({
          gapType: 'needs-review',
          manifestReference: 'SampleFamily',
        }),
        expect.objectContaining({
          gapType: 'unpublished-family',
          manifestReference: 'SampleFamily',
        }),
      ]),
    );
  });

  it('reports current repository gaps without promoting the manifest to public API', () => {
    const report = auditPublicContractManifest(manifest);

    expect(report.excludedSurface).toContain('manifest.json');
    expect(report.gaps.length).toBeGreaterThan(0);
  });
});

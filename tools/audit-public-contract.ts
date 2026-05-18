import manifest from '../src/manifest.json';
import { publicPackageContract } from '../src/public-contract';

type ManifestGapType =
  | 'collision'
  | 'needs-review'
  | 'unpublished-family'
  | 'unstable-surface';

interface ManifestEntry {
  collisions: readonly string[];
  files: number;
  folderPath: string;
  retriesWithSanitizedPatterns: readonly string[];
}

interface ManifestCoverageGap {
  description: string;
  gapType: ManifestGapType;
  manifestReference: string;
  publicContractImpact: string;
}

interface PublicContractAuditReport {
  excludedSurface: readonly string[];
  gaps: ManifestCoverageGap[];
  reviewedFolders: string[];
}

/**
 * Audits the generated manifest against the minimum public contract boundary.
 *
 * @param manifestEntries - Generated manifest entries to classify.
 * @returns A report describing excluded surfaces and gaps that still block promotion.
 */
export function auditPublicContractManifest(
  manifestEntries: readonly ManifestEntry[],
): PublicContractAuditReport {
  const gaps = manifestEntries.flatMap((entry) => {
    const entryGaps: ManifestCoverageGap[] = [];

    if (entry.collisions.length > 0) {
      entryGaps.push({
        description: `Generated collisions remain unresolved for ${entry.folderPath}.`,
        gapType: 'collision',
        manifestReference: entry.folderPath,
        publicContractImpact:
          'Colliding generated names block promotion of this family to the stable public contract.',
      });
    }

    if (entry.files === 0) {
      entryGaps.push({
        description: `No publishable files were recorded for ${entry.folderPath}.`,
        gapType: 'unpublished-family',
        manifestReference: entry.folderPath,
        publicContractImpact:
          'This family remains internal inventory until a later phase produces a stable surface.',
      });
    }

    if (entry.retriesWithSanitizedPatterns.length > 0) {
      entryGaps.push({
        description: `Sanitized pattern retries were required for ${entry.folderPath}.`,
        gapType: 'needs-review',
        manifestReference: entry.folderPath,
        publicContractImpact:
          'This family needs manual review before it can be promoted to a stable consumer-facing contract.',
      });
    }

    return entryGaps;
  });

  return {
    excludedSurface: [...publicPackageContract.excludedSurface],
    gaps,
    reviewedFolders: manifestEntries.map((entry) => entry.folderPath),
  };
}

/**
 * Runs the manifest audit against the current repository manifest.
 *
 * @returns The current audit report for the repository manifest.
 */
export function runCurrentPublicContractAudit(): PublicContractAuditReport {
  return auditPublicContractManifest(manifest);
}

if (process.argv[1]?.endsWith('audit-public-contract.ts')) {
  process.stdout.write(
    `${JSON.stringify(runCurrentPublicContractAudit(), null, 2)}\n`,
  );
}
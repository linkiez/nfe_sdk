const DOCUMENTED_SURFACE = ['publicPackageContract'] as const;

const EXCLUDED_SURFACE = [
  'generated classes',
  'generated enums',
  'generated interfaces',
  'generated types',
  'manifest.json',
  'subpath imports',
] as const;

const COMPATIBILITY_NOTES = [
  'Only the root import is stable in this phase.',
  'Generated schema trees remain internal inventory until a later contract decision promotes them.',
  'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
] as const;

const REPOSITORY_EVIDENCE = [
  'package.json#exports["."]',
  'src/index.ts',
  'README.md',
  'specs/003-public-package-contract/contracts/public-package-contract.md',
] as const;

/**
 * Minimum public contract published by the package root entrypoint in this phase.
 */
export const publicPackageContract = {
  compatibilityNotes: COMPATIBILITY_NOTES,
  documentedSurface: DOCUMENTED_SURFACE,
  excludedSurface: EXCLUDED_SURFACE,
  normativeSource: 'package.json#exports["."]',
  repositoryEvidence: REPOSITORY_EVIDENCE,
  rootEntrypoint: {
    exportName: 'publicPackageContract',
    importSpecifier: 'nfe-sdk',
    path: '.',
  },
} as const;
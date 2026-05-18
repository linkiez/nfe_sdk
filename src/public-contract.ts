const DOCUMENTED_SURFACE = [
  'publicPackageContract',
  'createNFe',
  'createEnviNFe',
  'serializeNFeXml',
  'serializeEnviNFeXml',
] as const;

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
  'The initial functional facade is limited to canonical NFe and enviNFe creation and deterministic XML serialization in this phase.',
  'Generated schema trees remain internal inventory until a later contract decision promotes them.',
  'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
] as const;

const REPOSITORY_EVIDENCE = [
  'package.json#exports["."]',
  'src/index.ts',
  'README.md',
  'specs/003-public-package-contract/contracts/public-package-contract.md',
  'specs/004-iniciar-sdk/contracts/public-functional-facade.md',
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
    exportedNames: DOCUMENTED_SURFACE,
    importSpecifier: 'nfe-sdk',
    path: '.',
    stableSurface: 'root-import',
  },
} as const;
const DOCUMENTED_SURFACE = [
  'publicPackageContract',
  'authorizeNFCe',
  'authorizeNFe',
  'cancelNFe',
  'changeManifestRecipientOperation',
  'computeHashCSRT',
  'computeNFeAccessKey',
  'createNFe',
  'createEnviNFe',
  'createSigningContext',
  'distributeRecipientDFe',
  'manifestRecipientOperation',
  'queryContributorRegistration',
  'queryNFeByAccessKey',
  'queryNFeByNSU',
  'queryNFeDocumentSituation',
  'queryNFeServiceStatus',
  'resolveNFeServiceEndpoint',
  'resolveUFAutorizador',
  'retrieveNFeAuthorizationBatch',
  'executeNFeSoapService',
  'serializeNFeXml',
  'serializeEnviNFeXml',
  'signNFeXml',
  'submitEPECEvent',
  'submitGenericEvents',
  'submitICMSDeferralEvent',
  'submitNFeCorrectionLetter',
  'submitNFeInutilization',
  'validateNFeXsd',
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
  'The initial functional facade is limited to canonical NFe and enviNFe creation, deterministic XML serialization, the first additive digital-signing slice, the first additive SOAP transport slice, and the first additive operational authorization facade in this phase.',
  'Generated schema trees remain internal inventory until a later contract decision promotes them.',
  'The digital-signing slice signs only NFe XML and keeps enviNFe as an unsigned transport envelope in this phase.',
  'The SOAP transport slice covers only homologation, shared SVAN endpoints, and the initial status-service and authorization operations in this phase.',
  'The first operational NFe slice currently exposes authorizeNFe, queryNFeServiceStatus, queryNFeDocumentSituation, submitNFeInutilization, cancelNFe, and submitNFeCorrectionLetter for homologation workflows on top of the canonical, signing, and transport layers.',
  'The first NFC-e slice currently exposes authorizeNFCe as an additive root facade for homologation-only single-document authorization through the SP pilot profile while broader state coverage remains deferred.',
  'The first NFC-e slice returns unsupported-state before transport when the inferred UF stays outside the published SP pilot.',
  'The first NFC-e slice accepts requestedCapabilities only as an explicit marker for deferred operational surfaces and returns unsupported-scope before transport for QR Code, DANFE NFC-e, CSC administration, automatic credentialing, or offline contingency.',
  'The first recipient slice currently exposes distributeRecipientDFe and manifestRecipientOperation for homologation-only recipient workflows via distNSU and the four basic manifestation events, while keeping later document retrieval separate.',
  'The first generic-event slice currently exposes submitGenericEvents for homologation-only submission of the supported 110130, 110150, 110192, and 110750 families through one root facade.',
  'The generic-event slice keeps over-limit batches, unsupported families, EPEC, production flows, and other deferred event variants outside the transport path through explicit pre-transport boundaries.',
  'The initial transport catalog is versioned as 2026-05-18-initial-draft and remains restricted to one SVAN entry per supported service in this phase.',
  'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
] as const;

const REPOSITORY_EVIDENCE = [
  'package.json#exports["."]',
  'src/index.ts',
  'README.md',
  'specs/003-public-package-contract/contracts/public-package-contract.md',
  'specs/004-iniciar-sdk/contracts/public-functional-facade.md',
  'specs/005-add-digital-signing/contracts/public-signing-facade.md',
  'specs/006-add-soap-transport/contracts/public-soap-transport-facade.md',
  'specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md',
  'specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md',
  'specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md',
  'specs/009-generic-event-mvp/contracts/public-generic-event-facade.md',
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
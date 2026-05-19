import type { FunctionalCoverageGap } from './contracts.js';

/**
 * Creates a deferred gap for unsupported documents that remain outside the slice.
 *
 * @param documentName - Document still unsupported by the canonical facade.
 * @returns Structured unsupported-document gap.
 */
export function createUnsupportedDocumentGap(
  documentName: string,
): FunctionalCoverageGap {
  return {
    description: `The canonical facade does not support ${documentName} in this phase.`,
    followUpPhase: 'future-functional-expansion',
    gapType: 'unsupported-document',
    impact:
      'Keep the root facade limited to NFe and enviNFe in the initial slice.',
  };
}

/**
 * Creates a deferred gap for derived identifiers intentionally postponed.
 *
 * @param identifierName - Derived identifier deferred to a later phase.
 * @returns Structured derived-identifier gap.
 */
export function createDerivedIdentifierDeferredGap(
  identifierName: string,
): FunctionalCoverageGap {
  return {
    description: `The canonical facade defers derived identifier work for ${identifierName}.`,
    followUpPhase: 'derived-identifiers',
    gapType: 'derived-identifier-deferred',
    impact:
      'Keep the initial facade focused on environment, version, and initial identifiers.',
  };
}

/**
 * Creates a deferred gap for operational surfaces intentionally kept outside the current slice.
 *
 * @param surfaceName - Operational surface deferred to a later scoped expansion.
 * @returns Structured deferred operational surface gap.
 */
export function createDeferredOperationalSurfaceGap(
  surfaceName: string,
): FunctionalCoverageGap {
  return {
    description: `The current operational slice defers ${surfaceName} until a later scoped expansion.`,
    followUpPhase: 'future-operational-expansion',
    gapType: 'deferred-operational-surface',
    impact:
      'Keep the published contract explicit about deferred operational surfaces instead of implying support.',
  };
}

/**
 * Lists the default deferred gaps for the first canonical slice.
 *
 * @returns Deferred gaps intentionally kept outside the initial slice.
 */
export function getInitialCanonicalDeferredGaps(): readonly FunctionalCoverageGap[] {
  return [
    createDerivedIdentifierDeferredGap('access key'),
    {
      description:
        'The canonical facade defers automated full XSD validation for the initial slice.',
      followUpPhase: 'xsd-validation',
      gapType: 'xsd-validation-deferred',
      impact:
        'Fixture-backed structural regression remains the validation baseline in this phase.',
    },
    createUnsupportedDocumentGap('retEnviNFe'),
    createUnsupportedDocumentGap('protNFe'),
    createUnsupportedDocumentGap('nfeProc'),
  ] as const;
}
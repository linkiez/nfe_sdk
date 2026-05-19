import {
  createDeferredOperationalSurfaceGap,
  createDerivedIdentifierDeferredGap,
  createUnsupportedDocumentGap,
  getInitialCanonicalDeferredGaps,
} from '../../src/canonical/shared/gap-register';

describe('gap register', () => {
  it('creates a deferred gap for unsupported documents', () => {
    expect(createUnsupportedDocumentGap('protNFe')).toEqual({
      description:
        'The canonical facade does not support protNFe in this phase.',
      followUpPhase: 'future-functional-expansion',
      gapType: 'unsupported-document',
      impact:
        'Keep the root facade limited to NFe and enviNFe in the initial slice.',
    });
  });

  it('creates a deferred gap for derived identifiers', () => {
    expect(createDerivedIdentifierDeferredGap('access key')).toEqual({
      description:
        'The canonical facade defers derived identifier work for access key.',
      followUpPhase: 'derived-identifiers',
      gapType: 'derived-identifier-deferred',
      impact:
        'Keep the initial facade focused on environment, version, and initial identifiers.',
    });
  });

  it('creates a deferred gap for operational surfaces kept outside the current slice', () => {
    expect(createDeferredOperationalSurfaceGap('QR Code')).toEqual({
      description:
        'The current operational slice defers QR Code until a later scoped expansion.',
      followUpPhase: 'future-operational-expansion',
      gapType: 'deferred-operational-surface',
      impact:
        'Keep the published contract explicit about deferred operational surfaces instead of implying support.',
    });
  });

  it('lists the default deferred gaps for the initial slice', () => {
    expect(getInitialCanonicalDeferredGaps()).toEqual(
      expect.arrayContaining([
        createDerivedIdentifierDeferredGap('access key'),
        {
          description:
            'The canonical facade defers automated full XSD validation for the initial slice.',
          followUpPhase: 'xsd-validation',
          gapType: 'xsd-validation-deferred',
          impact:
            'Fixture-backed structural regression remains the validation baseline in this phase.',
        },
      ]),
    );
  });
});

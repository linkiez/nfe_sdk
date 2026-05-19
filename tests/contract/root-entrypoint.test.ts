import * as publicApi from '../../src/index';

describe('root entrypoint contract', () => {
  it('exposes the documented root facade for this phase', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
      'authorizeNFCe',
      'authorizeNFe',
      'cancelNFe',
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'manifestRecipientOperation',
      'publicPackageContract',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
      'submitGenericEvents',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
    ]);
    expect(publicApi.publicPackageContract).toEqual(
      expect.objectContaining({
        compatibilityNotes: expect.arrayContaining([
          expect.stringContaining('unsupported-state'),
          expect.stringContaining('unsupported-scope'),
          expect.stringContaining('SP pilot'),
          expect.stringContaining('requestedCapabilities'),
        ]),
        documentedSurface: [
          'publicPackageContract',
          'authorizeNFCe',
          'authorizeNFe',
          'cancelNFe',
          'createNFe',
          'createEnviNFe',
          'createSigningContext',
          'distributeRecipientDFe',
          'manifestRecipientOperation',
          'queryNFeDocumentSituation',
          'queryNFeServiceStatus',
          'resolveNFeServiceEndpoint',
          'executeNFeSoapService',
          'serializeNFeXml',
          'serializeEnviNFeXml',
          'signNFeXml',
          'submitGenericEvents',
          'submitNFeCorrectionLetter',
          'submitNFeInutilization',
        ],
        normativeSource: 'package.json#exports["."]',
      }),
    );
  });

  it('keeps generated trees and manifest outside the stable public surface', () => {
    expect(publicApi).not.toHaveProperty('manifest');
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
    expect(publicApi.publicPackageContract.excludedSurface).toEqual(
      expect.arrayContaining([
        'generated classes',
        'generated enums',
        'generated interfaces',
        'generated types',
        'manifest.json',
        'subpath imports',
      ]),
    );
  });
});

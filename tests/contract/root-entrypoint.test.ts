import * as publicApi from '../../src/index';

describe('root entrypoint contract', () => {
  it('exposes the documented root facade for this phase', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'executeNFeSoapService',
      'publicPackageContract',
      'resolveNFeServiceEndpoint',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
    ]);
    expect(publicApi.publicPackageContract).toEqual(
      expect.objectContaining({
        documentedSurface: [
          'publicPackageContract',
          'createNFe',
          'createEnviNFe',
          'createSigningContext',
          'resolveNFeServiceEndpoint',
          'executeNFeSoapService',
          'serializeNFeXml',
          'serializeEnviNFeXml',
          'signNFeXml',
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

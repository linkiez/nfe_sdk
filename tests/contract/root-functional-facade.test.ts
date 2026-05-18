import * as publicApi from '../../src/index';

describe('root functional facade contract', () => {
  it('publishes the canonical creation facade without exposing generated trees', () => {
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
  });

  it('keeps generated trees and subpaths outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
    expect(publicApi).not.toHaveProperty('manifest');
  });
});

import * as publicApi from '../../src/index';

describe('root signing facade contract', () => {
  it('publishes the initial digital-signing facade from the root entrypoint', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toEqual([
      'authorizeNFe',
      'cancelNFe',
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'executeNFeSoapService',
      'publicPackageContract',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
    ]);
  });

  it('keeps signing internals and generated trees outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('enums');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('manifest');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('xmlSignature');
  });
});

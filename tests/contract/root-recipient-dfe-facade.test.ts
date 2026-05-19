import * as publicApi from '../../src/index';

describe('root recipient dfe facade contract', () => {
  it('publishes the recipient distribution and manifestation facades from the root entrypoint', () => {
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
  });

  it('keeps recipient internals outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('recipient');
    expect(publicApi).not.toHaveProperty('classes');
    expect(publicApi).not.toHaveProperty('interfaces');
    expect(publicApi).not.toHaveProperty('types');
    expect(publicApi).not.toHaveProperty('enums');
  });
});

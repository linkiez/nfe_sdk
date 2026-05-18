import { publicPackageContract } from '../../src/index';

describe('root contract boundary', () => {
  it('documents the root import as the only stable entrypoint in this phase', () => {
    expect(publicPackageContract.rootEntrypoint).toEqual({
      exportedNames: [
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
      importSpecifier: 'nfe-sdk',
      path: '.',
      stableSurface: 'root-import',
    });
    expect(publicPackageContract.documentedSurface).toEqual([
      'publicPackageContract',
      'createNFe',
      'createEnviNFe',
      'createSigningContext',
      'resolveNFeServiceEndpoint',
      'executeNFeSoapService',
      'serializeNFeXml',
      'serializeEnviNFeXml',
      'signNFeXml',
    ]);
  });

  it('captures compatibility notes for future contract expansion', () => {
    expect(publicPackageContract.compatibilityNotes).toEqual(
      expect.arrayContaining([
        'Only the root import is stable in this phase.',
        'The initial functional facade is limited to canonical NFe and enviNFe creation, deterministic XML serialization, the first additive digital-signing slice, and the first additive SOAP transport slice in this phase.',
        'The digital-signing slice signs only NFe XML and keeps enviNFe as an unsigned transport envelope in this phase.',
        'The SOAP transport slice covers only homologation, shared SVAN endpoints, and the initial status-service and authorization operations in this phase.',
        'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
      ]),
    );
  });
});

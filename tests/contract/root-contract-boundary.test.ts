import { publicPackageContract } from '../../src/index';

describe('root contract boundary', () => {
  it('documents the root import as the only stable entrypoint in this phase', () => {
    expect(publicPackageContract.rootEntrypoint).toEqual({
      exportedNames: [
        'publicPackageContract',
        'createNFe',
        'createEnviNFe',
        'serializeNFeXml',
        'serializeEnviNFeXml',
      ],
      importSpecifier: 'nfe-sdk',
      path: '.',
      stableSurface: 'root-import',
    });
    expect(publicPackageContract.documentedSurface).toEqual([
      'publicPackageContract',
      'createNFe',
      'createEnviNFe',
      'serializeNFeXml',
      'serializeEnviNFeXml',
    ]);
  });

  it('captures compatibility notes for future contract expansion', () => {
    expect(publicPackageContract.compatibilityNotes).toEqual(
      expect.arrayContaining([
        'Only the root import is stable in this phase.',
        'The initial functional facade is limited to canonical NFe and enviNFe creation and deterministic XML serialization in this phase.',
        'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
      ]),
    );
  });
});

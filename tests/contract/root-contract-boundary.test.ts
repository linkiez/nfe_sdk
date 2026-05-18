import { publicPackageContract } from '../../src/index';

describe('root contract boundary', () => {
  it('documents the root import as the only stable entrypoint in this phase', () => {
    expect(publicPackageContract.rootEntrypoint).toEqual({
      exportName: 'publicPackageContract',
      importSpecifier: 'nfe-sdk',
      path: '.',
    });
    expect(publicPackageContract.documentedSurface).toEqual([
      'publicPackageContract',
    ]);
  });

  it('captures compatibility notes for future contract expansion', () => {
    expect(publicPackageContract.compatibilityNotes).toEqual(
      expect.arrayContaining([
        'Only the root import is stable in this phase.',
        'Future functional phases may expand the root contract, but they must not silently republish the generated tree.',
      ]),
    );
  });
});

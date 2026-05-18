import {
  getDeferredSigningGaps,
  getSigningCoverageBoundary,
} from '../../src/canonical/signing/coverage-boundary';

describe('signing coverage boundary', () => {
  it('states the initial signing scope and deferred capabilities explicitly', () => {
    const coverageBoundary = getSigningCoverageBoundary();

    expect(coverageBoundary).toEqual(
      expect.objectContaining({
        deferredCapabilities: expect.arrayContaining([
          'complete access-key derivation',
          'event signing',
          'nfce signing',
          'soap transport integration',
        ]),
        excludedScope: expect.arrayContaining([
          'authorization workflow',
          'enviNFe independent signing',
          'event signing',
          'nfce signing',
        ]),
        includedScope: ['signed NFe XML with reusable A1 context'],
      }),
    );
  });

  it('tracks deferred signing gaps for follow-up phases', () => {
    expect(getDeferredSigningGaps()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'enviNFe-independent-signing-deferred',
          type: 'scope-deferred',
        }),
        expect.objectContaining({
          code: 'event-signing-deferred',
          type: 'scope-deferred',
        }),
      ]),
    );
  });
});

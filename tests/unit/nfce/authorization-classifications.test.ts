import { getNFCeAuthorizationClassifications } from '../../../src/canonical/nfce/contracts';

describe('NFC-e authorization classifications', () => {
  it('has no denial: the NFC-e was excluded from the denied use state', () => {
    expect(getNFCeAuthorizationClassifications()).not.toContain('denied');
  });

  it('keeps authorized, rejected (including the 781 of an issuer not enabled) and the boundary states', () => {
    expect(getNFCeAuthorizationClassifications()).toEqual(
      expect.arrayContaining([
        'authorized',
        'rejected',
        'protocol-error',
        'timeout',
        'unavailable',
        'unsupported-state',
        'unsupported-scope',
        'validation-error',
      ]),
    );
  });
});

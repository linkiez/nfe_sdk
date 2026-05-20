import { selectNFCeProfile } from '../../../src/canonical/nfce/select-nfce-profile';

describe('selectNFCeProfile', () => {
  it('returns the promoted SP profile metadata', () => {
    expect(selectNFCeProfile('SP')).toEqual({
      name: 'sp-pilot-profile',
      transportService: 'nfce-authorization-sp',
      uf: 'SP',
    });
  });

  it('returns the promoted PR profile metadata', () => {
    expect(selectNFCeProfile('PR')).toEqual({
      name: 'pr-pilot-profile',
      transportService: 'nfce-authorization-pr',
      uf: 'PR',
    });
  });

  it('keeps non-promoted UFs outside the cohort', () => {
    expect(selectNFCeProfile('RJ')).toBeUndefined();
  });
});
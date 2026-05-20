import * as publicApi from '../../src/index';
import {
  invalidNFCeMissingCSC,
  invalidNFCeMissingCSRT,
} from '../fixtures/nfce/signing-prerequisites-invalid';

describe('NFC-e signing prerequisites boundary', () => {
  it('fails explicitly when CSRT input is missing or empty', () => {
    const prepareNFCeSigningPrerequisites = (
      publicApi as Record<string, unknown>
    ).prepareNFCeSigningPrerequisites as
      | ((input: typeof invalidNFCeMissingCSRT) => unknown)
      | undefined;

    expect(prepareNFCeSigningPrerequisites).toBeDefined();

    if (!prepareNFCeSigningPrerequisites) {
      return;
    }

    expect(() =>
      prepareNFCeSigningPrerequisites(invalidNFCeMissingCSRT),
    ).toThrow(/CSRT/i);
  });

  it('fails explicitly when CSC input is missing', () => {
    const prepareNFCeSigningPrerequisites = (
      publicApi as Record<string, unknown>
    ).prepareNFCeSigningPrerequisites as
      | ((input: typeof invalidNFCeMissingCSC) => unknown)
      | undefined;

    expect(prepareNFCeSigningPrerequisites).toBeDefined();

    if (!prepareNFCeSigningPrerequisites) {
      return;
    }

    expect(() =>
      prepareNFCeSigningPrerequisites(invalidNFCeMissingCSC),
    ).toThrow(/CSC/i);
  });
});

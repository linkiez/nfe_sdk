import * as publicApi from '../../src/index';
import {
  validNFCeAccessKeyFields,
  validNFCeCSCInput,
  validNFCeHashCSRTInput,
} from '../fixtures/nfce/signing-prerequisites-valid';

describe('prepareNFCeSigningPrerequisites integration', () => {
  it('returns a structured prerequisite bundle coherent with the published helper outputs', () => {
    const prepareNFCeSigningPrerequisites = (
      publicApi as Record<string, unknown>
    ).prepareNFCeSigningPrerequisites as
      | ((input: {
          accessKeyFields: typeof validNFCeAccessKeyFields;
          csc: typeof validNFCeCSCInput;
          hashCsrtInput: typeof validNFCeHashCSRTInput;
        }) => {
          accessKey: string;
          checkDigit: number;
          deferredOperationalDependencies: readonly string[];
          hashCsrt: string;
          receivedInputs: {
            cscId: string;
            hasCscToken: boolean;
            hasHashCsrtInput: boolean;
            model: string;
          };
        })
      | undefined;

    expect(prepareNFCeSigningPrerequisites).toBeDefined();

    if (!prepareNFCeSigningPrerequisites) {
      return;
    }

    const expectedAccessKey = publicApi.computeNFeAccessKey(
      validNFCeAccessKeyFields,
    );
    const expectedHashCSRT = publicApi.computeHashCSRT(validNFCeHashCSRTInput);

    const result = prepareNFCeSigningPrerequisites({
      accessKeyFields: validNFCeAccessKeyFields,
      csc: validNFCeCSCInput,
      hashCsrtInput: validNFCeHashCSRTInput,
    });

    expect(result.accessKey).toBe(expectedAccessKey.chNFe);
    expect(result.checkDigit).toBe(expectedAccessKey.cDV);
    expect(result.hashCsrt).toBe(expectedHashCSRT);
    expect(result.receivedInputs).toEqual({
      cscId: '000001',
      hasCscToken: true,
      hasHashCsrtInput: true,
      model: '65',
    });
    expect(result.deferredOperationalDependencies).toEqual(
      expect.arrayContaining(['authorization', 'qr-code', 'uf-rollout']),
    );
  });
});

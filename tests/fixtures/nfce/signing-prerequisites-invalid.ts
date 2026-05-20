import { validNFCeAccessKeyFields, validNFCeCSCInput, validNFCeHashCSRTInput } from './signing-prerequisites-valid';

export const invalidNFCeMissingCSRT = {
  accessKeyFields: validNFCeAccessKeyFields,
  csc: validNFCeCSCInput,
  hashCsrtInput: {
    ...validNFCeHashCSRTInput,
    CSRT: '',
  },
};

export const invalidNFCeMissingCSC = {
  accessKeyFields: validNFCeAccessKeyFields,
  csc: {
    cscId: '',
    cscToken: '',
  },
  hashCsrtInput: validNFCeHashCSRTInput,
};
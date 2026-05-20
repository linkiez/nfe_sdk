import type { AccessKeyFields } from '../../../src/canonical/facade/compute-nfe-access-key';
import type { HashCSRTInput } from '../../../src/canonical/facade/compute-hash-csrt';

export const validNFCeAccessKeyFields: AccessKeyFields = {
  AAMM: '2605',
  CNPJ: '12345678000123',
  cNF: '12345678',
  cUF: '35',
  mod: '65',
  nNF: '000000123',
  serie: '001',
  tpEmis: '1',
};

export const validNFCeHashCSRTInput: HashCSRTInput = {
  CNPJ: '12345678000123',
  CSRT: 'CSRT-SEFAZ-TESTE-2026',
  idCSRT: '01',
};

export const validNFCeCSCInput = {
  cscId: '000001',
  cscToken: 'CSC-TESTE-HOMOLOGACAO-2026',
};
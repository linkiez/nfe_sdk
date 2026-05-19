import type { SupportedNFeSoapService } from '../transport/supported-services.js';

import type { NFCeUF } from './resolve-nfce-uf.js';

/**
 * Internal pilot profile used by the first NFC-e operational slice.
 */
export interface NFCePilotProfile {
  readonly name: 'sp-pilot-profile';
  readonly transportService: SupportedNFeSoapService;
  readonly uf: NFCeUF;
}

const SP_PILOT_PROFILE: NFCePilotProfile = {
  name: 'sp-pilot-profile',
  transportService: 'nfce-authorization-sp',
  uf: 'SP',
};

/**
 * Returns the published SP pilot profile for the first NFC-e transport route.
 *
 * @returns Stable NFC-e pilot profile metadata.
 */
export function getSPNFCePilotProfile(): NFCePilotProfile {
  return SP_PILOT_PROFILE;
}
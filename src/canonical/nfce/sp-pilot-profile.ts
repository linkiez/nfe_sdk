import type { SupportedNFeSoapService } from '../transport/supported-services.js';

import type { NFCeUF } from './resolve-nfce-uf.js';

/**
 * Internal promoted profile used by the NFC-e operational cohort.
 */
export interface NFCePilotProfile {
  readonly name: 'pr-pilot-profile' | 'sp-pilot-profile';
  readonly transportService: SupportedNFeSoapService;
  readonly uf: NFCeUF;
}

const SP_PILOT_PROFILE: NFCePilotProfile = {
  name: 'sp-pilot-profile',
  transportService: 'nfce-authorization-sp',
  uf: 'SP',
};

const PR_PILOT_PROFILE: NFCePilotProfile = {
  name: 'pr-pilot-profile',
  transportService: 'nfce-authorization-pr',
  uf: 'PR',
};

/**
 * Returns the published SP pilot profile for the first NFC-e transport route.
 *
 * @returns Stable NFC-e pilot profile metadata.
 */
export function getSPNFCePilotProfile(): NFCePilotProfile {
  return SP_PILOT_PROFILE;
}

/**
 * Returns the promoted PR profile for the expanded NFC-e operational cohort.
 *
 * @returns Stable NFC-e profile metadata for PR.
 */
export function getPRNFCePilotProfile(): NFCePilotProfile {
  return PR_PILOT_PROFILE;
}
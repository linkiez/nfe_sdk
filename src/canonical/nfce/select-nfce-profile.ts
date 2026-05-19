import { getSPNFCePilotProfile, type NFCePilotProfile } from './sp-pilot-profile.js';
import type { NFCeUF } from './resolve-nfce-uf.js';

/**
 * Selects the currently published NFC-e pilot profile for one inferred UF.
 *
 * @param uf - Operational UF inferred from the NFC-e document identifier.
 * @returns The pilot profile for the UF or `undefined` when the UF stays outside the slice.
 */
export function selectNFCeProfile(uf: NFCeUF): NFCePilotProfile | undefined {
  const spPilotProfile = getSPNFCePilotProfile();

  return uf === spPilotProfile.uf ? spPilotProfile : undefined;
}
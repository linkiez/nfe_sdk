import { getNFCePromotedUFCohort } from './contracts.js';
import {
  getPRNFCePilotProfile,
  getSPNFCePilotProfile,
  type NFCePilotProfile,
} from './sp-pilot-profile.js';
import type { NFCeUF } from './resolve-nfce-uf.js';

/**
 * Selects the currently published NFC-e pilot profile for one inferred UF.
 *
 * @param uf - Operational UF inferred from the NFC-e document identifier.
 * @returns The pilot profile for the UF or `undefined` when the UF stays outside the slice.
 */
export function selectNFCeProfile(uf: NFCeUF): NFCePilotProfile | undefined {
  const supportedProfiles = [getSPNFCePilotProfile(), getPRNFCePilotProfile()] as const;
  const promotedUfs = new Set<NFCeUF>(getNFCePromotedUFCohort());

  return supportedProfiles.find(
    (profile) => profile.uf === uf && promotedUfs.has(profile.uf),
  );
}
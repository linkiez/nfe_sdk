import { renderNFCeSPDANFE as renderNFCeSPDANFEInternal } from '../nfce/render-nfce-sp-danfe.js';

import type {
  NFCeSPOfflineDanfeResult,
  NFCeSPDanfeResult,
  RenderNFCeSPDANFEInput,
  RenderNFCeSPDANFEOfflineInput,
} from '../nfce/contracts.js';

/**
 * Renders an authorized SP NFC-e as a self-contained HTML DANFE.
 *
 * @param input - Authorized outcome and optional supported paper width.
 * @returns Complete HTML with correlated identity and authorization metadata.
 */
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPOfflineDanfeResult>;
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput,
): Promise<NFCeSPDanfeResult>;
export async function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput,
): Promise<NFCeSPDanfeResult>;
export async function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPOfflineDanfeResult>;
export async function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput | RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPDanfeResult | NFCeSPOfflineDanfeResult> {
  return 'offlineRecord' in input
    ? renderNFCeSPDANFEInternal(input)
    : renderNFCeSPDANFEInternal(input);
}

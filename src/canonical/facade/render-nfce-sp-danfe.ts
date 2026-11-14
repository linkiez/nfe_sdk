import { renderNFCeSPDANFE as renderNFCeSPDANFEInternal } from '../nfce/render-nfce-sp-danfe.js';

import type {
  NFCeSPAuthorizedXmlDanfeResult,
  NFCeSPOfflineDanfeResult,
  NFCeSPDanfeResult,
  RenderNFCeSPDANFEAuthorizedXmlInput,
  RenderNFCeSPDANFEInput,
  RenderNFCeSPDANFEOfflineInput,
} from '../nfce/contracts.js';

/**
 * Renders an SP NFC-e as a self-contained HTML DANFE: from an authorized outcome with its SOAP
 * evidence, from the stored authorized `nfeProc` XML, or from an offline record awaiting
 * authorization.
 *
 * @param input - Authorized outcome, authorized XML or offline record, and optional paper width.
 * @returns Complete HTML with correlated identity and authorization metadata.
 */
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPOfflineDanfeResult>;
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEAuthorizedXmlInput,
): Promise<NFCeSPAuthorizedXmlDanfeResult>;
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput,
): Promise<NFCeSPDanfeResult>;
export async function renderNFCeSPDANFE(
  input:
    | RenderNFCeSPDANFEInput
    | RenderNFCeSPDANFEAuthorizedXmlInput
    | RenderNFCeSPDANFEOfflineInput,
): Promise<
  NFCeSPDanfeResult | NFCeSPAuthorizedXmlDanfeResult | NFCeSPOfflineDanfeResult
> {
  if ('offlineRecord' in input) return renderNFCeSPDANFEInternal(input);
  if ('authorizedXml' in input) return renderNFCeSPDANFEInternal(input);

  return renderNFCeSPDANFEInternal(input);
}

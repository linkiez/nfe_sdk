import type { MDFeProtocol } from './contracts.js';
import type { XmlNode } from './xml-node.js';

/**
 * Reads the authorization protocol (`protMDFe/infProt`) from a node that is, or contains, the
 * `protMDFe` element.
 *
 * @param node - `protMDFe`, or an element that contains it (e.g. `mdfeProc`, `retConsSitMDFe`).
 * @returns The protocol, or `undefined` when absent or incomplete.
 */
export function readMDFeProtocol(node: XmlNode): MDFeProtocol | undefined {
  const container = node.name === 'protMDFe' ? node : node.find('protMDFe');
  const info = container?.find('infProt');
  const number = info?.text('nProt');
  const statusCode = info?.text('cStat');
  if (info === undefined || number === undefined || statusCode === undefined) return undefined;

  return {
    number,
    statusCode,
    statusMessage: info.text('xMotivo'),
    receivedAt: info.text('dhRecbto'),
    digest: info.text('digVal'),
  };
}

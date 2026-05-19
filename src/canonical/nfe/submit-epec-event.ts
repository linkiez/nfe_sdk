import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { EPECEventInput, EPECEventOutcome } from './epec/contracts.js';
import { buildEPECEnvelopeXml } from './epec/epec-builder.js';
import { resolveEPECSVCTarget } from './epec/epec-svc-routing.js';

/**
 * Builds and submits an EPEC contingency event to the appropriate SVC per MOC §3.3.
 *
 * @param input - Structured EPEC event input.
 * @returns Structured EPEC event outcome.
 */
export async function submitEPECEvent(
  input: EPECEventInput,
): Promise<EPECEventOutcome> {
  const svcTarget = resolveEPECSVCTarget(input.issuerUF);
  const payloadXml = buildEPECEnvelopeXml(input);

  const transportOutcome = await executeNFeSoapService({
    environment: 'homologation',
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-generic-event',
  });

  const rawResponse = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const classification = mapTransportClassificationToEPEC(
    transportOutcome.classification,
    rawResponse,
  );

  return {
    classification,
    protocolNumber: extractProtocolNumber(rawResponse),
    rawResponse: rawResponse || undefined,
    svcTarget,
  };
}

function mapTransportClassificationToEPEC(
  transportClassification: string,
  responseXml: string,
): EPECEventOutcome['classification'] {
  if (transportClassification === 'success') {
    // Check if SEFAZ registered or rejected
    const statusCode = extractFirstTagText(responseXml, 'cStat');
    if (statusCode === '135') return 'registered';
    if (statusCode === '136') return 'registered'; // homologation success
    return 'rejected';
  }
  if (transportClassification === 'timeout') return 'timeout';
  if (transportClassification === 'unavailable') return 'unavailable';
  if (transportClassification === 'protocol-error') return 'protocol-error';
  return 'usage-error';
}

function extractFirstTagText(xml: string, tagName: string): string {
  const match = new RegExp(`<${tagName}>([^<]*)</${tagName}>`).exec(xml);
  return match?.[1] ?? '';
}

function extractProtocolNumber(xml: string): string | undefined {
  const nProt = extractFirstTagText(xml, 'nProt');
  return nProt.length > 0 ? nProt : undefined;
}

import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import { signEventXml } from '../signing/sign-event-xml.js';
import type { EPECEventInput, EPECEventOutcome } from './epec/contracts.js';
import {
  buildEPECEnvelopeXml,
  validateProductionEPECInput,
} from './epec/epec-builder.js';
import { resolveEPECSVCTarget } from './epec/epec-svc-routing.js';

const EPEC_PROTOCOL_PATTERN = /^\d{15}$/u;

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
  const validationFailure = getSubmissionValidationFailure(input);
  if (validationFailure !== undefined) {
    return {
      classification: 'usage-error',
      failureReason: validationFailure,
      svcTarget,
    };
  }

  const unsignedXml = buildEPECEnvelopeXml(input);
  const payloadXml = await signEventXml({
    signingContext: input.signingContext,
    unsignedXml,
  });

  const transportOutcome = await executeNFeSoapService({
    environment: input.environment ?? 'homologation',
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-generic-event',
  });

  return mapEPECSubmissionOutcome(input, svcTarget, transportOutcome);
}

function getSubmissionValidationFailure(
  input: EPECEventInput,
): string | undefined {
  const productionValidationFailure = validateProductionEPECInput(input);
  if (productionValidationFailure !== undefined) {
    return productionValidationFailure;
  }

  if (input.environment === 'production' && input.requestExecutor === undefined) {
    return 'Production EPEC requires an injected mTLS-capable requestExecutor.';
  }

  return undefined;
}

function mapEPECSubmissionOutcome(
  input: EPECEventInput,
  svcTarget: EPECEventOutcome['svcTarget'],
  transportOutcome: Awaited<ReturnType<typeof executeNFeSoapService>>,
): EPECEventOutcome {
  const rawResponse = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const eventStatusCode = extractEventStatusCode(rawResponse);
  const protocolNumber = extractProtocolNumber(rawResponse);
  let classification = mapTransportClassificationToEPEC(
    transportOutcome.classification,
    eventStatusCode,
    input.environment ?? 'homologation',
  );

  if (
    input.environment === 'production' &&
    classification === 'registered' &&
    (protocolNumber === undefined || !EPEC_PROTOCOL_PATTERN.test(protocolNumber))
  ) {
    classification = 'protocol-error';
  }

  return {
    classification,
    ...createProductionOutcomeMetadata(input, classification, protocolNumber),
    protocolNumber: shouldExposeProtocol(input, protocolNumber)
      ? protocolNumber
      : undefined,
    rawResponse: rawResponse || undefined,
    svcTarget,
  };
}

function createProductionOutcomeMetadata(
  input: EPECEventInput,
  classification: EPECEventOutcome['classification'],
  protocolNumber: string | undefined,
): Pick<
  EPECEventOutcome,
  | 'documentKey'
  | 'eventProtocol'
  | 'failureReason'
  | 'nextAction'
  | 'reconciliationDeadlineDays'
  | 'state'
> {
  if (input.environment !== 'production') {
    return {};
  }

  const hasValidProtocol = isValidEPECProtocol(protocolNumber);
  const isRegistered = classification === 'registered' && hasValidProtocol;
  let state: EPECEventOutcome['state'] = 'inconclusive';

  if (isRegistered) {
    state = 'awaiting-recovery';
  } else if (classification === 'rejected') {
    state = 'rejected';
  } else if (classification === 'unavailable') {
    state = 'unavailable';
  }

  return {
    documentKey: input.chNFe,
    ...(isRegistered
      ? {
          eventProtocol: protocolNumber,
          nextAction: 'transmitNFeAfterRecovery' as const,
          reconciliationDeadlineDays: 7 as const,
        }
      : {}),
    ...(classification === 'protocol-error'
      ? {
          failureReason:
            'Production EPEC registration did not return a valid 15-digit event protocol.',
        }
      : {}),
    state,
  };
}

function shouldExposeProtocol(
  input: EPECEventInput,
  protocolNumber: string | undefined,
): boolean {
  return input.environment !== 'production' || isValidEPECProtocol(protocolNumber);
}

function isValidEPECProtocol(protocolNumber: string | undefined): boolean {
  return protocolNumber !== undefined && EPEC_PROTOCOL_PATTERN.test(protocolNumber);
}

function mapTransportClassificationToEPEC(
  transportClassification: string,
  eventStatusCode: string,
  environment: string,
): EPECEventOutcome['classification'] {
  if (transportClassification === 'success') {
    if (eventStatusCode === '135') return 'registered';
    if (eventStatusCode === '136' && environment !== 'production') {
      return 'registered';
    }
    return 'rejected';
  }
  if (transportClassification === 'timeout') return 'timeout';
  if (transportClassification === 'unavailable') return 'unavailable';
  if (transportClassification === 'protocol-error') return 'protocol-error';
  return 'usage-error';
}

function extractEventStatusCode(xml: string): string {
  const eventResult = /<(?:\w+:)?retEvento\b[^>]*>([\s\S]*?)<\/(?:\w+:)?retEvento>/u.exec(
    xml,
  )?.[1];

  return eventResult === undefined
    ? ''
    : extractFirstTagText(eventResult, 'cStat');
}

function extractFirstTagText(xml: string, tagName: string): string {
  const match = new RegExp(`<${tagName}>([^<]*)</${tagName}>`).exec(xml);
  return match?.[1] ?? '';
}

function extractProtocolNumber(xml: string): string | undefined {
  const nProt = extractFirstTagText(xml, 'nProt');
  return nProt.length > 0 ? nProt : undefined;
}

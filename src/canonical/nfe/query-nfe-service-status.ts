import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { TransportOutcome } from '../transport/contracts.js';

import type { NFeServiceStatusRequest, ServiceStatusSnapshot } from './contracts.js';
import { mapTransportOutcomeToQueryClassification } from './transport-outcome-mapper.js';

/**
 * Maps a transport outcome into the structured service-status snapshot.
 *
 * @param transportOutcome - Transport evidence produced by the SOAP slice.
 * @returns Structured service-status snapshot for the operational facade.
 */
export function mapServiceStatusTransportOutcome(
  transportOutcome: TransportOutcome,
): ServiceStatusSnapshot {
  const mappedTransport = mapTransportOutcomeToQueryClassification(transportOutcome);
  const responseEnvironment = resolveResponseEnvironment(
    transportOutcome.evidence.responseEnvelopeXml,
  );

  return {
    applicationStatusCode: transportOutcome.applicationStatusCode,
    applicationStatusMessage: transportOutcome.applicationStatusMessage,
    classification: mappedTransport.classification,
    observedAt: new Date().toISOString(),
    responseEnvironment,
    transportOutcome,
  };
}

/**
 * Queries the supported homologation status-service and returns a structured snapshot.
 *
 * @param input - Structured service-status request provided by the integrator.
 * @returns Structured service-status snapshot.
 */
export async function queryNFeServiceStatus(
  input: NFeServiceStatusRequest,
): Promise<ServiceStatusSnapshot> {
  const transportOutcome = await executeNFeSoapService({
    authorizer: input.authorizer,
    environment: input.environment,
    payloadXml: '<consStatServNFe versao="4.00" />',
    requestExecutor: input.requestExecutor,
    service: 'nfe-status-service',
    timeoutMs: input.timeoutMs,
  });

  return mapServiceStatusTransportOutcome(transportOutcome);
}

function resolveResponseEnvironment(
  responseXml: string | undefined,
): ServiceStatusSnapshot['responseEnvironment'] {
  const tpAmb = /<(?:\w+:)?tpAmb\b[^>]*>([^<]+)<\/(?:\w+:)?tpAmb>/u.exec(
    responseXml ?? '',
  )?.[1]?.trim();

  if (tpAmb === '1') {
    return 'production';
  }

  if (tpAmb === '2') {
    return 'homologation';
  }

  return undefined;
}
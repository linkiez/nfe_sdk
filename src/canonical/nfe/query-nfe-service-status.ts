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

  return {
    applicationStatusCode: transportOutcome.applicationStatusCode,
    applicationStatusMessage: transportOutcome.applicationStatusMessage,
    classification: mappedTransport.classification,
    observedAt: new Date().toISOString(),
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
    environment: input.environment,
    payloadXml: '<consStatServNFe versao="4.00" />',
    requestExecutor: input.requestExecutor,
    service: 'nfe-status-service',
    timeoutMs: input.timeoutMs,
  });

  return mapServiceStatusTransportOutcome(transportOutcome);
}
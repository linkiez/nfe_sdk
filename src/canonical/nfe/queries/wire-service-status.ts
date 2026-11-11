import { executeNFeSoapService } from '../../transport/execute-nfe-soap-service.js';
import { resolveIssuerAuthorizer } from '../../transport/issuer-authorizer.js';
import type { NFeServiceStatusRequest, ServiceStatusSnapshot } from '../contracts.js';
import { mapServiceStatusTransportOutcome } from '../query-nfe-service-status.js';

import { buildConsStatServXml } from './nfe-query-payloads.js';
import { createRefusedTransportOutcome } from './wire-usage-error.js';

function refuse(environment: string, reason: string): ServiceStatusSnapshot {
  const transportOutcome = createRefusedTransportOutcome('nfe-status-service', environment, reason);

  return {
    classification: 'usage-error',
    observedAt: new Date().toISOString(),
    transportOutcome,
  };
}

/**
 * Queries the service status with the official `consStatServ` in the SEFAZ SOAP envelope.
 *
 * @param input - Request with `wireFormat: true` and the queried `issuerUF`.
 * @returns Snapshot (`success` for 107; 108/109 are `unavailable`); refused requests are `usage-error`.
 */
export async function queryWireServiceStatus(
  input: NFeServiceStatusRequest,
): Promise<ServiceStatusSnapshot> {
  const environment = input.environment.trim().toLowerCase();

  if (environment !== 'homologation' && environment !== 'production') {
    return refuse(environment, `Unsupported environment "${input.environment}".`);
  }
  if (input.issuerUF === undefined || !/^\d{2}$/u.test(input.issuerUF)) {
    return refuse(environment, 'issuerUF (2 digits) is required for the official status query.');
  }
  if (environment === 'production' && !input.requestExecutor) {
    return refuse(environment, 'Production queries require an injected requestExecutor for mTLS.');
  }

  const transportOutcome = await executeNFeSoapService({
    authorizer:
      input.authorizer ?? resolveIssuerAuthorizer(input.issuerUF, environment, 'nfe-status-service'),
    environment,
    payloadXml: buildConsStatServXml(environment, input.issuerUF),
    requestExecutor: input.requestExecutor,
    service: 'nfe-status-service',
    timeoutMs: input.timeoutMs,
    wireFormat: true,
  });

  return mapServiceStatusTransportOutcome(transportOutcome);
}

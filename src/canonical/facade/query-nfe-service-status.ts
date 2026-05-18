import { queryNFeServiceStatus as queryInternalNFeServiceStatus } from '../nfe/query-nfe-service-status.js';
import type { NFeServiceStatusRequest, ServiceStatusSnapshot } from '../nfe/contracts.js';

/**
 * Public root-facade function that queries the supported NFe service status.
 *
 * @param input - Structured service-status request provided by the integrator.
 * @returns Structured service-status snapshot.
 */
export async function queryNFeServiceStatus(
  input: NFeServiceStatusRequest,
): Promise<ServiceStatusSnapshot> {
  return queryInternalNFeServiceStatus(input);
}
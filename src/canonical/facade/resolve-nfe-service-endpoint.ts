import type {
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
} from '../transport/contracts.js';
import { resolveNFeServiceEndpoint as resolveInternalNFeServiceEndpoint } from '../transport/resolve-nfe-service-endpoint.js';

/**
 * Public facade wrapper for the transport catalog-resolution flow.
 *
 * @param input - Raw service and environment requested by the integrator.
 * @returns One supported versioned catalog entry.
 */
export function resolveNFeServiceEndpoint(
  input: ResolveNFeServiceEndpointInput,
): ServiceCatalogEntry {
  return resolveInternalNFeServiceEndpoint(input);
}
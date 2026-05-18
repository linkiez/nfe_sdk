import type {
  ResolveNFeServiceEndpointInput,
  TransportEnvironment,
  ServiceCatalogEntry,
} from './contracts.js';
import { normalizeEnvironment } from '../shared/environment-rule.js';
import {
  createUnsupportedTransportCombinationMessage,
  ResolveNFeServiceEndpointError,
} from './errors.js';
import { getSupportedTransportEnvironments } from './contracts.js';
import { findTransportServiceCatalogEntry } from './service-catalog.js';
import {
  normalizeSupportedTransportService,
  SUPPORTED_TRANSPORT_SERVICES,
} from './supported-services.js';

function normalizeRequestedEnvironment(
  environment: string,
): TransportEnvironment | undefined {
  try {
    const normalizedEnvironment = normalizeEnvironment(environment);

    return normalizedEnvironment === 'homologation'
      ? normalizedEnvironment
      : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Resolves one supported catalog entry for the requested service and environment.
 *
 * @param input - Raw endpoint-resolution input from the public facade.
 * @returns Matching versioned catalog entry.
 * @throws {ResolveNFeServiceEndpointError} When the combination is unsupported.
 */
export function resolveNFeServiceEndpoint(
  input: ResolveNFeServiceEndpointInput,
): ServiceCatalogEntry {
  const requestedEnvironment = input.environment.trim().toLowerCase();
  const requestedService = input.service.trim().toLowerCase();
  const normalizedEnvironment = normalizeRequestedEnvironment(input.environment);
  const normalizedService = normalizeSupportedTransportService(input.service);

  const catalogEntry =
    normalizedEnvironment === undefined || normalizedService === undefined
      ? undefined
      : findTransportServiceCatalogEntry({
          environment: normalizedEnvironment,
          service: normalizedService,
        });

  if (catalogEntry === undefined) {
    throw new ResolveNFeServiceEndpointError(
      createUnsupportedTransportCombinationMessage({
        requestedEnvironment,
        requestedService,
        supportedEnvironments: getSupportedTransportEnvironments(),
        supportedServices: SUPPORTED_TRANSPORT_SERVICES,
      }),
    );
  }

  return catalogEntry;
}
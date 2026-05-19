import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import { buildNFeAuthorizationBatch } from './authorization-batch.js';
import { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
import { createAuthorizationPayloadXml } from './authorization-payload.js';
import type { NFeAuthorizationOutcome, NFeAuthorizationRequest } from './contracts.js';
import type { SupportedNFeSoapService } from '../transport/supported-services.js';
import {
  createUnsupportedOperationalScopeMessage,
  NFeOperationalUnsupportedScopeError,
  NFeOperationalUsageError,
} from './errors.js';

interface NFeAuthorizationExecutionOptions {
  readonly transportService?: SupportedNFeSoapService;
}

/**
 * Authorizes a supported canonical NFe submission through the operational slice.
 *
 * @param input - Structured authorization request from the root facade.
 * @returns Structured authorization outcome for the attempted submission.
 * @throws {NFeOperationalUsageError} When the signing context is missing.
 * @throws {NFeOperationalUnsupportedScopeError} When the requested environment is outside the MVP scope.
 */
export async function authorizeNFe(
  input: NFeAuthorizationRequest,
  options?: NFeAuthorizationExecutionOptions,
): Promise<NFeAuthorizationOutcome> {
  const normalizedEnvironment = input.environment.trim().toLowerCase();

  if (!input.signingContext) {
    throw new NFeOperationalUsageError(
      'authorizeNFe requires a signingContext created by this SDK.',
    );
  }

  if (normalizedEnvironment !== 'homologation') {
    throw new NFeOperationalUnsupportedScopeError(
      createUnsupportedOperationalScopeMessage({
        requestedEnvironment: input.environment,
        requestedOperation: 'authorizeNFe',
        supportedEnvironments: ['homologation'],
      }),
    );
  }

  const batch = buildNFeAuthorizationBatch(input.documents);
  const payloadXml = createAuthorizationPayloadXml(batch);
  const transportOutcome = await executeNFeSoapService({
    environment: normalizedEnvironment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: options?.transportService ?? 'nfe-authorization',
    timeoutMs: input.timeoutMs,
  });

  return mapAuthorizationTransportOutcome(batch, transportOutcome);
}
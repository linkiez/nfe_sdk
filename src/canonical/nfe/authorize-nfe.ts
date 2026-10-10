import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import { buildNFeAuthorizationBatch } from './authorization-batch.js';
import { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
import {
  resolveNFeContingencyBoundary,
  resolveNFeIssuerUF,
} from './coverage-boundary.js';
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
  let issuerUF: string | undefined;

  if (!input.signingContext) {
    throw new NFeOperationalUsageError(
      'authorizeNFe requires a signingContext created by this SDK.',
    );
  }

  if (normalizedEnvironment === 'production') {
    issuerUF = resolveNFeIssuerUF(input.documents.payload);

    if (issuerUF !== '35') {
      const contingencyBoundary = resolveNFeContingencyBoundary(
        input.documents.payload,
      );

      if (contingencyBoundary) {
        return contingencyBoundary;
      }

      throw new NFeOperationalUnsupportedScopeError(
        `authorizeNFe production currently supports issuer UF 35 only; received "${issuerUF}".`,
      );
    }

    if (!input.requestExecutor) {
      throw new NFeOperationalUsageError(
        'Production authorizeNFe requires an injected requestExecutor for mTLS.',
      );
    }
  }

  if (normalizedEnvironment !== 'homologation' && issuerUF !== '35') {
    throw new NFeOperationalUnsupportedScopeError(
      createUnsupportedOperationalScopeMessage({
        requestedEnvironment: input.environment,
        requestedOperation: 'authorizeNFe',
        supportedEnvironments: ['homologation', 'production (SP only)'],
      }),
    );
  }

  return executeAuthorization(input, normalizedEnvironment, issuerUF, options);
}

async function executeAuthorization(
  input: NFeAuthorizationRequest,
  normalizedEnvironment: string,
  issuerUF: string | undefined,
  options?: NFeAuthorizationExecutionOptions,
): Promise<NFeAuthorizationOutcome> {
  const batch = buildNFeAuthorizationBatch(input.documents);
  const payloadXml = createAuthorizationPayloadXml(batch);
  const transportOutcome = await executeNFeSoapService({
    authorizer: issuerUF === '35' ? 'SP' : undefined,
    environment: normalizedEnvironment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: options?.transportService ?? 'nfe-authorization',
    timeoutMs: input.timeoutMs,
  });

  return mapAuthorizationTransportOutcome(batch, transportOutcome);
}
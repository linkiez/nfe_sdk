import { authorizeNFe as authorizeInternalNFe } from '../nfe/authorize-nfe.js';

import type {
  NFCeAuthorizationOutcome,
  NFCeAuthorizationRequest,
} from './contracts.js';
import { createNFCeAuthorizationPayload } from './authorization-payload.js';
import {
  createUnsupportedScopeNFCeOutcome,
  createUnsupportedStateNFCeOutcome,
} from './coverage-boundary.js';
import {
  createUnsupportedNFCeOperationalScopeMessage,
  NFCeOperationalUnsupportedScopeError,
  NFCeOperationalUsageError,
} from './errors.js';
import { mapNFCeAuthorizationOutcome } from './authorization-outcome.js';
import { resolveNFCeUF } from './resolve-nfce-uf.js';
import { selectNFCeProfile } from './select-nfce-profile.js';

const SUPPORTED_NFCE_ENVIRONMENTS = ['homologation'] as const;

/**
 * Authorizes a supported NFC-e submission through the first operational slice.
 *
 * @param input - Structured authorization request received from the root facade.
 * @returns Structured NFC-e authorization outcome for the attempted submission.
 * @throws {NFCeOperationalUsageError} When the signing context is missing.
 * @throws {NFCeOperationalUnsupportedScopeError} When the requested environment is outside the slice.
 */
export async function authorizeNFCe(
  input: NFCeAuthorizationRequest,
): Promise<NFCeAuthorizationOutcome> {
  const normalizedEnvironment = input.environment.trim().toLowerCase();

  if (!input.signingContext) {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe requires a signingContext created by this SDK.',
    );
  }

  if (!SUPPORTED_NFCE_ENVIRONMENTS.includes(normalizedEnvironment as 'homologation')) {
    throw new NFCeOperationalUnsupportedScopeError(
      createUnsupportedNFCeOperationalScopeMessage({
        requestedEnvironment: input.environment,
        requestedOperation: 'authorizeNFCe',
        supportedEnvironments: SUPPORTED_NFCE_ENVIRONMENTS,
      }),
    );
  }

  if ((input.requestedCapabilities?.length ?? 0) > 0) {
    return createUnsupportedScopeNFCeOutcome(input.requestedCapabilities ?? []);
  }

  const resolvedUF = resolveNFCeUF(input.document);
  const selectedProfile = selectNFCeProfile(resolvedUF);

  if (selectedProfile === undefined) {
    return createUnsupportedStateNFCeOutcome(resolvedUF);
  }

  const outcome = await authorizeInternalNFe(createNFCeAuthorizationPayload(input), {
    transportService: selectedProfile.transportService,
  });

  return mapNFCeAuthorizationOutcome(outcome);
}
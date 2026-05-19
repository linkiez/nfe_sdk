import { validateManifestationTransition } from '../recipient/change-manifestation.js';
import { manifestRecipientOperation } from '../recipient/manifest-recipient-operation.js';
import type { RecipientActor, RecipientManifestationEventType, RecipientManifestationOutcome } from '../recipient/recipient-shared.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

/**
 * Input for a validated manifestation state change.
 */
export interface ManifestationChangeInput {
  readonly actor: RecipientActor;
  readonly chNFe: string;
  readonly fromType: RecipientManifestationEventType;
  readonly toType: RecipientManifestationEventType;
  readonly justification?: string;
  readonly environment: CanonicalEnvironment;
  readonly signingContext: SigningContext;
  readonly requestExecutor: RequestExecutor;
}

/**
 * Changes the manifestation state for a recipient NF-e operation.
 * Validates that the transition is allowed before executing.
 *
 * @param input - Structured manifestation change input.
 * @returns Structured recipient manifestation outcome.
 * @throws {InvalidManifestationTransitionError} When the transition is not permitted.
 */
export async function changeManifestRecipientOperation(
  input: ManifestationChangeInput,
): Promise<RecipientManifestationOutcome> {
  validateManifestationTransition(input.fromType, input.toType);

  return manifestRecipientOperation({
    accessKey: input.chNFe,
    actor: input.actor,
    environment: input.environment,
    eventType: input.toType,
    justification: input.justification,
    requestExecutor: input.requestExecutor,
    signingContext: input.signingContext,
  });
}

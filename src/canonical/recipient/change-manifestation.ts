import { InvalidManifestationTransitionError } from './errors.js';
import type { RecipientManifestationEventType } from './recipient-shared.js';

/**
 * Allowed manifestation transitions per MOC §3.2.1.5.
 * Only `ciencia-da-operacao` can transition to other event types.
 */
const ALLOWED_TRANSITIONS: ReadonlySet<string> = new Set([
  'ciencia-da-operacao->confirmacao-da-operacao',
  'ciencia-da-operacao->desconhecimento-da-operacao',
  'ciencia-da-operacao->operacao-nao-realizada',
]);

/**
 * Validates that the requested manifestation transition is allowed per MOC §3.2.1.5.
 * Throws `InvalidManifestationTransitionError` when the transition is forbidden.
 *
 * @param fromType - The manifestation type that is currently registered.
 * @param toType - The manifestation type being requested.
 * @throws {InvalidManifestationTransitionError} When the transition is not permitted.
 */
export function validateManifestationTransition(
  fromType: RecipientManifestationEventType,
  toType: RecipientManifestationEventType,
): void {
  const transitionKey = `${fromType}->${toType}`;

  if (!ALLOWED_TRANSITIONS.has(transitionKey)) {
    throw new InvalidManifestationTransitionError(fromType, toType);
  }
}

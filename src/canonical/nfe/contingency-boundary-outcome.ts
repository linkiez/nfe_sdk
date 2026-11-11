import type {
  NFeAuthorizationOutcome,
  NFeContingencyMode,
  NFeContingencyState,
} from './contracts.js';

/**
 * Builds the outcome of an explicit contingency request that was diagnosed before (or instead
 * of) any authorization transport.
 *
 * @param mode - Requested contingency mode.
 * @param reason - Why the request does not proceed.
 * @param state - Contingency state projected to the caller.
 * @param documentKey - Access key of the document, when known.
 * @returns A `contingency-boundary` outcome with no transport evidence.
 */
export function createContingencyBoundaryOutcome(
  mode: NFeContingencyMode,
  reason: string,
  state: NFeContingencyState,
  documentKey?: string,
): NFeAuthorizationOutcome {
  const provider = mode === 'svc-an' || mode === 'epec' ? 'SVCAN' : 'SP';

  return {
    classification: 'contingency-boundary',
    contingencyState: state,
    documentKey,
    documentStatuses: [],
    executionMode: mode,
    failureReason: reason,
    transportOutcome: {
      classification: 'usage-error',
      environment: 'production',
      evidence: { endpointUrl: '', provider, requestEnvelopeXml: '' },
      failureReason: reason,
      service: 'nfe-authorization',
    },
  };
}

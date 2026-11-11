import type { TransportOutcome } from '../../transport/contracts.js';
import type { SupportedNFeSoapService } from '../../transport/supported-services.js';

/**
 * Builds a transport outcome describing a request refused before any network call.
 *
 * @param service - Service that would have been called.
 * @param environment - Requested environment (anything else is reported as homologation).
 * @param reason - Why the request was refused.
 * @returns A `usage-error` transport outcome with empty evidence.
 */
export function createRefusedTransportOutcome(
  service: SupportedNFeSoapService,
  environment: string,
  reason: string,
): TransportOutcome {
  return {
    classification: 'usage-error',
    environment: environment === 'production' ? 'production' : 'homologation',
    evidence: { endpointUrl: '', provider: 'SP', requestEnvelopeXml: '' },
    failureReason: reason,
    service,
  };
}

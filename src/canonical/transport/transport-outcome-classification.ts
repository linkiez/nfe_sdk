import type { TransportOutcomeClassification } from './contracts.js';
import { getSupportedTransportServiceDefinition } from './supported-services.js';
import type { SupportedNFeSoapService } from './supported-services.js';

/**
 * Input required to classify a transport outcome deterministically.
 */
export interface TransportOutcomeClassificationInput {
  readonly applicationStatusCode?: string;
  readonly failureKind:
    | 'application-response'
    | 'protocol-error'
    | 'timeout'
    | 'usage-error';
  readonly service: SupportedNFeSoapService;
}

/**
 * Classifies the observable outcome of a transport attempt.
 *
 * @param input - Signals collected during the transport attempt.
 * @returns One public transport outcome classification.
 */
export function classifyTransportOutcome(
  input: TransportOutcomeClassificationInput,
): TransportOutcomeClassification {
  if (input.failureKind === 'timeout') {
    return 'timeout';
  }

  if (input.failureKind === 'usage-error') {
    return 'usage-error';
  }

  if (input.failureKind === 'protocol-error') {
    return 'protocol-error';
  }

  const serviceDefinition = getSupportedTransportServiceDefinition(input.service);
  const applicationStatusCode = input.applicationStatusCode ?? '';

  if (serviceDefinition.successStatusCodes.includes(applicationStatusCode)) {
    return 'success';
  }

  if (serviceDefinition.unavailabilityStatusCodes.includes(applicationStatusCode)) {
    return 'unavailable';
  }

  return 'functional-rejection';
}
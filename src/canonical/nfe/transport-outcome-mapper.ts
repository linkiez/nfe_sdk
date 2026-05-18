import type {
  NFeAuthorizationClassification,
  NFeMaintenanceClassification,
  NFeQueryClassification,
} from './contracts.js';
import type {
  TransportOutcome,
  TransportOutcomeClassification,
} from '../transport/contracts.js';

/**
 * Minimal operational projection derived from a transport outcome.
 */
export interface OperationalTransportProjection<TClassification extends string> {
  /** Classification observed by the operational layer. */
  readonly classification: TClassification;
  /** Failure reason derived from transport evidence when applicable. */
  readonly failureReason?: string;
}

/**
 * Projects a transport outcome into the authorization classification language.
 *
 * @param outcome - Transport outcome produced by the SOAP slice.
 * @returns Authorization-facing classification and optional failure reason.
 */
export function mapTransportOutcomeToAuthorizationClassification(
  outcome: TransportOutcome,
): OperationalTransportProjection<NFeAuthorizationClassification> {
  const classification = mapTransportClassification(outcome.classification, {
    functionalRejection: 'rejected',
    success: 'received',
  });

  return {
    classification,
    failureReason: getOperationalFailureReason(outcome),
  };
}

/**
 * Projects a transport outcome into the query classification language.
 *
 * @param outcome - Transport outcome produced by the SOAP slice.
 * @returns Query-facing classification and optional failure reason.
 */
export function mapTransportOutcomeToQueryClassification(
  outcome: TransportOutcome,
): OperationalTransportProjection<NFeQueryClassification> {
  const classification = mapTransportClassification(outcome.classification, {
    functionalRejection: 'not-found',
    success: 'success',
  });

  return {
    classification,
    failureReason: getOperationalFailureReason(outcome),
  };
}

/**
 * Projects a transport outcome into the maintenance classification language.
 *
 * @param outcome - Transport outcome produced by the SOAP slice.
 * @returns Maintenance-facing classification and optional failure reason.
 */
export function mapTransportOutcomeToMaintenanceClassification(
  outcome: TransportOutcome,
): OperationalTransportProjection<NFeMaintenanceClassification> {
  const classification = mapTransportClassification(outcome.classification, {
    functionalRejection: 'rejected',
    success: 'success',
  });

  return {
    classification,
    failureReason: getOperationalFailureReason(outcome),
  };
}

/**
 * Synthesizes a stable failure reason from transport evidence.
 *
 * @param outcome - Transport outcome produced by the SOAP slice.
 * @returns Failure reason when the transport did not finish successfully.
 */
export function getOperationalFailureReason(
  outcome: TransportOutcome,
): string | undefined {
  if (outcome.classification === 'success') {
    return undefined;
  }

  return outcome.failureReason ?? outcome.applicationStatusMessage;
}

function mapTransportClassification<TClassification extends string>(
  classification: TransportOutcomeClassification,
  overrides: {
    readonly functionalRejection: TClassification;
    readonly success: TClassification;
  },
): TClassification {
  switch (classification) {
    case 'functional-rejection':
      return overrides.functionalRejection;
    case 'protocol-error':
      return 'protocol-error' as TClassification;
    case 'success':
      return overrides.success;
    case 'timeout':
      return 'timeout' as TClassification;
    case 'unavailable':
      return 'unavailable' as TClassification;
    case 'usage-error':
      return 'usage-error' as TClassification;
    default:
      return 'protocol-error' as TClassification;
  }
}
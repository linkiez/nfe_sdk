import type {
  NFCeAuthorizationOutcome,
  NFCeCoverageBoundary,
  NFCeDeferredCapability,
} from './contracts.js';
import { getNFCePromotedUFCohort } from './contracts.js';
import type { NFCeUF } from './resolve-nfce-uf.js';

const DEFERRED_CAPABILITY_LABELS: Readonly<Record<NFCeDeferredCapability, string>> = {
  'automatic-credentialing': 'automatic credentialing',
  'csc-administration': 'CSC administration',
  'danfe-nfce': 'DANFE NFC-e',
  'offline-contingency': 'offline contingency',
  'qr-code': 'QR Code',
};

const DEFERRED_CONTINGENCY_CAPABILITIES = ['offline-contingency'] as const;

export function hasDeferredContingencyCapability(
  requestedCapabilities: readonly NFCeDeferredCapability[],
): boolean {
  return requestedCapabilities.some((capability) =>
    DEFERRED_CONTINGENCY_CAPABILITIES.includes(
      capability as (typeof DEFERRED_CONTINGENCY_CAPABILITIES)[number],
    ),
  );
}

/**
 * Builds the published unsupported-state boundary payload for the first NFC-e slice.
 *
 * @param uf - Operational UF inferred from the NFC-e input.
 * @returns Structured coverage boundary returned to the integrator.
 */
export function createUnsupportedStateNFCeCoverageBoundary(
  uf: NFCeUF,
): NFCeCoverageBoundary {
  const describedCohort = getNFCePromotedUFCohort().join(' and ');

  return {
    classification: 'unsupported-state',
    code: 'nfce-unsupported-state',
    message: `authorizeNFCe currently supports only the ${describedCohort} promoted cohort for homologation NFC-e operations.`,
    retryable: false,
    uf,
  };
}

/**
 * Builds the published unsupported-state boundary payload for the paulista QR Code helper.
 *
 * @param uf - Operational UF inferred from the NFC-e access key.
 * @returns Structured coverage boundary returned by the helper.
 */
export function createUnsupportedStateNFCeSPQRCodeBoundary(
  uf: NFCeUF,
): NFCeCoverageBoundary {
  return {
    classification: 'unsupported-state',
    code: 'nfce-unsupported-state',
    message:
      'generateNFCeSPQRCode currently supports only SP for paulista NFC-e QR Code operations.',
    retryable: false,
    uf,
  };
}

/**
 * Builds the public NFC-e outcome used when the inferred UF is outside the published pilot.
 *
 * @param uf - Operational UF inferred from the NFC-e input.
 * @returns Structured authorization outcome blocked before transport.
 */
export function createUnsupportedStateNFCeOutcome(
  uf: NFCeUF,
): NFCeAuthorizationOutcome {
  return {
    acceptedForTransport: false,
    classification: 'unsupported-state',
    coverageBoundary: createUnsupportedStateNFCeCoverageBoundary(uf),
    validationFailures: [],
  };
}

/**
 * Builds the published unsupported-scope boundary payload for deferred NFC-e capabilities.
 *
 * @param requestedCapabilities - Deferred capabilities requested by the integrator.
 * @returns Structured coverage boundary returned to the integrator.
 */
export function createUnsupportedScopeNFCeCoverageBoundary(
  requestedCapabilities: readonly NFCeDeferredCapability[],
): NFCeCoverageBoundary {
  const describedCapabilities = requestedCapabilities
    .map((capability) => DEFERRED_CAPABILITY_LABELS[capability])
    .join(', ');

  return {
    classification: 'unsupported-scope',
    code: 'nfce-unsupported-scope',
    message:
      'authorizeNFCe does not yet support the requested NFC-e capabilities in this slice: ' +
      describedCapabilities +
      '.',
    retryable: false,
  };
}

/**
 * Builds the public NFC-e outcome used when deferred capabilities are requested explicitly.
 *
 * @param requestedCapabilities - Deferred capabilities requested by the integrator.
 * @returns Structured authorization outcome blocked before transport.
 */
export function createUnsupportedScopeNFCeOutcome(
  requestedCapabilities: readonly NFCeDeferredCapability[],
): NFCeAuthorizationOutcome {
  return {
    acceptedForTransport: false,
    classification: 'unsupported-scope',
    coverageBoundary: createUnsupportedScopeNFCeCoverageBoundary(requestedCapabilities),
    validationFailures: [],
  };
}
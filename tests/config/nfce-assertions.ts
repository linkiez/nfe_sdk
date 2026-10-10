import type { NFCeAuthorizationOutcome } from '../../src/canonical/nfce/contracts.js';

/**
 * Minimal successful QR Code result shape asserted by the focused SP helper tests.
 */
export interface NFCeSPQRCodeResultAssertion {
  /** Final QR Code URL published by the helper. */
  readonly qrCodeUrl: string;
  /** Normalized environment used to compose the URL. */
  readonly environment: 'homologation' | 'production';
  /** Environment-specific paulista base URL. */
  readonly baseUrl: string;
  /** Access key echoed by the helper. */
  readonly accessKey: string;
  /** Auditable CSC identifier echoed by the helper. */
  readonly cscId: string;
  /** Supported UF echoed by the helper. */
  readonly uf: 'SP';
}

/**
 * Minimal unsupported-state boundary shape asserted by the focused SP helper tests.
 */
export interface NFCeSPQRCodeUnsupportedStateAssertion {
  /** Boundary classification echoed by the helper. */
  readonly classification: string;
  /** Stable boundary code used by the NFC-e slice. */
  readonly code: string;
  /** Human-readable message explaining the rejected UF. */
  readonly message: string;
  /** Whether the current boundary is retryable. */
  readonly retryable: boolean;
  /** Rejected UF echoed by the helper. */
  readonly uf?: string;
}

/**
 * Asserts the expected high-level classification and transport acceptance for an NFC-e outcome.
 *
 * @param outcome - Structured NFC-e authorization outcome.
 * @param classification - Expected application-facing classification.
 * @param acceptedForTransport - Expected transport acceptance flag.
 */
export function expectNFCeOutcomeClassification(
  outcome: NFCeAuthorizationOutcome,
  classification: NFCeAuthorizationOutcome['classification'],
  acceptedForTransport: boolean,
): void {
  expect(outcome.classification).toBe(classification);
  expect(outcome.acceptedForTransport).toBe(acceptedForTransport);
}

/**
 * Asserts that an NFC-e outcome carries the expected authorization protocol and no local failures.
 *
 * @param outcome - Structured NFC-e authorization outcome.
 * @param protocolNumber - Expected authorization protocol.
 */
export function expectNFCeAuthorizedOutcome(
  outcome: NFCeAuthorizationOutcome,
  protocolNumber: string,
): void {
  expectNFCeOutcomeClassification(outcome, 'authorized', true);
  expect(outcome.protocolNumber).toBe(protocolNumber);
  expect(outcome.validationFailures).toEqual([]);
}

/**
 * Asserts that an NFC-e outcome was blocked before transport for an unsupported UF.
 *
 * @param outcome - Structured NFC-e authorization outcome.
 * @param uf - Expected unsupported UF echoed by the boundary.
 */
export function expectNFCeUnsupportedStateOutcome(
  outcome: NFCeAuthorizationOutcome,
  uf: string,
): void {
  expectNFCeOutcomeClassification(outcome, 'unsupported-state', false);
  expect(outcome.coverageBoundary?.code).toBe('nfce-unsupported-state');
  expect(outcome.coverageBoundary?.uf).toBe(uf);
}

/**
 * Asserts the successful paulista QR Code result shape returned by the helper.
 *
 * @param result - Successful helper result.
 * @param expected - Expected auditable QR Code fields.
 */
export function expectNFCeSPQRCodeResult(
  result: unknown,
  expected: NFCeSPQRCodeResultAssertion,
): void {
  expect(result).toEqual(expected);
}

/**
 * Asserts the unsupported-state boundary returned by the paulista QR Code helper.
 *
 * @param result - Unsupported-state helper result.
 * @param uf - Expected rejected UF echoed by the helper.
 */
export function expectNFCeSPQRCodeUnsupportedStateBoundary(
  result: unknown,
  uf: string,
): void {
  expect(result).toEqual(
    expect.objectContaining({
      classification: 'unsupported-state',
      code: 'nfce-unsupported-state',
      message: expect.any(String),
      retryable: false,
      uf,
    } satisfies Partial<NFCeSPQRCodeUnsupportedStateAssertion>),
  );
}

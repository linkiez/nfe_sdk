import type { NFCeAuthorizationOutcome } from '../../src/canonical/nfce/contracts.js';

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

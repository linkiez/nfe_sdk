import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Minimal NFC-e document fixture shape used by the first operational slice tests.
 */
export interface FixtureNFCeDocument {
  /** Stable document identifier used by integration and validation fixtures. */
  readonly documentId: string;
  /** Environment published by the fixture input. */
  readonly environment: 'homologation' | 'production';
  /** Fiscal layout version exercised by the first slice. */
  readonly version: '4.00';
}

/**
 * Minimal NFC-e authorization request fixture used by the current test suite.
 */
export interface FixtureNFCeAuthorizationRequest {
  /** NFC-e document payload used by the facade. */
  readonly document: FixtureNFCeDocument;
  /** Requested operational environment. */
  readonly environment: 'homologation' | 'production';
  /** Optional timeout in milliseconds for request execution. */
  readonly timeoutMs?: number;
}

/**
 * Loads a UTF-8 NFC-e fixture from the shared fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/nfce`.
 * @returns Fixture text content.
 */
export function loadNFCeTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/nfce', relativePath),
    'utf8',
  );
}

/**
 * Loads a JSON NFC-e fixture from the shared fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/nfce`.
 * @returns Parsed fixture payload.
 */
export function loadNFCeJsonFixture<T>(relativePath: string): T {
  return JSON.parse(loadNFCeTextFixture(relativePath)) as T;
}

/**
 * Builds a deterministic NFC-e authorization request fixture for the first slice.
 *
 * @param overrides - Optional request overrides.
 * @returns NFC-e authorization request fixture with stable defaults.
 */
export function buildFixtureNFCeAuthorizationRequest(
  overrides: Partial<FixtureNFCeAuthorizationRequest> = {},
): FixtureNFCeAuthorizationRequest {
  return {
    document: overrides.document ?? {
      documentId: '35190500000000000000550010000000011000000010',
      environment: 'homologation',
      version: '4.00',
    },
    environment: overrides.environment ?? 'homologation',
    timeoutMs: overrides.timeoutMs ?? 5000,
  };
}

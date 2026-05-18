import {
  getDeferredSigningGaps as getDeferredSigningGapsInternal,
  type DeferredSigningGap,
} from './deferred-signing-gaps.js';

const INCLUDED_SCOPE = ['signed NFe XML with reusable A1 context'] as const;

const EXCLUDED_SCOPE = [
  'authorization workflow',
  'enviNFe independent signing',
  'event signing',
  'nfce signing',
  'soap transport integration',
] as const;

const DEFERRED_CAPABILITIES = [
  'complete access-key derivation',
  'event signing',
  'nfce signing',
  'soap transport integration',
] as const;

/**
 * Explicit scope boundary for the initial digital-signing slice.
 */
export interface SigningCoverageBoundary {
  deferredCapabilities: readonly string[];
  deferredGaps: readonly DeferredSigningGap[];
  excludedScope: readonly string[];
  includedScope: readonly string[];
}

/**
 * Returns the supported scope and deferred capabilities for the initial signing slice.
 *
 * @returns Coverage boundary consumed by tests and documentation.
 */
export function getSigningCoverageBoundary(): SigningCoverageBoundary {
  return {
    deferredCapabilities: DEFERRED_CAPABILITIES,
    deferredGaps: getDeferredSigningGapsInternal(),
    excludedScope: EXCLUDED_SCOPE,
    includedScope: INCLUDED_SCOPE,
  };
}

/**
 * Re-exports deferred signing gaps through the coverage-boundary module for a single import surface.
 *
 * @returns Deferred signing gaps tracked outside the initial slice.
 */
export function getDeferredSigningGaps(): readonly DeferredSigningGap[] {
  return getDeferredSigningGapsInternal();
}
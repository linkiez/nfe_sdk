import type { CanonicalVersion } from './contracts.js';

/**
 * Normalizes the version accepted by the first functional facade.
 *
 * @param version - Raw version value provided by the integrator.
 * @returns The normalized supported version.
 * @throws {Error} When the version is empty or unsupported.
 */
export function normalizeVersion(version: string): CanonicalVersion {
  const normalizedVersion = version.trim();

  if (normalizedVersion !== '4.00') {
    throw new Error('Unsupported canonical version. Use "4.00".');
  }

  return '4.00';
}
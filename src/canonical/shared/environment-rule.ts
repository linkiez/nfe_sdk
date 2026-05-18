import type { CanonicalEnvironment } from './contracts.js';

/**
 * Normalizes the environment accepted by the first functional facade.
 *
 * @param environment - Raw environment value provided by the integrator.
 * @returns The normalized canonical environment.
 * @throws {Error} When the environment is empty or unsupported.
 */
export function normalizeEnvironment(
  environment: string,
): CanonicalEnvironment {
  const normalizedEnvironment = environment.trim().toLowerCase();

  if (normalizedEnvironment === 'homologation') {
    return 'homologation';
  }

  if (normalizedEnvironment === 'production') {
    return 'production';
  }

  throw new Error(
    'Unsupported canonical environment. Use "homologation" or "production".',
  );
}
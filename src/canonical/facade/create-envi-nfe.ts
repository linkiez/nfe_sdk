import { createCanonicalEnviNFe } from '../nfe/canonical-envi-nfe.js';
import type {
  CanonicalEnviNFeDocument,
  CanonicalEnviNFeInput,
} from '../shared/contracts.js';

/**
 * Public root-facade function that creates a canonical `enviNFe` batch.
 *
 * @param input - Raw canonical enviNFe input provided by the integrator.
 * @returns Canonical `enviNFe` batch for the initial SDK slice.
 */
export function createEnviNFe(
  input: CanonicalEnviNFeInput,
): CanonicalEnviNFeDocument {
  return createCanonicalEnviNFe(input);
}
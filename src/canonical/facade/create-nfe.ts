import { createCanonicalNFe } from '../nfe/canonical-nfe.js';
import type {
  CanonicalNFeDocument,
  CanonicalNFeInput,
} from '../shared/contracts.js';

/**
 * Public root-facade function that creates a canonical `NFe` document.
 *
 * @param input - Raw canonical NFe input provided by the integrator.
 * @returns Canonical `NFe` document for the initial SDK slice.
 */
export function createNFe(input: CanonicalNFeInput): CanonicalNFeDocument {
  return createCanonicalNFe(input);
}
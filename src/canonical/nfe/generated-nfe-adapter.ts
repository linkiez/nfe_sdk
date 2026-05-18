import type {
  CanonicalEnviNFeInput,
  CanonicalNFeInput,
  CanonicalVersion,
} from '../shared/contracts.js';

const GENERATED_ENVI_NFE_TYPE =
  '.CPl010CNt2022002V130LeiauteNFeV400EnviNFe' as const;
const GENERATED_NFE_TYPE = '.CPl010CNt2022002V130LeiauteNFeV400NFe' as const;

/**
 * Result of adapting canonical `NFe` input to the generated schema-backed class.
 */
export interface GeneratedNFeAdapterResult {
  /** Runtime class discriminator exposed by the generated instance. */
  readonly generatedType: string;
}

/**
 * Result of adapting canonical `enviNFe` input to the generated schema-backed class.
 */
export interface GeneratedEnviNFeAdapterResult {
  /** Runtime class discriminator exposed by the generated instance. */
  readonly generatedType: string;
}

/**
 * Creates the internal generated representation for a canonical `NFe` input.
 *
 * @param input - Canonical NFe input accepted by the root facade.
 * @returns Internal generated evidence for the canonical document.
 */
export function buildGeneratedNFe(
  _input: CanonicalNFeInput,
): GeneratedNFeAdapterResult {
  return {
    generatedType: GENERATED_NFE_TYPE,
  };
}

/**
 * Creates the internal generated representation for a canonical `enviNFe` input.
 *
 * @param input - Canonical enviNFe input accepted by the root facade.
 * @param version - Normalized version to persist in the generated batch.
 * @returns Internal generated evidence for the canonical batch.
 */
export function buildGeneratedEnviNFe(
  _input: CanonicalEnviNFeInput,
  _version: CanonicalVersion,
): GeneratedEnviNFeAdapterResult {
  return {
    generatedType: GENERATED_ENVI_NFE_TYPE,
  };
}
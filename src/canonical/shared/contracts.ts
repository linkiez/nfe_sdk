const CANONICAL_SCHEMA_FAMILY = 'PL_010c_NT2022_002v1.30' as const;

/**
 * Supported canonical environment values for the initial SDK slice.
 */
export type CanonicalEnvironment = 'homologation' | 'production';

/**
 * Supported canonical version values for the initial SDK slice.
 */
export type CanonicalVersion = '4.00';

/**
 * Known gap types tracked by the initial canonical facade.
 */
export type FunctionalCoverageGapType =
  | 'derived-identifier-deferred'
  | 'unsupported-document'
  | 'xsd-validation-deferred';

/**
 * Deferred or unsupported capability explicitly tracked by the canonical facade.
 */
export interface FunctionalCoverageGap {
  /** Human-readable description of the deferred capability. */
  readonly description: string;
  /** Future phase or concern where the gap should be resolved. */
  readonly followUpPhase: string;
  /** Canonical gap category. */
  readonly gapType: FunctionalCoverageGapType;
  /** Impact note that explains why the gap matters. */
  readonly impact: string;
}

/**
 * Canonical public input for creating an `NFe` document.
 */
export interface CanonicalNFeInput {
  /** Free-form payload reserved for future manual fields in the canonical layer. */
  readonly payload?: Readonly<Record<string, string>>;
  /** Raw document identifier provided by the integrator. */
  readonly documentId: string;
  /** Raw target environment provided by the integrator. */
  readonly environment: string;
  /** Raw document version provided by the integrator. */
  readonly version: string;
}

/**
 * Canonical public input for creating an `enviNFe` batch.
 */
export interface CanonicalEnviNFeInput {
  /** Raw batch identifier provided by the integrator. */
  readonly batchId: string;
  /** NFe documents to include in the batch. */
  readonly documents: readonly CanonicalNFeInput[];
  /** Raw target environment provided by the integrator. */
  readonly environment: string;
  /** Raw document version provided by the integrator. */
  readonly version: string;
}

/**
 * Shared metadata persisted in canonical documents created by the facade.
 */
export interface CanonicalMetadata {
  /** Normalized environment for the canonical document. */
  readonly environment: CanonicalEnvironment;
  /** Generated adapter class recorded as provenance evidence. */
  readonly generatedType: string;
  /** Family of schemas that sustains the canonical slice. */
  readonly schemaFamily: typeof CANONICAL_SCHEMA_FAMILY;
  /** Normalized supported version. */
  readonly version: CanonicalVersion;
}

/**
 * Canonical `NFe` document returned by the root facade.
 */
export interface CanonicalNFeDocument {
  /** Deferred gaps explicitly associated with this document slice. */
  readonly deferredGaps: readonly FunctionalCoverageGap[];
  /** Semantic document kind. */
  readonly kind: 'NFe';
  /** Canonical document metadata. */
  readonly metadata: CanonicalMetadata & {
    /** Normalized document identifier. */
    readonly documentId: string;
  };
  /** Stable placeholder for user-provided body fragments in this first slice. */
  readonly payload: Readonly<Record<string, string>>;
}

/**
 * Canonical `enviNFe` batch returned by the root facade.
 */
export interface CanonicalEnviNFeDocument {
  /** Deferred gaps explicitly associated with this batch slice. */
  readonly deferredGaps: readonly FunctionalCoverageGap[];
  /** Semantic document kind. */
  readonly kind: 'enviNFe';
  /** Canonical batch metadata. */
  readonly metadata: CanonicalMetadata & {
    /** Normalized batch identifier. */
    readonly batchId: string;
  };
  /** Canonical NFe documents included in the batch. */
  readonly documents: readonly CanonicalNFeDocument[];
}

/**
 * Returns the schema family name used as provenance for the canonical slice.
 *
 * @returns The fixed schema family identifier for the first functional slice.
 */
export function getCanonicalSchemaFamily(): typeof CANONICAL_SCHEMA_FAMILY {
  return CANONICAL_SCHEMA_FAMILY;
}

/**
 * Normalizes a required canonical identifier.
 *
 * @param identifier - Raw identifier provided by the integrator.
 * @param label - Human-readable identifier label used in errors.
 * @returns The normalized identifier.
 * @throws {Error} When the identifier is blank.
 */
export function normalizeRequiredIdentifier(
  identifier: string,
  label: string,
): string {
  const normalizedIdentifier = identifier.trim();

  if (normalizedIdentifier.length === 0) {
    throw new Error(`${label} is required for the canonical facade.`);
  }

  return normalizedIdentifier;
}
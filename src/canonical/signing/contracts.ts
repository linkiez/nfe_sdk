const SIGNATURE_ALGORITHMS = [
  'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
  'http://www.w3.org/2001/04/xmlenc#sha256',
] as const;

const SOURCE_TYPES = ['file-path', 'in-memory-content'] as const;

type SignatureAlgorithm = (typeof SIGNATURE_ALGORITHMS)[number];
type SigningSourceType = (typeof SOURCE_TYPES)[number];

/**
 * Certificate source loaded from an in-memory PFX payload.
 */
export interface InMemorySigningSourceInput {
  contentBase64: string;
  type: 'in-memory-content';
}

/**
 * Certificate source loaded from a filesystem path.
 */
export interface FilePathSigningSourceInput {
  filePath: string;
  type: 'file-path';
}

/**
 * Public source shapes accepted to create a reusable signing context.
 */
export type SigningSourceInput =
  | FilePathSigningSourceInput
  | InMemorySigningSourceInput;

/**
 * Metadata exposed to callers about the origin of the signing material.
 */
export interface SigningSourceMetadata {
  filePath?: string;
  type: SigningSourceType;
}

/**
 * Public reusable signing context returned by the root facade.
 */
export interface SigningContext {
  certificateIdentity: string;
  sourceMetadata: SigningSourceMetadata;
  supportedAlgorithms: readonly SignatureAlgorithm[];
}

/**
 * Input required to derive a reusable signing context from A1 material.
 */
export interface CreateSigningContextInput {
  passphrase: string;
  source: SigningSourceInput;
}

/**
 * Input required to sign an unsigned NFe XML document.
 */
export interface SignNFeXmlInput {
  signingContext: SigningContext;
  unsignedXml: string;
}

/**
 * Report produced by local signature verification before returning signed XML.
 */
export interface SignatureVerificationReport {
  failureReason?: string;
  isValid: boolean;
  verifiedReference: string;
}

interface SigningRuntimeMaterial {
  privateKeyPem: string;
  publicCertPem: string;
}

const signingRuntimeByContext = new WeakMap<SigningContext, SigningRuntimeMaterial>();

/**
 * Supported algorithms exposed by the initial signing slice.
 */
export const SUPPORTED_SIGNATURE_ALGORITHMS = SIGNATURE_ALGORITHMS;

/**
 * Supported source type identifiers for reusable signing contexts.
 */
export const SUPPORTED_SIGNING_SOURCE_TYPES = SOURCE_TYPES;

/**
 * Associates runtime-only cryptographic material with a public signing context.
 *
 * @param signingContext - Public context returned to callers.
 * @param runtimeMaterial - Internal PEM material used by the signing operations.
 */
export function attachSigningRuntimeMaterial(
  signingContext: SigningContext,
  runtimeMaterial: SigningRuntimeMaterial,
): void {
  signingRuntimeByContext.set(signingContext, runtimeMaterial);
}

/**
 * Retrieves runtime-only cryptographic material for a previously created signing context.
 *
 * @param signingContext - Public context received from the caller.
 * @returns Internal runtime material if the context originated from this SDK instance.
 */
export function getSigningRuntimeMaterial(
  signingContext: SigningContext,
): SigningRuntimeMaterial | undefined {
  return signingRuntimeByContext.get(signingContext);
}
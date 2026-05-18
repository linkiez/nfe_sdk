export { createSigningContext } from './create-signing-context.js';
export { getDeferredSigningGaps } from './deferred-signing-gaps.js';
export { getSigningCoverageBoundary } from './coverage-boundary.js';
export { signNFeXml } from './sign-nfe-xml.js';

export type {
  CreateSigningContextInput,
  FilePathSigningSourceInput,
  InMemorySigningSourceInput,
  SignatureVerificationReport,
  SigningContext,
  SigningSourceInput,
} from './contracts.js';

export type { DeferredSigningGap } from './deferred-signing-gaps.js';
export type { SigningCoverageBoundary } from './coverage-boundary.js';
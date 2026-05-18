/**
 * Deferred capability explicitly tracked outside the initial signing slice.
 */
export interface DeferredSigningGap {
  code: string;
  description: string;
  type: 'scope-deferred';
}

const DEFERRED_SIGNING_GAPS: readonly DeferredSigningGap[] = [
  {
    code: 'enviNFe-independent-signing-deferred',
    description:
      'The initial slice keeps enviNFe as an unsigned transport envelope for a signed NFe.',
    type: 'scope-deferred',
  },
  {
    code: 'event-signing-deferred',
    description:
      'Event signing remains outside the first digital-signing slice.',
    type: 'scope-deferred',
  },
  {
    code: 'nfce-signing-deferred',
    description:
      'NFC-e signing remains outside the first digital-signing slice.',
    type: 'scope-deferred',
  },
  {
    code: 'soap-transport-deferred',
    description:
      'SOAP transport and authorization flow integration remain outside this slice.',
    type: 'scope-deferred',
  },
  {
    code: 'complete-access-key-derivation-deferred',
    description:
      'Complete access-key derivation, DV handling, and hashCSRT remain deferred.',
    type: 'scope-deferred',
  },
] as const;

/**
 * Returns the explicit backlog of capabilities deferred beyond the initial signing slice.
 *
 * @returns Stable deferred-gap list for documentation and validation.
 */
export function getDeferredSigningGaps(): readonly DeferredSigningGap[] {
  return DEFERRED_SIGNING_GAPS;
}
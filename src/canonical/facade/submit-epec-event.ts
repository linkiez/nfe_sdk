import { submitEPECEvent as submitEPECInternal } from '../nfe/submit-epec-event.js';
import type { EPECEventInput, EPECEventOutcome } from '../nfe/epec/contracts.js';

export type { EPECEventClassification, EPECEventInput, EPECEventOutcome, EPECSVCTarget } from '../nfe/epec/contracts.js';

/**
 * Builds and submits an EPEC contingency event to the appropriate SVC per MOC §3.3.
 *
 * @param input - Structured EPEC event input.
 * @returns Structured EPEC event outcome.
 */
export async function submitEPECEvent(
  input: EPECEventInput,
): Promise<EPECEventOutcome> {
  return submitEPECInternal(input);
}

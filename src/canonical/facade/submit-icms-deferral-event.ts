import { submitGenericEvents } from '../generic-event/submit-generic-events.js';
import type { GenericEventBatchOutcome } from '../generic-event/contracts.js';
import type { ICMSDeferralPayload } from '../generic-event/prorrogacao-icms-payload.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

/** Input for an ICMS industrial deferral event submission. */
export interface ICMSDeferralEventInput {
  /** Access key of the NF-e for which deferral is requested. */
  readonly accessKey: string;
  /** ICMS deferral payload with protocol and item list. */
  readonly payload: ICMSDeferralPayload;
  /** Timestamp recording when the event occurred (ISO-8601). */
  readonly occurredAt: string;
  /** CNPJ or CPF of the author (14 or 11 digits, unformatted). */
  readonly authorDocument: string;
  /** Document type of the event author. */
  readonly authorDocumentType: 'cpf' | 'cnpj';
  /** Target SEFAZ environment. */
  readonly environment: CanonicalEnvironment;
  /** Signing context holding the digital certificate. */
  readonly signingContext: SigningContext;
  /** HTTP executor used for SOAP transport. */
  readonly requestExecutor: RequestExecutor;
}

/**
 * Submits an ICMS industrial deferral event (event code `110764`,
 * family `prorrogacao-icms`) as a single-item generic-event batch.
 *
 * @param input - Structured ICMS deferral event input.
 * @returns Structured generic-event batch outcome.
 */
export async function submitICMSDeferralEvent(
  input: ICMSDeferralEventInput,
): Promise<GenericEventBatchOutcome> {
  return submitGenericEvents({
    batchId: `icms-deferral-${input.accessKey}`,
    environment: input.environment,
    signingContext: input.signingContext,
    requestExecutor: input.requestExecutor,
    items: [
      {
        accessKey: input.accessKey,
        author: {
          documentNumber: input.authorDocument,
          documentType: input.authorDocumentType,
        },
        eventCode: '110764',
        family: 'prorrogacao-icms',
        occurredAt: input.occurredAt,
        payload: input.payload,
        sequenceNumber: 1,
      },
    ],
  });
}

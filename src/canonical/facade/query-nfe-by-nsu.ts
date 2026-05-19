import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import { buildConsNSUXml, parseRetDistDFeIntForNSU } from '../recipient/query-nfe-by-nsu.js';
import type { RecipientActor, RecipientDistributionClassification, RecipientDocumentEnvelope } from '../recipient/recipient-shared.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

/**
 * Input for querying an NF-e document by its specific NSU.
 */
export interface RecipientNSUQuery {
  readonly actor: RecipientActor;
  readonly nsu: string;
  readonly environment: CanonicalEnvironment;
  readonly signingContext: SigningContext;
  readonly requestExecutor: RequestExecutor;
}

/**
 * Outcome of a specific-NSU NF-e query.
 */
export interface NSUQueryOutcome {
  readonly classification: RecipientDistributionClassification;
  readonly documents: readonly RecipientDocumentEnvelope[];
  readonly rawResponse?: string;
}

/**
 * Queries the SEFAZ distribution service for a specific NSU.
 *
 * @param input - Structured NSU query including actor and environment.
 * @returns Structured NSU query outcome.
 */
export async function queryNFeByNSU(input: RecipientNSUQuery): Promise<NSUQueryOutcome> {
  const payloadXml = buildConsNSUXml({
    actor: input.actor,
    environment: input.environment,
    nsu: input.nsu,
  });

  const transportOutcome = await executeNFeSoapService({
    environment: input.environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-recipient-distribution',
  });

  if (
    transportOutcome.classification === 'timeout' ||
    transportOutcome.classification === 'unavailable' ||
    transportOutcome.classification === 'usage-error' ||
    transportOutcome.classification === 'protocol-error'
  ) {
    return {
      classification: transportOutcome.classification as RecipientDistributionClassification,
      documents: [],
      rawResponse: transportOutcome.evidence.responseEnvelopeXml ?? undefined,
    };
  }

  return parseRetDistDFeIntForNSU(transportOutcome.evidence.responseEnvelopeXml ?? '');
}

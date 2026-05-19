import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import { buildConsChNFeXml, parseRetDistDFeIntForKey } from '../recipient/query-nfe-by-key.js';
import type { RecipientActor, RecipientDistributionClassification, RecipientDocumentEnvelope } from '../recipient/recipient-shared.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

/**
 * Input for querying an NF-e document by its access key.
 */
export interface RecipientAccessKeyQuery {
  readonly actor: RecipientActor;
  readonly chNFe: string;
  readonly environment: CanonicalEnvironment;
  readonly signingContext: SigningContext;
  readonly requestExecutor: RequestExecutor;
}

/**
 * Outcome of a specific access-key NF-e query.
 */
export interface AccessKeyQueryOutcome {
  readonly classification: RecipientDistributionClassification;
  readonly documents: readonly RecipientDocumentEnvelope[];
  readonly rawResponse?: string;
}

/**
 * Queries the SEFAZ distribution service for a specific NF-e access key.
 *
 * @param input - Structured access key query including actor and environment.
 * @returns Structured access key query outcome.
 */
export async function queryNFeByAccessKey(input: RecipientAccessKeyQuery): Promise<AccessKeyQueryOutcome> {
  const payloadXml = buildConsChNFeXml({
    actor: input.actor,
    chNFe: input.chNFe,
    environment: input.environment,
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

  return parseRetDistDFeIntForKey(transportOutcome.evidence.responseEnvelopeXml ?? '');
}

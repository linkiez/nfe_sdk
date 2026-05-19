import {
  buildConsReciNFeXml,
  parseRetConsReciNFe,
} from '../nfe/async-batch-retrieval.js';
import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type {
  NFeAsyncBatchClassification,
  NFeAsyncBatchOutcome,
  NFeAsyncBatchRetrievalInput,
} from '../nfe/contracts.js';

export type {
  AsyncBatchItemClassification,
  AsyncBatchItemResult,
  NFeAsyncBatchClassification,
  NFeAsyncBatchOutcome,
  NFeAsyncBatchRetrievalInput,
} from '../nfe/contracts.js';

/**
 * Retrieves the authorization status of an async NF-e batch by receipt number.
 *
 * Submits a `consReciNFe` request to the `NfeRetAutorizacao4` SEFAZ service and
 * returns a structured outcome with per-document classification per MOC §3.1.
 *
 * @param input - Batch retrieval input containing receipt number and transport context.
 * @returns Structured async batch outcome.
 */
export async function retrieveNFeAuthorizationBatch(
  input: NFeAsyncBatchRetrievalInput,
): Promise<NFeAsyncBatchOutcome> {
  const tpAmb: '1' | '2' = input.environment === 'production' ? '1' : '2';
  const payloadXml = buildConsReciNFeXml(input.nRec, tpAmb);

  const transportOutcome = await executeNFeSoapService({
    environment: input.environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-authorization-batch',
  });

  const rawResponse =
    transportOutcome.evidence.responseEnvelopeXml ?? '';

  if (
    transportOutcome.classification === 'timeout' ||
    transportOutcome.classification === 'unavailable' ||
    transportOutcome.classification === 'usage-error' ||
    transportOutcome.classification === 'protocol-error'
  ) {
    return {
      classification: transportOutcome.classification as NFeAsyncBatchClassification,
      items: [],
      rawResponse: rawResponse || undefined,
    };
  }

  return parseRetConsReciNFe(rawResponse);
}

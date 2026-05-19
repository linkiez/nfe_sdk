import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import {
  buildCadConsultaCadastroXml,
  parseRetConsCad,
} from '../recipient/query-contributor-registration.js';
import type {
  ContributorRegistrationClassification,
  ContributorRegistrationOutcome,
} from '../recipient/query-contributor-registration.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import type { SigningContext } from '../signing/contracts.js';
import type { RequestExecutor } from '../transport/request-executor.js';

export type { ContributorRegistrationOutcome, ContributorRegistrationClassification };

/**
 * Input for querying a contributor registration at SEFAZ.
 */
export interface ContributorRegistrationQuery {
  readonly cnpj?: string;
  readonly ie?: string;
  readonly uf: string;
  readonly environment: CanonicalEnvironment;
  readonly signingContext: SigningContext;
  readonly requestExecutor: RequestExecutor;
}

/**
 * Queries the SEFAZ contributor registration service (`CadConsultaCadastro4`).
 *
 * @param input - Structured contributor registration query.
 * @returns Structured contributor registration outcome.
 */
export async function queryContributorRegistration(
  input: ContributorRegistrationQuery,
): Promise<ContributorRegistrationOutcome> {
  const payloadXml = buildCadConsultaCadastroXml({
    cnpj: input.cnpj,
    environment: input.environment,
    ie: input.ie,
    uf: input.uf,
  });

  const transportOutcome = await executeNFeSoapService({
    environment: input.environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-contributor-registration',
  });

  if (
    transportOutcome.classification === 'timeout' ||
    transportOutcome.classification === 'unavailable' ||
    transportOutcome.classification === 'usage-error' ||
    transportOutcome.classification === 'protocol-error'
  ) {
    return {
      classification: transportOutcome.classification as ContributorRegistrationClassification,
      rawResponse: transportOutcome.evidence.responseEnvelopeXml ?? undefined,
    };
  }

  return parseRetConsCad(transportOutcome.evidence.responseEnvelopeXml ?? '');
}

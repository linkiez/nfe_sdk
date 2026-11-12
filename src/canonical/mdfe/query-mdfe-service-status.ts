import type { RequestExecutor } from '../transport/request-executor.js';

import type { MDFeEnvironment, MDFeOperationResult } from './contracts.js';
import { MDFE_LAYOUT_VERSION } from './contracts.js';
import { executeMDFeSoapService } from './execute-mdfe-soap-service.js';

const MDFE_NAMESPACE = 'http://www.portalfiscal.inf.br/mdfe';

/** Input of `queryMDFeServiceStatus`. */
export interface MDFeServiceStatusRequest {
  readonly environment: MDFeEnvironment;
  readonly requestExecutor?: RequestExecutor;
  readonly timeoutMs?: number;
}

/** Result of `queryMDFeServiceStatus`. */
export interface MDFeServiceStatusResult extends MDFeOperationResult {
  /** True only when the authorizer answered 107 (in operation). */
  readonly available: boolean;
  readonly observedAt: string;
}

/**
 * Asks the MDF-e authorizer whether its service is operating (`consStatServMDFe`).
 * Apps polling this service must wait at least 3 minutes between queries.
 *
 * @param input - Environment and mutual-TLS executor.
 * @returns The classified status; `available` only for 107.
 */
export async function queryMDFeServiceStatus(
  input: MDFeServiceStatusRequest,
): Promise<MDFeServiceStatusResult> {
  const tpAmb = input.environment === 'production' ? '1' : '2';
  const outcome = await executeMDFeSoapService({
    service: 'mdfe-status-service',
    environment: input.environment,
    payloadXml: `<consStatServMDFe xmlns="${MDFE_NAMESPACE}" versao="${MDFE_LAYOUT_VERSION}"><tpAmb>${tpAmb}</tpAmb><xServ>STATUS</xServ></consStatServMDFe>`,
    requestExecutor: input.requestExecutor,
    timeoutMs: input.timeoutMs,
  });
  const { responseXml: _responseXml, ...result } = outcome;

  return {
    ...result,
    available: outcome.classification === 'success',
    observedAt: new Date().toISOString(),
  };
}

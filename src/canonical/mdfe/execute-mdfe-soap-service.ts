import type { RequestExecutor } from '../transport/request-executor.js';
import { normalizeTransportTimeout } from '../transport/request-executor.js';

import { buildMDFeSoapEnvelope } from './build-mdfe-soap-envelope.js';
import type {
  MDFeEnvironment,
  MDFeOperationClassification,
  MDFeOperationResult,
} from './contracts.js';
import { MDFE_SERVICE_DEFINITIONS } from './mdfe-service-definitions.js';
import type { SupportedMDFeSoapService } from './mdfe-service-definitions.js';
import { MDFeTransportError } from './mdfe-transport-error.js';
import { resolveMDFeEndpoint } from './resolve-mdfe-endpoint.js';

const UNAVAILABLE_STATUS_CODES = ['108', '109'];
const WSDL_ACTION_ROOT = 'http://www.portalfiscal.inf.br/mdfe/wsdl';

/** Input of `executeMDFeSoapService`. */
export interface ExecuteMDFeSoapServiceInput {
  readonly service: SupportedMDFeSoapService;
  readonly environment: MDFeEnvironment;
  readonly payloadXml: string;
  /** Mutual-TLS executor (required: every MDF-e service demands a client certificate). */
  readonly requestExecutor?: RequestExecutor;
  readonly timeoutMs?: number;
  /** UF code for services that keep the SOAP header. */
  readonly headerUF?: string;
}

/** Outcome of one MDF-e web service call, with the raw answer for the caller to parse. */
export interface ExecuteMDFeSoapServiceOutcome extends MDFeOperationResult {
  /** SOAP envelope returned by the service. */
  readonly responseXml?: string;
}

const firstTag = (xml: string, tag: string): string | undefined =>
  new RegExp(`<${tag}>([^<]*)</${tag}>`, 'u').exec(xml)?.[1]?.trim();

/**
 * Sends one MDF-e message to its SVRS web service and classifies the answer by `cStat`.
 * Production is refused (`unsupported`) while the operation is not promoted (T086), and nothing
 * is sent without a mutual-TLS executor.
 *
 * @param input - Service, environment, message and executor.
 * @returns The classified outcome with the raw answer.
 * @throws {MDFeTransportError} When the executor fails for a reason other than a timeout.
 */
export async function executeMDFeSoapService(
  input: ExecuteMDFeSoapServiceInput,
): Promise<ExecuteMDFeSoapServiceOutcome> {
  const definition = MDFE_SERVICE_DEFINITIONS[input.service];
  const endpointUrl = resolveMDFeEndpoint(input.service, input.environment);
  const evidenceBase = { service: input.service, endpointUrl, environment: input.environment };
  const refuse = (
    classification: MDFeOperationClassification,
    failureReason: string,
  ): ExecuteMDFeSoapServiceOutcome => ({
    classification,
    failureReason,
    evidence: evidenceBase,
  });

  if (input.environment === 'production' && !definition.productionPromoted) {
    return refuse(
      'unsupported',
      `MDF-e operation "${input.service}" is not promoted to production yet.`,
    );
  }
  if (input.requestExecutor === undefined) {
    return refuse('usage-error', 'MDF-e services require an injected mutual-TLS requestExecutor.');
  }

  const requestEnvelopeXml = buildMDFeSoapEnvelope(input.service, input.payloadXml, {
    headerUF: input.headerUF,
  });
  const startedAt = Date.now();
  try {
    const response = await input.requestExecutor({
      endpointUrl,
      headers: {
        'content-type': `application/soap+xml; charset=utf-8; action="${WSDL_ACTION_ROOT}/${definition.wsdl}/${definition.method}"`,
      },
      requestXml: requestEnvelopeXml,
      service: input.service,
      timeoutMs: normalizeTransportTimeout(input.timeoutMs),
    });
    const evidence = {
      ...evidenceBase,
      httpStatus: response.status,
      durationMs: Date.now() - startedAt,
      requestEnvelopeXml,
      responseEnvelopeXml: response.responseXml,
    };
    const statusCode = firstTag(response.responseXml, 'cStat');
    const statusMessage = firstTag(response.responseXml, 'xMotivo');

    if (statusCode === undefined) {
      return {
        classification: 'protocol-error',
        failureReason: 'The answer did not expose an application status code.',
        responseXml: response.responseXml,
        evidence,
      };
    }

    const classification: MDFeOperationClassification = definition.successStatusCodes.includes(statusCode)
      ? 'success'
      : UNAVAILABLE_STATUS_CODES.includes(statusCode)
        ? 'unavailable'
        : 'functional-rejection';

    return { classification, statusCode, statusMessage, responseXml: response.responseXml, evidence };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        classification: 'timeout',
        failureReason: error.message,
        evidence: { ...evidenceBase, durationMs: Date.now() - startedAt, requestEnvelopeXml },
      };
    }
    throw new MDFeTransportError(
      error instanceof Error ? error.message : 'MDF-e SOAP transport execution failed.',
      { cause: error },
    );
  }
}

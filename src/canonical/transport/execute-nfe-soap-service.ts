import type { ExecuteNFeSoapServiceInput, TransportOutcome } from './contracts.js';
import { ExecuteNFeSoapServiceError } from './errors.js';
import { extractApplicationStatus } from './application-status.js';
import { classifyTransportOutcome } from './transport-outcome-classification.js';
import { fetchRequestExecutor } from './fetch-request-executor.js';
import { normalizeTransportTimeout } from './request-executor.js';
import { buildSoapEnvelope } from './soap-envelope.js';
import { resolveNFeServiceEndpoint } from './resolve-nfe-service-endpoint.js';

/**
 * Executes a supported SOAP service through the transport slice.
 *
 * @param input - Raw transport execution input from the public facade.
 * @returns Structured transport outcome for the executed request.
 * @throws {ExecuteNFeSoapServiceError} When the payload is blank or the response is missing.
 */
export async function executeNFeSoapService(
  input: ExecuteNFeSoapServiceInput,
): Promise<TransportOutcome> {
  const catalogEntry = resolveNFeServiceEndpoint({
    environment: input.environment,
    service: input.service,
  });
  const payloadXml = input.payloadXml.trim();
  const requestEnvelopeXml =
    payloadXml.length === 0
      ? ''
      : buildSoapEnvelope(catalogEntry.service, payloadXml);
  const requestExecutor = input.requestExecutor ?? fetchRequestExecutor;
  const timeoutMs = normalizeTransportTimeout(input.timeoutMs);

  if (payloadXml.length === 0) {
    return {
      classification: classifyTransportOutcome({
        failureKind: 'usage-error',
        service: catalogEntry.service,
      }),
      environment: catalogEntry.environment,
      evidence: {
        endpointUrl: catalogEntry.endpointUrl,
        provider: catalogEntry.provider,
        requestEnvelopeXml,
      },
      failureReason: 'payloadXml is required for transport.',
      service: catalogEntry.service,
    };
  }

  const startedAt = Date.now();
  try {
    const executionResponse = await requestExecutor({
      endpointUrl: catalogEntry.endpointUrl,
      headers: {
        'content-type': 'application/soap+xml; charset=utf-8',
      },
      requestXml: requestEnvelopeXml,
      service: catalogEntry.service,
      timeoutMs,
    });
    const durationMs = Date.now() - startedAt;

    if (executionResponse.responseXml.trim().length === 0) {
      return {
        classification: classifyTransportOutcome({
          failureKind: 'protocol-error',
          service: catalogEntry.service,
        }),
        environment: catalogEntry.environment,
        evidence: {
          durationMs,
          endpointUrl: catalogEntry.endpointUrl,
          httpStatus: executionResponse.status,
          provider: catalogEntry.provider,
          requestEnvelopeXml,
          responseEnvelopeXml: executionResponse.responseXml,
        },
        failureReason:
          'SOAP transport response XML is empty and cannot be classified.',
        service: catalogEntry.service,
      };
    }

    const applicationStatus = extractApplicationStatus(executionResponse.responseXml);

    if (applicationStatus.applicationStatusCode === undefined) {
      return {
        applicationStatusMessage: applicationStatus.applicationStatusMessage,
        classification: classifyTransportOutcome({
          failureKind: 'protocol-error',
          service: catalogEntry.service,
        }),
        environment: catalogEntry.environment,
        evidence: {
          durationMs,
          endpointUrl: catalogEntry.endpointUrl,
          httpStatus: executionResponse.status,
          provider: catalogEntry.provider,
          requestEnvelopeXml,
          responseEnvelopeXml: executionResponse.responseXml,
        },
        failureReason:
          'SOAP transport response did not expose an application status code.',
        service: catalogEntry.service,
      };
    }

    return {
      applicationStatusCode: applicationStatus.applicationStatusCode,
      applicationStatusMessage: applicationStatus.applicationStatusMessage,
      classification: classifyTransportOutcome({
        applicationStatusCode: applicationStatus.applicationStatusCode,
        failureKind: 'application-response',
        service: catalogEntry.service,
      }),
      environment: catalogEntry.environment,
      evidence: {
        durationMs,
        endpointUrl: catalogEntry.endpointUrl,
        httpStatus: executionResponse.status,
        provider: catalogEntry.provider,
        requestEnvelopeXml,
        responseEnvelopeXml: executionResponse.responseXml,
      },
      service: catalogEntry.service,
    };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        classification: classifyTransportOutcome({
          failureKind: 'timeout',
          service: catalogEntry.service,
        }),
        environment: catalogEntry.environment,
        evidence: {
          durationMs: Date.now() - startedAt,
          endpointUrl: catalogEntry.endpointUrl,
          provider: catalogEntry.provider,
          requestEnvelopeXml,
        },
        failureReason: error.message,
        service: catalogEntry.service,
      };
    }

    throw new ExecuteNFeSoapServiceError(
      error instanceof Error ? error.message : 'SOAP transport execution failed.',
    );
  }
}
import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { SupportedNFeSoapService } from '../transport/supported-services.js';
import type { TransportOutcome } from '../transport/contracts.js';
import { createUnsupportedOperationalScopeMessage } from './errors.js';
import type {
  NFeMaintenanceOperation,
  OperationalMaintenanceOutcome,
  OperationalMaintenanceRequest,
} from './contracts.js';
import { mapTransportOutcomeToMaintenanceClassification } from './transport-outcome-mapper.js';

const SUPPORTED_OPERATIONAL_ENVIRONMENT = 'homologation' as const;

/**
 * Public maintenance input accepted by operation-specific maintenance facades.
 */
export type OperationalMaintenanceFacadeInput = Omit<
  OperationalMaintenanceRequest,
  'operation'
>;

/**
 * Maps a transport outcome into the structured maintenance result.
 *
 * @param operation - Maintenance operation observed by the operational layer.
 * @param transportOutcome - Transport evidence produced by the SOAP slice.
 * @returns Structured maintenance result.
 */
export function mapOperationalMaintenanceTransportOutcome(
  operation: NFeMaintenanceOperation,
  transportOutcome: TransportOutcome,
): OperationalMaintenanceOutcome {
  const mappedTransport =
    mapTransportOutcomeToMaintenanceClassification(transportOutcome);

  return {
    applicationStatusCode: transportOutcome.applicationStatusCode,
    applicationStatusMessage: transportOutcome.applicationStatusMessage,
    classification: mappedTransport.classification,
    failureReason: mappedTransport.failureReason,
    operation,
    protocolNumber: extractFirstTagText(
      transportOutcome.evidence.responseEnvelopeXml ?? '',
      'nProt',
    ),
    transportOutcome,
  };
}

/**
 * Returns an explicit unsupported-scope maintenance result without attempting transport.
 *
 * @param operation - Requested maintenance operation.
 * @param requestedEnvironment - Raw environment requested by the caller.
 * @returns Structured maintenance outcome with explicit unsupported-scope boundary.
 */
export function createUnsupportedScopeMaintenanceOutcome(
  operation: NFeMaintenanceOperation,
  requestedEnvironment: string,
): OperationalMaintenanceOutcome {
  const failureReason = createUnsupportedOperationalScopeMessage({
    requestedEnvironment,
    requestedOperation: operation,
    supportedEnvironments: [SUPPORTED_OPERATIONAL_ENVIRONMENT],
  });

  return {
    classification: 'unsupported-scope',
    failureReason,
    operation,
    transportOutcome: {
      classification: 'usage-error',
      environment: SUPPORTED_OPERATIONAL_ENVIRONMENT,
      evidence: {
        endpointUrl: '',
        provider: 'SVAN',
        requestEnvelopeXml: '',
      },
      failureReason,
      service: mapOperationToService(operation),
    },
  };
}

/**
 * Executes a maintenance operation through the shared transport layer.
 *
 * @param input - Operation-specific maintenance request.
 * @returns Structured maintenance outcome for the attempted operation.
 */
export async function executeOperationalMaintenanceOperation(
  input: OperationalMaintenanceRequest,
): Promise<OperationalMaintenanceOutcome> {
  if (input.environment !== SUPPORTED_OPERATIONAL_ENVIRONMENT) {
    return createUnsupportedScopeMaintenanceOutcome(
      input.operation,
      input.environment,
    );
  }

  const transportOutcome = await executeNFeSoapService({
    environment: input.environment,
    payloadXml: createMaintenancePayloadXml(input),
    requestExecutor: input.requestExecutor,
    service: mapOperationToService(input.operation),
    timeoutMs: input.timeoutMs,
  });

  return mapOperationalMaintenanceTransportOutcome(input.operation, transportOutcome);
}

function createMaintenancePayloadXml(
  input: OperationalMaintenanceRequest,
): string {
  const rootElementName = getMaintenancePayloadRootElement(input.operation);
  const serializedPayload = serializeMaintenancePayload({
    accessKey: input.accessKey,
    canonicalPayload: input.canonicalPayload,
  });

  return `<${rootElementName} versao="4.00">${serializedPayload}</${rootElementName}>`;
}

function getMaintenancePayloadRootElement(
  operation: NFeMaintenanceOperation,
): 'envEvento' | 'inutNFe' {
  switch (operation) {
    case 'submit-nfe-inutilization':
      return 'inutNFe';
    case 'cancel-nfe':
    case 'submit-nfe-correction-letter':
      return 'envEvento';
    default:
      return 'envEvento';
  }
}

function serializeMaintenancePayload(input: {
  readonly accessKey?: string;
  readonly canonicalPayload: Readonly<Record<string, string>>;
}): string {
  const fieldEntries = input.accessKey
    ? [['chNFe', input.accessKey] as const, ...Object.entries(input.canonicalPayload)]
    : Object.entries(input.canonicalPayload);

  return fieldEntries
    .map(([fieldName, value]) => `<${fieldName}>${escapeXml(value)}</${fieldName}>`)
    .join('');
}

function mapOperationToService(
  operation: NFeMaintenanceOperation,
): SupportedNFeSoapService {
  switch (operation) {
    case 'cancel-nfe':
      return 'nfe-cancellation';
    case 'submit-nfe-correction-letter':
      return 'nfe-correction-letter';
    case 'submit-nfe-inutilization':
      return 'nfe-inutilization';
    default:
      return 'nfe-correction-letter';
  }
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function extractFirstTagText(xml: string, tagName: string): string | undefined {
  const match = new RegExp(`<${tagName}>([^<]+)</${tagName}>`, 'u').exec(xml);

  return match?.[1];
}
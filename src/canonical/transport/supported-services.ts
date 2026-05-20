const SUPPORTED_NFE_SOAP_SERVICES = [
  'nfe-status-service',
  'nfe-authorization',
  'nfe-authorization-batch',
  'nfce-authorization-pr',
  'nfce-authorization-sp',
  'nfe-inutilization',
  'nfe-cancellation',
  'nfe-correction-letter',
  'nfe-generic-event',
  'nfe-document-situation',
  'nfe-recipient-distribution',
  'nfe-recipient-manifestation',
  'nfe-contributor-registration',
] as const;

const PLANNED_OPERATIONAL_TRANSPORT_SERVICES = [] as const;

const SUPPORTED_CONTINGENCY_DIAGNOSTICS = ['svc-an', 'svc-rs'] as const;

/**
 * Supported SOAP service identifiers for the initial transport slice.
 */
export type SupportedNFeSoapService =
  (typeof SUPPORTED_NFE_SOAP_SERVICES)[number];

/**
 * Metadata that drives envelope assembly and outcome classification per service.
 */
export interface SupportedNFeSoapServiceDefinition {
  readonly documentFamily: 'nfe' | 'nfce';
  readonly requestElementName: string;
  readonly responseElementName: string;
  readonly service: SupportedNFeSoapService;
  readonly successStatusCodes: readonly string[];
  readonly unavailabilityStatusCodes: readonly string[];
}

/**
 * Internal placeholder recorded for future operational transport services.
 */
export interface PlannedOperationalTransportServiceDefinition {
  /** Domain family served by the placeholder. */
  readonly documentFamily: 'nfe' | 'nfce';
  /** XML element expected in the request body. */
  readonly requestElementName: string;
  /** XML element expected in the response body. */
  readonly responseElementName: string;
  /** Planned service identifier kept outside the public support list for now. */
  readonly service:
    | 'nfe-cancellation'
    | 'nfe-correction-letter'
    | 'nfe-inutilization';
}

export type SupportedContingencyDiagnostic =
  (typeof SUPPORTED_CONTINGENCY_DIAGNOSTICS)[number];

const SUPPORTED_SERVICE_DEFINITIONS: Readonly<
  Record<SupportedNFeSoapService, SupportedNFeSoapServiceDefinition>
> = {
  'nfe-authorization': {
    documentFamily: 'nfe',
    requestElementName: 'enviNFe',
    responseElementName: 'retEnviNFe',
    service: 'nfe-authorization',
    successStatusCodes: ['100', '103', '104'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-authorization-batch': {
    documentFamily: 'nfe',
    requestElementName: 'consReciNFe',
    responseElementName: 'retConsReciNFe',
    service: 'nfe-authorization-batch',
    successStatusCodes: ['104', '105'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfce-authorization-pr': {
    documentFamily: 'nfce',
    requestElementName: 'enviNFe',
    responseElementName: 'retEnviNFe',
    service: 'nfce-authorization-pr',
    successStatusCodes: ['100', '103', '104'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfce-authorization-sp': {
    documentFamily: 'nfce',
    requestElementName: 'enviNFe',
    responseElementName: 'retEnviNFe',
    service: 'nfce-authorization-sp',
    successStatusCodes: ['100', '103', '104'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-cancellation': {
    documentFamily: 'nfe',
    requestElementName: 'envEvento',
    responseElementName: 'retEnvEvento',
    service: 'nfe-cancellation',
    successStatusCodes: ['128'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-correction-letter': {
    documentFamily: 'nfe',
    requestElementName: 'envEvento',
    responseElementName: 'retEnvEvento',
    service: 'nfe-correction-letter',
    successStatusCodes: ['128'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-generic-event': {
    documentFamily: 'nfe',
    requestElementName: 'envEvento',
    responseElementName: 'retEnvEvento',
    service: 'nfe-generic-event',
    successStatusCodes: ['128'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-document-situation': {
    documentFamily: 'nfe',
    requestElementName: 'consSitNFe',
    responseElementName: 'retConsSitNFe',
    service: 'nfe-document-situation',
    successStatusCodes: ['100'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-recipient-distribution': {
    documentFamily: 'nfe',
    requestElementName: 'distDFeInt',
    responseElementName: 'retDistDFeInt',
    service: 'nfe-recipient-distribution',
    successStatusCodes: ['137', '138'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-recipient-manifestation': {
    documentFamily: 'nfe',
    requestElementName: 'envEvento',
    responseElementName: 'retEnvEvento',
    service: 'nfe-recipient-manifestation',
    successStatusCodes: ['128'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-contributor-registration': {
    documentFamily: 'nfe',
    requestElementName: 'CadConsultaCadastro4',
    responseElementName: 'retConsCad',
    service: 'nfe-contributor-registration',
    successStatusCodes: ['111', '112'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-inutilization': {
    documentFamily: 'nfe',
    requestElementName: 'inutNFe',
    responseElementName: 'retInutNFe',
    service: 'nfe-inutilization',
    successStatusCodes: ['102'],
    unavailabilityStatusCodes: ['108', '109'],
  },
  'nfe-status-service': {
    documentFamily: 'nfe',
    requestElementName: 'consStatServNFe',
    responseElementName: 'retConsStatServ',
    service: 'nfe-status-service',
    successStatusCodes: ['107'],
    unavailabilityStatusCodes: ['108', '109'],
  },
};

/**
 * Stable list of the SOAP services supported in the initial transport slice.
 */
export const SUPPORTED_TRANSPORT_SERVICES = SUPPORTED_NFE_SOAP_SERVICES;

/**
 * Normalizes a raw service identifier into one of the supported transport services.
 *
 * @param service - Raw service identifier provided by the caller.
 * @returns The normalized supported service or `undefined` when unsupported.
 */
export function normalizeSupportedTransportService(
  service: string,
): SupportedNFeSoapService | undefined {
  const normalizedService = service.trim().toLowerCase();

  return SUPPORTED_NFE_SOAP_SERVICES.find(
    (supportedService) => supportedService === normalizedService,
  );
}

/**
 * Returns the typed service definition for a supported transport operation.
 *
 * @param service - Supported SOAP service identifier.
 * @returns The transport metadata associated with the service.
 */
export function getSupportedTransportServiceDefinition(
  service: SupportedNFeSoapService,
): SupportedNFeSoapServiceDefinition {
  return SUPPORTED_SERVICE_DEFINITIONS[service];
}

/**
 * Returns the internal placeholders reserved for future transport work that is not yet published.
 *
 * @returns Read-only planned transport service definitions.
 */
export function getPlannedOperationalTransportServiceDefinitions(): readonly PlannedOperationalTransportServiceDefinition[] {
  return PLANNED_OPERATIONAL_TRANSPORT_SERVICES;
}

export function getSupportedContingencyDiagnostics():
  readonly SupportedContingencyDiagnostic[] {
  return SUPPORTED_CONTINGENCY_DIAGNOSTICS;
}
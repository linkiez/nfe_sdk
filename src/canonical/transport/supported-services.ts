const SUPPORTED_NFE_SOAP_SERVICES = [
  'nfe-status-service',
  'nfe-authorization',
] as const;

/**
 * Supported SOAP service identifiers for the initial transport slice.
 */
export type SupportedNFeSoapService =
  (typeof SUPPORTED_NFE_SOAP_SERVICES)[number];

/**
 * Metadata that drives envelope assembly and outcome classification per service.
 */
export interface SupportedNFeSoapServiceDefinition {
  readonly documentFamily: 'nfe';
  readonly requestElementName: string;
  readonly responseElementName: string;
  readonly service: SupportedNFeSoapService;
  readonly successStatusCodes: readonly string[];
  readonly unavailabilityStatusCodes: readonly string[];
}

const SUPPORTED_SERVICE_DEFINITIONS: Readonly<
  Record<SupportedNFeSoapService, SupportedNFeSoapServiceDefinition>
> = {
  'nfe-authorization': {
    documentFamily: 'nfe',
    requestElementName: 'enviNFe',
    responseElementName: 'retEnviNFe',
    service: 'nfe-authorization',
    successStatusCodes: ['103', '104'],
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
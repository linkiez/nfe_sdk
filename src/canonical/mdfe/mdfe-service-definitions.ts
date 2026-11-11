/** SOAP services of the MDF-e consume-only operations (SVRS national authorizer). */
export type SupportedMDFeSoapService =
  | 'mdfe-status-service'
  | 'mdfe-document-situation'
  | 'mdfe-not-closed'
  | 'mdfe-distribution';

/** Wire-level facts of one MDF-e web service. */
export interface MDFeServiceDefinition {
  readonly service: SupportedMDFeSoapService;
  /** Service name; also the last segment of the WSDL namespace and of the route. */
  readonly wsdl: string;
  /** SOAP method (last segment of the SOAP action). */
  readonly method: string;
  /** `cStat` values that mean the request was processed (anything else is a rejection). */
  readonly successStatusCodes: readonly string[];
  /** Layout version of the request message (`versao`). */
  readonly layoutVersion: string;
  /** True when the service still documents the `mdfeCabecMsg` SOAP header. */
  readonly soapHeader: boolean;
  /** Whether the operation was promoted to production with homologation evidence (feature 039). */
  readonly productionPromoted: boolean;
}

/**
 * Definitions from the MOC 3.00b services (MOC Online MDF-e, consulted 2026-11-11) and the SVRS
 * route register (`R-HOM-*`/`R-PROD-*`). Production stays off for every operation until each one
 * has homologation evidence (T086).
 */
export const MDFE_SERVICE_DEFINITIONS: Readonly<
  Record<SupportedMDFeSoapService, MDFeServiceDefinition>
> = {
  'mdfe-status-service': {
    service: 'mdfe-status-service',
    wsdl: 'MDFeStatusServico',
    method: 'mdfeStatusServicoMDF',
    successStatusCodes: ['107'],
    layoutVersion: '3.00',
    soapHeader: false,
    productionPromoted: false,
  },
  'mdfe-document-situation': {
    service: 'mdfe-document-situation',
    wsdl: 'MDFeConsulta',
    method: 'mdfeConsultaMDF',
    successStatusCodes: ['100', '101', '132'],
    layoutVersion: '3.00',
    soapHeader: false,
    productionPromoted: false,
  },
  'mdfe-not-closed': {
    service: 'mdfe-not-closed',
    wsdl: 'MDFeConsNaoEnc',
    method: 'mdfeConsNaoEnc',
    successStatusCodes: ['111', '112'],
    layoutVersion: '3.00',
    soapHeader: false,
    productionPromoted: false,
  },
  'mdfe-distribution': {
    service: 'mdfe-distribution',
    wsdl: 'MDFeDistribuicaoDFe',
    method: 'mdfeDistDFeInteresse',
    successStatusCodes: ['137', '138'],
    layoutVersion: '1.00',
    soapHeader: true,
    productionPromoted: false,
  },
};

import type { SupportedNFeSoapService } from './supported-services.js';

const SOAP_ENVELOPE_NAMESPACE = 'http://www.w3.org/2003/05/soap-envelope';

/**
 * Builds a SOAP 1.2 envelope around an application XML payload.
 *
 * @param service - Supported SOAP service identifier.
 * @param payloadXml - Application payload already prepared by the integrator.
 * @returns SOAP 1.2 envelope ready for transport.
 */
export function buildSoapEnvelope(
  service: SupportedNFeSoapService,
  payloadXml: string,
): string {
  const normalizedPayloadXml = payloadXml.trim();

  return [
    `<?xml version="1.0" encoding="utf-8"?>`,
    `<soap:Envelope xmlns:soap="${SOAP_ENVELOPE_NAMESPACE}">`,
    '<soap:Body>',
    normalizedPayloadXml,
    '</soap:Body>',
    '</soap:Envelope>',
  ].join('');
}

const WSDL_NAMESPACE_ROOT = 'http://www.portalfiscal.inf.br/nfe/wsdl';

/**
 * WSDL namespace and SOAP action per service, for services whose official 4.00 WSDL was
 * verified (NFeAutorizacao4, NFeRetAutorizacao4, NFeStatusServico4, NFeConsultaProtocolo4,
 * NFeInutilizacao4, NFeRecepcaoEvento4). Other services are added only after
 * their WSDL namespace is confirmed; asking for them fails instead of guessing.
 */
const VERIFIED_WIRE_SERVICES: Readonly<
  Partial<
    Record<
      SupportedNFeSoapService,
      { readonly action: string; readonly wrapper?: string; readonly wsdl: string }
    >
  >
> = {
  'nfe-authorization': { action: 'nfeAutorizacaoLote', wsdl: 'NFeAutorizacao4' },
  'nfe-recipient-distribution': {
    action: 'nfeDistDFeInteresse',
    wrapper: 'nfeDistDFeInteresse',
    wsdl: 'NFeDistribuicaoDFe',
  },
  'nfe-authorization-batch': { action: 'nfeRetAutorizacaoLote', wsdl: 'NFeRetAutorizacao4' },
  'nfe-status-service': { action: 'nfeStatusServicoNF', wsdl: 'NFeStatusServico4' },
  'nfe-document-situation': { action: 'nfeConsultaNF', wsdl: 'NFeConsultaProtocolo4' },
  'nfe-inutilization': { action: 'nfeInutilizacaoNF', wsdl: 'NFeInutilizacao4' },
  'nfe-recipient-manifestation': { action: 'nfeRecepcaoEvento', wsdl: 'NFeRecepcaoEvento4' },
  'nfe-cancellation': { action: 'nfeRecepcaoEvento', wsdl: 'NFeRecepcaoEvento4' },
  'nfe-correction-letter': { action: 'nfeRecepcaoEvento', wsdl: 'NFeRecepcaoEvento4' },
  'nfe-generic-event': { action: 'nfeRecepcaoEvento', wsdl: 'NFeRecepcaoEvento4' },
};

/**
 * Resolves the wire-level SOAP details of a service.
 *
 * @param service - Supported SOAP service identifier.
 * @returns The SOAP action URI and the `nfeDadosMsg` namespace.
 * @throws {Error} When the service WSDL namespace has not been verified.
 */
export function resolveWireService(service: SupportedNFeSoapService): {
  readonly actionUri: string;
  readonly namespaceUri: string;
  /** Operation element wrapping `nfeDadosMsg` (only for "Wrapped" services such as DF-e distribution). */
  readonly wrapper?: string;
} {
  const entry = VERIFIED_WIRE_SERVICES[service];

  if (!entry) {
    throw new Error(
      `SOAP wire format is not verified for service "${service}" yet.`,
    );
  }

  return {
    actionUri: `${WSDL_NAMESPACE_ROOT}/${entry.wsdl}/${entry.action}`,
    namespaceUri: `${WSDL_NAMESPACE_ROOT}/${entry.wsdl}`,
    wrapper: entry.wrapper,
  };
}

/**
 * Builds the SOAP 1.2 envelope exactly as the SEFAZ web services expect it: the
 * application XML (without XML declaration) inside `nfeDadosMsg` qualified by the
 * service WSDL namespace.
 *
 * @param service - Supported SOAP service identifier.
 * @param payloadXml - Application payload (for example a signed `enviNFe`).
 * @returns SOAP 1.2 envelope ready for transport.
 */
export function buildWireSoapEnvelope(
  service: SupportedNFeSoapService,
  payloadXml: string,
): string {
  const { namespaceUri, wrapper } = resolveWireService(service);
  const withoutDeclaration = payloadXml.trim().replace(/^<\?xml[^>]*\?>\s*/u, '');
  const body =
    wrapper === undefined
      ? `<nfeDadosMsg xmlns="${namespaceUri}">${withoutDeclaration}</nfeDadosMsg>`
      : `<${wrapper} xmlns="${namespaceUri}"><nfeDadosMsg>${withoutDeclaration}</nfeDadosMsg></${wrapper}>`;

  return [
    `<?xml version="1.0" encoding="utf-8"?>`,
    `<soap:Envelope xmlns:soap="${SOAP_ENVELOPE_NAMESPACE}">`,
    '<soap:Body>',
    body,
    '</soap:Body>',
    '</soap:Envelope>',
  ].join('');
}

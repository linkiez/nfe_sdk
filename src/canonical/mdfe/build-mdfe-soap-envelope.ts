import type { SupportedMDFeSoapService } from './mdfe-service-definitions.js';
import { MDFE_SERVICE_DEFINITIONS } from './mdfe-service-definitions.js';

const SOAP_ENVELOPE_NAMESPACE = 'http://www.w3.org/2003/05/soap-envelope';
const WSDL_NAMESPACE_ROOT = 'http://www.portalfiscal.inf.br/mdfe/wsdl';

/** Options of `buildMDFeSoapEnvelope`. */
export interface MDFeSoapEnvelopeOptions {
  /** UF code written to `mdfeCabecMsg/cUF`, only for services that keep the SOAP header. */
  readonly headerUF?: string;
}

/**
 * Builds the SOAP 1.2 envelope of a MDF-e web service: the message inside `mdfeDadosMsg`
 * qualified by the service WSDL namespace. The SOAP header was discontinued in MOC 3.00b and is
 * only written for the distribution service, which still documents it.
 *
 * @param service - MDF-e SOAP service.
 * @param payloadXml - Application message (XML declaration is removed).
 * @param options - Header UF for services that keep the header.
 * @returns SOAP 1.2 envelope text.
 */
export function buildMDFeSoapEnvelope(
  service: SupportedMDFeSoapService,
  payloadXml: string,
  options: MDFeSoapEnvelopeOptions = {},
): string {
  const definition = MDFE_SERVICE_DEFINITIONS[service];
  const namespace = `${WSDL_NAMESPACE_ROOT}/${definition.wsdl}`;
  const message = payloadXml.trim().replace(/^<\?xml[^>]*\?>\s*/u, '');
  const header = definition.soapHeader
    ? `<soap:Header><mdfeCabecMsg xmlns="${namespace}"><cUF>${options.headerUF ?? '91'}</cUF><versaoDados>${definition.layoutVersion}</versaoDados></mdfeCabecMsg></soap:Header>`
    : '';

  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    `<soap:Envelope xmlns:soap="${SOAP_ENVELOPE_NAMESPACE}">`,
    header,
    '<soap:Body>',
    `<mdfeDadosMsg xmlns="${namespace}">${message}</mdfeDadosMsg>`,
    '</soap:Body>',
    '</soap:Envelope>',
  ].join('');
}

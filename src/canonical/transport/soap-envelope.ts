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
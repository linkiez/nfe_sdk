import type { MDFeEnvironment } from './contracts.js';
import type { SupportedMDFeSoapService } from './mdfe-service-definitions.js';
import { MDFE_SERVICE_DEFINITIONS } from './mdfe-service-definitions.js';

const HOSTS: Readonly<Record<MDFeEnvironment, string>> = {
  homologation: 'https://mdfe-homologacao.svrs.rs.gov.br',
  production: 'https://mdfe.svrs.rs.gov.br',
};

/**
 * Resolves the SVRS route of a MDF-e service (route register `R-HOM-*`/`R-PROD-*`).
 *
 * @param service - MDF-e SOAP service.
 * @param environment - Target environment.
 * @returns The service endpoint URL.
 */
export function resolveMDFeEndpoint(
  service: SupportedMDFeSoapService,
  environment: MDFeEnvironment,
): string {
  const { wsdl } = MDFE_SERVICE_DEFINITIONS[service];

  return `${HOSTS[environment]}/ws/${wsdl}/${wsdl}.asmx`;
}

import type { NFeSEFAZProvider } from './contracts.js';
import { resolveNFeServiceEndpoint } from './resolve-nfe-service-endpoint.js';
import type { SupportedNFeSoapService } from './supported-services.js';

const SP_UF = '35';

/**
 * Picks the authorizer for an issuer UF: SP issuers use the SP routes whenever the catalog
 * has an entry for the service and environment; other UFs keep the environment default.
 *
 * @param issuerUF - 2-digit IBGE code of the issuer UF.
 * @param environment - Lower-cased target environment.
 * @param service - Service about to be called.
 * @returns `'SP'` when routable, otherwise `undefined` (environment default).
 */
export function resolveIssuerAuthorizer(
  issuerUF: string,
  environment: string,
  service: SupportedNFeSoapService,
): NFeSEFAZProvider | undefined {
  if (issuerUF !== SP_UF) {
    return undefined;
  }
  try {
    resolveNFeServiceEndpoint({ authorizer: 'SP', environment, service });
    return 'SP';
  } catch {
    return undefined;
  }
}

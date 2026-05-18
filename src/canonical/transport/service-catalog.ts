import type {
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
} from './contracts.js';

const TRANSPORT_CATALOG_VERSION = '2026-05-18-initial-draft' as const;

const SERVICE_CATALOG_ENTRIES: readonly ServiceCatalogEntry[] = [
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: [
        'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md',
        'specs/006-add-soap-transport/research.md',
      ],
    },
    service: 'nfe-status-service',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: [
        'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md',
        'specs/006-add-soap-transport/research.md',
      ],
    },
    service: 'nfe-authorization',
  },
];

/**
 * Published catalog version for the initial SOAP transport slice.
 */
export const INITIAL_TRANSPORT_CATALOG_VERSION = TRANSPORT_CATALOG_VERSION;

/**
 * Returns the current in-memory transport catalog entries.
 *
 * @returns Read-only transport catalog entries.
 */
export function getTransportServiceCatalog(): readonly ServiceCatalogEntry[] {
  return SERVICE_CATALOG_ENTRIES;
}

/**
 * Finds a catalog entry that matches the caller request exactly.
 *
 * @param input - Raw endpoint-resolution input received from the facade.
 * @returns Matching catalog entry when the combination exists.
 */
export function findTransportServiceCatalogEntry(
  input: ResolveNFeServiceEndpointInput,
): ServiceCatalogEntry | undefined {
  return SERVICE_CATALOG_ENTRIES.find(
    (entry) =>
      entry.environment === input.environment && entry.service === input.service,
  );
}
import type {
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
} from './contracts.js';
import {
  getInitialTransportCatalogProvenance,
  getOperationalTransportCatalogPlaceholders,
  getOperationalTransportCatalogSources,
} from './catalog-provenance.js';

const TRANSPORT_CATALOG_VERSION = '2026-05-18-initial-draft' as const;

const SERVICE_CATALOG_ENTRIES: readonly ServiceCatalogEntry[] = [
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-status-service',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-document-situation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-authorization',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-inutilization',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/RecepcaoEvento4/RecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-cancellation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/RecepcaoEvento4/RecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-correction-letter',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/RecepcaoEvento4/RecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-generic-event',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-recipient-distribution',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/RecepcaoEvento4/RecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-recipient-manifestation',
  },
];

const TRANSPORT_CATALOG_PLACEHOLDERS = getOperationalTransportCatalogPlaceholders();

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

/**
 * Returns the internal transport placeholders reserved for the operational MVP.
 *
 * @returns Read-only placeholder entries that do not yet publish new endpoints.
 */
export function getTransportCatalogPlaceholders():
  ReturnType<typeof getOperationalTransportCatalogPlaceholders> {
  return TRANSPORT_CATALOG_PLACEHOLDERS;
}
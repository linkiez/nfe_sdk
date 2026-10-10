import type {
  ResolveNFeServiceEndpointInput,
  ServiceCatalogEntry,
} from './contracts.js';
import {
  getInitialTransportCatalogProvenance,
  getNFeSPProductionTransportCatalogProvenance,
  getNFCePRPilotTransportCatalogProvenance,
  getNFCeSPPilotTransportCatalogProvenance,
  getObservableContingencyDiagnosticPlaceholders,
  getOperationalTransportCatalogPlaceholders,
  getOperationalTransportCatalogSources,
} from './catalog-provenance.js';

const TRANSPORT_CATALOG_VERSION = '2026-05-18-initial-draft' as const;
const SP_NFE_PRODUCTION_CATALOG_VERSION = '2026-10-10-sp-production' as const;

const SERVICE_CATALOG_ENTRIES: readonly ServiceCatalogEntry[] = [
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-status-service',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
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
    provider: 'SVCAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-authorization',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-authorization-batch',
  },
  {
    catalogVersion: SP_NFE_PRODUCTION_CATALOG_VERSION,
    endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFeSPProductionTransportCatalogProvenance(),
    service: 'nfe-authorization',
  },
  {
    catalogVersion: SP_NFE_PRODUCTION_CATALOG_VERSION,
    endpointUrl: 'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFeSPProductionTransportCatalogProvenance(),
    service: 'nfe-authorization-batch',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getNFCePRPilotTransportCatalogProvenance(),
    service: 'nfce-authorization-pr',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getNFCeSPPilotTransportCatalogProvenance(),
    service: 'nfce-authorization-sp',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
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
    provider: 'SVCAN',
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
    provider: 'SVCAN',
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
    provider: 'SVCAN',
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
    provider: 'SVCAN',
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
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-recipient-manifestation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/CadConsultaCadastro4/CadConsultaCadastro4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-contributor-registration',
  },

  // Production entries (SVCAN — Sefaz Virtual Ambiente Nacional)
  // Sources: docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md
  //          specs/012-implement-audit-gaps/research.md R5
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-status-service',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-document-situation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getInitialTransportCatalogProvenance(),
    service: 'nfe-authorization',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-authorization-batch',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getNFCePRPilotTransportCatalogProvenance(),
    service: 'nfce-authorization-pr',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: getNFCeSPPilotTransportCatalogProvenance(),
    service: 'nfce-authorization-sp',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-inutilization',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-cancellation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-correction-letter',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-generic-event',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-recipient-distribution',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-recipient-manifestation',
  },
  {
    catalogVersion: TRANSPORT_CATALOG_VERSION,
    endpointUrl:
      'https://www.sefazvirtual.fazenda.gov.br/CadConsultaCadastro4/CadConsultaCadastro4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: {
      sources: getOperationalTransportCatalogSources(),
    },
    service: 'nfe-contributor-registration',
  },
];

const TRANSPORT_CATALOG_PLACEHOLDERS = getOperationalTransportCatalogPlaceholders();
const CONTINGENCY_DIAGNOSTIC_PLACEHOLDERS =
  getObservableContingencyDiagnosticPlaceholders();

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
  const matchingEntries = SERVICE_CATALOG_ENTRIES.filter(
    (entry) =>
      entry.environment === input.environment &&
      entry.service === input.service &&
      (input.authorizer === undefined || entry.provider === input.authorizer),
  );

  return matchingEntries.length === 1 ? matchingEntries[0] : undefined;
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

export function getObservableContingencyDiagnosticCatalogPlaceholders():
  ReturnType<typeof getObservableContingencyDiagnosticPlaceholders> {
  return CONTINGENCY_DIAGNOSTIC_PLACEHOLDERS;
}
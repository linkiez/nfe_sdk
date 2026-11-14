import type { ServiceCatalogEntry } from './contracts.js';
import {
  getNFCeSPOfficialTransportCatalogProvenance,
  getOperationalTransportCatalogSources,
  withSvanUnificationNotice,
} from './catalog-provenance.js';

const NFCE_LIFECYCLE_CATALOG_VERSION = '2026-11-14-nfce-lifecycle' as const;

/**
 * Catalog entries of the NFC-e (model 65) lifecycle services: status, situation by access key,
 * events (cancellation and cancellation by substitution) and inutilization.
 *
 * - SP uses its own NFC-e hosts in both environments, as published by the SEFAZ/SP portal.
 * - Other UFs in homologation fall back to the national environment (SVC-AN), the same fallback
 *   the NFC-e authorization pilot uses.
 */
export const NFCE_LIFECYCLE_CATALOG_ENTRIES: readonly ServiceCatalogEntry[] = [
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeStatusServico4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-status-service',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://nfce.fazenda.sp.gov.br/ws/NFeStatusServico4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-status-service',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl:
      'https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: withSvanUnificationNotice({
      sources: getOperationalTransportCatalogSources(),
    }),
    service: 'nfce-status-service',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeConsultaProtocolo4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-document-situation',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://nfce.fazenda.sp.gov.br/ws/NFeConsultaProtocolo4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-document-situation',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl:
      'https://hom.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: withSvanUnificationNotice({
      sources: getOperationalTransportCatalogSources(),
    }),
    service: 'nfce-document-situation',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeRecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-event',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://nfce.fazenda.sp.gov.br/ws/NFeRecepcaoEvento4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-event',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl:
      'https://hom.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: withSvanUnificationNotice({
      sources: getOperationalTransportCatalogSources(),
    }),
    service: 'nfce-event',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeInutilizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-inutilization',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl: 'https://nfce.fazenda.sp.gov.br/ws/NFeInutilizacao4.asmx',
    environment: 'production',
    layoutVersion: '4.00',
    provider: 'SP',
    provenance: getNFCeSPOfficialTransportCatalogProvenance(),
    service: 'nfce-inutilization',
  },
  {
    catalogVersion: NFCE_LIFECYCLE_CATALOG_VERSION,
    endpointUrl:
      'https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
    environment: 'homologation',
    layoutVersion: '4.00',
    provider: 'SVCAN',
    provenance: withSvanUnificationNotice({
      sources: getOperationalTransportCatalogSources(),
    }),
    service: 'nfce-inutilization',
  },
];

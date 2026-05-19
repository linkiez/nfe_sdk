const OFFICIAL_SHARED_CATALOG_SOURCE =
  'docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md' as const;
const INITIAL_TRANSPORT_RESEARCH_SOURCE =
  'specs/006-add-soap-transport/research.md' as const;
const OPERATIONAL_MVP_RESEARCH_SOURCE =
  'specs/007-nfe-operational-mvp/research.md' as const;
const NFCE_NATIONAL_CORE_RESEARCH_SOURCE =
  'specs/010-nfce-national-core/research.md' as const;
const SP_NFCE_PORTAL_SOURCE =
  'docs/_sources/markdown/official/portal.fazenda.sp.gov.br/servicos/nfe/paginas/servicos-9594adb2c3.md' as const;

/**
 * Planned operational service identifier kept as internal catalog placeholder.
 */
export type PlannedOperationalTransportService =
  | 'nfe-cancellation'
  | 'nfe-correction-letter'
  | 'nfe-inutilization';

/**
 * Internal placeholder that records provenance for an operational service.
 */
export interface OperationalTransportCatalogPlaceholder {
  /** Notes that explain the placeholder status. */
  readonly notes: string;
  /** Element expected inside the SOAP request body. */
  readonly requestElementName: string;
  /** Element expected inside the SOAP response body. */
  readonly responseElementName: string;
  /** Planned operational service identifier. */
  readonly service: PlannedOperationalTransportService;
}

const OPERATIONAL_TRANSPORT_CATALOG_PLACEHOLDERS: readonly OperationalTransportCatalogPlaceholder[] =
  [];

/**
 * Returns the normative sources for the currently published transport catalog.
 *
 * @returns Stable provenance metadata for current transport entries.
 */
export function getInitialTransportCatalogProvenance(): {
  readonly sources: readonly string[];
} {
  return {
    sources: [OFFICIAL_SHARED_CATALOG_SOURCE, INITIAL_TRANSPORT_RESEARCH_SOURCE],
  };
}

/**
 * Returns internal provenance placeholders for future operational transport work.
 *
 * @returns Planned operational catalog placeholders that still remain unpublished.
 */
export function getOperationalTransportCatalogPlaceholders():
  readonly OperationalTransportCatalogPlaceholder[] {
  return OPERATIONAL_TRANSPORT_CATALOG_PLACEHOLDERS;
}

/**
 * Returns the primary sources that justify the operational catalog expansion work.
 *
 * @returns Stable list of provenance sources for feature 007 transport planning.
 */
export function getOperationalTransportCatalogSources(): readonly string[] {
  return [OFFICIAL_SHARED_CATALOG_SOURCE, OPERATIONAL_MVP_RESEARCH_SOURCE];
}

/**
 * Returns the provenance metadata for the first NFC-e SP pilot transport route.
 *
 * @returns Stable provenance metadata for the pilot catalog entry.
 */
export function getNFCeSPPilotTransportCatalogProvenance(): {
  readonly notes: string;
  readonly sources: readonly string[];
} {
  return {
    notes:
      'The first NFC-e slice publishes only the SP homologation pilot profile while broader per-UF routing remains deferred.',
    sources: [
      OFFICIAL_SHARED_CATALOG_SOURCE,
      SP_NFCE_PORTAL_SOURCE,
      NFCE_NATIONAL_CORE_RESEARCH_SOURCE,
    ],
  };
}
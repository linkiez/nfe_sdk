/** MDF-e layout version supported by the selected schema package. */
export const MDFE_LAYOUT_VERSION = '3.00';

/** Reasons a MDF-e XML cannot be read. */
export type MDFeParseErrorCode =
  | 'not-xml'
  | 'unsupported-root'
  | 'unsupported-version'
  | 'missing-field';

/** Environment of a MDF-e document or event (`tpAmb`). */
export type MDFeEnvironment = 'production' | 'homologation';

/** Transport modal of the MDF-e (`ide/modal`). */
export type MDFeModal = 'road' | 'air' | 'waterway' | 'rail' | 'unknown';

/** Protocol of authorization (`protMDFe/infProt`). */
export interface MDFeProtocol {
  readonly number: string;
  readonly statusCode: string;
  readonly statusMessage?: string;
  readonly receivedAt?: string;
  readonly digest?: string;
}

/** Totals of the manifest (`tot`). */
export interface MDFeTotals {
  /** Sum of the CT-e, NF-e and MDF-e counters informed. */
  readonly documents: number;
  readonly cargoValue?: string;
  readonly cargoQuantity?: string;
  readonly cargoUnit?: string;
}

/** Facts read from a MDF-e document (`MDFe` or `mdfeProc`). */
export interface MDFeDocumentSummary {
  readonly kind: 'document';
  readonly accessKey: string;
  readonly layoutVersion: string;
  readonly environment: MDFeEnvironment;
  readonly issuer: { readonly taxId: string; readonly name?: string };
  readonly series?: string;
  readonly number?: string;
  readonly issuedAt?: string;
  readonly modal: MDFeModal;
  readonly originUF?: string;
  readonly destinationUF?: string;
  readonly totals: MDFeTotals;
  /** Plates of the vehicles (`placa`), as stated in the XML. */
  readonly vehiclePlates: readonly string[];
  /** Drivers (`condutor`). */
  readonly drivers: readonly { readonly name?: string; readonly taxId?: string }[];
  /** IBGE codes of the unloading municipalities (`cMunDescarga`). */
  readonly unloadingMunicipalityCodes: readonly string[];
  /** NF-e, CT-e and MDF-e keys linked to the manifest. */
  readonly linkedDocuments: readonly {
    readonly kind: 'nfe' | 'cte' | 'mdfe';
    readonly accessKey: string;
  }[];
  /** True only when the protocol answered `cStat` 100. */
  readonly authorized: boolean;
  readonly protocol?: MDFeProtocol;
}

/** Event family of a MDF-e event. */
export type MDFeEventName = 'cancellation' | 'closure' | 'other';

/** Facts read from a MDF-e event (`procEventoMDFe` or `eventoMDFe`). */
export interface MDFeEventSummary {
  readonly kind: 'event';
  readonly accessKey: string;
  readonly layoutVersion: string;
  readonly environment: MDFeEnvironment;
  readonly eventType: string;
  readonly eventName: MDFeEventName;
  readonly sequence: number;
  readonly eventAt?: string;
  /** True when the authority answered 135 or 136 for the event. */
  readonly registered: boolean;
  readonly statusCode?: string;
  readonly statusMessage?: string;
  /** Event protocol (`retEventoMDFe/infEvento/nProt`). */
  readonly protocol?: string;
  readonly details: {
    readonly closureDate?: string;
    readonly closureUF?: string;
    readonly closureMunicipalityCode?: string;
    readonly authorizationProtocol?: string;
    readonly justification?: string;
  };
}

/** Result of `parseMDFeXml`. */
export type MDFeParsed = MDFeDocumentSummary | MDFeEventSummary;

/** Outcome classes of a MDF-e consume-only operation. */
export type MDFeOperationClassification =
  | 'success'
  | 'not-found'
  | 'functional-rejection'
  | 'unavailable'
  | 'timeout'
  | 'protocol-error'
  | 'usage-error'
  | 'unsupported';

/** Evidence of one MDF-e web service call (no secrets: only the message and the route). */
export interface MDFeTransportEvidence {
  readonly service: string;
  readonly endpointUrl: string;
  readonly environment: MDFeEnvironment;
  readonly httpStatus?: number;
  readonly durationMs?: number;
  readonly requestEnvelopeXml?: string;
  readonly responseEnvelopeXml?: string;
}

/** Common fields of every MDF-e operation result. */
export interface MDFeOperationResult {
  readonly classification: MDFeOperationClassification;
  /** Application `cStat` of the answer, when SEFAZ answered. */
  readonly statusCode?: string;
  readonly statusMessage?: string;
  /** Why the operation was refused or could not be classified. */
  readonly failureReason?: string;
  readonly evidence?: MDFeTransportEvidence;
}

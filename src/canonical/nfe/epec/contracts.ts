import type { SigningContext } from '../../signing/contracts.js';
import type { RequestExecutor } from '../../transport/request-executor.js';

/** SVC target for EPEC event routing. */
export type EPECSVCTarget = 'SVC-AN' | 'SVC-RS';

/** Execution environment for EPEC event submission. */
export type EPECEventEnvironment = 'homologation' | 'production';

/** Outcome classifications for EPEC event submission. */
export type EPECEventClassification =
  | 'registered'
  | 'rejected'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

/** Input to build and submit an EPEC contingency event per MOC §3.3. */
export interface EPECEventInput {
  /** Optional execution environment; defaults to homologation for compatibility. */
  readonly environment?: EPECEventEnvironment;
  /** NF-e access key of the document being pre-emitted. */
  readonly chNFe: string;
  /** Issuer CNPJ (14 digits, digits only). */
  readonly issuerCNPJ: string;
  /** Issuer state registration required for production EPEC. */
  readonly issuerIE?: string;
  /** NF-e direction (`0` entry or `1` exit); defaults to `1` for compatibility. */
  readonly tpNF?: '0' | '1';
  /** Recipient CNPJ (14 digits) or CPF (11 digits), digits only. */
  readonly recipientDocument: string;
  /** Recipient UF abbreviation, or `EX` for an international destination. */
  readonly recipientUF?: string;
  /** Recipient state registration when applicable. */
  readonly recipientIE?: string;
  /** NF-e total value (vNF), decimal formatted (e.g. '1000.00'). */
  readonly totalValue: string;
  /** NF-e ICMS total (vICMS); required for production EPEC. */
  readonly totalICMS?: string;
  /** NF-e ICMS substitution tax total (vST); required for production EPEC. */
  readonly totalICMSST?: string;
  /** Date-hour of emission in ISO 8601 with timezone offset (e.g. '2026-01-01T00:00:00-03:00'). */
  readonly emissionDateTime: string;
  /** UF IBGE code of the issuer (2 digits, e.g. '35' for SP). Determines SVC routing. */
  readonly issuerUF: string;
  readonly signingContext: SigningContext;
  readonly requestExecutor: RequestExecutor;
}

/** Result of an EPEC event submission. */
export interface EPECEventOutcome {
  readonly classification: EPECEventClassification;
  /** Access key associated with the EPEC event. */
  readonly documentKey?: string;
  /** Explicit event protocol when the EPEC is accepted. */
  readonly eventProtocol?: string;
  /** Action required after successful EPEC registration. */
  readonly nextAction?: 'transmitNFeAfterRecovery';
  /** SP's published reconciliation period for a registered EPEC, in days. */
  readonly reconciliationDeadlineDays?: 7;
  /** SEFAZ event protocol number when registered. */
  readonly protocolNumber?: string;
  /** Operational state; a registered EPEC still awaits the matching NF-e. */
  readonly state?: 'awaiting-recovery' | 'rejected' | 'unavailable' | 'inconclusive';
  /** Reason for a pre-transport usage boundary or malformed response. */
  readonly failureReason?: string;
  readonly svcTarget: EPECSVCTarget;
  readonly rawResponse?: string;
}

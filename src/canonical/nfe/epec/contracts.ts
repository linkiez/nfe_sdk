import type { SigningContext } from '../../signing/contracts.js';
import type { RequestExecutor } from '../../transport/request-executor.js';

/** SVC target for EPEC event routing. */
export type EPECSVCTarget = 'SVC-AN' | 'SVC-RS';

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
  /** NF-e access key of the document being pre-emitted. */
  readonly chNFe: string;
  /** Issuer CNPJ (14 digits, digits only). */
  readonly issuerCNPJ: string;
  /** Recipient CNPJ (14 digits) or CPF (11 digits), digits only. */
  readonly recipientDocument: string;
  /** NF-e total value (vNF), decimal formatted (e.g. '1000.00'). */
  readonly totalValue: string;
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
  /** SEFAZ event protocol number when registered. */
  readonly protocolNumber?: string;
  readonly svcTarget: EPECSVCTarget;
  readonly rawResponse?: string;
}

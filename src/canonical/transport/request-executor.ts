import type { SupportedNFeSoapService } from './supported-services.js';

const DEFAULT_TRANSPORT_TIMEOUT_MS = 5000;

/**
 * Structured HTTP response returned by a request executor implementation.
 */
export interface RequestExecutorResponse {
  readonly headers: Readonly<Record<string, string>>;
  readonly responseXml: string;
  readonly status: number;
}

/**
 * Input received by a request executor implementation.
 */
export interface RequestExecutorInput {
  readonly endpointUrl: string;
  readonly headers: Readonly<Record<string, string>>;
  readonly requestXml: string;
  readonly service: SupportedNFeSoapService;
  readonly timeoutMs: number;
}

/**
 * Contract for injecting transport execution into the SOAP slice.
 */
export type RequestExecutor = (
  input: RequestExecutorInput,
) => Promise<RequestExecutorResponse>;

/**
 * Returns the default timeout used by the transport slice.
 *
 * @returns Default timeout in milliseconds.
 */
export function getDefaultTransportTimeoutMs(): number {
  return DEFAULT_TRANSPORT_TIMEOUT_MS;
}

/**
 * Normalizes an optional transport timeout to the slice default when omitted.
 *
 * @param timeoutMs - Optional timeout provided by the caller.
 * @returns A positive timeout in milliseconds.
 */
export function normalizeTransportTimeout(timeoutMs?: number): number {
  if (timeoutMs === undefined) {
    return DEFAULT_TRANSPORT_TIMEOUT_MS;
  }

  return timeoutMs > 0 ? timeoutMs : DEFAULT_TRANSPORT_TIMEOUT_MS;
}
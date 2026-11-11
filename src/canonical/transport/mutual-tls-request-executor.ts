import { request } from 'node:https';
import { createSecureContext } from 'node:tls';
import { TransportError } from './errors.js';
import type {
  RequestExecutor,
  RequestExecutorInput,
  RequestExecutorResponse,
} from './request-executor.js';

/**
 * Options for the mutual TLS request executor.
 */
export interface MutualTlsRequestExecutorOptions {
  /**
   * Extra trusted roots (PEM) appended to the system store. SEFAZ endpoints are issued
   * by the ICP-Brasil chain, which is usually absent from the default Node.js store.
   */
  readonly ca?: string | Buffer | ReadonlyArray<string | Buffer>;
  /** Passphrase of the PKCS#12 client certificate; kept only in memory. */
  readonly passphrase: string;
  /** PKCS#12 (A1) client certificate bytes; kept only in memory. */
  readonly pfx: Buffer;
  /** Upper bound for every request; the smaller of this and the input timeout applies. */
  readonly timeoutMs?: number;
}

function createAbortError(timeoutMs: number): Error {
  const error = new Error(`SOAP request aborted after ${timeoutMs} ms.`);

  error.name = 'AbortError';

  return error;
}

function toHeaderRecord(
  headers: Readonly<Record<string, string | string[] | undefined>>,
): Readonly<Record<string, string>> {
  const record: Record<string, string> = {};

  for (const [name, value] of Object.entries(headers)) {
    if (value !== undefined) {
      record[name] = Array.isArray(value) ? value.join(', ') : value;
    }
  }

  return record;
}

/**
 * Creates a request executor that presents an A1 client certificate (mutual TLS 1.2+)
 * when calling SEFAZ web services.
 *
 * The certificate material stays in memory: nothing is logged, written or returned in
 * responses or errors. Invalid certificates are rejected at creation time, before any
 * network call. Timeouts reject with an `AbortError`, which the SOAP slice classifies
 * as `timeout`; every other failure becomes a `TransportError` (classified as
 * unavailable) carrying only the network error code.
 *
 * @param options - Client certificate, passphrase, optional trusted roots and timeout.
 * @returns A `RequestExecutor` usable by every SDK operation that accepts one.
 * @throws {TransportError} When the PKCS#12 bytes or passphrase are invalid.
 * @example
 * ```typescript
 * const executor = createMutualTlsRequestExecutor({ pfx, passphrase, ca: icpBrasilRoots });
 * await authorizeNFe({ ..., requestExecutor: executor });
 * ```
 */
export function createMutualTlsRequestExecutor(
  options: MutualTlsRequestExecutorOptions,
): RequestExecutor {
  const { passphrase, pfx } = options;

  try {
    createSecureContext({ passphrase, pfx });
  } catch {
    throw new TransportError(
      'Certificado digital PKCS#12 invalido ou senha incorreta.',
    );
  }

  const ca = options.ca as string | Buffer | Array<string | Buffer> | undefined;

  return (input: RequestExecutorInput): Promise<RequestExecutorResponse> => {
    const url = new URL(input.endpointUrl);

    if (url.protocol !== 'https:') {
      return Promise.reject(
        new TransportError('Mutual TLS requires an https endpoint.'),
      );
    }

    const timeoutMs = Math.min(
      input.timeoutMs,
      options.timeoutMs ?? Number.POSITIVE_INFINITY,
    );

    return new Promise<RequestExecutorResponse>((resolve, reject) => {
      const clientRequest = request(
        url,
        {
          ca,
          headers: {
            ...input.headers,
            'content-length': String(Buffer.byteLength(input.requestXml)),
          },
          method: 'POST',
          minVersion: 'TLSv1.2',
          passphrase,
          pfx,
        },
        (response) => {
          const chunks: Buffer[] = [];

          response.on('data', (chunk: Buffer) => chunks.push(chunk));
          response.on('end', () => {
            clearTimeout(timer);
            resolve({
              headers: toHeaderRecord(response.headers),
              responseXml: Buffer.concat(chunks).toString('utf8'),
              status: response.statusCode ?? 0,
            });
          });
          response.on('error', onError);
        },
      );
      const timer = setTimeout(() => {
        clientRequest.destroy(createAbortError(timeoutMs));
      }, timeoutMs);

      function onError(error: Error): void {
        clearTimeout(timer);
        if (error.name === 'AbortError') {
          reject(error);
          return;
        }
        const code = (error as NodeJS.ErrnoException).code;

        reject(
          new TransportError(
            `Falha de transporte TLS mutuo${code ? ` (${code})` : ''}.`,
          ),
        );
      }

      clientRequest.on('error', onError);
      clientRequest.end(input.requestXml);
    });
  };
}

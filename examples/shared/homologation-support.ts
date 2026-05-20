import { readFile } from 'node:fs/promises';
import { request as httpsRequest } from 'node:https';

const DEFAULT_TIMEOUT_MS = 15_000;

interface SoapRequestInput {
  endpointUrl: string;
  headers: Readonly<Record<string, string>>;
  requestXml: string;
  timeoutMs: number;
}

interface SoapResponse {
  headers: Readonly<Record<string, string>>;
  responseXml: string;
  status: number;
}

interface MutualTlsExecutorOptions {
  certificatePath: string;
  passphrase: string;
}

/**
 * Reads a required environment variable and fails fast when it is missing.
 *
 * @param name - Environment variable name.
 * @returns The configured environment variable value.
 * @throws {Error} When the environment variable is empty or missing.
 */
export function readRequiredEnvironmentValue(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

/**
 * Parses a timeout value from the environment while preserving a safe default.
 *
 * @param value - Raw timeout value in milliseconds.
 * @returns A validated timeout in milliseconds.
 * @throws {Error} When the provided timeout is not a positive integer.
 */
export function resolveTimeoutMs(value: string | undefined): number {
  if (!value) {
    return DEFAULT_TIMEOUT_MS;
  }

  const timeoutMs = Number.parseInt(value, 10);

  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error('NFE_REQUEST_TIMEOUT_MS must be a positive integer.');
  }

  return timeoutMs;
}

/**
 * Loads a local certificate file and returns its base64-encoded content.
 *
 * @param certificatePath - Absolute or relative path to a `.pfx` certificate file.
 * @returns The certificate content encoded as base64.
 */
export async function loadFileAsBase64(
  certificatePath: string,
): Promise<string> {
  const certificate = await readFile(certificatePath);
  return certificate.toString('base64');
}

/**
 * Creates a mutual-TLS SOAP request executor compatible with the public SDK facades.
 *
 * @param options - Certificate path and passphrase used for the HTTPS client certificate.
 * @returns A request executor that forwards the SOAP XML to the resolved SEFAZ endpoint.
 */
export async function createMutualTlsRequestExecutor(
  options: MutualTlsExecutorOptions,
): Promise<(input: SoapRequestInput) => Promise<SoapResponse>> {
  const certificate = await readFile(options.certificatePath);

  return async (input: SoapRequestInput): Promise<SoapResponse> =>
    new Promise<SoapResponse>((resolve, reject) => {
      const endpointUrl = new URL(input.endpointUrl);
      const request = httpsRequest(
        {
          headers: {
            ...input.headers,
            'content-length': String(Buffer.byteLength(input.requestXml)),
          },
          host: endpointUrl.hostname,
          method: 'POST',
          passphrase: options.passphrase,
          path: `${endpointUrl.pathname}${endpointUrl.search}`,
          pfx: certificate,
          port: endpointUrl.port
            ? Number.parseInt(endpointUrl.port, 10)
            : undefined,
          protocol: endpointUrl.protocol,
          rejectUnauthorized: true,
          servername: endpointUrl.hostname,
        },
        (response) => {
          const chunks: Buffer[] = [];

          response.on('data', (chunk: Buffer | string) => {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          });
          response.on('end', () => {
            resolve({
              headers: response.headers as Readonly<Record<string, string>>,
              responseXml: Buffer.concat(chunks).toString('utf8'),
              status: response.statusCode ?? 0,
            });
          });
        },
      );

      request.on('error', reject);
      request.setTimeout(input.timeoutMs, () => {
        request.destroy(
          new Error(`Request timed out after ${input.timeoutMs}ms.`),
        );
      });
      request.write(input.requestXml);
      request.end();
    });
}

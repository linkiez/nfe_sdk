import type {
  RequestExecutor,
  RequestExecutorInput,
  RequestExecutorResponse,
} from './request-executor.js';

function toHeaderRecord(headers: Headers): Readonly<Record<string, string>> {
  const headerRecord: Record<string, string> = {};

  headers.forEach((value, key) => {
    headerRecord[key] = value;
  });

  return headerRecord;
}

/**
 * Default request executor backed by Node.js `fetch` and `AbortController`.
 *
 * @param input - Request execution input prepared by the transport slice.
 * @returns Structured HTTP response used by the transport pipeline.
 */
export const fetchRequestExecutor: RequestExecutor = async (
  input: RequestExecutorInput,
): Promise<RequestExecutorResponse> => {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, input.timeoutMs);

  try {
    const response = await fetch(input.endpointUrl, {
      body: input.requestXml,
      headers: input.headers,
      method: 'POST',
      signal: abortController.signal,
    });
    const responseXml = await response.text();

    return {
      headers: toHeaderRecord(response.headers),
      responseXml,
      status: response.status,
    };
  } finally {
    clearTimeout(timeoutId);
  }
};
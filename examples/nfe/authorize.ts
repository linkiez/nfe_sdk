/**
 * Required environment variables:
 * - NFE_CERT_PFX_PATH
 * - NFE_CERT_PASSPHRASE
 * - NFE_DOCUMENT_ID
 *
 * Optional environment variables:
 * - NFE_REQUEST_TIMEOUT_MS
 */
import { authorizeNFe, createSigningContext } from 'nfe-sdk';

import {
  createMutualTlsRequestExecutor,
  loadFileAsBase64,
  readRequiredEnvironmentValue,
  resolveTimeoutMs,
} from '../shared/homologation-support.js';

async function main(): Promise<void> {
  const certificatePath = readRequiredEnvironmentValue('NFE_CERT_PFX_PATH');
  const passphrase = readRequiredEnvironmentValue('NFE_CERT_PASSPHRASE');
  const documentId = readRequiredEnvironmentValue('NFE_DOCUMENT_ID');
  const certificateBase64 = await loadFileAsBase64(certificatePath);
  const signingContext = await createSigningContext({
    passphrase,
    source: {
      contentBase64: certificateBase64,
      type: 'in-memory-content',
    },
  });
  const requestExecutor = await createMutualTlsRequestExecutor({
    certificatePath,
    passphrase,
  });
  const outcome = await authorizeNFe({
    documents: {
      kind: 'single-document',
      payload: {
        documentId,
        environment: 'homologation',
        version: '4.00',
      },
    },
    environment: 'homologation',
    requestExecutor,
    signingContext,
    timeoutMs: resolveTimeoutMs(process.env.NFE_REQUEST_TIMEOUT_MS),
  });

  process.stdout.write(`${JSON.stringify(outcome, null, 2)}\n`);
}

main().catch((error: unknown) => {
  const message =
    error instanceof Error ? error.message : 'Unknown authorization error';
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
});

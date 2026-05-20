/**
 * Required environment variables:
 * - NFE_CERT_PFX_PATH
 * - NFE_CERT_PASSPHRASE
 * - NFE_ACCESS_KEY
 * - NFE_ACTOR_DOCUMENT_NUMBER
 *
 * Optional environment variables:
 * - NFE_ACTOR_DOCUMENT_TYPE (`cpf` or `cnpj`, default: `cnpj`)
 * - NFE_MANIFEST_EVENT_TYPE
 * - NFE_MANIFEST_JUSTIFICATION
 * - NFE_REQUEST_TIMEOUT_MS
 */
import { createSigningContext, manifestRecipientOperation } from 'nfe-sdk';

import {
  createMutualTlsRequestExecutor,
  loadFileAsBase64,
  readRequiredEnvironmentValue,
  resolveTimeoutMs,
} from '../shared/homologation-support.js';

const allowedDocumentTypes = ['cpf', 'cnpj'] as const;
const allowedEventTypes = [
  'ciencia-da-operacao',
  'confirmacao-da-operacao',
  'desconhecimento-da-operacao',
  'operacao-nao-realizada',
] as const;

type ActorDocumentType = (typeof allowedDocumentTypes)[number];
type ManifestEventType = (typeof allowedEventTypes)[number];

function resolveActorDocumentType(
  value: string | undefined,
): ActorDocumentType {
  if (!value) {
    return 'cnpj';
  }

  if (allowedDocumentTypes.includes(value as ActorDocumentType)) {
    return value as ActorDocumentType;
  }

  throw new Error('NFE_ACTOR_DOCUMENT_TYPE must be `cpf` or `cnpj`.');
}

function resolveManifestEventType(
  value: string | undefined,
): ManifestEventType {
  if (!value) {
    return 'ciencia-da-operacao';
  }

  if (allowedEventTypes.includes(value as ManifestEventType)) {
    return value as ManifestEventType;
  }

  throw new Error(
    'NFE_MANIFEST_EVENT_TYPE must be one of: ciencia-da-operacao, confirmacao-da-operacao, desconhecimento-da-operacao, operacao-nao-realizada.',
  );
}

async function main(): Promise<void> {
  const certificatePath = readRequiredEnvironmentValue('NFE_CERT_PFX_PATH');
  const passphrase = readRequiredEnvironmentValue('NFE_CERT_PASSPHRASE');
  const accessKey = readRequiredEnvironmentValue('NFE_ACCESS_KEY');
  const documentNumber = readRequiredEnvironmentValue(
    'NFE_ACTOR_DOCUMENT_NUMBER',
  );
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
  const eventType = resolveManifestEventType(
    process.env.NFE_MANIFEST_EVENT_TYPE,
  );
  const outcome = await manifestRecipientOperation({
    accessKey,
    actor: {
      documentNumber,
      documentType: resolveActorDocumentType(
        process.env.NFE_ACTOR_DOCUMENT_TYPE,
      ),
    },
    environment: 'homologation',
    eventType,
    justification: process.env.NFE_MANIFEST_JUSTIFICATION,
    requestExecutor,
    signingContext,
    timeoutMs: resolveTimeoutMs(process.env.NFE_REQUEST_TIMEOUT_MS),
  });

  process.stdout.write(`${JSON.stringify(outcome, null, 2)}\n`);
}

try {
  await main();
} catch (error: unknown) {
  const message =
    error instanceof Error ? error.message : 'Unknown manifestation error';
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
}

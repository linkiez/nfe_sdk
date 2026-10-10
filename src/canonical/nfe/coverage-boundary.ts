import { resolveUFAutorizador } from '../transport/uf-routing.js';
import {
  createObservableContingencyBoundaryMessage,
  UnknownUFError,
} from '../transport/errors.js';
import { NFeOperationalUsageError } from './errors.js';

import type {
  NFeAuthorizationOutcome,
  NFeContingencyBoundary,
  NFeContingencyEnvironment,
} from './contracts.js';

const CONTINGENCY_BOUNDARY_CODE = 'nfe-contingency-boundary' as const;

export function createNFeContingencyBoundary(
  contingencyEnvironment: NFeContingencyEnvironment,
  issuerUF: string,
): NFeContingencyBoundary {
  return {
    code: CONTINGENCY_BOUNDARY_CODE,
    contingencyEnvironment,
    issuerUF,
    message: createObservableContingencyBoundaryMessage({
      contingencyEnvironment,
      issuerUF,
    }),
    retryable: true,
  };
}

export function createNFeContingencyBoundaryOutcome(
  contingencyEnvironment: NFeContingencyEnvironment,
  issuerUF: string,
): NFeAuthorizationOutcome {
  const coverageBoundary = createNFeContingencyBoundary(
    contingencyEnvironment,
    issuerUF,
  );

  return {
    classification: 'contingency-boundary',
    coverageBoundary,
    documentStatuses: [],
    failureReason: coverageBoundary.message,
    transportOutcome: {
      classification: 'usage-error',
      environment: 'production',
      evidence: {
        endpointUrl: '',
        provider: contingencyEnvironment === 'SVC-RS' ? 'SVCRS' : 'SVCAN',
        requestEnvelopeXml: '',
      },
      failureReason: coverageBoundary.message,
      service: 'nfe-authorization',
    },
  };
}

export function resolveNFeContingencyBoundary(
  input: unknown,
): NFeAuthorizationOutcome | undefined {
  const issuerUF = resolveIssuerUFCode(input);

  if (issuerUF === undefined) {
    return undefined;
  }

  try {
    const routing = resolveUFAutorizador(issuerUF);

    if (routing.autorizador === 'SVCAN') {
      return createNFeContingencyBoundaryOutcome('SVC-AN', issuerUF);
    }

    if (routing.autorizador === 'SVCRS') {
      return createNFeContingencyBoundaryOutcome('SVC-RS', issuerUF);
    }

    return undefined;
  } catch (error) {
    if (error instanceof UnknownUFError) {
      return undefined;
    }

    throw error;
  }
}

/**
 * Resolves a consistent issuer UF from NF-e payload fields and access keys.
 *
 * @param input - Single-document or batch payload to inspect.
 * @returns The two-digit issuer UF code shared by every document.
 * @throws {NFeOperationalUsageError} When issuer identity is absent, malformed, or inconsistent.
 */
export function resolveNFeIssuerUF(input: unknown): string {
  const documents = getNFeDocuments(input);
  const issuerUFs = documents.map(resolveDocumentIssuerUF);
  const uniqueIssuerUFs = new Set(issuerUFs);

  if (uniqueIssuerUFs.size !== 1) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity must be consistent across all documents.',
    );
  }

  const [issuerUF] = uniqueIssuerUFs;

  try {
    resolveUFAutorizador(issuerUF);
  } catch (error) {
    if (error instanceof UnknownUFError) {
      throw new NFeOperationalUsageError(
        `NF-e issuer identity contains unknown UF code "${issuerUF}".`,
      );
    }

    throw error;
  }

  return issuerUF;
}

function resolveIssuerUFCode(input: unknown): string | undefined {
  try {
    return resolveNFeIssuerUF(input);
  } catch (error) {
    if (error instanceof NFeOperationalUsageError) {
      return undefined;
    }

    throw error;
  }
}

function getNFeDocuments(input: unknown): readonly Record<string, unknown>[] {
  if (!isRecord(input)) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity is required for production authorization.',
    );
  }

  let documents: readonly unknown[];

  if (Array.isArray(input.documents)) {
    documents = input.documents;
  } else if (
    input.kind === 'NFe' ||
    'documentId' in input ||
    'metadata' in input
  ) {
    documents = [input];
  } else {
    documents = [];
  }

  if (documents.length === 0 || !documents.every(isRecord)) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity is required for every production document.',
    );
  }

  return documents;
}

function resolveDocumentIssuerUF(document: Record<string, unknown>): string {
  const payloadUF = resolvePayloadUF(document);
  const accessKeyUF = resolveAccessKeyUF(document);

  if (payloadUF !== undefined && accessKeyUF !== undefined && payloadUF !== accessKeyUF) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity conflicts between cUF and access key.',
    );
  }

  const issuerUF = payloadUF ?? accessKeyUF;

  if (issuerUF === undefined) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity requires cUF or a 44-digit access key.',
    );
  }

  return issuerUF;
}

function resolvePayloadUF(document: Record<string, unknown>): string | undefined {
  const payload = isRecord(document.payload) ? document.payload : undefined;
  const rawUF = payload?.cUF;

  if (rawUF === undefined) {
    return undefined;
  }

  if (typeof rawUF !== 'string' || !/^\d{2}$/u.test(rawUF.trim())) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity contains a malformed cUF.',
    );
  }

  return rawUF.trim();
}

function resolveAccessKeyUF(document: Record<string, unknown>): string | undefined {
  const metadata = isRecord(document.metadata) ? document.metadata : undefined;
  const rawDocumentId = document.documentId ?? metadata?.documentId;

  if (rawDocumentId === undefined) {
    return undefined;
  }

  if (typeof rawDocumentId !== 'string') {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity contains a malformed documentId.',
    );
  }

  const normalizedDocumentId = rawDocumentId.trim();

  if (normalizedDocumentId.length !== 44) {
    return undefined;
  }

  if (!/^\d{44}$/u.test(normalizedDocumentId)) {
    throw new NFeOperationalUsageError(
      'NF-e issuer identity contains a malformed 44-digit access key.',
    );
  }

  return normalizedDocumentId.slice(0, 2);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
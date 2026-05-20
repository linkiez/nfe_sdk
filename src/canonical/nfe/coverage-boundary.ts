import { resolveUFAutorizador } from '../transport/uf-routing.js';
import {
  createObservableContingencyBoundaryMessage,
  UnknownUFError,
} from '../transport/errors.js';

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

function resolveIssuerUFCode(input: unknown): string | undefined {
  if (!isRecord(input)) {
    return undefined;
  }

  const payload = input.payload;

  if (isRecord(payload) && typeof payload.cUF === 'string') {
    const normalized = payload.cUF.trim();

    return /^\d{2}$/u.test(normalized) ? normalized : undefined;
  }

  if (typeof input.documentId === 'string') {
    const normalizedDocumentId = input.documentId.trim();

    if (/^\d{44}$/u.test(normalizedDocumentId)) {
      return normalizedDocumentId.slice(0, 2);
    }
  }

  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
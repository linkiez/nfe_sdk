import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import { buildNFeAuthorizationBatch } from './authorization-batch.js';
import { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
import {
  resolveNFeContingencyBoundary,
  resolveNFeIssuerUF,
} from './coverage-boundary.js';
import { createAuthorizationPayloadXml } from './authorization-payload.js';
import { queryNFeServiceStatus } from './query-nfe-service-status.js';
import type {
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeContingencyMode,
  NFeContingencyState,
  NFeRecoveryContext,
  NFeRecoveryState,
  NFeSVCActivationObservation,
} from './contracts.js';
import type { NFeSEFAZProvider } from '../transport/contracts.js';
import type { SupportedNFeSoapService } from '../transport/supported-services.js';
import {
  createUnsupportedOperationalScopeMessage,
  NFeOperationalUnsupportedScopeError,
  NFeOperationalUsageError,
} from './errors.js';

interface NFeAuthorizationExecutionOptions {
  readonly authorizer?: NFeSEFAZProvider;
  readonly transportService?: SupportedNFeSoapService;
  readonly tpEmis?: string;
}

/**
 * Authorizes a supported canonical NFe submission through the operational slice.
 *
 * @param input - Structured authorization request from the root facade.
 * @returns Structured authorization outcome for the attempted submission.
 * @throws {NFeOperationalUsageError} When the signing context is missing.
 * @throws {NFeOperationalUnsupportedScopeError} When the requested environment is outside the MVP scope.
 */
export async function authorizeNFe(
  input: NFeAuthorizationRequest,
  options?: NFeAuthorizationExecutionOptions,
): Promise<NFeAuthorizationOutcome> {
  const normalizedEnvironment = input.environment.trim().toLowerCase();
  let issuerUF: string | undefined;

  if (!input.signingContext) {
    throw new NFeOperationalUsageError(
      'authorizeNFe requires a signingContext created by this SDK.',
    );
  }

  if (input.recoveryContext !== undefined) {
    if (input.contingency !== undefined) {
      return createRecoveryBoundaryOutcome(
        input.recoveryContext,
        'A recovery authorization cannot also request a new contingency mode.',
        'inconclusive',
        'reconcileNFeReceipt',
      );
    }
    return authorizeNFeRecovery(input, normalizedEnvironment);
  }

  if (input.contingency !== undefined) {
    return authorizeNFeContingency(input, normalizedEnvironment);
  }

  if (normalizedEnvironment === 'production') {
    issuerUF = resolveNFeIssuerUF(input.documents.payload);

    if (issuerUF !== '35') {
      const contingencyBoundary = resolveNFeContingencyBoundary(
        input.documents.payload,
      );

      if (contingencyBoundary) {
        return contingencyBoundary;
      }

      throw new NFeOperationalUnsupportedScopeError(
        `authorizeNFe production currently supports issuer UF 35 only; received "${issuerUF}".`,
      );
    }

    if (!input.requestExecutor) {
      throw new NFeOperationalUsageError(
        'Production authorizeNFe requires an injected requestExecutor for mTLS.',
      );
    }
  }

  if (normalizedEnvironment !== 'homologation' && issuerUF !== '35') {
    throw new NFeOperationalUnsupportedScopeError(
      createUnsupportedOperationalScopeMessage({
        requestedEnvironment: input.environment,
        requestedOperation: 'authorizeNFe',
        supportedEnvironments: ['homologation', 'production (SP only)'],
      }),
    );
  }

  const outcome = await executeAuthorization(
    input,
    normalizedEnvironment,
    issuerUF,
    options,
  );

  return { ...outcome, executionMode: 'normal' };
}

async function authorizeNFeRecovery(
  input: NFeAuthorizationRequest,
  normalizedEnvironment: string,
): Promise<NFeAuthorizationOutcome> {
  const recoveryContext = input.recoveryContext;
  if (recoveryContext === undefined) {
    throw new NFeOperationalUsageError(
      'A recovery context is required for this authorization path.',
    );
  }

  if (recoveryContext.mode === 'svc-an') {
    return createRecoveryBoundaryOutcome(
      recoveryContext,
      'SVC-AN recovery must reconcile its existing receipt; this operation never retransmits the document.',
      'inconclusive',
      'reconcileNFeReceipt',
    );
  }

  if (recoveryContext.mode === 'fs-da') {
    return createRecoveryBoundaryOutcome(
      recoveryContext,
      'FS-DA recovery remains an operator-assisted, unverified procedure.',
      'unavailable',
    );
  }

  const documentKey = resolveContingencyDocumentKey(
    input,
    recoveryContext.documentKey,
  );
  if (
    normalizedEnvironment !== 'production' ||
    documentKey === undefined ||
    resolveNFeIssuerUF(input.documents.payload) !== '35' ||
    recoveryContext.eventProtocol === undefined ||
    !/^\d{15}$/u.test(recoveryContext.eventProtocol)
  ) {
    return createRecoveryBoundaryOutcome(
      recoveryContext,
      'EPEC recovery requires production SP authorization, the matching single-document access key, and a valid 15-digit event protocol.',
      'inconclusive',
    );
  }

  if (!input.requestExecutor) {
    return createRecoveryBoundaryOutcome(
      recoveryContext,
      'EPEC recovery requires an injected mTLS-capable requestExecutor.',
      'unavailable',
    );
  }

  const outcome = await executeAuthorization(
    input,
    normalizedEnvironment,
    '35',
    { authorizer: 'SP', tpEmis: '4' },
  );
  const recoveryState = mapRecoveryState(outcome.classification);

  return {
    ...outcome,
    contingencyState: recoveryState,
    documentKey,
    eventProtocol: recoveryContext.eventProtocol,
    executionMode: 'epec',
    nextAction:
      outcome.nextAction ??
      (recoveryState === 'pending' ? 'reconcileNFeReceipt' : undefined),
    recoveryContext,
    recoveryState,
  };
}

async function authorizeNFeContingency(
  input: NFeAuthorizationRequest,
  normalizedEnvironment: string,
): Promise<NFeAuthorizationOutcome> {
  const contingency = input.contingency;
  if (contingency === undefined) {
    throw new NFeOperationalUsageError(
      'A contingency request is required for this authorization path.',
    );
  }

  const documentKey = resolveContingencyDocumentKey(input, contingency.documentKey);
  if (normalizedEnvironment !== 'production') {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      'SP NF-e contingency is supported only in production.',
      'unsupported',
      documentKey,
    );
  }

  let issuerUF: string;
  try {
    issuerUF = resolveNFeIssuerUF(input.documents.payload);
  } catch (error) {
    if (error instanceof NFeOperationalUsageError) {
      return createContingencyBoundaryOutcome(
        contingency.mode,
        error.message,
        'unsupported',
        documentKey,
      );
    }
    throw error;
  }

  if (issuerUF !== '35' || documentKey === undefined) {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      'SP contingency requires one matching 44-digit SP NF-e access key.',
      'unsupported',
      documentKey,
    );
  }

  const previousSubmission = contingency.previousSubmission;
  if (
    previousSubmission?.documentKey === documentKey &&
    isUncertainAuthorization(previousSubmission.classification)
  ) {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      'An uncertain prior authorization for this access key must be reconciled before contingency submission.',
      'inconclusive',
      documentKey,
    );
  }

  if (contingency.mode === 'fs-da') {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      'FS-DA is an assisted, unverified SP procedure and is not an automated authorization route.',
      'operator-assisted',
      documentKey,
    );
  }

  if (contingency.mode === 'epec') {
    return {
      ...createContingencyBoundaryOutcome(
        contingency.mode,
        'Register EPEC explicitly with submitEPECEvent; this operation does not transmit an EPEC event.',
        'unsupported',
        documentKey,
      ),
      nextAction: 'submitEPECEvent',
    };
  }

  if (!input.requestExecutor) {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      'SVC-AN contingency requires an injected mTLS-capable requestExecutor.',
      'unavailable',
      documentKey,
    );
  }

  let activationSnapshot: Awaited<ReturnType<typeof queryNFeServiceStatus>>;
  try {
    activationSnapshot = await queryNFeServiceStatus({
      authorizer: 'SVCAN',
      environment: 'production',
      requestExecutor: input.requestExecutor,
      timeoutMs: input.timeoutMs,
    });
  } catch (error) {
    return createContingencyBoundaryOutcome(
      contingency.mode,
      `SVC-AN activation status could not be verified: ${getErrorMessage(error)}`,
      'unavailable',
      documentKey,
    );
  }

  const activationEvidence: NFeSVCActivationObservation = {
    environment: 'production',
    observedAt: activationSnapshot.observedAt,
    provider: 'SVCAN',
    statusCode: activationSnapshot.applicationStatusCode,
  };
  if (
    activationSnapshot.transportOutcome.environment !== 'production' ||
    activationSnapshot.responseEnvironment !== 'production' ||
    activationSnapshot.applicationStatusCode !== '107' ||
    activationSnapshot.transportOutcome.classification !== 'success'
  ) {
    return {
      ...createContingencyBoundaryOutcome(
        contingency.mode,
        'SVC-AN authorization requires a fresh production status response with cStat 107.',
        activationSnapshot.transportOutcome.classification === 'unavailable'
          ? 'unavailable'
          : 'inconclusive',
        documentKey,
      ),
      activationEvidence,
    };
  }

  const outcome = await executeAuthorization(
    input,
    normalizedEnvironment,
    issuerUF,
    { authorizer: 'SVCAN', tpEmis: '6' },
  );

  return {
    ...outcome,
    activationEvidence,
    contingencyState: 'activation-verified',
    documentKey,
    executionMode: 'svc-an',
  };
}

async function executeAuthorization(
  input: NFeAuthorizationRequest,
  normalizedEnvironment: string,
  issuerUF: string | undefined,
  options?: NFeAuthorizationExecutionOptions,
): Promise<NFeAuthorizationOutcome> {
  const batch = buildNFeAuthorizationBatch(input.documents);
  const tpEmis = options?.tpEmis;
  const authorizationBatch =
    tpEmis === undefined
      ? batch
      : {
          ...batch,
          documents: batch.documents.map((document) => ({
            ...document,
            payload: { ...document.payload, tpEmis },
          })),
        };
  const payloadXml = createAuthorizationPayloadXml(authorizationBatch);
  const transportOutcome = await executeNFeSoapService({
    authorizer: options?.authorizer ?? (issuerUF === '35' ? 'SP' : undefined),
    environment: normalizedEnvironment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: options?.transportService ?? 'nfe-authorization',
    timeoutMs: input.timeoutMs,
  });

  return mapAuthorizationTransportOutcome(authorizationBatch, transportOutcome);
}

function createContingencyBoundaryOutcome(
  mode: NFeContingencyMode,
  reason: string,
  state: NFeContingencyState,
  documentKey?: string,
): NFeAuthorizationOutcome {
  const provider = mode === 'svc-an' || mode === 'epec' ? 'SVCAN' : 'SP';

  return {
    classification: 'contingency-boundary',
    contingencyState: state,
    documentKey,
    documentStatuses: [],
    executionMode: mode,
    failureReason: reason,
    transportOutcome: {
      classification: 'usage-error',
      environment: 'production',
      evidence: { endpointUrl: '', provider, requestEnvelopeXml: '' },
      failureReason: reason,
      service: 'nfe-authorization',
    },
  };
}

function createRecoveryBoundaryOutcome(
  recoveryContext: NFeRecoveryContext,
  reason: string,
  recoveryState: NFeRecoveryState,
  nextAction?: NFeAuthorizationOutcome['nextAction'],
): NFeAuthorizationOutcome {
  let contingencyState: NFeContingencyState;
  switch (recoveryState) {
    case 'reconciled':
    case 'pending':
    case 'rejected':
    case 'unavailable':
    case 'inconclusive':
      contingencyState = recoveryState;
      break;
  }

  return {
    ...createContingencyBoundaryOutcome(
      recoveryContext.mode,
      reason,
      contingencyState,
      recoveryContext.documentKey,
    ),
    eventProtocol: recoveryContext.eventProtocol,
    nextAction,
    recoveryContext,
    recoveryState,
  };
}

function mapRecoveryState(
  classification: NFeAuthorizationOutcome['classification'],
): NFeRecoveryState {
  switch (classification) {
    case 'authorized':
      return 'reconciled';
    case 'rejected':
      return 'rejected';
    case 'received':
      return 'pending';
    case 'timeout':
    case 'unavailable':
      return 'unavailable';
    default:
      return 'inconclusive';
  }
}

function resolveContingencyDocumentKey(
  input: NFeAuthorizationRequest,
  requestedKey: string | undefined,
): string | undefined {
  if (input.documents.kind !== 'single-document') {
    return undefined;
  }

  const document = input.documents.payload;
  const rawDocumentKey =
    'metadata' in document
      ? document.metadata.documentId
      : document.documentId;
  const documentKey = rawDocumentKey.trim();
  if (!/^\d{44}$/u.test(documentKey)) {
    return undefined;
  }

  if (requestedKey !== undefined && requestedKey !== documentKey) {
    return undefined;
  }

  return documentKey;
}

function isUncertainAuthorization(
  classification: NFeAuthorizationOutcome['classification'],
): boolean {
  return ['received', 'timeout', 'unavailable', 'protocol-error'].includes(
    classification,
  );
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Unknown transport error.';
}
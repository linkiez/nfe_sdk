import { createContingencyBoundaryOutcome } from './contingency-boundary-outcome.js';
import type { BuiltNFeDocument } from './builder/build-nfe-document.js';
import type {
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeSVCActivationObservation,
} from './contracts.js';
import { queryNFeServiceStatus } from './query-nfe-service-status.js';
import { submitBuiltDocument } from './submit-built-document.js';

const UNCERTAIN_CLASSIFICATIONS: readonly string[] = [
  'received',
  'timeout',
  'unavailable',
  'protocol-error',
];

/**
 * Contingency authorization of a built document. Only `svc-an` is automated: it needs a fresh
 * status `107` of the SVC-AN service, then sends the document (built with `tpEmis` 6) once to the
 * SVC-AN authorizer. `fs-da` and `epec` stay explicit boundaries, and an uncertain prior
 * submission of the same key must be reconciled first.
 *
 * @param input - Authorization request with `contingency` and a `built-document`.
 * @param built - The built document.
 * @param environment - Lower-cased target environment.
 * @returns The authorization outcome or a `contingency-boundary` explaining why nothing was sent.
 */
export async function authorizeBuiltDocumentSvcAn(
  input: NFeAuthorizationRequest,
  built: BuiltNFeDocument,
  environment: string,
): Promise<NFeAuthorizationOutcome> {
  const contingency = input.contingency;
  if (contingency === undefined) {
    throw new Error('authorizeBuiltDocumentSvcAn requires a contingency request.');
  }
  const mode = contingency.mode;
  const documentKey = built.accessKey;

  if (contingency.documentKey !== undefined && contingency.documentKey !== documentKey) {
    return createContingencyBoundaryOutcome(
      mode,
      'The contingency documentKey does not match the built document.',
      'unsupported',
      documentKey,
    );
  }
  const previous = contingency.previousSubmission;
  if (
    previous?.documentKey === documentKey &&
    UNCERTAIN_CLASSIFICATIONS.includes(previous.classification)
  ) {
    return createContingencyBoundaryOutcome(
      mode,
      'An uncertain prior authorization for this access key must be reconciled before contingency submission.',
      'inconclusive',
      documentKey,
    );
  }
  if (mode === 'fs-da') {
    return createContingencyBoundaryOutcome(
      mode,
      'FS-DA is an assisted, unverified SP procedure and is not an automated authorization route.',
      'operator-assisted',
      documentKey,
    );
  }
  if (mode === 'epec') {
    return {
      ...createContingencyBoundaryOutcome(
        mode,
        'Register EPEC explicitly with submitEPECEvent; this operation does not transmit an EPEC event.',
        'unsupported',
        documentKey,
      ),
      nextAction: 'submitEPECEvent',
    };
  }
  if (!input.requestExecutor) {
    return createContingencyBoundaryOutcome(
      mode,
      'SVC-AN contingency requires an injected mTLS-capable requestExecutor.',
      'unavailable',
      documentKey,
    );
  }

  const tpAmb: 'homologation' | 'production' =
    environment === 'production' ? 'production' : 'homologation';
  let snapshot: Awaited<ReturnType<typeof queryNFeServiceStatus>>;
  try {
    snapshot = await queryNFeServiceStatus({
      authorizer: 'SVCAN',
      environment: tpAmb,
      issuerUF: documentKey.slice(0, 2),
      requestExecutor: input.requestExecutor,
      timeoutMs: input.timeoutMs,
      wireFormat: true,
    });
  } catch (error) {
    return createContingencyBoundaryOutcome(
      mode,
      `SVC-AN activation status could not be verified: ${error instanceof Error ? error.message : 'Unknown transport error.'}`,
      'unavailable',
      documentKey,
    );
  }

  const activationEvidence: NFeSVCActivationObservation = {
    environment: tpAmb,
    observedAt: snapshot.observedAt,
    provider: 'SVCAN',
    statusCode: snapshot.applicationStatusCode,
  };
  if (
    snapshot.transportOutcome.environment !== tpAmb ||
    snapshot.responseEnvironment !== tpAmb ||
    snapshot.applicationStatusCode !== '107' ||
    snapshot.transportOutcome.classification !== 'success'
  ) {
    return {
      ...createContingencyBoundaryOutcome(
        mode,
        'SVC-AN authorization requires a fresh status response with cStat 107.',
        snapshot.transportOutcome.classification === 'unavailable' ? 'unavailable' : 'inconclusive',
        documentKey,
      ),
      activationEvidence,
    };
  }

  const outcome = await submitBuiltDocument(input, built, environment, 'SVCAN');

  return {
    ...outcome,
    activationEvidence,
    contingencyState: 'activation-verified',
    documentKey,
    executionMode: 'svc-an',
  };
}

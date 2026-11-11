import { signNFeXml } from '../signing/sign-nfe-xml.js';
import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';
import type { NFeSEFAZProvider } from '../transport/contracts.js';
import { resolveIssuerAuthorizer } from '../transport/issuer-authorizer.js';

import { assembleNfeProc } from './assemble-nfe-proc.js';
import { buildNFeAuthorizationBatch } from './authorization-batch.js';
import { mapAuthorizationTransportOutcome } from './authorization-outcome.js';
import type { BuiltNFeDocument } from './builder/build-nfe-document.js';
import type { NFeAuthorizationOutcome, NFeAuthorizationRequest } from './contracts.js';
import { NFeOperationalUsageError } from './errors.js';
import { stripXmlDeclaration } from './strip-xml-declaration.js';

const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';

function resolveBatchId(batchId: string | undefined): string {
  if (batchId === undefined) {
    return String(Date.now()).padStart(15, '0').slice(-15);
  }
  if (!/^\d{1,15}$/u.test(batchId)) {
    throw new NFeOperationalUsageError('batchId (idLote) must contain 1 to 15 digits.');
  }
  return batchId;
}

/**
 * Signs a built document, sends it as a synchronous `enviNFe` in the SEFAZ SOAP envelope and
 * classifies the answer, including denials and rejections reported inside the batch protocol.
 *
 * @param input - Authorization request whose `documents.kind` is `built-document`.
 * @param built - The built document.
 * @param environment - Lower-cased target environment.
 * @param authorizer - Authorizer to use; defaults to the one of the issuer UF (`SVCAN` in contingency).
 * @returns Outcome with the sent `signedXml` and, when authorized, the `authorizedXml`.
 */
export async function submitBuiltDocument(
  input: NFeAuthorizationRequest,
  built: BuiltNFeDocument,
  environment: string,
  authorizer?: NFeSEFAZProvider,
): Promise<NFeAuthorizationOutcome> {
  if (input.documents.kind !== 'built-document') {
    throw new NFeOperationalUsageError('submitBuiltDocument requires a built-document.');
  }
  const issuerUF = built.accessKey.slice(0, 2);
  const signedXml = stripXmlDeclaration(
    await signNFeXml({ signingContext: input.signingContext, unsignedXml: built.xml }),
  );
  const payloadXml =
    `<enviNFe xmlns="${NFE_NAMESPACE}" versao="4.00"><idLote>${resolveBatchId(input.documents.batchId)}</idLote>` +
    `<indSinc>1</indSinc>${signedXml}</enviNFe>`;
  const transportOutcome = await executeNFeSoapService({
    authorizer: authorizer ?? resolveIssuerAuthorizer(issuerUF, environment, 'nfe-authorization'),
    environment,
    payloadXml,
    requestExecutor: input.requestExecutor,
    service: 'nfe-authorization',
    timeoutMs: input.timeoutMs,
    wireFormat: true,
  });
  const batch = buildNFeAuthorizationBatch({
    kind: 'single-document',
    payload: {
      documentId: built.accessKey,
      environment,
      payload: { cUF: issuerUF },
      version: '4.00',
    },
  });
  const outcome = mapAuthorizationTransportOutcome(batch, transportOutcome);
  const authorizedXml =
    outcome.classification === 'authorized'
      ? assembleNfeProc(signedXml, transportOutcome.evidence.responseEnvelopeXml ?? '')
      : undefined;

  return {
    ...outcome,
    executionMode: 'normal',
    signedXml,
    ...(authorizedXml === undefined ? {} : { authorizedXml }),
  };
}

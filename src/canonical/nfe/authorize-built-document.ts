import { authorizeBuiltDocumentSvcAn } from './authorize-built-document-svc-an.js';
import type { BuiltNFeDocument } from './builder/build-nfe-document.js';
import type { NFeAuthorizationOutcome, NFeAuthorizationRequest } from './contracts.js';
import {
  NFeOperationalUnsupportedScopeError,
  NFeOperationalUsageError,
} from './errors.js';
import { submitBuiltDocument } from './submit-built-document.js';

const SP_UF = '35';

function assertEnvironmentMatchesDocument(
  built: BuiltNFeDocument,
  normalizedEnvironment: string,
): void {
  const tpAmb = /<tpAmb>(\d)<\/tpAmb>/u.exec(built.xml)?.[1];
  const expected = normalizedEnvironment === 'production' ? '1' : '2';

  if (tpAmb !== expected) {
    throw new NFeOperationalUsageError(
      `The built document has tpAmb "${tpAmb}" but the request targets ${normalizedEnvironment}.`,
    );
  }
}

/** The emission type is part of the access key (position 35) and of `ide/tpEmis`. */
function assertEmissionTypeMatchesRequest(built: BuiltNFeDocument, svcAn: boolean): void {
  const expected = svcAn ? '6' : '1';
  const tpEmis = /<tpEmis>(\d)<\/tpEmis>/u.exec(built.xml)?.[1];

  if (tpEmis !== expected || built.accessKey[34] !== expected) {
    throw new NFeOperationalUsageError(
      svcAn
        ? `SVC-AN requires a document built with tpEmis 6 (found "${tpEmis}"); build it with tpEmis 6, dhCont and xJust.`
        : `A document built with tpEmis "${tpEmis}" requires an explicit contingency request; normal authorization needs tpEmis 1.`,
    );
  }
}

/**
 * Authorizes a document produced by `buildNFeDocument`: signs it, sends it as a real
 * synchronous `enviNFe` in the SEFAZ SOAP envelope and classifies the answer, including
 * denials and rejections reported inside the protocol of a processed batch. With
 * `contingency.mode = 'svc-an'` the document (built with `tpEmis` 6) goes to the SVC-AN
 * authorizer after a fresh status `107`.
 *
 * @param input - Authorization request whose `documents.kind` is `built-document`.
 * @param normalizedEnvironment - Lower-cased target environment.
 * @returns Outcome with the sent `signedXml` and, when authorized, the `authorizedXml`.
 * @throws {NFeOperationalUnsupportedScopeError} Production outside SP.
 * @throws {NFeOperationalUsageError} Production without `requestExecutor`, mismatching `tpAmb` or `tpEmis`.
 */
export async function authorizeBuiltDocument(
  input: NFeAuthorizationRequest,
  normalizedEnvironment: string,
): Promise<NFeAuthorizationOutcome> {
  if (input.documents.kind !== 'built-document') {
    throw new NFeOperationalUsageError('authorizeBuiltDocument requires a built-document.');
  }
  const built = input.documents.payload;
  const issuerUF = built.accessKey.slice(0, 2);

  if (normalizedEnvironment === 'production') {
    if (issuerUF !== SP_UF) {
      throw new NFeOperationalUnsupportedScopeError(
        `authorizeNFe production currently supports issuer UF 35 only; received "${issuerUF}".`,
      );
    }
    if (!input.requestExecutor && input.contingency === undefined) {
      throw new NFeOperationalUsageError(
        'Production authorizeNFe requires an injected requestExecutor for mTLS.',
      );
    }
  }
  assertEnvironmentMatchesDocument(built, normalizedEnvironment);

  if (input.contingency === undefined) {
    assertEmissionTypeMatchesRequest(built, false);

    return submitBuiltDocument(input, built, normalizedEnvironment);
  }
  if (input.contingency.mode === 'svc-an') {
    assertEmissionTypeMatchesRequest(built, true);
  }

  return authorizeBuiltDocumentSvcAn(input, built, normalizedEnvironment);
}

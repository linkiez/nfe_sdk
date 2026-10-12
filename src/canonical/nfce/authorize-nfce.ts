import { DOMParser } from '@xmldom/xmldom';
import { buildNFeAuthorizationBatch } from '../nfe/authorization-batch.js';
import { mapAuthorizationTransportOutcome } from '../nfe/authorization-outcome.js';
import { authorizeNFe as authorizeInternalNFe } from '../nfe/authorize-nfe.js';
import { signNFeXml } from '../signing/sign-nfe-xml.js';
import { executeNFeSoapService } from '../transport/execute-nfe-soap-service.js';

import type {
  NFCeAuthorizationOutcome,
  NFCeAuthorizationRequest,
} from './contracts.js';
import type { NFeAuthorizationOutcome } from '../nfe/contracts.js';
import { createNFCeAuthorizationPayload } from './authorization-payload.js';
import {
  createUnsupportedScopeNFCeOutcome,
  createUnsupportedStateNFCeOutcome,
  hasDeferredContingencyCapability,
} from './coverage-boundary.js';
import {
  createUnsupportedNFCeOperationalScopeMessage,
  NFCeOperationalUnsupportedScopeError,
  NFCeOperationalUsageError,
} from './errors.js';
import { mapNFCeAuthorizationOutcome } from './authorization-outcome.js';
import { generateNFCeSPQRCode } from './generate-nfce-sp-qr-code.js';
import {
  assertNFCeModel65,
  assertValidNFCeCSCInput,
} from './prepare-signing-prerequisites.js';
import { resolveNFCeUF } from './resolve-nfce-uf.js';
import { selectNFCeProfile } from './select-nfce-profile.js';

const SUPPORTED_NFCE_ENVIRONMENTS = ['homologation', 'production'] as const;

/**
 * Authorizes homologated NFC-e requests for SP/PR and normal production requests for SP model 65.
 *
 * @param input - Structured authorization request received from the root facade.
 * @returns Structured NFC-e authorization outcome for the attempted submission.
 * @throws {NFCeOperationalUsageError} When signing or production document prerequisites are invalid.
 * @throws {NFCeOperationalUnsupportedScopeError} When the requested environment or production UF is unsupported.
 */
export async function authorizeNFCe(
  input: NFCeAuthorizationRequest,
): Promise<NFCeAuthorizationOutcome> {
  const normalizedEnvironment = input.environment.trim().toLowerCase();

  if (!input.signingContext) {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe requires a signingContext created by this SDK.',
    );
  }

  if (
    !SUPPORTED_NFCE_ENVIRONMENTS.includes(
      normalizedEnvironment as (typeof SUPPORTED_NFCE_ENVIRONMENTS)[number],
    )
  ) {
    throw new NFCeOperationalUnsupportedScopeError(
      createUnsupportedNFCeOperationalScopeMessage({
        requestedEnvironment: input.environment,
        requestedOperation: 'authorizeNFCe',
        supportedEnvironments: SUPPORTED_NFCE_ENVIRONMENTS,
      }),
    );
  }

  const requestedCapabilities = input.requestedCapabilities ?? [];

  if (hasDeferredContingencyCapability(requestedCapabilities)) {
    return createUnsupportedScopeNFCeOutcome(requestedCapabilities);
  }

  if (requestedCapabilities.length > 0) {
    return createUnsupportedScopeNFCeOutcome(requestedCapabilities);
  }

  const resolvedUF = resolveNFCeUF(input.document);
  const documentDetails = getNFCeDocumentDetails(input);

  if (normalizedEnvironment === 'production') {
    assertProductionNFCePrerequisites(input, resolvedUF, documentDetails);
  }

  const canComposeQRCode =
    resolvedUF === 'SP' &&
    documentDetails.documentId.slice(20, 22) === '65' &&
    input.csc !== undefined;

  if (canComposeQRCode && input.csc) {
    assertValidNFCeCSCInput(input.csc);
  }

  const selectedProfile = selectNFCeProfile(resolvedUF);

  if (selectedProfile === undefined) {
    return createUnsupportedStateNFCeOutcome(resolvedUF);
  }

  const outcome =
    normalizedEnvironment === 'production'
      ? await authorizeNFCeSPProduction(input)
      : await authorizeInternalNFe(createNFCeAuthorizationPayload(input), {
          transportService: selectedProfile.transportService,
        });

  const qrCode =
    outcome.classification === 'authorized' && canComposeQRCode && input.csc
      ? generateNFCeSPQRCode({
          accessKey: documentDetails.documentId,
          csc: input.csc,
          environment: normalizedEnvironment,
          uf: resolvedUF,
        })
      : undefined;

  return mapNFCeAuthorizationOutcome(
    outcome,
    qrCode !== undefined && 'qrCodeUrl' in qrCode
      ? qrCode.qrCodeUrl
      : undefined,
  );
}

function getNFCeDocumentDetails(input: NFCeAuthorizationRequest): {
  readonly documentId: string;
  readonly environment: string;
} {
  return 'metadata' in input.document
    ? {
        documentId: input.document.metadata.documentId,
        environment: input.document.metadata.environment,
      }
    : {
        documentId: input.document.documentId,
        environment: input.document.environment,
      };
}

function assertProductionNFCePrerequisites(
  input: NFCeAuthorizationRequest,
  resolvedUF: string,
  documentDetails: { readonly documentId: string; readonly environment: string },
): void {
  if (resolvedUF !== 'SP') {
    throw new NFCeOperationalUnsupportedScopeError(
      'authorizeNFCe production currently supports SP only.',
    );
  }

  assertNFCeModel65(documentDetails.documentId.slice(20, 22), 'authorizeNFCe production');

  if (documentDetails.environment.trim().toLowerCase() !== 'production') {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe production requires the document environment to match the authorization environment.',
    );
  }

  if (documentDetails.documentId[34] !== '1') {
    throw new NFCeOperationalUsageError(
      'authorizeNFCe production requires a production access key with tpAmb "1".',
    );
  }

  if (!input.requestExecutor) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe requires an injected mTLS-capable requestExecutor.',
    );
  }

  if (!input.csc) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe requires the issuer CSC to compose its QR Code URL.',
    );
  }

  assertValidNFCeCSCInput(input.csc);

  if (!input.unsignedXml?.trim()) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe requires unsignedXml so the SDK can sign the fiscal NFC-e before transport.',
    );
  }

  assertProductionNFCeXmlIdentity(input.unsignedXml, documentDetails.documentId);
}

async function authorizeNFCeSPProduction(
  input: NFCeAuthorizationRequest,
): Promise<NFeAuthorizationOutcome> {
  const unsignedXml = input.unsignedXml;
  if (unsignedXml === undefined) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe requires unsignedXml.',
    );
  }

  const signedXml = await signNFeXml({
    signingContext: input.signingContext,
    unsignedXml,
  });
  const transportOutcome = await executeNFeSoapService({
    authorizer: 'SP',
    environment: 'production',
    payloadXml: createSynchronousNFCePayload(signedXml),
    requestExecutor: input.requestExecutor,
    service: 'nfce-authorization-sp',
    timeoutMs: input.timeoutMs,
  });
  const requiresResponseIdentityCheck =
    transportOutcome.classification === 'success' &&
    ['100', '104'].includes(transportOutcome.applicationStatusCode ?? '');
  const responseAccessKey = requiresResponseIdentityCheck
    ? extractNFCeResponseAccessKey(
        transportOutcome.evidence.responseEnvelopeXml ?? '',
      )
    : undefined;
  const validatedTransportOutcome =
    requiresResponseIdentityCheck &&
    responseAccessKey !== getNFCeDocumentDetails(input).documentId
      ? {
          ...transportOutcome,
          classification: 'protocol-error' as const,
          failureReason:
            'Production NFC-e authorization response is missing or has a mismatched chNFe.',
        }
      : transportOutcome;
  const authorizationBatch = buildNFeAuthorizationBatch({
    kind: 'single-document',
    payload: input.document,
  });

  return mapAuthorizationTransportOutcome(
    authorizationBatch,
    validatedTransportOutcome,
  );
}

function extractNFCeResponseAccessKey(responseXml: string): string | undefined {
  if (responseXml.trim().length === 0) {
    return undefined;
  }

  const parsedXml = new DOMParser().parseFromString(responseXml, 'application/xml');
  return parsedXml.getElementsByTagName('chNFe').item(0)?.textContent?.trim();
}

function assertProductionNFCeXmlIdentity(
  unsignedXml: string,
  expectedAccessKey: string,
): void {
  const parsedXml = new DOMParser().parseFromString(unsignedXml, 'application/xml');
  const root = parsedXml.documentElement;
  const infNFe = parsedXml.getElementsByTagName('infNFe').item(0);
  const ide = parsedXml.getElementsByTagName('ide').item(0);
  const emit = parsedXml.getElementsByTagName('emit').item(0);
  const readIdeValue = (tagName: string): string | undefined =>
    ide?.getElementsByTagName(tagName).item(0)?.textContent?.trim();
  const normalizeNumericField = (
    value: string | undefined,
    width: number,
  ): string | undefined =>
    value !== undefined && /^\d+$/u.test(value) && value.length <= width
      ? value.padStart(width, '0')
      : undefined;
  const emitterCnpj = emit?.getElementsByTagName('CNPJ').item(0)?.textContent?.trim();
  const emitterCpf = emit?.getElementsByTagName('CPF').item(0)?.textContent?.trim();
  const accessKeyTaxId = expectedAccessKey.slice(6, 20);

  if (
    root?.localName !== 'NFe' ||
    root.namespaceURI?.slice(0, 5) !== 'http:' ||
    root.namespaceURI?.slice(5) !== '//www.portalfiscal.inf.br/nfe' ||
    infNFe?.getAttribute('Id') !== `NFe${expectedAccessKey}`
  ) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe unsignedXml must identify the requested NFC-e access key.',
    );
  }

  if (
    emitterCnpj !== accessKeyTaxId &&
    (emitterCpf === undefined || `000${emitterCpf}` !== accessKeyTaxId)
  ) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe unsignedXml issuer identifier must match the requested access key.',
    );
  }

  if (
    readIdeValue('cUF') !== '35' ||
    readIdeValue('mod') !== '65' ||
    readIdeValue('tpAmb') !== '1'
  ) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe unsignedXml must match SP model 65 and production tpAmb "1".',
    );
  }

  const emissionDateMatch = /^(\d{4})-(\d{2})-/u.exec(
    readIdeValue('dhEmi') ?? '',
  );
  const emissionAAMM =
    emissionDateMatch === null
      ? undefined
      : `${emissionDateMatch[1].slice(-2)}${emissionDateMatch[2]}`;

  if (
    readIdeValue('cUF') !== expectedAccessKey.slice(0, 2) ||
    emissionAAMM !== expectedAccessKey.slice(2, 6) ||
    readIdeValue('mod') !== expectedAccessKey.slice(20, 22) ||
    normalizeNumericField(readIdeValue('serie'), 3) !==
      expectedAccessKey.slice(22, 25) ||
    normalizeNumericField(readIdeValue('nNF'), 9) !==
      expectedAccessKey.slice(25, 34) ||
    readIdeValue('tpEmis') !== expectedAccessKey.slice(34, 35) ||
    readIdeValue('cNF') !== expectedAccessKey.slice(35, 43) ||
    readIdeValue('cDV') !== expectedAccessKey.slice(43, 44)
  ) {
    throw new NFCeOperationalUsageError(
      'Production authorizeNFCe unsignedXml fiscal identification fields must match the requested access key.',
    );
  }

}

function createSynchronousNFCePayload(signedXml: string): string {
  const signedDocument = signedXml
    .replace(/^\s*<\?xml[^?]*\?>/u, '')
    .trim();

  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<enviNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">',
    '<idLote>000000000000001</idLote>',
    '<indSinc>1</indSinc>',
    signedDocument,
    '</enviNFe>',
  ].join('');
}
import { createHash } from 'node:crypto';
import { DOMParser } from '@xmldom/xmldom';

import { NFCeOperationalUsageError } from './errors.js';
import { SP_QR_CODE_BASE_URLS } from './resolve-nfce-qr-code-endpoint.js';
import projectNFCe from './render-nfce-sp-danfe-projection.js';
import renderNFCeHtml from './render-nfce-sp-danfe-html.js';
import renderFromAuthorizedXml from './render-nfce-sp-danfe-authorized-xml.js';
import support from './render-nfce-sp-danfe-support.js';
import xml from './render-nfce-sp-danfe-xml.js';
import type {
  NFCeAuthorizationOutcome,
  NFCeSPAuthorizedXmlDanfeResult,
  NFCeSPOfflineDanfeResult,
  NFCeSPOfflineRecord,
  NFCeSPDanfeResult,
  RenderNFCeSPDANFEAuthorizedXmlInput,
  RenderNFCeSPDANFEInput,
  RenderNFCeSPDANFEOfflineInput,
  RenderNFCeSPDANFERequest,
} from './contracts.js';

const NFCE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const XML_SIGNATURE_NAMESPACE = 'http://www.w3.org/2000/09/xmldsig#';
const SUPPORTED_PAPER_WIDTH_MM = { maximum: 210, minimum: 56 } as const;
type XmlDocument = ReturnType<DOMParser['parseFromString']>;
type XmlElement = NonNullable<XmlDocument['documentElement']>;
const { child, localName, requiredText, text } = xml;
const { assertSoapEnvelope, assertValidAccessKey, findExactlyOne, parseXml } =
  support;

function getNFCeXml(
  authorization: NFCeAuthorizationOutcome,
): { readonly requestEnvelopeXml: string; readonly nfe: XmlElement } {
  if (authorization.classification !== 'authorized') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires an authorized NFC-e outcome.',
    );
  }
  const transportOutcome = authorization.transportOutcome;
  const requestEnvelopeXml =
    transportOutcome?.evidence.requestEnvelopeXml.trim();
  if (
    transportOutcome?.classification !== 'success' ||
    transportOutcome.evidence.provider !== 'SP' ||
    transportOutcome.service !== 'nfce-authorization-sp' ||
    requestEnvelopeXml === undefined ||
    requestEnvelopeXml.length === 0
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires captured successful SOAP request evidence.',
    );
  }
  const requestDocument = parseXml(requestEnvelopeXml, 'request envelope');
  assertSoapEnvelope(requestDocument, 'request');
  const nfe = findExactlyOne(requestDocument, 'NFe', 'signed NFe');
  return { nfe, requestEnvelopeXml: transportOutcome.evidence.requestEnvelopeXml };
}

function resolveAuthorization(
  authorization: NFCeAuthorizationOutcome,
  nfe: XmlElement,
): {
  readonly accessKey: string;
  readonly authorizationDate: string;
  readonly environment: 'homologation' | 'production';
  readonly protocolNumber: string;
  readonly qrCodeUrl: string;
  readonly requestEnvelopeXml: string;
} {
  const infNFe = child(nfe, 'infNFe');
  if (infNFe === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires signed NFC-e infNFe data.',
    );
  }
  const id = infNFe.getAttribute('Id');
  if (id === null || !id.startsWith('NFe')) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires an NFC-e access key in infNFe/@Id.',
    );
  }
  const accessKey = id.slice(3);
  assertValidAccessKey(accessKey);

  const ide = child(infNFe, 'ide');
  if (ide === undefined || requiredText(ide, 'cUF', 'ide/cUF') !== '35') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE supports SP NFC-e XML only.',
    );
  }
  if (requiredText(ide, 'mod', 'ide/mod') !== '65') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE supports NFC-e model 65 only.',
    );
  }
  const tpAmb = requiredText(ide, 'tpAmb', 'ide/tpAmb');
  const environment =
    tpAmb === '1'
      ? 'production'
      : tpAmb === '2'
        ? 'homologation'
        : undefined;
  const transportOutcome = authorization.transportOutcome;
  if (
    environment === undefined ||
    transportOutcome?.environment !== environment
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE XML tpAmb does not match the authorization environment.',
    );
  }

  const responseEnvelopeXml =
    transportOutcome.evidence.responseEnvelopeXml?.trim();
  if (responseEnvelopeXml === undefined || responseEnvelopeXml.length === 0) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires captured SOAP response evidence.',
    );
  }
  const responseDocument = parseXml(responseEnvelopeXml, 'response envelope');
  assertSoapEnvelope(responseDocument, 'response');
  const response = findExactlyOne(
    responseDocument,
    'retEnviNFe',
    'authorization response',
  );
  const protocol = child(child(response, 'protNFe') ?? response, 'infProt');
  if (protocol === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires an authorization protocol response.',
    );
  }
  const responseKey = requiredText(protocol, 'chNFe', 'protNFe/infProt/chNFe');
  const responseProtocol = requiredText(
    protocol,
    'nProt',
    'protNFe/infProt/nProt',
  );
  const nestedStatus = requiredText(
    protocol,
    'cStat',
    'protNFe/infProt/cStat',
  );
  const responseAmbiences = [
    text(child(response, 'tpAmb')),
    text(child(protocol, 'tpAmb')),
  ].filter((value): value is string => value !== undefined);
  const outerStatus = text(child(response, 'cStat'));

  if (
    responseKey !== accessKey ||
    authorization.protocolNumber !== responseProtocol
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE authorization response key or protocol does not match the request.',
    );
  }
  if (
    nestedStatus !== '100' ||
    (outerStatus !== undefined && outerStatus !== '100' && outerStatus !== '104') ||
    responseAmbiences.length === 0 ||
    responseAmbiences.some((value) => value !== tpAmb)
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE response status or tpAmb does not confirm this authorization.',
    );
  }

  const qrCodeUrl = authorization.qrCodeUrl;
  const expectedQrCodeUrl =
    `${SP_QR_CODE_BASE_URLS[environment]}?p=${accessKey}|3|${tpAmb}`;
  if (qrCodeUrl !== expectedQrCodeUrl) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE QR Code URL does not match the authorized access key and environment.',
    );
  }
  const evidenceRequest = transportOutcome.evidence.requestEnvelopeXml;
  return {
    accessKey,
    authorizationDate: requiredText(
      protocol,
      'dhRecbto',
      'protNFe/infProt/dhRecbto',
    ),
    environment,
    protocolNumber: responseProtocol,
    qrCodeUrl,
    requestEnvelopeXml: evidenceRequest,
  };
}

function getOfflineNFe(record: NFCeSPOfflineRecord): {
  readonly nfe: XmlElement;
  readonly identity: {
    readonly accessKey: string;
    readonly environment: 'homologation' | 'production';
    readonly qrCodeUrl: string;
    readonly signedXmlSha256: string;
  };
} {
  if (record.status !== 'pending-reconciliation') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires an offline record pending reconciliation.',
    );
  }
  const signedXmlSha256 = createHash('sha256')
    .update(record.signedXml, 'utf8')
    .digest('hex');
  if (signedXmlSha256 !== record.signedXmlSha256) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE offline XML digest does not match the record.',
    );
  }
  const document = parseXml(record.signedXml, 'offline NFe');
  const nfe = document.documentElement;
  if (
    nfe === null ||
    localName(nfe) !== 'NFe' ||
    nfe.namespaceURI !== NFCE_NAMESPACE
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires a signed offline SP NFe document.',
    );
  }
  const infNFe = child(nfe, 'infNFe');
  const ide = infNFe === undefined ? undefined : child(infNFe, 'ide');
  const id = infNFe?.getAttribute('Id');
  if (id !== `NFe${record.accessKey}`) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE offline XML access key does not match the record.',
    );
  }
  assertValidAccessKey(record.accessKey);
  if (
    ide === undefined ||
    requiredText(ide, 'cUF', 'ide/cUF') !== '35' ||
    requiredText(ide, 'mod', 'ide/mod') !== '65' ||
    requiredText(ide, 'tpEmis', 'ide/tpEmis') !== '9'
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires SP model 65 offline XML with tpEmis "9".',
    );
  }
  const tpAmb = requiredText(ide, 'tpAmb', 'ide/tpAmb');
  const environment =
    tpAmb === '1'
      ? 'production'
      : tpAmb === '2'
        ? 'homologation'
        : undefined;
  if (environment === undefined || environment !== record.environment) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE offline XML tpAmb does not match the record environment.',
    );
  }
  requiredText(ide, 'dhCont', 'ide/dhCont');
  requiredText(ide, 'xJust', 'ide/xJust');

  const digestElements = document.getElementsByTagNameNS(
    XML_SIGNATURE_NAMESPACE,
    'DigestValue',
  );
  const signatureDigest = Buffer.from(
    digestElements.item(0)?.textContent?.trim() ?? '',
    'base64',
  ).toString('hex');
  const qrCodeUrl = record.qrCodeUrl;
  const [baseUrl, query] = qrCodeUrl.split('?p=');
  const parameters = query?.split('|') ?? [];
  const expectedBaseUrl = SP_QR_CODE_BASE_URLS[environment];
  const total = child(
    child(infNFe!, 'total')!,
    'ICMSTot',
  );
  const totalValue = total === undefined ? undefined : text(child(total, 'vNF'));
  const issuedAt = requiredText(ide, 'dhEmi', 'ide/dhEmi');
  const day = /^\d{4}-\d{2}-(\d{2})T/u.exec(issuedAt)?.[1];
  if (
    digestElements.length !== 1 ||
    signatureDigest.length !== 40 ||
    baseUrl !== expectedBaseUrl ||
    parameters.length !== 8 ||
    parameters[0] !== record.accessKey ||
    parameters[1] !== '2' ||
    parameters[2] !== tpAmb ||
    parameters[3] !== day ||
    parameters[4] !== totalValue ||
    parameters[5] !== signatureDigest ||
    !/^\d{1,6}$/u.test(parameters[6] ?? '') ||
    !/^[a-f\d]{40}$/iu.test(parameters[7] ?? '')
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE offline QR Code URL does not match the signed XML.',
    );
  }

  return {
    identity: {
      accessKey: record.accessKey,
      environment,
      qrCodeUrl,
      signedXmlSha256,
    },
    nfe,
  };
}

/**
 * Renders a self-contained SP NFC-e DANFE from correlated authorization evidence.
 *
 * @param input - Authorized outcome and optional supported paper width.
 * @returns Complete HTML, document identity, protocol, and request-envelope digest.
 * @throws {NFCeOperationalUsageError} When evidence is missing, inconsistent, or invalid.
 */
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPOfflineDanfeResult>;
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEAuthorizedXmlInput,
): Promise<NFCeSPAuthorizedXmlDanfeResult>;
export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput,
): Promise<NFCeSPDanfeResult>;
export async function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFERequest,
): Promise<
  NFCeSPDanfeResult | NFCeSPAuthorizedXmlDanfeResult | NFCeSPOfflineDanfeResult
> {
  const paperWidthMm = input.paperWidthMm ?? 80;
  if (
    !Number.isFinite(paperWidthMm) ||
    paperWidthMm < SUPPORTED_PAPER_WIDTH_MM.minimum ||
    paperWidthMm > SUPPORTED_PAPER_WIDTH_MM.maximum
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE paperWidthMm must be between 56 and 210 mm.',
    );
  }
  if ('offlineRecord' in input) {
    const { nfe, identity } = getOfflineNFe(input.offlineRecord);
    const presentation = projectNFCe(
      nfe,
      identity.accessKey,
      undefined,
    );
    return {
      accessKey: identity.accessKey,
      classification: 'pending-authorization',
      environment: identity.environment,
      html: await renderNFCeHtml(
        presentation,
        {
          ...identity,
          copy: input.copy,
          pendingAuthorization: true,
        },
        paperWidthMm,
      ),
      mediaType: 'text/html',
      signedXmlSha256: identity.signedXmlSha256,
    };
  }

  if (input.copy === 'establishment') {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE copy "establishment" is only valid for an offline contingency record.',
    );
  }

  if ('authorizedXml' in input) {
    return renderFromAuthorizedXml(input.authorizedXml, paperWidthMm);
  }

  const { authorization } = input;
  const { nfe, requestEnvelopeXml } = getNFCeXml(authorization);
  const identity = resolveAuthorization(authorization, nfe);
  const presentation = projectNFCe(
    nfe,
    identity.accessKey,
    identity.authorizationDate,
  );
  const requestEnvelopeSha256 = createHash('sha256')
    .update(requestEnvelopeXml, 'utf8')
    .digest('hex');

  return {
    accessKey: identity.accessKey,
    environment: identity.environment,
    html: await renderNFCeHtml(
      presentation,
      {
        ...identity,
        requestEnvelopeSha256,
      },
      paperWidthMm,
    ),
    mediaType: 'text/html',
    protocolNumber: identity.protocolNumber,
    requestEnvelopeSha256,
  };
}

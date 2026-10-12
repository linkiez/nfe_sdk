import { createHash } from 'node:crypto';
import { DOMParser } from '@xmldom/xmldom';

import { computeNFeAccessKey } from '../nfe/access-key.js';
import { signNFeXml } from '../signing/sign-nfe-xml.js';
import type { CanonicalEnvironment } from '../shared/contracts.js';
import { NFCeOperationalUsageError } from './errors.js';
import { assertValidNFCeCSCInput } from './prepare-signing-prerequisites.js';
import type {
  NFCeSPOfflineRecord,
  PrepareNFCeSPOfflineInput,
} from './contracts.js';
import { validateNFCeSPOfflineBusinessCalendar } from './offline-business-calendar.js';

const NFCe_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const XML_SIGNATURE_NAMESPACE = 'http://www.w3.org/2000/09/xmldsig#';
const SP_QR_CODE_BASE_URLS: Readonly<Record<CanonicalEnvironment, string>> = {
  homologation:
    'https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
  production:
    'https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx',
};

type XmlDocument = ReturnType<DOMParser['parseFromString']>;
type XmlElement = import('@xmldom/xmldom').Element;

function childElement(parent: XmlElement, name: string): XmlElement | undefined {
  return Array.from(parent.childNodes).find(
    (node): node is XmlElement =>
      node.nodeType === 1 && (node as XmlElement).localName === name,
  );
}

function childText(parent: XmlElement, name: string): string | undefined {
  return childElement(parent, name)?.textContent?.trim();
}

function requiredText(parent: XmlElement, name: string, path: string): string {
  const value = childText(parent, name);
  if (value === undefined || value.length === 0) {
    throw new NFCeOperationalUsageError(
      `prepareNFCeSPOffline requires ${path}.`,
    );
  }
  return value;
}

function parseXml(xml: string): XmlDocument {
  const errors: string[] = [];
  const document = new DOMParser({
    onError: (level, message) => {
      if (level === 'error' || level === 'fatalError') errors.push(message);
    },
  }).parseFromString(xml, 'application/xml');
  if (errors.length > 0 || document.documentElement === null) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline received malformed NFC-e XML.',
    );
  }
  return document;
}

function normalizeNumeric(value: string, width: number, path: string): string {
  if (!/^\d+$/u.test(value) || value.length > width) {
    throw new NFCeOperationalUsageError(
      `prepareNFCeSPOffline received invalid ${path}.`,
    );
  }
  return value.padStart(width, '0');
}

function extractOfflineIdentity(
  document: XmlDocument,
  environment: string,
): {
  readonly accessKey: string;
  readonly environment: CanonicalEnvironment;
  readonly issuedAt: string;
  readonly qrParameters: readonly string[];
} {
  const nfe = document.documentElement;
  if (
    nfe === null ||
    nfe.localName !== 'NFe' ||
    nfe.namespaceURI !== NFCe_NAMESPACE
  ) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires one NFe document in the fiscal namespace.',
    );
  }
  const infNFe = childElement(nfe, 'infNFe');
  const ide = infNFe === undefined ? undefined : childElement(infNFe, 'ide');
  const issuer = infNFe === undefined ? undefined : childElement(infNFe, 'emit');
  if (infNFe === undefined || ide === undefined || issuer === undefined) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires infNFe, ide, and emit elements.',
    );
  }

  const id = infNFe.getAttribute('Id');
  if (id === null || !/^NFe\d{44}$/u.test(id)) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires a 44-digit access key in infNFe/@Id.',
    );
  }
  const accessKey = id.slice(3);
  const cUF = requiredText(ide, 'cUF', 'ide/cUF');
  const model = requiredText(ide, 'mod', 'ide/mod');
  const tpEmis = requiredText(ide, 'tpEmis', 'ide/tpEmis');
  const tpAmb = requiredText(ide, 'tpAmb', 'ide/tpAmb');
  const issuedAt = requiredText(ide, 'dhEmi', 'ide/dhEmi');
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})T/u.exec(issuedAt);
  const expectedTpAmb = environment.trim().toLowerCase();
  const resolvedEnvironment =
    expectedTpAmb === 'production'
      ? 'production'
      : expectedTpAmb === 'homologation'
        ? 'homologation'
        : undefined;

  if (resolvedEnvironment === undefined || tpAmb !== (resolvedEnvironment === 'production' ? '1' : '2')) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline environment must match XML ide/tpAmb.',
    );
  }
  if (cUF !== '35' || model !== '65' || tpEmis !== '9') {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires SP model 65 XML with tpEmis "9".',
    );
  }
  if (dateMatch === null || !Number.isFinite(Date.parse(issuedAt))) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires a valid ide/dhEmi timestamp.',
    );
  }
  if (
    requiredText(ide, 'idDest', 'ide/idDest') !== '1' ||
    requiredText(ide, 'finNFe', 'ide/finNFe') !== '1' ||
    requiredText(ide, 'indFinal', 'ide/indFinal') !== '1' ||
    requiredText(ide, 'indPres', 'ide/indPres') !== '1'
  ) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires idDest, finNFe, indFinal, and indPres to be "1".',
    );
  }

  const contingencyDate = requiredText(ide, 'dhCont', 'ide/dhCont');
  const reason = requiredText(ide, 'xJust', 'ide/xJust');
  if (!Number.isFinite(Date.parse(contingencyDate))) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires a valid ide/dhCont timestamp.',
    );
  }
  if (reason.length < 15 || reason.length > 256) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline ide/xJust must contain 15 to 256 characters.',
    );
  }

  const issuerId =
    childText(issuer, 'CNPJ') ?? childText(issuer, 'CPF')?.padStart(14, '0');
  if (issuerId !== accessKey.slice(6, 20)) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline issuer tax identifier does not match the access key.',
    );
  }
  const cNF = requiredText(ide, 'cNF', 'ide/cNF');
  const cDV = requiredText(ide, 'cDV', 'ide/cDV');
  const expectedKey = computeNFeAccessKey({
    AAMM: `${dateMatch[1]!.slice(-2)}${dateMatch[2]}`,
    CNPJ: accessKey.slice(6, 20),
    cNF,
    cUF,
    mod: model,
    nNF: normalizeNumeric(requiredText(ide, 'nNF', 'ide/nNF'), 9, 'ide/nNF'),
    serie: normalizeNumeric(requiredText(ide, 'serie', 'ide/serie'), 3, 'ide/serie'),
    tpEmis,
  }).chNFe;
  if (expectedKey !== accessKey || cDV !== accessKey.slice(43)) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline fiscal identity does not match the access key.',
    );
  }

  const total = childElement(infNFe, 'total');
  const icmsTotal = total === undefined ? undefined : childElement(total, 'ICMSTot');
  const totalValue =
    icmsTotal === undefined ? undefined : childText(icmsTotal, 'vNF');
  if (totalValue === undefined || !/^\d+(?:\.\d+)?$/u.test(totalValue) || totalValue.length > 15) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires a valid QR Code v2 total value.',
    );
  }

  return {
    accessKey,
    environment: resolvedEnvironment,
    issuedAt,
    qrParameters: [
      accessKey,
      '2',
      tpAmb,
      dateMatch[3]!,
      totalValue,
    ],
  };
}

function createOfflineQRCodeUrl(
  signedXml: string,
  identity: ReturnType<typeof extractOfflineIdentity>,
  cscId: string,
  cscToken: string,
): string {
  const signatureDigests = parseXml(signedXml).getElementsByTagNameNS(
    XML_SIGNATURE_NAMESPACE,
    'DigestValue',
  );
  if (signatureDigests.length !== 1) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires one XML signature DigestValue.',
    );
  }
  const digestBytes = Buffer.from(
    signatureDigests.item(0)?.textContent?.trim() ?? '',
    'base64',
  );
  if (digestBytes.length !== 20) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires an SHA-1 XML signature digest for QR Code v2.',
    );
  }
  if (!/^\d{1,6}$/u.test(cscId) || /^0+$/u.test(cscId)) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline requires a numeric CSC identifier from 1 to 6 digits.',
    );
  }
  const parameters = [
    ...identity.qrParameters,
    digestBytes.toString('hex'),
    String(Number(cscId)),
  ];
  const hash = createHash('sha1')
    .update(`${parameters.join('|')}|${cscToken}`, 'utf8')
    .digest('hex');
  const baseUrl = SP_QR_CODE_BASE_URLS[identity.environment];
  return `${baseUrl}?p=${[...parameters, hash].join('|')}`;
}

/**
 * Validates and signs one SP offline NFC-e without transmitting it.
 *
 * @param input - Unsigned offline XML, signing context, CSC, environment, and deadline.
 * @returns Immutable signed record in the pending-reconciliation state.
 * @throws {NFCeOperationalUsageError} When XML, CSC, deadline, or identity is invalid.
 */
export async function prepareNFCeSPOffline(
  input: PrepareNFCeSPOfflineInput,
): Promise<NFCeSPOfflineRecord> {
  assertValidNFCeCSCInput(input.csc);
  const unsignedDocument = parseXml(input.unsignedXml);
  const identity = extractOfflineIdentity(unsignedDocument, input.environment);
  const deadlineTimestamp = Date.parse(input.submissionDeadline);
  if (
    !/^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:\d{2})$/u.test(
      input.submissionDeadline,
    ) ||
    !Number.isFinite(deadlineTimestamp) ||
    deadlineTimestamp <= Date.now() ||
    deadlineTimestamp <= Date.parse(identity.issuedAt)
  ) {
    throw new NFCeOperationalUsageError(
      'prepareNFCeSPOffline submissionDeadline must be a valid instant after issuance.',
    );
  }
  const sourceEvidence = input.businessCalendarEvidence;
  validateNFCeSPOfflineBusinessCalendar(
    sourceEvidence,
    identity.issuedAt,
    input.submissionDeadline,
  );
  const businessCalendarEvidence = {
    calendarId: sourceEvidence.calendarId,
    timeZone: sourceEvidence.timeZone,
    evaluatedDates: sourceEvidence.evaluatedDates.map((evaluatedDate) => ({
      ...evaluatedDate,
    })),
  };

  const signedXml = await signNFeXml({
    signingContext: input.signingContext,
    unsignedXml: input.unsignedXml,
  });
  const qrCodeUrl = createOfflineQRCodeUrl(
    signedXml,
    identity,
    input.csc.cscId,
    input.csc.cscToken,
  );

  return {
    accessKey: identity.accessKey,
    environment: identity.environment,
    issuedAt: identity.issuedAt,
    businessCalendarEvidence,
    qrCodeUrl,
    signedXml,
    signedXmlSha256: createHash('sha256').update(signedXml, 'utf8').digest('hex'),
    submissionDeadline: new Date(deadlineTimestamp).toISOString(),
    status: 'pending-reconciliation',
  };
}
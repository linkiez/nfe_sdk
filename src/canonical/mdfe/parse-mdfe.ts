import type {
  MDFeDocumentSummary,
  MDFeEnvironment,
  MDFeEventName,
  MDFeEventSummary,
  MDFeModal,
  MDFeParsed,
} from './contracts.js';
import { MDFE_LAYOUT_VERSION } from './contracts.js';
import { MDFeParseError } from './mdfe-parse-error.js';
import { parseXmlTree } from './parse-xml-tree.js';
import { readMDFeProtocol } from './read-mdfe-protocol.js';
import { readMDFeTransportFacts } from './read-mdfe-transport-facts.js';
import type { XmlNode } from './xml-node.js';

const MODALS: Readonly<Record<string, MDFeModal>> = {
  '1': 'road',
  '2': 'air',
  '3': 'waterway',
  '4': 'rail',
};
const EVENT_NAMES: Readonly<Record<string, MDFeEventName>> = {
  '110111': 'cancellation',
  '110112': 'closure',
};
const REGISTERED_EVENT_STATUS = ['135', '136'];
const DOCUMENT_ROOTS = ['mdfeProc', 'MDFe'];
const EVENT_ROOTS = ['procEventoMDFe', 'eventoMDFe'];

function required(value: string | undefined, field: string): string {
  if (value === undefined) {
    throw new MDFeParseError('missing-field', `MDF-e XML is missing ${field}.`);
  }
  return value;
}

function environmentOf(tpAmb: string | undefined): MDFeEnvironment {
  return required(tpAmb, 'tpAmb') === '1' ? 'production' : 'homologation';
}

/** Every `versao` found (wrapper and document/event) must be the supported layout version. */
function assertVersion(...versions: (string | undefined)[]): string {
  const informed = versions.filter((version): version is string => version !== undefined);
  const unsupported = informed.find((version) => version !== MDFE_LAYOUT_VERSION);
  if (informed.length === 0 || unsupported !== undefined) {
    throw new MDFeParseError(
      'unsupported-version',
      `MDF-e layout version "${unsupported ?? ''}" is not supported (expected ${MDFE_LAYOUT_VERSION}).`,
    );
  }
  return MDFE_LAYOUT_VERSION;
}

function parseDocument(root: XmlNode, xml: string): MDFeDocumentSummary {
  const info = root.find('infMDFe');
  if (info === undefined) {
    throw new MDFeParseError('missing-field', 'MDF-e XML is missing infMDFe.');
  }
  const layoutVersion = assertVersion(root.attr('versao'), info.attr('versao'));
  const accessKey = required(info.attr('Id'), 'infMDFe/@Id').replace(/^MDFe/u, '');
  const taxId = required(info.text('emit', 'CNPJ') ?? info.text('emit', 'CPF'), 'emit/CNPJ or emit/CPF');
  const protocol = readMDFeProtocol(root);
  const count = (tag: string): number => Number(info.text('tot', tag) ?? 0);

  return {
    kind: 'document',
    accessKey,
    layoutVersion,
    environment: environmentOf(info.text('ide', 'tpAmb')),
    issuer: { taxId, name: info.text('emit', 'xNome') },
    series: info.text('ide', 'serie'),
    number: info.text('ide', 'nMDF'),
    issuedAt: info.text('ide', 'dhEmi'),
    modal: MODALS[info.text('ide', 'modal') ?? ''] ?? 'unknown',
    originUF: info.text('ide', 'UFIni'),
    destinationUF: info.text('ide', 'UFFim'),
    totals: {
      documents: count('qCTe') + count('qNFe') + count('qMDFe'),
      cargoValue: info.text('tot', 'vCarga'),
      cargoQuantity: info.text('tot', 'qCarga'),
      cargoUnit: info.text('tot', 'cUnid'),
    },
    ...readMDFeTransportFacts(xml),
    authorized: protocol?.statusCode === '100',
    protocol,
  };
}

function parseEvent(root: XmlNode): MDFeEventSummary {
  const event = root.find('eventoMDFe') ?? root;
  const info = event.find('infEvento');
  if (info === undefined) {
    throw new MDFeParseError('missing-field', 'MDF-e XML is missing infEvento.');
  }
  const layoutVersion = assertVersion(root.attr('versao'), event.attr('versao'));
  const eventType = required(info.text('tpEvento'), 'tpEvento');
  const result = root.find('retEventoMDFe')?.find('infEvento');
  const detail = info.find('detEvento');
  const statusCode = result?.text('cStat');

  return {
    kind: 'event',
    accessKey: required(info.text('chMDFe'), 'chMDFe'),
    layoutVersion,
    environment: environmentOf(info.text('tpAmb')),
    eventType,
    eventName: EVENT_NAMES[eventType] ?? 'other',
    sequence: Number(required(info.text('nSeqEvento'), 'nSeqEvento')),
    eventAt: info.text('dhEvento'),
    registered: statusCode !== undefined && REGISTERED_EVENT_STATUS.includes(statusCode),
    statusCode,
    statusMessage: result?.text('xMotivo'),
    protocol: result?.text('nProt'),
    details: {
      closureDate: detail?.text('dtEnc'),
      closureUF: detail?.text('evEncMDFe', 'cUF'),
      closureMunicipalityCode: detail?.text('evEncMDFe', 'cMun'),
      authorizationProtocol: detail?.text('nProt'),
      justification: detail?.text('xJust'),
    },
  };
}

/**
 * Reads the facts of a MDF-e document (`MDFe`/`mdfeProc`) or event (`eventoMDFe`/`procEventoMDFe`).
 * It does not validate the schema or the signature; use `validateMDFeXml` for the schema.
 *
 * @param xml - MDF-e XML text.
 * @returns A document or event summary.
 * @throws {MDFeParseError} `not-xml`, `unsupported-root`, `unsupported-version` or `missing-field`.
 */
export function parseMDFeXml(xml: string): MDFeParsed {
  const root = parseXmlTree(xml);
  if (root === undefined) {
    throw new MDFeParseError('not-xml', 'The text is not well-formed XML.');
  }
  if (DOCUMENT_ROOTS.includes(root.name)) return parseDocument(root, xml);
  if (EVENT_ROOTS.includes(root.name)) return parseEvent(root);

  throw new MDFeParseError('unsupported-root', `"${root.name}" is not a MDF-e document or event.`);
}

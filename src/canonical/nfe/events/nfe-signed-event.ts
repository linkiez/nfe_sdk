import { signEventXml } from '../../signing/sign-event-xml.js';
import { signInutilizationXml } from '../../signing/sign-inutilization-xml.js';
import type { TransportOutcome } from '../../transport/contracts.js';
import { executeNFeSoapService } from '../../transport/execute-nfe-soap-service.js';
import { resolveIssuerAuthorizer } from '../../transport/issuer-authorizer.js';
import type { SupportedNFeSoapService } from '../../transport/supported-services.js';
import type {
  NFeMaintenanceOperation,
  NFeSignedEventDetails,
  OperationalMaintenanceOutcome,
  OperationalMaintenanceRequest,
} from '../contracts.js';
import { mapOperationalMaintenanceTransportOutcome } from '../maintenance-outcome.js';

const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';
const SP_UF = '35';
/** Event protocol statuses that mean "registered": 135/136 normal, 155 cancellation out of time. */
const REGISTERED_STATUS_CODES = new Set(['135', '136', '155']);
const CCE_CONDITION_OF_USE =
  'A Carta de Correcao e disciplinada pelo paragrafo 1o-A do art. 7o do Convenio S/N, de 15 de dezembro de 1970 e pode ser utilizada para regularizacao de erro ocorrido na emissao de documento fiscal, desde que o erro nao esteja relacionado com: I - as variaveis que determinam o valor do imposto tais como: base de calculo, aliquota, diferenca de preco, quantidade, valor da operacao ou da prestacao; II - a correcao de dados cadastrais que implique mudanca do remetente ou do destinatario; III - a data de emissao ou de saida.';

interface EventKindDefinition {
  readonly code: string;
  readonly service: SupportedNFeSoapService;
  readonly description: string;
}

const MAX_INUTILIZATION_RANGE = 10_000;
const INUTILIZATION_SERVICE: SupportedNFeSoapService = 'nfe-inutilization';

const EVENT_KINDS: Readonly<Partial<Record<NFeMaintenanceOperation, EventKindDefinition>>> = {
  'cancel-nfe': { code: '110111', description: 'Cancelamento', service: 'nfe-cancellation' },
  'submit-nfe-correction-letter': {
    code: '110110',
    description: 'Carta de Correcao',
    service: 'nfe-correction-letter',
  },
};

const escapeXml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const stripDeclaration = (xml: string): string => xml.trim().replace(/^<\?xml[^>]*\?>\s*/u, '');

function textBetween(value: string | undefined, min: number, max: number): boolean {
  return (
    value !== undefined &&
    value === value.trim() &&
    !/[\r\n\t]/u.test(value) &&
    value.length >= min &&
    value.length <= max
  );
}

/**
 * Validates the signed-event details before anything is signed or sent.
 *
 * @returns The first problem found, or `undefined` when the details are valid.
 */
function validateEvent(
  operation: NFeMaintenanceOperation,
  accessKey: string | undefined,
  event: NFeSignedEventDetails,
): string | undefined {
  if (accessKey === undefined || !/^\d{44}$/u.test(accessKey)) {
    return 'accessKey must be the 44-digit NF-e access key.';
  }
  if (!/^(?:\d{14}|\d{11})$/u.test(event.issuerTaxId)) {
    return 'issuerTaxId must be a 14-digit CNPJ or 11-digit CPF.';
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/u.test(event.eventDateTime)) {
    return 'eventDateTime must be an ISO 8601 date/time with UTC offset.';
  }
  const sequence = event.sequence ?? 1;
  if (!Number.isInteger(sequence) || sequence < 1 || sequence > 99) {
    return 'sequence must be an integer from 1 to 99.';
  }
  if (event.batchId !== undefined && !/^\d{1,15}$/u.test(event.batchId)) {
    return 'batchId (idLote) must contain 1 to 15 digits.';
  }
  if (operation === 'cancel-nfe') {
    if (sequence !== 1) return 'A cancellation always has sequence 1.';
    if (event.protocol === undefined || !/^\d{15}$/u.test(event.protocol)) {
      return 'A cancellation requires the 15-digit authorization protocol.';
    }
    if (!textBetween(event.justification, 15, 255)) {
      return 'The cancellation justification must have 15 to 255 characters without padding.';
    }
    return undefined;
  }
  if (!textBetween(event.correctionText, 15, 1000)) {
    return 'The correction letter text must have 15 to 1000 characters without padding.';
  }
  return undefined;
}

function buildDetail(operation: NFeMaintenanceOperation, event: NFeSignedEventDetails): string {
  const definition = EVENT_KINDS[operation] as EventKindDefinition;

  return operation === 'cancel-nfe'
    ? `<detEvento versao="1.00"><descEvento>${definition.description}</descEvento>` +
        `<nProt>${event.protocol}</nProt><xJust>${escapeXml(event.justification ?? '')}</xJust></detEvento>`
    : `<detEvento versao="1.00"><descEvento>${definition.description}</descEvento>` +
        `<xCorrecao>${escapeXml(event.correctionText ?? '')}</xCorrecao>` +
        `<xCondUso>${CCE_CONDITION_OF_USE}</xCondUso></detEvento>`;
}

/**
 * Builds the unsigned `envEvento` (layout 1.00) for a cancellation (110111) or correction
 * letter (110110).
 *
 * @param operation - `cancel-nfe` or `submit-nfe-correction-letter`.
 * @param accessKey - 44-digit access key of the NF-e.
 * @param environment - Lower-cased environment.
 * @param event - Validated event details.
 * @returns The event envelope XML and the `infEvento` identifier.
 */
export function buildNFeEventEnvelope(
  operation: NFeMaintenanceOperation,
  accessKey: string,
  environment: string,
  event: NFeSignedEventDetails,
): { readonly id: string; readonly xml: string } {
  const definition = EVENT_KINDS[operation] as EventKindDefinition;
  const sequence = event.sequence ?? 1;
  const id = `ID${definition.code}${accessKey}${String(sequence).padStart(2, '0')}`;
  const taxIdTag = event.issuerTaxId.length === 14 ? 'CNPJ' : 'CPF';
  const xml =
    `<envEvento xmlns="${NFE_NAMESPACE}" versao="1.00"><idLote>${event.batchId ?? '1'}</idLote>` +
    `<evento versao="1.00"><infEvento Id="${id}"><cOrgao>${accessKey.slice(0, 2)}</cOrgao>` +
    `<tpAmb>${environment === 'production' ? '1' : '2'}</tpAmb><${taxIdTag}>${event.issuerTaxId}</${taxIdTag}>` +
    `<chNFe>${accessKey}</chNFe><dhEvento>${event.eventDateTime}</dhEvento>` +
    `<tpEvento>${definition.code}</tpEvento><nSeqEvento>${sequence}</nSeqEvento><verEvento>1.00</verEvento>` +
    `${buildDetail(operation, event)}</infEvento></evento></envEvento>`;

  return { id, xml };
}

function refusal(
  operation: NFeMaintenanceOperation,
  classification: 'usage-error' | 'unsupported-scope',
  environment: string,
  reason: string,
): OperationalMaintenanceOutcome {
  return {
    classification,
    failureReason: reason,
    operation,
    transportOutcome: {
      classification: 'usage-error',
      environment: environment === 'production' ? 'production' : 'homologation',
      evidence: { endpointUrl: '', provider: 'SP', requestEnvelopeXml: '' },
      failureReason: reason,
      service: EVENT_KINDS[operation]?.service ?? INUTILIZATION_SERVICE,
    },
  };
}

function firstTag(xml: string, tag: string): string | undefined {
  return new RegExp(`<${tag}>([^<]+)</${tag}>`, 'u').exec(xml)?.[1]?.trim();
}

/** Builds `procEventoNFe` from the signed event and the returned `retEvento`. */
function assembleProcEvento(signedEnvelope: string, responseXml: string): string | undefined {
  const evento = /<evento\b[\s\S]*<\/evento>/u.exec(signedEnvelope)?.[0];
  const retEvento = /<retEvento\b[\s\S]*?<\/retEvento>/u.exec(responseXml)?.[0];

  return evento === undefined || retEvento === undefined
    ? undefined
    : `<procEventoNFe xmlns="${NFE_NAMESPACE}" versao="1.00">${evento}${retEvento}</procEventoNFe>`;
}

function mapEventOutcome(
  operation: NFeMaintenanceOperation,
  transportOutcome: TransportOutcome,
  signedXml: string,
): OperationalMaintenanceOutcome {
  const base = mapOperationalMaintenanceTransportOutcome(operation, transportOutcome);
  const responseXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const retEvento = /<retEvento\b[\s\S]*?<\/retEvento>/u.exec(responseXml)?.[0];
  const reachedSefaz =
    transportOutcome.classification === 'success' ||
    transportOutcome.classification === 'functional-rejection';

  if (retEvento === undefined || !reachedSefaz) {
    return { ...base, signedXml };
  }
  const code = firstTag(retEvento, 'cStat') ?? '';
  const message = firstTag(retEvento, 'xMotivo');
  const registered = REGISTERED_STATUS_CODES.has(code);
  const authorizedXml = registered ? assembleProcEvento(signedXml, responseXml) : undefined;

  return {
    ...base,
    applicationStatusCode: code,
    applicationStatusMessage: message,
    classification: registered ? 'success' : 'rejected',
    failureReason: registered ? undefined : (message ?? base.failureReason),
    protocolNumber: firstTag(retEvento, 'nProt'),
    signedXml,
    updatedState: registered ? base.updatedState : undefined,
    ...(authorizedXml === undefined ? {} : { authorizedXml }),
  };
}

/**
 * Signs, sends and classifies a cancellation or correction letter in the official event
 * envelope. Production requires an SP access key and an injected mTLS `requestExecutor`.
 *
 * @param input - Maintenance request carrying `signedEvent`.
 * @returns Outcome with `signedXml` and, when registered, `authorizedXml`.
 */
export async function executeSignedNFeEvent(
  input: OperationalMaintenanceRequest,
): Promise<OperationalMaintenanceOutcome> {
  const operation = input.operation;
  const event = input.signedEvent as NFeSignedEventDetails;
  const environment = input.environment.trim().toLowerCase();
  if (operation === 'submit-nfe-inutilization') {
    return executeSignedInutilization(input, environment);
  }
  const definition = EVENT_KINDS[operation];

  if (definition === undefined) {
    return refusal(operation, 'unsupported-scope', environment, `Signed events do not support ${operation}.`);
  }
  if (environment !== 'homologation' && environment !== 'production') {
    return refusal(operation, 'unsupported-scope', environment, `Unsupported environment "${input.environment}".`);
  }
  const problem = validateEvent(operation, input.accessKey, event);
  if (problem !== undefined) {
    return refusal(operation, 'usage-error', environment, problem);
  }
  const accessKey = input.accessKey as string;
  const issuerUF = accessKey.slice(0, 2);

  if (environment === 'production') {
    if (issuerUF !== SP_UF) {
      return refusal(
        operation,
        'unsupported-scope',
        environment,
        `Production events currently support issuer UF 35 only; received "${issuerUF}".`,
      );
    }
    if (!input.requestExecutor) {
      return refusal(operation, 'usage-error', environment, 'Production events require an injected requestExecutor for mTLS.');
    }
  }

  const { xml } = buildNFeEventEnvelope(operation, accessKey, environment, event);
  const signedXml = stripDeclaration(
    await signEventXml({ signingContext: event.signingContext, unsignedXml: xml }),
  );
  const transportOutcome = await executeNFeSoapService({
    authorizer: resolveIssuerAuthorizer(issuerUF, environment, definition.service),
    environment,
    payloadXml: signedXml,
    requestExecutor: input.requestExecutor,
    service: definition.service,
    timeoutMs: input.timeoutMs,
    wireFormat: true,
  });

  return mapEventOutcome(operation, transportOutcome, signedXml);
}


function validateInutilization(event: NFeSignedEventDetails): string | undefined {
  const range = event.inutilization;

  if (range === undefined) {
    return 'An inutilization requires the number range (signedEvent.inutilization).';
  }
  if (!/^\d{14}$/u.test(event.issuerTaxId)) {
    return 'An inutilization requires the 14-digit issuer CNPJ.';
  }
  if (!/^\d{2}$/u.test(range.cUF) || !/^\d{2}$/u.test(range.year)) {
    return 'cUF and year must have 2 digits.';
  }
  if (!Number.isInteger(range.series) || range.series < 0 || range.series > 999) {
    return 'series must be an integer from 0 to 999.';
  }
  if (!Number.isInteger(range.numberStart) || range.numberStart < 1 || range.numberStart > 999_999_999) {
    return 'numberStart must be an integer from 1 to 999999999.';
  }
  if (!Number.isInteger(range.numberEnd) || range.numberEnd < range.numberStart || range.numberEnd > 999_999_999) {
    return 'numberEnd must be an integer not lower than numberStart.';
  }
  if (range.numberEnd - range.numberStart + 1 > MAX_INUTILIZATION_RANGE) {
    return `An inutilization covers at most ${MAX_INUTILIZATION_RANGE} numbers.`;
  }
  if (!textBetween(event.justification, 15, 255)) {
    return 'The inutilization justification must have 15 to 255 characters without padding.';
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/u.test(event.eventDateTime)) {
    return 'eventDateTime must be an ISO 8601 date/time with UTC offset.';
  }
  return undefined;
}

/**
 * Builds the unsigned `inutNFe` (layout 4.00). The `Id` pads series (3) and numbers (9);
 * the elements carry them without padding, as the schema requires.
 *
 * @param environment - Lower-cased environment.
 * @param event - Validated inutilization details.
 * @returns The `inutNFe` XML and the `infInut` identifier.
 */
export function buildNFeInutilizationEnvelope(
  environment: string,
  event: NFeSignedEventDetails,
): { readonly id: string; readonly xml: string } {
  const range = event.inutilization as NonNullable<NFeSignedEventDetails['inutilization']>;
  const model = range.model ?? '55';
  const id =
    `ID${range.cUF}${range.year}${event.issuerTaxId}${model}` +
    `${String(range.series).padStart(3, '0')}${String(range.numberStart).padStart(9, '0')}` +
    `${String(range.numberEnd).padStart(9, '0')}`;
  const xml =
    `<inutNFe xmlns="${NFE_NAMESPACE}" versao="4.00"><infInut Id="${id}">` +
    `<tpAmb>${environment === 'production' ? '1' : '2'}</tpAmb><xServ>INUTILIZAR</xServ>` +
    `<cUF>${range.cUF}</cUF><ano>${range.year}</ano><CNPJ>${event.issuerTaxId}</CNPJ><mod>${model}</mod>` +
    `<serie>${range.series}</serie><nNFIni>${range.numberStart}</nNFIni><nNFFin>${range.numberEnd}</nNFFin>` +
    `<xJust>${escapeXml(event.justification ?? '')}</xJust></infInut></inutNFe>`;

  return { id, xml };
}

async function executeSignedInutilization(
  input: OperationalMaintenanceRequest,
  environment: string,
): Promise<OperationalMaintenanceOutcome> {
  const operation = input.operation;
  const event = input.signedEvent as NFeSignedEventDetails;

  if (environment !== 'homologation' && environment !== 'production') {
    return refusal(operation, 'unsupported-scope', environment, `Unsupported environment "${input.environment}".`);
  }
  const problem = validateInutilization(event);
  if (problem !== undefined) {
    return refusal(operation, 'usage-error', environment, problem);
  }
  const uf = (event.inutilization as NonNullable<NFeSignedEventDetails['inutilization']>).cUF;

  if (environment === 'production') {
    if (uf !== SP_UF) {
      return refusal(operation, 'unsupported-scope', environment, `Production inutilization currently supports issuer UF 35 only; received "${uf}".`);
    }
    if (!input.requestExecutor) {
      return refusal(operation, 'usage-error', environment, 'Production inutilization requires an injected requestExecutor for mTLS.');
    }
  }
  const { xml } = buildNFeInutilizationEnvelope(environment, event);
  const signedXml = stripDeclaration(
    await signInutilizationXml({ signingContext: event.signingContext, unsignedXml: xml }),
  );
  const transportOutcome = await executeNFeSoapService({
    authorizer: resolveIssuerAuthorizer(uf, environment, INUTILIZATION_SERVICE),
    environment,
    payloadXml: signedXml,
    requestExecutor: input.requestExecutor,
    service: INUTILIZATION_SERVICE,
    timeoutMs: input.timeoutMs,
    wireFormat: true,
  });

  return mapInutilizationOutcome(operation, transportOutcome, signedXml);
}

function mapInutilizationOutcome(
  operation: NFeMaintenanceOperation,
  transportOutcome: TransportOutcome,
  signedXml: string,
): OperationalMaintenanceOutcome {
  const base = mapOperationalMaintenanceTransportOutcome(operation, transportOutcome);
  const responseXml = transportOutcome.evidence.responseEnvelopeXml ?? '';
  const retInut = /<retInutNFe\b[\s\S]*?<\/retInutNFe>/u.exec(responseXml)?.[0];
  const reachedSefaz =
    transportOutcome.classification === 'success' ||
    transportOutcome.classification === 'functional-rejection';

  if (retInut === undefined || !reachedSefaz) {
    return { ...base, signedXml };
  }
  const code = firstTag(retInut, 'cStat') ?? '';
  const message = firstTag(retInut, 'xMotivo');
  const registered = code === '102';

  return {
    ...base,
    applicationStatusCode: code,
    applicationStatusMessage: message,
    classification: registered ? 'success' : 'rejected',
    failureReason: registered ? undefined : (message ?? base.failureReason),
    protocolNumber: firstTag(retInut, 'nProt'),
    signedXml,
    updatedState: registered ? base.updatedState : undefined,
    ...(registered
      ? { authorizedXml: `<ProcInutNFe xmlns="${NFE_NAMESPACE}" versao="4.00">${signedXml}${retInut}</ProcInutNFe>` }
      : {}),
  };
}

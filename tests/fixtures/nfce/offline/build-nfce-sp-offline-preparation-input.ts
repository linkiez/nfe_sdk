import {
  computeNFeAccessKey,
  createSigningContext,
} from '../../../../src/index.js';
import type { PrepareNFCeSPOfflineInput } from '../../../../src/index.js';
import { buildSPDanfeAuthorizationOutcome } from '../sp-danfe-authorization-outcomes.js';
import { createTestA1FixtureSource } from '../../signing/test-a1-fixture.js';

const CSC = { cscId: '000002', cscToken: 'test-token' };

interface NFCeSPOfflinePreparationFixtureOptions {
  readonly businessCalendarEvidence?: PrepareNFCeSPOfflineInput['businessCalendarEvidence'];
  readonly environment?: string;
  readonly issuedAt?: string;
  readonly submissionDeadline?: string;
}

/**
 * Builds a valid local SP offline-preparation input from sanitized test evidence.
 *
 * @param options - Optional environment and timestamp overrides for boundary tests.
 * @returns Unsigned offline XML, signing context, CSC, and a future deadline.
 */
export async function buildNFCeSPOfflinePreparationInput(
  options: NFCeSPOfflinePreparationFixtureOptions = {},
): Promise<PrepareNFCeSPOfflineInput> {
  const issuedAt =
    options.issuedAt ?? new Date(Date.now() - 60_000).toISOString();
  const timeZone = 'America/Sao_Paulo';
  const issueDateParts = new Map(
    new Intl.DateTimeFormat('en-CA', {
      day: '2-digit',
      month: '2-digit',
      timeZone,
      year: 'numeric',
    })
      .formatToParts(new Date(issuedAt))
      .map((part) => [part.type, part.value]),
  );
  const issueDate = `${issueDateParts.get('year')}-${issueDateParts.get('month')}-${issueDateParts.get('day')}`;
  const followingDate = new Date(`${issueDate}T00:00:00.000Z`);
  followingDate.setUTCDate(followingDate.getUTCDate() + 1);
  const firstBusinessDate = followingDate.toISOString().slice(0, 10);
  const deadline =
    options.submissionDeadline ?? `${firstBusinessDate}T23:59:59-03:00`;
  const businessCalendarEvidence = options.businessCalendarEvidence ?? {
    calendarId: 'fixture-calendar',
    evaluatedDates: [{ date: firstBusinessDate, isBusinessDay: true }],
    timeZone,
  };
  const [year, month] = issuedAt.slice(0, 7).split('-');
  const accessKey = computeNFeAccessKey({
    AAMM: `${year?.slice(-2)}${month}`,
    CNPJ: '12345678000123',
    cNF: '87654321',
    cUF: '35',
    mod: '65',
    nNF: '000000456',
    serie: '002',
    tpEmis: '9',
  }).chNFe;
  const requestEnvelopeXml =
    buildSPDanfeAuthorizationOutcome().transportOutcome?.evidence
      .requestEnvelopeXml ?? '';
  const nfeXml = /<NFe\b[\s\S]*?<\/NFe>/u.exec(requestEnvelopeXml)?.[0];
  if (nfeXml === undefined) throw new Error('NFC-e fixture is missing.');

  const unsignedXml = nfeXml
    .replace(/Id="NFe\d{44}"/u, `Id="NFe${accessKey}"`)
    .replace(/<dhEmi>[^<]+<\/dhEmi>/u, `<dhEmi>${issuedAt}</dhEmi>`)
    .replace(
      '<tpEmis>1</tpEmis>',
      `<tpEmis>9</tpEmis><dhCont>${issuedAt}</dhCont><xJust>Falha tecnica de comunicacao</xJust>`,
    )
    .replace(/<cDV>\d+<\/cDV>/u, `<cDV>${accessKey.slice(-1)}</cDV>`);
  const testCertificate = createTestA1FixtureSource();
  const signingContext = await createSigningContext({
    passphrase: testCertificate.passphrase,
    source: {
      contentBase64: testCertificate.certificateBase64,
      type: 'in-memory-content',
    },
  });

  return {
    csc: CSC,
    businessCalendarEvidence,
    environment: options.environment ?? 'production',
    signingContext,
    submissionDeadline: deadline,
    unsignedXml,
  };
}

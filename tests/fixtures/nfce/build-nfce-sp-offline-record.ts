import { createHash } from 'node:crypto';

import { computeNFeAccessKey } from '../../../src/canonical/nfe/access-key.js';
import type { NFCeSPOfflineRecord } from '../../../src/canonical/nfce/contracts.js';
import { buildSPDanfeAuthorizationOutcome } from './sp-danfe-authorization-outcomes.js';

/**
 * Builds a deterministic signed-record-shaped NFC-e fixture for offline workflow tests.
 *
 * @returns Pending SP offline record with matching SHA-1 signature digest and QR v2 URL.
 */
export function buildNFCeSPOfflineRecord(): NFCeSPOfflineRecord {
  const authorization = buildSPDanfeAuthorizationOutcome();
  const envelope = authorization.transportOutcome!.evidence.requestEnvelopeXml;
  const originalXml = envelope.match(/<NFe\b[\s\S]*?<\/NFe>/u)![0]!;
  const accessKey = computeNFeAccessKey({
    AAMM: '2605',
    CNPJ: '12345678000123',
    cNF: '87654321',
    cUF: '35',
    mod: '65',
    nNF: '000000456',
    serie: '002',
    tpEmis: '9',
  }).chNFe;
  const digest = Buffer.alloc(20);
  const signedXml = originalXml
    .replace(/Id="NFe\d{44}"/u, `Id="NFe${accessKey}"`)
    .replace(
      '<tpEmis>1</tpEmis>',
      '<tpEmis>9</tpEmis><dhCont>2026-05-20T10:30:00-03:00</dhCont><xJust>Falha tecnica de comunicacao</xJust>',
    )
    .replace('<cDV>9</cDV>', `<cDV>${accessKey.slice(-1)}</cDV>`)
    .replace(
      '</NFe>',
      `<Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><DigestValue>${digest.toString('base64')}</DigestValue></Signature></NFe>`,
    );
  const totalValue = /<vNF>([^<]+)<\/vNF>/u.exec(signedXml)![1]!;
  const parameters = [
    accessKey,
    '2',
    '1',
    '20',
    totalValue,
    digest.toString('hex'),
    '2',
  ];
  const hash = createHash('sha1')
    .update(`${parameters.join('|')}|test-token`, 'utf8')
    .digest('hex');

  return {
    accessKey,
    businessCalendarEvidence: {
      calendarId: 'fixture-calendar',
      evaluatedDates: [{ date: '2026-05-21', isBusinessDay: true }],
      timeZone: 'America/Sao_Paulo',
    },
    environment: 'production',
    issuedAt: '2026-05-20T10:30:00-03:00',
    qrCodeUrl: `${authorization.qrCodeUrl!.split('?')[0]}?p=${[...parameters, hash].join('|')}`,
    signedXml,
    signedXmlSha256: createHash('sha256').update(signedXml).digest('hex'),
    submissionDeadline: '2026-05-21T23:59:59-03:00',
    status: 'pending-reconciliation',
  };
}

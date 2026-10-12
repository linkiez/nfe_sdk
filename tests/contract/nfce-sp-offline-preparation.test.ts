import { prepareNFCeSPOffline, renderNFCeSPDANFE } from '../../src/index.js';
import type {
  NFCeSPOfflineDanfeResult,
  NFCeSPOfflineRecord,
  PrepareNFCeSPOfflineInput,
  RenderNFCeSPDANFEOfflineInput,
} from '../../src/index.js';

describe('public offline NFC-e preparation contract', () => {
  it('exports local preparation and offline pending DANFE types', () => {
    const preparation: Pick<
      PrepareNFCeSPOfflineInput,
      'businessCalendarEvidence' | 'environment' | 'submissionDeadline'
    > = {
      businessCalendarEvidence: {
        calendarId: 'fixture-calendar',
        evaluatedDates: [{ date: '2030-05-21', isBusinessDay: true }],
        timeZone: 'America/Sao_Paulo',
      },
      environment: 'production',
      submissionDeadline: '2030-05-21T23:59:59-03:00',
    };
    const record: Pick<NFCeSPOfflineRecord, 'status' | 'signedXmlSha256'> = {
      status: 'pending-reconciliation',
      signedXmlSha256: 'a'.repeat(64),
    };
    const danfeInput: Pick<RenderNFCeSPDANFEOfflineInput, 'paperWidthMm'> = {
      paperWidthMm: 80,
    };
    const result: Pick<
      NFCeSPOfflineDanfeResult,
      'classification' | 'mediaType'
    > = {
      classification: 'pending-authorization',
      mediaType: 'text/html',
    };

    expect(typeof prepareNFCeSPOffline).toBe('function');
    expect(typeof renderNFCeSPDANFE).toBe('function');
    expect(preparation.environment).toBe('production');
    expect(preparation.businessCalendarEvidence.calendarId).toBe(
      'fixture-calendar',
    );
    expect(record.status).toBe('pending-reconciliation');
    expect(danfeInput.paperWidthMm).toBe(80);
    expect(result.classification).toBe('pending-authorization');
  });
});

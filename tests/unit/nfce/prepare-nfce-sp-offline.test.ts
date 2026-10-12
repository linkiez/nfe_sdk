import { createHash } from 'node:crypto';
import { prepareNFCeSPOffline } from '../../../src/index';
import { buildNFCeSPOfflinePreparationInput } from '../../fixtures/nfce/offline/build-nfce-sp-offline-preparation-input';

describe('prepareNFCeSPOffline', () => {
  it('signs an eligible offline XML locally and returns a pending record with an offline QR v2 URL', async () => {
    const record = await prepareNFCeSPOffline(
      await buildNFCeSPOfflinePreparationInput(),
    );

    expect(record.status).toBe('pending-reconciliation');
    expect(record.accessKey).toMatch(/^35\d{42}$/u);
    expect(record.signedXml).toContain('<Signature');
    expect(record.signedXmlSha256).toBe(
      createHash('sha256').update(record.signedXml).digest('hex'),
    );
    expect(record.qrCodeUrl).toContain(
      `?p=${record.accessKey}|2|1|${record.issuedAt.slice(8, 10)}|`,
    );
    expect(record.qrCodeUrl).not.toContain('test-token');
    expect(JSON.stringify(record)).not.toContain('test-token');
  });

  it('rejects XML that does not declare offline emission', async () => {
    const input = await buildNFCeSPOfflinePreparationInput();
    const unsignedXml = input.unsignedXml.replace(
      '<tpEmis>9</tpEmis>',
      '<tpEmis>1</tpEmis>',
    );

    await expect(
      prepareNFCeSPOffline({ ...input, unsignedXml }),
    ).rejects.toThrow(/tpEmis/u);
  });

  it('rejects an already-expired submission deadline', async () => {
    const input = await buildNFCeSPOfflinePreparationInput({
      issuedAt: '2020-12-01T10:30:00-03:00',
      submissionDeadline: '2020-12-02T23:59:59-03:00',
    });

    await expect(prepareNFCeSPOffline(input)).rejects.toThrow(
      /submissionDeadline/u,
    );
  });

  it('requires evidence that identifies the first following business day', async () => {
    const input = await buildNFCeSPOfflinePreparationInput();
    const missingEvidence = { ...input };
    Reflect.deleteProperty(missingEvidence, 'businessCalendarEvidence');

    await expect(prepareNFCeSPOffline(missingEvidence)).rejects.toThrow(
      /business calendar evidence/u,
    );
  });

  it('rejects a future deadline later than the first business day in the evidence', async () => {
    const input = await buildNFCeSPOfflinePreparationInput({
      issuedAt: '2030-05-20T10:30:00-03:00',
      submissionDeadline: '2030-05-21T23:59:59-03:00',
    });
    const lateDeadline = {
      ...input,
      businessCalendarEvidence: {
        calendarId: 'fixture-calendar',
        evaluatedDates: [{ date: '2030-05-21', isBusinessDay: true }],
        timeZone: 'America/Sao_Paulo',
      },
      submissionDeadline: '2030-05-25T23:59:59-03:00',
    };

    await expect(prepareNFCeSPOffline(lateDeadline)).rejects.toThrow(
      /first following business day/u,
    );
  });

  it('requires the exact end of the first following business day', async () => {
    const input = await buildNFCeSPOfflinePreparationInput({
      issuedAt: '2030-05-20T10:30:00-03:00',
      submissionDeadline: '2030-05-21T23:59:58-03:00',
      businessCalendarEvidence: {
        calendarId: 'fixture-calendar',
        evaluatedDates: [{ date: '2030-05-21', isBusinessDay: true }],
        timeZone: 'America/Sao_Paulo',
      },
    });

    await expect(prepareNFCeSPOffline(input)).rejects.toThrow(
      /first following business day/u,
    );
  });

  it('rejects a CSC identifier that cannot be used for offline QR composition', async () => {
    const input = await buildNFCeSPOfflinePreparationInput();

    await expect(
      prepareNFCeSPOffline({
        ...input,
        csc: { ...input.csc, cscId: '0' },
      }),
    ).rejects.toThrow(/CSC identifier/u);
  });
});

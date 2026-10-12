import { prepareNFCeSPOffline } from '../../../src/index.js';
import { buildNFCeSPOfflinePreparationInput } from '../../fixtures/nfce/offline/build-nfce-sp-offline-preparation-input.js';

describe('prepareNFCeSPOffline integration', () => {
  it('signs an eligible SP document locally and returns a non-authorized pending record', async () => {
    const input = await buildNFCeSPOfflinePreparationInput();

    const record = await prepareNFCeSPOffline(input);

    expect(record.status).toBe('pending-reconciliation');
    expect(record.signedXml).toContain('<Signature');
    expect(record.accessKey).toMatch(/^35\d{42}$/u);
    expect(record.signedXmlSha256).toMatch(/^[a-f\d]{64}$/u);
    expect(record.qrCodeUrl).toContain(`?p=${record.accessKey}|2|1|`);
    expect(record).not.toHaveProperty('transportOutcome');
  });

  it('rejects a mismatched environment, issuer identity, and expired deadline', async () => {
    const validInput = await buildNFCeSPOfflinePreparationInput();
    const wrongEnvironment = await buildNFCeSPOfflinePreparationInput({
      environment: 'homologation',
    });
    const wrongIssuer = {
      ...validInput,
      unsignedXml: validInput.unsignedXml.replace(
        '<CNPJ>12345678000123</CNPJ>',
        '<CNPJ>99999999000199</CNPJ>',
      ),
    };
    const expiredInput = await buildNFCeSPOfflinePreparationInput({
      issuedAt: '2020-12-01T10:30:00-03:00',
      submissionDeadline: '2020-12-02T23:59:59-03:00',
    });

    await expect(prepareNFCeSPOffline(wrongEnvironment)).rejects.toThrow(
      /environment/u,
    );
    await expect(prepareNFCeSPOffline(wrongIssuer)).rejects.toThrow(
      /issuer tax identifier/u,
    );
    await expect(prepareNFCeSPOffline(expiredInput)).rejects.toThrow(
      /submissionDeadline/u,
    );
  });
});
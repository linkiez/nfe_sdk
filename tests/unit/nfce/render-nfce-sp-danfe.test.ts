import { buildNFCeSPOfflineRecord } from '../../fixtures/nfce/build-nfce-sp-offline-record.js';
import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/canonical/nfce/render-nfce-sp-danfe.js';

describe('renderNFCeSPDANFE', () => {
  it('renders an offline record as pending without an authorization protocol', async () => {
    const record = buildNFCeSPOfflineRecord();
    const result = await renderNFCeSPDANFE({ offlineRecord: record });

    expect(result.classification).toBe('pending-authorization');
    expect(result.html).toContain(
      'EMITIDA EM CONTINGÊNCIA Pendente de autorização',
    );
    expect(result.html).not.toContain('Protocolo de autorização');
    expect(result.html).toContain(record.qrCodeUrl);
    expect(result.signedXmlSha256).toBe(record.signedXmlSha256);
  });

  it('rejects outcomes that are not authorized', async () => {
    const authorization = {
      ...buildSPDanfeAuthorizationOutcome(),
      classification: 'rejected',
    } as const;

    await expect(
      renderNFCeSPDANFE({ authorization }),
    ).rejects.toThrow(/authorized/u);
  });

  it('rejects authorization evidence with a mismatched response key', async () => {
    const authorization = buildSPDanfeAuthorizationOutcome();
    const responseEnvelopeXml =
      authorization.transportOutcome!.evidence.responseEnvelopeXml!.replace(
        '35260512345678000123650020000004561876543219',
        '35260512345678000123650020000004561876543210',
      );

    await expect(
      renderNFCeSPDANFE({
        authorization: {
          ...authorization,
          transportOutcome: {
            ...authorization.transportOutcome!,
            evidence: {
              ...authorization.transportOutcome!.evidence,
              responseEnvelopeXml,
            },
          },
        },
      }),
    ).rejects.toThrow(/access key|chNFe|key/u);
  });

  it('rejects missing or malformed SOAP evidence', async () => {
    const authorization = buildSPDanfeAuthorizationOutcome();

    await expect(
      renderNFCeSPDANFE({
        authorization: {
          ...authorization,
          transportOutcome: undefined,
        },
      }),
    ).rejects.toThrow(/SOAP request evidence/u);

    await expect(
      renderNFCeSPDANFE({
        authorization: {
          ...authorization,
          transportOutcome: {
            ...authorization.transportOutcome!,
            evidence: {
              ...authorization.transportOutcome!.evidence,
              requestEnvelopeXml: '<soap:Envelope',
            },
          },
        },
      }),
    ).rejects.toThrow(/malformed request envelope XML/u);
  });

  it('rejects mismatched protocol and consultation URL evidence', async () => {
    const authorization = buildSPDanfeAuthorizationOutcome();

    await expect(
      renderNFCeSPDANFE({
        authorization: { ...authorization, protocolNumber: '99999999999999999' },
      }),
    ).rejects.toThrow(/protocol does not match/u);

    await expect(
      renderNFCeSPDANFE({
        authorization: { ...authorization, qrCodeUrl: 'https://example.test/' },
      }),
    ).rejects.toThrow(/QR Code URL/u);
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, 55, 211])(
    'rejects unsupported paper width %s',
    async (paperWidthMm) => {
      await expect(
        renderNFCeSPDANFE({
          authorization: buildSPDanfeAuthorizationOutcome(),
          paperWidthMm,
        }),
      ).rejects.toThrow(/paperWidthMm/u);
    },
  );

  it('escapes fiscal text instead of inserting source text as markup', async () => {
    const authorization = buildSPDanfeAuthorizationOutcome();
    const requestEnvelopeXml =
      authorization.transportOutcome!.evidence.requestEnvelopeXml.replace(
        'Cafe &amp; acucar',
        '&lt;script&gt;alert(1)&lt;/script&gt;',
      );

    const result = await renderNFCeSPDANFE({
      authorization: {
        ...authorization,
        transportOutcome: {
          ...authorization.transportOutcome!,
          evidence: {
            ...authorization.transportOutcome!.evidence,
            requestEnvelopeXml,
          },
        },
      },
    });

    expect(result.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(result.html).not.toContain('<script>alert(1)</script>');
  });
});

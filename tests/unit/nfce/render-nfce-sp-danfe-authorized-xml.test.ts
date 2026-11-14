import { createHash } from 'node:crypto';

import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/canonical/nfce/render-nfce-sp-danfe.js';

const KEY = '35260512345678000123650020000004561876543219';

/** Builds the `nfeProc` of the sanitized fixture: its signed NFe plus the authorized `protNFe`. */
function buildAuthorizedXml(
  environment: 'homologation' | 'production' = 'production',
  override: {
    readonly nfe?: (xml: string) => string;
    readonly prot?: (xml: string) => string;
  } = {},
): string {
  const { transportOutcome } = buildSPDanfeAuthorizationOutcome(environment);
  const request = transportOutcome!.evidence.requestEnvelopeXml;
  const response = transportOutcome!.evidence.responseEnvelopeXml!;
  const nfe = /<NFe [\s\S]*<\/NFe>/u.exec(request)![0];
  const prot = /<protNFe>[\s\S]*<\/protNFe>/u.exec(response)![0];
  const proc = (value: string, fn?: (xml: string) => string) =>
    fn ? fn(value) : value;

  return `<nfeProc xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">${proc(nfe, override.nfe)}${proc(prot, override.prot)}</nfeProc>`;
}

describe('renderNFCeSPDANFE from the authorized XML', () => {
  it('renders the DANFE of an authorized nfeProc with its protocol and the v3 QR Code', async () => {
    const authorizedXml = buildAuthorizedXml();

    const result = await renderNFCeSPDANFE({ authorizedXml });

    expect(result.accessKey).toBe(KEY);
    expect(result.environment).toBe('production');
    expect(result.protocolNumber).toBe('13526000000000001');
    expect(result.mediaType).toBe('text/html');
    expect(result.html).toContain(
      'Protocolo de autorização: 13526000000000001',
    );
    expect(result.html).toContain(`?p=${KEY}|3|1`);
    const digest = createHash('sha256')
      .update(authorizedXml, 'utf8')
      .digest('hex');
    expect(result.authorizedXmlSha256).toBe(digest);
    expect(result.html).toContain('nfe-sdk-authorized-xml-sha256');
    expect(result.html).toContain(digest);
  });

  it('renders the homologation environment and honors the paper width', async () => {
    const result = await renderNFCeSPDANFE({
      authorizedXml: buildAuthorizedXml('homologation'),
      paperWidthMm: 58,
    });

    expect(result.environment).toBe('homologation');
    expect(result.html).toContain(`?p=${KEY}|3|2`);
    expect(result.html).toContain('58mm');
  });

  it('accepts a late authorization (cStat 150)', async () => {
    const result = await renderNFCeSPDANFE({
      authorizedXml: buildAuthorizedXml('production', {
        prot: (xml) => xml.replace('<cStat>100</cStat>', '<cStat>150</cStat>'),
      }),
    });

    expect(result.protocolNumber).toBe('13526000000000001');
  });

  it.each([
    [
      'a protocol that does not authorize the note',
      {
        prot: (xml: string) =>
          xml.replace('<cStat>100</cStat>', '<cStat>110</cStat>'),
      },
      /authoriz/u,
    ],
    [
      'a protocol of another access key',
      {
        prot: (xml: string) =>
          xml.replace(
            `<chNFe>${KEY}`,
            '<chNFe>35260512345678000123650020000004561876543210',
          ),
      },
      /access key|chNFe|key/u,
    ],
    [
      'a protocol of another environment',
      {
        prot: (xml: string) =>
          xml.replaceAll('<tpAmb>1</tpAmb>', '<tpAmb>2</tpAmb>'),
      },
      /tpAmb|environment/u,
    ],
    [
      'a note that is not from SP',
      { nfe: (xml: string) => xml.replace('<cUF>35</cUF>', '<cUF>41</cUF>') },
      /SP/u,
    ],
    [
      'a model 55 note',
      { nfe: (xml: string) => xml.replace('<mod>65</mod>', '<mod>55</mod>') },
      /model 65/u,
    ],
  ])('refuses %s', async (_label, override, message) => {
    await expect(
      renderNFCeSPDANFE({
        authorizedXml: buildAuthorizedXml('production', override),
      }),
    ).rejects.toThrow(message);
  });

  it('refuses a QR Code in the XML that differs from the one of the access key', async () => {
    const authorizedXml = buildAuthorizedXml('production', {
      nfe: (xml) =>
        xml.replace(
          '</infNFe>',
          '</infNFe><infNFeSupl><qrCode><![CDATA[https://example.test/?p=1|3|1]]></qrCode><urlChave>https://example.test</urlChave></infNFeSupl>',
        ),
    });

    await expect(renderNFCeSPDANFE({ authorizedXml })).rejects.toThrow(
      /QR Code/u,
    );
  });

  it('refuses a document without the authorization protocol', async () => {
    await expect(
      renderNFCeSPDANFE({
        authorizedXml: buildAuthorizedXml('production', { prot: () => '' }),
      }),
    ).rejects.toThrow(/protocol/u);
  });

  it('refuses malformed XML and a root that is not nfeProc', async () => {
    await expect(
      renderNFCeSPDANFE({ authorizedXml: '<nfeProc' }),
    ).rejects.toThrow(/malformed/u);
    await expect(
      renderNFCeSPDANFE({
        authorizedXml: buildAuthorizedXml().replace(/nfeProc/gu, 'other'),
      }),
    ).rejects.toThrow(/nfeProc/u);
  });

  it('refuses the establishment copy and unsupported paper widths', async () => {
    const authorizedXml = buildAuthorizedXml();

    await expect(
      renderNFCeSPDANFE({ authorizedXml, copy: 'establishment' }),
    ).rejects.toThrow(/establishment/u);
    await expect(
      renderNFCeSPDANFE({ authorizedXml, paperWidthMm: 30 }),
    ).rejects.toThrow(/paperWidthMm/u);
  });
});

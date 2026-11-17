import { buildSPDanfeAuthorizationOutcome } from '../../fixtures/nfce/sp-danfe-authorization-outcomes.js';
import { renderNFCeSPDANFE } from '../../../src/canonical/nfce/render-nfce-sp-danfe.js';

const LOGO = 'data:image/png;base64,iVBORw0KGgo=';

function buildAuthorizedXml(): string {
  const { transportOutcome } = buildSPDanfeAuthorizationOutcome('production');
  const request = transportOutcome!.evidence.requestEnvelopeXml;
  const response = transportOutcome!.evidence.responseEnvelopeXml!;
  const nfe = /<NFe [\s\S]*<\/NFe>/u.exec(request)![0];
  const prot = /<protNFe>[\s\S]*<\/protNFe>/u.exec(response)![0];

  return `<nfeProc xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00">${nfe}${prot}</nfeProc>`;
}

describe('renderNFCeSPDANFE issuer logo', () => {
  it('draws the logo before the issuer name when one is given', async () => {
    const { html } = await renderNFCeSPDANFE({
      authorizedXml: buildAuthorizedXml(),
      logo: LOGO,
    });

    expect(html).toContain(`<img class="issuer-logo" src="${LOGO}"`);
    expect(html.indexOf('issuer-logo" src')).toBeLessThan(html.indexOf('<h1>'));
  });

  it('draws no image when no logo is given', async () => {
    const { html } = await renderNFCeSPDANFE({
      authorizedXml: buildAuthorizedXml(),
    });

    expect(html).not.toContain('<img');
  });

  it.each([
    ['an http URL', 'https://example.test/logo.png'],
    ['plain text', 'logo.png'],
    ['a non-image data URI', 'data:text/html;base64,PHNjcmlwdD4='],
    ['an svg data URI', 'data:image/svg+xml;base64,PHN2Zz4='],
    ['an attribute-breaking value', 'data:image/png;base64,AAAA" onerror="x'],
    ['an empty string', ' '],
  ])('refuses %s as the logo', async (_name, logo) => {
    await expect(
      renderNFCeSPDANFE({ authorizedXml: buildAuthorizedXml(), logo }),
    ).rejects.toMatchObject({ name: 'NFCeOperationalUsageError' });
  });
});

# Research: NFC-e SP DANFE Rendering

**Feature**: `028-nfce-sp-danfe`
**Consulted**: 2026-10-12

## Decisions

### Output: Self-contained HTML with inline SVG QR

- **Decision**: Return one HTML document as a string, with semantic markup, print CSS and an inline vector QR. Support digital viewing and browser printing from 56 mm receipt width through 210 mm A4 portrait width. Do not ship PDF/PNG generation.
- **Rationale**: HTML covers the spec's digital and common-printer paths without adding a PDF engine, native renderer, external asset host or file-system API. Print sizing remains explicit and browser-based PDF is available to consumers without an SDK promise.
- **Alternatives considered**: SVG-only output cannot naturally represent all DANFE text/layout as one accessible document; direct PDF adds an independent pagination/font/rendering subsystem; image output weakens selectable text and accessibility.

### Evidence input and authorization boundary

- **Decision**: Accept an `NFCeAuthorizationOutcome` returned by the SDK and extract the signed NFC-e XML from its captured SOAP request envelope. Require `classification === 'authorized'`, both request and response transport evidence, matching access key/environment/protocol, and the outcome's matching official SP QR v3 URL. Refuse missing or inconsistent evidence.
- **Rationale**: `SoapExchangeEvidence` retains the exact request and response envelope XML, while the NFC-e outcome carries that evidence and the optional QR URL. Extracting the signed document from the request avoids a second caller-supplied XML that could disagree with the transaction actually sent. The renderer correlates request, response and QR without redefining authorization status rules.
- **Alternatives considered**: Accepting an additional XML input duplicates data and permits accidental mismatch. Rendering from authorization classification alone omits line items and authorization identity. Accepting a standalone QR URL/key would permit document/environment mismatch.

### QR generation

- **Decision**: Use the `qrcode` package's async SVG string API, with correction level M, and embed the resulting SVG. Require a 25 mm square minimum comprising 22 mm of QR content and 3 mm of quiet-zone allowance; at larger sizes reserve 10% for the safe margin. Keep URL composition in the existing SP QR helper.
- **Rationale**: Manual v6.0 section 4.5.2 mandates correction level M and section 3.1.5 specifies the physical footprint. The Node package documents Promise-based `toString` with SVG output and explicit width/margin/error-correction options. This keeps QR rendering local and avoids canvas/image dependencies at runtime.
- **Alternatives considered**: Raster QR has resolution-dependent scan quality; implementing QR encoding is unnecessary; regenerating the URL would duplicate the existing fiscal rule. A decoder plus rasterizer may be added only to test dependencies to verify scanning of the final SVG.

### Supported fiscal scope

- **Decision**: Support SP model 65 in production and homologation, full item detail only. Print the mandatory centered uppercase homologation warning. Reject paper widths below 56 mm or above the selected maximum (A4 portrait width, 210 mm). Exclude ECF, contingency, consumer-agreed summary output, other UFs and SDK-owned PDF export.
- **Rationale**: The manual defines the two environments, homologation notice, minimum paper width, A4 allowance and full-detail field set. It permits summarized output only under state rules and consumer agreement; there is no such agreement input in this feature contract, so the conservative full-detail layout is deterministic.
- **Alternatives considered**: Omitting the homologation label conflicts with the manual. Silently dropping long items or values risks fiscal misrepresentation. State-specific summary/DANFE variations require separate evidence and consent contracts.

### Source currency and SP delta

- **Decision**: Use national manual v6.0 (March 2025) as the layout baseline. Apply SP Portaria SRE 40/2024, as amended by SRE 81/2025, and current SEFAZ/SP notices. Do not constrain authorization protocol length; the current SP page states a 17-digit production protocol effective 2026-10-05. No separate SP print-layout delta was identified in the official sources checked through 2026-10-12.
- **Rationale**: The Portal Nacional publication history lists v6.0 as the latest manual. SP's Portaria adopts the national DANFE specification; the newer SP protocol notice changes an authorization value's length, not its layout. Layout absence is scoped to checked sources, not asserted as a universal negative.
- **Alternatives considered**: Treating SP as an independent layout without evidence would create unsupported divergence; fixing protocol length to 15 digits would truncate the current protocol.

### Roadmap alignment

- **Decision**: Treat feature 028 as a bounded runtime promotion for SP's DANFE representation under RFL-006; keep broader consultation, CSC/onboarding, contingency and multi-UF behavior outside the slice.
- **Rationale**: The older `nfce-operacional-promovivel.md` classifies DANFE as example/documentation, but the newer `recortes-funcionais-prioritarios.md` explicitly includes DANFE in RFL-006's SP production runtime/tooling closure. Feature 028 already specifies the additive runtime renderer and is narrowly limited to SP.
- **Alternatives considered**: Blocking runtime contradicts the current feature spec and newer priority slice. Generalizing the renderer to all UFs would exceed the source evidence and feature boundary.

## Normative Source Findings

| Source                                             | Confirmed finding                                                                                                                                                                                                                     | Boundary                                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| National Manual v6.0, sections 3.1.1-3.1.8         | Merchant identity/address, DANFE label, item detail, totals/payment, consumer identification, key/lookup, issue/authorization data and fiscal messages are sourced from XML, with authorization return values as permitted additions. | Full field mapping belongs to the data model and implementation tests.               |
| National Manual v6.0, section 3.1.5                | QR area is at least 25 x 25 mm, with 22 mm content and 3 mm safe/quiet-zone allowance; above 25 mm use a 10% margin.                                                                                                                  | Verify the final SVG physical size and actual scanner readability.                   |
| National Manual v6.0, section 3.2                  | Paper width at least 56 mm, lateral margins at least 2 mm, A4 allowed, ECF prohibited, legibility expected for six months.                                                                                                            | Software controls layout, not printer/media durability.                              |
| National Manual v6.0, section 4.5.2                | QR error-correction level M.                                                                                                                                                                                                          | Library option must be explicitly pinned in generation tests.                        |
| National Manual v6.0, homologation rule            | Centered uppercase warning: `EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL`.                                                                                                                                                  | Applies to every homologation output.                                                |
| SP Portaria SRE 40/2024, as amended by SRE 81/2025 | SP adopts the national DANFE NFC-e rules in the checked current text.                                                                                                                                                                 | No distinct SP layout delta found in the checked Article 5; re-check before release. |
| SEFAZ/SP NFC-e service page                        | Production authorization protocol changes to 17 digits effective 2026-10-05.                                                                                                                                                          | Protocol must remain an unbounded source string; never truncate to an old width.     |

## Sources

Primary normative sources:

- Internalized Manual de Especificações Técnicas do DANFE NFC-e e QR Code v6.0: [source markdown](../../docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324%20-%20Manual_de_Especifica%C3%A7%C3%B5es_T%C3%A9cnicas_do_DANFE_NFC-e_QR_Code.md); original official [Portal Nacional manual listing](https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=ndIjl+iEFdE=), [v6.0 PDF](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=k/IuuaW4YiY=), and [version history](https://www.nfe.fazenda.gov.br/portal/listaHistorico.aspx?tipoConteudo=Ef%20Y1blZDbU=).
- [SP Portaria SRE 40/2024, consolidated text](https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-40-de-2024.aspx) and [Portaria SRE 81/2025](https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-81-de-2025.aspx).
- [SEFAZ/SP NFC-e service page](https://portal.fazenda.sp.gov.br/servicos/nfce) and [official SP WebServices/QR endpoints](https://portal.fazenda.sp.gov.br/servicos/nfce/Paginas/WebServices.aspx).
- MOC 7.0 (November 2020), only where the manual points to national authorization behavior; see source registry `SRC-RH-002`.

Supplementary, non-normative implementation reference:

- [`qrcode` Node API documentation](https://github.com/soldair/node-qrcode): SVG via `toString(text, { type: 'svg', width })`, Promise result, `errorCorrectionLevel: 'M'`, and renderer margin options. Package documentation does not replace the fiscal manual.

No approved secondary fiscal reference was needed. Official pages were checked on 2026-10-12; dynamic portal rendering and the bounded source set mean this research does not prove that no separate unpublished or unindexed SP guidance exists.

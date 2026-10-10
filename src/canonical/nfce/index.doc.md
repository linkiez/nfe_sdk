# src/canonical/nfce/index.ts

## Visao geral

Agrupa a superficie manual do slice operacional de NFC-e, incluindo a autorizacao homologada do cohort `SP + PR` e o helper paulista de `QR Code` publicado de forma additive.

## Responsabilidades

- Expor a orquestracao inicial de `authorizeNFCe`.
- Expor o helper `generateNFCeSPQRCode` para composicao local do `QR Code` paulista.
- Publicar contratos e erros especificos do slice NFC-e.
- Reaproveitar o pipeline operacional de NF-e sem promover a arvore gerada como API publica.

## Dependencias e integracoes

- `src/canonical/facade/authorize-nfce.ts`
- `src/canonical/facade/generate-nfce-sp-qr-code.ts`
- `src/canonical/nfe/authorize-nfe.ts`
- `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`
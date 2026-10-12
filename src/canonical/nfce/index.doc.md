# src/canonical/nfce/index.ts

## Visao geral

Agrupa a superficie manual do slice operacional de NFC-e, incluindo a autorizacao homologada do cohort `SP + PR`, o helper paulista de `QR Code` e o renderer HTML DANFE de `SP`.

## Responsabilidades

- Expor a orquestracao inicial de `authorizeNFCe`.
- Expor o helper `generateNFCeSPQRCode` para composicao local do `QR Code` paulista.
- Expor `prepareNFCeSPOffline` e `reconcileNFCeSPOffline` com os tipos de evidencia de calendario e resultado one-shot.
- Expor `renderNFCeSPDANFE` para resultados autorizados correlacionados e registros offline pendentes de SP.
- Publicar contratos e erros especificos do slice NFC-e.
- Reaproveitar o pipeline operacional de NF-e sem promover a arvore gerada como API publica.

## Dependencias e integracoes

- `src/canonical/facade/authorize-nfce.ts`
- `src/canonical/facade/generate-nfce-sp-qr-code.ts`
- `render-nfce-sp-danfe.ts`
- `prepare-nfce-sp-offline.ts`
- `reconcile-nfce-sp-offline.ts`
- `offline-business-calendar.ts`
- `src/canonical/facade/render-nfce-sp-danfe.ts`
- `src/canonical/nfe/authorize-nfe.ts`
- `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`
# src/canonical/nfce/index.ts

## Visao geral

Agrupa a superficie manual inicial do slice operacional de NFC-e.

## Responsabilidades

- Expor a orquestracao inicial de `authorizeNFCe`.
- Publicar contratos e erros especificos do slice NFC-e.
- Reaproveitar o pipeline operacional de NF-e sem promover a arvore gerada como API publica.

## Dependencias e integracoes

- `src/canonical/facade/authorize-nfce.ts`
- `src/canonical/nfe/authorize-nfe.ts`
- `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`
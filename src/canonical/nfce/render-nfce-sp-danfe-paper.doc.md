# render-nfce-sp-danfe-paper

## Visão geral

Valida a largura do papel do DANFE NFC-e (HTML e PDF): padrao 80 mm, aceita de 56 a 210 mm.

## Responsabilidades

- Usar 80 mm quando a largura nao e informada.
- Recusar largura nao finita ou fora do intervalo.

## Entradas e saídas

`resolveNFCePaperWidth(paperWidthMm?: number): number`.

## Fluxo principal

Chamado por `renderNFCeSPDANFE` e `renderNFCeSPDANFEPdf` antes de qualquer desenho.

## Tratamento de erros e casos-limite

`NFCeOperationalUsageError`: "renderNFCeSPDANFE paperWidthMm must be between 56 and 210 mm.".

## Exemplos

```ts
resolveNFCePaperWidth(undefined); // 80
resolveNFCePaperWidth(58); // 58
```

## Dependências e integrações

`errors`.

# src/canonical/facade/distribute-recipient-dfe.ts

## Visao geral

Wrapper publico que expoe `distributeRecipientDFe` no import raiz do pacote.

## Responsabilidades

- Receber o request estruturado do integrador.
- Delegar a execucao para a camada recipient interna.
- Preservar a fronteira entre facade publica e implementacao operacional.

## Entradas e saidas

- Entradas: `RecipientDistributionQuery`.
- Saidas: `Promise<RecipientDistributionOutcome>`.

## Dependencias e integracoes

- `../recipient/distribute-recipient-dfe.js`
- `../recipient/recipient-shared.js`
# src/canonical/facade/manifest-recipient-operation.ts

## Visao geral

Wrapper publico que expoe `manifestRecipientOperation` no import raiz do pacote.

## Responsabilidades

- Receber o request estruturado de manifestacao.
- Delegar a execucao para a camada recipient interna.
- Manter o contrato root desacoplado da implementacao operacional.

## Entradas e saidas

- Entradas: `RecipientManifestationRequest`.
- Saidas: `Promise<RecipientManifestationOutcome>`.

## Dependencias e integracoes

- `../recipient/manifest-recipient-operation.js`
- `../recipient/recipient-shared.js`
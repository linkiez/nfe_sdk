# src/canonical/recipient/index.ts

## Visao geral

Barrel interno do slice recipient que agrupa distribuicao DFe, manifestacao e os tipos publicos compartilhados do destinatario.

## Responsabilidades

- Reexportar a orquestracao de `distributeRecipientDFe`.
- Reexportar a orquestracao de `manifestRecipientOperation`.
- Reexportar os tipos publicos usados pelo contrato recipient.

## Entradas e saidas

- Entradas: nenhuma.
- Saidas: funcoes e tipos do slice recipient consumidos pela facade publica.

## Dependencias e integracoes

- `./distribute-recipient-dfe.js`
- `./manifest-recipient-operation.js`
- `./recipient-shared.js`
# src/canonical/recipient/distribute-recipient-dfe.ts

## Visao geral

Executa a distribuicao DFe do destinatario no recorte homologado via `distNSU`.

## Responsabilidades

- Validar ambiente, ator e cursor `ultNSU`.
- Montar o payload minimo `distDFeInt` para o Ambiente Nacional.
- Reutilizar a camada SOAP e mapear o retorno para `RecipientDistributionOutcome`.

## Entradas e saidas

- Entradas: `RecipientDistributionQuery`.
- Saidas: `Promise<RecipientDistributionOutcome>`.

## Tratamento de erros e casos-limite

- Produz `unsupported-scope` fora de `homologation`.
- Produz `usage-error` para CPF/CNPJ fora do recorte ou `ultNSU` invalido.
- Delega classificacao de transporte e de estados operacionais ao mapper de distribuicao.

## Dependencias e integracoes

- `../transport/execute-nfe-soap-service.js`
- `./recipient-coverage-boundary.js`
- `./recipient-distribution-outcome.js`
- `./recipient-shared.js`
## Janela de nova consulta (`continuation.nextAllowedAt`)

O resultado informa, em `continuation.nextAllowedAt` (ISO 8601), o instante mínimo para uma nova consulta de distribuição. Regra oficial: quando `ultNSU` é igual a `maxNSU` após a chamada, após lote vazio (`cStat` 137) e após consumo indevido (`cStat` 656, classificado como `usage-error`), a espera é de no mínimo 1 hora. Enquanto `maxNSU` estiver à frente de `ultNSU`, não há `nextAllowedAt` e a próxima página pode ser pedida de imediato. O campo prevalece sobre `recommendedBackoffMs`. `RecipientDistributionQuery.now` permite injetar o relógio em testes.

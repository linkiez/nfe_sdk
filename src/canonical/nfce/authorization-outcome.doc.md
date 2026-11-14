# authorization-outcome.ts

## Visao geral

Adapta o resultado compartilhado de autorizacao NF-e para o contrato publico NFC-e, sem alterar os dados de transporte. A classificacao e preservada, exceto a denegacao, que a NFC-e nao tem.

## Responsabilidades

- Preservar classificacao, protocolo, recibo, evidencias e falhas de validacao do resultado de origem.
- Acrescentar `qrCodeUrl` somente quando o resultado estiver autorizado e uma URL tiver sido fornecida.
- Preservar `reconcileNFeReceipt` como proxima acao somente para um resultado `received` que a origem marcou para reconciliacao.
- Marcar `authorizedLate` quando o protocolo vem com `cStat` 150 (autorizada fora de prazo, comum na regularizacao da contingencia depois de 24 horas) e expor `protocolStatusCode` e `failureReason` (por exemplo a rejeicao 781, emitente nao habilitado).
- Repassar `signedXml` e, so para resultado autorizado, `authorizedXml`.
- Nunca reportar `denied`: a NFC-e foi excluida do uso denegado (Ajuste SINIEF 10/2023, NT 2023.002) e a irregularidade do emitente chega como rejeicao 781. Uma resposta de denegacao (`cStat` 110, 301 ou 302) e inesperada e vira `protocol-error` com `failureReason` explicando, de modo que o documento nao seja dado como final e seja consultado pela chave.
- Evitar que resultados rejeitados ou incertos parecam associados a um QR de documento autorizado.

## Entradas e saidas

- Entrada: `NFeAuthorizationOutcome` e uma URL QR opcional.
- Saida: `NFCeAuthorizationOutcome` com os campos compartilhados, URL condicional e proxima acao condicional.

## Fluxo principal

```mermaid
flowchart TD
  A[NFeAuthorizationOutcome] --> B[copy NFC-e shared fields]
  B --> C{classification is authorized and URL exists?}
  C -- yes --> D[include qrCodeUrl]
  C -- no --> E[omit qrCodeUrl]
  E --> G{received with reconciliation action?}
  G -- yes --> H[include nextAction]
  G -- no --> I[omit nextAction]
  D --> F[NFCeAuthorizationOutcome]
  H --> F
  I --> F
```

## Tratamento de erros e casos-limite

- A ausencia de URL nao altera a classificacao do resultado.
- Uma URL fornecida junto a qualquer classificacao diferente de `authorized` e omitida.
- `nextAction` so e propagada para `received` quando a origem indica `reconcileNFeReceipt`; o mapper nao executa essa acao.
- O mapper nao valida a URL; chave, ambiente e CSC sao responsabilidade do fluxo que a compoe.

## Exemplos

```ts
const outcome = mapNFCeAuthorizationOutcome(authorizedNFeOutcome, qrCodeUrl);
```

## Dependencias e integracoes

- `../nfe/contracts.js` define o resultado compartilhado de autorizacao.
- `./contracts.js` define o contrato NFC-e.

# reconcile-nfe-receipt.ts

## Visao geral

Consulta uma unica vez um recibo `nRec` conhecido e converte a resposta do servico assíncrono de autorizacao em classificacao operacional NF-e.

## Responsabilidades

- Montar `consReciNFe` para o ambiente solicitado.
- Encaminhar ambiente e autorizador explicitamente ao transporte SOAP.
- Validar `tpAmb`, estado do lote e consistencia do protocolo terminal.
- Preservar evidencia de transporte ja sanitizada e os estados operacionais existentes.

## Entradas e saidas

- Entrada: `NFeReceiptReconciliationRequest`, com `receiptNumber`, `routingContext`, executor opcional e timeout.
- Saida: `Promise<NFeReceiptReconciliationResult>` com classificacao, status, protocolo, estado operacional e outcome de transporte.

## Fluxo principal

```mermaid
sequenceDiagram
  participant Caller
  participant Reconcile as reconcileNFeReceipt
  participant SOAP as executeNFeSoapService
  participant Parser as parseRetConsReciNFe
  Caller->>Reconcile: nRec + ambiente + autorizador
  Reconcile->>SOAP: uma consulta consReciNFe
  SOAP-->>Reconcile: outcome e evidencia redigida
  Reconcile->>Reconcile: validar tpAmb
  Reconcile->>Parser: analisar retConsReciNFe
  Parser-->>Reconcile: itens e cStat
  Reconcile-->>Caller: pending ou resultado terminal
```

## Tratamento de erros e casos-limite

- Recibo vazio resulta em `usage-error` sem transporte.
- `tpAmb` ausente ou diferente do ambiente solicitado resulta em `protocol-error`.
- XML sem estrutura ou status de lote reconhecido resulta em `protocol-error`.
- Autorizacao terminal sem `nProt` resulta em `protocol-error`.
- `timeout` e `unavailable` nao provocam reenvio da NF-e, polling ou troca automatica de autorizador.
- O resultado `pending` continua distinto de falhas e resultados terminais.

## Exemplos

```ts
const result = await reconcileNFeReceipt({
  receiptNumber: '135190000000002',
  routingContext: { authorizer: 'SP', environment: 'production' },
  requestExecutor,
});
```

## Dependencias e integracoes

- `../transport/execute-nfe-soap-service.js`
- `./async-batch-retrieval.js`
- `./contracts.js`
- `./operational-state.js`

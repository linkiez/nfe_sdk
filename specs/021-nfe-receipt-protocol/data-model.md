# Data Model: NFe Receipt Protocol

## Asynchronous Authorization Submission

- **Purpose**: Representar o resultado observavel de uma submissao `NF-e` cuja autorizacao ainda nao terminou no primeiro retorno.
- **Fields**:
  - `classification`: `received` quando o lote ainda depende de reconciliacao posterior.
  - `receiptNumber`: `nRec` observado na resposta intermediaria.
  - `transportOutcome`: evidencia de transporte da submissao inicial.
  - `documentStatuses`: visao minima do lote submetido.
- **Validation rules**:
  - Deve existir apenas quando a resposta oficial trouxer `nRec` em vez de protocolo terminal imediato.
  - Nao pode implicar polling automatico dentro do SDK.

## Receipt Token (`nRec`)

- **Purpose**: Identificador oficial que ancora a retomada controlada do processamento assincrono.
- **Fields**:
  - `value`: numero do recibo retornado pela submissao inicial.
  - `issuedBy`: autorizador observado no contexto de envio.
  - `environment`: `homologation` ou `production` conforme o roteamento aplicado.
- **Validation rules**:
  - Deve ser tratado como identificador de entrada somente quando vier de uma submissao suportada.
  - Deve falhar explicitamente quando ausente, vazio ou inconsistente com o contexto de roteamento informado.

## Receipt Routing Context

- **Purpose**: Carregar as informacoes minimas necessarias para resolver o autorizador/ambiente da consulta de recibo sem depender de cache local.
- **Fields**:
  - `environment`: ambiente de execucao da reconciliacao.
  - `authorizer`: servico ou familia de roteamento suportada para `NfeRetAutorizacao4`.
  - `requestExecutor`: executor de rede reutilizavel quando fornecido pelo consumidor.
  - `timeoutMs`: timeout opcional da operacao.
- **Validation rules**:
  - Deve ser suficiente para montar a chamada de transporte sem heuristica implícita.
  - Nao pode depender de estado persistido da submissao anterior.

## Public Receipt Reconciliation Operation

- **Purpose**: Modelar a operacao root additive que recebe `nRec` conhecido e contexto explicito para buscar o resultado final do processamento.
- **Fields**:
  - `receiptNumber`: `nRec` alvo.
  - `routingContext`: contexto explicito de autorizador/ambiente.
  - `requestExecutor`: override opcional de execucao de rede.
  - `timeoutMs`: timeout opcional da operacao.
- **Validation rules**:
  - Deve permanecer dedicada a um unico `nRec` por chamada.
  - Nao deve aceitar chave de acesso como substituto do recibo neste slice.

## Receipt Reconciliation Result

- **Purpose**: Representar a conclusao observavel da consulta `retConsReciNFe` promovida a contrato publico.
- **Fields**:
  - `classification`: `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive`, `pending`, `not-found`, `protocol-error` ou `usage-error`.
  - `receiptNumber`: `nRec` consultado.
  - `protocolNumber`: protocolo final quando disponivel.
  - `statusCode`: `cStat` relevante para lote ou item reconciliado.
  - `statusMessage`: mensagem oficial associada.
  - `documentKey`: chave de acesso quando a resposta a trouxer.
  - `transportOutcome`: evidencia herdada da chamada de transporte.
  - `state`: projeção opcional de estado operacional alinhada ao modelo da spec `020` quando a reconciliacao produzir leitura suficiente.
- **Validation rules**:
  - `authorized` deve carregar protocolo observavel.
  - `rejected`, `denied`, `unavailable` e `inconclusive` devem carregar evidencia oficial suficiente para sustentar a classificacao.
  - `pending` deve continuar reservado a lote ainda em processamento.
  - Quando um unico `nRec` retornar mais de um item de protocolo, a operacao publica deve permanecer `inconclusive` em vez de promover reconciliacao multi-documento implícita.

## Deferred Operational Recovery Boundary

- **Purpose**: Tornar auditavel o que fica fora do slice mesmo apos a promocao do recibo conhecido.
- **Fields**:
  - `boundaryId`: `generic-polling`, `direct-protocol-lookup`, `local-persistence`, `multi-document-recovery`.
  - `reason`: por que a capacidade ainda nao entra no contrato.
  - `followUpHint`: proxima frente recomendada do roadmap.
- **Validation rules**:
  - Toda boundary precisa permanecer explicita na documentacao publica da feature.
  - Nenhuma boundary pode ser descrita como parcialmente suportada sem fixture e contrato correspondentes.
  - A promocao de `reconcileNFeReceipt` nao elimina a boundary de polling generico nem a de recuperacao multi-documento.

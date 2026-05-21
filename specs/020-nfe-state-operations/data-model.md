# Data Model: NFe State Operations

## NFe Operational State

- **Purpose**: Representa a leitura estruturada do estado atual de uma `NF-e` para consulta e reconciliacao operacional por documento.
- **Fields**:
  - `accessKey`: identificador publico e unico da consulta nesta fase.
  - `primaryState`: estado sintetizado, como `authorized`, `rejected`, `canceled`, `inutilized`, `pending`, `unavailable` ou `inconclusive`.
  - `protocolNumber`: protocolo observado quando disponivel.
  - `stateCode`: codigo oficial de aplicacao quando disponivel.
  - `stateMessage`: mensagem oficial associada ao estado.
  - `pendingReason`: explicacao curta quando a leitura nao puder ser concluida.
  - `evidence`: lista de evidencias observadas que sustentam a conclusao.
- **Validation rules**:
  - Deve ser derivado apenas de evidencia oficial observada na operacao ou consulta.
  - Nao pode depender de `nRec` como identificador publico deste slice.

## NFe State Evidence

- **Purpose**: Registrar os sinais usados para sustentar uma conclusao de estado.
- **Fields**:
  - `sourceKind`: `document-situation`, `maintenance-response`, `transport`, `protocol`, `event`.
  - `statusCode`: codigo oficial observado.
  - `statusMessage`: mensagem oficial observada.
  - `protocolNumber`: protocolo associado, quando houver.
  - `observedAt`: timestamp local da consolidacao.
  - `transportClassification`: classificacao herdada do transporte quando relevante.
- **Validation rules**:
  - Toda conclusao `authorized`, `canceled` ou `inutilized` deve apontar pelo menos uma evidencia observavel correspondente.
  - Estados `pending` e `inconclusive` devem registrar por que a evidencia ainda e insuficiente.

## Operational Transition Request

- **Purpose**: Modelar o pedido de cancelamento, carta de correcao ou inutilizacao no mesmo recorte operacional.
- **Fields**:
  - `operation`: `cancel-nfe`, `submit-nfe-correction-letter` ou `submit-nfe-inutilization`.
  - `accessKey`: chave de acesso quando a operacao mirar um documento existente.
  - `canonicalPayload`: dados específicos da manutencao.
  - `environment`: ambiente operacional alvo.
  - `signingContext`: contexto reutilizavel quando a operacao exigir assinatura.
- **Validation rules**:
  - Deve falhar explicitamente quando o estado ou a evidencia previa nao suportarem a transicao.
  - Nao deve abrir fluxo de lote ou multi-documento nesta fase.

## Operational Transition Outcome

- **Purpose**: Representar o resultado estruturado de uma manutencao pos-autorizacao.
- **Fields**:
  - `operation`: manutencao executada.
  - `classification`: `success`, `rejected`, `unsupported-scope`, `timeout`, `unavailable`, `protocol-error`, `usage-error`.
  - `updatedState`: novo `NFe Operational State` quando a transicao puder ser consolidada.
  - `failureReason`: motivo sintetizado quando a transicao nao puder ser concluida.
  - `transportOutcome`: evidencia herdada do transporte.
- **Validation rules**:
  - Todo `success` deve ser reconciliavel com um estado posterior observavel.
  - `unsupported-scope` deve continuar reservado para limites declarados do slice, nao para erros de uso triviais.

## Operational Boundary

- **Purpose**: Tornar auditavel o que fica fora do slice.
- **Fields**:
  - `boundaryId`: identificador da lacuna, como `receipt-polling`, `multi-document-reconciliation`, `local-persistence`, `uf-variance`.
  - `reason`: por que esse item foi deferido.
  - `relatedTheme`: `RTM-004`, `RTM-006`, `RTM-011`, `RTM-012` ou `RFL-001`.
  - `followUpHint`: proxima frente mais adequada para absorver a lacuna.
- **Validation rules**:
  - Toda boundary deve permanecer explicita na documentacao da feature.
  - Nenhuma boundary pode ser tratada como parcialmente suportada sem evidencia normativa suficiente.

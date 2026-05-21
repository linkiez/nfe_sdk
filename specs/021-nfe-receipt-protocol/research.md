# Research: NFe Receipt Protocol

## Decision 1: Promote a dedicated public receipt-reconciliation operation instead of overloading key-based queries

- **Decision**: Expor uma operacao publica additive e dedicada para reconciliar `nRec` conhecido, em vez de reutilizar `queryNFeDocumentSituation` com semantica opcional concorrente.
- **Rationale**: A spec clarificada fecha a feature em torno de um identificador diferente da chave de acesso e exige boundaries explicitas contra consulta direta por chave sem recibo. Uma operacao dedicada reduz ambiguidade contratual e simplifica a validacao do slice.
- **Alternatives considered**:
  - Reaproveitar a consulta de situacao por chave adicionando `nRec` opcional: rejeitado porque misturaria dois modelos de entrada e enfraqueceria a boundary publica entre `RFL-001` e `RFL-002`.

## Decision 2: Reuse the existing async batch parser as the technical core

- **Decision**: Reutilizar `src/canonical/nfe/async-batch-retrieval.ts` como nucleo tecnico do slice, expandindo-o apenas no necessario para suportar a nova classificacao publica e o wrapper dedicado.
- **Rationale**: O repositório ja possui parse estruturado de `retConsReciNFe`, fixture coverage unitaria e construcao do XML `consReciNFe`. Promover esse caminho reduz retrabalho e ancora a feature em comportamento real ja exercitado no código.
- **Alternatives considered**:
  - Reimplementar um parser publico paralelo: rejeitado porque duplicaria logica de `cStat`, XML e shape de resultado sem ganho real.

## Decision 3: Require explicit routing context together with `nRec`

- **Decision**: A operacao dedicada deve receber `nRec` mais contexto explicito de roteamento do autorizador/ambiente.
- **Rationale**: A clarificacao rejeita cache local e heuristica de roteamento. Isso preserva o slice como stateless, repetivel e compativel com a boundary contra persistencia local.
- **Alternatives considered**:
  - Inferir o roteamento a partir de `nRec`: rejeitado porque nao ha garantia normativa suficiente para heuristica confiavel.
  - Depender do estado persistido da submissao anterior: rejeitado porque abriria acoplamento com armazenamento fora do recorte do SDK.

## Decision 4: Treat `authorized`, `rejected`, `denied`, `unavailable`, and `inconclusive` as terminal outcomes for this slice

- **Decision**: A reconciliacao por recibo deste slice fecha explicitamente esses cinco resultados terminais, mantendo `pending` apenas para `lote em processamento` ainda sem conclusao.
- **Rationale**: A clarificacao aceita estender o conjunto terminal para cobrir nao apenas autorizacao e rejeicao, mas tambem falta de disponibilidade ou evidencia conclusiva suficiente quando a resposta oficial assim se apresentar.
- **Alternatives considered**:
  - Limitar os terminais a `authorized`, `rejected`, `denied`: rejeitado porque deixaria parte relevante do retorno oficial fora do primeiro contrato publico.

## Decision 5: Keep generic polling and direct protocol lookup out of scope

- **Decision**: Manter polling generico, agendamento recorrente, consulta direta de protocolo por chave sem `nRec`, persistencia local e recuperacao multi-documento como boundaries explicitas fora deste slice.
- **Rationale**: O roadmap enquadra `RFL-001` como fechamento minimo de recibo e protocolo, nao como orquestracao ampla. O valor tecnico agora esta em promover um fluxo unico e verificavel de retomada controlada.
- **Alternatives considered**:
  - Incluir um loop simples de retry no mesmo slice: rejeitado porque abriria semantica temporal e operacional alem do contrato minimo desejado.

## Current Gap Snapshot

- `authorizeNFe` ja expõe `receiptNumber` em respostas intermediarias, mas ainda nao existe operacao root dedicada para reconciliar esse recibo.
- `src/canonical/nfe/async-batch-retrieval.ts` ja parseia `retConsReciNFe`, classifica lote como `complete`, `processing`, `not-found` ou `protocol-error` e deriva classificacoes por item como `authorized`, `cancelled`, `pending`, `denied` e `processing-error`.
- O contrato publico atual ainda trata `receipt-polling` como boundary explicita em `src/canonical/nfe/contracts.ts` e `src/public-contract.ts`, o que confirma que a promocao deste slice e additive sobre uma lacuna oficialmente reconhecida.

## Implemented Alignment Notes

- A promocao publica foi implementada como `reconcileNFeReceipt` no import raiz, preservando `retrieveNFeAuthorizationBatch` como helper mais bruto e mantendo a nova operacao no nivel operacional.
- A classificacao por item em `retConsReciNFe` foi refinada para separar `rejected` (`204`, `205`) de `denied` (`301`, `302`), o que viabiliza o contrato publico clarificado.
- O runtime implementado trata `timeout` e indisponibilidade de transporte como `unavailable` na operacao operacional de recibo, sem reabrir polling automatico.
- Quando um unico `nRec` devolve multiplos itens de protocolo, a operacao publica permanece `inconclusive` para preservar a boundary contra recuperacao multi-documento.

## Expected Planning Outcome

- Promover um fluxo root dedicado de reconciliacao por recibo conhecido com contexto explicito de roteamento.
- Ajustar a linguagem contratual do runtime para refletir a nova capacidade e reduzir a boundary `receipt-polling` ao que sobrar fora do recorte, sem prometer polling generico.
- Expandir a cobertura de testes e fixtures para resultados `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive`, `pending`, `not-found` e `protocol-error` no caminho de recibo.

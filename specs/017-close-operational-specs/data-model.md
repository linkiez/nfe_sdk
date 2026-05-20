# Data Model: Close Operational Specs

## Residual Spec Closure

- **Purpose**: Representa a reconciliacao formal de uma spec cuja implementacao principal ja existe, mas cujo roadmap ainda pode divergir do estado real dos artefatos de origem.
- **Fields**:
  - `specId`: identificador da spec alvo, como `007` ou `010`.
  - `sourceTask`: task de origem auditada, como `T037` ou `T002`.
  - `roadmapStatus`: estado editorial encontrado antes da reconciliacao, como `em execucao`.
  - `closureClass`: natureza da reconciliacao, como `validation-evidence` ou `editorial-redundancy`.
  - `status`: resultado atual, como `closed` ou `blocked-local`.
- **Validation rules**:
  - Cada spec deve ter no maximo uma task auditada no escopo deste slice.
  - Nenhuma spec pode ser marcada como `closed` sem reconciliar explicitamente o delta entre artefato de origem e roadmap.

## Validation Evidence Record

- **Purpose**: Registrar o resultado verificavel usado como evidencia canonica de reconciliacao neste slice.
- **Fields**:
  - `specId`: identificador da spec auditada.
  - `commandSet`: conjunto canonico de comandos executados.
  - `executionResult`: classificacao resumida, como `all-pass` ou `failed-local`.
  - `failureScope`: falha localizada quando existir.
  - `artifactLocation`: onde a evidencia foi registrada no repositorio.
  - `sourceReference`: ponte para o artefato de origem auditado.
- **Validation rules**:
  - O registro canonico deste slice deve apontar para `specs/017-close-operational-specs/research.md`.
  - O registro deve apontar para comandos reais do pacote ou deixar explicito quando a reconciliacao reutilizou uma prova de origem sem rerun.
  - Uma falha deve identificar defeito local em vez de backlog generico.

## Residual Scaffold

- **Purpose**: Representar o scaffold minimo auditado para demonstrar se a pendencia mecanica da spec `010` ainda existe ou se virou apenas redundancia editorial.
- **Fields**:
  - `path`: arquivo ou diretorio residual, como `tests/unit/nfce/.gitkeep`.
  - `status`: `present`, `redundant`, ou `missing`.
  - `conflictCheck`: confirma se o scaffold conflita ou nao com arquivos reais ja existentes.
  - `resolutionNote`: justificativa curta para criacao ou encerramento por redundancia.
- **Validation rules**:
  - Cada scaffold listado deve existir ou ser encerrado por redundancia comprovada no artefato canonico deste slice.
  - O scaffold nao pode sobrescrever arquivos reais do slice `NFC-e`.

## Roadmap Status Transition

- **Purpose**: Modelar a atualizacao editorial que move uma spec de `em execucao` para `implementada`.
- **Fields**:
  - `sourceDocument`: registro afetado, como `specs-implementacao.md`.
  - `specId`: spec cuja linha sera atualizada.
  - `oldStatus`: estado atual no roadmap.
  - `newStatus`: estado esperado apos fechamento.
  - `evidenceReference`: ligacao com o fechamento residual que sustenta a mudanca.
- **Validation rules**:
  - Toda transicao precisa de evidencia objetiva anterior.
  - O roadmap so pode mudar depois que a task de origem correspondente estiver auditada como fechada ou bloqueada com evidencia canonica.

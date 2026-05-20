# Research: Close Operational Specs

## Decision 1: Audit source artifacts before touching the roadmap

- **Decision**: Auditar primeiro `specs/007-nfe-operational-mvp/tasks.md` e `specs/010-nfce-national-core/tasks.md` antes de assumir que ainda existe pendencia residual real.
- **Rationale**: A analise de consistencia mostrou que as tasks de origem ja podem estar fechadas enquanto o roadmap continua stale. O slice `017` precisa reconciliar esse delta em vez de recriar trabalho concluido.
- **Alternatives considered**:
  - Confiar apenas no roadmap: rejeitado porque perpetua divergencia entre evidencia e status editorial.
  - Reexecutar fechamento sem auditar a origem: rejeitado porque pode duplicar trabalho ja concluido.

## Decision 2: Treat spec `010` as editorial redundancy confirmation unless the scaffold is actually missing

- **Decision**: Tratar `010` primeiro como confirmacao de redundancia editorial ou de scaffold ja satisfeito, recorrendo a criacao de `.gitkeep` apenas se a auditoria mostrar ausencia real.
- **Rationale**: O artefato de origem ja marca `T002` como concluida. O trabalho mais provavel deste slice e reconciliar o roadmap com essa realidade.
- **Alternatives considered**:
  - Assumir nova pendencia mecanica automaticamente: rejeitado porque contradiz o estado atual do `tasks.md` da spec `010`.
  - Ignorar `010` por completo: rejeitado porque o roadmap ainda a lista como aberta.

## Decision 3: Treat spec `007` closure as evidence reconciliation, not automatic gate rerun

- **Decision**: Tratar `007` primeiro como reconciliacao de evidencia ja existente na origem; reexecutar o gate final somente se a prova estiver ausente, stale ou nao reproduzivel.
- **Rationale**: O `tasks.md` da spec `007` ja marca `T037` como concluida. O problema mais provavel deste slice e fixar um apontamento canonico e coerente no roadmap, nao repetir validacao sem necessidade.
- **Alternatives considered**:
  - Reexecutar sempre o gate: rejeitado porque pode desperdiçar tempo e mascarar que a divergencia e editorial.
  - Atualizar o roadmap sem reconciliar a prova de origem: rejeitado porque deixa a auditoria incompleta.

## Decision 4: Allow independent closure of `007` and `010`

- **Decision**: Permitir que cada uma das duas specs migre isoladamente para `implementada` quando cumprir seu proprio criterio, mantendo a outra como bloqueio local se necessario.
- **Rationale**: A clarificacao da spec `017` fixa que o sucesso do slice nao depende de fechamento simultaneo; isso evita bloquear uma conclusao valida por causa de um unico defeito localizado.
- **Alternatives considered**:
  - Exigir fechamento conjunto: rejeitado porque transforma uma iteracao de limpeza em um bundle desnecessariamente rigido.
  - Priorizar permanentemente apenas uma das duas specs: rejeitado porque a iteracao precisa fechar residuos reais das fases `5` e `7`.

## Decision 5: Update roadmap status only after source-versus-roadmap delta is resolved

- **Decision**: Alterar `docs/roadmap/specs-implementacao.md` e `docs/roadmap/specs-pendencias-abertas.md` somente depois que a divergencia entre artefatos de origem e status editorial estiver resolvida.
- **Rationale**: O roadmap deve refletir o estado verificado do repositorio, nao uma intencao de fechamento.
- **Alternatives considered**:
  - Atualizar o roadmap antes da execucao: rejeitado porque criaria divergencia entre status editorial e evidencia real.
  - Deixar os registros para uma iteracao posterior: rejeitado porque manteria backlog residual artificial apos o fechamento tecnico.

## Decision 6: Treat any necessary `007` gate failure as a local blocker

- **Decision**: Se algum comando do gate final de `007` falhar, registrar a falha como defeito local do slice de fechamento e manter a spec aberta apenas por esse bloqueio explicito.
- **Rationale**: O checklist do roadmap proibe transformar a iteracao de fechamento em abertura de nova frente funcional sem antes localizar a falha concreta.
- **Alternatives considered**:
  - Abrir uma nova iniciativa ampla no primeiro erro: rejeitado porque dilui a responsabilidade do slice.
  - Ignorar a falha e marcar a spec como implementada: rejeitado porque viola o criterio de saida da task `T037`.

## Audit Snapshot

- `specs/007-nfe-operational-mvp/tasks.md` ja marca `T037` como concluida, entao a origem nao sustenta mais o status `em execucao` exibido no roadmap.
- `specs/010-nfce-national-core/tasks.md` ja marca `T002` como concluida, mesmo sem os `.gitkeep` residuais previstos inicialmente, o que caracteriza redundancia editorial a ser registrada e nao trabalho a ser reaberto.
- `docs/roadmap/specs-implementacao.md` e `docs/roadmap/specs-pendencias-abertas.md` permaneciam stale ao listar `007` e `010` como abertas.
- O artefato canonico de evidencia deste slice passa a ser este proprio arquivo, com referencias secundarias apenas onde o roadmap precisar explicar a reconciliacao.

## Canonical Evidence Records

### Spec `007`

- **Source reference**: `specs/007-nfe-operational-mvp/tasks.md#T037`
- **Evidence artifact**: `specs/017-close-operational-specs/research.md`
- **Execution result**: `source-closed`
- **Command set**: reaproveitado da task de origem; nenhum rerun necessario neste slice porque nao houve indicio de prova ausente, stale ou nao reproduzivel.
- **Closure note**: a reconciliacao editorial usa o fechamento ja marcado na origem como evidencia suficiente para remover a spec do conjunto aberto do roadmap.

### Spec `010`

- **Source reference**: `specs/010-nfce-national-core/tasks.md#T002`
- **Evidence artifact**: `specs/017-close-operational-specs/research.md`
- **Execution result**: `editorial-redundancy`
- **Scaffold audit**: `tests/unit/nfce/.gitkeep`, `tests/integration/nfce/.gitkeep` e `tests/fixtures/nfce/.gitkeep` nao existem, mas a task de origem ja esta fechada e nao conflita com arquivos reais do slice.
- **Closure note**: a reconciliacao editorial registra que a necessidade do scaffold residual foi absorvida pelo estado material atual do repositorio e nao exige reabertura da spec `010`.

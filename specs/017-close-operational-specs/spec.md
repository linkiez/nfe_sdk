# Feature Specification: Close Operational Specs

**Feature Branch**: `017-close-operational-specs`

**Created**: 2026-05-20

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao"

## Clarifications

### Session 2026-05-20

- Q: Se apenas uma entre 007 e 010 puder ser encerrada neste slice, qual politica devemos adotar? → A: Fechar individualmente cada spec que cumprir o criterio e registrar a outra como bloqueio local.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Fechar specs residuais sem abrir backlog novo (Priority: P1)

Como mantenedor do SDK, quero reconciliar o status editorial das specs `007` e `010` com o estado real dos artefatos de origem, para que o roadmap reflita apenas trabalho realmente aberto e nao pendencias residuais ja marcadas como concluídas.

**Why this priority**: A iteracao `1` do roadmap foi explicitamente definida como o menor fechamento de curto prazo e bloqueia a leitura confiavel do estado real das fases `5` e `7`.

**Independent Test**: Um revisor consegue verificar que as duas specs deixam de ter um unico item residual aberto e que nenhum backlog novo de runtime foi introduzido.

**Acceptance Scenarios**:

1. **Given** que o roadmap ainda trata a spec `010` como aberta por scaffolding residual, **When** a iteracao e concluida, **Then** o status editorial passa a refletir se o scaffold ja estava satisfeito ou se exigia apenas confirmacao documentada de redundancia.
2. **Given** que o roadmap ainda trata a spec `007` como aberta por falta de evidencia final de validacao, **When** a iteracao e concluida, **Then** a evidencia canonica de fechamento ou o bloqueio local correspondente fica registrada sem reabrir artificialmente a task de origem.

---

### User Story 2 - Tornar auditavel o fechamento das fases 5 e 7 (Priority: P2)

Como revisor do roadmap, quero enxergar em um unico slice por que `007` e `010` deixam de aparecer como abertas, para que a migracao de status seja verificavel sem depender de contexto oral ou memoria da sessao.

**Why this priority**: O roadmap usa o status das specs abertas para direcionar as proximas iteracoes; manter duas specs quase fechadas como abertas distorce a priorizacao real.

**Independent Test**: Um revisor consegue consultar spec, checklist de fechamento e registro do roadmap e identificar a justificativa de encerramento em menos de 10 minutos.

**Acceptance Scenarios**:

1. **Given** o registro de implementacao por spec no roadmap, **When** a iteracao for revisada, **Then** o status de `007` e `010` pode ser atualizado sem ambiguidade.
2. **Given** a documentacao de pendencias abertas, **When** a iteracao for concluida, **Then** nao restam itens residuais sem criterio de saida ou sem evidencia objetiva.

---

### User Story 3 - Preservar disciplina de escopo no fechamento (Priority: P3)

Como responsavel pela evolucao do pacote, quero que este fechamento formal nao se transforme em uma nova frente funcional, para manter a proxima iteracao de implementacao alinhada ao roadmap e evitar backlog paralelo.

**Why this priority**: O checklist do roadmap deixa claro que esta iteracao fecha apenas residuos oficiais e nao redefine fronteiras de `NFC-e`, `DANFE`, `QR Code`, assinatura ou contingencia.

**Independent Test**: Um revisor comprova que o slice encerra tasks residuais sem introduzir novas promessas de runtime, novas familias documentais ou novas superficies publicas.

**Acceptance Scenarios**:

1. **Given** a iteracao de fechamento em andamento, **When** uma necessidade funcional fora de `007` ou `010` aparecer, **Then** ela e registrada como backlog separado e nao absorvida silenciosamente neste slice.
2. **Given** o contrato publico atual do pacote, **When** a iteracao for concluida, **Then** o fechamento permanece additive e sem alterar entrypoints, identificadores ou compromissos funcionais publicados.

### Edge Cases

- O que acontece se a validacao final de `007` falhar e a spec nao puder ser encerrada sem corrigir um defeito local?
- Como encerrar `010` se o scaffolding residual ja estiver coberto materialmente por arquivos existentes e a criacao de placeholders for redundante?
- Como evitar que a atualizacao de status no roadmap pareca fechamento de runtime novo quando a iteracao e apenas formal e auditavel?
- O que fazer se uma das duas specs puder ser encerrada e a outra nao dentro do mesmo slice?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST tratar esta iteracao como um slice de reconciliacao editorial das specs `007` e `010`, e nao como abertura de backlog novo de runtime.
- **FR-002**: O sistema MUST verificar se a pendencia residual atribuida a `010` ainda existe no artefato de origem e, se nao existir mais, registrar a redundancia editorial em vez de recriar trabalho ja concluido.
- **FR-003**: O sistema MUST identificar um unico artefato canonico para registrar a evidencia verificavel do fechamento de `007` ou, em caso de falha, qual defeito local impede sua reconciliacao editorial.
- **FR-004**: O sistema MUST permitir que um revisor determine, a partir dos artefatos da iteracao, se `007` e `010` podem migrar de `em execucao` para `implementada`.
- **FR-005**: O sistema MUST atualizar os registros editoriais que listam specs abertas para remover residuos cuja unica causa seja status stale do roadmap sobre validacao final ou scaffolding mecanico ja resolvidos na origem.
- **FR-006**: O sistema MUST preservar a separacao entre fechamento formal, defeito local e nova iniciativa funcional, sem misturar esses tres tipos de trabalho no mesmo slice.
- **FR-007**: O sistema MUST manter rastreabilidade entre esta spec, a iteracao `1` do roadmap, o checklist de fechamento `007/010` e os registros de pendencias abertas.
- **FR-008**: O sistema MUST produzir criterios de saida que possam ser avaliados independentemente para `007` e para `010`, permitindo fechar uma spec isoladamente quando ela cumprir o criterio enquanto a outra permanece como bloqueio local documentado.
- **FR-009**: O sistema MUST explicitar que a conclusao deste slice nao redefine fronteiras de `NFC-e`, `DANFE`, `QR Code`, assinatura, contingencia ou qualquer outra trilha funcional ja delimitada.
- **FR-010**: O sistema MUST deixar o roadmap apto a apontar a proxima iteracao real de implementacao apos a remocao dessas pendencias residuais.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature nao deve alterar import path `ESM`, `exports` do pacote, facades publicas, nomes de tipos exportados ou identificadores publicados ao consumidor.
- **CC-002**: Nenhum schema, artefato gerado ou regra de normalizacao pode ser ampliado como parte deste fechamento; qualquer necessidade nova descoberta deve permanecer fora do slice.
- **CC-003**: O fechamento das specs `007` e `010` deve ser additive e editorial, sem exigir nota de migracao de consumidor nem impacto de versao semantica por si so.
- **CC-004**: A validacao minima deve cobrir o gate final exigido por `007`, a verificacao do scaffolding residual de `010` e a coerencia do registro documental das specs abertas e implementadas.

### Knowledge Sources & Provenance

- **KS-001**: `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/specs-pendencias-abertas.md` e `docs/roadmap/checklist-fechamento-007-010.md` definem esta iteracao como o proximo slice recomendado e delimitam seu criterio de saida.
- **KS-002**: `docs/roadmap/specs-implementacao.md` e `docs/roadmap/ROADMAP.md` sustentam o impacto editorial do fechamento nas Fases `5` e `7`, sem abrir nova cobertura funcional.
- **KS-003**: `specs/007-nfe-operational-mvp/tasks.md` e `specs/010-nfce-national-core/tasks.md` sao as fontes operacionais primarias para verificar se os itens residuais ainda existem de fato ou se o problema remanescente e apenas de reconciliacao editorial.
- **KS-004**: Se a validacao final da spec `007` falhar, a falha deve permanecer registrada como defeito local do slice atual e nao como justificativa para reabrir escopo funcional fora desta iteracao.

### Key Entities _(include if feature involves data)_

- **Residual Spec Closure**: reconciliacao formal de uma spec cuja implementacao principal ja existe e cujo status editorial pode divergir do estado real dos artefatos de origem.
- **Validation Evidence Record**: registro auditavel de execucao bem-sucedida ou falha localizada do gate final exigido por uma spec aberta.
- **Residual Scaffold**: estrutura minima de diretórios e placeholders exigida apenas para remover uma pendencia mecanica sem alterar comportamento funcional.
- **Roadmap Status Transition**: mudanca documental que atualiza uma spec de `em execucao` para `implementada` depois que o criterio residual de saida e satisfeito.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% das pendencias residuais de `007` e `010` ficam classificadas como encerradas ou bloqueadas por defeito local explicitamente registrado.
- **SC-002**: Um revisor consegue confirmar em menos de 10 minutos por que cada uma das duas specs pode ou nao pode migrar para `implementada`.
- **SC-003**: 0 novas superfices runtime, familias documentais ou promessas funcionais sao introduzidas por este slice.
- **SC-004**: O registro de specs abertas no roadmap deixa de manter `007` ou `010` abertas apenas por formalidades de validacao ou scaffolding.
- **SC-005**: A conclusao deste slice deixa a proxima iteracao recomendada do roadmap livre de backlog residual artificial vindo das fases `5` e `7`.

## Assumptions

- A spec `016` representa o ultimo slice funcional novo concluido antes desta iteracao de reconciliacao.
- As implementacoes principais de `007` e `010` ja existem; o objetivo aqui e alinhar o roadmap com o estado real dos artefatos de origem.
- Se o scaffolding residual de `010` ja estiver materialmente coberto, a saida correta continua sendo documentar a redundancia editorial e nao recriar a task.
- Se a evidenica final de `007` ja existir na origem, o slice deve apenas consolidar o apontamento canonico dessa prova em vez de simular uma nova execucao.
- Se a validacao final de `007` revelar falha real quando a prova precisar ser refeita, o slice continua pequeno e localizado, tratando o problema como defeito de fechamento e nao como nova frente funcional.
- Se apenas uma entre `007` e `010` cumprir seu criterio de saida neste ciclo, a iteracao continua valida desde que a outra fique registrada como bloqueio local explicito.
- O roadmap continua priorizando, depois deste fechamento, a proxima slice real de implementacao entre assinatura, `NFC-e` promovivel, `UFs` fortes ou tabelas externas.

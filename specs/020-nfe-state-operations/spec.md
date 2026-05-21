# Feature Specification: NFe State Operations

**Feature Branch**: `020-nfe-state-operations`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao. Priorizar runtime"

## Clarifications

### Session 2026-05-21

- Q: Qual deve ser o escopo inicial da consulta de estado desta feature? → A: Consultar estado apenas por chave de acesso da `NF-e`, sem `nRec` nem polling generico nesta fase.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Consultar o estado operacional de uma NF-e sem interpretar XML bruto (Priority: P1)

Como integrador que ja transmite documentos pelo SDK, quero consultar o estado operacional de uma NF-e por chave de acesso e receber uma leitura estruturada de protocolo, situacao e pendencia, para nao depender de inspecao manual de retornos brutos apos a transmissao.

**Why this priority**: O roadmap ainda aponta `RTM-006` como lacuna operacional acima do MVP ja entregue. Sem uma leitura unica de estado, o integrador continua costurando manualmente transporte, protocolo e manutencao.

**Independent Test**: Um revisor consegue consultar uma chave de acesso suportada e receber um resultado unico que diferencie documento autorizado, rejeitado, pendente, cancelado, inutilizado ou indisponivel sem recorrer a `nRec`, polling generico ou reconstrucao manual do fluxo a partir de XMLs soltos.

**Acceptance Scenarios**:

1. **Given** uma chave de acesso de NF-e suportada e um ambiente operacional elegivel, **When** o integrador solicitar a leitura de estado do documento, **Then** o sistema devolve uma visao estruturada do estado operacional atual com protocolo, situacao e pendencias observaveis quando existirem, sem exigir `nRec` como identificador adicional.
2. **Given** uma resposta oficial ainda inconclusiva ou com evidencias parciais sobre o documento, **When** o integrador consultar o estado, **Then** o sistema distingue explicitamente entre pendencia operacional, indisponibilidade e ausencia de evidencia suficiente para conclusao.

---

### User Story 2 - Executar manutencoes pos-autorizacao com leitura consistente de estado (Priority: P2)

Como integrador responsavel pelo ciclo de vida da NF-e, quero acionar cancelamento, carta de correcao e inutilizacao dentro da mesma leitura operacional do documento, para saber o que ainda e elegivel, o que ja foi concluido e o que falhou sem reinventar regras de conciliacao.

**Why this priority**: `RTM-006` pede reconciliacao operacional, nao apenas chamadas soltas. O valor do slice esta em conectar manutencao e consulta em uma mesma linguagem de estado reutilizavel.

**Independent Test**: Um revisor consegue executar uma manutencao suportada e observar que o retorno da operacao atualiza a mesma leitura estruturada usada na consulta do documento, sem exigir comparacao manual de respostas heterogeneas.

**Acceptance Scenarios**:

1. **Given** uma NF-e elegivel para cancelamento, carta de correcao ou inutilizacao dentro do recorte suportado, **When** o integrador solicitar a manutencao correspondente, **Then** o sistema devolve um resultado consistente com a leitura operacional do documento antes e depois da operacao.
2. **Given** uma tentativa de manutencao fora do estado permitido ou sem evidencia suficiente para execucao segura, **When** a chamada for realizada, **Then** o sistema falha de forma explicita e informa por que a transicao operacional nao pode ser concluida.

---

### User Story 3 - Tornar as fronteiras da reconciliacao explicitamente auditaveis (Priority: P3)

Como mantenedor do SDK, quero deixar claro onde termina a leitura operacional por documento e onde continuam distribuicao, reconciliacao multi-documento, persistencia local e variacoes por `UF`, para que a evolucao futura permaneça additive e sem promessa silenciosa de backoffice completo.

**Why this priority**: O recorte `RFL-002` so permanece pequeno e promovivel se a reconciliacao for limitada a um documento por vez, sem deslizar para gestor completo de ciclo de vida ou automacao de retentativa em lote.

**Independent Test**: Um revisor consegue abrir a especificacao e identificar claramente o que esta coberto por consulta e manutencao orientadas a estado e o que continua em backlog para distribuicao, persistencia ou reconciliacao mais ampla.

**Acceptance Scenarios**:

1. **Given** uma necessidade de reconciliacao que envolva mais de um documento, cursores de distribuicao ou persistencia local, **When** a spec for consultada, **Then** esses itens permanecem explicitamente fora do recorte atual.
2. **Given** uma variacao operacional dependente de `UF`, ambiente ou backlog de distribuicao, **When** a feature for lida junto do roadmap, **Then** a fronteira entre este slice e as continuidades futuras fica explicita e auditavel.

### Edge Cases

- O que acontece quando a consulta por chave retorna resposta valida de transporte, mas sem protocolo final conclusivo?
- Como a leitura de estado deve se comportar quando o documento ja passou por mais de uma manutencao observavel?
- O que acontece quando cancelamento, carta de correcao ou inutilizacao sao solicitados para estados que ja nao admitem a transicao pretendida?
- Como o sistema deve tratar casos em que a chave existe, mas a evidencia disponivel ainda e insuficiente para concluir o estado operacional do documento?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST criar um slice de `runtime` para `RFL-002`, cobrindo leitura orientada a estado e manutencoes pos-autorizacao de `NF-e` sobre os temas `RTM-006` e `RTM-002`.
- **FR-002**: O sistema MUST permitir consultar o estado operacional de uma `NF-e` por chave de acesso sem exigir interpretacao manual de XML bruto pelo consumidor.
- **FR-002A**: A consulta inicial de estado MUST usar apenas a chave de acesso da `NF-e` como identificador publico deste slice, sem introduzir `nRec` ou polling generico nesta fase.
- **FR-003**: O sistema MUST devolver uma leitura estruturada que diferencie pelo menos documento autorizado, rejeitado, cancelado, inutilizado, pendente, indisponivel e inconclusivo.
- **FR-004**: O sistema MUST registrar na mesma leitura operacional quais evidencias observaveis sustentam o estado devolvido, incluindo protocolo e indicios de pendencia quando existirem.
- **FR-005**: O sistema MUST permitir executar cancelamento, carta de correcao e inutilizacao dentro do recorte suportado com retorno coerente com a leitura de estado do documento.
- **FR-006**: O sistema MUST falhar de forma explicita quando uma manutencao for solicitada para um estado nao elegivel ou quando a evidencia operacional for insuficiente para executar a transicao com seguranca.
- **FR-007**: O sistema MUST manter a reconciliacao limitada ao documento ou operacao alvo, sem prometer persistencia local, gestor multi-documento ou backoffice embarcado.
- **FR-008**: O sistema MUST preservar a separacao entre leitura de estado operacional, transporte, distribuicao e variacoes estaduais, mantendo o que nao estiver estabilizado como boundary explicita.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, `RTM-006`, `RTM-002`, o recorte `RFL-002` e os documentos oficiais que sustentam consulta, protocolo e manutencao pos-autorizacao.
- **FR-010**: O sistema MUST explicitar os follow-ups que continuam fora deste recorte, incluindo distribuicao, reconciliacao multi-documento, persistencia local, consulta por `nRec`, polling generico e variacoes dominantes por `UF`.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive sobre o import raiz do pacote, sem remover nem renomear exports publicos existentes.
- **CC-002**: A feature pode ampliar facades e contratos operacionais manuais, mas deve preservar `src/classes`, `src/interfaces`, `src/types`, `src/enums` e os XSD como base normativa e nao como contrato operacional principal.
- **CC-003**: A feature nao deve transformar reconciliacao orientada a estado em promessa de persistencia local, sincronizacao em lote ou automacao de backoffice.
- **CC-004**: A validacao minima desta feature deve cobrir contrato, testes de regressao focados para consulta e manutencoes, lint, formatacao, typecheck, build e verificacao do pacote publicado.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) e [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) definem a prioridade de `runtime` e o recorte `RFL-002`.
- **KS-002**: `MOC 7.0`, Anexo I, consultas oficiais do portal nacional e os schemas de `NF-e` internalizados sustentam as operacoes de protocolo, consulta e manutencao pos-autorizacao.
- **KS-003**: [specs/006-add-soap-transport/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/006-add-soap-transport/spec.md) e [specs/007-nfe-operational-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/spec.md) delimitam a base operacional ja entregue e o que ainda falta consolidar em uma leitura unica de estado.
- **KS-004**: Diferencas por `UF`, dependencias de credenciamento e lacunas de consulta ou manutencao que nao tenham evidencia nacional suficiente devem permanecer registradas como boundary e nao como suporte implicito.

### Key Entities _(include if feature involves data)_

- **NFe Operational State**: leitura estruturada do estado atual de uma `NF-e`, incluindo situacao principal, protocolo, pendencias e evidencias observaveis.
- **NFe State Evidence**: conjunto de sinais oficiais usados para sustentar a conclusao operacional de um documento, como protocolo, retorno de consulta e indicios de manutencao ja aplicada.
- **Operational Transition Request**: solicitacao para executar cancelamento, carta de correcao ou inutilizacao dentro do recorte suportado.
- **Operational Transition Outcome**: resultado estruturado de uma manutencao pos-autorizacao, coerente com a leitura de estado anterior e posterior do documento.
- **Operational Boundary**: declaracao explicita do que continua fora deste slice, como distribuicao, multi-documento, persistencia local ou variacao estadual dominante.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Um integrador consegue obter a leitura operacional de uma `NF-e` por chave de acesso em menos de 5 minutos usando apenas a API publica do SDK.
- **SC-002**: 100% dos cenarios suportados de consulta por chave devolvem um resultado que distingue estado concluido, pendencia, indisponibilidade ou inconclusao sem exigir interpretacao manual de XML bruto.
- **SC-003**: 100% das manutencoes declaradas como cobertas neste slice devolvem resultado consistente com a leitura operacional do documento ou falham explicitamente quando a transicao nao for elegivel.
- **SC-004**: 100% dos itens fora do recorte, incluindo multi-documento, distribuicao, polling generico e variacoes dominantes por `UF`, permanecem documentados como boundary explicita.
- **SC-005**: O novo slice permanece additive no contrato do pacote e passa pelo gate minimo de testes focados, lint, formatacao, typecheck, build e verificacao do pacote publicado.

## Assumptions

- `RFL-002` passa a ser a nova slice prioritaria de `runtime` porque `RFL-004`, `RFL-005` e `RFL-006` ja possuem specs abertas ou implementadas no repositório.
- A base de transporte e o MVP operacional de `NF-e` ja entregues continuam reutilizaveis como fundamento deste recorte.
- O foco desta fase e reconciliacao por documento, nao distribuicao, cursores, persistencia local ou filas de retentativa.
- A chave de acesso da `NF-e` continua sendo o identificador publico minimo e unico para leitura de estado neste slice.
- Sempre que a evidencia oficial nao for suficiente para concluir uma transicao ou um estado, a feature deve preferir explicitar a inconclusao a insinuar suporte operacional pleno.

## Explicit Follow-Ups

- Consulta por `nRec` e polling generico continuam fora deste slice e permanecem como continuidade de reconciliacao assíncrona orientada a lote.
- Reconciliacao multi-documento, persistencia local de snapshots e filas de retentativa continuam fora do root contract e devem ser tratadas em camada de integracao dedicada.
- Variacoes dominantes por `UF`, ambiente ou credenciamento permanecem como boundary explicita ate que exista evidencia oficial suficiente para promocao additive.

# Feature Specification: Contingency Boundaries

**Feature Branch**: `016-contingency-boundaries`

**Created**: 2026-05-20

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao"

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Diagnosticar contingencia por ambiente sem fallback silencioso (Priority: P1)

Como integrador que usa as facades operacionais do SDK, quero receber um resultado estruturado quando um fluxo entrar em contingencia por ambiente, para distinguir autorizacao normal de `SVC`, `EPEC` ou `offline` sem depender de inferencia externa.

**Why this priority**: O roadmap trata `RTM-005` como lacuna operacional real e explicita que contingencia nao pode continuar aparecendo apenas como expectativa implicita ou detalhe editorial.

**Independent Test**: Um request que caia no recorte declarado de contingencia devolve classificacao e boundary explicitas por ambiente, enquanto o fluxo normal continua seguindo a autorizacao padrao sem regressao.

**Acceptance Scenarios**:

1. **Given** um fluxo operacional cuja degradacao observavel deva apontar para `SVC-AN` ou `SVC-RS`, **When** o integrador solicitar a operacao publica correspondente, **Then** o SDK devolve um resultado estruturado que identifica a contingencia por ambiente sem simular autorizacao normal.
2. **Given** um fluxo operacional que dependa de `EPEC` ou contingencia `offline` ainda nao promovidas, **When** o integrador solicitar a operacao, **Then** o SDK devolve uma boundary explicita de contingencia deferida em vez de prometer suporte silencioso.

---

### User Story 2 - Entender o que entra agora em runtime e o que continua deferido (Priority: P2)

Como integrador planejando resiliencia fiscal, quero distinguir quais trilhas de contingencia entram no slice atual como diagnostico observavel e quais permanecem em backlog, `tooling` ou `documentacao`, para nao assumir suporte integral a `EPEC`, `offline` ou retomada assistida.

**Why this priority**: A fronteira entre `runtime`, `tooling`, `exemplo` e backlog e o principal mecanismo do roadmap para evitar que o pacote vire um emissor desktop disfarçado.

**Independent Test**: Um revisor consegue consultar spec, contrato publicado e anexos do roadmap e identificar de forma consistente quais contingencias estao cobertas como boundary observavel e quais continuam explicitamente fora do slice.

**Acceptance Scenarios**:

1. **Given** o integrador consulta a documentacao do slice de contingencia, **When** ele procurar por `SVC`, `EPEC`, `offline` e retomada assistida, **Then** cada item aparece classificado de forma consistente entre runtime, backlog, `tooling` ou `documentacao`.
2. **Given** um fluxo depende de artefatos tipicos de emissor, persistencia local ou operacao assistida, **When** o integrador revisar a spec, **Then** ele encontra essa capacidade explicitamente fora do recorte atual.

---

### User Story 3 - Tornar auditavel a promocao de contingencia por ambiente (Priority: P3)

Como mantenedor do roadmap, quero registrar por que `SVC` entra primeiro como diagnostico observavel e por que `EPEC` e `offline` continuam deferidos, para que a trilha de contingencia avance por etapas additive e com criterio publico.

**Why this priority**: Sem justificativa rastreavel, a contingencia tende a misturar transporte, emissao degradada, consulta auxiliar e particularidades por `UF` em uma unica promessa vaga.

**Independent Test**: Um revisor identifica quais ambientes de contingencia entram neste corte, quais ficam fora e quais fontes oficiais sustentam cada decisao sem depender de contexto oral.

**Acceptance Scenarios**:

1. **Given** o revisor consulta a feature e os anexos do roadmap, **When** ele verificar a classificacao de `SVC-AN`, `SVC-RS`, `EPEC` e `offline`, **Then** ele encontra justificativa coerente para o que entra como diagnostico observavel e para o que permanece deferido.
2. **Given** uma `UF` ou familia documental exija dependencias locais adicionais para contingencia, **When** o revisor consultar a documentacao da slice, **Then** ele encontra a dependencia dominante registrada como boundary e nao como suporte ja contratado.

### Edge Cases

- O que acontece quando o ambiente compartilhado de contingencia existe, mas a `UF` ainda nao tem criterio operacional suficiente para promocao segura?
- Como o slice deve se comportar quando `EPEC` aparece nos documentos oficiais, mas ainda nao existe trilha runtime estavel para conciliacao e retorno?
- Como evitar que a contingencia `offline` de `NFC-e` seja interpretada como emissor local embutido no pacote?
- Como manter a autorizacao normal intacta quando a solicitacao nao entra em nenhum criterio de contingencia suportado pelo slice?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST classificar de forma explicita quando uma operacao publica entra em trilha de contingencia por ambiente, antes de sugerir autorizacao normal bem-sucedida.
- **FR-002**: O sistema MUST tornar `SVC-AN` e `SVC-RS` observaveis como classes de contingencia suportadas neste slice quando a dependencia de ambiente estiver dentro do recorte promovido.
- **FR-003**: O sistema MUST preservar sem regressao o comportamento atual dos fluxos de autorizacao normal quando nenhum criterio de contingencia estiver ativo.
- **FR-004**: O sistema MUST manter `EPEC` como contingencia nomeada e rastreavel, mas explicitamente deferida para runtime sempre que a trilha operacional completa ainda nao estiver promovida.
- **FR-005**: O sistema MUST manter a contingencia `offline` de `NFC-e` explicitamente deferida para runtime, com boundary clara sobre dependencias locais e variacao por `UF`.
- **FR-006**: O sistema MUST distinguir de forma consistente, na documentacao e no contrato publicado, o que entra agora como diagnostico observavel de contingencia e o que continua em backlog, `tooling`, `exemplo` ou `documentacao`.
- **FR-007**: O sistema MUST mapear a classificacao de contingencia aos ambientes relevantes, incluindo `homologacao`, `producao`, `SVC-AN`, `SVC-RS`, `EPEC` e `offline`, registrando quando um ambiente permanece fora do recorte.
- **FR-008**: O sistema MUST registrar as dependencias dominantes por `UF` ou familia documental quando elas impedirem a promocao uniforme de contingencia, especialmente para os sinais estaduais observados em `SP`, `PR`, `RJ` e `CE`.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, `RFL-005`, `RTM-005`, `RTM-012` e as fontes oficiais de contingencia usadas para justificar a classificacao do slice.
- **FR-010**: O sistema MUST permanecer additive sobre as facades operacionais ja publicadas, sem exigir emissor embutido, persistencia local obrigatoria ou automacao assistida para representar contingencia.
- **FR-011**: O sistema MUST definir uma validacao minima que cubra diagnostico observavel de contingencia suportada, boundary explicita para `EPEC` e `offline`, ausencia de regressao no fluxo normal e coerencia documental do roadmap.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem exigir novo entrypoint publico para representar contingencia.
- **CC-002**: O slice deve preservar compatibilidade com as facades operacionais atuais de `NF-e` e `NFC-e`, tratando novas classificacoes de contingencia apenas como extensoes additive e documentadas.
- **CC-003**: Nenhuma parte desta feature pode implicar emissor desktop embutido, persistencia local obrigatoria, recuperacao assistida completa ou automacao de credenciamento.
- **CC-004**: A validacao minima desta feature deve cobrir contrato publico, boundaries por ambiente, regressao de autorizacao normal e verificacoes de lint, formatacao, tipagem, build e testes.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) e [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) definem o recorte `RFL-005` e a lacuna oficial de contingencia por ambiente.
- **KS-002**: Anexo III e Anexo IV do `MOC`, manual de contingencia `NF-e`, manual de contingencia `offline` da `NFC-e`, superficies `AgendamentoSVC` e materiais de `EPEC` do portal nacional sustentam a classificacao normativa desta feature.
- **KS-003**: [docs/roadmap/topicos-oficiais.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/topicos-oficiais.md), [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md), [docs/roadmap/ufs-ambientes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ufs-ambientes.md) e [docs/roadmap/hosts-oficiais.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/hosts-oficiais.md) sustentam a parte ambiental e estadual da fronteira de contingencia.
- **KS-004**: Sempre que a evidencia oficial de `EPEC`, `offline` ou de uma `UF` permanecer parcial, a lacuna deve continuar registrada como boundary explicita em vez de ser convertida em promessa implicita de runtime.

### Key Entities _(include if feature involves data)_

- **Contingency Environment Boundary**: classificacao observavel que explica quando um fluxo sai da autorizacao normal e passa a depender de contingencia por ambiente.
- **Supported Contingency Diagnostic**: recorte promovido deste slice que torna `SVC-AN` e `SVC-RS` observaveis sem executar toda a operacao degradada de um emissor.
- **Deferred Contingency Path**: trilha nomeada, mas ainda fora do runtime promovido, como `EPEC` e contingencia `offline` de `NFC-e`.
- **Contingency Promotion Rationale**: justificativa rastreavel que explica por que um ambiente de contingencia entra agora como boundary observavel e por que outros permanecem deferidos.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% dos fluxos declarados como cobertos por este slice devolvem classificacao explicita de contingencia por ambiente antes de qualquer fallback silencioso.
- **SC-002**: 100% dos fluxos de autorizacao normal usados como baseline continuam produzindo o mesmo resultado observavel quando nenhum criterio de contingencia estiver ativo.
- **SC-003**: 100% das trilhas deferidas nesta fase, incluindo `EPEC` e `offline`, aparecem classificadas de forma consistente entre spec, roadmap e contrato publicado.
- **SC-004**: Um revisor consegue identificar quais ambientes de contingencia entram no slice e quais ficam fora em menos de 10 minutos de leitura dirigida.
- **SC-005**: O contrato publico do pacote permanece additive e sem exigir nova superficie publica dedicada a emissor ou operacao assistida.

## Assumptions

- O proximo slice novo derivado do roadmap apos `015` deve sair de `RFL-005`, e nao repetir a promocao do cohort `SP + PR` de `NFC-e`.
- A primeira promocao observavel de contingencia deste corte nasce em `authorizeNFe`; `authorizeNFCe` permanece restrita ao boundary explicito de escopo ja publicado neste slice.
- O primeiro corte desta trilha de contingencia deve priorizar classificacao e boundary observavel por ambiente antes de promover execucao completa de `EPEC` ou `offline`.
- `SVC-AN` e `SVC-RS` entram neste recorte apenas na medida em que o pacote consiga distingui-los como degradacao suportada sem reabrir toda a operacao de contingencia.
- `EPEC`, contingencia `offline` de `NFC-e`, persistencia local, recuperacao assistida e automacao de credenciamento permanecem fora do slice imediato salvo promocao explicita posterior.

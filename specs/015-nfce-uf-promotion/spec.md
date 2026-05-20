# Feature Specification: NFC-e UF Promotion

**Feature Branch**: `015-nfce-uf-promotion`

**Created**: 2026-05-20

**Status**: Draft

**Input**: Analise do roadmap canonico atualizado para abrir a proxima slice derivada de `RFL-006`: promover `NFC-e` alem do piloto `SP` com um lote pequeno e publico de `UFs` elegiveis, mantendo `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline` e consulta do consumidor como boundaries explicitas entre `runtime`, `tooling` e `exemplo`.

## Clarifications

### Session 2026-05-20

- Q: Qual deve ser o primeiro lote promovido alem de `SP` nesta spec? → A: Promover apenas `PR` alem de `SP` neste primeiro corte.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Autorizar `NFC-e` homologada em um lote inicial de `UFs` elegiveis (Priority: P1)

Como integrador que ja usa o nucleo nacional de `NFC-e`, quero autorizar documentos homologados em `PR` alem de `SP`, para reduzir a dependencia do piloto unico e validar a primeira extensao estadual do contrato root sem montagem manual de XML ou transporte.

**Why this priority**: O roadmap aponta `RFL-006` como a proxima promocao natural depois do piloto `SP`, e o maior ganho de valor para o integrador e sair do suporte mono-`UF` sem prometer cobertura nacional implicita.

**Independent Test**: Uma `NFC-e` valida de `PR` pode ser autorizada pela facade root com resultado estruturado equivalente ao slice atual de `SP`; uma `UF` fora do lote promovido continua falhando de forma deterministica antes do transporte remoto.

**Acceptance Scenarios**:

1. **Given** uma `NFC-e` homologada valida de `PR`, **When** o integrador solicitar a autorizacao pela superficie publica atual, **Then** o SDK devolve um resultado operacional estruturado equivalente ao comportamento ja suportado para `SP`.
2. **Given** uma `NFC-e` valida de uma `UF` fora do lote promovido, **When** o integrador solicitar a autorizacao, **Then** o SDK falha com boundary explicita de `UF` nao suportada antes de qualquer promessa implicita de interoperabilidade completa.

---

### User Story 2 - Entender claramente o que continua fora da promocao imediata (Priority: P2)

Como integrador que precisa planejar a emissao completa de `NFC-e`, quero distinguir o que entra agora em `runtime` do que continua como `tooling`, `exemplo` ou backlog, para nao assumir suporte implicito a `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline` ou consulta publica do consumidor.

**Why this priority**: O proprio roadmap atualizado destaca que o maior risco da fase `NFC-e` e transformar variacoes estaduais e artefatos auxiliares em promessa silenciosa de API fiscal.

**Independent Test**: Um revisor consegue consultar a spec, o contrato publicado e os anexos do roadmap e identificar, sem ambiguidade, quais assuntos entram no slice promovido e quais continuam fora do recorte imediato.

**Acceptance Scenarios**:

1. **Given** o integrador consulta a documentacao da nova slice para preparar uma emissao completa de `NFC-e`, **When** ele procurar por `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor ou contingencia `offline`, **Then** esses itens aparecem classificados como fora da promocao imediata ou como apoio nao-`runtime`.
2. **Given** uma necessidade operacional depende de um delta estadual ainda nao promovido, **When** o integrador revisar a spec da feature, **Then** ele encontra a boundary correspondente e nao interpreta esse delta como suporte ja contratado pelo pacote.

---

### User Story 3 - Tornar publico o criterio de promocao das proximas `UFs` (Priority: P3)

Como mantenedor do roadmap, quero registrar por que `PR` entra no primeiro lote promovido alem de `SP` e por que as demais `UFs` permanecem fora, para que a expansao de `NFC-e` continue additive, auditavel e baseada em evidencia oficial em vez de crescer por inferencia informal.

**Why this priority**: Sem criterio publico de promocao, a fase `NFC-e` tende a misturar disponibilidade documental, deltas estaduais e expectativa de contrato, o que enfraquece a governanca do roadmap.

**Independent Test**: Um revisor consegue identificar o lote promovido, as `UFs` excluidas do mesmo corte e a justificativa documental de cada decisao sem depender de conhecimento oral do historico do projeto.

**Acceptance Scenarios**:

1. **Given** o revisor consulta a feature e seus anexos de apoio, **When** ele verificar quais `UFs` foram escolhidas para a promocao inicial alem de `SP`, **Then** ele encontra `PR` como a unica `UF` adicional do corte inicial, justificada por evidencia oficial coerente.
2. **Given** uma `UF` com evidencia parcial ou ruidosa permanece fora do lote inicial, **When** o revisor consultar a documentacao da slice, **Then** ele encontra a razao da exclusao e a condicao minima para futura promocao.

### Promotion Rationale Register

- `PR` entra no cohort inicial porque combina sinais coerentes de `homologacao`, `producao`, web services e operacao estadual observavel, permitindo a promocao controlada alinhada a `RFL-006`.
- `PB` permanece fora porque o sinal dominante ainda gravita em `CSC` e consulta do consumidor, o que reabriria backlog auxiliar dentro do runtime imediato.
- `MS` permanece fora porque o acervo atual ainda pede consolidacao especifica do recorte `NFC-e`, apesar da boa visibilidade de onboarding e ambientes.
- `GO` permanece fora porque o delta estadual mais forte nesta fase ainda esta no `QR Code`, nao na autorizacao homologada additive do cohort minimo.
- `SC` permanece fora porque a evidencia coletada continua mais ligada a autenticacao, download e dependencia de infraestrutura compartilhada do que a um recorte operacional estadual fechado.
- `CE` permanece fora porque os sinais de producao e catalogo tecnico ainda convivem com evidencia ruidosa e falhas de captura que impedem uma promocao conservadora.

### Edge Cases

- O que acontece quando uma `UF` possui evidencia suficiente para autorizacao homologada, mas ainda depende de deltas estaduais relevantes para `CSC` ou `QR Code`?
- Como a feature deve se comportar quando o nucleo nacional continua valido, mas a proveniencia do endpoint estadual ou do perfil operacional ainda e insuficiente para promocao segura?
- Como evitar que exemplos ou runbooks de onboarding estadual sejam lidos como se fossem capacidade `runtime` garantida?
- Como o lote inicial deve permanecer pequeno sem virar promessa silenciosa de expansao rapida para todas as `27` `UFs`?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST promover `PR` como a primeira `UF` adicional alem de `SP` para o slice operacional homologado de `NFC-e` na superficie publica root.
- **FR-002**: O sistema MUST manter uma lista publica e deterministica das `UFs` cobertas pelo lote inicial promovido nesta feature, limitada a `SP` e `PR`.
- **FR-003**: O sistema MUST preservar o comportamento ja suportado para o piloto `SP` sem regressao contratual ou mudanca breaking para consumidores atuais.
- **FR-004**: O sistema MUST devolver resultado operacional estruturado para `NFC-e` homologada nas `UFs` promovidas, sem exigir composicao manual de XML, assinatura ou transporte pelo integrador.
- **FR-005**: O sistema MUST continuar falhando de forma explicita para `UFs` fora do lote promovido, antes de sugerir suporte operacional uniforme ou cobertura nacional implicita.
- **FR-006**: O sistema MUST classificar `CSC`, `QR Code`, `DANFE NFC-e`, consulta publica do consumidor, contingencia `offline`, `EPEC NFC-e` e cancelamento por substituicao como fora da promocao imediata sempre que continuarem sem boundary estavel para `runtime`.
- **FR-007**: O sistema MUST distinguir claramente, na documentacao e no contrato publicado, o que entra como `runtime`, o que permanece como `tooling` e o que fica apenas como `exemplo` ou backlog documental dentro desta fase de `NFC-e`.
- **FR-008**: O sistema MUST registrar para cada `UF` nao promovida do corte imediato a razao dominante da exclusao, como delta estadual forte, evidencia parcial, dependencia de onboarding ou ausencia de proveniencia operacional suficiente, explicando em especial por que `PB`, `MS`, `GO`, `SC` e `CE` permanecem fora deste primeiro corte.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, `RFL-006`, `RTM-007`, `RTM-011`, `RTM-012` e os documentos oficiais usados para justificar a promocao do lote inicial.
- **FR-010**: O sistema MUST manter o lote promovido pequeno, additive e auditavel, sem transformar a promocao inicial de `PR` alem de `SP` em promessa silenciosa de cobertura multi-`UF` irrestrita.
- **FR-011**: O sistema MUST definir uma validacao minima que cubra a `UF` adicional promovida, a boundary de `UF` fora do escopo, a coerencia documental do roadmap e as verificacoes de qualidade do pacote.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem remover, renomear ou mover exports publicos existentes.
- **CC-002**: O slice deve reutilizar o nucleo nacional e a linguagem de boundary ja publicados pela spec `010`, preservando compatibilidade com o contrato atual de `NFC-e`.
- **CC-003**: Nenhuma parte desta promocao pode implicar suporte `runtime` automatico para `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline` ou consulta do consumidor.
- **CC-004**: Quaisquer deltas por `UF` introduzidos nesta feature devem permanecer limitados ao lote promovido e explicitamente documentados como extensoes estaduais controladas.
- **CC-005**: A validacao minima desta feature deve cobrir contrato publico, regressao de `SP`, promocao operacional de `PR`, boundary de `UF` nao promovida e verificacoes de lint, formatacao, tipagem, build e testes do slice alterado.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) e [docs/roadmap/nfce-operacional-promovivel.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/nfce-operacional-promovivel.md) definem a iteracao seguinte e o recorte `RFL-006`.
- **KS-002**: [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md) e [docs/roadmap/ufs-ambientes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ufs-ambientes.md) definem o criterio conservador de promocao entre `documentacao`, `tooling` e `runtime` e o nivel atual de evidencia por `UF`.
- **KS-003**: [specs/010-nfce-national-core/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/spec.md) e [specs/014-expand-signing-coverage/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/014-expand-signing-coverage/spec.md) definem a baseline de `NFC-e` ja publicada e as boundaries atuais de `chNFe`, `cDV`, `hashCSRT` e `QR Code`.
- **KS-004**: Manual de boas praticas `NFC-e`, `NT 2023.002 v1.01`, `NT 2018.001`, `NT 2018.004`, manuais de `DANFE NFC-e` e `QR Code`, informe tecnico `GO 2025.003` e evidencias estaduais de `SP`, `PR`, `PB`, `GO`, `SC` e `CE` sustentam a classificacao entre promocao imediata e backlog.
- **KS-005**: Sempre que a evidencia oficial de uma `UF` ou de um artefato auxiliar permanecer parcial, a lacuna deve continuar registrada como boundary explicita em vez de ser convertida em promessa implicita de contrato.

### Key Entities *(include if feature involves data)*

- **Promoted NFC-e UF Cohort**: conjunto inicial e publico formado por `SP` e `PR` para a primeira expansao operacional controlada desta fase.
- **Supported NFC-e Operational Slice**: recorte do contrato root que cobre autorizacao homologada e boundaries observaveis para as `UFs` promovidas.
- **Deferred NFC-e Auxiliary Boundary**: classificacao documental dos assuntos que permanecem fora da promocao imediata, como `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor e contingencia `offline`.
- **UF Promotion Rationale**: justificativa rastreavel que explica por que uma `UF` entra ou nao no lote promovido.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `PR` pode ser autorizada em homologacao pela superficie publica de `NFC-e` em 100% dos cenarios declarados como suportados para essa `UF`, sem regressao para `SP`.
- **SC-002**: 100% das `UFs` fora do lote promovido continuam falhando com boundary explicita antes de qualquer interpretacao de suporte operacional completo.
- **SC-003**: 100% dos assuntos marcados como fora da promocao imediata nesta fase aparecem classificados de forma consistente entre spec, roadmap e contrato publicado.
- **SC-004**: Um revisor consegue identificar o lote promovido, as exclusoes mais proximas e a razao de cada decisao em menos de 10 minutos de leitura dirigida.
- **SC-005**: O contrato publico de `NFC-e` permanece additive e nao introduz regressao para o comportamento ja suportado em `SP`.

## Assumptions

- A spec `010` continua sendo a baseline do nucleo nacional e do piloto `SP` para `NFC-e`.
- O proximo corte alem de `SP` fica explicitamente limitado a `PR` nesta primeira expansao controlada.
- Esta feature implementa o corte roadmap de `RFL-006` e serve como ponte operacional entre `RTM-007`, `RTM-011` e `RTM-012` sem promover backlog auxiliar para runtime.
- `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline` e consulta do consumidor continuam fora do `runtime` imediato, salvo se o criterio de promocao do roadmap for explicitamente satisfeito dentro desta mesma feature.
- Runbooks, exemplos e material de onboarding estadual podem crescer nesta fase, mas nao substituem a necessidade de boundary clara para contrato publico.
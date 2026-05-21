# Feature Specification: NFC-e PR Promotion

**Feature Branch**: `[023-nfce-pr-promotion]`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao. Priorizar runtime"

## Clarifications

### Session 2026-05-21

- Q: Qual classificacao publica deve valer para `UF` fora do cohort `SP + PR`? → A: Reutilizar `unsupported-state`.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Autorizar NFC-e homologada do PR no root atual (Priority: P1)

Como integrador que ja usa `authorizeNFCe` no piloto atual, quero autorizar documentos homologados do `PR` com a mesma facade root, para ampliar o runtime alem de `SP` sem montar XML nem tratar transporte fora do contrato publicado.

**Why this priority**: O roadmap indica `RFL-006` como a principal trilha runtime ainda aberta para `NFC-e`, e `PR` e o menor corte additive sustentado por evidencia estadual coerente sem prometer cobertura nacional.

**Independent Test**: Uma `NFC-e` homologada valida de `PR` pode ser autorizada por `authorizeNFCe` com classificacao operacional estruturada equivalente ao comportamento publicado para `SP`.

**Acceptance Scenarios**:

1. **Given** uma `NFC-e` homologada valida de `PR`, **When** o integrador solicitar autorizacao pela superficie root atual, **Then** o SDK devolve resultado operacional estruturado sem exigir composicao manual do fluxo.
2. **Given** uma `NFC-e` homologada valida de `SP`, **When** o integrador solicitar autorizacao apos a promocao de `PR`, **Then** o comportamento observavel de `SP` permanece inalterado.

---

### User Story 2 - Preservar boundaries explicitas para UFs e capacidades ainda deferidas (Priority: P2)

Como integrador planejando rollout de `NFC-e`, quero continuar recebendo boundaries claras para `UFs` nao promovidas e para assuntos como `CSC`, `QR Code`, `DANFE NFC-e` e contingencia `offline`, para nao interpretar o novo corte de `PR` como suporte multi-`UF` irrestrito.

**Why this priority**: O recorte promovivel de `NFC-e` depende de manter o lote pequeno e auditavel; sem essas boundaries, a promocao de uma `UF` adicional vira promessa silenciosa de backlog ainda nao estabilizado.

**Independent Test**: Uma `UF` fora do cohort promovido continua falhando de forma deterministica antes do transporte, e qualquer pedido dependente de `CSC`, `QR Code`, `DANFE NFC-e` ou `offline` continua classificado fora do runtime promovido.

**Acceptance Scenarios**:

1. **Given** uma `NFC-e` valida de uma `UF` fora do cohort promovido, **When** o integrador solicitar autorizacao, **Then** o SDK devolve boundary explicita de `UF` nao suportada antes do transporte remoto.
2. **Given** um integrador que procura suporte a `CSC`, `QR Code`, `DANFE NFC-e` ou contingencia `offline`, **When** ele consultar o contrato desta slice, **Then** esses itens continuam identificados como fora do recorte runtime imediato.

---

### User Story 3 - Tornar publico o cohort promovido e sua proveniencia (Priority: P3)

Como mantenedor do roadmap, quero publicar de forma rastreavel que o cohort promovido desta slice e `SP + PR`, para manter a expansao de `NFC-e` additive, justificavel pelas fontes oficiais e facil de revisar nas proximas promocoes por `UF`.

**Why this priority**: A trilha de `NFC-e` cruza variacoes estaduais fortes; sem um registro publico do cohort e da razao de promocao, a governanca do runtime volta a depender de contexto oral.

**Independent Test**: Um revisor consegue identificar em poucos minutos quais `UFs` estao no cohort promovido, por que `PR` entrou agora e por que as demais `UFs` continuam fora desta slice.

**Acceptance Scenarios**:

1. **Given** um revisor consulta a spec e os anexos do roadmap, **When** ele verificar o cohort promovido, **Then** encontra `SP + PR` como o lote suportado deste corte.
2. **Given** o revisor consultar as `UFs` nao promovidas mais proximas, **When** ele comparar a spec com o roadmap, **Then** encontra razoes dominantes de exclusao coerentes com a matriz estadual e o recorte promovivel.

### Edge Cases

- O que acontece quando a `UF` e `PR`, mas o request depende de capacidade auxiliar ainda deferida, como `CSC` ou `QR Code`?
- Como o sistema deve se comportar quando uma `UF` fora do cohort compartilha parte do nucleo nacional, mas ainda nao tem promocao estadual fechada?
- Como impedir que a promocao de `PR` seja interpretada como abertura implicita para `PB`, `GO`, `SC`, `CE` ou qualquer outra `UF` com evidencia parcial?
- Como manter o contrato additive se a evidencia estadual de `PR` evoluir sem exigir novos entrypoints ou imports profundos?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST promover `PR` como a primeira `UF` adicional alem de `SP` no runtime homologado de `NFC-e` via `authorizeNFCe`.
- **FR-002**: O sistema MUST publicar de forma deterministica o cohort promovido desta slice, limitado a `SP` e `PR`.
- **FR-003**: O sistema MUST preservar sem regressao o comportamento ja publicado para `SP`.
- **FR-004**: O sistema MUST devolver resultado operacional estruturado para autorizacao homologada de `PR` equivalente ao contrato atual de `NFC-e`.
- **FR-005**: O sistema MUST continuar devolvendo boundary explicita para qualquer `UF` fora do cohort promovido antes do transporte remoto.
- **FR-005A**: O sistema MUST reutilizar a classificacao publica `unsupported-state` para qualquer `UF` fora do cohort `SP + PR`, preservando a linguagem contratual ja publicada para `NFC-e` fora do escopo suportado.
- **FR-006**: O sistema MUST manter `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline`, consulta do consumidor e `EPEC NFC-e` fora da promocao runtime imediata desta slice.
- **FR-007**: O sistema MUST diferenciar, na documentacao e no contrato publicado, o que entra nesta slice como runtime do que permanece como backlog, `tooling` ou `exemplo`.
- **FR-008**: O sistema MUST registrar a razao dominante da exclusao das `UFs` que continuam fora do corte imediato, em especial `PB`, `GO`, `SC`, `CE` e `MS`.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta slice, `RFL-006`, `RTM-007`, `RTM-011`, `RTM-012` e os artefatos oficiais que justificam a promocao de `PR`.
- **FR-010**: O sistema MUST manter esta promocao additive no import raiz existente, sem criar novo entrypoint publico para `NFC-e`.
- **FR-011**: O sistema MUST definir validacao minima cobrindo regressao de `SP`, promocao operacional de `PR`, boundary de `UF` nao promovida e coerencia documental do cohort publicado.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem remover, renomear ou mover exports publicos existentes.
- **CC-002**: A slice deve reutilizar o contrato operacional ja publicado para `authorizeNFCe`, preservando compatibilidade com o nucleo atual de `NFC-e`.
- **CC-002A**: A promocao de `PR` nao pode substituir `unsupported-state` por uma nova classificacao publica para `UFs` fora do cohort promovido.
- **CC-003**: Nenhuma parte desta slice pode implicar suporte runtime automatico para `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline`, consulta do consumidor ou credenciamento estadual.
- **CC-004**: O cohort promovido deve permanecer explicitamente pequeno e limitado a `SP + PR`, sem linguagem que implique cobertura multi-`UF` ampla.
- **CC-005**: A validacao minima desta feature deve cobrir Jest focado, lint, formatacao, typecheck, build e verificacao do contrato publicado do pacote.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) e [docs/roadmap/nfce-operacional-promovivel.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/nfce-operacional-promovivel.md) definem `RFL-006` como a trilha runtime menor e promovivel para `NFC-e`.
- **KS-002**: [docs/roadmap/specs-implementacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-implementacao.md) e [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) mostram que as continuidades runtime abertas se concentram em `015` e `016`, com `NFC-e` ainda exigindo fechamento operacional controlado.
- **KS-003**: [specs/015-nfce-uf-promotion/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/015-nfce-uf-promotion/spec.md) e [specs/010-nfce-national-core/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/spec.md) definem a baseline de `NFC-e` e o recorte maior do qual esta nova slice deriva.
- **KS-004**: Evidencias estaduais de `SP` e `PR`, junto ao Manual de boas praticas de `NFC-e`, `NT 2023.002`, material de `DANFE NFC-e` e anexos por `UF`, sustentam a promocao conservadora de `PR` e a manutencao das demais capacidades como boundary.
- **KS-005**: Sempre que a evidencia estadual continuar parcial ou ruidosa para outras `UFs`, a lacuna deve permanecer registrada como boundary explicita em vez de ser convertida em promessa implicita de runtime.

### Key Entities _(include if feature involves data)_

- **Promoted NFC-e PR Slice**: recorte runtime additive que amplia o cohort homologado atual para `SP + PR` sem alterar o entrypoint root.
- **Promoted UF Cohort**: conjunto publico e deterministico de `UFs` suportadas por esta slice, limitado a `SP` e `PR`.
- **Deferred NFC-e Auxiliary Boundary**: classificacao dos assuntos que continuam fora da promocao imediata, como `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor e contingencia `offline`.
- **UF Promotion Rationale**: justificativa rastreavel que explica por que `PR` entra agora e por que outras `UFs` permanecem fora.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% dos cenarios declarados como suportados para `PR` nesta slice podem ser exercitados pela facade root existente sem regressao para `SP`.
- **SC-002**: 100% das `UFs` fora do cohort promovido continuam retornando boundary explicita antes do transporte remoto.
- **SC-002A**: 100% das `UFs` fora do cohort `SP + PR` continuam retornando `unsupported-state`, sem introduzir nova classificacao publica para exclusao de cohort.
- **SC-003**: 100% dos assuntos marcados como fora da promocao imediata aparecem classificados de forma consistente entre spec, roadmap e contrato publicado.
- **SC-004**: Um revisor consegue identificar o cohort `SP + PR`, suas boundaries e a razao das exclusoes principais em menos de 10 minutos de leitura dirigida.
- **SC-005**: O contrato publico de `NFC-e` permanece additive e sem criar novo import path ou entrypoint dedicado para esta promocao.

## Assumptions

- Esta feature nasce como slice menor derivada da trilha aberta em `015`, e nao como substituicao da spec maior de promocao por `UF`.
- `SP` continua sendo a baseline ja estabilizada para `NFC-e` no runtime atual.
- `PR` e o menor corte adicional coerente com o roadmap para uma promocao runtime conservadora neste momento.
- `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor, credenciamento estadual e contingencia `offline` continuam fora do runtime imediato mesmo para `PR`.
- O proximo crescimento multi-`UF` so deve acontecer depois que o cohort `SP + PR` estiver validado e com boundaries publicas consolidadas.

# Feature Specification: External Table Policy

**Feature Branch**: `018-external-table-policy`

**Created**: 2026-05-20

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao"

## Clarifications

### Session 2026-05-20

- Q: Qual artefato deve permanecer como fonte canonica da politica e das baselines desta feature? → A: `docs/roadmap/politica-tabelas-externas.md` permanece como artefato canonico, e a spec define apenas as regras, criterios e validacao dessa atualizacao.

## Scoped Inventory

Esta feature trata como inventario fechado dos grupos priorizados de `RTM-010` apenas os seguintes identificadores:

- `cbs-ibs`
- `payment-methods`
- `ncm-utrib`
- `fcp`
- `municipios`
- `anp`
- `cfop`

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Consolidar baseline e cadence das tabelas externas (Priority: P1)

Como mantenedor do SDK, quero consolidar em um unico fluxo auditavel quais tabelas externas sao prioritarias, qual fonte oficial governa cada grupo e com que cadence minima elas devem ser revistas, para que `RTM-010` deixe de depender de backlog generico e passe a ter manutencao executavel.

**Why this priority**: Sem um baseline unico por grupo de tabela, o roadmap continua dependente de memoria informal e o integrador nao consegue saber quais dados externos estao realmente governados.

**Independent Test**: Um revisor consegue abrir `docs/roadmap/politica-tabelas-externas.md` e verificar, para cada grupo de tabela priorizado, a fonte oficial primaria, a baseline vigente, a data de publicacao observada, a data de vigencia quando houver e a cadence minima de revisao.

**Acceptance Scenarios**:

1. **Given** um grupo prioritario de tabela externa coberto por `RTM-010`, **When** o mantenedor consultar a politica executavel, **Then** ele encontra a fonte oficial primaria, a baseline vigente e a cadence minima correspondentes sem depender de anotações dispersas.
2. **Given** uma nova publicacao oficial que substitui a baseline anterior, **When** a politica for aplicada, **Then** a nova baseline passa a ser tratada como referencia principal e a anterior permanece apenas como trilha historica.

---

### User Story 2 - Classificar atualizacoes externas sem inflar o runtime (Priority: P2)

Como mantenedor do roadmap, quero aplicar uma regra unica para classificar cada atualizacao de tabela externa como dado auxiliar, impacto em schema, impacto em validacao, watchlist ou promocao excepcional para runtime, para que mudancas recorrentes nao virem promessas silenciosas de API.

**Why this priority**: O maior risco de `RTM-010` nao e falta de fonte, e sim promover dados externos para o contrato publico sem criterio conservador e repetivel.

**Independent Test**: Um revisor consegue seguir a politica de classificacao para uma tabela publicada recentemente e chegar a um resultado claro entre `tooling`, `runtime`, `documentacao` ou watchlist, sem reinterpretar todo o roadmap.

**Acceptance Scenarios**:

1. **Given** uma tabela externa recorrente que ainda nao e consumida pelo contrato publico do SDK, **When** a atualizacao for classificada, **Then** ela permanece em `tooling` com regra explicita de revisao e promocao conservadora.
2. **Given** uma mudanca que afeta diretamente um contrato publico existente, **When** a atualizacao for classificada, **Then** a politica explicita que essa promocao exige criterio adicional, fallback claro e slice propria antes de qualquer promessa de runtime.

---

### User Story 3 - Tornar o suporte ao integrador repetivel e auditavel (Priority: P3)

Como integrador ou mantenedor operacional, quero que a governanca das tabelas externas deixe claro quais grupos exigem revisao por republicacao, quais dependem de delta por `UF` e quais continuam apenas como apoio documental, para que onboarding, troubleshooting e futuras slices usem a mesma leitura operacional.

**Why this priority**: Sem um fluxo auditavel de suporte, a curadoria das tabelas externas continua correta apenas enquanto estiver fresca na memoria de quem editou o roadmap.

**Independent Test**: Um revisor consegue distinguir, para qualquer grupo priorizado, se ele ja tem baseline governada, se depende de reconciliacao adicional por `UF` ou se continua apenas como observacao documental.

**Acceptance Scenarios**:

1. **Given** um grupo de tabela com forte delta estadual, **When** o revisor consultar a politica, **Then** ele entende que o grupo continua fora do runtime por padrao e depende de reconciliacao adicional antes de qualquer promocao.
2. **Given** um grupo de tabela que serve apenas para suporte, validacao ou sincronizacao auxiliar, **When** a feature for consultada, **Then** ele permanece explicitamente fora do contrato principal do SDK.

### Edge Cases

- O que acontece quando uma nova publicacao oficial informa data de publicacao, mas nao deixa clara a data efetiva de vigencia?
- Como a politica deve tratar duas tabelas oficiais coexistindo temporariamente sem revogacao explicita da versao anterior?
- Como o fluxo classifica grupos com forte delta por `UF`, como `FCP` e municipios, sem sugerir consumo direto pelo runtime?
- Como evitar que tabelas usadas apenas em troubleshooting, auditoria ou curadoria sejam lidas como promessa silenciosa de API publica?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST manter uma politica executavel unica para os grupos prioritarios de tabelas externas ligados a `RTM-010`.
- **FR-001A**: O sistema MUST tratar `docs/roadmap/politica-tabelas-externas.md` como artefato canonico desta feature para baseline, cadence, classificacao e regra de promocao.
- **FR-001B**: O sistema MUST tratar o inventario fechado desta slice como os grupos `cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp` e `cfop`, sem ampliar silenciosamente o escopo durante a implementacao.
- **FR-002**: O sistema MUST identificar para cada grupo priorizado a fonte oficial primaria, a baseline vigente observada e a cadence minima de revisao.
- **FR-003**: O sistema MUST distinguir publicacao observada e vigencia efetiva sempre que a tabela oficial explicitar datas diferentes.
- **FR-004**: O sistema MUST registrar quando uma nova versao substitui integralmente a baseline anterior e quando duas versoes precisam coexistir ate confirmacao oficial.
- **FR-005**: O sistema MUST classificar cada grupo de tabela entre impacto em schema, validacao, dado auxiliar, watchlist ou promocao excepcional para runtime.
- **FR-006**: O sistema MUST tratar tabelas externas como `tooling` por padrao e exigir criterio conservador adicional antes de qualquer promocao para `runtime`.
- **FR-007**: O sistema MUST explicitar quais grupos possuem delta por `UF` forte o suficiente para permanecer fora do runtime por padrao.
- **FR-008**: O sistema MUST definir um fluxo recorrente de revisao que permita detectar republicacoes, registrar proveniencia e atualizar a baseline sem depender de memoria informal.
- **FR-009**: O sistema MUST deixar explicito quais grupos continuam servindo apenas a suporte, sincronizacao, validacao auxiliar ou curadoria documental.
- **FR-010**: O sistema MUST manter rastreabilidade entre esta feature, `RTM-010`, o anexo de politica de tabelas externas e os documentos vigentes do portal.
- **FR-010A**: O sistema MUST evitar criar um registro canonico paralelo fora de `docs/roadmap/politica-tabelas-externas.md`; outros artefatos podem apenas resumir, validar ou referenciar essa politica.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature nao deve remover, renomear ou quebrar qualquer export publico existente do pacote.
- **CC-002**: Esta feature nao deve transformar tabelas externas em dependencia obrigatoria de runtime sem uma slice futura dedicada e additive.
- **CC-003**: Esta feature deve preservar a separacao entre governanca de dados externos, regras de validacao, artefatos gerados e contrato publico do SDK.
- **CC-004**: Se algum grupo de tabela vier a exigir comportamento publico futuro, a promocao deve nascer em slice propria com migration note e expectativa de rollout explicitas.
- **CC-005**: A validacao minima desta feature deve cobrir consistencia documental da politica canonica em `docs/roadmap/politica-tabelas-externas.md`, rastreabilidade de proveniencia e verificacao de formatacao dos artefatos alterados.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) define o objetivo, os grupos prioritarios, o artefato canonico desta feature e as regras de classificacao de `RTM-010`.
- **KS-002**: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md) e [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) definem a ordem, a classe alvo e a principal lacuna aberta para esta slice.
- **KS-003**: [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) fornece a baseline observada dos informes e tabelas mais sensiveis ligados a `RTM-010`.
- **KS-004**: Informes tecnicos e tabelas oficiais de `CBS/IBS`, meios de pagamento, `NCM/uTrib`, `FCP`, municipios, `ANP` e `CFOP` sustentam o recorte desta feature como governanca de dados externos, nao como contrato publico imediato.
- **KS-005**: Sempre que a origem oficial nao deixar clara a revogacao ou a vigencia efetiva de uma tabela, a politica deve registrar a ambiguidade como evidencia de governanca, e nao preenchê-la com inferencia silenciosa.

### Key Entities _(include if feature involves data)_

- **External Table Group**: familia de dados externos governada pela mesma fonte oficial e pela mesma cadence minima de revisao.
- **Baseline Table Record**: registro da baseline vigente observada para um grupo, incluindo publicacao, vigencia, status e historico minimo.
- **Review Cadence Rule**: regra que define quando um grupo deve ser revisado novamente com base em republicacao, nova versao ou atualizacao periodica oficial.
- **Promotion Decision**: decisao auditavel que explica por que um grupo permanece em `tooling`, segue em watchlist ou merece uma futura slice de runtime.

### Inventory Notes

- O inventario desta feature fica limitado aos grupos `cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp` e `cfop`.
- Qualquer grupo adicional de `RTM-010` identificado depois desta spec deve ser tratado como follow-up explicito, nao como expansao implicita desta slice.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% dos grupos prioritarios listados para `RTM-010` passam a ter fonte primaria, baseline observada e cadence minima explicitadas no artefato principal da feature.
- **SC-002**: Um mantenedor consegue classificar uma nova publicacao oficial de tabela externa em menos de 15 minutos usando apenas a politica definida por esta feature.
- **SC-003**: 100% dos grupos com delta forte por `UF` ficam explicitamente identificados como candidatos a `tooling` ou `documentacao`, e nao como runtime implicito.
- **SC-004**: Nenhum grupo priorizado permanece sem regra explicita para distinguir baseline vigente, trilha historica e coexistencia temporaria de versoes.
- **SC-005**: O roadmap passa a tratar `RTM-010` como governanca executavel de dados externos, sem introduzir nova dependencia obrigatoria no contrato publico do SDK.

## Assumptions

- A proxima slice inédita derivada do roadmap atual deve ser conservadora e nascer em `tooling`, porque os recortes runtime mais imediatos ja possuem specs dedicadas ou backlog ativo.
- O contrato publico do SDK ainda nao depende diretamente de tabelas externas em tempo de execucao.
- A baseline observada em `portal-documentos-vigentes.md` e suficiente para inaugurar a governanca executavel sem exigir sincronizacao automatica na primeira entrega.
- Grupos com delta forte por `UF`, como `FCP` e municipios, continuam exigindo tratamento conservador antes de qualquer promocao de escopo.
- Nao sera criado um novo registro canonico paralelo dentro de `specs/018-external-table-policy`; a spec governa a atualizacao do artefato de roadmap ja existente.

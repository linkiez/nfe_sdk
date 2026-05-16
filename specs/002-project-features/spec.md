# Feature Specification: Especificacao das Features do Projeto

**Feature Branch**: `003-research-sefaz-docs`

**Created**: 2026-05-16

**Status**: Draft

**Input**: User description: "quero especificar as features do projeto"

## Clarifications

### Session 2026-05-16

- Q: Qual criterio define "suporte confirmado" no catalogo de features? → A: Reservar "suporte confirmado" apenas para features ja estaveis como contrato publico do pacote; todo o resto fica como parcial ou futuro.
- Q: Como o catalogo principal de features deve ser organizado? → A: Catalogar features por capacidades visiveis ao usuario do SDK e incluir separadamente capacidades transversais do projeto, como geracao, normalizacao e compatibilidade.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender o que o SDK cobre hoje (Priority: P1)

Como integrador do SDK, quero visualizar de forma objetiva quais capacidades o projeto ja cobre por dominio fiscal para decidir se ele atende meu caso de uso sem precisar inspecionar o codigo gerado manualmente.

**Why this priority**: Sem uma visao clara das capacidades atuais, a adocao do SDK fica dependente de leitura tecnica dispersa e sujeita a interpretacoes erradas sobre o que ja esta pronto.

**Independent Test**: Pode ser validada verificando que uma pessoa que nao participou da implementacao consegue identificar, a partir da especificacao, quais dominios, fluxos e capacidades ja sao cobertos pelo projeto e quais ainda nao sao.

**Acceptance Scenarios**:

1. **Given** que um integrador precisa avaliar o SDK, **When** ele consulta a especificacao de features, **Then** ele consegue identificar as capacidades suportadas para geracao de artefatos, NFe, NFC-e e Manifestacao do Destinatario.
2. **Given** que uma capacidade tenha suporte parcial ou dependa de contexto externo, **When** ela for apresentada na especificacao, **Then** o escopo coberto e as restricoes conhecidas ficam explicitos.

---

### User Story 2 - Priorizar evolucoes com base em lacunas reais (Priority: P2)

Como mantenedor do projeto, quero uma definicao consolidada das features esperadas, atuais e faltantes para transformar o estado do repositorio em backlog planejavel sem misturar evidencia confirmada com expectativa futura.

**Why this priority**: O projeto ja possui artefatos gerados, pesquisa normativa e dossies por dominio, mas ainda precisa de uma definicao unica que conecte capacidades atuais, lacunas e impactos de evolucao.

**Independent Test**: Pode ser validada verificando que a especificacao diferencia claramente feature entregue, feature parcial, feature planejada e item fora de escopo, permitindo gerar um plano de trabalho sem reinterpretar a documentacao base.

**Acceptance Scenarios**:

1. **Given** que o time esta planejando a evolucao do SDK, **When** consulta a especificacao, **Then** consegue distinguir quais capacidades ja existem, quais dependem de aprofundamento documental e quais precisam de implementacao futura.
2. **Given** que uma feature afete multiplos dominios ou familias de schema, **When** ela for descrita, **Then** a abrangencia e os impactos esperados ficam visiveis de forma unificada.

---

### User Story 3 - Avaliar compatibilidade antes de adotar mudancas (Priority: P3)

Como revisor tecnico do projeto, quero que cada feature relevante deixe claro se ela impacta contratos publicos, artefatos gerados ou apenas documentacao interna para reduzir risco em futuras releases.

**Why this priority**: Neste repositório, parte relevante do valor esta na estabilidade dos nomes gerados, na compatibilidade ESM e na previsibilidade dos artefatos produzidos.

**Independent Test**: Pode ser validada verificando que um revisor consegue classificar o tipo de impacto de cada feature sem comparar manualmente diversos arquivos de configuracao, codigo gerado e dossies de pesquisa.

**Acceptance Scenarios**:

1. **Given** que uma feature altere comportamento do gerador ou dos artefatos publicados, **When** ela for registrada, **Then** a especificacao deixa claro o possivel impacto em compatibilidade.
2. **Given** que uma feature tenha valor apenas documental ou de pesquisa, **When** ela for registrada, **Then** a especificacao deixa claro que nao ha alteracao imediata na superficie publicada do pacote.

### Edge Cases

- Como a especificacao trata features que existem apenas para um dominio fiscal especifico, como NFC-e por UF ou Manifestacao do Destinatario com acesso restrito?
- Como diferenciar capacidade tecnicamente possivel a partir dos schemas de capacidade realmente sustentada pelo projeto como contrato esperado?
- Como registrar features cujo comportamento depende de notas tecnicas recentes ou de documentacao oficial ainda incompleta?
- Como representar itens que ja aparecem em artefatos gerados, mas ainda nao possuem validacao suficiente para serem tratados como capacidade suportada?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST definir um catalogo unico das features relevantes do projeto, organizado por capacidades visiveis ao usuario do SDK.
- **FR-002**: O sistema MUST descrever cada feature em termos de valor para o usuario do projeto, escopo funcional e dominios ou fluxos aos quais ela se aplica.
- **FR-003**: O sistema MUST classificar cada feature pelo seu estado atual, diferenciando pelo menos suporte confirmado, suporte parcial, dependencia externa ou evolucao futura, e reservar "suporte confirmado" apenas para features ja estaveis como contrato publico do pacote.
- **FR-004**: O sistema MUST destacar separadamente as capacidades compartilhadas entre NFe e NFC-e, as variacoes dependentes de UF e as restricoes especificas de Manifestacao do Destinatario.
- **FR-004A**: O sistema MUST incluir, em secao separada do catalogo principal, as capacidades transversais do projeto, como geracao, normalizacao e compatibilidade.
- **FR-005**: O sistema MUST indicar, para cada feature relevante, se o impacto esperado recai sobre documentacao, regras de normalizacao, artefatos gerados, contratos publicos do pacote ou apenas planejamento futuro.
- **FR-006**: O sistema MUST explicitar dependencias externas, pre-requisitos normativos ou restricoes de acesso quando eles condicionarem o uso real de uma feature.
- **FR-007**: O sistema MUST registrar lacunas conhecidas, ambiguidades normativas e areas ainda nao sustentadas por evidencia suficiente, sem apresentá-las como capacidades entregues.
- **FR-008**: O sistema MUST permitir que um revisor conecte cada feature a evidencias existentes no projeto, incluindo codigo, artefatos gerados ou documentacao consolidada.
- **FR-009**: O sistema MUST preservar a diferenca entre comportamento atual do projeto e backlog de evolucao, evitando tratar intencao futura como suporte presente.
- **FR-010**: Os usuarios MUST ser capazes de localizar rapidamente quais features sao centrais para adocao do SDK e quais exigem cuidado adicional por compatibilidade, cobertura estadual ou restricoes operacionais.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature nao altera por si so os caminhos de importacao ESM, os entrypoints publicados nem os identificadores expostos pelo pacote; ela formaliza o entendimento das capacidades do projeto.
- **CC-002**: A especificacao deve identificar quais familias de schema, artefatos gerados ou regras de normalizacao sao afetados por cada feature e quais pontos precisam permanecer estaveis para consumidores atuais.
- **CC-003**: Sempre que uma feature apontar necessidade futura de mudanca breaking, a especificacao deve registrar o risco, a necessidade de nota de migracao e o impacto esperado de versao sem aplicar a mudanca nesta etapa.
- **CC-004**: A validacao da feature deve comprovar consistencia entre a especificacao produzida e os artefatos ja existentes no repositorio, incluindo README, dossies documentais e estrutura publicada em `src/`.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias para definir as features do projeto sao o README do repositorio, os artefatos gerados e os dossies documentais consolidados a partir de fontes oficiais da SEFAZ.
- **KS-002**: Referencias secundarias podem ser usadas apenas para validar nomenclatura, cobertura percebida ou lacunas praticas, sem substituir a evidencia primaria presente no repositorio e nas fontes oficiais ja registradas.
- **KS-003**: A especificacao deve registrar conflitos, restricoes de acesso e pontos sem evidencia conclusiva, especialmente quando houver cobertura parcial por UF ou dependencia de superficies oficiais restritas.

### Key Entities *(include if feature involves data)*

- **Feature Catalog Entry**: Registro individual de uma capacidade do projeto, incluindo nome, valor para o usuario, escopo, estado atual e impacto esperado.
- **Domain Coverage**: Relacao entre uma feature e os dominios fiscais ou familias de schema aos quais ela se aplica.
- **Compatibility Constraint**: Regra que define o que a feature pode afetar em termos de contratos publicos, nomes gerados, output versionado ou comportamento interno.
- **Evidence Source**: Artefato do repositorio ou fonte normativa consolidada que sustenta a existencia, a limitacao ou a prioridade de uma feature.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador consegue identificar em menos de 5 minutos se o projeto cobre o dominio fiscal e o tipo de capacidade de que ele precisa.
- **SC-002**: 100% das features registradas possuem estado atual explicitado e escopo associado a pelo menos um dominio, fluxo ou comportamento do projeto.
- **SC-003**: 100% das features que dependem de restricao externa, cobertura estadual ou evidencia incompleta registram esse fato de forma explicita.
- **SC-004**: Um mantenedor consegue distinguir, sem leitura adicional do codigo-fonte, o que ja e suportado, o que e parcial e o que permanece como evolucao futura.
- **SC-005**: Um revisor tecnico consegue identificar, para cada feature principal, se o impacto esperado e documental, interno ou potencialmente contratual.
- **SC-006**: Nao permanecem features centrais do projeto sem referencia para evidencia existente no repositorio ou lacuna declarada.
- **SC-007**: A especificacao resultante permite derivar um backlog inicial de evolucao do SDK sem reclassificar manualmente o estado das capacidades listadas.

## Assumptions

- O projeto continuara evoluindo como pacote npm ESM em TypeScript com foco principal em geracao e normalizacao de artefatos derivados de schemas XSD.
- A especificacao desta feature descreve e organiza capacidades do projeto; ela nao implementa, por si so, novas features de runtime ou integracao com SEFAZ.
- Os dossies documentais existentes em `docs/` e a estrutura atual em `src/` fornecem evidencia suficiente para uma primeira rodada de definicao das features do projeto.
- Quando a evidencia atual for parcial, a especificacao pode marcar a feature como parcial ou futura, desde que a incerteza fique explicita.
- Variacoes estaduais de NFC-e e restricoes de acesso em Manifestacao do Destinatario permanecem fatores reais de escopo e devem continuar aparecendo como condicionantes das features relacionadas.

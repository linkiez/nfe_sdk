# Feature Specification: Roadmap Gap Audit

**Feature Branch**: `011-generic-event-mvp`

**Created**: 2026-05-19

**Status**: Draft

**Input**: User description: "fazer nova spec que analise specs de 1 a 8 e identifique gaps fazendo research na documentacao oficial docs/_sources/markdown"

## Clarifications

### Session 2026-05-19

- Q: Qual formato deve ter o entregavel principal da auditoria de gaps? → A: Produzir tres artefatos complementares: matriz de cobertura, relatorio de gaps e backlog priorizado.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Auditar cobertura real do roadmap inicial (Priority: P1)

Como mantenedor do SDK, quero cruzar as specs 001 a 008 com a documentacao oficial ja internalizada para enxergar, com rastreabilidade, o que o roadmap inicial cobre, o que cobre parcialmente e o que ainda nao esta representado nas slices ja especificadas.

**Why this priority**: Sem essa auditoria, o projeto continua evoluindo por sequencia local de slices sem uma verificacao unica de completude contra a base normativa oficial ja convertida no repositorio.

**Independent Test**: Pode ser validada verificando que existe uma analise unica e rastreavel que relaciona cada uma das specs 001 a 008 com capacidades, limites e lacunas identificadas nas fontes oficiais em `docs/_sources/markdown`.

**Acceptance Scenarios**:

1. **Given** que as specs 001 a 008 descrevem a progressao inicial do SDK, **When** a auditoria for concluida, **Then** cada slice deve indicar quais capacidades oficiais ja estao cobertas, quais permanecem parciais e quais ainda nao possuem slice dedicada.
2. **Given** que a documentacao oficial convertida contenha requisitos alem do que as specs 001 a 008 ja descrevem, **When** a comparacao for registrada, **Then** as lacunas devem ficar visiveis com referencia explicita a fonte oficial correspondente em uma matriz de cobertura e em um relatorio de gaps separados.

---

### User Story 2 - Priorizar gaps com impacto real no backlog (Priority: P2)

Como planejador do roadmap, quero transformar a diferenca entre o escopo das specs 001 a 008 e o acervo oficial em um backlog priorizado de gaps, para decidir as proximas slices com base em impacto funcional e proveniencia normativa, e nao apenas em intuicao local.

**Why this priority**: O repositorio ja possui evidencias oficiais sobre contingencia, consultas auxiliares, interoperabilidade, eventos adicionais, pos-autorizacao e extensoes de NFC-e que podem mudar a ordem ou o recorte das proximas fases.

**Independent Test**: Pode ser validada verificando que os gaps encontrados sao classificados por tema, impacto no SDK e prioridade recomendada, distinguindo claramente lacuna de runtime, lacuna documental, lacuna estadual e dependencia externa.

**Acceptance Scenarios**:

1. **Given** um gap identificado nas fontes oficiais, **When** ele for registrado no resultado da auditoria, **Then** deve ficar claro se ele exige nova slice de runtime, aprofundamento documental, complemento estadual ou apenas monitoramento normativo.
2. **Given** multiplos gaps com impactos diferentes, **When** o backlog priorizado for produzido, **Then** o resultado deve separar itens que bloqueiam a coerencia do roadmap daqueles que podem permanecer como trilhas posteriores, mantendo o backlog como artefato distinto da matriz e do relatorio.

---

### User Story 3 - Reduzir ambiguidade de fronteira e proveniencia (Priority: P3)

Como revisor tecnico do projeto, quero que a auditoria deixe explicitos conflitos de proveniencia, limites de acesso e fronteiras ainda abertas entre capacidade do SDK e habilitacao operacional externa, para evitar que futuras specs promovam como suporte algo que as fontes oficiais ainda nao fecham.

**Why this priority**: Parte relevante do acervo oficial trata disponibilidade, contingencia, credenciamento, certificados, CSC, QR Code, consultas e servicos auxiliares com escopos diferentes entre nucleo nacional e operacao por UF.

**Independent Test**: Pode ser validada verificando que a auditoria identifica conflitos, lacunas de fonte e dependencias externas sem colapsa-los em falso suporte confirmado.

**Acceptance Scenarios**:

1. **Given** uma capacidade cuja fonte oficial dependa de area restrita, variacao por UF ou complemento nao consolidado, **When** ela for analisada, **Then** a auditoria deve registrar a incerteza como fronteira explicita e nao como cobertura pronta.
2. **Given** uma spec anterior que trate um recorte como fora de escopo, **When** a auditoria encontrar fonte oficial relevante para esse mesmo tema, **Then** o resultado deve distinguir claramente gap real, deferimento deliberado e potencial mudanca futura de prioridade.

### Edge Cases

- Como tratar capacidades oficialmente documentadas que aparecem distribuídas entre MOC, FAQ, disponibilidade, webservices, manuais de contingencia, DANFE e materiais estaduais sem uma referencia unica?
- O que acontece quando uma spec anterior trata um tema como fora do recorte atual, mas a documentacao oficial mostra que ele e parte do fluxo operacional minimo?
- Como registrar gaps cuja fonte oficial existe, mas a conversao Markdown falhou ou a evidencia esta incompleta em uma UF especifica?
- Como separar, na classificacao final, lacunas de runtime do SDK, lacunas de tooling, lacunas documentais e dependencias que permanecem externas ao pacote?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST analisar de forma consolidada as specs 001 a 008 contra a documentacao oficial internalizada em `docs/_sources/markdown`.
- **FR-002**: O sistema MUST mapear, para cada spec analisada, quais capacidades oficiais estao cobertas, parcialmente cobertas, explicitamente deferidas ou ainda ausentes do roadmap especificado.
- **FR-003**: O sistema MUST identificar gaps funcionais, documentais e de proveniencia sem misturar ausencia de implementacao com dependencia operacional externa.
- **FR-004**: O sistema MUST classificar cada gap por tema funcional relevante ao SDK, incluindo ao menos contrato publico, modelagem e serializacao, assinatura, transporte, fluxo operacional de NFe, eventos, distribuicao DFe, manifestacao do destinatario, contingencia, NFC-e e complementos por UF.
- **FR-005**: O sistema MUST registrar, para cada gap encontrado, ao menos uma fonte oficial principal que justifique a lacuna ou uma observacao explicita de que a fonte convertida nao foi suficiente para concluir o item.
- **FR-006**: O sistema MUST distinguir gaps que exigem nova slice de runtime daqueles que exigem apenas aprofundamento documental, complemento editorial, monitoramento normativo ou decisao de fronteira.
- **FR-007**: O sistema MUST explicitar onde as specs 001 a 008 deixam fora do recorte capacidades que o acervo oficial trata como parte do fluxo operacional minimo, como polling de recibo, consulta auxiliar, contingencia, interoperabilidade, pos-autorizacao e superficies auxiliares relevantes.
- **FR-008**: O sistema MUST produzir um backlog priorizado de gaps, separando bloqueadores de coerencia do roadmap, extensoes relevantes de medio prazo e trilhas de observacao continua.
- **FR-008A**: O sistema MUST materializar o resultado da auditoria em tres artefatos complementares e rastreaveis: uma matriz de cobertura das specs 001 a 008, um relatorio de gaps e um backlog priorizado.
- **FR-009**: O sistema MUST manter rastreabilidade entre o gap identificado, as specs relacionadas e a fonte oficial correspondente, sem tratar fonte secundaria como base normativa principal.
- **FR-010**: O sistema MUST preservar a diferenca entre capacidade do SDK, habilitacao operacional externa, variacao estadual e material oficial ainda inconclusivo.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature nao muda entrypoints ESM, exportacoes publicas do pacote nem identificadores de runtime; ela produz uma auditoria de roadmap e cobertura normativa.
- **CC-002**: A feature pode criar ou atualizar artefatos de planejamento e pesquisa, mas MUST manter separada a conclusao sobre gaps do eventual trabalho futuro de implementacao em `src/`.
- **CC-003**: Se a auditoria apontar necessidade futura de mudanca breaking no contrato publico, o resultado MUST registrar risco, impacto de migracao e dependencia de semver, sem aplicar a mudanca nesta etapa.
- **CC-004**: A validacao minima desta feature MUST comprovar que a nova especificacao e sua trilha de checklist estao completas, rastreaveis e coerentes com as specs 001 a 008, com `docs/ROADMAP.md` e com as fontes oficiais internalizadas.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao `specs/001-research-sefaz-docs/spec.md`, `specs/002-project-features/spec.md`, `specs/003-public-package-contract/spec.md`, `specs/004-iniciar-sdk/spec.md`, `specs/005-add-digital-signing/spec.md`, `specs/006-add-soap-transport/spec.md`, `specs/007-nfe-operational-mvp/spec.md`, `specs/008-recipient-dfe-mvp/spec.md`, `docs/ROADMAP.md`, `docs/_meta/source-registry.md`, `docs/documentos-oficiais-portal-nfe.md` e os documentos oficiais convertidos sob `docs/_sources/markdown/official/`.
- **KS-002**: O sistema MUST priorizar, para a auditoria, fontes oficiais do Portal Nacional da NF-e e complementos estaduais ja internalizados, mantendo referencias secundarias apenas como apoio interpretativo nao normativo.
- **KS-003**: O sistema MUST registrar conflitos, falhas de conversao, lacunas de acesso e ambiguidades sempre que a documentacao oficial convertida nao permitir fechar com seguranca um gap ou uma prioridade.

### Key Entities *(include if feature involves data)*

- **Spec Coverage Record**: representa o registro que liga uma spec existente a capacidades oficiais cobertas, parciais, deferidas ou ausentes.
- **Gap Finding**: representa uma lacuna identificada pela auditoria, com tema, impacto, prioridade e justificativa normativa.
- **Coverage Matrix**: representa o artefato que consolida, para cada spec de 001 a 008, a cobertura percebida, os deferimentos e os pontos ausentes frente ao acervo oficial.
- **Provenance Link**: representa a conexao rastreavel entre uma conclusao da auditoria e a fonte oficial que a sustenta.
- **Gap Category**: representa a classificacao do gap como runtime, documental, estadual, normativo recorrente ou dependencia externa.
- **Priority Recommendation**: representa a ordem sugerida para tratar um gap no roadmap futuro, distinguindo bloqueador, proxima slice recomendada e trilha de observacao.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% das specs 001 a 008 possuem avaliacao explicita de cobertura contra a base oficial internalizada.
- **SC-002**: 100% dos gaps priorizados apontam pelo menos uma fonte oficial principal ou registram explicitamente a ausencia de evidencia conclusiva.
- **SC-002A**: 100% dos tres artefatos previstos, matriz de cobertura, relatorio de gaps e backlog priorizado, permanecem coerentes entre si e compartilham rastreabilidade comum para specs e fontes oficiais.
- **SC-003**: Um mantenedor consegue identificar em menos de 10 minutos quais lacunas mais importantes ainda separam o roadmap inicial das exigencias e superfícies oficiais ja internalizadas.
- **SC-004**: O resultado final distingue sem ambiguidade gaps de runtime, gaps documentais, dependencias externas e variacoes por UF para todos os itens priorizados.
- **SC-005**: A auditoria permite derivar a proxima rodada de slices sem reinterpretar manualmente as specs 001 a 008 nem reler integralmente o acervo oficial bruto.

## Assumptions

- As specs 001 a 008 representam a sequencia inicial de planejamento que precisa ser auditada antes de consolidar a proxima rodada de slices.
- O acervo em `docs/_sources/markdown` e suficiente para uma primeira rodada de gap analysis, mesmo quando algumas conversoes ou coberturas estaduais ainda tenham lacunas registradas.
- O objetivo desta feature e analitico e documental; implementacoes futuras de runtime serao tratadas em specs separadas.
- O resultado principal da auditoria sera distribuido em tres artefatos complementares, em vez de um unico relatorio monolitico.
- A auditoria pode reconhecer como deferimento deliberado temas que ja foram deixados fora do recorte anterior, desde que diferencie isso de gap nao percebido.
- Fontes estaduais e materiais auxiliares internos serao usadas apenas quando fecharem lacuna real deixada pelas fontes nacionais ou quando o proprio fluxo exigir evidencia por UF.
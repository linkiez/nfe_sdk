# Feature Specification: Add NFe Operational MVP

**Feature Branch**: `007-nfe-operational-mvp`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice do roadmap". Esta especificacao interpreta o pedido como o proximo slice pragmatico apos a base canonica, assinatura digital e transporte SOAP: fechar o primeiro MVP operacional de NFe em homologacao com API orientada a aplicacao.

## Clarifications

### Session 2026-05-18

- Q: Qual deve ser a entrada publica inicial das operacoes de alto nivel de NFe neste MVP? → A: Aceitar dados canonicos da operacao e deixar o SDK montar, serializar, assinar e transmitir o necessario.
- Q: Qual identificador deve ser aceito no primeiro slice de consulta de protocolo ou situacao da NFe? → A: Apenas chave de acesso da NFe.
- Q: No primeiro slice de autorizacao de uso, a API deve cobrir uma unica NFe por operacao ou ja aceitar lote com multiplas NF-e? → A: Aceitar ambos desde o inicio.
- Q: Quais manutencoes operacionais devem entrar como cobertura obrigatoria deste MVP de NFe? → A: Inutilizacao, cancelamento e carta de correcao.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Autorizar uma NFe em homologacao com API de alto nivel (Priority: P1)

Como integrador que possui os dados canonicos da operacao de NFe, quero uma operacao de alto nivel para autorizar uma NFe em homologacao e receber um resultado orientado a aplicacao, para nao orquestrar manualmente serializacao, assinatura, transporte e leitura bruta do retorno.

**Why this priority**: Este e o primeiro fluxo fim a fim com maior valor transversal do roadmap. Sem ele, o SDK continua exigindo que o integrador costure manualmente as camadas ja entregues.

**Independent Test**: Pode ser testada executando uma autorizacao homologada suportada a partir de dados e XML conhecidos, confirmando que o SDK devolve um resultado estruturado contendo situacao operacional, protocolo quando disponivel e evidencias suficientes para diagnostico.

**Acceptance Scenarios**:

1. **Given** dados canonicos validos de uma NF-e unica ou de um lote suportado e um executor operacional homologado disponivel, **When** o integrador solicita a autorizacao pela API de alto nivel, **Then** o SDK executa internamente a montagem, serializacao, assinatura e transmissao necessarias e devolve um resultado estruturado sem exigir XML bruto ou parsing manual do retorno.
2. **Given** uma resposta autorizada ou rejeitada do autorizador, **When** o SDK conclui a operacao, **Then** o resultado distingue sucesso operacional, rejeicao funcional e indisponibilidade de forma observavel para a aplicacao consumidora.

---

### User Story 2 - Consultar status e situacao sem inspecionar XML bruto (Priority: P2)

Como integrador que precisa acompanhar a operacao da NF-e, quero consultar status do servico e situacao ou protocolo do documento por meio de respostas orientadas a uso de aplicacao, para nao depender de leitura manual de XML e codigos espalhados.

**Why this priority**: Consultas de acompanhamento reduzem retrabalho operacional e sao parte explicita do escopo prioritario do MVP de NFe.

**Independent Test**: Pode ser testada chamando as consultas suportadas com entradas conhecidas e verificando que o SDK devolve estados compreensiveis, metadados relevantes e classificacao consistente sem exigir interpretacao manual do retorno bruto.

**Acceptance Scenarios**:

1. **Given** um ambiente homologado e a necessidade de verificar a disponibilidade do autorizador, **When** o integrador consulta o status do servico, **Then** o SDK devolve um retrato estruturado do estado operacional observavel.
2. **Given** uma chave de acesso de NFe suportada, **When** o integrador consulta a situacao ou o protocolo correspondente, **Then** o SDK devolve um resultado estruturado com os dados operacionais necessarios para acompanhamento do documento.

---

### User Story 3 - Executar manutencoes operacionais prioritarias da NFe com limites claros (Priority: P3)

Como integrador responsavel pelo ciclo de vida da NF-e, quero usar operacoes obrigatorias de inutilizacao, cancelamento e carta de correcao com respostas consistentes e limites de cobertura explicitos, para tratar o ciclo operacional minimo sem inferir suporte inexistente.

**Why this priority**: O roadmap define essas rotinas como parte do primeiro MVP operacional, mas elas dependem de fronteiras claras para nao misturar eventos, regras estaduais e capacidades futuras ainda nao estabilizadas.

**Independent Test**: Pode ser testada validando que inutilizacao, cancelamento e carta de correcao devolvem resultados operacionais consistentes, falham explicitamente fora do recorte suportado e permanecem documentadas com os limites corretos de cobertura.

**Acceptance Scenarios**:

1. **Given** uma NF-e elegivel para uma manutencao operacional suportada, **When** o integrador solicita inutilizacao, cancelamento ou carta de correcao, **Then** o SDK executa a operacao correspondente e devolve um resultado estruturado coerente com o retorno oficial.
2. **Given** uma tentativa de usar operacao, regra ou variacao ainda fora do recorte deste MVP, **When** a chamada for realizada, **Then** o SDK falha de forma explicita ou documenta claramente a indisponibilidade da capacidade sem simular cobertura completa.

### Edge Cases

- O que acontece quando a autorizacao retorna estado intermediario ou sem protocolo final observavel na mesma interacao?
- Como o SDK deve se comportar quando uma consulta recebe resposta valida de transporte, mas sem dados suficientes para conclusao operacional do documento?
- O que acontece quando cancelamento, carta de correcao ou inutilizacao sao solicitados para cenarios ainda fora do recorte nacional compartilhado ou dependentes de regra adicional por UF?
- Como o SDK diferencia erro de uso, rejeicao funcional, indisponibilidade e resposta protocolar invalida nas operacoes de alto nivel sem perder a evidencia do transporte subjacente?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST expor uma API de alto nivel para emissao e acompanhamento de NFe em homologacao sobre as camadas canonica, de assinatura e de transporte ja estabilizadas.
- **FR-002**: O sistema MUST permitir autorizar uma NF-e suportada em homologacao sem exigir que o consumidor orquestre manualmente serializacao, assinatura, resolucao de endpoint, montagem SOAP ou interpretacao de XML bruto.
- **FR-002A**: O sistema MUST aceitar como entrada publica inicial das operacoes de alto nivel os dados canonicos da operacao, e nao exigir XML previamente serializado ou assinado como contrato principal do MVP.
- **FR-002B**: O sistema MUST aceitar no fluxo inicial de autorizacao tanto uma unica NF-e quanto um lote suportado com multiplas NF-e, mantendo retorno estruturado coerente para os dois formatos.
- **FR-003**: O sistema MUST devolver resultados orientados a uso de aplicacao para autorizacao, distinguindo pelo menos sucesso operacional, rejeicao funcional, indisponibilidade e falhas de uso ou protocolo.
- **FR-004**: O sistema MUST permitir consulta de status do servico por meio de uma resposta estruturada e compreensivel para a aplicacao consumidora.
- **FR-005**: O sistema MUST permitir consulta de protocolo ou situacao do documento por chave de acesso da NF-e, devolvendo os dados operacionais necessarios para acompanhamento da NF-e.
- **FR-006**: O sistema MUST cobrir no MVP operacional as rotinas priorizadas de inutilizacao, cancelamento e carta de correcao com respostas estruturadas e consistentes com o retorno oficial suportado.
- **FR-006A**: O sistema MUST tratar inutilizacao, cancelamento e carta de correcao como cobertura obrigatoria deste MVP, e nao como backlog opcional dentro do mesmo feature.
- **FR-007**: O sistema MUST reutilizar a taxonomia e as evidencias da camada de transporte sem misturar classificacao de comunicacao com interpretacao de dominio fiscal alem do necessario para o uso da aplicacao.
- **FR-008**: O sistema MUST registrar claramente os limites deste MVP, incluindo operacoes, regras estaduais, contingencias e variacoes documentais ainda fora da cobertura inicial.
- **FR-009**: O sistema MUST fornecer exemplos executaveis e fixtures de regressao para os fluxos priorizados de NFe em homologacao.
- **FR-010**: O sistema MUST preservar rastreabilidade entre a API operacional do MVP, os documentos normativos relevantes e os limites reais declarados pelo SDK.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve preservar `package.json#exports["."]` e o import raiz como superficie publica principal; qualquer ampliacao do MVP operacional de NFe deve entrar de forma additive e explicitamente documentada.
- **CC-002**: A feature pode ampliar facades e contratos manuais em `src/`, mas MUST manter `src/classes`, `src/interfaces`, `src/types`, `src/enums` e os XSD como inventario interno e base normativa, sem promover a arvore gerada a contrato operacional principal.
- **CC-003**: Nao ha expectativa de mudanca breaking nesta entrega; se alguma operacao exigir alteracao incompatível de nomes exportados, formatos de retorno ou identificadores publicos, a migracao e o impacto semver MUST ser documentados antes da implementacao.
- **CC-004**: A validacao minima desta feature MUST cobrir Jest, lint, formatacao, typecheck, build, validacao do tarball publicado e regressao focada para os fluxos operacionais e fixtures homologados priorizados.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao [docs/roadmap-implantacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap-implantacao.md), [docs/nfe/emissao-nfe.md](/home/linkiez/Projetos/nfe_sdk/docs/nfe/emissao-nfe.md), o MOC 7.0 e os schemas oficiais de NF-e ja internalizados pelo repositorio, alem dos contratos e limites ja estabelecidos nas features 004, 005 e 006.
- **KS-002**: Referencias secundarias podem complementar exemplos operacionais, tabelas editoriais internas e consolidacoes documentais do repositorio, desde que permaneçam explicitamente nao normativas e nao substituam as fontes oficiais.
- **KS-003**: Lacunas de proveniencia, dependencias de credenciamento, exigencias por UF e qualquer divergencia entre cobertura nacional compartilhada e comportamento estadual MUST permanecer registradas como limites de escopo ou backlog, e nao como promessa implicita do MVP.

### Key Entities _(include if feature involves data)_

- **NFe Operational Request**: representa a entrada orientada a aplicacao para acionar um fluxo operacional de NFe suportado pelo MVP, baseada em dados canonicos suficientes para que o SDK monte e transmita o necessario para uma NF-e unica ou para um lote suportado.
- **NFe Authorization Batch**: representa um conjunto suportado de NF-e submetidas na mesma operacao de autorizacao do MVP.
- **NFe Authorization Outcome**: representa o resultado estruturado da autorizacao da NF-e, incluindo situacao operacional, protocolo quando houver e evidencias observaveis relevantes.
- **Service Status Snapshot**: representa o estado operacional retornado pela consulta de status do servico em formato adequado para uso de aplicacao.
- **Document Situation Result**: representa a resposta estruturada de consulta de protocolo ou situacao da NF-e por chave de acesso suportada.
- **Operational Maintenance Outcome**: representa o resultado estruturado de inutilizacao, cancelamento ou carta de correcao dentro do recorte suportado.
- **Operational Coverage Boundary**: representa os limites explicitos entre o que este MVP cobre agora e o que permanece para fases posteriores, variacoes por UF ou requisitos externos.
- **Operational Regression Evidence**: representa exemplos executaveis e fixtures que demonstram sucesso, rejeicao e indisponibilidade para os fluxos priorizados.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Um integrador consegue executar o primeiro fluxo operacional fim a fim de NFe em homologacao usando apenas a API publica do SDK em menos de 20 minutos, sem montar manualmente XML SOAP nem interpretar retorno bruto para concluir o resultado principal.
- **SC-002**: 100% das operacoes declaradas como cobertas neste MVP devolvem respostas estruturadas consistentes com o estado operacional observado ou falham explicitamente quando saem do recorte suportado.
- **SC-003**: 100% dos cenarios de regressao priorizados para autorizacao, status do servico, consulta de situacao e manutencoes operacionais suportadas possuem fixture reutilizavel ou exemplo executavel correspondente.
- **SC-003A**: 100% das tres manutencoes obrigatorias do MVP, inutilizacao, cancelamento e carta de correcao, possuem cobertura declarada por fixture reutilizavel ou exemplo executavel correspondente.
- **SC-004**: 100% das capacidades fora do recorte inicial, incluindo variacoes por UF e dependencias operacionais externas adicionais, permanecem registradas de forma explicita na documentacao e nos artefatos do feature.
- **SC-005**: O MVP operacional de NFe permanece additive sobre o contrato atual do pacote e passa por validacao automatizada verde para contrato, lint, formatacao, typecheck, build, testes e smoke do tarball.

## Assumptions

- O proximo slice do roadmap apos a infraestrutura de transporte e o fechamento do primeiro MVP operacional de NFe descrito na fase 5.
- As capacidades entregues nas features anteriores para montagem canonica, assinatura digital e transporte SOAP permanecem reutilizaveis como base do fluxo operacional de alto nivel.
- O primeiro MVP operacional continua restrito a homologacao e nao promete cobertura completa de producao, multi-UF ou contingencias estaduais especiais.
- O MVP deve priorizar a API de aplicacao e resultados estruturados, mesmo quando internamente reutilizar camadas mais proximas do XML ou do transporte.
- A entrada publica inicial do MVP sera orientada a dados canonicos da operacao, e nao a XML bruto previamente preparado pelo consumidor.
- O fluxo inicial de autorizacao deve aceitar tanto uma unica NF-e quanto lote suportado desde que o contrato de retorno permaneça observavel e consistente.
- A consulta inicial de situacao ou protocolo usara apenas a chave de acesso da NF-e como identificador publico suportado.
- Inutilizacao, cancelamento e carta de correcao fazem parte da cobertura obrigatoria deste MVP e nao devem ser reinterpretadas como extensoes futuras do mesmo slice.
- Credenciamento, certificados e demais precondicoes operacionais externas continuam necessarios para uso real, mas nao alteram o limite do que o SDK deve abstrair neste slice.
- Sempre que uma operacao priorizada depender de recorte adicional ainda nao estabilizado, o feature deve preferir declarar o limite explicitamente a insinuar cobertura operacional completa.

# Feature Specification: Inicio do Desenvolvimento Funcional do SDK

**Feature Branch**: `004-iniciar-sdk`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "iniciar desenvolvimento do sdk". Esta especificacao converte esse pedido na proxima slice prioritaria do roadmap: inaugurar a camada canonica de modelo e XML do SDK para que o pacote deixe de depender apenas da arvore gerada e passe a oferecer montagem e serializacao previsiveis para os documentos centrais.

## Clarifications

### Session 2026-05-18

- Q: Qual documento deve inaugurar a primeira camada canonica funcional do SDK nesta fase? → A: A primeira entrega funcional deve cobrir a NF-e de emissao principal como documento base da camada canonica e da serializacao XML inicial.
- Q: Qual recorte da NF-e deve entrar na primeira entrega funcional desta fase? → A: A primeira entrega funcional deve cobrir `NFe` e `enviNFe`, sem incluir ainda protocolo autorizado, retorno processado ou `nfeProc` nesta fase.
- Q: Qual nivel de validacao deve ser exigido na primeira slice funcional da camada canonica? → A: Esta fase deve exigir montagem canonica e serializacao XML deterministica com validacao estrutural por fixtures e checagens documentais, sem obrigar ainda validacao XSD automatizada completa.
- Q: Quais campos compartilhados criticos devem ser normalizados primeiro nesta fase? → A: Esta fase deve priorizar a normalizacao de ambiente, versao e identificadores iniciais de lote/documento, incluindo `Id` e correlatos de `enviNFe`, sem exigir ainda a chave de acesso completa.
- Q: Qual formato deve ter a superficie funcional publica inicial desta fase? → A: Esta fase deve publicar uma facade funcional enxuta no import raiz, com funcoes de montagem e serializacao para `NFe` e `enviNFe`, sem expor ainda subpaths ou builders como contrato principal.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Montar um documento canonico sem tocar na arvore gerada (Priority: P1)

Como integrador do SDK, quero montar os documentos fiscais centrais por meio de uma facade funcional enxuta do pacote para nao depender diretamente dos tipos crus gerados a partir dos XSD.

**Why this priority**: Esta e a primeira entrega funcional que transforma o pacote de inventario gerado em base utilizavel de SDK, reduzindo o acoplamento do consumidor ao output bruto do gerador.

**Independent Test**: Pode ser validada confirmando que um integrador consegue montar um documento central suportado usando apenas a superficie publica da nova camada canonica, sem importar arquivos gerados internos.

**Acceptance Scenarios**:

1. **Given** que um integrador precisa iniciar uma NF-e de emissao principal suportada, **When** ele usa a camada canonica do SDK, **Then** ele consegue obter uma estrutura coerente sem navegar pela arvore gerada interna.
2. **Given** que existam tipos gerados internos ainda presentes no repositorio, **When** o integrador utiliza a nova camada funcional, **Then** ele nao precisa conhecer detalhes do inventario gerado para iniciar a montagem do documento.

---

### User Story 2 - Serializar XML previsivel para os fluxos priorizados (Priority: P2)

Como mantenedor de integracao fiscal, quero serializar XML de forma deterministica a partir do modelo canonico para reduzir divergencias entre diferentes consumidores e facilitar validacao regressiva.

**Why this priority**: A camada funcional do SDK so gera valor real se a estrutura montada puder ser convertida em XML repetivel e compatível com os fluxos suportados.

**Independent Test**: Pode ser validada confirmando que entradas equivalentes produzem XML equivalente para o mesmo documento suportado, sem variacao estrutural inesperada entre execucoes.

**Acceptance Scenarios**:

1. **Given** que uma `NFe` ou um `enviNFe` canonico valido foi montado, **When** ele e serializado pelo SDK, **Then** o XML gerado segue uma forma previsivel e coerente com o fluxo suportado nesta fase.
2. **Given** que o mesmo documento seja serializado mais de uma vez sem alteracao de dados, **When** o processo for repetido, **Then** a saida permanece equivalente para fins de validacao e comparacao.

---

### User Story 3 - Normalizar campos compartilhados antes das proximas fases operacionais (Priority: P3)

Como revisor tecnico do projeto, quero que campos compartilhados e identificadores criticos sejam normalizados pela nova camada funcional para evitar que futuras fases operacionais reimplementem regras basicas de forma inconsistente.

**Why this priority**: Sem uma base comum para ambiente, versao, chave de acesso e identificadores correlatos, as proximas fases de assinatura, transporte e fluxos fiscais herdarao divergencias evitaveis.

**Independent Test**: Pode ser validada confirmando que os campos compartilhados priorizados recebem tratamento consistente em todos os documentos suportados pela nova camada canonica.

**Acceptance Scenarios**:

1. **Given** que um documento suportado use campos compartilhados criticos, **When** ele for preparado pela camada canonica, **Then** esses campos sao produzidos com regras consistentes entre os fluxos cobertos.
2. **Given** que uma futura fase reutilize a mesma base funcional, **When** ela ampliar a cobertura do SDK, **Then** ela parte de uma normalizacao comum em vez de reinterpretar manualmente os mesmos campos.

---

### Edge Cases

- Como a nova camada deve se comportar quando dados obrigatorios para um documento suportado estiverem ausentes ou inconsistentes?
- O que acontece quando um documento pode ser montado, mas a serializacao gera estrutura incompatível com o fluxo suportado?
- Como registrar campos ou familias de schema que continuam dependentes do inventario gerado bruto e ainda nao podem ser promovidos para a superficie funcional?
- Como evitar que o consumidor trate como suportado um documento ainda nao coberto pela camada canonica inicial?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST inaugurar uma camada funcional do SDK acima do inventario gerado para os documentos centrais priorizados nesta fase.
- **FR-001A**: O sistema MUST publicar essa primeira camada funcional como uma facade enxuta no import raiz do pacote, orientada a montagem e serializacao de `NFe` e `enviNFe`.
- **FR-002**: O sistema MUST permitir a montagem de pelo menos um conjunto inicial de documentos canonicamente suportados sem exigir que o consumidor manipule diretamente a arvore gerada interna.
- **FR-002A**: O sistema MUST tratar a NF-e de emissao principal como o primeiro documento suportado pela camada canonica inicial desta fase.
- **FR-002B**: O sistema MUST limitar o primeiro recorte funcional da NF-e a `NFe` e `enviNFe`, deixando `retEnviNFe`, `protNFe` e `nfeProc` fora do escopo desta fase.
- **FR-003**: O sistema MUST serializar os documentos canonicamente suportados em XML previsivel e consistente para o mesmo conjunto de dados de entrada.
- **FR-004**: O sistema MUST validar que o XML gerado para os documentos suportados permanece coerente com as expectativas documentais e estruturais do fluxo priorizado nesta fase.
- **FR-004A**: O sistema MUST tratar fixtures XML e checagens estruturais deterministicas como evidencia minima de regressao e consistencia nesta fase.
- **FR-004B**: O sistema MUST registrar a validacao XSD automatizada completa como ampliacao posterior, sem bloquea-la como obrigatoria para a primeira slice funcional.
- **FR-005**: O sistema MUST normalizar campos compartilhados criticos entre os documentos suportados, incluindo ambiente, versao e identificadores prioritarios desta fase.
- **FR-005A**: O sistema MUST priorizar nesta fase a normalizacao de ambiente, versao e identificadores iniciais de lote/documento, incluindo `Id` e correlatos de `enviNFe`.
- **FR-005B**: O sistema MUST tratar a chave de acesso completa como ampliacao posterior, sem torna-la obrigatoria para o primeiro recorte funcional desta fase.
- **FR-006**: O sistema MUST explicitar quais documentos e capacidades entram na nova camada funcional inicial e quais continuam fora do escopo funcional desta fase.
- **FR-007**: O sistema MUST registrar lacunas conhecidas sempre que uma familia de schema ou um campo necessario ainda depender de tratamento adicional antes de entrar na camada canonica.
- **FR-008**: O sistema MUST produzir evidencias reutilizaveis para regressao funcional dos documentos suportados, de modo que montagens e serializacoes futuras possam ser comparadas de forma consistente.
- **FR-009**: O sistema MUST manter esta fase restrita a montagem, serializacao e validacao estrutural dos documentos priorizados, sem incluir ainda assinatura digital, transporte ou comunicacao com autorizadores.
- **FR-010**: O sistema MUST permitir que as fases seguintes reutilizem a camada funcional inicial como base comum em vez de reconstruir manualmente a montagem e a serializacao dos mesmos documentos.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve definir explicitamente quais novos identificadores, facades ou pontos de acesso entram na superficie publicada do pacote e quais itens permanecem internos; qualquer ampliacao do contrato alem do que foi estabilizado na fase anterior deve ser deliberada e documentada.
- **CC-001A**: A ampliacao contratual desta fase deve ficar restrita a uma facade funcional enxuta no import raiz, sem promover subpaths, builders publicos dedicados ou arvore canonica interna como contrato principal.
- **CC-002**: A feature deve identificar quais familias de schema, regras de normalizacao e artefatos gerados sao atravessados pela camada canonica inicial e o que precisa permanecer compativel para consumidores atuais e fases seguintes.
- **CC-003**: Se a nova camada funcional exigir mudanca breaking no contrato publicado, a especificacao deve registrar expectativa de migracao, impacto de versao e estrategia de introducao; na ausencia dessa necessidade, a ampliacao deve ser additive e explicitamente delimitada.
- **CC-004**: A validacao minima desta fase deve cobrir regressao funcional, consistencia de serializacao, verificacao documental, checagens estruturais por fixtures e checagens de lint, formatacao, tipagem e build aplicaveis ao slice implementado.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao o roadmap de implantacao, os schemas suportados pelo repositorio, o contrato publico minimo do pacote ja estabilizado, a documentacao oficial consolidada em `docs/` e o manifesto gerado como evidencia de cobertura e lacunas.
- **KS-002**: Referencias secundarias podem apoiar interpretacoes de serializacao e exemplos de documentos, mas nao devem substituir o comportamento sustentado pelos schemas e pelas fontes oficiais rastreadas no repositorio.
- **KS-003**: Toda divergencia entre comportamento esperado, schema disponivel, documentacao oficial e cobertura real do SDK deve ser registrada como lacuna de proveniencia ou backlog funcional antes de ser tratada como suporte consolidado.

### Key Entities *(include if feature involves data)*

- **Canonical Document Model**: Representa a estrutura funcional estabilizada que o integrador usa para montar um documento suportado sem depender da arvore gerada bruta.
- **Root Functional Facade**: Representa a superficie publica inicial desta fase no import raiz, com funcoes enxutas de montagem e serializacao para `NFe` e `enviNFe`.
- **Initial NFe Functional Slice**: Representa o recorte funcional inicial desta fase, restrito a `NFe` e `enviNFe` como base para serializacao XML e expansoes posteriores.
- **Serialization Output**: Representa o XML gerado a partir do modelo canonico e usado como evidencia de consistencia estrutural.
- **Shared Field Rule**: Representa a regra comum aplicada a ambiente, versao, chave de acesso ou outros identificadores compartilhados entre documentos suportados.
- **Initial Shared Identifier Set**: Representa o conjunto inicial de campos compartilhados normalizados nesta fase, restrito a ambiente, versao e identificadores de lote/documento do recorte `NFe` e `enviNFe`.
- **Functional Coverage Gap**: Representa uma lacuna que impede determinada familia, campo ou documento de entrar na camada funcional inicial.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador consegue iniciar a montagem de um documento suportado pela nova camada funcional em menos de 10 minutos sem inspecionar a arvore gerada interna.
- **SC-002**: 100% dos documentos declarados como suportados nesta fase possuem evidencia rastreavel de montagem e serializacao no repositorio.
- **SC-003**: 100% dos XMLs gerados para os cenarios cobertos nesta fase permanecem estruturalmente equivalentes para entradas equivalentes.
- **SC-003A**: 100% dos cenarios declarados como suportados nesta fase possuem fixture XML reutilizavel ou evidencia estrutural equivalente no repositorio.
- **SC-004**: 100% dos campos compartilhados definidos como criticos nesta fase recebem tratamento consistente nos documentos cobertos.
- **SC-004A**: 100% dos cenarios cobertos por `NFe` e `enviNFe` reutilizam a mesma regra de ambiente, versao e identificadores iniciais de lote/documento.
- **SC-005**: Todas as lacunas relevantes entre a camada funcional, os schemas e a documentacao oficial ficam registradas como backlog, risco ou limite explicito de cobertura.
- **SC-006**: As fases seguintes de assinatura, transporte e fluxos operacionais conseguem reutilizar a camada funcional inicial sem precisar redefinir do zero a montagem e a serializacao dos documentos ja cobertos.

## Assumptions

- A fundacao do contrato publico minimo do pacote ja foi estabilizada e pode servir como base contratual para esta fase.
- Esta fase corresponde ao proximo corte priorizado do roadmap, focado em camada canonica de modelo e XML.
- A primeira entrega funcional nao precisa cobrir todos os documentos fiscais do repositorio; ela deve se concentrar primeiro na NF-e de emissao principal como recorte funcional inicial de maior valor transversal.
- O inventario gerado a partir dos XSD continua existindo como base tecnica, mas nao deve ser a experiencia principal oferecida ao consumidor nessa fase.
- A validacao desta fase permanece estrutural e funcional, sem incluir ainda assinatura digital, transporte SOAP, credenciamento ou emissao real em ambientes autorizadores.
- O primeiro recorte funcional da NF-e fica limitado a `NFe` e `enviNFe`, sem retorno processado, protocolo autorizado ou `nfeProc` nesta fase.
- A primeira slice funcional pode usar fixtures XML e checagens estruturais deterministicas como criterio suficiente de regressao, sem exigir ainda validacao XSD automatizada completa.
- A primeira slice funcional prioriza a normalizacao de ambiente, versao e identificadores iniciais de lote/documento antes de ampliar o escopo para chave de acesso completa e outros campos derivados.
- Existem fontes documentais e schemas suficientes no repositorio para iniciar a definicao do primeiro recorte funcional do SDK, mesmo que ainda haja lacunas registradas no manifesto e na documentacao.
- A evolucao do SDK deve permanecer compativel com pacote npm ESM, tipagem estrita e uso continuado da base gerada como fundacao interna.
- A primeira superficie funcional publica desta fase deve entrar pelo import raiz como facade enxuta, sem transformar builders internos ou subpaths em contrato estavel.
- O suporte declarado nesta fase precisa ser explicitamente limitado para evitar que consumidores assumam cobertura funcional mais ampla do que a realmente entregue.
